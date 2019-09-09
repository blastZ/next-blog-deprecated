import React from 'react';
import { useRouter } from 'next/router';

import Header from './Header';
import Main from './Main';
import ImageBar from './ImageBar';
import Footer from './Footer';
import AboutMe from './AboutMe';
import Subscribe from './Subscribe';

const Layout = ({ children }) => {
  const router = useRouter();
  const isIndex = router.route === '/';

  return (
    <>
      <Header siteTitle={'Stack Bunch'} />
      {!isIndex && <ImageBar title="Share Everything, Front-End, Back-End, Data Visualization, Linux." slogan />}
      <Main>{children}</Main>
      <ImageBar title="Never miss an article from stack-bunch." height={360}>
        <Subscribe />
      </ImageBar>
      <AboutMe />
      <Footer />
    </>
  );
};

export default Layout;
