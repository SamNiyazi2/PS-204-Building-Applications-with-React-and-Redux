// 04/29/2022 08:13 am - SSN - Copied from authoirApi.js

import { handleResponse, handleError } from "./apiUtils";

let api_url = process.env.APPSETTING_API_URL;

if ( api_url == null ) {
  api_url = process.env.API_URL;
}

let baseUrl = api_url + "/config/";

export function getConfig() {
  return fetch( baseUrl )
    .then( handleResponse )
    .catch( handleError );
}
