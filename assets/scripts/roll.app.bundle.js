(function () {
  'use strict';

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

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

  function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
  var current = 1,
      total = 10,
      delta = 5;
  var $example = document.getElementById('example');

  for (var i = current; i <= total; i++) {
    var node = {
      wrapper: document.createElement('li'),
      paragraph: document.createElement('p'),
      pre: document.createElement('pre'),
      code: document.createElement('code'),
      pagination: document.createElement('ul'),
      nav: document.createElement('nav')
    };
    var text = {
      label: document.createTextNode("Current page = ".concat(i)),
      index: document.createTextNode("".concat(JSON.stringify(Pagination(i, total, delta))))
    };
    node.paragraph.classList.add('example__label');
    node.pre.classList.add('example__code');
    node.nav.classList.add('example__pagination');
    node.paragraph.appendChild(text.label);
    node.wrapper.appendChild(node.paragraph);
    node.code.appendChild(text.index);
    node.pre.appendChild(node.code);
    node.wrapper.appendChild(node.pre);

    var _iterator = _createForOfIteratorHelper(Pagination(i, total, delta)),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var page = _step.value;
        var pNode = {
          listItem: document.createElement('li'),
          link: document.createElement('a'),
          span: document.createElement('span')
        };
        var pText = {
          page: document.createTextNode(page)
        };
        pNode.link.classList.add('btn');

        if (page === i) {
          pNode.listItem.classList.add('active');
        } else {
          pNode.link.href = "?page=".concat(page);
        }

        if (page === '...') {
          pNode.span.appendChild(pText.page);
          pNode.listItem.appendChild(pNode.span);
        } else {
          pNode.link.appendChild(pText.page);
          pNode.listItem.appendChild(pNode.link);
        }

        node.pagination.appendChild(pNode.listItem);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    node.nav.appendChild(node.pagination);
    node.wrapper.appendChild(node.nav);
    $example.appendChild(node.wrapper);
  }

}());
