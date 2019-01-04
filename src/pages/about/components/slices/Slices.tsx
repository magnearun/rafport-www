import React, { Fragment } from 'react';
import _get from 'lodash/get';
import SlickCarousel from 'components/slick-carousel/SlickCarousel';
import { Divider, Card, Row, Col  } from 'antd';
import Img from 'gatsby-image'

import Affix from '../affix/Affix';
import Text from '../text/Text';

import s from './Slices.scss';
import Segment from 'components/segment/Segment';
import Grid from 'components/grid/Grid';
import Employees from 'components/employees/Employees';
import EmployeesItem from 'components/employees/Item';

interface ISlice {
  slice_type: string;
  primary?: any;
  items?: any;
}

interface IProps {
  slices: Array<ISlice>;
}

export default ({ slices = [] }: IProps) => {

  return (
    <div>
      {slices.map(({ slice_type, primary, items }: ISlice) => {
        switch (slice_type) {
          case 'affix':
            return(
              <Affix
                // image={(<Img fluid={_get(primary, 'affix_image.localFile.childImageSharp.fluid', {})} />)}
                text={_get(primary, 'text.html', {})}
                imagePosition={_get(primary, 'image_position', '')}
              />
            );
            break;
          case 'text':
            return(
              <Text
                content={_get(primary, 'content.html', {})}
                position={_get(primary, 'position', '')}
              />
            );
            break;
          case 'divider':
            return(
              <Segment>
                <Divider type="horizontal" />
              </Segment>
            );
            break;
          case 'employees':
            return(
                <Employees>
                  {items.map((item: any) => {
                      return (
                        <EmployeesItem item={item} />
                      );
                    })}
                </Employees>
            );
            break;
          case 'image_slider':
            return(
              <SlickCarousel>
                {items.map((item: any) => {
                    return (
                      <Img
                        fluid={_get(item, 'slider_image.localFile.childImageSharp.fluid')}
                        imgStyle={{
                          maxWidth: '500px',
                          maxHeight: '660px',
                        }}
                        className={s.image}
                      />
                    );
                  })}
              </SlickCarousel>
            );
            break;

          default:
              return <div/>;
            break;
        }
      })}
    </div>
  );
}