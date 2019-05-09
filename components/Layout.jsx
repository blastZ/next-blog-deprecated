import React from 'react';

import Header from './Header';

import Main from './Main';
import ImageBar from './ImageBar';
import Footer from './Footer';
import AboutMe from './AboutMe';
import Subscribe from './Subscribe';

const Layout = ({ children }) => (
  <>
    <Header siteTitle={'Stack Bunch'} />
    <ImageBar title={'Share Everything, Front-End, Back-End, Data Visualization, Linux.'} slogan />
    {/* <Links /> */}
    <Main>{children}</Main>
    <ImageBar title={'Never miss an article from stack-bunch.'} height={308}>
      <Subscribe />
    </ImageBar>
    <AboutMe />
    <Footer />
  </>
);

export default Layout;
