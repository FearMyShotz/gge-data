Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./188.js");
var r = require("./1374.js");
var l = require("./410.js");
var c = require("./4.js");
var u = require("./8.js");
var d = require("./11.js");
var p = require("./609.js");
var h = createjs.Event;
var g = createjs.Point;
var C = function (e) {
  function CastleTitleAchievedDialog() {
    var t = this;
    t.titleInfoOrignalY = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleTitleAchievedDialog.NAME) || this;
  }
  n.__extends(CastleTitleAchievedDialog, e);
  CastleTitleAchievedDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_header, new a.LocalizedTextVO("dialog_titleUp_reachedNewTitle"));
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.mc_titleSelection.btn_titleSelection, this.dialogDisp.mc_titleSelection.btn_titles]);
    this.dialogDisp.mc_titleSelection.btn_titleSelection.mouseChildren = false;
    this.dialogDisp.mc_titleSelection.btn_titles.mouseChildren = false;
    this.titleInfoOrignalY = this.dialogDisp.mc_titleInfo.y;
    this.titleRewardComponent = new O.CastleTitleRewardComponent(this.dialogDisp.mc_titleInfo.mc_titleReward);
    this.dispBounds = this.dialogDisp.crest.getBounds();
  };
  CastleTitleAchievedDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    m.CrestHelper.setCrestGraphics(this.dialogDisp.crest, c.CastleModel.userData.playerCrest);
    this.setTitleInfo();
    this.setLayout();
    if (this.dialogDisp.mc_titleSelection.visible) {
      this.setTitleSelection();
    }
    c.CastleModel.titleData.addEventListener(l.CastleTitleDataEvent.TITLE_DATA_UPDATED, this.bindFunction(this.onTitlesUpdate));
    this.dialogDisp.addEventListener(h.ENTER_FRAME, this.bindFunction(this.loop));
  };
  CastleTitleAchievedDialog.prototype.loop = function (e) {
    this.dialogDisp.kreis.rotation += 4;
    this.dialogDisp.kreis.alpha += 0.03;
  };
  CastleTitleAchievedDialog.prototype.onTitlesUpdate = function (e) {
    this.setTitleSelection();
  };
  CastleTitleAchievedDialog.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    if (this.titleRewardComponent) {
      this.titleRewardComponent.destroy();
    }
  };
  CastleTitleAchievedDialog.prototype.setLayout = function () {
    if (this.titleData.getUsersTitleVectorFromSystem(s.ClientConstTitle.BRAVERY_TITLE).length == 0 && this.titleData.getUsersTitleVectorFromSystem(s.ClientConstTitle.ISLAND_TITLE).length == 0) {
      this.dialogDisp.mc_titleInfo.y = this.titleInfoOrignalY - CastleTitleAchievedDialog.REORDER_OFFSET;
      this.dialogDisp.mc_titleSelection.visible = false;
    } else {
      this.dialogDisp.mc_titleInfo.y = this.titleInfoOrignalY;
      this.dialogDisp.mc_titleSelection.visible = true;
    }
  };
  CastleTitleAchievedDialog.prototype.setTitleInfo = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.mc_titleInfo.txt_titleSystem, new a.LocalizedTextVO(_.CastleTitleSystemHelper.getTitleSystemTextID(this.dialogProperties.title.titleSystem, false)));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_titleInfo.txt_titleCurrent, new a.LocalizedTextVO(this.dialogProperties.title.textID));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_titleInfo.txt_rewardHeader, new a.LocalizedTextVO("reward"));
    _.CastleTitleSystemHelper.setTitleSystemIcon(this.dialogDisp.mc_titleInfo.icon_system_left, this.dialogProperties.title.titleSystem, CastleTitleAchievedDialog.SYSTEM_ICON_DIMENSION_HEADER);
    _.CastleTitleSystemHelper.setTitleSystemIcon(this.dialogDisp.mc_titleInfo.icon_system_right, this.dialogProperties.title.titleSystem, CastleTitleAchievedDialog.SYSTEM_ICON_DIMENSION_HEADER);
    this.titleRewardComponent.show(this.dialogProperties.title, this.dialogProperties.alreadyAchieved);
  };
  CastleTitleAchievedDialog.prototype.setTitleSelection = function () {
    var e = this.dialogProperties.title.titleSystem == this.titleData.getSelectedTitleSystem(this.dialogProperties.title.displayType);
    var t = e ? "dialog_titleUp_displayTitle_unavailable" : "dialog_titleUp_displayTitle";
    this.textFieldManager.registerTextField(this.dialogDisp.mc_titleSelection.btn_titleSelection.txt_label, new a.LocalizedTextVO(t));
    u.ButtonHelper.enableButton(this.dialogDisp.mc_titleSelection.btn_titleSelection, !e);
    _.CastleTitleSystemHelper.setTitleSystemIcon(this.dialogDisp.mc_titleSelection.btn_titles.icon_system, this.dialogProperties.title.titleSystem, CastleTitleAchievedDialog.SYSTEM_ICON_DIMENSION_BUTTON);
    this.dialogDisp.mc_titleSelection.btn_titles.toolTipText = _.CastleTitleSystemHelper.getTitleSystemTextID(this.dialogProperties.title.titleSystem);
  };
  CastleTitleAchievedDialog.prototype.onClick = function (e) {
    if (u.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.mc_titleSelection.btn_titleSelection:
          this.sendSelectTitleCommand();
          break;
        case this.dialogDisp.mc_titleSelection.btn_titles:
          this.openTitleDialog();
      }
    }
  };
  CastleTitleAchievedDialog.prototype.hideLoaded = function (t = null) {
    this.dialogDisp.removeEventListener(h.ENTER_FRAME, this.bindFunction(this.loop));
    e.prototype.hideLoaded.call(this, t);
    c.CastleModel.titleData.removeEventListener(l.CastleTitleDataEvent.TITLE_DATA_UPDATED, this.bindFunction(this.onTitlesUpdate));
  };
  CastleTitleAchievedDialog.prototype.openTitleDialog = function () {
    d.CastleExternalDialog.dialogHandler.registerDefaultDialogs(f.CastleTitleMainDialog, new p.CastleTitleMainDialogProperties(this.dialogProperties.title.titleSystem));
  };
  CastleTitleAchievedDialog.prototype.sendSelectTitleCommand = function () {
    if (this.dialogProperties.title.displayType == s.ClientConstTitle.DISPLAYTYPE_PREFIX) {
      var e = this.titleData.getSelectedTitleByDisplayType(s.ClientConstTitle.DISPLAYTYPE_SUFFIX).titleSystem;
      c.CastleModel.smartfoxClient.sendCommandVO(new r.C2SSelectTitleVO(this.dialogProperties.title.titleSystem, e));
    } else {
      c.CastleModel.smartfoxClient.sendCommandVO(new r.C2SSelectTitleVO(this.titleData.getSelectedTitleByDisplayType(s.ClientConstTitle.DISPLAYTYPE_PREFIX).titleSystem, this.dialogProperties.title.titleSystem));
    }
  };
  Object.defineProperty(CastleTitleAchievedDialog.prototype, "titleData", {
    get: function () {
      return c.CastleModel.titleData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleAchievedDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTitleAchievedDialog.__initialize_static_members = function () {
    CastleTitleAchievedDialog.NAME = "CastleTitleAchieved";
    CastleTitleAchievedDialog.SYSTEM_ICON_DIMENSION_HEADER = new g(30, 28.85);
    CastleTitleAchievedDialog.SYSTEM_ICON_DIMENSION_BUTTON = new g(34, 32.85);
  };
  CastleTitleAchievedDialog.REORDER_OFFSET = -30;
  return CastleTitleAchievedDialog;
}(d.CastleExternalDialog);
exports.CastleTitleAchievedDialog = C;
var _ = require("./117.js");
var m = require("./61.js");
var f = require("./610.js");
var O = require("./4672.js");
o.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();