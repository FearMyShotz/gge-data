Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./5.js");
var d = require("./5.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./3.js");
var C = require("./6.js");
var _ = require("./18.js");
var m = require("./51.js");
var f = require("./2560.js");
var O = require("./26.js");
var E = require("./396.js");
var y = require("./4.js");
var b = require("./8.js");
var D = require("./107.js");
var I = require("./167.js");
var T = require("./966.js");
var v = createjs.Point;
var S = function (e) {
  function CastleSpyDialogPlagueState(t) {
    var i = e.call(this, t) || this;
    b.ButtonHelper.initBasicButton(i.dialogDisp.btnAddMonk);
    return i;
  }
  n.__extends(CastleSpyDialogPlagueState, e);
  CastleSpyDialogPlagueState.prototype.initElements = function () {
    e.prototype.initElements.call(this);
    this.dialogDisp.sabotageDamage.toolTipText = "spy_dialog_sabotageDamage";
    this.dialogDisp.sabotageTargets.toolTipText = "spy_dialog_sabotageTargetCount";
    this.dialogDisp.btnAddMonk.toolTipText = "dialog_plagueEvent_buyMonk";
    this.dialogDisp.plagueMonkCount.toolTipText = "spy_dialog_plagueMonkCount";
    this.dialogDisp.mc_plaqueBg.visible = false;
    this.dialogDisp.btnAddMonk.visible = false;
    this.dialogDisp.plagueMonkCount.visible = false;
    this.dialogDisp.sabotageDamage.visible = false;
    this.dialogDisp.sabotageTargets.visible = false;
    this.dialogDisp.nameSource.visible = false;
    this.dialogDisp.btnTabPlague.gotoAndStop(1);
    this.dialogDisp.btnTabPlague.toolTipText = "dialog_spy_titlePlague";
    this.dialogDisp.amountPicker.mc_icon.gotoAndStop(1);
  };
  CastleSpyDialogPlagueState.prototype.initTextFields = function () {
    e.prototype.initTextFields.call(this);
    this.tfPlagueMonkCount = this.textFieldManager.registerTextField(this.dialogDisp.plagueMonkCount.txt_value, new h.LocalizedNumberVO(0));
    this.tfSourceCastleName = this.textFieldManager.registerTextField(this.dialogDisp.nameSource.castleName_txt, new g.LocalizedTextVO(""));
    this.itxt_discount = this.textFieldManager.registerTextField(this.dialogDisp.btnAddMonk.mc_discount.txt_value, new g.LocalizedTextVO(a.GenericTextIds.VALUE_PERCENTAGE));
  };
  CastleSpyDialogPlagueState.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    y.CastleModel.specialEventData.addEventListener(O.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    y.CastleModel.spyData.addEventListener(E.CastleSpyDataEvent.PLAGUEMONK_COUNT_UPDATE, this.bindFunction(this.onPlaguemonkCountUpdate));
  };
  CastleSpyDialogPlagueState.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    y.CastleModel.specialEventData.removeEventListener(O.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    y.CastleModel.spyData.removeEventListener(E.CastleSpyDataEvent.PLAGUEMONK_COUNT_UPDATE, this.bindFunction(this.onPlaguemonkCountUpdate));
  };
  CastleSpyDialogPlagueState.prototype.updateElements = function () {
    e.prototype.updateElements.call(this);
    this.dialogDisp.mc_plaqueBg.visible = true;
    this.dialogDisp.sabotageDamage.visible = true;
    this.dialogDisp.sabotageTargets.visible = true;
    this.dialogDisp.btnTabPlague.gotoAndStop(2);
    this.dialogDisp.amountPicker.mc_icon.gotoAndStop(2);
    this.amountPicker.selectedValue = 0;
    this.amountPicker.enabled = this.startSpyVO.availablePlagueMonks > 0;
    this.updateAddMonkButton();
    this.drawSourceCastle();
  };
  CastleSpyDialogPlagueState.prototype.updateTexts = function () {
    e.prototype.updateTexts.call(this);
    this.tfPlagueMonkCount.textContentVO.numberValue = y.CastleModel.spyData.availablePlagueMonks;
    this.tfTitle.textContentVO.textId = "dialog_spy_titlePlague";
    this.dialogDisp.amountPicker.toolTipText = "spy_dialog_plagueMonkCount";
    this.dialogDisp.guardAmount.toolTipText = "spy_dialog_guardCount";
    this.dialogDisp.costs.toolTipText = "spy_dialog_plagueMonkCosts";
    this.dialogDisp.risk.toolTipText = "spy_dialog_spyRisk";
    this.dialogDisp.travelTime.toolTipText = "spy_dialog_travelTime";
    this.slider.toolTips = [p.Localize.text("spy_dialog_sabotageDamage")];
  };
  CastleSpyDialogPlagueState.prototype.updateSpyVO = function () {
    this.amountPicker.setNumItems(Math.min(this.startSpyVO.availablePlagueMonks, d.SpyConst.MAX_DEPLOYABLE_PLAGUEMONKS));
    this.startSpyVO.distance = d.SpyConst.PLAGUEMONK_DISTANCE_TO_TARGET;
    this.updateSliderForDamage();
    this.tfTravelTime.textContentVO.stringValue = r.TimeStringHelper.getShortTimeStringBySeconds(_.ClientConstCastle.PLAGUEMONK_TRAVEL_TIME);
  };
  CastleSpyDialogPlagueState.prototype.addPlagueMonks = function () {
    var e = y.CastleModel.specialEventData.getActiveEventByEventId(u.EventConst.EVENTTYPE_PLAGUE);
    var t = new I.CastleGenericBuyDialogProperties();
    t.specialEventVO = e;
    t.eventPackageVO = e.eventPackages[0];
    T.ACastleSpyDialogState.dialogHandler.registerDefaultDialogs(R.CastlePlagueUnitEventBuyDialog, t);
  };
  CastleSpyDialogPlagueState.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (t.target == this.dialogDisp.btnAddMonk && this.dialogDisp.btnAddMonk.enabled) {
      this.addPlagueMonks();
    }
  };
  CastleSpyDialogPlagueState.prototype.resetState = function () {
    e.prototype.resetState.call(this);
    this.dialogDisp.mc_plaqueBg.visible = false;
    this.dialogDisp.btnAddMonk.visible = false;
    this.dialogDisp.plagueMonkCount.visible = false;
    this.dialogDisp.sabotageDamage.visible = false;
    this.dialogDisp.sabotageTargets.visible = false;
    this.dialogDisp.nameSource.visible = false;
    this.dialogDisp.btnTabPlague.gotoAndStop(1);
    this.dialogDisp.amountPicker.mc_icon.gotoAndStop(1);
  };
  CastleSpyDialogPlagueState.prototype.onPlaguemonkCountUpdate = function (e) {
    this.startSpyVO.availablePlagueMonks = y.CastleModel.spyData.availablePlagueMonks;
    this.amountPicker.setNumItems(Math.min(y.CastleModel.spyData.availablePlagueMonks, d.SpyConst.MAX_DEPLOYABLE_PLAGUEMONKS));
    this.amountPicker.enabled = this.startSpyVO.availablePlagueMonks > 0;
    this.updateAddMonkButton();
  };
  CastleSpyDialogPlagueState.prototype.updateAddMonkButton = function () {
    this.dialogDisp.btnAddMonk.visible = y.CastleModel.specialEventData.isEventActive(u.EventConst.EVENTTYPE_PLAGUE);
    this.dialogDisp.plagueMonkCount.visible = !this.dialogDisp.btnAddMonk.visible;
    if (y.CastleModel.spyData.totalPlagueMonks < d.SpyConst.MAX_OWNABLE_PLAGUEMONKS) {
      b.ButtonHelper.enableButton(this.dialogDisp.btnAddMonk, true);
      this.dialogDisp.btnAddMonk.toolTipText = "dialog_plagueEvent_buyMonk";
    } else {
      b.ButtonHelper.enableButton(this.dialogDisp.btnAddMonk, false);
      this.dialogDisp.btnAddMonk.toolTipText = "dialog_plagueEvent_maxPlaguemonkCount";
    }
    var e = l.castAs(y.CastleModel.specialEventData.getActiveEventByEventId(u.EventConst.EVENTTYPE_PLAGUE), "PlagueEventVO");
    var t = 0;
    if (e) {
      for (var i = 0; i < e.eventPackages.length; i++) {
        if ((t = C.int(A.EventPackagePrimeSaleEventVO.getPackageDiscountC2(e.eventPackages[i].packageID))) > 0) {
          this.itxt_discount.textContentVO.textReplacements = [-t];
          break;
        }
      }
      this.dialogDisp.btnAddMonk.mc_discount.visible = t != 0;
    }
  };
  CastleSpyDialogPlagueState.prototype.onRemoveEvent = function (e) {
    if (e.specialEventVO.eventId == u.EventConst.EVENTTYPE_PLAGUE) {
      this.dialogDisp.btnAddMonk.visible = false;
      this.dialogDisp.plagueMonkCount.visible = true;
    }
  };
  CastleSpyDialogPlagueState.prototype.drawSourceCastle = function (e = null) {
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.sourceCastleContainer);
    var t = new L.PlagueareaMapobjectVO();
    t.kingdomID = C.int(this.dialogProperties.worldmapObjectVO.kingdomID);
    this.dialogDisp.nameSource.visible = true;
    this.dialogDisp.nameSource.mc_dove.visible = this.dialogDisp.nameSource.mc_rank.visible = this.dialogDisp.nameSource.mc_searchAlliance.visible = false;
    this.tfSourceCastleName.textContentVO.textId = "PlaguemonkCamp";
    this.dialogDisp.sourceCastleContainer.addChild(P.WorldmapObjectIconHelper.drawMapObjectIcon(t, new v(85, 60), true, false, false));
  };
  CastleSpyDialogPlagueState.prototype.addBgCharacter = function () {
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_char);
    D.CharacterHelper.createCharacterBig(m.ClientConstCharacter.CHAR_ID_PLAGUE_MONK, this.dialogDisp.mc_char, 178, 155);
  };
  CastleSpyDialogPlagueState.prototype.spyCastle = function () {
    if (this.startSpyVO.availablePlagueMonks <= 0) {
      T.ACastleSpyDialogState.dialogHandler.registerDefaultDialogs(M.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(p.Localize.text("generic_alert_information"), p.Localize.text("dialog_spy_noPlagueMonks")));
    } else {
      var e = this.dialogProperties.worldmapObjectVO;
      this.startSpyVO.worldmapObjectVO = e;
      y.CastleModel.smartfoxClient.sendCommandVO(new f.C2SCreatePlagueMonkMovementVO(e.absAreaPosX, e.absAreaPosY, e.kingdomID, this.startSpyVO.spiesInUse, this.startSpyVO.damage));
      this.onHidePostDialog();
    }
  };
  Object.defineProperty(CastleSpyDialogPlagueState.prototype, "costHolder", {
    get: function () {
      return this.dialogDisp.sabotageCostsHolder;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(T.ACastleSpyDialogState.prototype, "costHolder").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyDialogPlagueState.prototype, "riskHolder", {
    get: function () {
      return this.dialogDisp.sabotageRiskHolder;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(T.ACastleSpyDialogState.prototype, "riskHolder").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyDialogPlagueState.prototype, "scaleGreen", {
    get: function () {
      return Math.max(0, this.getDamageByRisk(this.startSpyVO.spiesInUse, this.startSpyVO.guardCount, 33) - d.SpyConst.MIN_DAMAGE) / 40;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(T.ACastleSpyDialogState.prototype, "scaleGreen").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyDialogPlagueState.prototype, "scaleYellow", {
    get: function () {
      return Math.max(0, this.getDamageByRisk(this.startSpyVO.spiesInUse, this.startSpyVO.guardCount, 66) - d.SpyConst.MIN_DAMAGE) / 40;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(T.ACastleSpyDialogState.prototype, "scaleYellow").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleSpyDialogPlagueState;
}(T.ACastleSpyDialogState);
exports.CastleSpyDialogPlagueState = S;
var A = require("./190.js");
var L = require("./1405.js");
var P = require("./70.js");
var M = require("./38.js");
var R = require("./1406.js");
c.classImplementsInterfaces(S, "ICastleSpyDialogState");