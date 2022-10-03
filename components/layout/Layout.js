// @flow
/* eslint-disable quotes */

import React, { useEffect } from 'react';
import Head from 'next/head';
import theme from '../../config/theme';
import appConfig from '../../config/appConfig';
import { registerBeforeinstallprompt } from '../../util/sw';
import { initGA, logPageView } from '../../util/analytics';
import Router from 'next/router';
// #region constants
const flexibilityJsForIE = `
<!--[if !IE]-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/flexibility/2.0.1/flexibility.js"></script>
<!--[endif]-->
`;
const { accent } = theme;
const { og, seo, viewport } = appConfig.metas;
// #endregion

function Layout({ children }) {
  useEffect(() => {
    registerBeforeinstallprompt();
    Router.events.on('routeChangeComplete', () => {
      window.scrollTo(0, 0);
    });
    //   if (!window.GA_INITIALIZED) {
    //     initGA()
    //     window.GA_INITIALIZED = true
    //   }
    //   logPageView()
  }, []);

  return (
    <div>
      <Head>
        <meta name="viewport" content={viewport} />
        <meta charSet="utf-8" />
        <meta
          name="application-name"
          content="pixel to viewport width converter"
        />
        <meta name="theme-color" content={accent} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-title"
          content="pixel to view width converter"
        />
        <meta name="theme-color" content="#001F37" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        {/*<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>*/}
        {/*<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>*/}
        {/*<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>*/}
        {/*<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>*/}
        {/*<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>*/}
        {/*<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>*/}
        {/*<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>*/}
        {/*<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>*/}
        {/*<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>*/}
        {/*<link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>*/}
        {/*<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>*/}
        {/*<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>*/}
        {/*<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>*/}
        {/*<link rel="manifest" href="/manifest.json"/>*/}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <noscript>
        <div className="alert  alert-warning">
          <h4>Warning!</h4>
          <h5>Javascript is disabled for this website.</h5>
          <p>Javascript is required to use this website.</p>
          <p>
            {`You won't be able to navigate in this website until you activate javascript.`}
          </p>
        </div>
      </noscript>
      {children}
      <div dangerouslySetInnerHTML={{ __html: flexibilityJsForIE }} />
    </div>
  );
}

// #region statics
Layout.displayName = 'Layout';
// #endregion

export default Layout;
