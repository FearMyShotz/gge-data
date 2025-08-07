Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./69.js");
var p = require("./71.js");
var h = require("./4.js");
var g = require("./24.js");
var C = require("./8.js");
var _ = require("./73.js");
var m = require("./256.js");
var f = require("./3195.js");
var O = function (e) {
  function CastleSlumPackageDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleSlumPackageDialog.ASSET_NAME) || this;
  }
  n.__extends(CastleSlumPackageDialog, e);
  CastleSlumPackageDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(p.AreaDataEvent.ON_SLUM_LEVEL_CHANGED, this.bindFunction(this.slumUpdatedLevel));
    this.buyPackagesComponent.addEventListener(s.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScroll));
  };
  CastleSlumPackageDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    this.controller.removeEventListener(p.AreaDataEvent.ON_SLUM_LEVEL_CHANGED, this.bindFunction(this.slumUpdatedLevel));
    this.buyPackagesComponent.removeEventListener(s.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScroll));
  };
  CastleSlumPackageDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_upgrade]);
    this.initLevelBars();
    this.titleBar = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new c.LocalizedTextVO(""));
    this.titleBar.autoFitToBounds = true;
  };
  CastleSlumPackageDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_charHolder);
    this.dialogDisp.mc_charHolder.addChild(new g.CastleGoodgameExternalClip("CastleSlumPackageCharacter_" + h.CastleModel.kingdomData.activeKingdomVO.kingdomName, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("CastleSlumPackageCharacter_" + h.CastleModel.kingdomData.activeKingdomVO.kingdomName), null, 0, false).asDisplayObject());
    this.setCurrentUpgradeBarState();
    this.updateLevelBars();
  };
  CastleSlumPackageDialog.prototype.setCurrentUpgradeBarState = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_upgrade, new c.LocalizedTextVO("dialog_village_level", [h.CastleModel.kingdomData.activeKingdomVO.activeSlumLevel]));
    if (h.CastleModel.kingdomData.activeKingdomVO.activeSlumLevel < h.CastleModel.kingdomData.activeKingdomVO.slumVOs.length - 1) {
      C.ButtonHelper.enableButton(this.dialogDisp.btn_upgrade, true);
      this.dialogDisp.btn_upgrade.toolTipText = "dialog_village_upgrade_title";
    } else {
      C.ButtonHelper.enableButton(this.dialogDisp.btn_upgrade, false);
      this.dialogDisp.btn_upgrade.toolTipText = "dialog_alliance_maxUpgradeLevel";
    }
  };
  CastleSlumPackageDialog.prototype.setSlumText = function (e) {
    this.titleBar.textContentVO.textId = e;
  };
  CastleSlumPackageDialog.prototype.initBasicButtons = function (t) {
    t = t.concat([this.dialogDisp.btn_upgrade]);
    e.prototype.initBasicButtons.call(this, t);
  };
  CastleSlumPackageDialog.prototype.getItemListVOs = function () {
    var e = u.int(h.CastleModel.kingdomData.activeKingdomVO.activeSlumLevel);
    var t = [];
    for (var i = 0, n = h.CastleModel.kingdomData.activeKingdomVO.slumVOs; i < n.length; i++) {
      var o = n[i];
      if (o !== undefined) {
        for (var a = 0, s = o.packages; a < s.length; a++) {
          var r = s[a];
          if (r !== undefined && r.isVisible(h.CastleModel.userData.userLevel, h.CastleModel.userData.userLegendLevel, h.CastleModel.areaData.activeAreaInfo.areaType)) {
            var l = new f.SlumPackageScrollItemVO();
            l.eventPackageVO = r;
            l.specialEventVO = this.dialogProperties.buyPackageEventVO;
            l.slumVO = o;
            l.level = o.level;
            l.activeSlumLevel = e;
            t.push(l);
          }
        }
      }
    }
    return t;
  };
  CastleSlumPackageDialog.prototype.onScroll = function (e) {
    this.updateLevelBars();
  };
  CastleSlumPackageDialog.prototype.initLevelBars = function () {
    for (var e = 0; e < 3; e++) {
      this.dialogDisp.itemList2["item" + e].bg.gotoAndStop(this.backgroundFrame);
    }
  };
  Object.defineProperty(CastleSlumPackageDialog.prototype, "backgroundFrame", {
    get: function () {
      throw new d.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  CastleSlumPackageDialog.prototype.updateLevelBars = function () {
    var e = u.int(h.CastleModel.kingdomData.activeKingdomVO.activeSlumLevel);
    for (var t = 0; t < 3; t++) {
      var i = this.dialogDisp.itemList2["item" + t];
      var n = u.int(this.buyPackagesComponent.currentStartIndex / 2 + t + 1);
      if (e < n) {
        this.textFieldManager.registerTextField(i.txt_value, new c.LocalizedTextVO("dialog_village_needlevel", [n]));
        i.visible = true;
      } else {
        i.visible = false;
      }
    }
  };
  CastleSlumPackageDialog.prototype.slumUpdatedLevel = function (e) {
    this.updateLevelBars();
    this.buyPackagesComponent.update();
    this.setCurrentUpgradeBarState();
  };
  CastleSlumPackageDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (C.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          E.CastleDialogHandler.getInstance().showHelper("", "");
          break;
        case this.dialogDisp.btn_upgrade:
          E.CastleDialogHandler.getInstance().registerDefaultDialogs(y.CastleSlumDonateUpdateDialog);
      }
    }
  };
  CastleSlumPackageDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (l.instanceOfClass(t.target, "MovieClip") && t.target.equipVO) {
      _.EquipmentIconHelper.showToolTip(t.target, t.target.equipVO);
    }
  };
  CastleSlumPackageDialog.__initialize_static_members = function () {
    CastleSlumPackageDialog.ASSET_NAME = "CastleSlumPackage";
  };
  return CastleSlumPackageDialog;
}(m.CastleGenericMerchantDialog);
exports.CastleSlumPackageDialog = O;
var E = require("./9.js");
var y = require("./3196.js");
r.classImplementsInterfaces(O, "ICollectableRendererList");
O.__initialize_static_members();