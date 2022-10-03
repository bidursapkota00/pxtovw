// @flow

export const appConfig = Object.freeze({
  // #region flag: set fetch mock or real fetch
  DEV_MODE: true,
  FETCH_MODE:false,
  // #endregion

  // #region API
  api: {
    fakeEndPoint: 'api/somewhere',
  },
  // #endregion

  // #region Meta / SEO
  metas: {
    viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
    fb:{
      app_id:'577074929906643'
    },
    seo: {
      title: 'McqHall',
      name: 'McqHall',
      description: 'Best Platform for Online MCQ Examination',
    },
    og: {
      title: 'McqHall | Promoting Digital Education',
      url: 'http://mcqhall.com',
      type: 'website',
      description: 'Best Platform for Online MCQ Examination',
      image: 'http://mcqhall.com/logo.png',
      site_name: 'McqHall',
      locale: 'en_US',
    },
    twitter:{
      card:'summary',
      site:'@mcqhall',
      creator:'@mcqhall',
      image:{
        alt:'Nepal Startup'
      },
    }
  },
  // #endregion
});

export default appConfig;
