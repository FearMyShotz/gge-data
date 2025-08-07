Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./2953.js");
var p = require("./2954.js");
var h = require("./279.js");
var g = require("./69.js");
var C = require("./644.js");
var _ = require("./1576.js");
var m = require("./129.js");
var f = require("./4.js");
var O = require("./43.js");
var E = require("./8.js");
var y = require("./11.js");
var b = require("./201.js");
var D = require("./2955.js");
var I = function (e) {
  function AAutoRecruitmentCopyDialog(t) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(AAutoRecruitmentCopyDialog.ASSET_URL)) || this;
  }
  n.__extends(AAutoRecruitmentCopyDialog, e);
  AAutoRecruitmentCopyDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel, this.dialogDisp.btn_close, this.dialogDisp.btn_help]);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_list.txt_name, new l.LocalizedTextVO("generic_name")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.mc_double.txt_title, new l.LocalizedTextVO("dialog_purchaseLoop_costs_doubling")).autoFitToBounds = true;
    this._itxt_amount = this.textFieldManager.registerTextField(this.dialogDisp.mc_amount.txt_text, new c.TextVO(""));
    this._itxt_amount.autoFitToBounds = true;
    this.updateTabs();
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.mc_amount.toolTipText = this.recruitmentAmountToolTip;
    this.dialogDisp.mc_amount.mouseChildren = false;
    this._listComponent = new M.AutoRecruitmentCopyListComponent(this.dialogDisp.mc_list, this.listItemClass);
  };
  AAutoRecruitmentCopyDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.controller.addEventListener(C.AutoRecruitmentEvent.ON_COPY_SUCCESS, this.bindFunction(this.onCopySuccess));
    this.controller.addEventListener(m.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, this.bindFunction(this.onPackageListUpdated));
    this.controller.addEventListener(_.AutoRecruitmentInfoEvent.ON_DUPLICATE_RECRUITMENT_INFO, this.bindFunction(this.onDuplicateRecruitmentInfoResponse));
    this.requestDRI();
  };
  AAutoRecruitmentCopyDialog.prototype.requestDRI = function () {
    this.showLoading();
    f.CastleModel.smartfoxClient.sendCommandVO(new d.C2SDuplicateRecruitmentInfoVO(this.dialogProperties.listId, f.CastleModel.permanentCastleData.getCurrentCastle().areaId, f.CastleModel.kingdomData.activeKingdomID));
  };
  AAutoRecruitmentCopyDialog.prototype.hideOnLoading_0 = function () {
    this.hide();
  };
  AAutoRecruitmentCopyDialog.prototype.showLoading = function () {
    y.CastleExternalDialog.dialogHandler.registerDialogsWithType(A.CastleExternalPreloaderDialog, new b.CastleExternalPreloaderDialogProperties(this.hideOnLoading_0), false, O.CastleDialogConsts.PRIORITY_TOP, 0, O.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
  };
  AAutoRecruitmentCopyDialog.prototype.removeLoading = function () {
    v.CastleLayoutManager.getInstance().hideDialog(A.CastleExternalPreloaderDialog);
  };
  AAutoRecruitmentCopyDialog.prototype.onDuplicateRecruitmentInfoResponse = function (e) {
    if (e.response) {
      this.dialogProperties.parseServerInformation(e.serverData);
      this._listComponent.initWithNewData(this.dialogProperties.listData);
      this._listComponent.onShow();
      this.setupSublayer();
      this._sublayerSwitcher.switchTo(AAutoRecruitmentCopyDialog.SUBLAYER_COSTS);
      this._sublayerSwitcher.show();
      this.updateAmount();
      this.updateTabs();
      this.updateOkButton();
      this._listComponent.onSelectionChanged.add(this.bindFunction(this.onItemSelectionChanged));
      this._sublayerSwitcher.addOnSwitchedListener(this.bindFunction(this.onTabSwitched));
      this.removeLoading();
    } else {
      this.hide();
    }
  };
  AAutoRecruitmentCopyDialog.prototype.onPackageListUpdated = function (e) {
    if (f.CastleModel.militaryData.getPackageListById(this.dialogProperties.listId).slotsInUse == 0) {
      this.hide();
      T.CastleDialogHandler.getInstance().registerDefaultDialogs(S.CastleStandardOkDialog, new a.BasicStandardOkDialogProperties("attention", this.alertOnCloseTextID));
      return;
    }
    this.requestDRI();
  };
  Object.defineProperty(AAutoRecruitmentCopyDialog.prototype, "alertOnCloseTextID", {
    get: function () {
      throw new g.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  AAutoRecruitmentCopyDialog.prototype.onTabSwitched = function (e) {
    this.updateTabs();
  };
  AAutoRecruitmentCopyDialog.prototype.updateTabs = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.tab_queue.txt_text, new l.LocalizedTextVO(this.overviewTabTextID)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.tab_costs.txt_text, new l.LocalizedTextVO(this.costTabTextID)).autoFitToBounds = true;
  };
  AAutoRecruitmentCopyDialog.prototype.updateAmount = function () {
    var e;
    var t = f.CastleModel.militaryData.getPackageListById(this.dialogProperties.listId);
    for (var i = u.int(t.slotsArray.length), n = u.int(t.currentProductionSlot.amount), o = 0; o < i; o++) {
      e = t.getSlotByArrayPos(o);
      if (r.instanceOfClass(e, "UnitPackageSlotVO") && e.amount > 0) {
        n += u.int(e.amount);
      }
    }
    this._itxt_amount.textContentVO.stringValue = String(n);
  };
  AAutoRecruitmentCopyDialog.prototype.setupSublayer = function () {
    if (!this._sublayerSwitcher) {
      this._sublayerSwitcher = new h.SublayerSwitcher(function () {
        return new D.AutoRecruitmentCopySublayerProperties(this.dialogProperties.listId, this.dialogProperties.loopFeeCosts, this._listComponent);
      });
      this._sublayerSwitcher.add(AAutoRecruitmentCopyDialog.SUBLAYER_COSTS, this.dialogDisp.tab_costs, new L.AutoRecruitmentCopyCostSublayer(this.dialogDisp.mc_costs));
      this._sublayerSwitcher.add(AAutoRecruitmentCopyDialog.SUBLAYER_OVERVIEW, this.dialogDisp.tab_queue, new P.AutoRecruitmentCopyQueueInfoSublayer(this.dialogDisp.mc_queue));
    }
  };
  Object.defineProperty(AAutoRecruitmentCopyDialog.prototype, "recruitmentAmountToolTip", {
    get: function () {
      throw new g.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAutoRecruitmentCopyDialog.prototype, "overviewTabTextID", {
    get: function () {
      throw new g.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAutoRecruitmentCopyDialog.prototype, "costTabTextID", {
    get: function () {
      throw new g.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  AAutoRecruitmentCopyDialog.prototype.onPurchaseLoopedSlots = function (e) {
    this.onOkButton();
  };
  AAutoRecruitmentCopyDialog.prototype.onCopySuccess = function (e) {
    this.hide();
  };
  AAutoRecruitmentCopyDialog.prototype.hide = function () {
    this.removeLoading();
    this.controller.removeEventListener(C.AutoRecruitmentEvent.ON_COPY_SUCCESS, this.bindFunction(this.onCopySuccess));
    this.controller.removeEventListener(m.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, this.bindFunction(this.onPackageListUpdated));
    this.controller.removeEventListener(_.AutoRecruitmentInfoEvent.ON_DUPLICATE_RECRUITMENT_INFO, this.bindFunction(this.onDuplicateRecruitmentInfoResponse));
    this._listComponent.onSelectionChanged.remove(this.bindFunction(this.onItemSelectionChanged));
    if (this._sublayerSwitcher) {
      this._sublayerSwitcher.removeOnSwitchedListener(this.bindFunction(this.onTabSwitched));
      this._sublayerSwitcher.hide();
    }
    e.prototype.hide.call(this);
  };
  AAutoRecruitmentCopyDialog.prototype.updateOkButton = function () {
    E.ButtonHelper.enableButton(this.dialogDisp.btn_ok, this._listComponent.getSelectedCastlesCount() > 0);
  };
  Object.defineProperty(AAutoRecruitmentCopyDialog.prototype, "listItemClass", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  AAutoRecruitmentCopyDialog.prototype.onClick = function (e) {
    if (E.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onOkButton();
          break;
        case this.dialogDisp.btn_help:
          this.onHelpButton();
      }
    }
  };
  AAutoRecruitmentCopyDialog.prototype.onHelpButton = function () {};
  AAutoRecruitmentCopyDialog.prototype.onOkButton = function () {
    var e = [];
    for (var t = 0, i = this._listComponent.listData; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined && n.isSelected) {
        e.push({
          SID: n.kingdomId,
          AID: n.areaId
        });
      }
    }
    f.CastleModel.smartfoxClient.sendCommandVO(new p.C2SDuplicateRecruitmentLoopVO(this.dialogProperties.listId, e, f.CastleModel.kingdomData.activeKingdomID, f.CastleModel.permanentCastleData.getCurrentCastle().areaId));
  };
  AAutoRecruitmentCopyDialog.prototype.onItemSelectionChanged = function () {
    this.updateOkButton();
  };
  Object.defineProperty(AAutoRecruitmentCopyDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AAutoRecruitmentCopyDialog.__initialize_static_members = function () {
    AAutoRecruitmentCopyDialog.ASSET_URL = "AutoRecruitmentCopy";
    AAutoRecruitmentCopyDialog.SUBLAYER_COSTS = 0;
    AAutoRecruitmentCopyDialog.SUBLAYER_OVERVIEW = 1;
  };
  return AAutoRecruitmentCopyDialog;
}(y.CastleExternalDialog);
exports.AAutoRecruitmentCopyDialog = I;
var T = require("./9.js");
var v = require("./17.js");
var S = require("./38.js");
var A = require("./154.js");
var L = require("./2956.js");
var P = require("./2957.js");
var M = require("./2958.js");
s.classImplementsInterfaces(I, "ICollectableRendererList");
I.__initialize_static_members();