import React, { useEffect } from "react"
import View from "components/view/View";
import { getCurrentUser } from 'services/auth';
import Profile from "routes/profile/Profile";

const Details = () => {
  const { name, legalName, email } = getCurrentUser();

  return (
    <Profile />
  )
}

export default Details;