Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CastleSelectableAllianceMemberScrollItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleSelectableAllianceMemberScrollItem, e);
  CastleSelectableAllianceMemberScrollItem.prototype.customFillItem = function () {
    e.prototype.customFillItem.call(this);
    this.itxt_might.textContentVO.numberValue = this.scrollItem.ownerInfoVO.might;
    this.disp.btn_selected.actLikeButton = true;
    this.disp.btn_selected.mouseChildren = false;
    this.setCheckBoxState();
  };
  CastleSelectableAllianceMemberScrollItem.prototype.setCheckBoxState = function () {
    if (this.scrollItem.selected) {
      this.disp.btn_selected.gotoAndStop(2);
      this.disp.btn_selected.toolTipText = "Bookmarks_alliance_participants_tooltip";
    } else {
      this.disp.btn_selected.gotoAndStop(1);
      this.disp.btn_selected.toolTipText = "Bookmarks_alliance_setParticipants_header";
    }
  };
  CastleSelectableAllianceMemberScrollItem.prototype.onMouseClick = function (t) {
    if (t.target == this.disp.btn_selected) {
      this.scrollItem.selected = !this.scrollItem.selected;
      this.setCheckBoxState();
    }
    e.prototype.onMouseClick.call(this, t);
  };
  return CastleSelectableAllianceMemberScrollItem;
}(require("./1355.js").CastleAllianceMemberScrollItem);
exports.CastleSelectableAllianceMemberScrollItem = a;
o.classImplementsInterfaces(a, "MovieClip");