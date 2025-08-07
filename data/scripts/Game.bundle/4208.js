Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./21.js");
var a = require("./4.js");
var s = require("./1878.js");
var r = require("./131.js");
var l = createjs.MovieClip;
var c = function (e) {
  function PopoverPanel() {
    return e.call(this, new l()) || this;
  }
  n.__extends(PopoverPanel, e);
  PopoverPanel.prototype.init = function () {
    e.prototype.init.call(this);
    this._popoverComponent = new d.SimplePopoverComponent(this.panelDisp);
  };
  PopoverPanel.prototype.show = function () {
    e.prototype.show.call(this);
    a.CastleModel.timerData.addEventListener(o.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this.controller.addEventListener(s.PopoverEvent.ON_NEW_POPOVER_ARRIVED, this.bindFunction(this.onNewPopoverArrived));
    this._popoverComponent.onAssetLoadedSignal.add(this.bindFunction(this.onPopoverAssetLoaded));
    this._popoverComponent.onSequenceCompleteSignal.add(this.bindFunction(this.onPopoverSequenceComplete));
    this._popoverComponent.onShow();
  };
  PopoverPanel.prototype.hide = function () {
    this._popoverComponent.onHide();
    a.CastleModel.timerData.removeEventListener(o.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this.controller.removeEventListener(s.PopoverEvent.ON_NEW_POPOVER_ARRIVED, this.bindFunction(this.onNewPopoverArrived));
    this._popoverComponent.onAssetLoadedSignal.remove(this.bindFunction(this.onPopoverAssetLoaded));
    this._popoverComponent.onSequenceCompleteSignal.remove(this.bindFunction(this.onPopoverSequenceComplete));
    this.stopCurrentPopover();
    e.prototype.hide.call(this);
  };
  PopoverPanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      this.disp.y = 50;
      this.disp.x = this.disp.stage.stageWidth * 0.5;
    }
  };
  PopoverPanel.prototype.checkAndExecuteNextPopover = function () {
    if (!this._currentPopoverVO && (this._currentPopoverVO = a.CastleModel.popoverData.getNextPopover(), this._currentPopoverVO)) {
      var e = u.PopoverEnum.getTypeById(this._currentPopoverVO.id);
      if (!e) {
        return;
      }
      this._currentPopoverVE = new e.veClass();
      this._currentPopoverVE.popoverVO = this._currentPopoverVO;
      this._popoverComponent.init(this._currentPopoverVE.getPopoverConfig());
      this._popoverComponent.startSequence();
    }
  };
  PopoverPanel.prototype.stopCurrentPopover = function () {
    if (this._currentPopoverVO) {
      this._popoverComponent.startState(d.SimplePopoverComponent.STATE_HIDE);
      a.CastleModel.popoverData.removeQueueItem(this._currentPopoverVO.queueId);
      this._currentPopoverVO = null;
      this._currentPopoverVE = null;
    }
  };
  PopoverPanel.prototype.onTimer = function (e) {
    this.checkAndExecuteNextPopover();
  };
  PopoverPanel.prototype.onNewPopoverArrived = function (e) {
    this.checkAndExecuteNextPopover();
  };
  PopoverPanel.prototype.onPopoverAssetLoaded = function () {
    if (this._currentPopoverVE && this._popoverComponent) {
      this._currentPopoverVE.fillContent(this._popoverComponent.getAssetDisp());
    }
  };
  PopoverPanel.prototype.onPopoverSequenceComplete = function () {
    this.stopCurrentPopover();
  };
  Object.defineProperty(PopoverPanel.prototype, "panelDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  PopoverPanel.NAME = "PopoverPanel";
  return PopoverPanel;
}(r.CastlePanel);
exports.PopoverPanel = c;
var u = require("./4209.js");
var d = require("./294.js");