function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/**
 * Generates an array to be used for rendering of pagination - suitable for use with adonisjs
 * @param {number} current - The current page
 * @param {number} total - Last page of the collection
 * @param {number} delta - Spread of indices to represent in the collection
 * @returns {array} Array of page indices within the scoped range complimented by first and last page and ellipsises used as separators
 */

function Pagination(current, total) {
  var delta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;

  var noop = function noop(v, indice) {
    return total === 1 || indice % total === 1 ? [] : v === 1 ? [v, '...'] : ['...', v];
  };

  if (delta > total) delta = total;
  var indice = current - Math.floor(delta / 2);
  indice = Math.max(indice, 1);
  indice = Math.min(indice, 1 + (total - delta));
  return [].concat(_toConsumableArray(noop(1, indice)), _toConsumableArray(Array.from({
    length: delta
  }, function () {
    return indice++;
  })), _toConsumableArray(noop(total, indice)));
}

export default Pagination;
