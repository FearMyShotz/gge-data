Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./1.js");
var u = require("./1.js");
var d = require("./5.js");
var p = require("./5.js");
var h = require("./5.js");
var g = require("./3.js");
var C = require("./3.js");
var _ = require("./6.js");
var m = require("./18.js");
var f = require("./51.js");
var O = require("./4.js");
var E = require("./223.js");
var y = require("./106.js");
var b = require("./967.js");
var D = function (e) {
  function CastleSpyDialogSabotageState(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleSpyDialogSabotageState, e);
  CastleSpyDialogSabotageState.prototype.initElements = function () {
    e.prototype.initElements.call(this);
    this.dialogDisp.sabotageDamage.visible = false;
    this.dialogDisp.sabotageTargets.visible = false;
  };
  CastleSpyDialogSabotageState.prototype.updateElements = function () {
    e.prototype.updateElements.call(this);
    this.dialogDisp.sabotageDamage.visible = true;
    this.dialogDisp.sabotageTargets.visible = true;
    this.dialogDisp.amountPicker.mc_icon.gotoAndStop(1);
    this.dialogDisp.btnTabSabotage.gotoAndStop(2);
    this.addCastleList();
    var t = 0;
    var i = c.castAs(O.CastleModel.specialEventData.getActiveEventByEventId(d.EventConst.EVENTTYPE_PLAGUE), "PlagueEventVO");
    if (i) {
      for (var n = 0; n < i.eventPackages.length; n++) {
        if ((t = _.int(T.EventPackagePrimeSaleEventVO.getPackageDiscountC2(i.eventPackages[n].packageID))) > 0) {
          this.textFieldManager.registerTextField(this.dialogDisp.btnAddMonk.mc_discount.txt_value, new C.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE, [-t]));
          break;
        }
      }
    }
    this.dialogDisp.btnAddMonk.mc_discount.visible = t != 0;
    this.amountPicker.setNumItems(this.startSpyVO.availableSpies);
    this.amountPicker.enabled = this.startSpyVO.availableSpies > 0;
    this.amountPicker.setSelectedValueWithoutLoop(this.startSpyVO.availableSpies - 1);
  };
  CastleSpyDialogSabotageState.prototype.updateTexts = function () {
    e.prototype.updateTexts.call(this);
    this.tfTitle.textContentVO.textId = "dialog_spy_titleSabotage";
    this.dialogDisp.amountPicker.toolTipText = "spy_dialog_spyCount";
    this.dialogDisp.guardAmount.toolTipText = "spy_dialog_guardCount";
    this.dialogDisp.costs.toolTipText = "spy_dialog_sabotageCosts";
    this.dialogDisp.sabotageDamage.toolTipText = "spy_dialog_sabotageDamage";
    this.dialogDisp.sabotageTargets.toolTipText = "spy_dialog_sabotageTargetCount";
    this.dialogDisp.risk.toolTipText = "spy_dialog_spyRisk";
    this.dialogDisp.travelTime.toolTipText = "spy_dialog_travelTime";
    this.slider.toolTips = [g.Localize.text("spy_dialog_sabotageDamage")];
  };
  CastleSpyDialogSabotageState.prototype.updateSpyVO = function () {
    this.startSpyVO.distance = E.MapHelper.getDistanceByMapobjects(this.castleList.selectedData, this.dialogProperties.worldmapObjectVO);
    this.startSpyVO.spyType = m.ClientConstCastle.SPYTYPE_SABOTAGE;
    this.updateSliderForDamage();
    this.tfTravelTime.textContentVO.stringValue = l.TimeStringHelper.getShortTimeStringBySeconds(this.startSpyVO.getTravelTime(this.startSpyVO.spyType, this.dialogProperties.worldmapObjectVO.areaType == h.WorldConst.AREA_TYPE_DUNGEON));
  };
  CastleSpyDialogSabotageState.prototype.addBgCharacter = function () {
    r.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_char);
    y.CharacterHelper.createCharacterBig(f.ClientConstCharacter.CHAR_ID_SPY, this.dialogDisp.mc_char, 178, 155);
  };
  CastleSpyDialogSabotageState.prototype.spyCastle = function () {
    if (this.startSpyVO.availableSpies <= 0) {
      b.ACastleSpyDialogState.dialogHandler.registerDefaultDialogs(v.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(g.Localize.text("generic_alert_information"), g.Localize.text("errorCode_105")));
    } else {
      var e = _.int(this.castleList.selectedData.objectId);
      this.startSpyVO.worldmapObjectVO = this.dialogProperties.worldmapObjectVO;
      this.startSpyVO.spyType = m.ClientConstCastle.SPYTYPE_SABOTAGE;
      this.startSpyVO.startCastleId = e;
      a.CommandController.instance.executeCommand(I.IngameClientCommands.OPEN_POSTATTACK_DIALOG_COMMAND, [m.ClientConstCastle.SPYTYPE_SABOTAGE, this.bindFunction(this.onHidePostDialog), this.startSpyVO, null]);
    }
  };
  CastleSpyDialogSabotageState.prototype.resetState = function () {
    e.prototype.resetState.call(this);
    this.dialogDisp.sabotageDamage.visible = false;
    this.dialogDisp.sabotageTargets.visible = false;
    this.dialogDisp.btnTabSabotage.gotoAndStop(1);
  };
  Object.defineProperty(CastleSpyDialogSabotageState.prototype, "costHolder", {
    get: function () {
      return this.dialogDisp.sabotageCostsHolder;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(b.ACastleSpyDialogState.prototype, "costHolder").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyDialogSabotageState.prototype, "riskHolder", {
    get: function () {
      return this.dialogDisp.sabotageRiskHolder;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(b.ACastleSpyDialogState.prototype, "riskHolder").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyDialogSabotageState.prototype, "scaleGreen", {
    get: function () {
      return Math.max(0, this.getDamageByRisk(this.startSpyVO.spiesInUse, this.startSpyVO.guardCount, 33) - p.SpyConst.MIN_DAMAGE) / 40;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(b.ACastleSpyDialogState.prototype, "scaleGreen").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyDialogSabotageState.prototype, "scaleYellow", {
    get: function () {
      return Math.max(0, this.getDamageByRisk(this.startSpyVO.spiesInUse, this.startSpyVO.guardCount, 66) - p.SpyConst.MIN_DAMAGE) / 40;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(b.ACastleSpyDialogState.prototype, "scaleYellow").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleSpyDialogSabotageState;
}(b.ACastleSpyDialogState);
exports.CastleSpyDialogSabotageState = D;
var I = require("./29.js");
var T = require("./190.js");
var v = require("./38.js");
u.classImplementsInterfaces(D, "ICastleSpyDialogState");