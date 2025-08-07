Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./8.js");
var r = function (e) {
  function CastleAllianceRankItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleAllianceRankItem, e);
  CastleAllianceRankItem.prototype.customFillItem = function () {
    if (this.disp.basicButton == null) {
      s.ButtonHelper.initBasicButtons([this.disp]);
    }
    this.disp.mouseChildren = false;
    this.disp.mc_icon.gotoAndStop(this.itemVO.rankID);
    this.disp.toolTipText = "dialog_alliance_rank" + l.CastleAllianceData.getTextIDForRank(this.itemVO.rankID);
    this.checked = this.itemVO.isRankOfUser;
  };
  CastleAllianceRankItem.prototype.reset = function () {
    this.checked = false;
    e.prototype.reset.call(this);
  };
  Object.defineProperty(CastleAllianceRankItem.prototype, "checked", {
    set: function (e) {
      this.disp.gotoAndStop(e ? 2 : 1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceRankItem.prototype, "itemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceRankItem;
}(o.ScrollItem);
exports.CastleAllianceRankItem = r;
var l = require("./317.js");
a.classImplementsInterfaces(r, "MovieClip");