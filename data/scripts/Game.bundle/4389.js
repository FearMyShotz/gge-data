Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./6.js");
var h = require("./4390.js");
var g = require("./531.js");
var C = require("./734.js");
var _ = require("./26.js");
var m = require("./71.js");
var f = require("./4.js");
var O = require("./11.js");
var E = createjs.EventDispatcher;
var y = function (e) {
  function CastlePayRessourcesForBeggingKnightsEventDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastlePayRessourcesForBeggingKnightsEventDialog.NAME) || this;
  }
  n.__extends(CastlePayRessourcesForBeggingKnightsEventDialog, e);
  CastlePayRessourcesForBeggingKnightsEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.eventVO = f.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_BEGGING_KNIGHTS);
    this._woodSelector = new I.CastleResourceCollectorComponent(this.dialogDisp.mc_selectWood, s.BeggingKnightsConst.calculateRequirement(this.eventVO.totalHours, this.eventVO.factorList[0]));
    this._stoneSelector = new I.CastleResourceCollectorComponent(this.dialogDisp.mc_selectStone, s.BeggingKnightsConst.calculateRequirement(this.eventVO.totalHours, this.eventVO.factorList[1]));
    this._foodSelector = new I.CastleResourceCollectorComponent(this.dialogDisp.mc_selectFood, s.BeggingKnightsConst.calculateRequirement(this.eventVO.totalHours, this.eventVO.factorList[2]));
    this._castleSelector = new T.CastleSelectorComponent(this.dialogDisp.castleSelector);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new d.LocalizedTextVO("dialog_season_payRessources_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_help, new d.LocalizedTextVO("dialog_beggingknights_payRessources_info"));
    this.txt_points = this.textFieldManager.registerTextField(this.dialogDisp.txt_points, new u.LocalizedNumberVO(0));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_pointdesc, new d.LocalizedTextVO("dialog_BeggingKnights_nobilityPoints"));
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancle]);
  };
  CastlePayRessourcesForBeggingKnightsEventDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    var i = f.CastleModel.userData.castleList.getHomeCastle();
    f.CastleModel.smartfoxClient.sendCommandVO(new g.C2SGetCastleResourcesVO(i.objectId, i.kingdomID));
    this.controller.addEventListener(m.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeRessources));
    this.onSliderChanged(null);
    var n = f.CastleModel.userData.castleList.listOfCastlesWithoutAreaTypesAndEventCamps([l.WorldConst.AREA_TYPE_CAPITAL, l.WorldConst.AREA_TYPE_METROPOL]);
    var a = new D.CastleListVO();
    if (n != null) {
      for (var s = 0, u = n; s < u.length; s++) {
        var d = u[s];
        if (d !== undefined && d.areaType != l.WorldConst.AREA_TYPE_CAPITAL && d.areaType != l.WorldConst.AREA_TYPE_METROPOL && d.kingdomID != c.WorldIsland.KINGDOM_ID && d.controllerWorldMapOwnerInfoVO.playerID == f.CastleModel.userData.playerID) {
          a.addCastle(d, d.kingdomID);
        }
      }
    }
    this._castleSelector.initComponent(f.CastleModel.otherPlayerData.getOwnInfoVO(), a);
    this._castleSelector.castleList.disp.addEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
    f.CastleModel.specialEventData.addEventListener(_.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this._woodSelector.dispatcher = new E();
    this._woodSelector.notifyValueChange = true;
    this._woodSelector.dispatcher.addEventListener(C.CastleResourceCollectorEvent.VALUE_CHANGE_NOTIFY, this.bindFunction(this.onSliderChanged));
    this._stoneSelector.dispatcher = new E();
    this._stoneSelector.notifyValueChange = true;
    this._stoneSelector.dispatcher.addEventListener(C.CastleResourceCollectorEvent.VALUE_CHANGE_NOTIFY, this.bindFunction(this.onSliderChanged));
    this._foodSelector.dispatcher = new E();
    this._foodSelector.notifyValueChange = true;
    this._foodSelector.dispatcher.addEventListener(C.CastleResourceCollectorEvent.VALUE_CHANGE_NOTIFY, this.bindFunction(this.onSliderChanged));
    this.eventVO = f.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_BEGGING_KNIGHTS);
  };
  CastlePayRessourcesForBeggingKnightsEventDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this._castleRessourcesVO = null;
    this._woodSelector.resetValue();
    this._stoneSelector.resetValue();
    this._foodSelector.resetValue();
    this.controller.removeEventListener(m.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeRessources));
    this._woodSelector.dispatcher.removeEventListener(C.CastleResourceCollectorEvent.VALUE_CHANGE_NOTIFY, this.bindFunction(this.onSliderChanged));
    this._stoneSelector.dispatcher.removeEventListener(C.CastleResourceCollectorEvent.VALUE_CHANGE_NOTIFY, this.bindFunction(this.onSliderChanged));
    this._foodSelector.dispatcher.removeEventListener(C.CastleResourceCollectorEvent.VALUE_CHANGE_NOTIFY, this.bindFunction(this.onSliderChanged));
    f.CastleModel.specialEventData.removeEventListener(_.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  CastlePayRessourcesForBeggingKnightsEventDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancle:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        f.CastleModel.smartfoxClient.sendCommandVO(new h.C2SBuyBeggingKnightsPackageVO(this._castleSelector.selectedCastleVO.objectId, this._castleSelector.selectedCastleVO.kingdomID, this._woodSelector.getSelectedAmount() / this.eventVO.totalAmounts[0], this._stoneSelector.getSelectedAmount() / this.eventVO.totalAmounts[1], this._foodSelector.getSelectedAmount() / this.eventVO.totalAmounts[2]));
        this.hide();
    }
  };
  CastlePayRessourcesForBeggingKnightsEventDialog.prototype.onSelectCastle = function (e = null) {
    f.CastleModel.smartfoxClient.sendCommandVO(new g.C2SGetCastleResourcesVO(this._castleSelector.selectedCastleVO.objectId, this._castleSelector.selectedCastleVO.kingdomID));
    this._woodSelector.resetValue();
    this._stoneSelector.resetValue();
    this._foodSelector.resetValue();
    this.txt_points.textContentVO.numberValue = 0;
  };
  CastlePayRessourcesForBeggingKnightsEventDialog.prototype.onChangeRessources = function (e = null) {
    var t = e.params[0];
    if (t.castleID == this._castleSelector.selectedCastleVO.objectId) {
      this._castleRessourcesVO = t;
      this._woodSelector.initComponent(p.int(this._castleRessourcesVO.resources.getAmountOrDefaultByType(b.CollectableEnum.WOOD) / this.eventVO.totalAmounts[0]) * this.eventVO.totalAmounts[0], I.CastleResourceCollectorComponent.WOOD, 151);
      this._stoneSelector.initComponent(p.int(this._castleRessourcesVO.resources.getAmountOrDefaultByType(b.CollectableEnum.STONE) / this.eventVO.totalAmounts[1]) * this.eventVO.totalAmounts[1], I.CastleResourceCollectorComponent.STONE, 152);
      this._foodSelector.initComponent(p.int(this._castleRessourcesVO.resources.getAmountOrDefaultByType(b.CollectableEnum.FOOD) / this.eventVO.totalAmounts[2]) * this.eventVO.totalAmounts[2], I.CastleResourceCollectorComponent.FOOD, 153);
    }
  };
  CastlePayRessourcesForBeggingKnightsEventDialog.prototype.onRemoveEvent = function (e) {
    if (e.specialEventVO.eventId == r.EventConst.EVENTTYPE_BEGGING_KNIGHTS) {
      this.hide();
    }
  };
  CastlePayRessourcesForBeggingKnightsEventDialog.prototype.onSliderChanged = function (e = null) {
    this.txt_points.textContentVO.numberValue = this._woodSelector.getSelectedAmount() / this.eventVO.totalAmounts[0] + this._stoneSelector.getSelectedAmount() / this.eventVO.totalAmounts[1] + this._foodSelector.getSelectedAmount() / this.eventVO.totalAmounts[2];
  };
  CastlePayRessourcesForBeggingKnightsEventDialog.__initialize_static_members = function () {
    CastlePayRessourcesForBeggingKnightsEventDialog.NAME = "CastlePayRessourcesForBeggingKnightsExternal";
  };
  return CastlePayRessourcesForBeggingKnightsEventDialog;
}(O.CastleExternalDialog);
exports.CastlePayRessourcesForBeggingKnightsEventDialog = y;
var b = require("./12.js");
var D = require("./373.js");
var I = require("./319.js");
var T = require("./321.js");
a.classImplementsInterfaces(y, "ICollectableRendererList");
y.__initialize_static_members();