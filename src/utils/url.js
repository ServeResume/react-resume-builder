
/**
 * Get query parameter by name.
 * This will return empty string if query parameter not found.
 *
 * @param name
 * @param url
 * @return {String}
 */
export const getQueryParameterByName = (name, url = window.location.href) => {
  name = name.replace(/[[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return '';
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
