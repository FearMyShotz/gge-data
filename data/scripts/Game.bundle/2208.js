Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = createjs.MouseEvent;
var a = createjs.Point;
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./2209.js");
var d = require("./2210.js");
var p = require("./1255.js");
var h = require("./169.js");
var g = require("./12.js");
var C = require("./45.js");
var _ = require("./31.js");
var m = require("./19.js");
var f = require("./4.js");
var O = require("./68.js");
var E = require("./9.js");
var y = require("./157.js");
var b = require("./14.js");
var D = require("./20.js");
var I = require("./297.js");
var T = require("./8.js");
var v = require("./25.js");
var S = require("./282.js");
var A = function (e) {
  function GeneralsLevelUpDialogListItem(t, i) {
    var n = e.call(this, new (l.getDefinitionByName("GeneralsLevelUp_Item"))(), i) || this;
    n._data = t;
    n.fill();
    return n;
  }
  n.__extends(GeneralsLevelUpDialogListItem, e);
  GeneralsLevelUpDialogListItem.prototype.fill = function () {
    T.ButtonHelper.initButtons([this.disp.contentMC.btn_use, this.disp.headerMC.btn_use, this.disp.contentMC.btn_nextLevel, this.disp.contentMC.mc_selection.mc_slider.btn_slider, this.disp.contentMC.mc_selection.btn_all], D.ClickFeedbackButtonHover, 1);
    this.disp.headerMC.mc_hover.mouseEnabled = false;
    this.disp.headerMC.mc_down.mouseEnabled = false;
    this.disp.headerMC.mc_hover.visible = false;
    this.disp.headerMC.mc_down.visible = false;
    this.disp.headerMC.txt_copy.mouseEnabled = false;
    this.disp.headerMC.txt_title.mouseEnabled = false;
    this.disp.headerMC.mc_selected.mouseChildren = false;
    this.disp.headerMC.mc_arrow.mouseChildren = false;
    this.disp.headerMC.mc_bg.mouseChildren = false;
    var e = f.CastleModel.currencyData.getAmountById(this.currencyID);
    var t = C.CollectableHelper.createVO(g.CollectableEnum.GENERIC_CURRENCY, e, this.currencyID);
    if (this.isXPCurrency) {
      b.CastleComponent.textFieldManager.registerTextField(this.disp.headerMC.txt_title_middle, new c.LocalizedTextVO(" "));
      b.CastleComponent.textFieldManager.registerTextField(this.disp.headerMC.txt_title, new c.LocalizedTextVO(t.getNameTextId()));
    } else {
      b.CastleComponent.textFieldManager.registerTextField(this.disp.headerMC.txt_title, new c.LocalizedTextVO(" "));
      b.CastleComponent.textFieldManager.registerTextField(this.disp.headerMC.txt_title_middle, new c.LocalizedTextVO(t.getNameTextId()));
    }
    if (this.isXPCurrency) {
      b.CastleComponent.textFieldManager.registerTextField(this.disp.headerMC.txt_copy, new c.LocalizedTextVO("value_xp", [f.CastleModel.generalsData.getXPItemByCurrencyID(this.currencyID).xpAmount]));
    } else {
      b.CastleComponent.textFieldManager.registerTextField(this.disp.headerMC.txt_copy, new c.LocalizedTextVO(" "));
    }
    b.CastleComponent.textFieldManager.registerTextField(this.disp.contentMC.btn_nextLevel.txt_copy, new c.LocalizedTextVO("value_multiplied", [this.getAmountForLevelUp()]));
    b.CastleComponent.textFieldManager.registerTextField(this.disp.headerMC.btn_use.txt_copy, new c.LocalizedTextVO("value_multiplied", [this.getAmountForLevelUp()]));
    T.ButtonHelper.enableButton(this.disp.contentMC.btn_nextLevel, e >= this.getAmountForLevelUp());
    T.ButtonHelper.enableButton(this.disp.headerMC.btn_use, e >= this.getAmountForLevelUp());
    if (this.isXPCurrency) {
      if (e < this.getAmountForLevelUp()) {
        this.disp.contentMC.btn_nextLevel.toolTipText = c.Localize.text("dialog_generals_levelUpDialog_boostLevel_insufficientBoosters_tooltip", [t.getNameTextId(), this.generalVO.nameTextShort]);
      } else {
        this.disp.contentMC.btn_nextLevel.toolTipText = c.Localize.text("dialog_generals_levelUpDialog_boostLevel_tooltip", [this.getAmountForLevelUp(), t.getNameTextId(), this.generalVO.nameTextShort, this.generalVO.currentLevel + 1]);
      }
    } else if (e < this.getAmountForLevelUp()) {
      this.disp.contentMC.btn_nextLevel.toolTipText = c.Localize.text("dialog_generals_levelUpDialog_boostStar_insufficientShards_tooltip", [this.generalVO.nameTextShort]);
      this.disp.headerMC.btn_use.toolTipText = c.Localize.text("dialog_generals_levelUpDialog_boostStar_insufficientShards_tooltip", [this.generalVO.nameTextShort]);
    } else {
      this.disp.contentMC.btn_nextLevel.toolTipText = c.Localize.text("dialog_generals_levelUpDialog_boostStar_tooltip", [this.getAmountForLevelUp(), this.generalVO.nameTextShort, this.generalVO.currentStarLevel + 1]);
      this.disp.headerMC.btn_use.toolTipText = c.Localize.text("dialog_generals_levelUpDialog_boostStar_tooltip", [this.getAmountForLevelUp(), this.generalVO.nameTextShort, this.generalVO.currentStarLevel + 1]);
    }
    v.CollectableRenderHelper.displaySingleItemComplete(this, new _.CollectableRenderClips(this.disp.headerMC.mc_item.mc_item).addIconMc(this.disp.headerMC.mc_item.mc_item.mc_icon).addInfoBtn(this.disp.headerMC.mc_item.btn_info).addTextfield(this.disp.headerMC.mc_item.mc_item.txt_amount), t, new m.CollectableRenderOptions(m.CollectableRenderOptions.SET_ADVANCED, new a(70, 70)));
    this.initAmountPicker();
    if (this._amountComponent) {
      var i = Math.ceil(this.generalVO.nextXpNeededForCap / f.CastleModel.generalsData.getXPItemByCurrencyID(this.currencyID).xpAmount);
      this._amountComponent.setMaxNumberOfItems(Math.min(e, i));
    }
    this.applyStateChange();
    this.checkIfIsItemAvailable();
  };
  GeneralsLevelUpDialogListItem.prototype.initAmountPicker = function () {
    if (this._amountComponent) {
      this._amountComponent.removeEventListener(h.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onValueChange));
      this._amountComponent.destroy();
    }
    this.disp.contentMC.mc_selection.visible = this.isXPCurrency;
    this.disp.contentMC.btn_use.visible = this.isXPCurrency;
    this.disp.headerMC.btn_use.visible = !this.isXPCurrency;
    if (this.isXPCurrency) {
      this._amountComponent = new I.CastleUnitAmountComponent();
      this._amountComponent.init(this.disp.contentMC.mc_selection.mc_slider, this.disp.contentMC.mc_selection.amountPicker, this.disp.contentMC.mc_selection.btn_all);
      this._amountComponent.minAmount = 1;
      this._amountComponent.centerSliderButtonOnDefault = false;
      this._amountComponent.addEventListener(h.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onValueChange));
      this.onValueChange();
    }
  };
  GeneralsLevelUpDialogListItem.prototype.onValueChange = function (e = null) {
    this.disp.contentMC.mc_selection.mc_slider.mc_line.scaleX = (this._amountComponent.getSelectedAmount() - 1) / (Math.max(this._amountComponent.numberOfItems, 2) - 1);
  };
  GeneralsLevelUpDialogListItem.prototype.checkIfIsItemAvailable = function () {
    var e = this.isXPCurrency ? this.generalVO.nextLevelXP : this.generalVO.requiredShards;
    if (!this.isXPCurrency && this.generalVO.isXpUpgradeable || this.isXPCurrency && this.generalVO.isStarLevelUpgradeable || e <= 0) {
      var t = new s.ColorMatrix();
      t.desaturate();
      this.disp.useFilters([t.filter], true);
      this.disp.mouseChildren = false;
      var i = undefined;
      if (!this.isXPCurrency && this.generalVO.currentStarLevel >= this.generalVO.maxStarLevel) {
        i = c.Localize.text("dialog_generals_levelUpDialog_generalMaxStarRating_tooltip", [this.generalVO.nameTextShort]);
      } else if (this.isXPCurrency || this.generalVO.isStarLevelUpgradeable) {
        if (this.isXPCurrency && this.generalVO.currentLevel >= this.generalVO.maxLevel) {
          i = c.Localize.text("dialog_generals_levelUpDialog_generalMaxLevel_tooltip", [this.generalVO.nameTextShort]);
        } else if (this.isXPCurrency && !this.generalVO.isXpUpgradeable) {
          i = c.Localize.text("dialog_generals_levelUpDialog_starRatingNeeded_tooltip", [this.generalVO.nameTextShort]);
        }
      } else {
        i = c.Localize.text("dialog_generals_levelUpDialog_levelUpRequired_desc", [this.generalVO.nameTextShort]);
      }
      this.disp.toolTipText = {
        t: i,
        ox: this.disp.headerMC.width / 2
      };
    } else {
      this.disp.useFilters(O.BitmapFilterHelper.NO_FILTER);
      this.disp.mouseChildren = true;
      this.disp.toolTipText = null;
    }
  };
  GeneralsLevelUpDialogListItem.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (this.isXPCurrency) {
      switch (t.target) {
        case this.disp.headerMC.mc_selected:
        case this.disp.headerMC.mc_arrow:
        case this.disp.headerMC.mc_bg:
          this.disp.headerMC.mc_hover.visible = true;
      }
    }
  };
  GeneralsLevelUpDialogListItem.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    if (this.isXPCurrency) {
      switch (t.target) {
        case this.disp.headerMC.mc_selected:
        case this.disp.headerMC.mc_arrow:
        case this.disp.headerMC.mc_bg:
          this.disp.headerMC.mc_hover.visible = false;
          this.disp.headerMC.mc_down.visible = false;
      }
    }
  };
  GeneralsLevelUpDialogListItem.prototype.onMouseDown = function (e) {
    if (this.isXPCurrency) {
      switch (e.target) {
        case this.disp.headerMC.mc_selected:
        case this.disp.headerMC.mc_arrow:
        case this.disp.headerMC.mc_bg:
          this.disp.headerMC.mc_down.visible = true;
      }
    }
  };
  GeneralsLevelUpDialogListItem.prototype.onMouseUp = function (e) {
    if (this.isXPCurrency) {
      switch (e.target) {
        case this.disp.headerMC.mc_selected:
        case this.disp.headerMC.mc_arrow:
        case this.disp.headerMC.mc_bg:
          this.disp.headerMC.mc_down.visible = false;
      }
    }
  };
  GeneralsLevelUpDialogListItem.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    if (this.disp) {
      this.disp.addEventListener(o.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.addEventListener(o.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  GeneralsLevelUpDialogListItem.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    if (this.disp) {
      this.disp.removeEventListener(o.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.removeEventListener(o.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  GeneralsLevelUpDialogListItem.prototype.applyStateChange = function () {
    e.prototype.applyStateChange.call(this);
    this.disp.headerMC.mc_selected.visible = this.isExpanded;
  };
  GeneralsLevelUpDialogListItem.prototype.onClick = function (t) {
    if (T.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.disp.headerMC.mc_selected:
        case this.disp.headerMC.mc_arrow:
        case this.disp.headerMC.mc_bg:
          if (!this.isXPCurrency) {
            return;
          }
          this.expand(!this.isExpanded, true);
          break;
        case this.disp.contentMC.btn_use:
          T.ButtonHelper.delayEnableButton(this.disp.contentMC.btn_use, true, 1);
          if (this.isXPCurrency) {
            if (this.getLostXPOnUse(this.currencyID, this._amountComponent.getSelectedAmount()) > 0) {
              E.CastleDialogHandler.getInstance().registerDefaultDialogs(S.ModernYesNoDialog, new s.BasicStandardYesNoDialogProperties("generic_alert_watchout", c.Localize.text("dialog_generals_levelUpDialog_levelCapXpLoss_desc", [this.getLostXPOnUse(this.currencyID, this._amountComponent.getSelectedAmount())]), this.bindFunction(this.sendXPSelected)));
            } else {
              this.sendXPSelected();
            }
          } else if (this.generalVO.isUnlocked) {
            s.BasicModel.smartfoxClient.sendCommandVO(new d.C2SGeneralStarUpgradeVO(this.generalVO.generalID, this.currencyID));
          } else {
            s.BasicModel.smartfoxClient.sendCommandVO(new p.C2SGeneralUnlockVO(this.generalVO.generalID));
          }
          break;
        case this.disp.headerMC.btn_use:
        case this.disp.contentMC.btn_nextLevel:
          T.ButtonHelper.delayEnableButton(this.disp.contentMC.btn_nextLevel, true, 1);
          T.ButtonHelper.delayEnableButton(this.disp.headerMC.btn_use, true, 1);
          if (this.isXPCurrency) {
            if (this.getLostXPOnUse(this.currencyID, this.getAmountForLevelUp()) > 0) {
              E.CastleDialogHandler.getInstance().registerDefaultDialogs(S.ModernYesNoDialog, new s.BasicStandardYesNoDialogProperties("generic_alert_watchout", c.Localize.text("dialog_generals_levelUpDialog_levelCapXpLoss_desc", [this.getLostXPOnUse(this.currencyID, this.getAmountForLevelUp())]), this.bindFunction(this.sendXPToLevelUp)));
            } else {
              this.sendXPToLevelUp();
            }
          } else if (this.generalVO.isUnlocked) {
            s.BasicModel.smartfoxClient.sendCommandVO(new d.C2SGeneralStarUpgradeVO(this.generalVO.generalID, this.currencyID));
          } else {
            s.BasicModel.smartfoxClient.sendCommandVO(new p.C2SGeneralUnlockVO(this.generalVO.generalID));
          }
      }
    }
  };
  GeneralsLevelUpDialogListItem.prototype.sendXPSelected = function () {
    s.BasicModel.smartfoxClient.sendCommandVO(new u.C2SGeneralAddXpVO(this.generalVO.generalID, this.currencyID, this._amountComponent.getSelectedAmount()));
  };
  GeneralsLevelUpDialogListItem.prototype.sendXPToLevelUp = function () {
    s.BasicModel.smartfoxClient.sendCommandVO(new u.C2SGeneralAddXpVO(this.generalVO.generalID, this.currencyID, this.getAmountForLevelUp()));
  };
  GeneralsLevelUpDialogListItem.prototype.getLostXPOnUse = function (e, t) {
    var i = f.CastleModel.generalsData.getXPItemByCurrencyID(e);
    var n = this.generalVO.nextXpNeededForCap;
    var o = i.xpAmount * t;
    return Math.max(0, o - n);
  };
  GeneralsLevelUpDialogListItem.prototype.getAmountForLevelUp = function () {
    if (this.isXPCurrency) {
      var e = f.CastleModel.generalsData.getXPItemByCurrencyID(this.currencyID);
      var t = this.generalVO.nextLevelXP - this.generalVO.currentLevelXP;
      return Math.ceil(t / e.xpAmount);
    }
    return this.generalVO.requiredShards;
  };
  Object.defineProperty(GeneralsLevelUpDialogListItem.prototype, "isXPCurrency", {
    get: function () {
      return !!f.CastleModel.generalsData.getXPItemByCurrencyID(this.currencyID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsLevelUpDialogListItem.prototype, "height", {
    get: function () {
      if (this.isExpanded) {
        return this.disp.contentMC.y + 62;
      } else {
        return this.disp.headerMC.height;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(y.ACollapsibleItem.prototype, "height").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsLevelUpDialogListItem.prototype, "generalVO", {
    get: function () {
      return this._data[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsLevelUpDialogListItem.prototype, "currencyID", {
    get: function () {
      return this._data[1];
    },
    enumerable: true,
    configurable: true
  });
  return GeneralsLevelUpDialogListItem;
}(y.ACollapsibleItem);
exports.GeneralsLevelUpDialogListItem = A;
r.classImplementsInterfaces(A, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");