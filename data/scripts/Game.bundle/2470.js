Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./2471.js");
var r = require("./2472.js");
var l = require("./2473.js");
var c = require("./102.js");
var u = require("./4.js");
var d = require("./8.js");
var p = require("./41.js");
var h = require("./114.js");
var g = require("./1382.js");
var C = function (e) {
  function CastleSearchMemberDialog() {
    var t = this;
    t._isSearching = false;
    t._isAccepting = false;
    t._isNowSearching = false;
    t._isNowAccepting = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleSearchMemberDialog.NAME) || this;
  }
  n.__extends(CastleSearchMemberDialog, e);
  CastleSearchMemberDialog.prototype.initLoaded = function (t = null) {
    if (!this._subLayer) {
      this._subLayer = new Map();
      this._subLayer.set(CastleSearchMemberDialog.CAT_REQUESTS, new _.CastleSearchMemberDialogApplications(this.dialogDisp.cat_requestList));
      this._subLayer.set(CastleSearchMemberDialog.CAT_MEMBERLIST, new m.CastleSearchMemberDialogSearch(this.dialogDisp.cat_searchList));
    }
    this.hideAllSublayer();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("dialog_alliance_getNewMember"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_yes, new a.LocalizedTextVO("generic_btn_yes"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_no, new a.LocalizedTextVO("generic_btn_no"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_joinall, new a.LocalizedTextVO("generic_btn_yes"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_joinno, new a.LocalizedTextVO("generic_btn_no"));
    this.dialogDisp.mc_joinStatus.toolTipText = "dialog_alliance_openAlliance_icon_tooltip";
    this.dialogDisp.btn_openRequests.toolTipText = "dialog_alliance_openRequests";
    this.dialogDisp.btn_searchMember.toolTipText = "dialog_alliance_searchMember";
    this.dialogDisp.mc_searchStatus.toolTipText = "dialog_alliance_WeAreSearching";
    this.dialogDisp.mc_searchStatus.mouseChildren = false;
    this._isSearching = u.CastleModel.allianceData.myAllianceVO.isSearchingMembers;
    this._isAccepting = u.CastleModel.allianceData.myAllianceVO.isAcceptingMembers;
    d.ButtonHelper.initTwoStateButtons([this.dialogDisp.chkBox_yes, this.dialogDisp.chkBox_no, this.dialogDisp.chkBox_yes2, this.dialogDisp.chkBox_no2, this.dialogDisp.btn_openRequests, this.dialogDisp.btn_searchMember]);
    p.CastleMovieClipHelper.createHitArea(this.dialogDisp.chkBox_yes);
    p.CastleMovieClipHelper.createHitArea(this.dialogDisp.chkBox_yes2);
    p.CastleMovieClipHelper.createHitArea(this.dialogDisp.chkBox_no);
    p.CastleMovieClipHelper.createHitArea(this.dialogDisp.chkBox_no2);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_help]);
    e.prototype.initLoaded.call(this, t);
  };
  CastleSearchMemberDialog.prototype.showLoaded = function (t = null) {
    this._currentCategory = CastleSearchMemberDialog.CAT_NONE;
    this.isNowSearching = u.CastleModel.allianceData.myAllianceVO.isSearchingMembers;
    this.isNowAccepting = u.CastleModel.allianceData.myAllianceVO.isAcceptingMembers;
    u.CastleModel.smartfoxClient.sendCommandVO(new r.C2SAllianceSearchMemberListVO());
    u.CastleModel.smartfoxClient.sendCommandVO(new s.C2SAllianceApplicationListVO());
    u.CastleModel.allianceData.addEventListener(c.CastleAllianceDataEvent.ALLIANCE_APPLICATION_LIST_UPDATED, this.bindFunction(this.onApplicationListUpdated));
    u.CastleModel.allianceData.addEventListener(c.CastleAllianceDataEvent.ALLIANCE_SEARCH_MEMBER_LIST_UPDATED, this.bindFunction(this.onSearchMemberListUpdated));
    u.CastleModel.allianceData.addEventListener(c.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdated));
    this.lockDialog();
    e.prototype.showLoaded.call(this, t);
  };
  CastleSearchMemberDialog.prototype.onAllianceDataUpdated = function (e) {
    this._allianceInfoVO = e.allianceInfoVO;
    if (this._allianceInfoVO) {
      if (this._currentCategory == CastleSearchMemberDialog.CAT_MEMBERLIST) {
        var t = new g.CastleSearchMemberDialogProperties(this._allianceInfoVO);
        if (this.dialogProperties.searchMemberList != null) {
          t.searchMemberList = this.dialogProperties.searchMemberList;
        }
        this.showSublayer(this._currentSublayer, [t]);
      }
    } else {
      this.hide();
    }
  };
  CastleSearchMemberDialog.prototype.onSearchMemberListUpdated = function (e) {
    this.dialogProperties.searchMemberList = e.params[0];
  };
  CastleSearchMemberDialog.prototype.onApplicationListUpdated = function (e) {
    this.dialogProperties.applicationList = e.params[0];
    this.changeCategory(CastleSearchMemberDialog.CAT_REQUESTS);
    this.unLockDialog();
  };
  CastleSearchMemberDialog.prototype.checkStatusChange = function () {
    if (this._isNowSearching != this._isSearching || this._isNowAccepting != this._isAccepting) {
      this._isSearching = this._isNowSearching;
      this._isAccepting = this._isNowAccepting;
      u.CastleModel.smartfoxClient.sendCommandVO(new l.C2SAllianceSetSearchMemberVO(this._isSearching, this._isAccepting));
      u.CastleModel.allianceData.myAllianceVO.isSearchingMembers = this._isSearching;
      u.CastleModel.allianceData.myAllianceVO.isAcceptingMembers = this._isAccepting;
    }
  };
  Object.defineProperty(CastleSearchMemberDialog.prototype, "isNowSearching", {
    set: function (e) {
      this._isNowSearching = e;
      d.ButtonHelper.setButtonSelected(this.dialogDisp.chkBox_yes, this._isNowSearching);
      d.ButtonHelper.setButtonSelected(this.dialogDisp.chkBox_no, !this._isNowSearching);
      if (this._isNowSearching) {
        this.dialogDisp.mc_searchStatus.gotoAndStop(1);
      } else {
        this.dialogDisp.mc_searchStatus.gotoAndStop(2);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSearchMemberDialog.prototype, "isNowAccepting", {
    set: function (e) {
      this._isNowAccepting = e;
      d.ButtonHelper.setButtonSelected(this.dialogDisp.chkBox_yes2, this._isNowAccepting);
      d.ButtonHelper.setButtonSelected(this.dialogDisp.chkBox_no2, !this._isNowAccepting);
      if (this._isNowAccepting) {
        this.dialogDisp.mc_joinStatus.gotoAndStop(1);
      } else {
        this.dialogDisp.mc_joinStatus.gotoAndStop(2);
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleSearchMemberDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        this.checkStatusChange();
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.chkBox_yes:
        this.isNowSearching = true;
        break;
      case this.dialogDisp.chkBox_no:
        this.isNowSearching = false;
        break;
      case this.dialogDisp.chkBox_yes2:
        this.isNowAccepting = true;
        break;
      case this.dialogDisp.chkBox_no2:
        this.isNowAccepting = false;
        break;
      case this.dialogDisp.btn_help:
        this._currentSublayer.showHelp();
        break;
      case this.dialogDisp.btn_openRequests:
        this.changeCategory(CastleSearchMemberDialog.CAT_REQUESTS);
        break;
      case this.dialogDisp.btn_searchMember:
        this.changeCategory(CastleSearchMemberDialog.CAT_MEMBERLIST);
    }
  };
  CastleSearchMemberDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    u.CastleModel.allianceData.removeEventListener(c.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdated));
    this._allianceInfoVO = null;
  };
  CastleSearchMemberDialog.prototype.changeCategory = function (t) {
    if (this._currentCategory != t) {
      e.prototype.changeCategory.call(this, t);
      this.showSublayer(this._subLayer.get(this._currentCategory), [this.dialogProperties]);
      d.ButtonHelper.setButtonSelected(this.dialogDisp.btn_openRequests, this._currentCategory == CastleSearchMemberDialog.CAT_REQUESTS);
      d.ButtonHelper.setButtonSelected(this.dialogDisp.btn_searchMember, this._currentCategory == CastleSearchMemberDialog.CAT_MEMBERLIST);
    }
  };
  Object.defineProperty(CastleSearchMemberDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSearchMemberDialog.__initialize_static_members = function () {
    CastleSearchMemberDialog.NAME = "CastleSearchMember";
    CastleSearchMemberDialog.CAT_NONE = "CAT_NONE";
    CastleSearchMemberDialog.CAT_REQUESTS = "CAT_REQUESTS";
    CastleSearchMemberDialog.CAT_MEMBERLIST = "CAT_MEMBERLIST";
  };
  return CastleSearchMemberDialog;
}(h.CastleExternalSubLayerDialog);
exports.CastleSearchMemberDialog = C;
var _ = require("./2474.js");
var m = require("./2480.js");
o.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();