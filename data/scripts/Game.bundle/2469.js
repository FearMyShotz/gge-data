Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./44.js");
var c = require("./4.js");
var u = require("./8.js");
var d = require("./11.js");
var p = createjs.MouseEvent;
var h = function (e) {
  function CastleAllianceLandmarksDialog() {
    var t = this;
    t._currentItemStartIndex = 0;
    t._currentSortType = r.int(g.AllianceLandmarksList.SORT_BY_LANDMARK);
    t._isReverseSortOrder = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleAllianceLandmarksDialog.NAME) || this;
  }
  n.__extends(CastleAllianceLandmarksDialog, e);
  CastleAllianceLandmarksDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_help, this.dialogDisp.btn_up, this.dialogDisp.btn_down, this.dialogDisp.btn_sortByLandmarks, this.dialogDisp.btn_sortByUser, this.dialogDisp.btn_sortByLevel, this.dialogDisp.btn_sortByKingdom]);
    this._itemRenderer = [];
    for (var i = 0; i < CastleAllianceLandmarksDialog.ITEM_COUNT; ++i) {
      var n = new _.CastleAllianceLandmarksDialogItemRenderer(this.dialogDisp["mc_item" + i]);
      this._itemRenderer.push(n);
    }
  };
  CastleAllianceLandmarksDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.dialogDisp.addEventListener(p.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("dialog_landmarkList_Header"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_sortByLandmarks.txt_value, new s.LocalizedTextVO("dialog_landmarkList_Landmark"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_sortByUser.txt_value, new s.LocalizedTextVO("dialog_landmarkList_Owner"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_sortByLevel.txt_value, new s.LocalizedTextVO("dialog_landmarkList_Level"));
    this.dialogDisp.btn_sortByKingdom.toolTipText = "dialog_landmarkList_Kingdom";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.updateItemList();
  };
  CastleAllianceLandmarksDialog.prototype.hideLoaded = function (t = null) {
    this.dialogDisp.removeEventListener(p.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.removeItemEventListner();
    e.prototype.hideLoaded.call(this, t);
  };
  CastleAllianceLandmarksDialog.prototype.removeItemEventListner = function () {
    if (this._itemRenderer) {
      for (var e = 0; e < this._itemRenderer.length; ++e) {
        this._itemRenderer[e].onHide();
      }
    }
  };
  CastleAllianceLandmarksDialog.prototype.updateItemList = function () {
    this.removeItemEventListner();
    var e = this.landmarksList.getCompleteListBySortType(this._currentSortType, this._isReverseSortOrder);
    for (var t = 0; t < CastleAllianceLandmarksDialog.ITEM_COUNT; ++t) {
      var i = this._itemRenderer[t];
      i.onShow();
      i.worldmapObjectVO = this._currentItemStartIndex + t < e.length ? e[this._currentItemStartIndex + t] : null;
      i.updateDisp();
    }
    this.updateScrollButtons();
  };
  CastleAllianceLandmarksDialog.prototype.onMouseWheel = function (e) {
    if (e.delta < 0) {
      this.onScrollButton(-CastleAllianceLandmarksDialog.SCROLL_DELTA_VALUE);
    } else if (e.delta > 0) {
      this.onScrollButton(CastleAllianceLandmarksDialog.SCROLL_DELTA_VALUE);
    }
  };
  CastleAllianceLandmarksDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (u.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_ok:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_up:
          this.onScrollButton(-CastleAllianceLandmarksDialog.SCROLL_DELTA_VALUE);
          break;
        case this.dialogDisp.btn_down:
          this.onScrollButton(CastleAllianceLandmarksDialog.SCROLL_DELTA_VALUE);
          break;
        case this.dialogDisp.btn_sortByLandmarks:
          this.onChangeSortType(g.AllianceLandmarksList.SORT_BY_LANDMARK);
          break;
        case this.dialogDisp.btn_sortByUser:
          this.onChangeSortType(g.AllianceLandmarksList.SORT_BY_USER);
          break;
        case this.dialogDisp.btn_sortByLevel:
          this.onChangeSortType(g.AllianceLandmarksList.SORT_BY_LEVEL);
          break;
        case this.dialogDisp.btn_sortByKingdom:
          this.onChangeSortType(g.AllianceLandmarksList.SORT_BY_KINGDOM);
          break;
        case this.dialogDisp.btn_help:
          C.CastleDialogHandler.getInstance().showHelper("", a.Localize.text(l.SpecialServerHelper.checkTextIDForSkinText("help_landmarkList_helpText")));
      }
    }
  };
  CastleAllianceLandmarksDialog.prototype.onChangeSortType = function (e) {
    this._isReverseSortOrder = this._currentSortType == e && !this._isReverseSortOrder;
    this._currentSortType = e;
    this._currentItemStartIndex = 0;
    this.updateItemList();
  };
  CastleAllianceLandmarksDialog.prototype.onScrollButton = function (e) {
    this._currentItemStartIndex += e;
    var t = r.int(Math.max(0, this.landmarksList.completeListCount - CastleAllianceLandmarksDialog.ITEM_COUNT));
    this._currentItemStartIndex = r.int(Math.min(Math.max(0, this._currentItemStartIndex), t));
    this.updateItemList();
  };
  CastleAllianceLandmarksDialog.prototype.updateScrollButtons = function () {
    u.ButtonHelper.enableButton(this.dialogDisp.btn_up, this._currentItemStartIndex > 0);
    u.ButtonHelper.enableButton(this.dialogDisp.btn_down, this._currentItemStartIndex < this.landmarksList.completeListCount - CastleAllianceLandmarksDialog.ITEM_COUNT);
  };
  Object.defineProperty(CastleAllianceLandmarksDialog.prototype, "landmarksList", {
    get: function () {
      return c.CastleModel.allianceData.myAllianceVO.landmarksList;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceLandmarksDialog.NAME = "CastleAllianceLandmarks";
  CastleAllianceLandmarksDialog.ITEM_COUNT = 3;
  CastleAllianceLandmarksDialog.SCROLL_DELTA_VALUE = 1;
  return CastleAllianceLandmarksDialog;
}(d.CastleExternalDialog);
exports.CastleAllianceLandmarksDialog = h;
o.classImplementsInterfaces(h, "ICollectableRendererList");
var g = require("./1223.js");
var C = require("./9.js");
var _ = require("./2470.js");