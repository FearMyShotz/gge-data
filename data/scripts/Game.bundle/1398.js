Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./4.js");
var c = require("./43.js");
var u = require("./81.js");
var d = require("./93.js");
var p = createjs.MouseEvent;
var h = function (e) {
  function CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem() {
    var t = this;
    t._isMouseOver = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem, e);
  CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype.fill = function () {
    g.CastleComponent.textFieldManager.registerTextField(this.itemMc.txt_rank, new s.LocalizedNumberVO(this.rank));
    g.CastleComponent.textFieldManager.registerTextField(this.itemMc.txt_name, new r.TextVO(this.vo.playerName));
    g.CastleComponent.textFieldManager.registerTextField(this.itemMc.txt_level, new s.LocalizedNumberVO(this.vo.playerLevel));
    g.CastleComponent.textFieldManager.registerTextField(this.itemMc.txt_points, new s.LocalizedNumberVO(this.points));
    if (this.itemMc.txt_currentPoints) {
      g.CastleComponent.textFieldManager.registerTextField(this.itemMc.txt_currentPoints, new s.LocalizedNumberVO(this.vo.currentInfluencePoints));
    }
    this.itemMc.mc_indicator.gotoAndStop(this.getPrefixFrame());
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this.setDownState(false);
    this.setMouseOverState(false);
    this.itemMc.mouseChildren = false;
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this.itemMc.addEventListener(p.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.itemMc.addEventListener(p.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype.removeEventListener = function () {
    this.itemMc.removeEventListener(p.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.itemMc.removeEventListener(p.MOUSE_UP, this.bindFunction(this.onMouseUp));
    e.prototype.removeEventListener.call(this);
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype.setDownState = function (e) {
    this.itemMc.mc_downState.visible = e;
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype.setMouseOverState = function (e) {
    this.itemMc.mc_mouseOver.visible = e;
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype.onMouseDown = function (e) {
    this.setDownState(true);
    this.setMouseOverState(false);
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype.onMouseUp = function (e) {
    this.setDownState(false);
    if (this._isMouseOver) {
      this.setMouseOverState(true);
    }
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    this._isMouseOver = true;
    this.setMouseOverState(true);
    g.CastleComponent.layoutManager.customCursor.setCursorType(a.BasicCustomCursor.CURSOR_CLICK);
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    this._isMouseOver = false;
    this.setMouseOverState(false);
    this.setDownState(false);
    g.CastleComponent.layoutManager.customCursor.setCursorType(a.BasicCustomCursor.CURSOR_ARROW);
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    g.CastleComponent.dialogHandler.registerDialogsWithTypeAndDefaultValues(C.CastlePlayerInfoDialog, new d.CastlePlayerInfoDialogProperties(this.vo.playerID), c.CastleDialogConsts.DIALOG_TYPE_SINGLE);
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype.getPrefixFrame = function () {
    if (this.vo.playerName == l.CastleModel.userData.userName && (!(this.rank >= 1) || !(this.rank <= 3))) {
      return 4;
    }
    switch (this.rank) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 3;
    }
    return 5;
  };
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype, "vo", {
    get: function () {
      return this.data.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype, "rank", {
    get: function () {
      return this.data.rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype, "points", {
    get: function () {
      return this.data.points;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem;
}(u.AInfiniteScrollListItem);
exports.CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem = h;
o.classImplementsInterfaces(h, "ICollectableRendererList");
var g = require("./14.js");
var C = require("./94.js");