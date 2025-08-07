Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./198.js");
var c = require("./73.js");
var u = require("./248.js");
var d = function (e) {
  function IncomingEquippableScrollItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(IncomingEquippableScrollItem, e);
  IncomingEquippableScrollItem.prototype.customFillItem = function () {
    a.MovieClipHelper.clearMovieClip(this._disp.mc_equipmentHolder);
    if (this.incomingEquippableScrollItemVO.equippableVO instanceof l.BasicEquipmentVO) {
      c.EquipmentIconHelper.addEquipmentIcon(this.incomingEquippableScrollItemVO.equippableVO, this._disp.mc_equipmentHolder, 60, 60);
      c.EquipmentIconHelper.addEquipmentIconHitBG(this._disp.mc_equipmentHolder, 75, 75);
    } else {
      this._disp.mc_equipmentHolder.addChild(u.CastleGemRenderer.renderAsset(this.incomingEquippableScrollItemVO.equippableVO));
    }
    this._disp.mc_equipmentHolder.mouseChildren = false;
  };
  Object.defineProperty(IncomingEquippableScrollItem.prototype, "incomingEquippableScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IncomingEquippableScrollItem, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return IncomingEquippableScrollItem;
}(s.ScrollItem);
exports.IncomingEquippableScrollItem = d;
r.classImplementsInterfaces(d, "MovieClip");