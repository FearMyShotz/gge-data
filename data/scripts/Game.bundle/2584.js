Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./109.js");
var l = function (e) {
  function PlaceholderMapobjectVO() {
    return e.call(this) || this;
  }
  n.__extends(PlaceholderMapobjectVO, e);
  PlaceholderMapobjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i = false) {
    this.kingdomID = this.kingdomID > -1 ? this.kingdomID : a.WorldClassic.KINGDOM_ID;
    var n = new r.CastleDisplayObjectClipContainer();
    var o = this.getBackgroundClip();
    o.x -= o.asDisplayObject().width / 2 + 4;
    o.y -= 30;
    n.addItem(o);
    return n;
  };
  PlaceholderMapobjectVO.prototype.parseAreaInfo = function (e) {
    this._areaType = e[0];
    this._absAreaPosX = e[1];
    this._absAreaPosY = e[2];
    this._isVisibleOnMap = false;
  };
  Object.defineProperty(PlaceholderMapobjectVO.prototype, "areaNameString", {
    get: function () {
      return s.Localize.text("kingdom_emptyTile");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return PlaceholderMapobjectVO;
}(require("./205.js").ContainerBuilderMapobjectVO);
exports.PlaceholderMapobjectVO = l;
var c = require("./101.js");
o.classImplementsInterfaces(l, "IDetailViewAble", "IWorldmapObjectVO");