import { handleResponse, handleError } from "./apiUtils";

// 04/29/2022 12:30 am - SSN - APPSETTING_
let api_url = process.env.APPSETTING_API_URL;

if ( api_url == null ) {
  api_url = process.env.API_URL;
}

let baseUrl = api_url + "/authors/";

export function getAuthors() {
  return fetch( baseUrl )
    .then( handleResponse )
    .catch( handleError );
}
