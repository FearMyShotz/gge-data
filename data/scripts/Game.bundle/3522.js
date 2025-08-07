Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./13.js");
var l = require("./14.js");
var c = require("./81.js");
var u = require("./301.js");
var d = function (e) {
  function SamuraiEventEndDialogItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SamuraiEventEndDialogItem, e);
  SamuraiEventEndDialogItem.prototype.initLoaded = function () {
    e.prototype.initLoaded.call(this);
    var t = this.getItemMc();
    t.mc_pointsIcon.mouseChildren = false;
    this._rewards = new u.SeasonLeagueSimpleRewardsComponent(t.mc_rewards, false, false);
  };
  SamuraiEventEndDialogItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._rewards.onShow();
  };
  SamuraiEventEndDialogItem.prototype.onHide = function () {
    this._rewards.onHide();
    e.prototype.onHide.call(this);
  };
  SamuraiEventEndDialogItem.prototype.fill = function () {
    this.updateTitle();
    this.updateRank();
    this.updatePoints();
    this._rewards.updateWithNewData(this.itemVO.rewards);
  };
  SamuraiEventEndDialogItem.prototype.updateTitle = function () {
    var e = 1;
    var t = "";
    switch (this.itemVO.itemType) {
      case p.SamuraiEventEndDialogItemVO.TYPE_SINGLEPLAYER:
        e = 1;
        t = "dialog_samuraiInvasionEnd_sub_singleplayer";
        break;
      case p.SamuraiEventEndDialogItemVO.TYPE_ALLIANCE:
        e = 2;
        t = "dialog_samuraiInvasionEnd_sub_alliance";
        break;
      case p.SamuraiEventEndDialogItemVO.TYPE_DAIMYO:
        e = 3;
        t = "dialog_samuraiInvasionEnd_sub_daimyo";
    }
    var i = this.getItemMc();
    i.mc_titleIcon.gotoAndStop(e);
    l.CastleComponent.textFieldManager.registerTextField(i.txt_title, new s.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId(t))).autoFitToBounds = true;
  };
  SamuraiEventEndDialogItem.prototype.updateRank = function () {
    var e = "";
    switch (this.itemVO.itemType) {
      case p.SamuraiEventEndDialogItemVO.TYPE_SINGLEPLAYER:
        e = "yourRanking";
        break;
      case p.SamuraiEventEndDialogItemVO.TYPE_ALLIANCE:
      case p.SamuraiEventEndDialogItemVO.TYPE_DAIMYO:
        e = "allianceRanking";
    }
    var t = this.getItemMc();
    t.mc_rankIcon.toolTipText = e;
    l.CastleComponent.textFieldManager.registerTextField(t.txt_rank, new a.LocalizedNumberVO(this.itemVO.rank)).autoFitToBounds = true;
  };
  SamuraiEventEndDialogItem.prototype.updatePoints = function () {
    var e = 1;
    var t = "";
    switch (this.itemVO.itemType) {
      case p.SamuraiEventEndDialogItemVO.TYPE_SINGLEPLAYER:
        t = "dialog_samuraiInvasion_samuraiPoints";
        break;
      case p.SamuraiEventEndDialogItemVO.TYPE_ALLIANCE:
        t = "dialog_samuraiInvasion_alliance_points";
        break;
      case p.SamuraiEventEndDialogItemVO.TYPE_DAIMYO:
        e = 2;
        t = "warEffortPoints";
    }
    var i = this.getItemMc();
    i.mc_pointsIcon.gotoAndStop(e);
    i.mc_pointsIcon.toolTipText = t;
    l.CastleComponent.textFieldManager.registerTextField(i.txt_points, new a.LocalizedNumberVO(this.itemVO.points)).autoFitToBounds = true;
  };
  Object.defineProperty(SamuraiEventEndDialogItem.prototype, "itemVO", {
    get: function () {
      return this.data;
    },
    enumerable: true,
    configurable: true
  });
  return SamuraiEventEndDialogItem;
}(c.AInfiniteScrollListItem);
exports.SamuraiEventEndDialogItem = d;
var p = require("./1697.js");
o.classImplementsInterfaces(d, "ICollectableRendererList");