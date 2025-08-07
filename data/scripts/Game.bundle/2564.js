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
var h = require("./3.js");
var g = require("./3.js");
var C = require("./6.js");
var _ = require("./18.js");
var m = require("./51.js");
var f = require("./223.js");
var O = require("./1214.js");
var E = require("./171.js");
var y = require("./106.js");
var b = require("./967.js");
var D = function (e) {
  function CastleSpyDialogSpyState(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleSpyDialogSpyState, e);
  CastleSpyDialogSpyState.prototype.initElements = function () {
    e.prototype.initElements.call(this);
    this._spyTypeList = new T.ComboboxComponent(this.dialogDisp.spyCombobox, "", 1, 40, 45, -1, 0, new O.ComboboxItemRendererLong());
    this._spyTypeList.disp.visible = false;
    this.dialogDisp.spyAccuracy.visible = false;
    this.dialogDisp.btnTabSpy.gotoAndStop(1);
  };
  CastleSpyDialogSpyState.prototype.initTextFields = function () {
    e.prototype.initTextFields.call(this);
    this.tfSpyAccuracy = this.textFieldManager.registerTextField(this.dialogDisp.spyAccuracy.txt_value, new g.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE));
  };
  CastleSpyDialogSpyState.prototype.updateElements = function () {
    e.prototype.updateElements.call(this);
    this.dialogDisp.spyAccuracy.visible = true;
    this.dialogDisp.amountPicker.mc_icon.gotoAndStop(1);
    this.dialogDisp.btnTabSpy.gotoAndStop(2);
    this.fillSpyTypeList();
    this.addCastleList();
    this.amountPicker.setNumItems(this.startSpyVO.availableSpies);
    this.amountPicker.enabled = this.startSpyVO.availableSpies > 0;
    this.amountPicker.setSelectedValueWithoutLoop(this.startSpyVO.availableSpies - 1);
  };
  CastleSpyDialogSpyState.prototype.updateTexts = function () {
    e.prototype.updateTexts.call(this);
    this.tfTitle.textContentVO.textId = "dialog_spy_title";
    this.dialogDisp.amountPicker.toolTipText = "spy_dialog_spyCount";
    this.dialogDisp.guardAmount.toolTipText = "spy_dialog_guardCount";
    this.dialogDisp.costs.toolTipText = "spy_dialog_spyCosts";
    this.dialogDisp.spyAccuracy.toolTipText = "spy_dialog_spyAccuracy";
    this.dialogDisp.risk.toolTipText = "spy_dialog_spyRisk";
    this.dialogDisp.travelTime.toolTipText = "spy_dialog_travelTime";
    this.slider.toolTips = [h.Localize.text("spy_dialog_spyAccuracy")];
  };
  CastleSpyDialogSpyState.prototype.updateSpyVO = function () {
    this.startSpyVO.distance = f.MapHelper.getDistanceByMapobjects(this.castleList.selectedData, this.dialogProperties.worldmapObjectVO);
    this.startSpyVO.spyType = C.int(this._spyTypeList.selectedData);
    var e = (0.5 + this.slider.getPercentValues()[0] / 2) * 100;
    var t = C.int(this.amountPicker.selectedValue + 1);
    this.startSpyVO.setSpyValues(e, t);
    this.tfTravelTime.textContentVO.stringValue = String(l.TimeStringHelper.getShortTimeStringBySeconds(this.startSpyVO.getTravelTime(this.startSpyVO.spyType, this.dialogProperties.worldmapObjectVO.areaType == p.WorldConst.AREA_TYPE_DUNGEON)));
    this.tfSpyAccuracy.textContentVO.textReplacements = [String(Math.round(this.startSpyVO.accuracy))];
  };
  CastleSpyDialogSpyState.prototype.fillSpyTypeList = function () {
    var e;
    this._spyTypeList.disp.visible = true;
    this._spyTypeList.enabled = true;
    this._spyTypeList.clearItems();
    (e = new E.ComboboxItemRendererVO()).itemLabel = h.Localize.text("dialog_spy_military");
    e.data = 0;
    this._spyTypeList.addItem(e);
    if (u.instanceOfClass(this.dialogProperties.worldmapObjectVO, "CastleMapobjectVO")) {
      (e = new E.ComboboxItemRendererVO()).itemLabel = h.Localize.text("dialog_spy_economy");
      e.data = 1;
      this._spyTypeList.addItem(e);
    } else if (u.instanceOfClass(this.dialogProperties.worldmapObjectVO, "OutpostMapobjectVO") && this.dialogProperties.worldmapObjectVO.ownerInfo) {
      if (!this.dialogProperties.worldmapObjectVO.isOwnMapobject && !this.dialogProperties.worldmapObjectVO.ownerInfo.isOutpostOwner && !this.dialogProperties.worldmapObjectVO.isConqueredByMe) {
        (e = new E.ComboboxItemRendererVO()).itemLabel = h.Localize.text("dialog_spy_economy");
        e.data = 1;
        this._spyTypeList.addItem(e);
      }
    }
    this.dialogDisp.spyCombobox.mouseEnabled = this.dialogDisp.spyCombobox.mouseChildren = this._spyTypeList.itemData.length > 1;
    this._spyTypeList.selectItemIndex(0);
    this._spyTypeList.disp.btn_arrow.visible = this._spyTypeList.itemData && this._spyTypeList.itemData.length > 1;
  };
  CastleSpyDialogSpyState.prototype.selectSpyType = function (e) {
    this._spyTypeList.selectItemIndex(e);
  };
  CastleSpyDialogSpyState.prototype.addBgCharacter = function () {
    r.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_char);
    y.CharacterHelper.createCharacterBig(m.ClientConstCharacter.CHAR_ID_SPY, this.dialogDisp.mc_char, 178, 155);
  };
  CastleSpyDialogSpyState.prototype.spyCastle = function () {
    if (this.startSpyVO.availableSpies <= 0) {
      b.ACastleSpyDialogState.dialogHandler.registerDefaultDialogs(v.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(h.Localize.text("generic_alert_information"), h.Localize.text("errorCode_105")));
    } else {
      var e = C.int(this.castleList.selectedData.objectId);
      this.startSpyVO.worldmapObjectVO = this.dialogProperties.worldmapObjectVO;
      this.startSpyVO.spyType = C.int(this._spyTypeList.selectedData);
      this.startSpyVO.startCastleId = e;
      a.CommandController.instance.executeCommand(I.IngameClientCommands.OPEN_POSTATTACK_DIALOG_COMMAND, [_.ClientConstCastle.SPYTYPE_SABOTAGE, this.bindFunction(this.onHidePostDialog), this.startSpyVO, null]);
    }
  };
  CastleSpyDialogSpyState.prototype.resetState = function () {
    e.prototype.resetState.call(this);
    this.dialogDisp.spyAccuracy.visible = false;
    this._spyTypeList.disp.visible = false;
    this.dialogDisp.btnTabSpy.gotoAndStop(1);
  };
  CastleSpyDialogSpyState.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this._spyTypeList.clearItems();
    this._spyTypeList.dispose();
  };
  Object.defineProperty(CastleSpyDialogSpyState.prototype, "costHolder", {
    get: function () {
      return this.dialogDisp.spyCostsHolder;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(b.ACastleSpyDialogState.prototype, "costHolder").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyDialogSpyState.prototype, "riskHolder", {
    get: function () {
      return this.dialogDisp.spyRiskHolder;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(b.ACastleSpyDialogState.prototype, "riskHolder").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyDialogSpyState.prototype, "scaleGreen", {
    get: function () {
      return Math.max(0, this.getAccuracyByRisk(this.startSpyVO.spiesInUse, this.startSpyVO.guardCount, 33) - d.SpyConst.MIN_ACCURACY) / 50;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(b.ACastleSpyDialogState.prototype, "scaleGreen").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyDialogSpyState.prototype, "scaleYellow", {
    get: function () {
      return Math.max(0, this.getAccuracyByRisk(this.startSpyVO.spiesInUse, this.startSpyVO.guardCount, 66) - d.SpyConst.MIN_ACCURACY) / 50;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(b.ACastleSpyDialogState.prototype, "scaleYellow").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleSpyDialogSpyState;
}(b.ACastleSpyDialogState);
exports.CastleSpyDialogSpyState = D;
var I = require("./29.js");
var T = require("./178.js");
var v = require("./38.js");
c.classImplementsInterfaces(D, "ICastleSpyDialogState");