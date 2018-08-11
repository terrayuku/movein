// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebase: {
    apiKey: 'AIzaSyAfMxBQXQgAqliTX6dzUKDOS0cBrezkhUM',
    authDomain: 'movein-faf3b.firebaseapp.com',
    databaseURL: 'https://movein-faf3b.firebaseio.com',
    projectId: 'movein-faf3b',
    storageBucket: 'movein-faf3b.appspot.com',
    messagingSenderId: '715274898736'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
