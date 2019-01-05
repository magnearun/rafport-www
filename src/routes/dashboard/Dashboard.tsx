import React, { Children, Fragment } from "react"
import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';
import { Link, navigate } from "@reach/router"

const {
  Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

import LogoWhite from 'assets/images/rafport-white.png';
import LogoIcon from 'assets/images/rafport-icon.png';

import List from './List';
import { getCurrentUser, isLoggedIn, logout } from "services/auth";

import s from './Dashboard.scss';

class Dashboard extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed: boolean) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className={s.dashboard__logo}>
            {this.state.collapsed ? (
              <img src={LogoIcon} />
            ) : (
              <img src={LogoWhite} />
            )}
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {isLoggedIn() && (
            <Menu.Item key="1" onClick={() => navigate(`/app/dashboard`)}>
              <Icon type="file" />
              <span>Reikningar</span>
            </Menu.Item>
          )}
          {isLoggedIn() && (
            <Menu.Item key="2" onClick={() => navigate(`/app/profile`)}>
              <Icon type="user" />
              <span>Prófíll</span>
            </Menu.Item>
          )}
          {isLoggedIn() && (
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
              >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
          )}
          </Menu>
        </Sider>
        <Layout>
            {isLoggedIn() && (
          <Header className={s.dashboard__header}>
              <Icon
                className={s.dashboard__logout}
                type={'logout'}
                onClick={event => {
                  event.preventDefault()
                  logout(() => navigate(`/app/login`))
                }}
              />
          </Header>
            )}

          <Content style={{ margin: '60px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Rafport ehf
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;