Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./39.js");
var s = require("./4.js");
var r = require("./1291.js");
var l = require("./724.js");
var c = require("./425.js");
var u = require("./8.js");
var d = function (e) {
  function ButtonBookmarkComponent(t) {
    var i = this;
    i._showDefaultToolTip = false;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(ButtonBookmarkComponent, e);
  Object.defineProperty(ButtonBookmarkComponent.prototype, "targetWMO", {
    set: function (e) {
      this._worldMapObjectVO = e;
    },
    enumerable: true,
    configurable: true
  });
  ButtonBookmarkComponent.prototype.initAsRingmenuButton = function () {
    this.initBookmarkButton(false);
  };
  ButtonBookmarkComponent.prototype.initBookmarkButton = function (e = false) {
    this._showDefaultToolTip = e;
    this._button.visible = p.CastleBookmarkData.isBookmarkableForPlayer(this._worldMapObjectVO) || p.CastleBookmarkData.isBookmarkableForAlliance(this._worldMapObjectVO);
    if (this._button.visible) {
      this._config = this.calcButtonState();
      u.ButtonHelper.enableButton(this._button, this._config.enableButton);
      this._button.toolTipText = this._config.errorToolTipTextID;
    }
  };
  ButtonBookmarkComponent.prototype.calcButtonState = function () {
    var e = null;
    e = s.CastleModel.tutorialData.isTutorialActive ? new r.ButtonBookmarkConfigVO(false, a.ClientConstTextIds.NOT_AVAILABLE) : l.CastleBookmarkHelper.getBookmarkButtonConfiguration(this._worldMapObjectVO);
    if (this._showDefaultToolTip) {
      e.errorToolTipTextID = "ringmenu_markLocation";
    }
    return e;
  };
  ButtonBookmarkComponent.prototype.onClick = function () {
    if (u.ButtonHelper.isButtonEnabled(this._button) && this._config && this._config.buttonAction != r.ButtonBookmarkConfigVO.ACTION_NONE) {
      var e;
      switch (this._config.buttonAction) {
        case r.ButtonBookmarkConfigVO.ACTION_OPEN_CREATE_ALLIANCE_BOOKMARK:
          e = g.CastleWorldmapBookmarkSetDialog.CAT_ALLIANCE_BOOKMARK;
          break;
        case r.ButtonBookmarkConfigVO.ACTION_OPEN_CREATE_PLAYER_BOOKMARK:
          e = g.CastleWorldmapBookmarkSetDialog.CAT_PERSONAL_BOOKMARK;
      }
      h.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleWorldmapBookmarkSetDialog, new c.CastleWorldmapBookmarkSetDialogProperties(this._worldMapObjectVO, e));
    }
  };
  Object.defineProperty(ButtonBookmarkComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_markLocation";
    },
    enumerable: true,
    configurable: true
  });
  return ButtonBookmarkComponent;
}(require("./150.js").ButtonBasicComponent);
exports.ButtonBookmarkComponent = d;
var p = require("./945.js");
var h = require("./9.js");
var g = require("./441.js");
o.classImplementsInterfaces(d, "IWorldMapObjectRingmenuButtonComponent");