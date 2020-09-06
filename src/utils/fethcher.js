export const ERROR_NO_CONNECTION = ['Sorry there is problem. Pleas refresh again.'];
export const RESPONSE_SUCCESS = 'SUCCESS';
export const RESPONSE_ERROR = 'ERROR';
export const RESPONSE_ERROR_CONNECTION = { status: RESPONSE_ERROR, errors: ERROR_NO_CONNECTION };
export const BASE_URL = window.BASE_URL_API;

export const responseError = (errors) => ({
  status: RESPONSE_ERROR,
  errors,
});

// const stringifyPrimitive = (v) => {
//     switch (typeof v) {
//         case 'string': return v;
//         case 'boolean': return v ? 'true' : 'false';
//         case 'number': return isFinite(v) ? v : '';
//         default: return '';
//     }
// };

// const stringify = (obj, sep, eq, name) => {
//     sep = sep || '&';
//     eq = eq || '=';
//     if (obj === null) {
//         obj = undefined;
//     }
//
//     if (typeof obj === 'object') {
//         return Object.keys(obj).map((k) => {
//             const ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
//             if (Array.isArray(obj[k])) {
//                 return obj[k].map((v) => ks + encodeURIComponent(stringifyPrimitive(v))).join(sep);
//             }
//             return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
//         }).join(sep);
//     }
//
//     return (!name) ? '' : encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
// };

const requestHeaders = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: `Bearer ${localStorage.getItem('Token')}`,
  },
};

export const fetcher = {
  get: (urlPath) => fetch(BASE_URL + urlPath, requestHeaders)
    .then((response) => response.json())
    .catch((error) => Promise.reject(error)),
  post: (urlPath, params) => fetch(BASE_URL + urlPath, {
    ...requestHeaders,
    body: JSON.stringify(params),
    method: 'POST',
  })
    .then((response) => response.json())
    .catch((error) => Promise.reject(new Error(error))),
  put: (urlPath, params) => fetch(BASE_URL + urlPath, {
    ...requestHeaders,
    body: JSON.stringify(params),
    method: 'PUT',
  })
    .then((response) => response.json())
    .catch((error) => Promise.reject(new Error(error))),
  delete: (urlPath, params) => fetch(BASE_URL + urlPath, {
    ...requestHeaders,
    body: JSON.stringify(params),
    method: 'DELETE',
  })
    .then((response) => response.json())
    .catch((error) => Promise.reject(new Error(error))),
};
