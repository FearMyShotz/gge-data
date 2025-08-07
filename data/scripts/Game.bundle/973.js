Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./6.js");
var h = require("./39.js");
var g = require("./1416.js");
var C = require("./723.js");
var _ = require("./4.js");
var m = require("./171.js");
var f = function (e) {
  function CastleStartOpenGateDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleStartOpenGateDialog.NAME) || this;
  }
  n.__extends(CastleStartOpenGateDialog, e);
  CastleStartOpenGateDialog.prototype.initLoaded = function (t = null) {
    this._openGateTimeList ||= new E.ComboboxComponent(this.dialogDisp.info_time.mc_combobox, "", 1, 40, 45);
    this._castleSelector ||= new y.CastleSelectorComponent(this.dialogDisp.mc_castleSelector);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new d.LocalizedTextVO("dialog_startOpenGate_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new d.LocalizedTextVO("dialog_startOpenGate_decription")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_title, new d.LocalizedTextVO("costs"));
    this.itxt_costValue ||= this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_value, new u.LocalizedNumberVO(0));
    this.dialogDisp.info_time.mc_icon.toolTipText = "runTime";
    this.dialogDisp.info_time.mc_icon_more.toolTipText = "dialog_management_extendTime";
    this.dialogDisp.info_costs.toolTipText = h.ClientConstTextIds.C2;
    this.initBasicButtons([this.dialogDisp.btn_cancle, this.dialogDisp.btn_close]);
    e.prototype.initLoaded.call(this, t);
  };
  CastleStartOpenGateDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.fillPeaceTimeList();
    this.initDelayedButtons([this.dialogDisp.btn_ok]);
    this._castleSelector.initComponent(_.CastleModel.otherPlayerData.getOwnInfoVO(), this.getCastleList());
    if (this.layoutManager.isInMyCastle) {
      var t = this.getRelevantCastle();
      this._castleSelector.changeSelectedCastle(t);
    }
    this.onSelectCastle();
    if (!this.dialogProperties.castleSelectionVisible && this._castleSelector.isVisible() || this.dialogProperties.castleSelectionVisible && !this._castleSelector.isVisible()) {
      this._castleSelector.toggleVisibility();
    }
    this.updateCosts();
  };
  CastleStartOpenGateDialog.prototype.getCastleList = function () {
    for (var e = _.CastleModel.userData.castleList.listOfCastlesWithoutEventCamps, t = new O.CastleListVO(), i = 0; i < e.length; i++) {
      var n = e[i];
      if (n.areaType != l.WorldConst.AREA_TYPE_CAPITAL && n.areaType != l.WorldConst.AREA_TYPE_METROPOL) {
        t.addCastle(n, e[i].kingdomID);
      }
    }
    return t;
  };
  CastleStartOpenGateDialog.prototype.getRelevantCastle = function () {
    if (_.CastleModel.userData.castleList) {
      if (this.layoutManager.isInMyCastle) {
        return _.CastleModel.userData.castleList.getCastleVOByID(_.CastleModel.areaData.activeAreaInfo.objectId, _.CastleModel.areaData.activeAreaInfo.kingdomID);
      } else {
        return _.CastleModel.userData.castleList.getMainCastleByKingdomID(-1);
      }
    } else {
      return null;
    }
  };
  CastleStartOpenGateDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._castleSelector.castleList.disp.addEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
    this._openGateTimeList.disp.addEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectTime));
    this.controller.addEventListener(C.OpenGateEvent.CHANGE_OPEN_GATE_COUNTER, this.bindFunction(this.onChangeOpenGateCounter));
  };
  CastleStartOpenGateDialog.prototype.hideLoaded = function (t = null) {
    this._castleSelector.castleList.disp.removeEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
    this._openGateTimeList.disp.removeEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectTime));
    this.controller.removeEventListener(C.OpenGateEvent.CHANGE_OPEN_GATE_COUNTER, this.bindFunction(this.onChangeOpenGateCounter));
    e.prototype.hideLoaded.call(this, t);
  };
  CastleStartOpenGateDialog.prototype.onSelectTime = function (e) {
    this.itxt_costValue.textContentVO.numberValue = Number(this._openGateTimeList.selectedData);
    this.updateCosts();
  };
  CastleStartOpenGateDialog.prototype.onChangeOpenGateCounter = function (e) {
    this.updateCosts();
  };
  CastleStartOpenGateDialog.prototype.onSelectCastle = function (e = null) {
    if (this._castleSelector.selectedCastleVO.remainingOpenGateTime > 0) {
      this.dialogDisp.info_time.mc_icon.visible = false;
      this.dialogDisp.info_time.mc_icon_more.visible = true;
    } else {
      this.dialogDisp.info_time.mc_icon.visible = true;
      this.dialogDisp.info_time.mc_icon_more.visible = false;
    }
    this.updateCosts();
  };
  CastleStartOpenGateDialog.prototype.updateCosts = function () {
    var e = p.int(_.CastleModel.userData.castleList.getCastleVOByID(this.selectedCastleID).openGateCounter);
    var t = p.int(_.CastleModel.costsData.getFinalCostsC2(r.PlayerConst.getOpenGateCosts(this._openGateTimeList.selectedId, e + 1)));
    this.itxt_costValue.textContentVO.numberValue = t;
    b.CostHelper.setCostC2TextFieldColor(this.itxt_costValue, t);
  };
  CastleStartOpenGateDialog.prototype.fillPeaceTimeList = function () {
    var e;
    this._openGateTimeList.clearItems();
    for (var t = 0; t < r.PlayerConst.OPEN_GATE_DURATION.length; t++) {
      (e = new m.ComboboxItemRendererVO()).itemLabel = a.TimeStringHelper.getCommaTimeStringFromSeconds(r.PlayerConst.OPEN_GATE_DURATION[t], c.Localize.text);
      e.data = _.CastleModel.costsData.getFinalCostsC2(r.PlayerConst.OPEN_GATE_C2[t]);
      this._openGateTimeList.addItem(e);
    }
    this._openGateTimeList.selectItemIndex(0);
  };
  CastleStartOpenGateDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancle:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        _.CastleModel.smartfoxClient.sendCommandVO(new g.C2SOpenGateStartVO(this.selectedCastleID, this.selectedCastleKingdomID, this._openGateTimeList.selectedId));
        this.hide();
    }
  };
  Object.defineProperty(CastleStartOpenGateDialog.prototype, "selectedCastleID", {
    get: function () {
      if (this._castleSelector.isVisible()) {
        return this._castleSelector.selectedCastleVO.objectId;
      } else {
        return this.dialogProperties.castleID;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartOpenGateDialog.prototype, "selectedCastleKingdomID", {
    get: function () {
      if (this._castleSelector.isVisible()) {
        return this._castleSelector.selectedCastleVO.kingdomID;
      } else {
        return this.dialogProperties.kingdomID;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartOpenGateDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleStartOpenGateDialog.__initialize_static_members = function () {
    CastleStartOpenGateDialog.NAME = "CastleBuyProtectionBoost";
  };
  return CastleStartOpenGateDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleStartOpenGateDialog = f;
var O = require("./373.js");
var E = require("./178.js");
var y = require("./321.js");
var b = require("./66.js");
s.classImplementsInterfaces(f, "ICollectableRendererList");
f.__initialize_static_members();