Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./3.js");
var s = require("./23.js");
var r = require("./179.js");
var l = require("./13.js");
var c = require("./4.js");
var u = require("./721.js");
var d = require("./280.js");
var p = require("./281.js");
var h = require("./163.js");
var g = require("./20.js");
var C = require("./59.js");
var _ = require("./8.js");
var m = require("./11.js");
var f = require("./282.js");
var O = require("./247.js");
var E = require("./2207.js");
var y = function (e) {
  function GeneralsLevelUPDialog() {
    var t = e.call(this, GeneralsLevelUPDialog.NAME) || this;
    t.state = 0;
    t._currentProgressAmount = -1;
    return t;
  }
  n.__extends(GeneralsLevelUPDialog, e);
  GeneralsLevelUPDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    _.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.mc_switch.btn_switch], g.ClickFeedbackButtonHover, 1);
    var i = new d.AccordionComponentProperties();
    i.scrollStrategy = C.DynamicSizeScrollStrategyVertical;
    i.disableButtons = true;
    i.scrollToOpened = true;
    this._scrollList = new f.DynamicSliderAccordionComponent(this.dialogDisp.mc_list, i);
    this.itemProperties = new p.GenericCollapsibleItemProperties(new h.LayoutMargin(0, 4, 0, 0), true, 0.2, 0.2, false);
  };
  GeneralsLevelUPDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.state = 0;
    this.dialogDisp.txt_gotXP.alpha = 0;
    if (this.generalVO.isStarLevelUpgradeable) {
      this.changeState(GeneralsLevelUPDialog.STATE_STAR);
    } else if (this.generalVO.isXpUpgradeable) {
      this.changeState(GeneralsLevelUPDialog.STATE_XP);
    }
    this.updateItems();
    this._scrollList.show();
    c.CastleModel.generalsData.addEventListener(r.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onProgressChanged));
    c.CastleModel.generalsData.addEventListener(r.GeneralsEvent.GENERAL_STAR_UP, this.bindFunction(this.onStarUp));
  };
  GeneralsLevelUPDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this._generalIcon.onHide();
    this._scrollList.hide();
    if (this._tweenSwitch) {
      this._tweenSwitch.kill();
    }
    if (this._tweenXP) {
      this._tweenXP.kill();
    }
    c.CastleModel.generalsData.removeEventListener(r.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onProgressChanged));
    c.CastleModel.generalsData.removeEventListener(r.GeneralsEvent.GENERAL_STAR_UP, this.bindFunction(this.onStarUp));
  };
  GeneralsLevelUPDialog.prototype.updateItems = function () {
    this._scrollList.clear();
    var e = [];
    var t = [];
    if (this.isStarState) {
      var i = [];
      if (this.generalVO.isUnlocked) {
        i = this.generalVO.upgradeCurrencyIDs;
      } else {
        i.push(this.generalVO.generalXmlVO.unlockCurrencyID);
      }
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (c.CastleModel.currencyData.getAmountById(a) > 0) {
          t.push(a);
        }
      }
    } else {
      for (var s = 0, r = c.CastleModel.generalsData.getAllXPCurrencies(); s < r.length; s++) {
        a = r[s];
        if (c.CastleModel.currencyData.getAmountById(a) > 0) {
          t.push(a);
        }
      }
    }
    for (var l = 0, u = t; l < u.length; l++) {
      var d = u[l];
      var p = new E.GeneralsLevelUpDialogListItem([this.generalVO, d], this.itemProperties);
      e.push(p);
    }
    for (var h = 0; h < e.length; h++) {
      this._scrollList.addItem(e[h]);
    }
    this.dialogDisp.mc_list.mc_empty.visible = e.length <= 0;
    this._scrollList.show();
  };
  GeneralsLevelUPDialog.prototype.changeState = function (e) {
    if (e != this.state) {
      this.state = e;
      this.onSwitch();
    }
  };
  GeneralsLevelUPDialog.prototype.onSwitch = function () {
    this._currentProgressAmount = -1;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new a.TextVO(this.generalVO.nameText));
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_general);
    this._generalIcon = new O.GeneralSelectionItem(this.generalVO, this.dialogDisp.mc_general, false, true, false);
    this._generalIcon.disp.y -= 3;
    this._generalIcon.onShow();
    if (this.isStarState) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_levelUpDialog_header")));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_switch.btn_switch.txt_copy, new a.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_levelUp_link_button"))).autoFitToBounds = true;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_switch.txt_copy, new a.LocalizedTextVO("dialog_generals_levelUpDialog_levelUpRequired_desc"));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_list.mc_empty.txt_copy, new a.LocalizedTextVO("dialog_generals_levelUpDialog_noShards_desc"));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_levelUpDialog_header")));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_switch.btn_switch.txt_copy, new a.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_starRating_link_button"))).autoFitToBounds = true;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_switch.txt_copy, new a.LocalizedTextVO("dialog_generals_levelUpDialog_starRatingRequired_desc"));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_list.mc_empty.txt_copy, new a.LocalizedTextVO("dialog_generals_levelUpDialog_noBoosters_desc"));
    }
    this.updateItems();
    this.onProgressChanged();
  };
  GeneralsLevelUPDialog.prototype.onStarUp = function () {
    this.hide();
  };
  GeneralsLevelUPDialog.prototype.onProgressChanged = function () {
    this.updateItems();
    var e = this.generalVO.currentLevel >= this.generalVO.maxLevel - 1;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_starLevel.txt_currentLevel, new a.LocalizedNumberVO(this.generalVO.currentStarLevel));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_starLevel.txt_nextLevel, new a.LocalizedNumberVO(this.generalVO.currentStarLevel + 1));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_level.mc_currentLevel.txt_copy, new a.LocalizedNumberVO(this.generalVO.currentLevel));
    this.dialogDisp.mc_level.mc_currentLevel.mc_maxLevel.visible = false;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_level.mc_nextLevel.txt_copy, new a.LocalizedNumberVO(this.generalVO.currentLevel + 1)).visible = !e;
    this.dialogDisp.mc_level.mc_nextLevel.mc_maxLevel.visible = e;
    var t = this.isStarState ? 0 : this.generalVO.currentLevelXP;
    var i = this.isStarState ? this.generalVO.requiredShards : this.generalVO.nextLevelXP;
    var n = false;
    this.dialogDisp.mc_starLevel.visible = this.isStarState && this.generalVO.isStarLevelUpgradeable && this.generalVO.isUnlocked && i > 0;
    this.dialogDisp.mc_starLevel.mc_currentLevel.gotoAndStop(this.generalVO.currentStarLevel <= 0 ? 1 : this.generalVO.currentStarLevel <= 5 ? 2 : 3);
    this.dialogDisp.mc_starLevel.mc_nextLevel.gotoAndStop(this.generalVO.currentStarLevel < 5 ? 2 : 3);
    this.dialogDisp.mc_level.visible = this.isXPState && this.generalVO.isXpUpgradeable && this.generalVO.isUnlocked && i > 0;
    if (this.isXPState) {
      var r = this.generalVO.currentLevel;
      if (this._currentProgressAmount != -1 && this._currentProgressAmount != r) {
        var l = r - this._currentProgressAmount;
        if (l <= 1) {
          this.textFieldManager.registerTextField(this.dialogDisp.txt_gotXP, new a.LocalizedTextVO("dialog_battleLog_generalXP_levelProgress_desc", [l]));
        } else {
          this.textFieldManager.registerTextField(this.dialogDisp.txt_gotXP, new a.LocalizedTextVO("dialog_battleLog_generalXP_levelProgress_plural_desc", [l]));
        }
        this._tweenXP = s.TweenMax.fromTo(this.dialogDisp.txt_gotXP, 3, {
          alpha: 1
        }, {
          alpha: 0,
          ease: s.Linear.ease,
          delay: 0,
          yoyo: false,
          repeat: 0
        });
        n = true;
      }
      this._currentProgressAmount = r;
    }
    var c = this.isXPState && this.generalVO.isStarLevelUpgradeable;
    this.dialogDisp.mc_progressBar.visible = !c && i > 0;
    this.dialogDisp.mc_progressBar.mc_bar.scaleX = o.MathBase.clamp(t / Math.max(i, 1), 0, 1);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_progressBar.txt_copy, new a.LocalizedTextVO("numbersXY", [t, i]));
    if (n && c && !this.dialogDisp.mc_switch.visible) {
      this._tweenSwitch = s.TweenMax.fromTo(this.dialogDisp.mc_switch, 0, {
        visible: false
      }, {
        visible: true,
        ease: s.Linear.ease,
        delay: 3,
        repeat: 0
      });
    } else {
      this.dialogDisp.mc_switch.visible = c;
    }
    if (this._colorMatrix == null) {
      this._colorMatrix = new o.ColorMatrix();
      this._colorMatrix.desaturate();
    }
  };
  Object.defineProperty(GeneralsLevelUPDialog.prototype, "isStarState", {
    get: function () {
      return this.state == GeneralsLevelUPDialog.STATE_STAR;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsLevelUPDialog.prototype, "isXPState", {
    get: function () {
      return this.state == GeneralsLevelUPDialog.STATE_XP;
    },
    enumerable: true,
    configurable: true
  });
  GeneralsLevelUPDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.mc_switch.btn_switch:
        this.changeState(this.isStarState ? GeneralsLevelUPDialog.STATE_XP : GeneralsLevelUPDialog.STATE_STAR);
    }
  };
  Object.defineProperty(GeneralsLevelUPDialog.prototype, "generalVO", {
    get: function () {
      if (c.CastleModel.generalsData.playerGenerals.get(this.dialogProperties.generalID)) {
        return c.CastleModel.generalsData.playerGenerals.get(this.dialogProperties.generalID);
      } else {
        return new u.GeneralVO(this.dialogProperties.generalID);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsLevelUPDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  GeneralsLevelUPDialog.NAME = "GeneralsLevelUp2";
  GeneralsLevelUPDialog.STATE_STAR = 1;
  GeneralsLevelUPDialog.STATE_XP = 2;
  return GeneralsLevelUPDialog;
}(m.CastleExternalDialog);
exports.GeneralsLevelUPDialog = y;