Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./2578.js");
var p = require("./4.js");
var h = require("./43.js");
var g = require("./8.js");
var C = require("./11.js");
var _ = require("./149.js");
var m = require("./2579.js");
var f = function (e) {
  function CastleSearchAllianceDialog() {
    var t = this;
    t._isSearching = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleSearchAllianceDialog.NAME) || this;
  }
  n.__extends(CastleSearchAllianceDialog, e);
  CastleSearchAllianceDialog.prototype.initLoaded = function (t) {
    var i = this;
    if (t === undefined) {
      t = null;
    }
    e.prototype.initLoaded.call(this);
    var n = new P.SimplePopoverConfig("StatusPopover");
    n.waitDuration = -1;
    n.fadeInDuration = 0;
    n.fadeOutDuration = 0;
    n.closeOnClick = false;
    n.useClickArea = false;
    this._popoverComponent = new L.SimplePopoverComponent(this.dialogDisp);
    this._popoverComponent.init(n);
    this._popoverComponent.doWhenLoaded(function () {
      var e = i._popoverComponent.getAssetDisp();
      e.mc_icon.gotoAndStop(2);
      i.textFieldManager.registerTextField(e.txt_text, new l.LocalizedTextVO("searchingOngoing")).autoFitToBounds = true;
    });
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.TextVO(b.TextHelper.toUpperCaseLocaSafeTextId("dialog_alliance_searchAlliance"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new c.TextVO(b.TextHelper.toUpperCaseLocaSafeTextId("dialog_alliance_name")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_language, new c.TextVO(b.TextHelper.toUpperCaseLocaSafeTextId("dialog_language_name")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_allianceLanguage, new l.LocalizedTextVO("dialog_language_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_yes, new l.LocalizedTextVO("generic_btn_yes"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_no, new l.LocalizedTextVO("generic_btn_no"));
    this.textFieldManager.registerTextField(this.dialogDisp.item0.txt_recommended, new c.TextVO(b.TextHelper.toUpperCaseLocaSafeTextId("recommended_quest")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_searchAlliance, new l.LocalizedTextVO("dialog_lookingForAlliance_name"));
    this.dialogDisp.icon_distance.toolTipText = "distance";
    this.dialogDisp.icon_member.toolTipText = "dialog_alliance_member";
    this.dialogDisp.mc_searchAllianceHelp.toolTipText = "dialog_alliance_ImSearching";
    this._searchListComponent = new o.ItemList(this.dialogDisp);
    this._searchListComponent.scrollItemClass = y.ListSearchAllianceItem;
    g.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_allianceLanguage], D.ClickFeedbackButtonHover);
    g.ButtonHelper.initTwoStateButtons([this.dialogDisp.chkBox_yes, this.dialogDisp.chkBox_no]);
  };
  CastleSearchAllianceDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._popoverComponent.onShow();
    this._searchListComponent.clear();
    this._isSearching = p.CastleModel.userData.isSearchingAlliance;
    this.isSearching = this._isSearching;
    this.setAllianceLanguage("", false);
    this.fillList(this.dialogProperties.searchList);
    v.CastleBasicController.getInstance().addEventListener(S.CastleAllianceSearchEvent.ALLIANCE_SEARCH_UPDATED, this.bindFunction(this.onSearchUpdated));
  };
  CastleSearchAllianceDialog.prototype.onSearchUpdated = function (e) {
    this._popoverComponent.endSequence();
    this.fillList(e.searchList);
  };
  CastleSearchAllianceDialog.prototype.onClickScrollistItem = function (e) {
    var t = u.int(e.scrollItem.itemVO.listVO.allianceID);
    O.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(E.CastleAllianceInfoDialog, new _.CastleAllianceInfoDialogProperties(t), h.CastleDialogConsts.DIALOG_TYPE_SINGLE);
  };
  CastleSearchAllianceDialog.prototype.fillList = function (e) {
    this._searchListComponent.clear();
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = new m.ListSearchAllianceItemVO();
          o.listVO = n;
          this._searchListComponent.pushContent(o);
        }
      }
    }
    this._searchListComponent.initList();
    this._searchListComponent.addEventListener(a.ScrollItemEvent.CLICK, this.bindFunction(this.onClickScrollistItem));
  };
  Object.defineProperty(CastleSearchAllianceDialog.prototype, "isSearching", {
    set: function (e) {
      if (this._isSearching != e) {
        this._isSearching = e;
        p.CastleModel.smartfoxClient.sendCommandVO(new d.C2SAllianceSetSearchAllianceVO(e));
      }
      p.CastleModel.userData.isSearchingAlliance = this._isSearching;
      g.ButtonHelper.setButtonSelected(this.dialogDisp.chkBox_yes, this._isSearching);
      g.ButtonHelper.setButtonSelected(this.dialogDisp.chkBox_no, !this._isSearching);
    },
    enumerable: true,
    configurable: true
  });
  CastleSearchAllianceDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.chkBox_yes:
        this.isSearching = true;
        break;
      case this.dialogDisp.chkBox_no:
        this.isSearching = false;
        break;
      case this.dialogDisp.btn_allianceLanguage:
        O.CastleDialogHandler.getInstance().registerDefaultDialogs(I.AllianceLanguageSelectionDialog, new T.AllianceLanguageSelectionDialogProperties(this.selectedAllianceLanguage, this.bindFunction(this.setAllianceLanguage), true));
    }
  };
  CastleSearchAllianceDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this._searchListComponent.removeEventListener(a.ScrollItemEvent.CLICK, this.bindFunction(this.onClickScrollistItem));
    this._popoverComponent.onHide();
    v.CastleBasicController.getInstance().removeEventListener(S.CastleAllianceSearchEvent.ALLIANCE_SEARCH_UPDATED, this.bindFunction(this.onSearchUpdated));
  };
  CastleSearchAllianceDialog.prototype.setAllianceLanguage = function (e, t = true) {
    this.selectedAllianceLanguage = e;
    M.CastleAllianceForumData.LAST_SEARCHED_LANGUAGE = e;
    if (this.selectedAllianceLanguage != "") {
      this.textFieldManager.registerTextField(this.dialogDisp.btn_allianceLanguage.txt_selectedLanguage, new l.LocalizedTextVO("language_native_" + this.selectedAllianceLanguage));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.btn_allianceLanguage.txt_selectedLanguage, new l.LocalizedTextVO("dialog_allLanguages_desc"));
    }
    if (t) {
      this.fillList(null);
      this._popoverComponent.startSequence();
      p.CastleModel.smartfoxClient.sendCommandVO(new A.C2SAutoAllianceSearchVO(r.Localize.text("dialog_alliance_name_default"), "", this.selectedAllianceLanguage));
    }
  };
  Object.defineProperty(CastleSearchAllianceDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSearchAllianceDialog.NAME = "CastleAllianceSearch_W";
  return CastleSearchAllianceDialog;
}(C.CastleExternalDialog);
exports.CastleSearchAllianceDialog = f;
var O = require("./9.js");
var E = require("./132.js");
var y = require("./2580.js");
var b = require("./13.js");
var D = require("./20.js");
var I = require("./952.js");
var T = require("./951.js");
var v = require("./15.js");
var S = require("./1411.js");
var A = require("./1336.js");
var L = require("./294.js");
var P = require("./272.js");
var M = require("./223.js");
s.classImplementsInterfaces(f, "ICollectableRendererList");