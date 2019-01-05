import React from "react"

import {
  List, Avatar, Spin, Button, Skeleton,
} from 'antd';

import axios from 'axios';

const fakeDataUrl = 'https://randomuser.me/api/?results=20&inc=name,gender,email,nat&noinfo';

export default class VirtualizedList extends React.Component {

  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
  }

  componentDidMount() {
    this.getData((res) => {
      this.setState({
        initLoading: false,
        data: res.results,
        list: res.results,
      });
    });
  }

  getData = async (callback: (data: any) => void) => {
    const { data } = await axios(fakeDataUrl);
    console.log(data);

    callback(data);
  }

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat(Array(20).fill(0).map(() => ({ loading: true, name: {} }))),
    });
    this.getData((res) => {
      console.log('res, load more', res);

      const data = this.state.data.concat(res.results);
      this.setState({
        data,
        list: data,
        loading: false,
      }, () => {
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event('resize'));
      });
    });
  }

  render() {
    const { initLoading, loading, list } = this.state;
    const loadMore = !initLoading && !loading ? (
      <div style={{
        textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px',
      }}
      >
        <Button onClick={this.onLoadMore} type="primary">Fleiri</Button>
      </div>
    ) : null;

    console.log('list', list);


    return (
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={item => (
          <List.Item actions={[<a>Sækja</a>]}>
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar icon="file" />}
                title={<a href="https://ant.design">{item.name.last}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </Skeleton>
          </List.Item>
        )}
      />
    );
  }
}
