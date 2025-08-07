Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./41.js");
var s = require("./50.js");
var r = require("./315.js");
var o = function (e) {
  function HTMLTextVO() {
    var t = e !== null && e.apply(this, arguments) || this;
    t.appendText = false;
    t.maxChilds = 1;
    t.onLocalizedTextVOChanged = function () {
      t.propertyChangedSignal.dispatch();
    };
    return t;
  }
  i.__extends(HTMLTextVO, e);
  Object.defineProperty(HTMLTextVO.prototype, "localizedTextVOList", {
    get: function () {
      return this._localizedTextVOList;
    },
    enumerable: true,
    configurable: true
  });
  HTMLTextVO.prototype.addLocalizedTextVO = function (e, t = false) {
    this._localizedTextVOList ||= [];
    this._localizedTextVOList.push(e);
    while (this._localizedTextVOList.length > this.maxChilds) {
      this._localizedTextVOList = this._localizedTextVOList.slice(1, this._localizedTextVOList.length);
    }
    if (t) {
      this.appendText = true;
      this.propertyChangedSignal.dispatch();
    }
  };
  HTMLTextVO.prototype.dispose = function () {
    e.prototype.dispose.call(this);
    if (this._localizedTextVOList != null) {
      this._localizedTextVOList.forEach(function (e) {
        return e.propertyChangedSignal.removeAll();
      });
      this._localizedTextVOList = null;
    }
  };
  HTMLTextVO.prototype.compose = function () {
    return a.Localize.htmlText(this);
  };
  Object.defineProperty(HTMLTextVO.prototype, "localizedTextVO", {
    get: function () {
      this._localizedTextVOList[0].propertyChangedSignal.add(this.onLocalizedTextVOChanged);
      return this._localizedTextVOList[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HTMLTextVO.prototype, "htmlText", {
    get: function () {
      this._htmlText ||= r.XML("<content></content>");
      return this._htmlText;
    },
    set: function (e) {
      this._htmlText = e;
    },
    enumerable: true,
    configurable: true
  });
  return HTMLTextVO;
}(s.AbstractTextContentVO);
exports.HTMLTextVO = o;