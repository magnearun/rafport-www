
import React from 'react';

import AppLayout from 'components/app-layout/AppLayout';
import Dashboard from 'routes/dashboard/Dashboard';

export default ({ children, pageContext }: any) => {
  if (pageContext.layout === "app") {
    return <Dashboard>{children}</Dashboard>;
  }
  return <AppLayout>{children}</AppLayout>;
}