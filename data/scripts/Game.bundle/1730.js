Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./85.js");
var u = require("./377.js");
var d = require("./120.js");
var p = function (e) {
  function UnitScrollListItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(UnitScrollListItem, e);
  UnitScrollListItem.prototype.customFillItem = function () {
    e.prototype.customFillItem.call(this);
    var t = this.itemVO.unitVO;
    var i = this.itemVO.crestVO;
    if (t.isStronghold) {
      this.disp.gotoAndStop(2);
      this.disp.toolTipText = l.Localize.text(t.getNameString()) + "\n" + l.Localize.text("stronghold_UnitInside");
    } else {
      this.disp.gotoAndStop(1);
      this.disp.toolTipText = t.getNameString();
    }
    this.disp.mouseChildren = false;
    this.textFieldManager.registerTextField(this.disp.mc_counter.txt_pick, new c.CastleLocalizedNumberVO(t.inventoryAmount, {
      compactThreshold: 10000,
      compactFractionalDigits: 0
    }));
    if (t.type == "Soldiers" || t.type == "Tools") {
      if (t.isStronghold) {
        this.disp.toolTipText = l.Localize.text("Unknown_name") + "\n" + l.Localize.text("stronghold_UnitInside");
      } else {
        this.disp.toolTipText = "Unknown_name";
      }
    } else if (t.isStronghold) {
      this.disp.toolTipText = l.Localize.text(String(String(t.type).toLowerCase() + "_name")) + "\n" + l.Localize.text("stronghold_UnitInside");
    } else {
      this.disp.toolTipText = String(String(t.type).toLowerCase() + "_name");
    }
    this.disp.mc_counter.visible = !this.itemVO.isDefenceSpyItem;
    C.WodPicHelper.addUnitPicToContainer(t, this.disp, this.itemVO.maxUnitSize > 0 ? this.itemVO.maxUnitSize : C.WodPicHelper.SMALL_UNIT_WIDTH, this.itemVO.maxUnitSize > 0 ? this.itemVO.maxUnitSize : C.WodPicHelper.SMALL_UNIT_HEIGHT, this.itemVO.maxUnitSize > 0 ? this.itemVO.maxUnitSize : C.WodPicHelper.SMALL_UNIT_WIDTH, this.itemVO.maxUnitSize > 0 ? this.itemVO.maxUnitSize : C.WodPicHelper.SMALL_UNIT_HEIGHT, i.backgroundColor1, i.backgroundColor2, this.itemVO.levelIconSize, this.itemVO.levelIconOffset, true, u.WodPicHelperUnitFramePerfectCallbackWrapper.callback4SmallPic(t, C.WodPicHelper.SMALL_UNIT_WIDTH, C.WodPicHelper.SMALL_UNIT_HEIGHT));
  };
  UnitScrollListItem.prototype.onMouseClick = function (t) {
    e.prototype.onMouseClick.call(this, t);
    if (this.itemVO && this.itemVO.unitVO) {
      h.CastleDialogHandler.getInstance().registerDefaultDialogs(_.CastleRecruitInfoDialog, new d.CastleRecruitInfoDialogProperties(this.itemVO.unitVO, this.itemVO.crestVO));
    }
  };
  UnitScrollListItem.prototype.onRollOver = function (t) {
    e.prototype.onRollOver.call(this, t);
    g.CastleLayoutManager.getInstance().nativeCursor.setCursorType(o.BasicCustomCursor.CURSOR_CLICK);
  };
  UnitScrollListItem.prototype.onRollOut = function (t) {
    e.prototype.onRollOut.call(this, t);
    g.CastleLayoutManager.getInstance().nativeCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
  };
  Object.defineProperty(UnitScrollListItem.prototype, "textFieldManager", {
    get: function () {
      return a.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitScrollListItem.prototype, "itemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  return UnitScrollListItem;
}(s.ScrollItem);
exports.UnitScrollListItem = p;
var h = require("./9.js");
var g = require("./17.js");
var C = require("./63.js");
var _ = require("./115.js");
r.classImplementsInterfaces(p, "MovieClip");