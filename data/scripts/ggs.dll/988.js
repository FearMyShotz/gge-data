/*!
 * clipboard.js v2.0.1
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(t, n) {
  module.exports = n();
})(0, function () {
  return function (e) {
    var t = {};
    function __webpack_require__(n) {
      if (t[n]) {
        return t[n].exports;
      }
      var i = t[n] = {
        i: n,
        l: false,
        exports: {}
      };
      e[n].call(i.exports, i, i.exports, __webpack_require__);
      i.l = true;
      return i.exports;
    }
    __webpack_require__.m = e;
    __webpack_require__.c = t;
    __webpack_require__.i = function (e) {
      return e;
    };
    __webpack_require__.d = function (e, t, n) {
      if (!__webpack_require__.o(e, t)) {
        Object.defineProperty(e, t, {
          configurable: false,
          enumerable: true,
          get: n
        });
      }
    };
    __webpack_require__.n = function (e) {
      var t = e && e.__esModule ? function getDefault() {
        return e.default;
      } : function getModuleExports() {
        return e;
      };
      __webpack_require__.d(t, "a", t);
      return t;
    };
    __webpack_require__.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = 3);
  }([function (e, t, n) {
    var i;
    var a;
    var s;
    a = [e, n(7)];
    if ((s = typeof (i = function (e, t) {
      'use strict';

      var n = function _interopRequireDefault(e) {
        if (e && e.__esModule) {
          return e;
        } else {
          return {
            default: e
          };
        }
      }(t);
      var i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      };
      var a = function () {
        function defineProperties(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || false;
            i.configurable = true;
            if ("value" in i) {
              i.writable = true;
            }
            Object.defineProperty(e, i.key, i);
          }
        }
        return function (e, t, n) {
          if (t) {
            defineProperties(e.prototype, t);
          }
          if (n) {
            defineProperties(e, n);
          }
          return e;
        };
      }();
      var s = function () {
        function ClipboardAction(e) {
          (function _classCallCheck(e, t) {
            if (!(e instanceof t)) {
              throw new TypeError("Cannot call a class as a function");
            }
          })(this, ClipboardAction);
          this.resolveOptions(e);
          this.initSelection();
        }
        a(ClipboardAction, [{
          key: "resolveOptions",
          value: function resolveOptions(e = {}) {
            this.action = e.action;
            this.container = e.container;
            this.emitter = e.emitter;
            this.target = e.target;
            this.text = e.text;
            this.trigger = e.trigger;
            this.selectedText = "";
          }
        }, {
          key: "initSelection",
          value: function initSelection() {
            if (this.text) {
              this.selectFake();
            } else if (this.target) {
              this.selectTarget();
            }
          }
        }, {
          key: "selectFake",
          value: function selectFake() {
            var e = this;
            var t = document.documentElement.getAttribute("dir") == "rtl";
            this.removeFake();
            this.fakeHandlerCallback = function () {
              return e.removeFake();
            };
            this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || true;
            this.fakeElem = document.createElement("textarea");
            this.fakeElem.style.fontSize = "12pt";
            this.fakeElem.style.border = "0";
            this.fakeElem.style.padding = "0";
            this.fakeElem.style.margin = "0";
            this.fakeElem.style.position = "absolute";
            this.fakeElem.style[t ? "right" : "left"] = "-9999px";
            var i = window.pageYOffset || document.documentElement.scrollTop;
            this.fakeElem.style.top = i + "px";
            this.fakeElem.setAttribute("readonly", "");
            this.fakeElem.value = this.text;
            this.container.appendChild(this.fakeElem);
            this.selectedText = (0, n.default)(this.fakeElem);
            this.copyText();
          }
        }, {
          key: "removeFake",
          value: function removeFake() {
            if (this.fakeHandler) {
              this.container.removeEventListener("click", this.fakeHandlerCallback);
              this.fakeHandler = null;
              this.fakeHandlerCallback = null;
            }
            if (this.fakeElem) {
              this.container.removeChild(this.fakeElem);
              this.fakeElem = null;
            }
          }
        }, {
          key: "selectTarget",
          value: function selectTarget() {
            this.selectedText = (0, n.default)(this.target);
            this.copyText();
          }
        }, {
          key: "copyText",
          value: function copyText() {
            var e = undefined;
            try {
              e = document.execCommand(this.action);
            } catch (t) {
              e = false;
            }
            this.handleResult(e);
          }
        }, {
          key: "handleResult",
          value: function handleResult(e) {
            this.emitter.emit(e ? "success" : "error", {
              action: this.action,
              text: this.selectedText,
              trigger: this.trigger,
              clearSelection: this.clearSelection.bind(this)
            });
          }
        }, {
          key: "clearSelection",
          value: function clearSelection() {
            if (this.trigger) {
              this.trigger.focus();
            }
            window.getSelection().removeAllRanges();
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.removeFake();
          }
        }, {
          key: "action",
          set: function set(e = "copy") {
            this._action = e;
            if (this._action !== "copy" && this._action !== "cut") {
              throw new Error("Invalid \"action\" value, use either \"copy\" or \"cut\"");
            }
          },
          get: function get() {
            return this._action;
          }
        }, {
          key: "target",
          set: function set(e) {
            if (e !== undefined) {
              if (!e || (e === undefined ? "undefined" : i(e)) !== "object" || e.nodeType !== 1) {
                throw new Error("Invalid \"target\" value, use a valid Element");
              }
              if (this.action === "copy" && e.hasAttribute("disabled")) {
                throw new Error("Invalid \"target\" attribute. Please use \"readonly\" instead of \"disabled\" attribute");
              }
              if (this.action === "cut" && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) {
                throw new Error("Invalid \"target\" attribute. You can't cut text from elements with \"readonly\" or \"disabled\" attributes");
              }
              this._target = e;
            }
          },
          get: function get() {
            return this._target;
          }
        }]);
        return ClipboardAction;
      }();
      e.exports = s;
    }) == "function" ? i.apply(t, a) : i) !== undefined) {
      e.exports = s;
    }
  }, function (e, t, n) {
    var i = n(6);
    var a = n(5);
    e.exports = function listen(e, t, n) {
      if (!e && !t && !n) {
        throw new Error("Missing required arguments");
      }
      if (!i.string(t)) {
        throw new TypeError("Second argument must be a String");
      }
      if (!i.fn(n)) {
        throw new TypeError("Third argument must be a Function");
      }
      if (i.node(e)) {
        return function listenNode(e, t, n) {
          e.addEventListener(t, n);
          return {
            destroy: function () {
              e.removeEventListener(t, n);
            }
          };
        }(e, t, n);
      }
      if (i.nodeList(e)) {
        return function listenNodeList(e, t, n) {
          Array.prototype.forEach.call(e, function (e) {
            e.addEventListener(t, n);
          });
          return {
            destroy: function () {
              Array.prototype.forEach.call(e, function (e) {
                e.removeEventListener(t, n);
              });
            }
          };
        }(e, t, n);
      }
      if (i.string(e)) {
        return function listenSelector(e, t, n) {
          return a(document.body, e, t, n);
        }(e, t, n);
      }
      throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
    };
  }, function (e, t) {
    function E() {}
    E.prototype = {
      on: function (e, t, n) {
        var i = this.e ||= {};
        (i[e] ||= []).push({
          fn: t,
          ctx: n
        });
        return this;
      },
      once: function (e, t, n) {
        var i = this;
        function listener() {
          i.off(e, listener);
          t.apply(n, arguments);
        }
        listener._ = t;
        return this.on(e, listener, n);
      },
      emit: function (e) {
        var t = [].slice.call(arguments, 1);
        var n = ((this.e ||= {})[e] || []).slice();
        for (var i = 0, a = n.length; i < a; i++) {
          n[i].fn.apply(n[i].ctx, t);
        }
        return this;
      },
      off: function (e, t) {
        var n = this.e ||= {};
        var i = n[e];
        var a = [];
        if (i && t) {
          for (var s = 0, r = i.length; s < r; s++) {
            if (i[s].fn !== t && i[s].fn._ !== t) {
              a.push(i[s]);
            }
          }
        }
        if (a.length) {
          n[e] = a;
        } else {
          delete n[e];
        }
        return this;
      }
    };
    e.exports = E;
  }, function (e, t, n) {
    var i;
    var a;
    var s;
    a = [e, n(0), n(2), n(1)];
    if ((s = typeof (i = function (e, t, n, i) {
      'use strict';

      var a = _interopRequireDefault(t);
      var s = _interopRequireDefault(n);
      var r = _interopRequireDefault(i);
      function _interopRequireDefault(e) {
        if (e && e.__esModule) {
          return e;
        } else {
          return {
            default: e
          };
        }
      }
      var o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      };
      var l = function () {
        function defineProperties(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || false;
            i.configurable = true;
            if ("value" in i) {
              i.writable = true;
            }
            Object.defineProperty(e, i.key, i);
          }
        }
        return function (e, t, n) {
          if (t) {
            defineProperties(e.prototype, t);
          }
          if (n) {
            defineProperties(e, n);
          }
          return e;
        };
      }();
      var u = function (e) {
        function Clipboard(e, t) {
          (function _classCallCheck(e, t) {
            if (!(e instanceof t)) {
              throw new TypeError("Cannot call a class as a function");
            }
          })(this, Clipboard);
          var n = function _possibleConstructorReturn(e, t) {
            if (!e) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            if (!t || typeof t != "object" && typeof t != "function") {
              return e;
            } else {
              return t;
            }
          }(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));
          n.resolveOptions(t);
          n.listenClick(e);
          return n;
        }
        (function _inherits(e, t) {
          if (typeof t != "function" && t !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          if (t) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(e, t);
            } else {
              e.__proto__ = t;
            }
          }
        })(Clipboard, e);
        l(Clipboard, [{
          key: "resolveOptions",
          value: function resolveOptions(e = {}) {
            this.action = typeof e.action == "function" ? e.action : this.defaultAction;
            this.target = typeof e.target == "function" ? e.target : this.defaultTarget;
            this.text = typeof e.text == "function" ? e.text : this.defaultText;
            this.container = o(e.container) === "object" ? e.container : document.body;
          }
        }, {
          key: "listenClick",
          value: function listenClick(e) {
            var t = this;
            this.listener = (0, r.default)(e, "click", function (e) {
              return t.onClick(e);
            });
          }
        }, {
          key: "onClick",
          value: function onClick(e) {
            var t = e.delegateTarget || e.currentTarget;
            this.clipboardAction &&= null;
            this.clipboardAction = new a.default({
              action: this.action(t),
              target: this.target(t),
              text: this.text(t),
              container: this.container,
              trigger: t,
              emitter: this
            });
          }
        }, {
          key: "defaultAction",
          value: function defaultAction(e) {
            return getAttributeValue("action", e);
          }
        }, {
          key: "defaultTarget",
          value: function defaultTarget(e) {
            var t = getAttributeValue("target", e);
            if (t) {
              return document.querySelector(t);
            }
          }
        }, {
          key: "defaultText",
          value: function defaultText(e) {
            return getAttributeValue("text", e);
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.listener.destroy();
            if (this.clipboardAction) {
              this.clipboardAction.destroy();
              this.clipboardAction = null;
            }
          }
        }], [{
          key: "isSupported",
          value: function isSupported(e = ["copy", "cut"]) {
            var t = typeof e == "string" ? [e] : e;
            var n = !!document.queryCommandSupported;
            t.forEach(function (e) {
              n = n && !!document.queryCommandSupported(e);
            });
            return n;
          }
        }]);
        return Clipboard;
      }(s.default);
      function getAttributeValue(e, t) {
        var n = "data-clipboard-" + e;
        if (t.hasAttribute(n)) {
          return t.getAttribute(n);
        }
      }
      e.exports = u;
    }) == "function" ? i.apply(t, a) : i) !== undefined) {
      e.exports = s;
    }
  }, function (e, t) {
    var n = 9;
    if (typeof Element != "undefined" && !Element.prototype.matches) {
      var i = Element.prototype;
      i.matches = i.matchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector || i.webkitMatchesSelector;
    }
    e.exports = function closest(e, t) {
      while (e && e.nodeType !== n) {
        if (typeof e.matches == "function" && e.matches(t)) {
          return e;
        }
        e = e.parentNode;
      }
    };
  }, function (e, t, n) {
    var i = n(4);
    function _delegate(e, t, n, a, s) {
      var r = function listener(e, t, n, a) {
        return function (n) {
          n.delegateTarget = i(n.target, t);
          if (n.delegateTarget) {
            a.call(e, n);
          }
        };
      }.apply(this, arguments);
      e.addEventListener(n, r, s);
      return {
        destroy: function () {
          e.removeEventListener(n, r, s);
        }
      };
    }
    e.exports = function delegate(e, t, n, i, a) {
      if (typeof e.addEventListener == "function") {
        return _delegate.apply(null, arguments);
      } else if (typeof n == "function") {
        return _delegate.bind(null, document).apply(null, arguments);
      } else {
        if (typeof e == "string") {
          e = document.querySelectorAll(e);
        }
        return Array.prototype.map.call(e, function (e) {
          return _delegate(e, t, n, i, a);
        });
      }
    };
  }, function (e, t) {
    t.node = function (e) {
      return e !== undefined && e instanceof HTMLElement && e.nodeType === 1;
    };
    t.nodeList = function (e) {
      var n = Object.prototype.toString.call(e);
      return e !== undefined && (n === "[object NodeList]" || n === "[object HTMLCollection]") && "length" in e && (e.length === 0 || t.node(e[0]));
    };
    t.string = function (e) {
      return typeof e == "string" || e instanceof String;
    };
    t.fn = function (e) {
      return Object.prototype.toString.call(e) === "[object Function]";
    };
  }, function (e, t) {
    e.exports = function select(e) {
      var t;
      if (e.nodeName === "SELECT") {
        e.focus();
        t = e.value;
      } else if (e.nodeName === "INPUT" || e.nodeName === "TEXTAREA") {
        var n = e.hasAttribute("readonly");
        if (!n) {
          e.setAttribute("readonly", "");
        }
        e.select();
        e.setSelectionRange(0, e.value.length);
        if (!n) {
          e.removeAttribute("readonly");
        }
        t = e.value;
      } else {
        if (e.hasAttribute("contenteditable")) {
          e.focus();
        }
        var i = window.getSelection();
        var a = document.createRange();
        a.selectNodeContents(e);
        i.removeAllRanges();
        i.addRange(a);
        t = i.toString();
      }
      return t;
    };
  }]);
});