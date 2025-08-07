Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./21.js");
var c = require("./139.js");
var u = require("./15.js");
var d = require("./4.js");
var p = require("./8.js");
var h = function (e) {
  function CastleMarketMovmentDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleMarketMovmentDialog.NAME, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("CastleMovementDetails_APR25")) || this;
  }
  n.__extends(CastleMarketMovmentDialog, e);
  CastleMarketMovmentDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO("dialog_marketMovement_title"));
    this.itxt_description = this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new r.LocalizedTextVO("dialog_marketMovement_desc_hasGoods"));
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this._movementResourceList = new _.CastleResourceListComponent(this.dialogDisp.mc_ressourceList, Library.CastleInterfaceElements.ResourceListCompnent_Item);
    this._movementDetails = new C.CastleMovementDetailsComponent(this.dialogDisp.mc_movementInfo);
    p.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_ok, this.dialogDisp.mc_movementInfo.btn_retreat, this.dialogDisp.mc_movementInfo.btn_sendHome]);
  };
  CastleMarketMovmentDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    var i = this.mapMovementVO;
    if (i.lootList.length > 0) {
      this.itxt_description.textContentVO.textId = "dialog_marketMovement_desc_hasGoods";
    } else {
      this.itxt_description.textContentVO.textId = "dialog_marketMovement_desc_hasNoGoods";
    }
    this.dialogDisp.mc_ressourceList.visible = i.lootList.length > 0;
    this._movementResourceList.updateComponent(i.lootList, s.Localize.text("goods"));
    d.CastleModel.timerData.addEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onArmyDataUpdated));
    u.CastleBasicController.getInstance().addEventListener(c.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onArmyRemoved));
    this._movementDetails.initComponent(i, this.bindFunction(this.hide));
    this.onArmyDataUpdated(null);
  };
  CastleMarketMovmentDialog.prototype.onArmyRemoved = function (e) {
    if (e.mapmovementVO.objectId == this.mapMovementVO.objectId) {
      this.hide();
    }
  };
  CastleMarketMovmentDialog.prototype.onArmyDataUpdated = function (e) {
    if (this.mapMovementVO.shouldBeShown()) {
      this._movementDetails.updateComponent();
    } else {
      this.hide();
    }
  };
  CastleMarketMovmentDialog.prototype.onClick = function (t) {
    if (p.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          g.CastleDialogHandler.getInstance().showHelper("", s.Localize.text("help_marketMovment"));
      }
    }
  };
  CastleMarketMovmentDialog.prototype.hideLoaded = function (t = null) {
    this._movementDetails.destroy();
    d.CastleModel.timerData.removeEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onArmyDataUpdated));
    u.CastleBasicController.getInstance().removeEventListener(c.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onArmyRemoved));
    e.prototype.hideLoaded.call(this, t);
  };
  Object.defineProperty(CastleMarketMovmentDialog.prototype, "mapMovementVO", {
    get: function () {
      return this.dialogProperties.mapMovementVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMarketMovmentDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleMarketMovmentDialog.__initialize_static_members = function () {
    CastleMarketMovmentDialog.NAME = "CastleMarketMovement";
  };
  return CastleMarketMovmentDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleMarketMovmentDialog = h;
var g = require("./9.js");
var C = require("./469.js");
var _ = require("./320.js");
a.classImplementsInterfaces(h, "ICollectableRendererList");
h.__initialize_static_members();