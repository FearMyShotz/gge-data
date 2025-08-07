Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./841.js");
var l = require("./312.js");
var c = require("./102.js");
var u = require("./4.js");
var d = require("./8.js");
var p = function (e) {
  function CastleAllianceActionOverviewDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleAllianceActionOverviewDialog.NAME) || this;
  }
  n.__extends(CastleAllianceActionOverviewDialog, e);
  CastleAllianceActionOverviewDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("dialog_allianceActivity_menuHeader"));
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.tab_help, this.dialogDisp.tab_gift]);
    this.dialogDisp.tab_help.toolTipText = "dialog_allianceHelp_answerRequests_tooltip";
    this.dialogDisp.tab_gift.toolTipText = "dialog_allianceActivity_allianceGift_tooltip";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this._subLayer = new Map();
    this._subLayer.set(CastleAllianceActionOverviewDialog.SUBLAYER_HELP_REQUEST, new C.CastleAllianceActionOverviewDialogHelpRequest(this.dialogDisp.sl_help));
    this._subLayer.set(CastleAllianceActionOverviewDialog.SUBLAYER_GIFT, new g.CastleAllianceActionOverviewDialogGift(this.dialogDisp.sl_gift));
  };
  CastleAllianceActionOverviewDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    u.CastleModel.allianceHelpRequestData.addEventListener(l.CastleAllianceHelpRequestDataEvent.DATA_UPDATED, this.bindFunction(this.onRequestUpdate));
    u.CastleModel.allianceGiftData.addEventListener(r.CastleAllianceGiftEvent.DATA_UPDATED, this.bindFunction(this.onGiftUpdate));
    u.CastleModel.allianceData.addEventListener(c.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onMyAllianceUpdated));
  };
  CastleAllianceActionOverviewDialog.prototype.onMyAllianceUpdated = function (e) {
    if (!u.CastleModel.userData.isInAlliance) {
      this.autoSwitchSublayer(false, u.CastleModel.allianceGiftData.hasGifts(u.CastleModel.userData.level));
    }
  };
  CastleAllianceActionOverviewDialog.prototype.onGiftUpdate = function (e) {
    this.updateTabs();
  };
  CastleAllianceActionOverviewDialog.prototype.onRequestUpdate = function (e) {
    this.updateTabs();
  };
  CastleAllianceActionOverviewDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    u.CastleModel.allianceHelpRequestData.removeEventListener(l.CastleAllianceHelpRequestDataEvent.DATA_UPDATED, this.bindFunction(this.onRequestUpdate));
    u.CastleModel.allianceGiftData.removeEventListener(r.CastleAllianceGiftEvent.DATA_UPDATED, this.bindFunction(this.onGiftUpdate));
    u.CastleModel.allianceData.removeEventListener(c.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onMyAllianceUpdated));
  };
  CastleAllianceActionOverviewDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.updateTabs();
    this.switchToSublayer(this.dialogProperties.layerToOpen);
  };
  CastleAllianceActionOverviewDialog.prototype.updateTabs = function () {
    var e = u.CastleModel.allianceHelpRequestData.visibleRequests.length > 0;
    var t = u.CastleModel.allianceGiftData.hasGifts(u.CastleModel.userData.level);
    d.ButtonHelper.enableButton(this.dialogDisp.tab_help, e);
    d.ButtonHelper.enableButton(this.dialogDisp.tab_gift, t);
    this.autoSwitchSublayer(e, t);
  };
  CastleAllianceActionOverviewDialog.prototype.autoSwitchSublayer = function (e, t) {
    if (e || t) {
      switch (this._currentCategory) {
        case CastleAllianceActionOverviewDialog.SUBLAYER_GIFT:
          if (!t) {
            this.switchToSublayer(CastleAllianceActionOverviewDialog.SUBLAYER_HELP_REQUEST);
          }
          break;
        case CastleAllianceActionOverviewDialog.SUBLAYER_HELP_REQUEST:
          if (!e) {
            this.switchToSublayer(CastleAllianceActionOverviewDialog.SUBLAYER_GIFT);
          }
      }
    } else {
      this.hide();
    }
  };
  Object.defineProperty(CastleAllianceActionOverviewDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceActionOverviewDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (d.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.tab_help:
          this.switchToSublayer(CastleAllianceActionOverviewDialog.SUBLAYER_HELP_REQUEST);
          break;
        case this.dialogDisp.tab_gift:
          this.switchToSublayer(CastleAllianceActionOverviewDialog.SUBLAYER_GIFT);
          break;
        case this.dialogDisp.btn_help:
          h.CastleDialogHandler.getInstance().showHelper("", a.Localize.text("help_allianceActivity"));
      }
    }
  };
  CastleAllianceActionOverviewDialog.prototype.switchToSublayer = function (e) {
    if (e == CastleAllianceActionOverviewDialog.SUBLAYER_HELP_REQUEST) {
      this.dialogDisp.tab_help.gotoAndStop(CastleAllianceActionOverviewDialog.TAB_FRAME_ACTIVE);
      this.dialogDisp.tab_gift.gotoAndStop(CastleAllianceActionOverviewDialog.TAB_FRAME_INACTIVE);
    } else {
      this.dialogDisp.tab_help.gotoAndStop(CastleAllianceActionOverviewDialog.TAB_FRAME_INACTIVE);
      this.dialogDisp.tab_gift.gotoAndStop(CastleAllianceActionOverviewDialog.TAB_FRAME_ACTIVE);
    }
    this.changeCategory(e);
    this.showSublayer(this._subLayer.get(e), []);
  };
  CastleAllianceActionOverviewDialog.__initialize_static_members = function () {
    CastleAllianceActionOverviewDialog.NAME = "CastleAllianceActionOverview";
    CastleAllianceActionOverviewDialog.SUBLAYER_HELP_REQUEST = "helprequest";
    CastleAllianceActionOverviewDialog.SUBLAYER_GIFT = "gift";
    CastleAllianceActionOverviewDialog.TAB_FRAME_ACTIVE = 1;
    CastleAllianceActionOverviewDialog.TAB_FRAME_INACTIVE = 2;
  };
  return CastleAllianceActionOverviewDialog;
}(require("./114.js").CastleExternalSubLayerDialog);
exports.CastleAllianceActionOverviewDialog = p;
var h = require("./9.js");
var g = require("./3991.js");
var C = require("./3995.js");
o.classImplementsInterfaces(p, "ICollectableRendererList");
p.__initialize_static_members();