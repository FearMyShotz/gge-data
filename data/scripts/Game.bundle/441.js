Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./6.js");
var g = require("./274.js");
var C = require("./2401.js");
var _ = require("./2402.js");
var m = require("./504.js");
var f = require("./26.js");
var O = require("./90.js");
var E = require("./4.js");
var y = require("./726.js");
var b = require("./203.js");
var D = require("./8.js");
var I = require("./112.js");
var T = createjs.Point;
var v = function (e) {
  function CastleWorldmapBookmarkSetDialog() {
    var t = this;
    t._isInRenameMode = false;
    t._playerBookmarkEditMode = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleWorldmapBookmarkSetDialog.NAME) || this;
  }
  n.__extends(CastleWorldmapBookmarkSetDialog, e);
  CastleWorldmapBookmarkSetDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new p.TextVO(""));
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_edit]);
    D.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_tab_personal_bookmark, this.dialogDisp.btn_tab_alliance_bookmark]);
    this._subLayer = new Map();
    this._subLayer.set(CastleWorldmapBookmarkSetDialog.CAT_PERSONAL_BOOKMARK, new R.CreatePersonalBookmarkSublayer(this.dialogDisp.cat_personal));
    this._subLayer.set(CastleWorldmapBookmarkSetDialog.CAT_ALLIANCE_BOOKMARK, new M.CreateAllianceBookmarkSublayer(this.dialogDisp.cat_alliance, this.bindFunction(this.checkButtonSubmitState)));
    this._itxt_name = this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new p.TextVO(""));
    this._itxt_name.maxChars = c.PlayerConst.CASTLE_NAME_MAX_LENGTH * 2;
    this._itxt_name.keyDown.add(this.bindFunction(this.onKeDownOnNameTextfield));
    this.dialogDisp.btn_help.toolTipText = "generic_help";
  };
  CastleWorldmapBookmarkSetDialog.prototype.checkButtonSubmitState = function () {
    var e = this._currentBookmarkVO.type != b.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER || this._currentBookmarkVO.type == b.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER && this._currentBookmarkVO.attackOrderDetails.assignedAttackers.length > 0;
    D.ButtonHelper.enableButton(this.dialogDisp.btn_ok, e);
  };
  CastleWorldmapBookmarkSetDialog.prototype.setTabToolTips = function () {
    var e;
    var t;
    e = E.CastleModel.userData.isInAlliance ? y.CastleBookmarkHelper.isBookmarkableForAlliance(this.dialogProperties.worldMapObjectVO) ? E.CastleModel.bookmarkData.isAllianceListFull ? "Bookmarks_addBookmark_allianceTab_limitReached_tooltip" : "Bookmarks_addBookmark_allianceTab_tooltip" : "Bookmarks_addBookmark_allianceTab_noBookmark_tooltip" : "Bookmarks_addBookmark_allianceTab_noAlliance_tooltip";
    t = E.CastleModel.bookmarkData.isPlayerListFull ? "Bookmarks_addBookmark_playerTab_limitReached_tooltip" : "Bookmarks_addBookmark_playerTab_tooltip";
    this.dialogDisp.btn_tab_personal_bookmark.toolTipText = t;
    this.dialogDisp.btn_tab_alliance_bookmark.toolTipText = e;
  };
  CastleWorldmapBookmarkSetDialog.prototype.showLoaded = function (t = null) {
    this.selectBookmarks();
    this.updateTexts();
    this.setTabToolTips();
    this.showFirstSublayer();
    this.updateCastleAndName();
    e.prototype.showLoaded.call(this, t);
    D.ButtonHelper.enableButton(this.dialogDisp.btn_tab_personal_bookmark, this.playerCanCreatePersonalBookmark());
    D.ButtonHelper.enableButton(this.dialogDisp.btn_tab_alliance_bookmark, this.playerCanCreateAllianceBookmark());
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this._tempPlayerBookmarkName = null;
    this._tempAllianceBookmarkName = null;
  };
  CastleWorldmapBookmarkSetDialog.prototype.updateTexts = function () {
    var e;
    var t;
    if (this._currentCategory == CastleWorldmapBookmarkSetDialog.CAT_PERSONAL_BOOKMARK) {
      e = this._playerBookmarkEditMode ? "Bookmarks_editBookmark_header" : "ringmenu_markLocation";
      t = this._playerBookmarkEditMode ? "Bookmarks_editBookmark_copy" : "Bookmarks_addBookmark_copy";
    } else {
      e = "ringmenu_markLocation_alliance";
      t = "Bookmarks_addBookmark_alliance_copy";
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new d.LocalizedTextVO(e)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new d.LocalizedTextVO(t));
  };
  CastleWorldmapBookmarkSetDialog.prototype.selectBookmarks = function () {
    var e = E.CastleModel.bookmarkData.getBookmarksForWMO(this.dialogProperties.worldMapObjectVO);
    this._playerBookmarkVO = this.getPlayerBookmarkVO(e);
    this._playerBookmarkEditMode = this._playerBookmarkVO != null;
    if (this._playerBookmarkVO == null) {
      this._playerBookmarkVO = S.CastleBookmarkData.createBookmarkFromWorldmapObjectVO(this.dialogProperties.worldMapObjectVO);
      this._newPlayerBookmarkVO = this._playerBookmarkVO.clone();
      this._newPlayerBookmarkVO.name = this._playerBookmarkVO.worldmapObjectVO.areaNameString;
    } else {
      this._newPlayerBookmarkVO = this._playerBookmarkVO.clone();
    }
    this._allianceBookmarkVO = this._playerBookmarkVO.clone();
    this._allianceBookmarkVO.name = this._playerBookmarkVO.worldmapObjectVO.areaNameString;
  };
  CastleWorldmapBookmarkSetDialog.prototype.onBookmarkListChanged = function (e) {
    this.selectBookmarks();
  };
  CastleWorldmapBookmarkSetDialog.prototype.getPlayerBookmarkVO = function (e) {
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.isPlayerBookmark) {
          return n;
        }
      }
    }
    return null;
  };
  CastleWorldmapBookmarkSetDialog.prototype.showFirstSublayer = function () {
    if (this.dialogProperties.tabToOpen == CastleWorldmapBookmarkSetDialog.CAT_ALLIANCE_BOOKMARK) {
      this._currentBookmarkVO = this._allianceBookmarkVO;
      this.changeCategory(CastleWorldmapBookmarkSetDialog.CAT_ALLIANCE_BOOKMARK);
    } else {
      this._currentBookmarkVO = this._newPlayerBookmarkVO;
      this.changeCategory(CastleWorldmapBookmarkSetDialog.CAT_PERSONAL_BOOKMARK);
    }
  };
  CastleWorldmapBookmarkSetDialog.prototype.playerCanCreateAllianceBookmark = function () {
    return E.CastleModel.userData.isInAlliance && S.CastleBookmarkData.isBookmarkableForAlliance(this.dialogProperties.worldMapObjectVO) && !E.CastleModel.bookmarkData.isAllianceListFull;
  };
  CastleWorldmapBookmarkSetDialog.prototype.playerCanCreatePersonalBookmark = function () {
    return !E.CastleModel.bookmarkData.isPlayerListFull && S.CastleBookmarkData.isBookmarkableForPlayer(this.dialogProperties.worldMapObjectVO);
  };
  CastleWorldmapBookmarkSetDialog.prototype.saveSwitchRenameMode = function (e) {
    if (e || this.isNameValid) {
      this.switchRenameMode(e);
      return true;
    } else {
      L.CastleExternalDialog.dialogHandler.registerDefaultDialogs(P.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(u.Localize.text("generic_alert_watchout"), u.Localize.text("Bookmarks_addBookmark_shortName_text")));
      return false;
    }
  };
  CastleWorldmapBookmarkSetDialog.prototype.switchRenameMode = function (e) {
    this._isInRenameMode = e;
    this.dialogDisp.mc_textBackground.gotoAndStop(this._isInRenameMode ? 2 : 1);
    this.dialogDisp.btn_edit.gotoAndStop(this._isInRenameMode ? 2 : 1);
    this._itxt_name.selectable = this._isInRenameMode;
    this._itxt_name.tabEnabled = this._isInRenameMode;
    this._itxt_name.mouseEnabled = this._isInRenameMode;
    if (this._isInRenameMode) {
      this._itxt_name.setFocus();
      this._itxt_name.setSelection(0, this._itxt_name.text.length);
      this.dialogDisp.btn_edit.toolTipText = "Bookmarks_addBookmark_confirm_tooltip";
    } else {
      if (this._itxt_name.text != this._currentBookmarkVO.name) {
        if (this._currentCategory == CastleWorldmapBookmarkSetDialog.CAT_PERSONAL_BOOKMARK) {
          this._tempPlayerBookmarkName = this._itxt_name.text;
        } else if (this._currentCategory == CastleWorldmapBookmarkSetDialog.CAT_ALLIANCE_BOOKMARK) {
          this._tempAllianceBookmarkName = this._itxt_name.text;
        }
      }
      document.activeElement.blur();
      this.dialogDisp.btn_edit.toolTipText = "Bookmarks_addBookmark_changeName_tooltip";
    }
  };
  CastleWorldmapBookmarkSetDialog.prototype.updateCastleAndName = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_coordinates, new p.TextVO(S.CastleBookmarkData.getCoordinateString(this._currentBookmarkVO)));
    this._itxt_name.textContentVO.stringValue = this._currentBookmarkVO.name;
    this.switchRenameMode(false);
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_castleHolder);
    if (this._currentBookmarkVO.worldmapObjectVO) {
      var e = this.dialogDisp.mc_castleHolder.addChild(A.WorldmapObjectIconHelper.drawMapObjectIcon(this._currentBookmarkVO.worldmapObjectVO, new T(80, 50), true, true, false));
      this.dialogDisp.mc_castleHolder.addChild(e);
    }
  };
  Object.defineProperty(CastleWorldmapBookmarkSetDialog.prototype, "isNameValid", {
    get: function () {
      return !!this._itxt_name.text && this._itxt_name.text.length > 0;
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldmapBookmarkSetDialog.prototype.onClick = function (t) {
    if (D.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      if (this._isInRenameMode && t.target != this.dialogDisp.txt_name && t.target != this.dialogDisp.btn_edit && t.target != this.dialogDisp.btn_close) {
        this.saveSwitchRenameMode(!this._isInRenameMode);
      }
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onSubmitButtonClicked();
          break;
        case this.dialogDisp.btn_help:
          this._currentSublayer.showHelp();
          break;
        case this.dialogDisp.btn_edit:
          this.saveSwitchRenameMode(!this._isInRenameMode);
          break;
        case this.dialogDisp.btn_tab_personal_bookmark:
          this._currentBookmarkVO = this._newPlayerBookmarkVO;
          this.changeCategory(CastleWorldmapBookmarkSetDialog.CAT_PERSONAL_BOOKMARK);
          break;
        case this.dialogDisp.btn_tab_alliance_bookmark:
          this._currentBookmarkVO = this._allianceBookmarkVO;
          this.changeCategory(CastleWorldmapBookmarkSetDialog.CAT_ALLIANCE_BOOKMARK);
      }
    }
  };
  CastleWorldmapBookmarkSetDialog.prototype.onSubmitButtonClicked = function () {
    if (this.saveSwitchRenameMode(false)) {
      this._currentBookmarkVO.name = this._itxt_name.text;
      if (this._currentBookmarkVO.isPlayerBookmark && this._playerBookmarkEditMode) {
        E.CastleModel.smartfoxClient.sendCommandVO(new _.C2SChangeBookmark(this._currentBookmarkVO));
      } else {
        E.CastleModel.smartfoxClient.sendCommandVO(new C.C2SAddBookmark(this._currentBookmarkVO));
      }
      this.hide();
    }
  };
  CastleWorldmapBookmarkSetDialog.prototype.changeCategory = function (t) {
    if (this._currentCategory != t) {
      e.prototype.changeCategory.call(this, t);
      this.showSublayer(this._subLayer.get(this._currentCategory), [this._currentBookmarkVO]);
      if (this._currentCategory == CastleWorldmapBookmarkSetDialog.CAT_PERSONAL_BOOKMARK && this._tempPlayerBookmarkName) {
        this._itxt_name.textContentVO.stringValue = this._tempPlayerBookmarkName;
      } else if (this._currentCategory == CastleWorldmapBookmarkSetDialog.CAT_ALLIANCE_BOOKMARK && this._tempAllianceBookmarkName) {
        this._itxt_name.textContentVO.stringValue = this._tempAllianceBookmarkName;
      } else {
        this._itxt_name.textContentVO.stringValue = this._currentBookmarkVO.name;
      }
      D.ButtonHelper.setButtonSelected(this.dialogDisp.btn_tab_personal_bookmark, this._currentCategory == CastleWorldmapBookmarkSetDialog.CAT_PERSONAL_BOOKMARK);
      D.ButtonHelper.setButtonSelected(this.dialogDisp.btn_tab_alliance_bookmark, this._currentCategory == CastleWorldmapBookmarkSetDialog.CAT_ALLIANCE_BOOKMARK);
      D.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
      this.updateTexts();
    }
  };
  CastleWorldmapBookmarkSetDialog.prototype.onKeDownOnNameTextfield = function (e) {
    e.stopPropagation();
    if (e.key == r.Keyboard.ENTER) {
      document.activeElement.blur();
      this.saveSwitchRenameMode(!this._isInRenameMode);
    }
  };
  Object.defineProperty(CastleWorldmapBookmarkSetDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldmapBookmarkSetDialog.prototype.addEventListenerOnShow = function () {
    E.CastleModel.specialEventData.addEventListener(f.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    E.CastleModel.bookmarkData.addEventListener(m.CastleBookmarkDataEvent.ON_LIST_CHANGED, this.bindFunction(this.onBookmarkListChanged));
    this.controller.addEventListener(O.CastleWorldmapEvent.REMOVED_ALIEN_CASTLE_FROM_MAP, this.bindFunction(this.onTargetRemoved));
  };
  CastleWorldmapBookmarkSetDialog.prototype.onTargetRemoved = function (e) {
    var t = e.params;
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o[0] == this.dialogProperties.worldMapObjectVO.absAreaPosX && o[1] == this.dialogProperties.worldMapObjectVO.absAreaPosY) {
          this.hide();
          break;
        }
      }
    }
  };
  CastleWorldmapBookmarkSetDialog.prototype.removeEventListenerOnHide = function () {
    E.CastleModel.specialEventData.removeEventListener(f.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    E.CastleModel.bookmarkData.removeEventListener(m.CastleBookmarkDataEvent.ON_LIST_CHANGED, this.bindFunction(this.onBookmarkListChanged));
    this.controller.removeEventListener(O.CastleWorldmapEvent.REMOVED_ALIEN_CASTLE_FROM_MAP, this.bindFunction(this.onTargetRemoved));
  };
  CastleWorldmapBookmarkSetDialog.prototype.onEventRemoved = function (e) {
    if (a.DictionaryUtil.containsKey(g.ClientConstEvent.EVENT_TO_AREA_TYPE, e.specialEventVO.eventId)) {
      var t = h.int(g.ClientConstEvent.EVENT_TO_AREA_TYPE.get(e.specialEventVO.eventId));
      var i = this.dialogProperties.worldMapObjectVO;
      if (i && i.areaType == t) {
        this.hide();
      }
    }
  };
  CastleWorldmapBookmarkSetDialog.__initialize_static_members = function () {
    CastleWorldmapBookmarkSetDialog.NAME = "CastleWorldmapBookmarkSet";
    CastleWorldmapBookmarkSetDialog.CAT_PERSONAL_BOOKMARK = "personal";
    CastleWorldmapBookmarkSetDialog.CAT_ALLIANCE_BOOKMARK = "alliance";
    CastleWorldmapBookmarkSetDialog.BOSS_DUNGEON_ICON_SCALE = 0.8;
    CastleWorldmapBookmarkSetDialog.EILAND_ICON_SCALE = 1;
  };
  return CastleWorldmapBookmarkSetDialog;
}(I.CastleExternalSubLayerDialog);
exports.CastleWorldmapBookmarkSetDialog = v;
var S = require("./946.js");
var A = require("./70.js");
var L = require("./11.js");
var P = require("./38.js");
var M = require("./2403.js");
var R = require("./2408.js");
l.classImplementsInterfaces(v, "ICollectableRendererList");
v.__initialize_static_members();