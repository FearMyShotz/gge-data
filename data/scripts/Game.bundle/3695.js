Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./4.js");
var u = require("./748.js");
var d = require("./43.js");
var p = require("./149.js");
var h = require("./136.js");
var g = function () {
  function CastleEilandAllianceRankingItem(e) {
    this._rank = 0;
    this._amount = 0;
    this._disp = e;
    this._disp.mouseChildren = true;
    this.disp.mc_kingIndicator.visible = false;
    this.disp.mc_kingIndicator.toolTipText = "dialog_eiland_currentStormlord_tooltip";
    this.clearTextfields();
  }
  CastleEilandAllianceRankingItem.prototype.onMouseOver = function (e) {};
  CastleEilandAllianceRankingItem.prototype.onMouseOut = function (e) {};
  CastleEilandAllianceRankingItem.prototype.onClick = function (e) {
    if (this.isOwnAlliance()) {
      m.CastleDialogHandler.getInstance().registerDefaultDialogs(E.CastleAllianceDialog, new h.CastleAllianceDialogProperties());
    } else {
      m.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(O.CastleAllianceInfoDialog, new p.CastleAllianceInfoDialogProperties(this._allianceInfo.allianceId), d.CastleDialogConsts.DIALOG_TYPE_SINGLE);
    }
  };
  CastleEilandAllianceRankingItem.prototype.update = function (e, t, i) {
    var n = new u.AllianceHighscoreInfoVO();
    n.fillFromParamObject(e[3]);
    this._allianceInfo = n;
    this._rank = l.int(e[1]);
    this._amount = l.int(e[2]);
    this.clearTextfields();
    var o = C.CastleGame.BODY_FONT;
    if (i.toLowerCase() == this._allianceInfo.allianceName.toLowerCase() || i == this._rank.toString()) {
      o = C.CastleGame.HEADER_FONT;
    }
    this.disp.txt_rank.textFormat.font = o;
    this.disp.txt_name.textFormat.font = o;
    this.disp.txt_level.textFormat.font = o;
    this.disp.txt_members.textFormat.font = o;
    this.disp.txt_alliancePoints.textFormat.font = o;
    this.disp.bg.gotoAndStop(this._rank == 1 ? 3 : this._rank <= _.CastleEilandRewardsVO.TOPX_MIN_RANK ? 2 : 1);
    this.textFieldManager.registerTextField(this.disp.txt_rank, new a.LocalizedNumberVO(this._rank));
    this.textFieldManager.registerTextField(this.disp.txt_name, new r.TextVO(this._allianceInfo.allianceName));
    this.textFieldManager.registerTextField(this.disp.txt_level, new s.NumberVO(c.CastleModel.allianceFameData.getLevelFromFamePoints(this._allianceInfo.allianceCurrentFame)));
    this.textFieldManager.registerTextField(this.disp.txt_members, new s.NumberVO(this._allianceInfo.memberAmount));
    this.textFieldManager.registerTextField(this.disp.txt_alliancePoints, new a.LocalizedNumberVO(this._amount));
    this.disp.mc_kingIndicator.visible = e[0];
  };
  CastleEilandAllianceRankingItem.prototype.clearTextfields = function () {
    this.textFieldManager.registerTextField(this.disp.txt_rank, new r.TextVO(""));
    this.textFieldManager.registerTextField(this.disp.txt_name, new r.TextVO(""));
    this.textFieldManager.registerTextField(this.disp.txt_level, new r.TextVO(""));
    this.textFieldManager.registerTextField(this.disp.txt_members, new r.TextVO(""));
    this.textFieldManager.registerTextField(this.disp.txt_alliancePoints, new r.TextVO(""));
  };
  Object.defineProperty(CastleEilandAllianceRankingItem.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandAllianceRankingItem.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  CastleEilandAllianceRankingItem.prototype.isOwnAlliance = function () {
    return !!this._allianceInfo && !!c.CastleModel.userData.isInAlliance && this._allianceInfo.allianceId == c.CastleModel.userData.allianceID;
  };
  Object.defineProperty(CastleEilandAllianceRankingItem.prototype, "textFieldManager", {
    get: function () {
      return n.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandAllianceRankingItem.prototype, "layoutManager", {
    get: function () {
      return f.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleEilandAllianceRankingItem;
}();
exports.CastleEilandAllianceRankingItem = g;
var C = require("./365.js");
var _ = require("./668.js");
var m = require("./9.js");
var f = require("./17.js");
var O = require("./132.js");
var E = require("./125.js");
o.classImplementsInterfaces(g, "ICastleGenericRankingItem");