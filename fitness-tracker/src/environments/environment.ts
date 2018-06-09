// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDZukmAB1E3_FfgE_2qt3H6nCtvgDSPJo8',
    authDomain: 'ng-material-fitness-tracker.firebaseapp.com',
    databaseURL: 'https://ng-material-fitness-tracker.firebaseio.com',
    projectId: 'ng-material-fitness-tracker',
    storageBucket: 'ng-material-fitness-tracker.appspot.com',
    messagingSenderId: '75199756666'
  }
};
