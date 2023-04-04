import cookie from "js-cookie";

/**
 * 
 * @param {string} name 
 * @param {string | object} value 
 * @param {object} options - path (string): cookie path, use / as the path if you want your cookie to be accessible on all pages
                           - expires (Date): absolute expiration date for the cookie
                           - maxAge (number): relative max age of the cookie from when the client receives it in seconds
                           - domain (string): domain for the cookie (sub.domain.com or .allsubdomains.com)
                           - secure (boolean): Is only accessible through HTTPS?
                           - httpOnly (boolean): Is only the server can access the cookie?
                           - sameSite (boolean|none|lax|strict): Strict or Lax enforcement
 */
export const setCookie = (
  name: string,
  value: string,
  options: {
    [key: string]: string | number;
  } = {},
): void => {
  cookie.set(name, value, options);
};

export const getCookie = (name: string): string | undefined => {
  return cookie.get(name);
};

export const clearCookie = (name: string): void => {
  cookie.remove(name);
};
