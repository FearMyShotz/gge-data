Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./13.js");
var u = require("./4.js");
var d = require("./658.js");
var p = require("./8.js");
var h = require("./34.js");
var g = require("./3740.js");
var C = function (e) {
  function CastleAllianceSamuraiInvasionDialogDaimyoSublayer(t) {
    var i = this;
    i._castles = [];
    i._townships = [];
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).init();
    return i;
  }
  n.__extends(CastleAllianceSamuraiInvasionDialogDaimyoSublayer, e);
  CastleAllianceSamuraiInvasionDialogDaimyoSublayer.prototype.init = function () {
    p.ButtonHelper.initButtons([this.subLayerDisp.btn_contracts, this.subLayerDisp.btn_ranking], E.ClickFeedbackButtonBackground);
    p.ButtonHelper.initButton(this.subLayerDisp.btn_info, -1, y.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_desc, new r.LocalizedTextVO("dialog_samuraiInvasionDaimyo_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_contracts.txt_text, new l.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("allianceContracts"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_ranking.txt_text, new l.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("allianceRanking"))).autoFitToBounds = true;
    this.subLayerDisp.mc_points.mouseChildren = false;
    this.subLayerDisp.mc_rank.mouseChildren = false;
    this.subLayerDisp.mc_points.toolTipText = "warEffortPoints";
    this.subLayerDisp.mc_rank.toolTipText = "warEffortRanking";
    this._tooltip = new f.CastleAllianceSamuraiInvasionDaimyoTooltip(this.subLayerDisp.mc_castleTooltip);
    this._castles = [];
    for (var e = 0; e < CastleAllianceSamuraiInvasionDialogDaimyoSublayer.NUMBER_OF_CASTLES_PER_SIDE; ++e) {
      this._castles.push(new m.CastleAllianceSamuraiInvasionDaimyoCastle(this.subLayerDisp.getChildByName("mc_enemy" + e), this.bindFunction(this.onMouseOverArea), this.bindFunction(this.onMouseOutArea)));
    }
    this._townships = [];
    e = 0;
    for (; e < CastleAllianceSamuraiInvasionDialogDaimyoSublayer.NUMBER_OF_CASTLES_PER_SIDE; ++e) {
      this._townships.push(new m.CastleAllianceSamuraiInvasionDaimyoCastle(this.subLayerDisp.getChildByName("mc_ally" + e), this.bindFunction(this.onMouseOverArea), this.bindFunction(this.onMouseOutArea)));
    }
  };
  CastleAllianceSamuraiInvasionDialogDaimyoSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.controller.addEventListener(d.SamuraiDaimyoEvent.ON_CONTRACTS_UPDATED, this.bindFunction(this.onContractsUpdated));
    this.controller.addEventListener(d.SamuraiDaimyoEvent.ON_OWN_RANKS_UPDATED, this.bindFunction(this.onDataUpdated));
    this.controller.addEventListener(d.SamuraiDaimyoEvent.ON_AREAS_UPDATED, this.bindFunction(this.onAreasUpdated));
    this._tooltip.onShow();
    if (this._castles != null) {
      for (var i = 0, n = this._castles; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          o.onShow();
        }
      }
    }
    for (var a = 0, s = this._townships; a < s.length; a++) {
      (o = s[a]).onShow();
    }
    this.updateRankInfos(true);
    this._tooltip.setVisibility(false);
    if (this._castles != null) {
      for (var r = 0, l = this._castles; r < l.length; r++) {
        var c = l[r];
        if (c !== undefined) {
          c.setVisibility(false);
        }
      }
    }
    for (var p = 0, h = this._townships; p < h.length; p++) {
      (c = h[p]).setVisibility(false);
    }
    u.CastleModel.samuraiDaimyoData.server.requestGDW();
    u.CastleModel.samuraiDaimyoData.server.requestGDA();
    u.CastleModel.samuraiDaimyoData.server.requestGDC();
  };
  CastleAllianceSamuraiInvasionDialogDaimyoSublayer.prototype.hide = function () {
    this.controller.removeEventListener(d.SamuraiDaimyoEvent.ON_CONTRACTS_UPDATED, this.bindFunction(this.onContractsUpdated));
    this.controller.removeEventListener(d.SamuraiDaimyoEvent.ON_OWN_RANKS_UPDATED, this.bindFunction(this.onDataUpdated));
    this.controller.removeEventListener(d.SamuraiDaimyoEvent.ON_AREAS_UPDATED, this.bindFunction(this.onAreasUpdated));
    this._tooltip.onHide();
    if (this._castles != null) {
      for (var t = 0, i = this._castles; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onHide();
        }
      }
    }
    for (var o = 0, a = this._townships; o < a.length; o++) {
      (n = a[o]).onHide();
    }
    e.prototype.hide.call(this);
  };
  CastleAllianceSamuraiInvasionDialogDaimyoSublayer.prototype.showHelp = function () {
    _.CastleDialogHandler.getInstance().showHelper("", a.Localize.text("help_samuraiInvasionDaimyo_contestTab"));
  };
  CastleAllianceSamuraiInvasionDialogDaimyoSublayer.prototype.updateRankInfos = function (e = false) {
    if (e) {
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_points.txt_text, new l.TextVO("???"));
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_rank.txt_text, new l.TextVO("???"));
    } else {
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_points.txt_text, new s.LocalizedNumberVO(u.CastleModel.samuraiDaimyoData.server.ownHighscorePoints));
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_rank.txt_text, new s.LocalizedNumberVO(u.CastleModel.samuraiDaimyoData.server.ownHighscoreRank));
    }
  };
  CastleAllianceSamuraiInvasionDialogDaimyoSublayer.prototype.updateAreas = function () {
    if (this._castles != null) {
      for (var e = 0, t = this._castles; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.setVisibility(true);
        }
      }
    }
    for (var n = 0, o = this._townships; n < o.length; n++) {
      (i = o[n]).setVisibility(true);
    }
    for (var a = 0; a < CastleAllianceSamuraiInvasionDialogDaimyoSublayer.NUMBER_OF_CASTLES_PER_SIDE; ++a) {
      this._castles[a].updateWithNewVO(u.CastleModel.samuraiDaimyoData.server.castles[a]);
    }
    for (a = 0; a < CastleAllianceSamuraiInvasionDialogDaimyoSublayer.NUMBER_OF_CASTLES_PER_SIDE; ++a) {
      this._townships[a].updateWithNewVO(u.CastleModel.samuraiDaimyoData.server.townships[a]);
    }
  };
  CastleAllianceSamuraiInvasionDialogDaimyoSublayer.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.subLayerDisp.btn_contracts:
        h.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(O.SamuraiDaimyoEventDialog, new g.SamuraiDaimyoEventDialogProperties(O.SamuraiDaimyoEventDialog.TAB_CONTRACTS));
        break;
      case this.subLayerDisp.btn_ranking:
        h.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(O.SamuraiDaimyoEventDialog, new g.SamuraiDaimyoEventDialogProperties(O.SamuraiDaimyoEventDialog.TAB_RANKING));
        break;
      case this.subLayerDisp.btn_info:
        h.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(O.SamuraiDaimyoEventDialog, new g.SamuraiDaimyoEventDialogProperties(O.SamuraiDaimyoEventDialog.TAB_INFO));
    }
  };
  CastleAllianceSamuraiInvasionDialogDaimyoSublayer.prototype.onDataUpdated = function (e) {
    this.updateRankInfos();
  };
  CastleAllianceSamuraiInvasionDialogDaimyoSublayer.prototype.onAreasUpdated = function (e) {
    this.updateAreas();
  };
  CastleAllianceSamuraiInvasionDialogDaimyoSublayer.prototype.onMouseOverArea = function (e) {
    this._tooltip.setVisibility(true);
    this._tooltip.updateWithNewData(e);
  };
  CastleAllianceSamuraiInvasionDialogDaimyoSublayer.prototype.onMouseOutArea = function (e) {
    this._tooltip.setVisibility(false);
  };
  CastleAllianceSamuraiInvasionDialogDaimyoSublayer.prototype.onContractsUpdated = function (e) {
    if (this._tooltip.isVisible) {
      this._tooltip.update();
    }
  };
  CastleAllianceSamuraiInvasionDialogDaimyoSublayer.NUMBER_OF_CASTLES_PER_SIDE = 4;
  return CastleAllianceSamuraiInvasionDialogDaimyoSublayer;
}(h.CastleDialogSubLayer);
exports.CastleAllianceSamuraiInvasionDialogDaimyoSublayer = C;
o.classImplementsInterfaces(C, "ICollectableRendererList", "ISublayer");
var _ = require("./9.js");
var m = require("./3741.js");
var f = require("./3742.js");
var O = require("./825.js");
var E = require("./121.js");
var y = require("./36.js");