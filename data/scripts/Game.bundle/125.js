Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./231.js");
var c = require("./296.js");
var u = require("./102.js");
var d = require("./32.js");
var p = require("./53.js");
var h = require("./44.js");
var g = require("./4.js");
var C = require("./43.js");
var _ = require("./215.js");
var m = require("./235.js");
var f = require("./187.js");
var O = require("./8.js");
var E = function (e) {
  function CastleAllianceDialog() {
    return e.call(this, CastleAllianceDialog.NAME) || this;
  }
  n.__extends(CastleAllianceDialog, e);
  CastleAllianceDialog.prototype.addEventListenerOnShow = function () {
    g.CastleModel.allianceData.addEventListener(u.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onOwnAllianceDataUpdated));
    this.controller.addEventListener(d.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
  };
  CastleAllianceDialog.prototype.removeEventListenerOnHide = function () {
    g.CastleModel.allianceData.removeEventListener(u.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onOwnAllianceDataUpdated));
    this.controller.removeEventListener(d.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
  };
  CastleAllianceDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    if (this.dialogDisp.txt_title) {
      this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(""));
    }
    this.dialogDisp.cat_forge.visible = false;
    this.dialogDisp.btn_tab_forge.visible = true;
    this._subLayer = new Map();
    this._subLayer.set(l.ClientConstAlliance.CAT_OVERVIEW, new P.CastleAllianceDialogOverview(this.dialogDisp.cat_overview));
    this._subLayer.set(l.ClientConstAlliance.CAT_MEMBERLIST, new L.CastleAllianceDialogMemberlist(this.dialogDisp.cat_memberlist));
    this._subLayer.set(l.ClientConstAlliance.CAT_MANAGEMENT, new A.CastleAllianceDialogManagement(this.dialogDisp.cat_management));
    this._subLayer.set(l.ClientConstAlliance.CAT_TREASURY, new M.CastleAllianceDialogTreasury(this.dialogDisp.cat_treasury));
    this._subLayer.set(l.ClientConstAlliance.CAT_COMMUNICATION, new y.CastleAllianceDialogCommunication(this.dialogDisp.cat_communication));
    this._subLayer.set(l.ClientConstAlliance.CAT_DIPLOMACY, new I.CastleAllianceDialogDiplomacy(this.dialogDisp.cat_diplomacy));
    this._subLayer.set(l.ClientConstAlliance.CAT_FAME, new T.CastleAllianceDialogFame(this.dialogDisp.cat_fame));
    this._subLayer.set(l.ClientConstAlliance.CAT_FORGE, new v.CastleAllianceDialogForge(this.dialogDisp.cat_forge));
    this._subLayer.set(l.ClientConstAlliance.CAT_FORGE_HIGH, new S.CastleAllianceDialogForgeHigh(this.dialogDisp.cat_forgeHigh));
    this._subLayer.set(l.ClientConstAlliance.CAT_BOOKMARKS, new D.CastleAllianceDialogBookmarks(this.dialogDisp.cat_bookmarks));
    this._subLayer.set(l.ClientConstAlliance.CAT_ABG, new b.CastleAllianceDialogABG(this.dialogDisp.cat_abg));
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close]);
    O.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_overview, this.dialogDisp.btn_memberlist, this.dialogDisp.btn_management, this.dialogDisp.btn_treasury, this.dialogDisp.btn_chat, this.dialogDisp.btn_diplomacy, this.dialogDisp.btn_fame, this.dialogDisp.btn_tab_forge, this.dialogDisp.btn_tab_abg, this.dialogDisp.btn_bookmarks]);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.btn_overview.toolTipText = "dialog_alliance_overview";
    this.dialogDisp.btn_memberlist.toolTipText = "dialog_alliance_memberlist";
    this.dialogDisp.btn_management.toolTipText = "dialog_alliance_management";
    this.dialogDisp.btn_treasury.toolTipText = "dialog_alliance_treasury_tooltip";
    this.dialogDisp.btn_chat.toolTipText = "allianceForum";
    this.dialogDisp.btn_diplomacy.toolTipText = "dialog_alliance_diplomacy";
    this.dialogDisp.btn_fame.toolTipText = "level";
    this.dialogDisp.btn_tab_forge.toolTipText = "dialog_alliance_tab_forge";
    this.dialogDisp.btn_tab_abg.toolTipText = "dialog_alliance_centersOfPower_title";
    this.dialogDisp.btn_bookmarks.toolTipText = "Bookmarks_addBookmark_allianceTab_tooltip";
  };
  CastleAllianceDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.initHeader();
    O.ButtonHelper.enableButton(this.dialogDisp.btn_diplomacy, !p.ABGHelper.isOnABGServer);
    O.ButtonHelper.enableButton(this.dialogDisp.btn_fame, !p.ABGHelper.isOnABGServer);
    this.dialogDisp.btn_fame.visible = !p.ABGHelper.isOnABGAndCollector;
    this.dialogDisp.btn_tab_abg.visible = p.ABGHelper.isOnABGAndCollector;
    this.dialogDisp.btn_tab_forge.visible = !h.SpecialServerHelper.isCrossplay();
  };
  CastleAllianceDialog.prototype.initHeader = function () {
    var e;
    var t = true;
    if (g.CastleModel.userData.isInAlliance) {
      t = !g.CastleModel.allianceData.myAllianceVO || g.CastleModel.allianceData.myAllianceVO.allianceCrestVO.isEmpty;
    }
    this.dialogDisp.header_standard.visible = t;
    this.dialogDisp.header_crest.visible = !t;
    e = t ? this.dialogDisp.header_standard.txt_title : this.dialogDisp.header_crest.txt_title;
    if (this.itxt_title) {
      this.textFieldManager.unregisterTextFieldByReference(this.itxt_title);
    }
    this.itxt_title = this.textFieldManager.registerTextField(e, new s.TextVO(""));
    this.itxt_title.textContentVO.stringValue = this.allianceInfoVO ? this.allianceInfoVO.allianceName : "";
  };
  Object.defineProperty(CastleAllianceDialog.prototype, "allianceInfoVO", {
    get: function () {
      return g.CastleModel.allianceData.myAllianceVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceDialog.prototype.drawAllianceCrest = function () {
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.header_crest.alliance_symbol_container_left);
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.header_crest.alliance_symbol_container_right);
    if (g.CastleModel.userData.isInAlliance && g.CastleModel.allianceData.myAllianceVO && !g.CastleModel.allianceData.myAllianceVO.allianceCrestVO.isEmpty) {
      f.CastleAllianceCrestHelper.setCrestGraphics(this.dialogDisp.header_crest.alliance_symbol_container_left, g.CastleModel.allianceData.myAllianceVO.allianceCrestVO, m.AllianceCrestSizeEnum.M, _.AllianceCrestEnum.DEFAULT_CREST);
      f.CastleAllianceCrestHelper.setCrestGraphics(this.dialogDisp.header_crest.alliance_symbol_container_right, g.CastleModel.allianceData.myAllianceVO.allianceCrestVO, m.AllianceCrestSizeEnum.M, _.AllianceCrestEnum.DEFAULT_CREST);
    }
  };
  CastleAllianceDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this._currentCategory = l.ClientConstAlliance.CAT_NONE;
    g.CastleModel.smartfoxClient.sendCommandVO(new c.C2SGetAllianceInfoVO(g.CastleModel.userData.allianceID));
    this.lockDialog();
  };
  CastleAllianceDialog.prototype.onAllianceStatusChanged = function (e) {
    if (!g.CastleModel.userData.isInAlliance) {
      this.hide();
    }
  };
  CastleAllianceDialog.prototype.onOwnAllianceDataUpdated = function (e) {
    if (this.allianceInfoVO) {
      if (this._currentCategory == l.ClientConstAlliance.CAT_NONE) {
        if (this.dialogProperties.defaultCatergory == l.ClientConstAlliance.CAT_NONE) {
          this.changeCategory(l.ClientConstAlliance.CAT_OVERVIEW);
        } else {
          this.changeCategory(this.dialogProperties.defaultCatergory);
        }
      } else {
        this.showSublayer(this._currentSublayer, [this.allianceInfoVO]);
      }
      this.dialogDisp.btn_diplomacy.icon.gotoAndStop(this.allianceInfoVO.allianceRequestAvailable ? 2 : 1);
      this.unLockDialog();
      this.initHeader();
      this.drawAllianceCrest();
    }
  };
  CastleAllianceDialog.prototype.onClick = function (t) {
    if (!this.isLocked && O.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          this._currentSublayer.showHelp();
          break;
        case this.dialogDisp.btn_overview:
          this.changeCategory(l.ClientConstAlliance.CAT_OVERVIEW);
          break;
        case this.dialogDisp.btn_memberlist:
          this.changeCategory(l.ClientConstAlliance.CAT_MEMBERLIST);
          break;
        case this.dialogDisp.btn_management:
          this.changeCategory(l.ClientConstAlliance.CAT_MANAGEMENT);
          break;
        case this.dialogDisp.btn_treasury:
          this.changeCategory(l.ClientConstAlliance.CAT_TREASURY);
          break;
        case this.dialogDisp.btn_chat:
          this.changeCategory(l.ClientConstAlliance.CAT_COMMUNICATION);
          break;
        case this.dialogDisp.btn_diplomacy:
          this.changeCategory(l.ClientConstAlliance.CAT_DIPLOMACY);
          break;
        case this.dialogDisp.btn_fame:
          this.changeCategory(l.ClientConstAlliance.CAT_FAME);
          break;
        case this.dialogDisp.btn_tab_forge:
          if (R.AllianceForgeConst.canUseRelicAllianceForge(g.CastleModel.userData.userLegendLevel)) {
            this.changeCategory(l.ClientConstAlliance.CAT_FORGE_HIGH);
          } else {
            this.changeCategory(l.ClientConstAlliance.CAT_FORGE);
          }
          break;
        case this.dialogDisp.btn_bookmarks:
          this.changeCategory(l.ClientConstAlliance.CAT_BOOKMARKS);
          break;
        case this.dialogDisp.btn_tab_abg:
          this.changeCategory(l.ClientConstAlliance.CAT_ABG);
      }
    }
  };
  CastleAllianceDialog.prototype.changeCategory = function (t) {
    if (this._currentCategory != t) {
      if (t == l.ClientConstAlliance.CAT_FORGE && R.AllianceForgeConst.canUseRelicAllianceForge(g.CastleModel.userData.userLegendLevel)) {
        t = l.ClientConstAlliance.CAT_FORGE_HIGH;
      }
      e.prototype.changeCategory.call(this, t);
      this.showSublayer(this._subLayer.get(this._currentCategory), [this.allianceInfoVO]);
      O.ButtonHelper.setButtonSelected(this.dialogDisp.btn_overview, this._currentCategory == l.ClientConstAlliance.CAT_OVERVIEW);
      O.ButtonHelper.setButtonSelected(this.dialogDisp.btn_memberlist, this._currentCategory == l.ClientConstAlliance.CAT_MEMBERLIST);
      O.ButtonHelper.setButtonSelected(this.dialogDisp.btn_management, this._currentCategory == l.ClientConstAlliance.CAT_MANAGEMENT);
      O.ButtonHelper.setButtonSelected(this.dialogDisp.btn_treasury, this._currentCategory == l.ClientConstAlliance.CAT_TREASURY);
      O.ButtonHelper.setButtonSelected(this.dialogDisp.btn_chat, this._currentCategory == l.ClientConstAlliance.CAT_COMMUNICATION);
      O.ButtonHelper.setButtonSelected(this.dialogDisp.btn_diplomacy, this._currentCategory == l.ClientConstAlliance.CAT_DIPLOMACY);
      O.ButtonHelper.setButtonSelected(this.dialogDisp.btn_fame, this._currentCategory == l.ClientConstAlliance.CAT_FAME);
      O.ButtonHelper.setButtonSelected(this.dialogDisp.btn_tab_forge, this._currentCategory == l.ClientConstAlliance.CAT_FORGE || this._currentCategory == l.ClientConstAlliance.CAT_FORGE_HIGH);
      O.ButtonHelper.setButtonSelected(this.dialogDisp.btn_bookmarks, this._currentCategory == l.ClientConstAlliance.CAT_BOOKMARKS);
      O.ButtonHelper.setButtonSelected(this.dialogDisp.btn_tab_abg, this._currentCategory == l.ClientConstAlliance.CAT_ABG);
    }
  };
  CastleAllianceDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
  };
  Object.defineProperty(CastleAllianceDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceDialog.__initialize_static_members = function () {
    CastleAllianceDialog.DEFAULT_BEHAVIOR = r.int(C.CastleDialogConsts.DIALOG_TYPE_SINGLE_INSTANCE);
  };
  CastleAllianceDialog.NAME = "CastleAlliance_W1";
  return CastleAllianceDialog;
}(require("./112.js").CastleExternalSubLayerDialog);
exports.CastleAllianceDialog = E;
var y = require("./2383.js");
var b = require("./2421.js");
var D = require("./2426.js");
var I = require("./2434.js");
var T = require("./2438.js");
var v = require("./1375.js");
var S = require("./2445.js");
var A = require("./2446.js");
var L = require("./2461.js");
var P = require("./2490.js");
var M = require("./2493.js");
var R = require("./5.js");
o.classImplementsInterfaces(E, "ICollectableRendererList");
E.__initialize_static_members();