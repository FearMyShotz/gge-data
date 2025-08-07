Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./296.js");
var c = require("./102.js");
var u = require("./53.js");
var d = require("./4.js");
var p = require("./215.js");
var h = require("./235.js");
var g = require("./187.js");
var C = require("./8.js");
var _ = function (e) {
  function CastleAllianceInfoDialog() {
    var t = this;
    t._allianceID = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleAllianceInfoDialog.NAME) || this;
  }
  n.__extends(CastleAllianceInfoDialog, e);
  CastleAllianceInfoDialog.prototype.initLoaded = function (t = null) {
    if (!this._subLayer) {
      this._subLayer = new Map();
      this._subLayer.set(CastleAllianceInfoDialog.CAT_OVERVIEW, new E.CastleAllianceInfoDialogOverview(this.dialogDisp.cat_overview));
      this._subLayer.set(CastleAllianceInfoDialog.CAT_MEMBERLIST, new O.CastleAllianceInfoDialogMemberlist(this.dialogDisp.cat_memberlist));
      this._subLayer.set(CastleAllianceInfoDialog.CAT_DIPLOMACY, new f.CastleAllianceInfoDialogDiplomacy(this.dialogDisp.cat_diplomacy, this.bindFunction(this.onDiplomacyRequestSend)));
      this._subLayer.set(CastleAllianceInfoDialog.CAT_ABG_TOWER, new m.CastleAllianceInfoDialogABGTower(this.dialogDisp.cat_abgTowers));
    }
    if (!this.itxt_title) {
      this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(""));
      this.itxt_title.selectable = true;
    }
    this.dialogDisp.btn_overview.toolTipText = "dialog_alliance_overview";
    this.dialogDisp.btn_memberlist.toolTipText = "dialog_alliance_memberlist";
    this.dialogDisp.btn_diplomacy.toolTipText = "dialog_alliance_diplomacy";
    this.dialogDisp.btn_agbTower.toolTipText = "dialog_alliance_AllianceTower_towerDetails";
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close]);
    C.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_overview, this.dialogDisp.btn_memberlist, this.dialogDisp.btn_diplomacy, this.dialogDisp.btn_agbTower]);
    e.prototype.initLoaded.call(this, t);
  };
  CastleAllianceInfoDialog.prototype.showLoaded = function (t = null) {
    this._allianceID = r.int(this.dialogProperties.allianceID);
    this._currentCategory = CastleAllianceInfoDialog.CAT_NONE;
    d.CastleModel.allianceData.addEventListener(c.CastleAllianceDataEvent.ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdated));
    d.CastleModel.allianceData.addEventListener(c.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdated));
    d.CastleModel.smartfoxClient.sendCommandVO(new l.C2SGetAllianceInfoVO(this._allianceID));
    C.ButtonHelper.enableButton(this.dialogDisp.btn_diplomacy, d.CastleModel.userData.isInAlliance && !u.ABGHelper.isOnABGServer);
    this.lockDialog();
    this.dialogDisp.btn_agbTower.visible = u.ABGHelper.isOnABGAndTower;
    e.prototype.showLoaded.call(this, t);
  };
  CastleAllianceInfoDialog.prototype.onAllianceDataUpdated = function (e) {
    if (e.allianceInfoVO && this._allianceID == e.allianceInfoVO.allianceId) {
      this._allianceInfoVO = e.allianceInfoVO;
      if (this._currentCategory != CastleAllianceInfoDialog.CAT_NONE || this.dialogProperties.startCat) {
        if (this._currentCategory == CastleAllianceInfoDialog.CAT_NONE && this.dialogProperties.startCat) {
          this.changeCategory(this.dialogProperties.startCat);
        } else {
          this.showSublayer(this._subLayer.get(this._currentCategory), [this._allianceInfoVO]);
        }
      } else {
        this.changeCategory(CastleAllianceInfoDialog.CAT_OVERVIEW);
      }
      this.itxt_title.textContentVO.stringValue = this._allianceInfoVO.allianceName;
      this.drawAllianceCrest();
      this.unLockDialog();
    }
  };
  CastleAllianceInfoDialog.prototype.drawAllianceCrest = function () {
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.alliance_symbol_container);
    g.CastleAllianceCrestHelper.setCrestGraphics(this.dialogDisp.alliance_symbol_container, this._allianceInfoVO.allianceCrestVO, h.AllianceCrestSizeEnum.L, p.AllianceCrestEnum.DEFAULT_CREST);
  };
  CastleAllianceInfoDialog.prototype.onClick = function (t) {
    if ((!this.isLocked || t.target == this.dialogDisp.btn_ok || t.target == this.dialogDisp.btn_close) && C.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_ok:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          break;
        case this.dialogDisp.btn_overview:
          this.changeCategory(CastleAllianceInfoDialog.CAT_OVERVIEW);
          break;
        case this.dialogDisp.btn_memberlist:
          this.changeCategory(CastleAllianceInfoDialog.CAT_MEMBERLIST);
          break;
        case this.dialogDisp.btn_diplomacy:
          this.changeCategory(CastleAllianceInfoDialog.CAT_DIPLOMACY);
          break;
        case this.dialogDisp.btn_agbTower:
          this.changeCategory(CastleAllianceInfoDialog.CAT_ABG_TOWER);
      }
    }
  };
  CastleAllianceInfoDialog.prototype.changeCategory = function (t) {
    if (this._currentCategory != t) {
      e.prototype.changeCategory.call(this, t);
      this.showSublayer(this._subLayer.get(this._currentCategory), [this._allianceInfoVO, this.dialogProperties.statusID, this.dialogProperties.statusConfirmed, this.dialogProperties.allianceName]);
      C.ButtonHelper.setButtonSelected(this.dialogDisp.btn_overview, this._currentCategory == CastleAllianceInfoDialog.CAT_OVERVIEW);
      C.ButtonHelper.setButtonSelected(this.dialogDisp.btn_memberlist, this._currentCategory == CastleAllianceInfoDialog.CAT_MEMBERLIST);
      C.ButtonHelper.setButtonSelected(this.dialogDisp.btn_diplomacy, this._currentCategory == CastleAllianceInfoDialog.CAT_DIPLOMACY);
      C.ButtonHelper.setButtonSelected(this.dialogDisp.btn_agbTower, this._currentCategory == CastleAllianceInfoDialog.CAT_ABG_TOWER);
    }
  };
  CastleAllianceInfoDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this._allianceID = -1;
    this._allianceInfoVO = null;
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.alliance_symbol_container);
    d.CastleModel.allianceData.removeEventListener(c.CastleAllianceDataEvent.ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdated));
    d.CastleModel.allianceData.removeEventListener(c.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdated));
  };
  Object.defineProperty(CastleAllianceInfoDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceInfoDialog.prototype.onDiplomacyRequestSend = function () {
    this.hide();
  };
  CastleAllianceInfoDialog.NAME = "CastleAllianceInfo_W";
  CastleAllianceInfoDialog.CAT_NONE = "cat_none";
  CastleAllianceInfoDialog.CAT_OVERVIEW = "cat_overview";
  CastleAllianceInfoDialog.CAT_MEMBERLIST = "cat_memberlist";
  CastleAllianceInfoDialog.CAT_DIPLOMACY = "cat_diplomacy";
  CastleAllianceInfoDialog.CAT_ABG_TOWER = "cat_abgTowers";
  return CastleAllianceInfoDialog;
}(require("./112.js").CastleExternalSubLayerDialog);
exports.CastleAllianceInfoDialog = _;
o.classImplementsInterfaces(_, "ICollectableRendererList");
var m = require("./2140.js");
var f = require("./2570.js");
var O = require("./2573.js");
var E = require("./2574.js");