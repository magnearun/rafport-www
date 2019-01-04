import React, { Fragment } from 'react';

import Heading from 'components/heading/Heading';
// import Img from 'gatsby-image'
import s from './Hero.scss';
import { Button } from 'antd';
import { Carousel } from 'antd';

interface IProps {
  title: string;
  description: string;
  image: any;
}

export default class Hero extends React.PureComponent<IProps> {

  heading: any = React.createRef();
  description: any = React.createRef();

  public render() {
    const { title, description, image } = this.props;

    return (
      <div className={s.hero}>
          <Carousel>
              {image}
          </Carousel>

      <div className={s.hero__overlay}>
        <div className={s.hero__row}>

          <div className={s.hero__content}>
            <Heading border={false}>{title}</Heading>
            <p className={s.hero__description} ref={this.description}>
              {description}
            </p>
            <div className={s.hero__buttons}>
              <Button type="primary" size="large">Lorem ipsum</Button>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
