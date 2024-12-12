import React from 'react';
import {Footer, Header, SubHeader} from '../components';
const HeaderLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <SubHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default HeaderLayout;
