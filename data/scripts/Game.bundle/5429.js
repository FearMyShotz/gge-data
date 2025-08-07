Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./6.js");
var g = require("./16.js");
var C = require("./4.js");
var _ = require("./20.js");
var m = require("./8.js");
var f = require("./377.js");
var O = require("./120.js");
var E = createjs.Point;
var y = function (e) {
  function CastleBattleLogUnitScrollListItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleBattleLogUnitScrollListItem, e);
  CastleBattleLogUnitScrollListItem.prototype.customFillItem = function () {
    e.prototype.customFillItem.call(this);
    var t = this.itemVO.unitVO;
    if (this.disp.mc_unitItem.mc_level) {
      o.MovieClipHelper.clearMovieClip(this.disp.mc_unitItem.mc_level);
    }
    this.disp.gotoAndStop(1);
    this.disp.toolTipText = t.getNameString();
    this.disp.mouseChildren = false;
    this.disp.actLikeButton = true;
    if (this.itemVO.isEffect) {
      this.textFieldManager.registerTextField(this.disp.txt_loss, new d.LocalizedTextVO("value_percentage", [this.itemVO.effectInventoryAmount]), new s.InternalGGSTextFieldConfigVO(true)).color = g.ClientConstColor.FONT_DEFAULT_COLOR;
    } else {
      this.textFieldManager.registerTextField(this.disp.mc_unitItem.mc_counter.txt_pick, new p.NumberVO(this.itemVO.logUnitVO.count), new s.InternalGGSTextFieldConfigVO(true));
    }
    if (!this.itemVO.isEffect) {
      if (t.type == "Soldiers" || t.type == "Tools") {
        if (t.isStronghold) {
          this.disp.toolTipText = c.Localize.text("Unknown_name") + "\n" + c.Localize.text("stronghold_UnitInside");
        } else {
          this.disp.toolTipText = "Unknown_name";
        }
      } else if (t.isStronghold) {
        this.disp.toolTipText = c.Localize.text(String(String(t.type).toLowerCase() + "_name")) + "\n" + c.Localize.text("stronghold_UnitInside");
      } else {
        this.disp.toolTipText = String(String(t.type).toLowerCase() + "_name");
      }
    }
    var i = C.CastleModel.otherPlayerData.getOwnerInfoVO(this.itemVO.participantVO.playerID);
    I.WodPicHelper.setCorrectUnitBackgroundPic(t, this.disp.mc_unitItem.mc_bg, Library.CastleInterfaceElements.battleLogPopUpUnitBackground, Library.CastleInterfaceElements.battleLogPopUpUnitBackground_berimond);
    if (i) {
      I.WodPicHelper.addSmallUnitPicToContainer(t, this.disp.mc_unitItem.mc_unit, i.crest.backgroundColor1, i.crest.backgroundColor2, true, 20, new E(8, 25), f.WodPicHelperUnitFramePerfectCallbackWrapper.callback4SmallPic(t, I.WodPicHelper.SMALL_UNIT_WIDTH, I.WodPicHelper.SMALL_UNIT_HEIGHT), this.disp.mc_unitItem.mc_level);
    }
    m.ButtonHelper.initButtons([this.disp], _.ClickFeedbackButtonHover);
    this.disp.mc_unitItem.mc_counter.visible = true;
    if (this.itemVO.isEffect) {
      this.disp.actLikeButton = false;
      this.disp.mc_unitItem.mc_counter.visible = false;
    } else {
      var n = h.int(this.itemVO.logUnitVO.lost);
      var a = this.textFieldManager.registerTextField(this.disp.txt_loss, new u.LocalizedNumberVO(n), new s.InternalGGSTextFieldConfigVO(true));
      a.color = this.getLostColor(n);
      a.autoFitToBounds = true;
    }
  };
  CastleBattleLogUnitScrollListItem.prototype.getLostColor = function (e) {
    if (e == 0) {
      return g.ClientConstColor.FONT_DEFAULT_COLOR;
    } else {
      return g.ClientConstColor.GENERIC_BRIGHT_RED;
    }
  };
  CastleBattleLogUnitScrollListItem.prototype.onMouseClick = function (t) {
    e.prototype.onMouseClick.call(this, t);
    if (this.itemVO && this.itemVO.unitVO && !this.itemVO.isEffect) {
      var i = C.CastleModel.otherPlayerData.getOwnerInfoVO(this.itemVO.participantVO.playerID);
      b.CastleDialogHandler.getInstance().registerDefaultDialogs(T.CastleRecruitInfoDialog, new O.CastleRecruitInfoDialogProperties(this.itemVO.unitVO, i.crest));
    }
  };
  CastleBattleLogUnitScrollListItem.prototype.onRollOver = function (t) {
    e.prototype.onRollOver.call(this, t);
    if (!this.itemVO.isEffect) {
      D.CastleLayoutManager.getInstance().nativeCursor.setCursorType(o.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  CastleBattleLogUnitScrollListItem.prototype.onRollOut = function (t) {
    e.prototype.onRollOut.call(this, t);
    D.CastleLayoutManager.getInstance().nativeCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
  };
  Object.defineProperty(CastleBattleLogUnitScrollListItem.prototype, "textFieldManager", {
    get: function () {
      return a.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBattleLogUnitScrollListItem.prototype, "itemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleBattleLogUnitScrollListItem;
}(r.ScrollItem);
exports.CastleBattleLogUnitScrollListItem = y;
var b = require("./9.js");
var D = require("./17.js");
var I = require("./63.js");
var T = require("./113.js");
l.classImplementsInterfaces(y, "MovieClip");