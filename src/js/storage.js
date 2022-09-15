/**
 * @param {string} key - key value
 * @param {number|Object} value - key value
 */
function setData(key, value) {
  localStorage.setItem(key, value);
}

/**
 *
 * @param {string} key - key value
 */
function removeData(key) {
  localStorage.removeItem(key);
}

/**
 *
 * @param {string} key - key value
 * @returns {number|Object}
 */
function getData(key) {
  return localStorage.getItem(key);
}

export { setData, getData, removeData };
