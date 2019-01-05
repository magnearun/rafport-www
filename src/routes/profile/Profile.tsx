import React, { useEffect } from "react"
import View from "components/view/View";
import { getCurrentUser } from 'services/auth';

import {
 Avatar, Spin, Button, Skeleton, List
} from 'antd';

const Profile = () => {
  const { name, legalName, email } = getCurrentUser();

  return (
    <Skeleton avatar paragraph={{ rows: 4 }} loading={false}>
      <List.Item.Meta
        avatar={<Avatar icon="user" size="large" />}
        title={<a href="https://ant.design">Palli </a>}
        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
      />
    </Skeleton>
  )
}

export default Profile;