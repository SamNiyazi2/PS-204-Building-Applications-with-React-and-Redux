import { handleResponse, handleError } from "./apiUtils";

// 04/29/2022 12:30 am - SSN - APPSETTING_
let baseUrl = process.env.API_URL + "/authors/";

if ( baseUrl == null ) {
  baseUrl = process.env.APPSETTING_API_URL + "/authors/";
}

export function getAuthors() {
  return fetch( baseUrl )
    .then( handleResponse )
    .catch( handleError );
}
