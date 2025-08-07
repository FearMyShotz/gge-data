Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./3.js");
var C = require("./6.js");
var _ = require("./188.js");
var m = require("./1221.js");
var f = require("./44.js");
var O = require("./15.js");
var E = require("./85.js");
var y = require("./4.js");
var b = require("./34.js");
var D = require("./608.js");
var I = function (e) {
  function CastleAllianceDialogFame(t) {
    var i = e.call(this, t) || this;
    i.itxt_actLevel_title = i.textFieldManager.registerTextField(i.subLayerDisp.txt_actLevel_title, new g.LocalizedTextVO(""));
    i.itxt_awards = i.textFieldManager.registerTextField(i.subLayerDisp.txt_awards, new g.LocalizedTextVO(""));
    i.itxt_myFame = i.textFieldManager.registerTextField(i.subLayerDisp.mc_myFame.txt_value, new d.TextVO(""));
    i.itxt_boosterAmount = i.textFieldManager.registerTextField(i.subLayerDisp.mc_levelBar.txt_boosterAmount, new g.LocalizedTextVO(a.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0]));
    i.itxt_actLevel = i.textFieldManager.registerTextField(i.subLayerDisp.txt_actLevel, new g.LocalizedTextVO(a.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0]));
    i.itxt_copy = i.textFieldManager.registerTextField(i.subLayerDisp.txt_copy, new g.LocalizedTextVO("dialog_allianceFame_copy", [0]));
    i.itxt_booster = i.textFieldManager.registerTextField(i.subLayerDisp.mc_levelBar.txt_booster, new g.LocalizedTextVO("dialog_allianceFame_copy", [0]));
    i.itxt_landmarksInfo_capital = i.textFieldManager.registerTextField(i.subLayerDisp.mc_landmarksInfo__duplicate__1_0_1.mc_capital.txt_value, new g.LocalizedTextVO("value_multiplied", [0]));
    i.itxt_landmarksInfo_tradeCenter = i.textFieldManager.registerTextField(i.subLayerDisp.mc_landmarksInfo__duplicate__1_0_1.mc_tradeCenter.txt_value, new g.LocalizedTextVO(a.GenericTextIds.VALUE_NOMINAL_ADD, [0]));
    i.itxt_landmarksInfo_kingstower = i.textFieldManager.registerTextField(i.subLayerDisp.mc_landmarksInfo__duplicate__1_0_1.mc_kingstower.txt_value, new g.LocalizedTextVO("value_percentage_add", [0]));
    i.itxt_landmarksInfo_monument = i.textFieldManager.registerTextField(i.subLayerDisp.mc_landmarksInfo__duplicate__1_0_1.mc_monument.txt_value, new g.LocalizedTextVO("value_percentage_add", [0]));
    i.itxt_aquapoints = i.textFieldManager.registerTextField(i.subLayerDisp.mc_aquapoints.txt_value, new h.LocalizedNumberVO(0));
    i.itxt_landmarksInfo_laborartoryIron = i.textFieldManager.registerTextField(i.subLayerDisp.mc_laboratory.mc_bonusIron.txt_value, new g.LocalizedTextVO("value_percentage_add", [0]));
    i.itxt_landmarksInfo_laborartoryCoal = i.textFieldManager.registerTextField(i.subLayerDisp.mc_laboratory.mc_bonusCoal.txt_value, new g.LocalizedTextVO("value_percentage_add", [0]));
    i.itxt_landmarksInfo_laborartoryOliveoil = i.textFieldManager.registerTextField(i.subLayerDisp.mc_laboratory.mc_bonusOliveoil.txt_value, new g.LocalizedTextVO("value_percentage_add", [0]));
    i.itxt_landmarksInfo_laborartoryGlass = i.textFieldManager.registerTextField(i.subLayerDisp.mc_laboratory.mc_bonusGlass.txt_value, new g.LocalizedTextVO("value_percentage_add", [0]));
    i.subLayerDisp.mc_landmarksInfo__duplicate__1_0_1.mc_capital.mouseChildren = false;
    i.subLayerDisp.mc_landmarksInfo__duplicate__1_0_1.mc_tradeCenter.mouseChildren = false;
    i.subLayerDisp.mc_landmarksInfo__duplicate__1_0_1.mc_kingstower.mouseChildren = false;
    i.subLayerDisp.mc_landmarksInfo__duplicate__1_0_1.mc_monument.mouseChildren = false;
    i.subLayerDisp.mc_myFame.mouseChildren = false;
    i.subLayerDisp.mc_aquapoints.mouseChildren = false;
    i.subLayerDisp.mc_laboratory.mc_bonusIron.mouseChildren = false;
    i.subLayerDisp.mc_laboratory.mc_bonusCoal.mouseChildren = false;
    i.subLayerDisp.mc_laboratory.mc_bonusOliveoil.mouseChildren = false;
    i.subLayerDisp.mc_laboratory.mc_bonusGlass.mouseChildren = false;
    i.subLayerDisp.mc_laboratory.icon.mouseChildren = false;
    return i;
  }
  n.__extends(CastleAllianceDialogFame, e);
  CastleAllianceDialogFame.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.fillAllianceLevelBars();
    O.CastleBasicController.getInstance().addEventListener(m.CastleFameDataEvent.UPDATE_DATA_ALLY_FAME, this.bindFunction(this.onUpdateFamePoints));
    var i;
    var n = y.CastleModel.allianceData.myAllianceVO;
    if (this.allianceInfoVO.hasFameLevelCapReached) {
      this.itxt_actLevel_title.textContentVO.textId = "dialog_allianceFame_yourPoints";
      this.itxt_awards.textContentVO.textId = "";
    } else {
      this.itxt_actLevel_title.textContentVO.textId = "dialog_allianceFame_needFame";
      this.itxt_awards.textContentVO.textId = "dialog_allianceFame_awardForLevelUp";
    }
    this.itxt_copy.textContentVO.textId = "dialog_allianceFame_copy";
    this.itxt_copy.textContentVO.textReplacements = [s.AllianceConst.DAILY_FAME_LOSS * 100];
    this.itxt_booster.textContentVO.textId = "dialog_allianceFame_level";
    this.subLayerDisp.setChildIndex(this.subLayerDisp.mouseArea_allianceFame, this.subLayerDisp.numChildren - 1);
    this.subLayerDisp.mouseArea_allianceFame.toolTipText = "dialog_allianceFame_needPoints";
    this.subLayerDisp.mc_myFame.toolTipText = "dialog_allianceFame_yourPoints";
    this.subLayerDisp.btn_fame.toolTipText = "dialog_fame_title";
    this.subLayerDisp.mc_landmarksInfo__duplicate__1_0_1.mc_capital.toolTipText = "dialog_allianceCapitals_mechanicsTooltip";
    this.subLayerDisp.mc_landmarksInfo__duplicate__1_0_1.mc_tradeCenter.toolTipText = f.SpecialServerHelper.checkTextIDForSkinText("dialog_allianceMetropolis_mechanicsTooltip");
    this.subLayerDisp.mc_landmarksInfo__duplicate__1_0_1.mc_kingstower.toolTipText = f.SpecialServerHelper.checkTextIDForSkinText("dialog_allianceKingtower_mechanicsTooltip");
    this.subLayerDisp.mc_landmarksInfo__duplicate__1_0_1.mc_monument.toolTipText = "dialog_allianceMonument_mechanicsTooltip";
    this.subLayerDisp.mc_laboratory.mc_bonusIron.toolTipText = "dialog_allianceLaboratory_mechanicsTooltip";
    this.subLayerDisp.mc_laboratory.mc_bonusCoal.toolTipText = "dialog_allianceLaboratory_mechanicsTooltip";
    this.subLayerDisp.mc_laboratory.mc_bonusOliveoil.toolTipText = "dialog_allianceLaboratory_mechanicsTooltip";
    this.subLayerDisp.mc_laboratory.mc_bonusGlass.toolTipText = "dialog_allianceLaboratory_mechanicsTooltip";
    this.subLayerDisp.mc_laboratory.icon.toolTipText = "dialog_allianceLaboratory_mechanicsTooltip";
    this.subLayerDisp.mc_aquapoints.toolTipText = "dialog_allianceEiland_points_tooltip";
    this.itxt_landmarksInfo_capital.textContentVO.textReplacements = [n.landmarksList.capitals.length];
    this.itxt_landmarksInfo_tradeCenter.textContentVO.textReplacements = [n.landmarksList.getMetropolBonus()];
    this.itxt_landmarksInfo_kingstower.textContentVO.textReplacements = [n.landmarksList.getKingstowerBonus()];
    this.itxt_landmarksInfo_monument.textContentVO.textReplacements = [n.landmarksList.getMonumentBonus()];
    this.itxt_landmarksInfo_laborartoryIron.textContentVO.textReplacements = [n.landmarksList.getLaboratoryKingdomResourceBonus(r.WorldClassic.KINGDOM_ID)];
    this.itxt_landmarksInfo_laborartoryCoal.textContentVO.textReplacements = [n.landmarksList.getLaboratoryKingdomResourceBonus(c.WorldIce.KINGDOM_ID)];
    this.itxt_landmarksInfo_laborartoryOliveoil.textContentVO.textReplacements = [n.landmarksList.getLaboratoryKingdomResourceBonus(l.WorldDessert.KINGDOM_ID)];
    this.itxt_landmarksInfo_laborartoryGlass.textContentVO.textReplacements = [n.landmarksList.getLaboratoryKingdomResourceBonus(u.WorldVolcano.KINGDOM_ID)];
    this.itxt_aquapoints.textContentVO.numberValue = n.aquaPoints;
    if (i = this.allianceInfoVO.hasFameLevelCapReached ? n.allianceCurrentFameLevelVO : n.allianceNextFameLevelVO) {
      v.CostHelper.initAsResources(i.awardList, this.subLayerDisp);
    }
    this.subLayerDisp.mc_overlay.visible = this.allianceInfoVO.allianceFamePointsNeedForNextLevel <= this.allianceInfoVO.allianceFamePointsHighestReached || this.allianceInfoVO.hasFameLevelCapReached;
    this.itxt_myFame.textContentVO.stringValue = new h.LocalizedNumberVO(y.CastleModel.titleData.getPointsInSystem(_.ClientConstTitle.GLORY_TITLE), true).compose();
    this.subLayerDisp.btn_fame.actLikeButton = true;
    this.subLayerDisp.btn_fame.mouseChildren = false;
  };
  CastleAllianceDialogFame.prototype.onUpdateFamePoints = function (e) {
    var t = y.CastleModel.allianceData.myAllianceVO;
    if (t) {
      if (this.allianceInfoVO.allianceId == t.allianceId) {
        this.allianceInfoVO.updateAllyFame(t.allianceFamePoints, t.allianceFamePointsHighestReached);
      }
      this.fillAllianceLevelBars();
    }
  };
  CastleAllianceDialogFame.prototype.fillAllianceLevelBars = function () {
    this.itxt_boosterAmount.textContentVO.textId = a.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
    this.itxt_boosterAmount.textContentVO.textReplacements = [this.allianceInfoVO.allianceFameLevel, y.CastleModel.allianceFameData.getLevelFromFamePoints(s.AllianceConst.FAME_CAP)];
    this.subLayerDisp.mc_levelBar.mc_bar.scaleX = this.allianceInfoVO.allianceFameLevel / y.CastleModel.allianceFameData.getLevelFromFamePoints(s.AllianceConst.FAME_CAP);
    this.subLayerDisp.mc_levelBar.mc_Arrow.x = this.subLayerDisp.mc_levelBar.mc_bar.x + this.subLayerDisp.mc_levelBar.mc_bar.width;
    var e = 0;
    if (this.allianceInfoVO.hasFameLevelCapReached) {
      this.subLayerDisp.bar_level.scaleX = 1;
      e = C.int(this.allianceInfoVO.allianceFamePointsNeedForThisLevel);
    } else {
      this.subLayerDisp.bar_level.scaleX = this.allianceInfoVO.allianceFamePercentActFameLevel;
      e = C.int(this.allianceInfoVO.allianceFamePointsNeedForNextLevel);
    }
    this.itxt_actLevel.textContentVO.textId = a.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
    this.itxt_actLevel.textContentVO.textReplacements = [new E.CastleLocalizedNumberVO(this.allianceInfoVO.allianceFamePoints), new E.CastleLocalizedNumberVO(e, {
      roundFunction: Math.ceil
    })];
  };
  CastleAllianceDialogFame.prototype.onMouseUp = function (e) {
    switch (e.target) {
      case this.subLayerDisp.btn_fame:
        T.CastleDialogHandler.getInstance().registerDefaultDialogs(S.CastleTitleMainDialog, new D.CastleTitleMainDialogProperties());
    }
  };
  CastleAllianceDialogFame.prototype.showHelp = function () {
    T.CastleDialogHandler.getInstance().showHelper("", p.Localize.text("help_allianceFame"));
  };
  Object.defineProperty(CastleAllianceDialogFame.prototype, "allianceInfoVO", {
    get: function () {
      return this._params[0];
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceDialogFame.prototype.hide = function () {
    e.prototype.hide.call(this);
    O.CastleBasicController.getInstance().removeEventListener(m.CastleFameDataEvent.UPDATE_DATA_ALLY_FAME, this.bindFunction(this.onUpdateFamePoints));
  };
  return CastleAllianceDialogFame;
}(b.CastleDialogSubLayer);
exports.CastleAllianceDialogFame = I;
var T = require("./9.js");
var v = require("./66.js");
var S = require("./609.js");
o.classImplementsInterfaces(I, "ICollectableRendererList", "ISublayer");