Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./731.js");
var a = require("./317.js");
var s = require("./316.js");
var r = function () {
  function XMLNode(e, t = null) {
    this._data = e;
    this._parent = t;
  }
  XMLNode.prototype.elements = function (e) {
    var t = this;
    if (e === undefined) {
      e = "*";
    }
    if (e !== "*") {
      return this.child(e);
    }
    for (var n in this._data) {
      var i = this._data[n];
      if (Array.isArray(i)) {
        return i.map(function (e) {
          return s.createNodeProxy(e, t);
        });
      }
    }
    throw new Error("elements() can only be used when children is an array.");
  };
  XMLNode.prototype.child = function (e) {
    return s.createNodeProxy(this._data[e], this);
  };
  XMLNode.prototype.children = function () {
    var e = this;
    var t = [];
    for (var n in this._data) {
      if (this._data.hasOwnProperty(n)) {
        if (this._data[n] instanceof Array) {
          t = t.concat(this._data[n]);
        } else if (n.indexOf("@") !== 0) {
          t.push(this._data[n]);
        }
      }
    }
    return t.map(function (t) {
      return s.createNodeProxy(t, e);
    });
  };
  XMLNode.prototype.appendChild = function (e) {
    var t = a.fromXML(e);
    for (var n in t) {
      if (n.match(/[A-Za-z\-]+/)) {
        this._data ||= {};
        if (this._data[n]) {
          if (this._data[n] instanceof Array) {
            this._data[n].push(t[n]);
          } else {
            var i = Object.assign({}, this._data[n]);
            this._data[n] = [];
            this._data[n].push(i);
            this._data[n].push(t[n]);
          }
        } else {
          this._data[n] = t[n];
        }
      }
    }
  };
  XMLNode.prototype.attribute = function (e) {
    var t = XMLNode.stringCache.get(e);
    if (!t) {
      XMLNode.stringCache.set(e, t = "@" + e);
    }
    return this._data[t] || "";
  };
  XMLNode.prototype.text = function () {
    throw new Error("XMLNode.text not implemented.");
  };
  XMLNode.prototype.attributes = function () {
    var e = [];
    for (var t in this._data) {
      if (t.indexOf("@") === 0) {
        e.push(this._data[t]);
      }
    }
    return e;
  };
  XMLNode.prototype.length = function () {
    if (Array.isArray(this._data)) {
      return this._data.length;
    } else {
      return this.elements().length;
    }
  };
  Object.defineProperty(XMLNode.prototype, "parent", {
    get: function () {
      return this._parent;
    },
    enumerable: true,
    configurable: true
  });
  XMLNode.prototype.data = function () {
    return this._data;
  };
  XMLNode.prototype.clearAllNodes = function () {
    this._data = this._data instanceof Array ? [] : {};
  };
  XMLNode.prototype.toJSON = function () {
    return JSON.stringify(this._data);
  };
  XMLNode.prototype.toString = function () {
    return i.toXML(this._data);
  };
  XMLNode.stringCache = new Map();
  return XMLNode;
}();
exports.XMLNode = r;