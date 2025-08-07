Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./49.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./8.js");
var p = require("./4460.js");
var h = createjs.Event;
var g = createjs.MouseEvent;
var C = createjs.TimerEvent;
var _ = function () {
  function CastleLuckyWheelJackpotComponent(e, t) {
    this.ITEMS_PER_PAGE = 3;
    this.MAX_BUTTONS = 6;
    this._autoSwitchDelay = 10000;
    this._tickCount = 0;
    this._currentPreviewSetID = 0;
    this.previewLevel = 0;
    this.currentPage = 0;
    this.initialButtonPositionX = 0;
    this.buttonGap = 0;
    this._disp = e;
    this._eventVO = t;
    this.init();
  }
  CastleLuckyWheelJackpotComponent.prototype.update = function () {
    if (this._previewPageSelectorMCs) {
      this.repositionPreviewPageSelectorButtons();
      if (this.pageButtonsNeeded == 1) {
        this._autoSwitchTimer.stop();
      } else {
        this.restartTimer();
      }
      this.changePreviewPage(1);
    }
  };
  CastleLuckyWheelJackpotComponent.prototype.init = function () {
    this.initButtons();
    this.previewLevel = 0;
    this.currentPage = 1;
    this._disp.addEventListener(g.CLICK, this.bindFunction(this.onClick));
    this._pageButtonContainer = this._disp.mc_buttonList;
    var e = this.initItemHolders();
    this._jackpotPrizeDisplayComponent = new p.JackpotPrizeDisplayComponent(e, this._disp.jackpot_preview_container);
    s.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.tf_jackpot_title, new c.LocalizedTextVO(this.eventVO.isProMode ? "dialog_luckyWheel_jackpotPro" : "dialog_luckyWheel_jackpotNormal"));
    this.itxt_previewLevel = s.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.mc_level.tf_jackpotLevel, new l.NumberVO(this.previewLevel + 1));
    this._disp.mc_level.toolTipText = "dialog_luckyWheel_jackpotCurrent";
    this._disp.mc_level.mouseChildren = false;
    this._pageButtonContainer.gotoAndStop(this._pageButtonContainer.totalFrames);
    this._pageButtonContainer.addEventListener(h.ENTER_FRAME, this.bindFunction(this.initPageButtons));
    this._autoSwitchTimer = new r.Timer(this._autoSwitchDelay, 0);
    this._autoSwitchTimer.addEventListener(C.TIMER, this.bindFunction(this.onSwitchPreview));
  };
  CastleLuckyWheelJackpotComponent.prototype.initPageButtons = function (e) {
    if (this._pageButtonContainer.currentFrame + 1 == this._pageButtonContainer.totalFrames) {
      this._pageButtonContainer.removeEventListener(h.ENTER_FRAME, this.bindFunction(this.initPageButtons));
      this._previewPageSelectorMCs = [];
      this.initialButtonPositionX = this._pageButtonContainer.x;
      this.buttonGap = (this._pageButtonContainer.btn_lvl_jackpots2.x - this._pageButtonContainer.btn_lvl_jackpots1.x) / 2;
      var t = [];
      for (var i = 0; i < this.MAX_BUTTONS; i++) {
        this._previewPageSelectorMCs[i] = this._pageButtonContainer["btn_lvl_jackpots" + (i + 1)];
        d.ButtonHelper.initTwoStateButton(this._previewPageSelectorMCs[i]);
        t.push(this._previewPageSelectorMCs[i].basicButton);
      }
      if (t.length > 0) {
        this._buttonGroup = new o.BasicButtonGroup(t);
        this._buttonGroup.selectButton(t[0]);
      }
      this.repositionPreviewPageSelectorButtons();
    }
  };
  CastleLuckyWheelJackpotComponent.prototype.repositionPreviewPageSelectorButtons = function () {
    var e = this.pageButtonsNeeded;
    this._pageButtonContainer.x = this.initialButtonPositionX + (this.MAX_BUTTONS - e) * this.buttonGap;
    for (var t = 0; t < this._previewPageSelectorMCs.length; t++) {
      this._previewPageSelectorMCs[t].visible = t < e;
    }
  };
  CastleLuckyWheelJackpotComponent.prototype.initItemHolders = function () {
    var e = [];
    e.push(this._disp.jackpot_current_0.mc_itemholder);
    e.push(this._disp.jackpot_current_1.mc_itemholder);
    e.push(this._disp.jackpot_current_2.mc_itemholder);
    e[0].addEventListener(g.ROLL_OVER, this.bindFunction(this.jackpotPreviewLevelSelectionRollOver));
    e[0].addEventListener(g.ROLL_OUT, this.bindFunction(this.jackpotPreviewLevelSelectionRollOut));
    e[1].addEventListener(g.ROLL_OVER, this.bindFunction(this.jackpotPreviewLevelSelectionRollOver));
    e[1].addEventListener(g.ROLL_OUT, this.bindFunction(this.jackpotPreviewLevelSelectionRollOut));
    e[2].addEventListener(g.ROLL_OVER, this.bindFunction(this.jackpotPreviewLevelSelectionRollOver));
    e[2].addEventListener(g.ROLL_OUT, this.bindFunction(this.jackpotPreviewLevelSelectionRollOut));
    return e;
  };
  CastleLuckyWheelJackpotComponent.prototype.onClick = function (e) {
    if (d.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this._disp.btn_next:
          this.previewLevel++;
          this.changePreviewLevel(this.previewLevel);
          break;
        case this._disp.btn_previous:
          this.previewLevel--;
          this.changePreviewLevel(this.previewLevel);
      }
      if (e.target.basicButton && m.instanceOfClass(e.target.basicButton, "TwoStateButton")) {
        this.jackpotPreviewLevelSelectionClick(e);
      }
    }
  };
  CastleLuckyWheelJackpotComponent.prototype.onSwitchPreview = function (e = null) {
    if (this._previewPageSelectorMCs) {
      this.currentPage++;
      if (this.currentPage > this.pageButtonsNeeded || this.currentPage < 1) {
        this.currentPage = 1;
      }
      this.changePreviewPage(this.currentPage);
    }
  };
  CastleLuckyWheelJackpotComponent.prototype.jackpotPreviewLevelSelectionClick = function (e) {
    var t = u.int(u.int(e.target.name.substr(e.target.name.length - 1, 1)));
    this._tickCount = t;
    this.restartTimer();
    this.changePreviewPage(t);
  };
  CastleLuckyWheelJackpotComponent.prototype.changePreviewPage = function (e) {
    this.currentPage = u.int(Math.max(e, 1));
    if (!(this.pageButtonsNeeded <= 1) && !(this._previewPageSelectorMCs.length < this.currentPage)) {
      this._jackpotPrizeDisplayComponent.showItems(this.eventVO.getPreviewSet(this.eventVO.currentWinClass + this.previewLevel), e);
      this.updateTitle();
      this._buttonGroup.selectButton(this._previewPageSelectorMCs[e - 1].basicButton);
    }
  };
  CastleLuckyWheelJackpotComponent.prototype.changePreviewLevel = function (e) {
    this.previewLevel = e;
    this.currentPage = 1;
    d.ButtonHelper.enableButton(this._disp.btn_next, this.eventVO.currentWinClass + e < this.eventVO.winClassesAmount);
    d.ButtonHelper.enableButton(this._disp.btn_previous, e > 0);
    if (d.ButtonHelper.isButtonEnabled(this._disp.btn_next)) {
      this._disp.btn_next.toolTipText = {
        t: "dialog_luckyWheel_teaserRadioButton_tooltip",
        p: [e + this.eventVO.currentWinClass + 1]
      };
      this._disp.btn_next.visible = true;
    } else {
      this._disp.btn_next.visible = false;
      this._disp.btn_next.toolTipText = null;
    }
    if (d.ButtonHelper.isButtonEnabled(this._disp.btn_previous)) {
      this._disp.btn_previous.toolTipText = {
        t: "dialog_luckyWheel_teaserRadioButton_tooltip",
        p: [e + this.eventVO.currentWinClass - 1]
      };
      this._disp.btn_previous.visible = true;
    } else {
      this._disp.btn_previous.visible = false;
      this._disp.btn_previous.toolTipText = null;
    }
    var t = u.int(this.eventVO.currentWinClass + e);
    if (t > this.eventVO.winClassesAmount) {
      t = u.int(this.eventVO.winClassesAmount);
    }
    this._currentPreviewSetID = t;
    this._jackpotPrizeDisplayComponent.showItems(this.eventVO.getPreviewSet(this._currentPreviewSetID), 1);
    this.itxt_previewLevel.textContentVO.numberValue = e + this.eventVO.currentWinClass;
    var i = new a.ColorMatrix();
    i.desaturate();
    if (e > 0) {
      this._disp.mc_level.useFilters(null);
      this._disp.mc_level.useFilters([i.filter]);
    } else {
      this._disp.mc_level.useFilters(null);
    }
    this._disp.mc_level.toolTipText = e == 0 ? "dialog_luckyWheel_jackpotCurrent" : {
      t: "dialog_luckyWheel_teaserRadioButton_tooltip",
      p: [e + this.eventVO.currentWinClass]
    };
    this.updateTitle();
    this.update();
  };
  CastleLuckyWheelJackpotComponent.prototype.updateTitle = function () {
    if (this.eventVO.isAtMaxClass) {
      var e = this.eventVO.isProMode ? "dialog_luckyWheel_jackpotPro" : "dialog_luckyWheel_jackpot";
      s.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.tf_jackpot_preview_title, new c.LocalizedTextVO(e));
    }
  };
  CastleLuckyWheelJackpotComponent.prototype.jackpotPreviewLevelSelectionRollOver = function (e) {
    this._autoSwitchTimer.stop();
  };
  CastleLuckyWheelJackpotComponent.prototype.jackpotPreviewLevelSelectionRollOut = function (e) {
    this.restartTimer();
  };
  CastleLuckyWheelJackpotComponent.prototype.restartTimer = function () {
    this._autoSwitchTimer.reset();
    this._autoSwitchTimer.start();
  };
  CastleLuckyWheelJackpotComponent.prototype.startDelayedAutoSwitch = function () {
    this._autoSwitchTimer.addEventListener(C.TIMER, this.bindFunction(this.onSwitchPreview));
    this.restartTimer();
  };
  CastleLuckyWheelJackpotComponent.prototype.stopDelayedAutoSwitch = function () {
    this._autoSwitchTimer.removeEventListener(C.TIMER, this.bindFunction(this.onSwitchPreview));
    this._autoSwitchTimer.stop();
  };
  CastleLuckyWheelJackpotComponent.prototype.dispose = function () {
    this.stopDelayedAutoSwitch();
    this.resetPosition();
  };
  CastleLuckyWheelJackpotComponent.prototype.resetPosition = function () {
    this._jackpotPrizeDisplayComponent.resetPosition();
  };
  CastleLuckyWheelJackpotComponent.prototype.initButtons = function () {
    this._disp.btn_next.basicButton = new n.BasicButton(this._disp.btn_next, true);
    this._disp.btn_previous.basicButton = new n.BasicButton(this._disp.btn_previous, true);
  };
  Object.defineProperty(CastleLuckyWheelJackpotComponent.prototype, "eventVO", {
    get: function () {
      return this._eventVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelJackpotComponent.prototype, "pageButtonsNeeded", {
    get: function () {
      var e = u.int(Math.min(this.eventVO.currentWinClass + this.previewLevel, this.eventVO.winClassesAmount));
      return Math.ceil(this.eventVO.getPreviewSet(e).length / this.ITEMS_PER_PAGE);
    },
    enumerable: true,
    configurable: true
  });
  return CastleLuckyWheelJackpotComponent;
}();
exports.CastleLuckyWheelJackpotComponent = _;
var m = require("./1.js");