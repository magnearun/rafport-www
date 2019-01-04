import React from 'react';
import { Card } from 'antd';
import _get from 'lodash/get';
import Image from 'components/image/Image';

interface IProps {
  item: any;
}

export default function EmployeesItem({ item }: IProps) {

  return (
    <Card
      hoverable
      cover={<Image
        fluid={_get(item, 'avatar.localFile.childImageSharp.fluid')}
      />}
    >
      <Card.Meta
        title={_get(item, 'name.text', '')}
        description={<div>
          <p>{_get(item, 'job_title.text', '')}</p>
          <p>{`Sími: ${_get(item, 'phone.text', '')}`}</p>
          <p>{`Netfang: ${_get(item, 'email.text', '')}`}</p>
        </div>}
      />
  </Card>
  );
}
