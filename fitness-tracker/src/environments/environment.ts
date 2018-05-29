// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDZukmAB1E3_FfgE_2qt3H6nCtvgDSPJo8",
    authDomain: "ng-material-fitness-tracker.firebaseapp.com",
    databaseURL: "https://ng-material-fitness-tracker.firebaseio.com",
    projectId: "ng-material-fitness-tracker",
    storageBucket: "ng-material-fitness-tracker.appspot.com",
    messagingSenderId: "75199756666"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
