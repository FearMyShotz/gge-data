Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./22.js");
var s = require("./72.js");
var r = require("./64.js");
var l = createjs.Point;
var c = function (e) {
  function AVisualVO() {
    var t = this;
    t._objectId = o.int(-Number.MAX_VALUE);
    t._wodId = -1;
    t._name = "";
    t._group = "";
    t._type = "";
    t._x = -1;
    t._y = -1;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(AVisualVO, e);
  AVisualVO.prototype.getVisualClassName = function () {
    var e = this.name + "_" + this.group;
    if (this.type != "") {
      e += "_" + this.type;
    }
    return e;
  };
  AVisualVO.prototype.destroy = function () {};
  AVisualVO.prototype.updateData = function () {};
  AVisualVO.prototype.dispatchValueObjectChanged = function () {
    this.dispatchEvent(new r.VisualVOEvent(r.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  AVisualVO.prototype.parseXmlNode = function (e) {
    this._wodId = o.int(a.CastleXMLUtils.getIntAttribute("wodID", e, -1));
    this._name = a.CastleXMLUtils.getStringAttribute("name", e);
    this._group = a.CastleXMLUtils.getStringAttribute("group", e);
    this._type = a.CastleXMLUtils.getStringAttribute("type", e);
    if (this._type == "-") {
      this._type = "";
    }
  };
  AVisualVO.prototype.parseServerObject = function (e) {
    this._objectId = o.int(e.shift());
    this._x = o.int(e.shift());
    this._y = o.int(e.shift());
  };
  Object.defineProperty(AVisualVO.prototype, "wodDataType", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AVisualVO.prototype, "objectId", {
    get: function () {
      return this._objectId;
    },
    set: function (e) {
      this._objectId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AVisualVO.prototype, "wodId", {
    get: function () {
      return this._wodId;
    },
    set: function (e) {
      this._wodId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AVisualVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    set: function (e) {
      this._name = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AVisualVO.prototype, "group", {
    get: function () {
      return this._group;
    },
    set: function (e) {
      this._group = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AVisualVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    set: function (e) {
      this._type = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AVisualVO.prototype, "x", {
    get: function () {
      return this._x;
    },
    set: function (e) {
      this._x = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AVisualVO.prototype, "y", {
    get: function () {
      return this._y;
    },
    set: function (e) {
      this._y = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AVisualVO.prototype, "pos", {
    get: function () {
      return new l(this.x, this.y);
    },
    enumerable: true,
    configurable: true
  });
  return AVisualVO;
}(s.CastleEventDispatcher);
exports.AVisualVO = c;