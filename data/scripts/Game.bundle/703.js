Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./22.js");
var a = require("./4.js");
var s = require("./245.js");
var r = function (e) {
  function EmptyMapobjectVO() {
    var t = e.call(this) || this;
    t._group = "Mapobject";
    t._name = "Empty";
    t._kingdomID = -1;
    t._isVisibleOnMap = true;
    return t;
  }
  n.__extends(EmptyMapobjectVO, e);
  EmptyMapobjectVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._kingdomID = parseInt(o.CastleXMLUtils.getValueOrDefault("kIDs", t, "-1"));
  };
  EmptyMapobjectVO.prototype.fillByListInit = function (e, t, i, n) {
    this._wodId = e;
    this._type = t;
    this._width = i;
    this._height = n;
  };
  Object.defineProperty(EmptyMapobjectVO.prototype, "actualVisClassName", {
    get: function () {
      return this.getVisualClassName() + "_" + a.CastleModel.kingdomData.activeKingdomVO.kingdomName;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.BasicMapobjectVO.prototype, "actualVisClassName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return EmptyMapobjectVO;
}(s.BasicMapobjectVO);
exports.EmptyMapobjectVO = r;