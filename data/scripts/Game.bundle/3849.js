Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./711.js");
var u = require("./15.js");
var d = require("./4.js");
var p = require("./510.js");
var h = require("./181.js");
var g = require("./9.js");
var C = require("./163.js");
var _ = require("./20.js");
var m = require("./349.js");
var f = require("./8.js");
var O = require("./63.js");
var E = require("./617.js");
var y = require("./614.js");
var b = require("./115.js");
var D = createjs.MouseEvent;
var I = createjs.Point;
var T = function (e) {
  function AttackDialogDragInventoryItem(t) {
    var i = e.call(this, t, AttackDialogDragInventoryItem.MARGIN) || this;
    i._collectableRenderList = [];
    f.ButtonHelper.initButtons([i.disp.btn_buy, i.disp.mc_item], _.ClickFeedbackButtonHover);
    i.disp.mc_item.dragSource = true;
    return i;
  }
  n.__extends(AttackDialogDragInventoryItem, e);
  AttackDialogDragInventoryItem.prototype.init = function (e) {
    this._unitVO = e;
    p.FightScreenHelper.initInstantBuyButton(this.disp.btn_buy, e, this.attackController.attackVO.sourceArea);
    this.renderUnit();
    this.setToolIcon();
    this.addEventListeners();
  };
  AttackDialogDragInventoryItem.prototype.renderUnit = function () {
    a.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_item.txt_text, new r.LocalizedNumberVO(this._unitVO.inventoryAmount), new o.InternalGGSTextFieldConfigVO(true));
    O.WodPicHelper.addPlayerUnitPicToContainer(this._unitVO, this.disp.mc_item.mc_icon, AttackDialogDragInventoryItem.UNIT_DIMENSION.x, AttackDialogDragInventoryItem.UNIT_DIMENSION.y, AttackDialogDragInventoryItem.UNIT_DIMENSION.x, AttackDialogDragInventoryItem.UNIT_DIMENSION.y, AttackDialogDragInventoryItem.UNIT_LEVEL_DIMENSION.x, AttackDialogDragInventoryItem.UNIT_LEVEL_OFFSET, true, null, this.disp.mc_item.mc_unitLevel);
    this.disp.mc_item.toolTipText = this._unitVO.getNameString();
  };
  AttackDialogDragInventoryItem.prototype.setToolIcon = function () {
    if (this._unitVO instanceof h.ToolUnitVO) {
      this.disp.mc_item.icon_type.visible = true;
      this.disp.mc_item.icon_type.gotoAndStop(this.getToolIconFrame(this._unitVO.toolCategory));
    } else {
      this.disp.mc_item.icon_type.visible = false;
    }
  };
  AttackDialogDragInventoryItem.prototype.getToolIconFrame = function (e) {
    return AttackDialogDragInventoryItem.TOOL_CATEGORIES.indexOf(e) + 1;
  };
  AttackDialogDragInventoryItem.prototype.destroy = function () {
    this._unitVO = null;
    this.removeEventListeners();
    this.destroyCollectableRenderList();
  };
  AttackDialogDragInventoryItem.prototype.addEventListeners = function () {
    this.disp.addEventListener(D.CLICK, this.bindFunction(this.onClick));
    u.CastleBasicController.getInstance().addEventListener(c.CastleFightDataEvent.NEW_TOOL_BOUGHT, this.bindFunction(this.onNewToolBought));
  };
  AttackDialogDragInventoryItem.prototype.removeEventListeners = function () {
    this.disp.removeEventListener(D.CLICK, this.bindFunction(this.onClick));
    u.CastleBasicController.getInstance().removeEventListener(c.CastleFightDataEvent.NEW_TOOL_BOUGHT, this.bindFunction(this.onNewToolBought));
  };
  AttackDialogDragInventoryItem.prototype.onNewToolBought = function (e) {
    var t = e.params[0];
    if (t) {
      var i = l.int(t.W);
      var n = l.int(t.A);
      if (this._unitVO.wodId == i) {
        this._unitVO.inventoryAmount = this._unitVO.inventoryAmount + n;
      }
      this.renderUnit();
    }
  };
  AttackDialogDragInventoryItem.prototype.onClick = function (e) {
    if (f.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.disp.btn_buy:
          this.showInstantBuyDialog();
          break;
        case this.disp.mc_item:
          this.dragUnit();
      }
    }
  };
  AttackDialogDragInventoryItem.prototype.dragUnit = function () {
    if (this._unitVO.inventoryAmount > 0) {
      this.attackController.startDrag(this._unitVO);
    }
  };
  AttackDialogDragInventoryItem.prototype.showInstantBuyDialog = function () {
    var e = -1;
    if (s.instanceOfClass(this.attackController.attackVO.sourceArea, "EventCampMapobjectVO")) {
      e = l.int(d.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.mapID);
    }
    g.CastleDialogHandler.getInstance().registerDefaultDialogs(E.CastleDefenceBuyUnitsDialog, new y.CastleDefenceBuyUnitsDialogProperties(this._unitVO, this.attackController.attackVO.sourceArea, e));
  };
  Object.defineProperty(AttackDialogDragInventoryItem.prototype, "attackController", {
    get: function () {
      return b.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogDragInventoryItem.prototype.destroyCollectableRenderList = function () {
    for (var e = l.int(this._collectableRenderList.length - 1); e >= 0; e--) {
      this._collectableRenderList[e].destroy();
    }
    this._collectableRenderList = [];
  };
  Object.defineProperty(AttackDialogDragInventoryItem.prototype, "collectableRenderList", {
    get: function () {
      return this._collectableRenderList;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogDragInventoryItem.__initialize_static_members = function () {
    AttackDialogDragInventoryItem.MARGIN = new C.LayoutMargin(10, 0, 10, 0);
    AttackDialogDragInventoryItem.UNIT_DIMENSION = new I(60, 60);
    AttackDialogDragInventoryItem.UNIT_LEVEL_DIMENSION = new I(20, 20);
    AttackDialogDragInventoryItem.UNIT_LEVEL_OFFSET = new I(0, 20);
  };
  AttackDialogDragInventoryItem.TOOL_CATEGORIES = ["basic", "premium", "elite", "event", "combo"];
  return AttackDialogDragInventoryItem;
}(m.MovieClipLayoutable);
exports.AttackDialogDragInventoryItem = T;
T.__initialize_static_members();