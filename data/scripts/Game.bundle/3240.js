Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./3241.js");
var r = function (e) {
  function CollectableItemBoosterVO() {
    CONSTRUCTOR_HACK;
    return e.call(this, 1) || this;
  }
  n.__extends(CollectableItemBoosterVO, e);
  CollectableItemBoosterVO.prototype.parseServerObject = function (t) {
    e.prototype.parseServerObject.call(this, t);
    this._boosterVO = new s.BoosterVO(t.ID, t.D);
  };
  CollectableItemBoosterVO.prototype.parseXmlObject = function (e) {
    var t = e.split("+");
    var i = a.int(t[0]);
    var n = a.int(t[1]);
    var o = a.int(t[2]);
    this._boosterVO = new s.BoosterVO(i, n, o, 0);
  };
  CollectableItemBoosterVO.prototype.clone = function () {
    var t = e.prototype.clone.call(this);
    t.boosterVO = this.boosterVO.clone();
    return t;
  };
  CollectableItemBoosterVO.prototype.isCombineAbleWith = function (e) {
    return false;
  };
  CollectableItemBoosterVO.prototype.getTextfieldText = function () {
    if (this.boosterVO) {
      return o.TimeStringHelper.getShortTimeStringBySeconds(this.boosterVO.duration);
    } else {
      return "";
    }
  };
  Object.defineProperty(CollectableItemBoosterVO.prototype, "boosterVO", {
    get: function () {
      return this._boosterVO;
    },
    set: function (e) {
      this._boosterVO = e;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemBoosterVO.__initialize_static_members = function () {
    CollectableItemBoosterVO.SERVER_KEY = "B";
    CollectableItemBoosterVO.XML_KEY = "boosters";
  };
  return CollectableItemBoosterVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemBoosterVO = r;
r.__initialize_static_members();