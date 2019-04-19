import React from 'react';

import Header from './Header';

import Main from './Main';
import ImageBar from './ImageBar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Header siteTitle={'Stack Bunch'} />
    <ImageBar content={'Share Everything, Front-End, Back-End, Data Visulization, Linux.'} />
    {/* <Links /> */}
    <Main>{children}</Main>
    <Footer />
  </>
);

export default Layout;
