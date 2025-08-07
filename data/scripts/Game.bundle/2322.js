Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./4.js");
var l = function (e) {
  function BaronScrollItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(BaronScrollItem, e);
  BaronScrollItem.prototype.customFillItem = function () {
    e.prototype.customFillItem.call(this);
    var t = this.lordScrollItemVO.lordVO;
    if (t.lockedInCastleID >= 0 && r.CastleModel.userData.castleList.getCastleVOByID(t.lockedInCastleID) != null) {
      this.setToolTipText(new s.TextVO(r.CastleModel.userData.castleList.getCastleVOByID(t.lockedInCastleID).areaNameString));
    } else if (t.picID == 13) {
      this.setToolTipText(new a.LocalizedTextVO("dialog_baron_eiland_inactive"));
    } else {
      this.setToolTipText(new a.LocalizedTextVO("baron_toolTip_isFree"));
    }
  };
  return BaronScrollItem;
}(require("./1308.js").LordScrollItem);
exports.BaronScrollItem = l;
o.classImplementsInterfaces(l, "MovieClip");