Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./43.js");
var d = require("./93.js");
var p = function (e) {
  function CastleAllianceMemberScrollItem(t) {
    var i = e.call(this, t) || this;
    t.mc_name.actLikeButton = true;
    var n = o.GoodgameTextFieldManager.getInstance();
    i.itxt_playerName = n.registerTextField(t.mc_name.txt_name, new c.TextVO(""));
    t.mc_name.actLikeButton = true;
    t.mc_name.mouseChildren = false;
    i.itxt_level = n.registerTextField(t.txt_level, new l.LocalizedNumberVO(0));
    i.itxt_distance = n.registerTextField(t.txt_distance, new l.LocalizedNumberVO(0));
    i.itxt_might = n.registerTextField(t.txt_might, new l.LocalizedNumberVO(0));
    return i;
  }
  n.__extends(CastleAllianceMemberScrollItem, e);
  CastleAllianceMemberScrollItem.prototype.customFillItem = function () {
    if (this.itxt_playerName.textContentVO) {
      this.itxt_playerName.textContentVO.stringValue = this.memberInfo.playerName;
    }
    this.itxt_level.textContentVO.numberValue = this.memberInfo.playerLevel;
    this.itxt_distance.textContentVO.numberValue = this.scrollItem.distanceToTarget;
    this.itxt_might.textContentVO.numberValue = this.scrollItem.ownerInfoVO.might;
    this.disp.mc_rank.mouseChildren = false;
    this.disp.mc_rank.toolTipText = r.Localize.text("dialog_alliance_rank" + h.CastleAllianceData.getTextIDForRank(this.memberInfo.allianceRank));
    this.disp.mc_rank.icon_rank.gotoAndStop(this.memberInfo.allianceRank + 1);
  };
  CastleAllianceMemberScrollItem.prototype.onMouseClick = function (t) {
    e.prototype.onMouseClick.call(this, t);
    if (t.target == this.disp.mc_name) {
      CastleAllianceMemberScrollItem.dialogHandler.registerDialogsWithTypeAndDefaultValues(C.CastlePlayerInfoDialog, new d.CastlePlayerInfoDialogProperties(this.memberInfo.playerID), u.CastleDialogConsts.DIALOG_TYPE_SINGLE);
    }
  };
  Object.defineProperty(CastleAllianceMemberScrollItem.prototype, "memberInfo", {
    get: function () {
      return this._scrollItemVO.ownerInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceMemberScrollItem.prototype, "scrollItem", {
    get: function () {
      return this._scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceMemberScrollItem, "dialogHandler", {
    get: function () {
      return g.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceMemberScrollItem;
}(a.ScrollItem);
exports.CastleAllianceMemberScrollItem = p;
var h = require("./317.js");
var g = require("./9.js");
var C = require("./94.js");
s.classImplementsInterfaces(p, "MovieClip");