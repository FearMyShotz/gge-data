Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./3135.js");
var c = require("./37.js");
var u = require("./4.js");
var d = function (e) {
  function CastleTreasureChestBuildingDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(CastleTreasureChestBuildingDialog, e);
  CastleTreasureChestBuildingDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("dialog_treasurechestbuilding_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new s.LocalizedTextVO("dialog_treasurechestOpen_desc")).verticalAlign = o.GGSVerticalAlign.MIDDLE;
  };
  CastleTreasureChestBuildingDialog.prototype.applyPropertiesLoaded = function (t = null) {
    this._currentRewardList = null;
    e.prototype.applyPropertiesLoaded.call(this);
    this.controller.addEventListener(c.CastleServerMessageArrivedEvent.ETC_ARRIVED, this.bindFunction(this.onEtcArrived));
    u.CastleModel.smartfoxClient.sendCommandVO(new l.C2SExtensionTreasureChestVO(this.dialogProperties.objectID));
  };
  CastleTreasureChestBuildingDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.controller.removeEventListener(c.CastleServerMessageArrivedEvent.ETC_ARRIVED, this.bindFunction(this.onEtcArrived));
  };
  CastleTreasureChestBuildingDialog.prototype.onEtcArrived = function (e) {
    if (e.params) {
      var t = r.int(e.params[0]);
      this._currentRewardList = u.CastleModel.rewardData.getListById(t);
      this.updateRewards();
    } else {
      this.hide();
    }
  };
  CastleTreasureChestBuildingDialog.prototype.getRewardList = function () {
    return this._currentRewardList;
  };
  Object.defineProperty(CastleTreasureChestBuildingDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTreasureChestBuildingDialog.__initialize_static_members = function () {
    CastleTreasureChestBuildingDialog.NAME = "CastleTreasureChestOpenBuilding";
  };
  return CastleTreasureChestBuildingDialog;
}(require("./798.js").CastleTreasureChestOpenDialog);
exports.CastleTreasureChestBuildingDialog = d;
a.classImplementsInterfaces(d, "ICollectableRendererList");
d.__initialize_static_members();