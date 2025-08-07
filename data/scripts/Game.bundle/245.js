Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./480.js");
var s = createjs.Point;
var r = function (e) {
  function BasicMapobjectVO() {
    var t = this;
    t._isVisibleOnMap = false;
    t._absAreaPosX = 0;
    t._absAreaPosY = 0;
    t._areaType = NaN;
    t._width = 0;
    t._height = 0;
    t._kingdomID = 0;
    t._mapID = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(BasicMapobjectVO, e);
  BasicMapobjectVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._width = o.int(t.width || "");
    this._height = o.int(t.height || "");
  };
  BasicMapobjectVO.prototype.parseAreaInfo = function (e) {
    this._absAreaPosX = o.int(e[1]);
    this._absAreaPosY = o.int(e[2]);
  };
  Object.defineProperty(BasicMapobjectVO.prototype, "isVisibleOnMap", {
    get: function () {
      return this._isVisibleOnMap;
    },
    set: function (e) {
      this._isVisibleOnMap = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapobjectVO.prototype, "absAreaPosX", {
    get: function () {
      return this._absAreaPosX;
    },
    set: function (e) {
      this._absAreaPosX = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapobjectVO.prototype, "absAreaPosY", {
    get: function () {
      return this._absAreaPosY;
    },
    set: function (e) {
      this._absAreaPosY = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapobjectVO.prototype, "absAreaPos", {
    get: function () {
      return new s(this._absAreaPosX, this._absAreaPosY);
    },
    set: function (e) {
      this._absAreaPosX = o.int(e.x);
      this._absAreaPosY = o.int(e.y);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapobjectVO.prototype, "x", {
    get: function () {
      return Object.getOwnPropertyDescriptor(a.AVisualVO.prototype, "x").get.call(this);
    },
    set: function (e) {
      this._x = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapobjectVO.prototype, "y", {
    get: function () {
      return Object.getOwnPropertyDescriptor(a.AVisualVO.prototype, "y").get.call(this);
    },
    set: function (e) {
      this._y = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapobjectVO.prototype, "areaType", {
    get: function () {
      return this._areaType;
    },
    set: function (e) {
      this._areaType = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapobjectVO.prototype, "width", {
    get: function () {
      return this._width;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapobjectVO.prototype, "height", {
    get: function () {
      return this._height;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapobjectVO.prototype, "kingdomID", {
    get: function () {
      return this._kingdomID;
    },
    set: function (e) {
      this._kingdomID = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapobjectVO.prototype, "mapID", {
    get: function () {
      return this._mapID;
    },
    set: function (e) {
      this._mapID = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapobjectVO.prototype, "actualVisClassName", {
    get: function () {
      return this.getVisualClassName();
    },
    enumerable: true,
    configurable: true
  });
  BasicMapobjectVO.prototype.resetVO = function () {};
  Object.defineProperty(BasicMapobjectVO.prototype, "areaKey", {
    get: function () {
      return this._areaKey;
    },
    enumerable: true,
    configurable: true
  });
  return BasicMapobjectVO;
}(a.AVisualVO);
exports.BasicMapobjectVO = r;