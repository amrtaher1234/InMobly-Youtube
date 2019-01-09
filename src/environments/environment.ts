// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
 config : {
    apiKey: 'AIzaSyBtSmkXzMI7ve7vOTx3aDTKddZJ-zGFOtY',
    authDomain: 'inmobly-ytube.firebaseapp.com',
    databaseURL: 'https://inmobly-ytube.firebaseio.com',
    projectId: 'inmobly-ytube',
    storageBucket: 'inmobly-ytube.appspot.com',
    messagingSenderId: '897628957847'
  },
  youtubeAPI : 'AIzaSyBIxUDftgsBPWkib-g1j3N6hklOyShuKfc',
  code_train : 'UCvjgXvBlbQiydffZU7m1_aw',
  // tslint:disable-next-line:max-line-length
  query_train : 'https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCsXVk37bltHxD1rDPwtNM8Q&key=AIzaSyBIxUDftgsBPWkib-g1j3N6hklOyShuKfc',
  url_video : 'https://www.youtube.com/watch?v=[[[[[[[[[[[[video id ]]]]]]]]]]]]]]]',
  // tslint:disable-next-line:max-line-length
  query_vidoe_detail : 'https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&key=AIzaSyBIxUDftgsBPWkib-g1j3N6hklOyShuKfc',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
