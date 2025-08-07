Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./4.js");
var u = require("./203.js");
var d = require("./8.js");
var p = require("./425.js");
var h = createjs.MouseEvent;
var g = createjs.Point;
var C = function () {
  function CastleWorldmapBookmarkListDialogItem(e) {
    this._disp = e;
    d.ButtonHelper.initBasicButton(e.btn_jumpTo);
    d.ButtonHelper.initBasicButton(e.btn_remove);
    d.ButtonHelper.initBasicButton(e.btn_edit);
    this._disp.btn_jumpTo.mouseChildren = false;
    this.textFieldManager.registerTextField(this._disp.btn_jumpTo.txt_value, new l.LocalizedTextVO("Bookmarks_Menu_jumpTo_copy"));
    this._disp.btn_remove.toolTipText = "Bookmarks_Menu_eraseBookmark_tooltip";
    this._disp.btn_jumpTo.toolTipText = "Bookmarks_Menu_jumpTo_tooltip";
    this._disp.btn_edit.toolTipText = "Bookmarks_Menu_changeName_tooltip";
  }
  CastleWorldmapBookmarkListDialogItem.prototype.show = function () {
    this.removeListener();
    this.addListener();
    this.setVisibility(true);
    this.updateItem();
  };
  CastleWorldmapBookmarkListDialogItem.prototype.hide = function () {
    this.removeListener();
    this.setVisibility(false);
  };
  CastleWorldmapBookmarkListDialogItem.prototype.addListener = function () {
    this._disp.addEventListener(h.CLICK, this.bindFunction(this.onClick));
  };
  CastleWorldmapBookmarkListDialogItem.prototype.removeListener = function () {
    this._disp.removeEventListener(h.CLICK, this.bindFunction(this.onClick));
  };
  CastleWorldmapBookmarkListDialogItem.prototype.updateItem = function () {
    if (this._bookmarkVO) {
      a.MovieClipHelper.clearMovieClip(this._disp.mc_castleHolder);
      if (this._bookmarkVO.worldmapObjectVO) {
        var e = O.WorldmapObjectIconHelper.drawMapObjectIcon(this._bookmarkVO.worldmapObjectVO, CastleWorldmapBookmarkListDialogItem.WMO_ICON_SIZE, true, false, false);
        this._disp.mc_castleHolder.addChild(e);
      }
      this.textFieldManager.registerTextField(this._disp.txt_name, new r.TextVO(o.TextValide.parseChatJSONMessage(this._bookmarkVO.name)));
      this._disp.mc_background.gotoAndStop(this._bookmarkVO.type == u.EWorldmapBookmarkType.PLAYER_FRIEND ? 1 : 2);
      d.ButtonHelper.enableButton(this._disp.btn_jumpTo, c.CastleModel.kingdomData.canPlayerGoToKingdom(this._bookmarkVO.kingdomId));
      this._disp.btn_jumpTo.toolTipText = d.ButtonHelper.isButtonEnabled(this._disp.btn_jumpTo) ? null : "not_unlocked";
    }
  };
  CastleWorldmapBookmarkListDialogItem.prototype.setVisibility = function (e) {
    this._disp.visible = e;
  };
  CastleWorldmapBookmarkListDialogItem.prototype.onClick = function (e) {
    if (this._bookmarkVO && d.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this._disp.btn_jumpTo:
          this.onJumpToButtonClicked();
          break;
        case this._disp.btn_edit:
          CastleWorldmapBookmarkListDialogItem.dialogHandler.registerDefaultDialogs(E.CastleWorldmapBookmarkSetDialog, new p.CastleWorldmapBookmarkSetDialogProperties(this._bookmarkVO.worldmapObjectVO));
          break;
        case this._disp.btn_remove:
          c.CastleModel.bookmarkData.deleteBookmark(this._bookmarkVO);
      }
    }
  };
  CastleWorldmapBookmarkListDialogItem.prototype.onJumpToButtonClicked = function () {
    f.CastleLayoutManager.getInstance().hideAllDialogs();
    if (this._bookmarkVO.worldmapObjectVO != null) {
      s.CommandController.instance.executeCommand(_.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, this._bookmarkVO.worldmapObjectVO);
    } else {
      s.CommandController.instance.executeCommand(_.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [this._bookmarkVO.kingdomId, this._bookmarkVO.posX, this._bookmarkVO.posY]);
    }
  };
  Object.defineProperty(CastleWorldmapBookmarkListDialogItem.prototype, "bookmarkVO", {
    set: function (e) {
      this._bookmarkVO = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapBookmarkListDialogItem.prototype, "textFieldManager", {
    get: function () {
      return n.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapBookmarkListDialogItem.prototype, "layoutManager", {
    get: function () {
      return f.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapBookmarkListDialogItem, "dialogHandler", {
    get: function () {
      return m.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldmapBookmarkListDialogItem.__initialize_static_members = function () {
    CastleWorldmapBookmarkListDialogItem.WMO_ICON_SIZE = new g(72, 48);
  };
  return CastleWorldmapBookmarkListDialogItem;
}();
exports.CastleWorldmapBookmarkListDialogItem = C;
var _ = require("./29.js");
var m = require("./9.js");
var f = require("./17.js");
var O = require("./70.js");
var E = require("./441.js");
C.__initialize_static_members();