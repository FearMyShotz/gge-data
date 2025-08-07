Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./3.js");
var a = require("./23.js");
var s = require("./199.js");
var r = require("./13.js");
var l = require("./15.js");
var c = require("./4.js");
var u = require("./9.js");
var d = require("./20.js");
var p = require("./8.js");
var h = require("./716.js");
var g = require("./717.js");
var C = require("./430.js");
var _ = require("./117.js");
var m = createjs.MouseEvent;
var f = function () {
  function AttackDialogGeneralSelection() {
    this._isOpen = true;
  }
  AttackDialogGeneralSelection.prototype.init = function (e) {
    this._panelDisp = e;
    p.ButtonHelper.initButtons([this._panelDisp.mc_selection.btn_generalOverview], d.ClickFeedbackButtonHover);
    this._panelDisp.mc_generalSelection_bg.mouseChildren = false;
    n.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.mc_selection.txt_header, new o.LocalizedTextVO("dialog_attack_rework2022_generals_quickSelection_header"));
    n.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.mc_selection.btn_generalOverview.txt_label, new o.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("dialog_attack_rework2022_generals_overview_button")));
    if (!this._generalSelection) {
      var t = new g.GeneralSelectionProperties();
      t.disableMovingGenerals = true;
      t.showPreviewGenerals = false;
      this._generalSelection = new h.GeneralSelection(this._panelDisp.mc_selection, t);
      this._generalSelection.onSelectSignal.add(this.bindFunction(this.onSelectGeneral));
      this._posX = this._panelDisp.mc_selection.x;
    }
    this.close();
    var i = Array.from(c.CastleModel.generalsData.playerGenerals.values()).filter(function (e) {
      return e.isUnlocked;
    });
    i.unshift(null);
    this._generalSelection.init(i);
    this._generalSelection.onShow();
    this._panelDisp.addEventListener(m.CLICK, this.bindFunction(this.onClick));
    _.AttackDialogController.getInstance().onLordChanged.add(this.bindFunction(this.onLordChanged));
    _.AttackDialogController.getInstance().openGeneralSelection.add(this.bindFunction(this.open));
    _.AttackDialogController.getInstance().closeGeneralSelection.add(this.bindFunction(this.close));
  };
  AttackDialogGeneralSelection.prototype.destroy = function () {
    if (this._generalSelection) {
      this._generalSelection.onHide();
    }
    this._panelDisp.removeEventListener(m.CLICK, this.bindFunction(this.onClick));
    _.AttackDialogController.getInstance().onLordChanged.remove(this.bindFunction(this.onLordChanged));
    _.AttackDialogController.getInstance().openGeneralSelection.remove(this.bindFunction(this.open));
    _.AttackDialogController.getInstance().closeGeneralSelection.remove(this.bindFunction(this.close));
  };
  AttackDialogGeneralSelection.prototype.open = function () {
    if (!this._isOpen) {
      this._isOpen = true;
      a.TweenMax.killTweensOf(this._panelDisp.mc_selection);
      this._panelDisp.visible = true;
      a.TweenMax.to(this._panelDisp.mc_selection, 0.2, {
        x: this._posX,
        ease: a.Power1.easeOut,
        onComplete: this.bindFunction(this.onOpenComplete)
      });
    }
  };
  AttackDialogGeneralSelection.prototype.close = function () {
    var e = this;
    if (this._isOpen) {
      this._isOpen = false;
      a.TweenMax.killTweensOf(this._panelDisp.mc_selection);
      a.TweenMax.to(this._panelDisp.mc_selection, 0.2, {
        x: this._posX - this._panelDisp.mc_selection.width,
        ease: a.Linear.easeOut,
        onComplete: function () {
          e._panelDisp.visible = false;
        },
        onStart: this.bindFunction(this.onCloseStart)
      });
    }
  };
  AttackDialogGeneralSelection.prototype.onClick = function (e) {
    if (p.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this._panelDisp.mc_selection.btn_generalOverview:
          u.CastleDialogHandler.getInstance().registerDefaultDialogs(C.GeneralsOverviewDialog);
          break;
        case this._panelDisp.mc_generalSelection_bg:
          _.AttackDialogController.getInstance().closeGeneralSelection.dispatch();
      }
    }
  };
  AttackDialogGeneralSelection.prototype.onSelectGeneral = function (e) {
    c.CastleModel.lordData.assignGeneral(_.AttackDialogController.getInstance().selectedLord, e);
  };
  AttackDialogGeneralSelection.prototype.onLordChanged = function () {
    if (this._generalSelection) {
      var e = _.AttackDialogController.getInstance().selectedLord;
      var t = e ? e.assignedGeneralVO : null;
      this._generalSelection.selectGeneralVO(t, false);
    }
  };
  Object.defineProperty(AttackDialogGeneralSelection.prototype, "generalSelection", {
    get: function () {
      return this._generalSelection;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogGeneralSelection.prototype.onOpenComplete = function () {
    l.CastleBasicController.getInstance().dispatchEvent(new s.CastleDialogEvent(s.CastleDialogEvent.ATTACK_SCREEN_OPEN_GENERALS_SELECTION));
  };
  AttackDialogGeneralSelection.prototype.onCloseStart = function () {
    l.CastleBasicController.getInstance().dispatchEvent(new s.CastleDialogEvent(s.CastleDialogEvent.ATTACK_SCREEN_CLOSE_GENERALS_SELECTION));
  };
  Object.defineProperty(AttackDialogGeneralSelection.prototype, "isVisble", {
    get: function () {
      return this._panelDisp.visible;
    },
    enumerable: true,
    configurable: true
  });
  return AttackDialogGeneralSelection;
}();
exports.AttackDialogGeneralSelection = f;