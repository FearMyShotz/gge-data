Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./23.js");
var l = require("./31.js");
var c = require("./19.js");
var u = require("./4.js");
var d = require("./459.js");
var p = require("./27.js");
var h = require("./40.js");
var g = require("./20.js");
var C = require("./237.js");
var _ = require("./8.js");
var m = require("./9.js");
var f = require("./25.js");
var O = require("./1585.js");
var E = require("./1586.js");
var y = createjs.Point;
var b = createjs.MouseEvent;
var D = function (e) {
  function CastleRefineryToolsmithCraftingSlot(t, i, n, a) {
    var r = e.call(this, t) || this;
    r._slotType = i;
    r._index = n;
    r._selectSlotCallback = a;
    r._slotClickFeedback = new C.ClickFeedbackHoverBehaviour(r.disp.mc_filled, r.disp.mc_filled.mc_mouseOver, r.disp.mc_filled.mc_mouseDown);
    r._originalX = r.disp.x;
    r._itxt_unlockTime = o.GoodgameTextFieldManager.getInstance().registerTextField(r.disp.mc_empty_temporary.txt_time, new s.TextVO(""));
    r._itxt_unlockTime.autoFitToBounds = true;
    var l = r._slotType == d.CraftingSlotVO.SLOT_TYPE_PRODUCTION;
    r.disp.mc_empty_temporary.gotoAndStop(l ? 1 : 2);
    r.disp.mc_empty.gotoAndStop(l ? 1 : 2);
    r.disp.mc_empty.toolTipText = l ? "dialog_crafting_productionSlot_available_tooltip" : "dialog_crafting_queueSlot_available_tooltip";
    r.disp.mc_locked.btn_buy.toolTipText = l ? "dialog_crafting_tempProductionSlot_locked_tooltip" : "dialog_crafting_tempQueueSlot_locked_tooltip";
    r.disp.mc_empty.mouseChildren = false;
    r.disp.mc_empty_temporary.mouseChildren = false;
    r.disp.mc_filled.mouseChildren = false;
    _.ButtonHelper.initButtons([r.disp.mc_locked.btn_buy], g.ClickFeedbackButtonHover);
    return r;
  }
  n.__extends(CastleRefineryToolsmithCraftingSlot, e);
  Object.defineProperty(CastleRefineryToolsmithCraftingSlot.prototype, "queueID", {
    set: function (e) {
      this._queueID = e;
      this._slotVO = u.CastleModel.craftingData.getQueueVOByID(this._queueID).getSlotsByType(this._slotType)[this._index];
      this.update();
    },
    enumerable: true,
    configurable: true
  });
  CastleRefineryToolsmithCraftingSlot.prototype.update = function () {
    this.disp.x = this.originalX;
    r.TweenMax.killTweensOf(this.disp);
    this.updateStates();
    this.updateRecipeIcon();
    this.onTimerUpdate();
  };
  CastleRefineryToolsmithCraftingSlot.prototype.updateStates = function () {
    this.disp.mc_locked.visible = this._slotVO.isLocked();
    this.disp.mc_filled.visible = this._slotVO.isFilled();
    this.disp.mc_empty_temporary.visible = this._slotVO.isTemporarySlot && !this._slotVO.isLocked();
    this.disp.mc_empty.visible = !this._slotVO.isTemporarySlot && !this._slotVO.isLocked();
    _.ButtonHelper.enableButton(this.disp.mc_locked.btn_buy, this._slotVO.previousSlot() && !this._slotVO.previousSlot().isLocked());
  };
  CastleRefineryToolsmithCraftingSlot.prototype.updateRecipeIcon = function () {
    if (this.slotVO.isFilled()) {
      var e = this._slotVO.recipeVO.output.list[0];
      var t = e.clone();
      t.amount = Math.round(e.amount * (1 + this.slotVO.boosterValue / 100));
      f.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new l.CollectableRenderClips(this.disp.mc_filled), t, new c.CollectableRenderOptions(c.CollectableRenderOptions.ICON | c.CollectableRenderOptions.TEXTFIELD, new y(56, 46)));
    }
  };
  CastleRefineryToolsmithCraftingSlot.prototype.updateToolTipText = function () {
    if (this.slotVO.isFilled()) {
      var e = this.slotVO.isProductionSlot ? "dialog_crafting_productionSlot_occupied_tooltip" : "dialog_crafting_queueSlot_occupied_tooltip";
      this.disp.mc_filled.toolTipText = {
        t: e,
        p: [this.slotVO.recipeVO.getNameString()]
      };
    } else if (this.slotVO.getRemainingUnlockTime() > 0) {
      e = this.slotVO.isProductionSlot ? "dialog_crafting_tempProductionSlot_available_tooltip" : "dialog_crafting_tempQueueSlot_available_tooltip";
      this.disp.mc_empty_temporary.toolTipText = {
        t: e,
        p: [p.CastleTimeStringHelper.getShortTimeString(this.slotVO.getRemainingUnlockTime())]
      };
    }
  };
  CastleRefineryToolsmithCraftingSlot.prototype.onTimerUpdate = function () {
    this.updateStates();
    this.updateToolTipText();
    if (this.slotVO.isFilled()) {
      this.disp.mc_filled.progressBar.scaleX = this.slotVO.getRemainingProductionTimeRatio();
    } else if (this.slotVO.getRemainingUnlockTime() > 0) {
      this._itxt_unlockTime.textContentVO.stringValue = p.CastleTimeStringHelper.getShortTimeString(this.slotVO.getRemainingUnlockTime());
    }
  };
  CastleRefineryToolsmithCraftingSlot.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    if (this._slotClickFeedback) {
      this._slotClickFeedback.addEventListener();
    }
    this.disp.addEventListener(b.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
  };
  CastleRefineryToolsmithCraftingSlot.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    if (this._slotClickFeedback) {
      this._slotClickFeedback.removeEventListener();
    }
    this.disp.removeEventListener(b.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
  };
  CastleRefineryToolsmithCraftingSlot.prototype.onClick = function (t) {
    var i = this;
    e.prototype.onClick.call(this, t);
    if (_.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.disp.mc_locked.btn_buy:
          m.CastleDialogHandler.getInstance().registerDialogs(O.CastleBuyTempProductionSlotDialog, new E.CastleBuyTempProductionSlotDialogProperties(this._slotVO, function () {
            return i._slotVO.buy();
          }));
      }
    }
  };
  CastleRefineryToolsmithCraftingSlot.prototype.onMouseDown = function (e) {
    switch (e.target) {
      case this.disp.mc_filled:
        if (this._selectSlotCallback) {
          this._selectSlotCallback(this);
        }
    }
  };
  Object.defineProperty(CastleRefineryToolsmithCraftingSlot.prototype, "slotVO", {
    get: function () {
      return this._slotVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleRefineryToolsmithCraftingSlot.prototype.setSelected = function (e) {
    this.disp.mc_filled.mc_bg.gotoAndStop(e ? 2 : 1);
  };
  Object.defineProperty(CastleRefineryToolsmithCraftingSlot.prototype, "originalX", {
    get: function () {
      return this._originalX;
    },
    enumerable: true,
    configurable: true
  });
  return CastleRefineryToolsmithCraftingSlot;
}(h.CastleItemRenderer);
exports.CastleRefineryToolsmithCraftingSlot = D;
a.classImplementsInterfaces(D, "ICollectableRendererList");