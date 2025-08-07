Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./4.js");
var d = require("./746.js");
var p = require("./43.js");
var h = require("./149.js");
var g = require("./136.js");
var C = require("./8.js");
var _ = function () {
  function CastleAllianceRankingItem(e) {
    this._rank = 0;
    this._amount = 0;
    this._disp = e;
    C.ButtonHelper.initBasicButton(this._disp, 1.02);
  }
  CastleAllianceRankingItem.prototype.onMouseOver = function (e) {};
  CastleAllianceRankingItem.prototype.onMouseOut = function (e) {};
  CastleAllianceRankingItem.prototype.onClick = function (e) {
    if (C.ButtonHelper.isButtonEnabled(e.target)) {
      e.target;
      if (u.CastleModel.userData.isInAlliance && u.CastleModel.userData.allianceID == this._allianceInfo.allianceId) {
        m.CastleDialogHandler.getInstance().registerDefaultDialogs(E.CastleAllianceDialog, new g.CastleAllianceDialogProperties());
      } else {
        m.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(O.CastleAllianceInfoDialog, new h.CastleAllianceInfoDialogProperties(this._allianceInfo.allianceId), p.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      }
    }
  };
  CastleAllianceRankingItem.prototype.update = function (e, t, i) {
    this._allianceInfo = new d.AllianceHighscoreInfoVO();
    this._allianceInfo.fillFromParamObject(e[2]);
    this._rank = c.int(e[0]);
    this._amount = c.int(e[1]);
    this.disp.visible = true;
    var n = i.toLowerCase() == this._allianceInfo.allianceName.toLowerCase() || i == this._rank.toString();
    var a = this._rank <= 1;
    var p = this._rank == 2;
    var h = u.CastleModel.userData.isInAlliance && this._allianceInfo.allianceName.toLowerCase() == u.CastleModel.allianceData.myAllianceVO.allianceName.toLowerCase() || n;
    this.disp.mc_first.visible = a && !h;
    this.disp.mc_second.visible = p && !h;
    this.disp.mc_own.visible = h || a || p;
    CastleAllianceRankingItem.textFieldManager.registerTextField(this.disp.txt_rank, new s.LocalizedNumberVO(this._rank), new o.InternalGGSTextFieldConfigVO(true));
    CastleAllianceRankingItem.textFieldManager.registerTextField(this.disp.txt_name, new l.TextVO(this._allianceInfo.allianceName), new o.InternalGGSTextFieldConfigVO(true));
    CastleAllianceRankingItem.textFieldManager.registerTextField(this.disp.txt_fameLevel, new r.NumberVO(u.CastleModel.allianceFameData.getLevelFromFamePoints(this._allianceInfo.allianceCurrentFame)), new o.InternalGGSTextFieldConfigVO(true));
    CastleAllianceRankingItem.textFieldManager.registerTextField(this.disp.txt_membercount, new s.LocalizedNumberVO(this._allianceInfo.memberAmount), new o.InternalGGSTextFieldConfigVO(true));
    CastleAllianceRankingItem.textFieldManager.registerTextField(this.disp.txt_amount, new s.LocalizedNumberVO(this._amount), new o.InternalGGSTextFieldConfigVO(true));
  };
  Object.defineProperty(CastleAllianceRankingItem.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceRankingItem.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceRankingItem, "layoutManager", {
    get: function () {
      return f.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceRankingItem, "textFieldManager", {
    get: function () {
      return n.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceRankingItem;
}();
exports.CastleAllianceRankingItem = _;
var m = require("./9.js");
var f = require("./17.js");
var O = require("./132.js");
var E = require("./125.js");
a.classImplementsInterfaces(_, "ICastleGenericRankingItem");