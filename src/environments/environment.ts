// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {HttpHeaders} from '@angular/common/http';
const token = 'BQBhDFN1M8ZSFetobsWDNqVRuIfkhyPmehv1AYRHRSDVTZ5MGCGXZuJhKxZgO1jIH5KacP7W3byG-gDF65E';
export const environment = {
  production: false,
  headers: new HttpHeaders({
    Authorization: `Bearer ${token}`
  })
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
