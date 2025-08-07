Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./742.js");
var p = require("./31.js");
var h = require("./67.js");
var g = require("./19.js");
var C = require("./13.js");
var _ = require("./4.js");
var m = require("./35.js");
var f = require("./95.js");
var O = require("./47.js");
var E = require("./189.js");
var y = require("./8.js");
var b = require("./11.js");
var D = require("./136.js");
var I = createjs.Point;
var T = function (e) {
  function CastleAllianceBuyCustomizableBoostDialog() {
    return e.call(this, CastleAllianceBuyCustomizableBoostDialog.NAME) || this;
  }
  n.__extends(CastleAllianceBuyCustomizableBoostDialog, e);
  CastleAllianceBuyCustomizableBoostDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.itxt_level = this.textFieldManager.registerTextField(this.dialogDisp.txt_level, new l.LocalizedTextVO("levelX", [1]));
    this.itxt_value = this.textFieldManager.registerTextField(this.dialogDisp.txt_value, new l.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE_ADD, [0]));
    this.itxt_duration = this.textFieldManager.registerTextField(this.dialogDisp.txt_duration, new r.TextVO(""));
    y.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel, this.dialogDisp.btn_plus, this.dialogDisp.btn_minus], M.ClickFeedbackButton);
    this.scrollComponent = new f.SimpleScrollComponent(new O.SimpleScrollVO().initByParent(this.dialogDisp), new E.SimpleScrollStrategyHorizontal(true));
  };
  CastleAllianceBuyCustomizableBoostDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(C.TextHelper.toUpperCaseLocaSafe(this.dialogProperties.titleText)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new r.TextVO(this.dialogProperties.descriptionText));
    this.dialogDisp.mc_level_tooltip.toolTipText = this.dialogProperties.isTemporaryBoosterActive ? "dialog_alliance_temporaryBoost_activeEffectLevel" : "dialog_alliance_temporaryBoost_selectedEffectLevel";
    this.dialogDisp.mc_duration_tooltip.toolTipText = this.dialogProperties.isTemporaryBoosterActive ? "dialog_alliance_temporaryBoost_activeBoosterAddTime" : "effectDuration";
    this.updateIcon();
    var i = 1;
    if (this.dialogProperties.isTemporaryBoosterActive) {
      i = u.int(this.allianceInfoVO.getBoostLevel(this.dialogProperties.buffSeriesID));
      this.scrollComponent.setVisibility(false);
    } else {
      this.scrollComponent.setVisibility(true);
    }
    this.scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    this.scrollComponent.init(1, this.allianceInfoVO.getBoostMaxLevel(this.dialogProperties.buffSeriesID));
    this.scrollComponent.scrollToValue(i);
    this.scrollComponent.show();
  };
  CastleAllianceBuyCustomizableBoostDialog.prototype.onScroll = function () {
    this.updateCosts();
    this.updateBuff();
  };
  CastleAllianceBuyCustomizableBoostDialog.prototype.updateIcon = function () {
    var e = _.CastleModel.allianceBuffData.getAllianceBuffVoBySeriesIDAndLevel(this.dialogProperties.buffSeriesID, this.allianceInfoVO.getBoostMaxLevel(this.dialogProperties.buffSeriesID)).getBonusVOByEffectType(m.EffectTypeEnum.EFFECT_TYPE_UNKNOWN);
    if (e) {
      A.CollectableRenderHelper.displaySingleItemComplete(this, new p.CollectableRenderClips(this.dialogDisp.mc_icon).addIconMc(this.dialogDisp.mc_icon), new v.CollectableItemEffectVO(e.effect.effectID, false), new g.CollectableRenderOptions(g.CollectableRenderOptions.ICON, CastleAllianceBuyCustomizableBoostDialog.ICON_SIZE));
    }
  };
  CastleAllianceBuyCustomizableBoostDialog.prototype.updateBuff = function () {
    var e = _.CastleModel.allianceBuffData.getAllianceBuffVoBySeriesIDAndLevel(this.dialogProperties.buffSeriesID, this.scrollComponent.currentValue);
    this.itxt_level.textContentVO.textReplacements = [e.level];
    this.itxt_value.textContentVO.textReplacements = [e.boni[0].strength];
    this.itxt_duration.textContentVO.stringValue = a.TimeStringHelper.getTimeToString(this.allianceInfoVO.getBoostDuration(this.dialogProperties.buffSeriesID, this.scrollComponent.currentValue), a.TimeStringHelper.ONE_TIME_HOURS_FORMAT, c.Localize.text);
  };
  CastleAllianceBuyCustomizableBoostDialog.prototype.updateCosts = function () {
    var e = _.CastleModel.allianceBuffData.getCosts(this.dialogProperties.buffSeriesID, this.scrollComponent.currentValue);
    var t = new g.CollectableRenderOptions(g.CollectableRenderOptions.SET_COST_LIST, new I(30, 30));
    t.tooltip.useAmount = false;
    t.costTextfield.useOtherResourceStorage = this.allianceInfoVO.storage;
    t.costTextfield.enableMarkOnNotEnough = true;
    t.costTextfield.useKiloAbbreviationForAmount = false;
    t.costTextfield.useMillionAbbreviationForAmount = false;
    A.CollectableRenderHelper.displayMultipleItems(new h.CollectableRenderClipsList(this.dialogDisp, "item"), e, t, null, function afterRenderFunc(e) {
      e.destroy();
    });
    L.CostHelper.initAsCostsFromOtherStorage(e, this.dialogDisp, true, this.allianceInfoVO.storage);
  };
  CastleAllianceBuyCustomizableBoostDialog.prototype.onClick = function (t) {
    if (y.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onBuyBoost();
      }
    }
  };
  CastleAllianceBuyCustomizableBoostDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    if (this.dialogProperties.targetAllianceSublayer) {
      S.CastleDialogHandler.getInstance().registerDefaultDialogs(P.CastleAllianceDialog, new D.CastleAllianceDialogProperties(this.dialogProperties.targetAllianceSublayer));
      this.dialogProperties.targetAllianceSublayer = null;
    }
    this.scrollComponent.hide();
    this.scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
  };
  CastleAllianceBuyCustomizableBoostDialog.prototype.onBuyBoost = function () {
    _.CastleModel.smartfoxClient.sendCommandVO(new d.C2SAllianceUpgradeVO(this.dialogProperties.buffSeriesID, this.scrollComponent.currentValue));
    this.hide();
  };
  Object.defineProperty(CastleAllianceBuyCustomizableBoostDialog.prototype, "allianceInfoVO", {
    get: function () {
      return _.CastleModel.allianceData.myAllianceVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBuyCustomizableBoostDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBuyCustomizableBoostDialog.__initialize_static_members = function () {
    CastleAllianceBuyCustomizableBoostDialog.ICON_SIZE = new I(60, 60);
  };
  CastleAllianceBuyCustomizableBoostDialog.NAME = "CastleAllianceBuyCustomizableBoost";
  return CastleAllianceBuyCustomizableBoostDialog;
}(b.CastleExternalDialog);
exports.CastleAllianceBuyCustomizableBoostDialog = T;
var v = require("./611.js");
var S = require("./9.js");
var A = require("./25.js");
var L = require("./66.js");
var P = require("./125.js");
var M = require("./36.js");
o.classImplementsInterfaces(T, "ICollectableRendererList");
T.__initialize_static_members();