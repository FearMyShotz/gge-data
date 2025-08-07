Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./6.js");
var g = require("./368.js");
var C = require("./278.js");
var _ = require("./7.js");
var m = require("./2598.js");
var f = require("./169.js");
var O = require("./1419.js");
var E = require("./32.js");
var y = require("./4.js");
var b = require("./8.js");
var D = require("./41.js");
var I = require("./2599.js");
var T = require("./34.js");
var v = require("./2600.js");
var S = createjs.MovieClip;
var A = createjs.Point;
var L = createjs.ColorFilter;
var P = function (e) {
  function CastlePremiumMarketPlaceDialogFlag(t) {
    var i = this;
    i._crestHasChanged = false;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).initBasicButtons([i.subLayerDisp.btn_reset, i.subLayerDisp.btn_save, i.subLayerDisp.btn_random, i.crestGenerator.mc_buttons.btn_backgroundtype, i.crestGenerator.mc_buttons.btn_colorBG1, i.crestGenerator.mc_buttons.mc_bgColor2.btn_colorBG2, i.crestGenerator.mc_buttons.mc_symbolChange1.btn_colorSymbol1, i.crestGenerator.mc_buttons.mc_symbolChange2.btn_colorSymbol2, i.crestGenerator.mc_buttons.btn_symbolType, i.crestGenerator.mc_buttons.mc_symbolChange1.btn_symbol1, i.crestGenerator.mc_buttons.mc_symbolChange2.btn_symbol2, i.crestGenerator.mc_bgtypeTooltip.btn_type0, i.crestGenerator.mc_bgtypeTooltip.btn_type1, i.crestGenerator.mc_bgtypeTooltip.btn_type2, i.crestGenerator.mc_bgtypeTooltip.btn_type3, i.crestGenerator.mc_symbolTypeToolTip.btn_type0, i.crestGenerator.mc_symbolTypeToolTip.btn_type1, i.crestGenerator.mc_symbolTypeToolTip.btn_type2, i.crestGenerator.mc_symbolTypeToolTip.btn_type3, i.crestGenerator.mc_symbolTypeToolTip.btn_type4]);
    i.hideAllToolTips();
    i.textFieldManager.registerTextField(i.subLayerDisp.txt_title, new d.LocalizedTextVO(CastlePremiumMarketPlaceDialogFlag.BONUS_HEADER_TEXT_ID));
    i.itxt_currentBonus = i.textFieldManager.registerTextField(i.subLayerDisp.txt_copy, new p.TextVO("bonus goes here"));
    return i;
  }
  n.__extends(CastlePremiumMarketPlaceDialogFlag, e);
  CastlePremiumMarketPlaceDialogFlag.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.resetCrest();
    this.enableBasicButton([this.subLayerDisp.btn_reset.basicButton, this.subLayerDisp.btn_save.basicButton], this._crestHasChanged);
    if (this._bgColorMenu) {
      this.crestGenerator.mc_colorSymbolTooltip.removeChild(this._bgColorMenu);
    }
    if (this._symbolColorMenu) {
      this.crestGenerator.mc_colorSymbolTooltip.removeChild(this._symbolColorMenu);
    }
    if (this._crestSymbolMenu) {
      this.crestGenerator.mc_colorSymbolTooltip.removeChild(this._crestSymbolMenu);
    }
    this.createCrestSymbolMenu();
    this.createBGColorMenu();
    this.createSymbolColorMenu();
    this.crestGenerator.stop();
    this.crestGenerator.mc_buttons.btn_backgroundtype.gotoAndStop(this.crestVO.backgroundType + 1);
    this.crestGenerator.mc_buttons.btn_symbolType.gotoAndStop(this.crestVO.symbolPosType + 1);
    this.crestGenerator.addEventListener(f.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onChangeValue));
    this.controller.addEventListener(E.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onCrestChangeFromServer));
    y.CastleModel.crestSymbolData.addEventListener(O.CastleCrestSymbolDataEvent.CREST_SYMBOL_DATA_UPDATED, this.bindFunction(this.onCrestSymbolDataUpdated));
    this.drawCrest();
    this.subLayerDisp.btn_random.toolTipText = CastlePremiumMarketPlaceDialogFlag.RANDOM_CREST_TOOLTIP_ID;
    this.subLayerDisp.btn_save.toolTipText = CastlePremiumMarketPlaceDialogFlag.SAVE_CREST_TOOLTIP_ID;
    this.subLayerDisp.btn_reset.toolTipText = CastlePremiumMarketPlaceDialogFlag.REVERT_CREST_TOOLTIP_ID;
    this.crestGenerator.mc_buttons.btn_backgroundtype.toolTipText = "panel_create_crest_bg";
    this.crestGenerator.mc_buttons.btn_colorBG1.toolTipText = "panel_create_crest_color";
    this.crestGenerator.mc_buttons.mc_bgColor2.btn_colorBG2.toolTipText = "panel_create_crest_color";
    this.crestGenerator.mc_buttons.mc_symbolChange1.btn_colorSymbol1.toolTipText = "panel_create_crest_color";
    this.crestGenerator.mc_buttons.mc_symbolChange2.btn_colorSymbol2.toolTipText = "panel_create_crest_color";
    this.crestGenerator.mc_buttons.btn_symbolType.toolTipText = "panel_create_crest_symboltype";
    this.crestGenerator.mc_buttons.mc_symbolChange1.btn_symbol1.toolTipText = "panel_create_crest_symbol";
    this.crestGenerator.mc_buttons.mc_symbolChange2.btn_symbol2.toolTipText = "panel_create_crest_symbol";
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.onCrestSymbolDataUpdated = function (e) {
    this.createCrestSymbolMenu();
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    this.checkHideBackgroundOnClick(t);
    if (b.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.subLayerDisp.btn_save:
          this.bindFunction(this.sendNewCrest())();
          break;
        case this.subLayerDisp.btn_reset:
          this.resetCrest();
          break;
        case this.subLayerDisp.btn_close:
          this.hide();
      }
      switch (t.target) {
        case this.crestGenerator.mc_buttons.btn_colorBG1:
          this.showChooserTooltip(0, this.crestGenerator.mc_buttons.btn_colorBG1);
          break;
        case this.crestGenerator.mc_buttons.mc_bgColor2.btn_colorBG2:
          this.showChooserTooltip(0, this.crestGenerator.mc_buttons.mc_bgColor2.btn_colorBG2);
          break;
        case this.crestGenerator.mc_buttons.mc_symbolChange1.btn_colorSymbol1:
          this.showChooserTooltip(1, this.crestGenerator.mc_buttons.mc_symbolChange1.btn_colorSymbol1);
          break;
        case this.crestGenerator.mc_buttons.mc_symbolChange2.btn_colorSymbol2:
          this.showChooserTooltip(1, this.crestGenerator.mc_buttons.mc_symbolChange2.btn_colorSymbol2);
          break;
        case this.crestGenerator.mc_buttons.mc_symbolChange1.btn_symbol1:
          this.showChooserTooltip(2, this.crestGenerator.mc_buttons.mc_symbolChange1.btn_symbol1);
          break;
        case this.crestGenerator.mc_buttons.mc_symbolChange2.btn_symbol2:
          this.showChooserTooltip(2, this.crestGenerator.mc_buttons.mc_symbolChange2.btn_symbol2);
          break;
        case this.crestGenerator.mc_buttons.btn_symbolType:
          this.showSymbolTypeToolTip();
          break;
        case this.crestGenerator.mc_buttons.btn_backgroundtype:
          this.showBgTypeToolTip();
          break;
        case this.subLayerDisp.btn_random:
          this.generateRandomCrest();
          break;
        case this.crestGenerator.mc_bgtypeTooltip.btn_type0:
          this.crestVO.backgroundType = h.int(g.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN);
          this.crestVO.backgroundColor2 = this.crestVO.backgroundColor1;
          break;
        case this.crestGenerator.mc_bgtypeTooltip.btn_type1:
          this.crestVO.backgroundType = h.int(g.ClientConstCrest.BACKGROUND_TYPE_TWO_HORIZONTAL);
          break;
        case this.crestGenerator.mc_bgtypeTooltip.btn_type2:
          this.crestVO.backgroundType = h.int(g.ClientConstCrest.BACKGROUND_TYPE_TWO_VERTICAL);
          break;
        case this.crestGenerator.mc_bgtypeTooltip.btn_type3:
          this.crestVO.backgroundType = h.int(g.ClientConstCrest.BACKGROUND_TYPE_FOUR_X);
          break;
        case this.crestGenerator.mc_symbolTypeToolTip.btn_type0:
          this.crestVO.symbolPosType = h.int(g.ClientConstCrest.SYMBOL_POSITION_NONE);
          break;
        case this.crestGenerator.mc_symbolTypeToolTip.btn_type1:
          this.crestVO.symbolPosType = h.int(g.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED);
          break;
        case this.crestGenerator.mc_symbolTypeToolTip.btn_type2:
          this.crestVO.symbolPosType = h.int(g.ClientConstCrest.SYMBOL_POSITION_TWO_HORIZONTAL);
          break;
        case this.crestGenerator.mc_symbolTypeToolTip.btn_type3:
          this.crestVO.symbolPosType = h.int(g.ClientConstCrest.SYMBOL_POSITION_TWO_VERTICAL);
          break;
        case this.crestGenerator.mc_symbolTypeToolTip.btn_type4:
          this.crestVO.symbolPosType = h.int(g.ClientConstCrest.SYMBOL_POSITION_FOUR_X);
      }
      if (this.crestVO.backgroundColor2 == 0) {
        this.crestVO.backgroundColor2 = this.crestVO.backgroundColor1;
      }
      this.checkSymbolIsFilledIfNecessary();
      if (!!c.instanceOfClass(t.target, "MovieClip") && (t.target.parent == this._symbolColorMenu || t.target.parent == this._crestSymbolMenu || t.target.parent == this._bgColorMenu)) {
        this.onClickChooserTooltip(t.target);
      }
      this.onChangeValue();
    }
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.checkSymbolIsFilledIfNecessary = function () {
    if (this.crestVO.symbolPosType != g.ClientConstCrest.SYMBOL_POSITION_NONE) {
      this.crestVO.symbolType1 ||= y.CastleModel.crestSymbolData.getRandomStandardSymbol();
      this.crestVO.symbolType2 ||= y.CastleModel.crestSymbolData.getRandomStandardSymbol();
    }
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.onChangeValue = function (e = null) {
    this.drawCrest();
    this.checkHasCrestChanged();
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.resetCrest = function () {
    this.crestVO = y.CastleModel.userData.playerCrest.clone();
    this.checkHasCrestChanged();
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.drawCrest = function () {
    R.CrestHelper.setCrestGraphics(this.crestGenerator.crest, this.crestVO, [[0, 0], [200, 200], [90, 120], [120, 80], [90, 90]]);
    this.crestGenerator.mc_buttons.btn_backgroundtype.gotoAndStop(this.crestVO.backgroundType + 1);
    this.crestGenerator.mc_buttons.btn_symbolType.gotoAndStop(this.crestVO.symbolPosType + 1);
    var e = new r.ColorTransform();
    e.color = this.crestVO.backgroundColor1;
    this.crestGenerator.mc_buttons.btn_colorBG1.cc.useFilters([new L(e.redMultiplier, e.greenMultiplier, e.blueMultiplier, e.alphaMultiplier, e.redOffset, e.greenOffset, e.blueOffset, e.alphaOffset)]);
    e.color = this.crestVO.backgroundColor2;
    this.crestGenerator.mc_buttons.mc_bgColor2.btn_colorBG2.cc.useFilters([new L(e.redMultiplier, e.greenMultiplier, e.blueMultiplier, e.alphaMultiplier, e.redOffset, e.greenOffset, e.blueOffset, e.alphaOffset)]);
    e.color = this.crestVO.symbolColor1;
    this.crestGenerator.mc_buttons.mc_symbolChange1.btn_colorSymbol1.cc.useFilters([new L(e.redMultiplier, e.greenMultiplier, e.blueMultiplier, e.alphaMultiplier, e.redOffset, e.greenOffset, e.blueOffset, e.alphaOffset)]);
    e.color = this.crestVO.symbolColor2;
    this.crestGenerator.mc_buttons.mc_symbolChange2.btn_colorSymbol2.cc.useFilters([new L(e.redMultiplier, e.greenMultiplier, e.blueMultiplier, e.alphaMultiplier, e.redOffset, e.greenOffset, e.blueOffset, e.alphaOffset)]);
    this.crestGenerator.mc_buttons.mc_bgColor2.visible = this.crestVO.backgroundType != g.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN;
    this.crestGenerator.mc_buttons.mc_symbolChange1.visible = this.crestVO.symbolPosType >= g.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED;
    this.crestGenerator.mc_buttons.mc_symbolChange2.visible = this.crestVO.symbolPosType >= g.ClientConstCrest.SYMBOL_POSITION_TWO_HORIZONTAL;
    e.color = this.crestVO.backgroundColor1;
    this.crestGenerator.mc_holderLeft.cc.useFilters([new L(e.redMultiplier, e.greenMultiplier, e.blueMultiplier, e.alphaMultiplier, e.redOffset, e.greenOffset, e.blueOffset, e.alphaOffset)]);
    if (this.crestVO.backgroundType != g.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN) {
      e.color = this.crestVO.backgroundColor2;
    }
    this.crestGenerator.mc_holderRight.cc.useFilters([new L(e.redMultiplier, e.greenMultiplier, e.blueMultiplier, e.alphaMultiplier, e.redOffset, e.greenOffset, e.blueOffset, e.alphaOffset)]);
    this.setCrestBonusInfo();
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.sendNewCrest = function (e = null) {
    return function () {
      if (this.crestVO.equals(y.CastleModel.userData.playerCrest)) {
        M.CastleDialogHandler.getInstance().registerDefaultDialogs(V.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(u.Localize.text("generic_alert_watchout"), u.Localize.text("dialog_changeCrest_same")));
      } else {
        if (this.crestVO.symbolPosType == g.ClientConstCrest.SYMBOL_POSITION_NONE) {
          this.crestVO.symbolType1 = null;
          this.crestVO.symbolType2 = null;
        } else if (this.crestVO.symbolPosType == g.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED) {
          this.crestVO.symbolType2 = null;
        }
        if (y.CastleModel.questData.foundActiveQuestWithConditionType(C.ClientConstQuestCondition.QUESTTYPE_CREATE_EMBLEM)) {
          var t = {
            CAE: this.crestVO.getParamObject()
          };
          y.CastleModel.smartfoxClient.sendMessage(_.ClientConstSF.C2S_CREATE_AVATAR, [JSON.stringify(t)]);
        }
        y.CastleModel.smartfoxClient.sendCommandVO(new m.C2SChangeEmblemVO(this.crestVO.getParamObject()));
      }
      if (e) {
        e();
      }
    };
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.checkHideBackgroundOnClick = function (e) {
    if (!c.instanceOfClass(e.target, "MovieClip") || !this.crestGenerator.mc_bgtypeTooltip.contains(e.target) && !this.crestGenerator.mc_colorSymbolTooltip.contains(e.target) && !this.crestGenerator.mc_symbolTypeToolTip.contains(e.target)) {
      if (!e.target || !c.instanceOfClass(e.target, "BasicButton")) {
        this.hideAllToolTips();
      }
      if (!c.instanceOfClass(e.target, "BasicButton") || e.target.enabled) {
        switch (e.target) {
          case this.crestGenerator.mc_buttons.btn_colorBG1:
          case this.crestGenerator.mc_buttons.mc_bgColor2.btn_colorBG2:
          case this.crestGenerator.mc_buttons.mc_symbolChange1.btn_colorSymbol1:
          case this.crestGenerator.mc_buttons.mc_symbolChange2.btn_colorSymbol2:
          case this.crestGenerator.mc_buttons.mc_symbolChange1.btn_symbol1:
          case this.crestGenerator.mc_buttons.mc_symbolChange2.btn_symbol2:
            this.hideBgTypeToolTip();
            this.hideSymbolTypeToolTip();
            break;
          case this.crestGenerator.mc_buttons.btn_symbolType:
            this.hideChooserTooltip();
            this.hideBgTypeToolTip();
            break;
          case this.crestGenerator.mc_buttons.btn_backgroundtype:
            this.hideChooserTooltip();
            this.hideSymbolTypeToolTip();
            break;
          case this.subLayerDisp.btn_random:
          case this.crestGenerator.btn_save:
            this.hideAllToolTips();
        }
      } else {
        this.hideAllToolTips();
      }
    }
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.hideChooserTooltip = function () {
    this.crestGenerator.mc_colorSymbolTooltip.visible = false;
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.hideAllToolTips = function () {
    this.hideBgTypeToolTip();
    this.hideChooserTooltip();
    this.hideSymbolTypeToolTip();
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.onClickChooserTooltip = function (e) {
    if (!(e.name.indexOf("num") < 0)) {
      var t = h.int(h.int(e.name.substring(3)));
      switch (this.crestGenerator.mc_colorSymbolTooltip.property) {
        case this.crestGenerator.mc_buttons.btn_colorBG1:
          this.crestVO.backgroundColor1 = g.ClientConstCrest.BACKGROUND_COLORS[t];
          break;
        case this.crestGenerator.mc_buttons.mc_bgColor2.btn_colorBG2:
          this.crestVO.backgroundColor2 = g.ClientConstCrest.BACKGROUND_COLORS[t];
          break;
        case this.crestGenerator.mc_buttons.mc_symbolChange1.btn_colorSymbol1:
          this.crestVO.symbolColor1 = g.ClientConstCrest.SYMBOL_COLORS[t];
          break;
        case this.crestGenerator.mc_buttons.mc_symbolChange2.btn_colorSymbol2:
          this.crestVO.symbolColor2 = g.ClientConstCrest.SYMBOL_COLORS[t];
          break;
        case this.crestGenerator.mc_buttons.mc_symbolChange1.btn_symbol1:
          this.handleSymbolPicked(e, "symbolType1");
          break;
        case this.crestGenerator.mc_buttons.mc_symbolChange2.btn_symbol2:
          this.handleSymbolPicked(e, "symbolType2");
      }
    }
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.handleSymbolPicked = function (e, t) {
    if (e.symbolVO) {
      var i = e.symbolVO;
      if (y.CastleModel.crestSymbolData.isSymbolBought(i)) {
        this.crestVO[t] = i;
      } else if (y.CastleModel.crestSymbolData.isSymbolUnlocked(i)) {
        M.CastleDialogHandler.getInstance().registerDefaultDialogs(w.CastleBuyUnlockedCrestSymbolDialog, new v.CastleBuyUnlockedCrestSymbolDialogProperties(i));
      }
    }
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.showSymbolTypeToolTip = function () {
    this.crestGenerator.mc_symbolTypeToolTip.btn_type0.gotoAndStop(1);
    this.crestGenerator.mc_symbolTypeToolTip.btn_type0.mouseChildren = false;
    this.crestGenerator.mc_symbolTypeToolTip.btn_type1.gotoAndStop(2);
    this.crestGenerator.mc_symbolTypeToolTip.btn_type1.mouseChildren = false;
    this.crestGenerator.mc_symbolTypeToolTip.btn_type2.gotoAndStop(3);
    this.crestGenerator.mc_symbolTypeToolTip.btn_type2.mouseChildren = false;
    this.crestGenerator.mc_symbolTypeToolTip.btn_type3.gotoAndStop(4);
    this.crestGenerator.mc_symbolTypeToolTip.btn_type3.mouseChildren = false;
    this.crestGenerator.mc_symbolTypeToolTip.btn_type4.gotoAndStop(5);
    this.crestGenerator.mc_symbolTypeToolTip.btn_type4.mouseChildren = false;
    this.crestGenerator.mc_symbolTypeToolTip.visible = true;
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.checkHasCrestChanged = function () {
    this._crestHasChanged = !y.CastleModel.userData.playerCrest.equals(this.crestVO);
    this.enableBasicButton([this.subLayerDisp.btn_reset.basicButton, this.subLayerDisp.btn_save.basicButton], this._crestHasChanged);
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.hideSymbolTypeToolTip = function () {
    this.crestGenerator.mc_symbolTypeToolTip.visible = false;
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.showBgTypeToolTip = function () {
    this.crestGenerator.mc_bgtypeTooltip.btn_type0.gotoAndStop(1);
    this.crestGenerator.mc_bgtypeTooltip.btn_type1.gotoAndStop(2);
    this.crestGenerator.mc_bgtypeTooltip.btn_type2.gotoAndStop(3);
    this.crestGenerator.mc_bgtypeTooltip.btn_type3.gotoAndStop(4);
    this.crestGenerator.mc_bgtypeTooltip.visible = true;
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.hideBgTypeToolTip = function () {
    this.crestGenerator.mc_bgtypeTooltip.visible = false;
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.generateRandomCrest = function () {
    this.crestVO.createRandom();
    this.onChangeValue();
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.showChooserTooltip = function (e, t) {
    this.crestGenerator.mc_colorSymbolTooltip.property = t;
    this.crestGenerator.mc_colorSymbolTooltip.y = -t.globalToLocal(new A(this.crestGenerator.x, this.crestGenerator.y)).y - this.disp.stage.stageHeight / 2 - 25;
    this._bgColorMenu.visible = false;
    this._symbolColorMenu.visible = false;
    this._crestSymbolMenu.visible = false;
    this.crestGenerator.mc_colorSymbolTooltip.removeChild(this._bgColorMenu);
    this.crestGenerator.mc_colorSymbolTooltip.removeChild(this._symbolColorMenu);
    this.crestGenerator.mc_colorSymbolTooltip.removeChild(this._crestSymbolMenu);
    switch (e) {
      case 0:
        this.createBGColorMenu();
        this.crestGenerator.mc_colorSymbolTooltip.addChild(this._bgColorMenu);
        this._bgColorMenu.x = this.crestGenerator.mc_colorSymbolTooltip.bg.x + CastlePremiumMarketPlaceDialogFlag.COLOR_MARGIN_SIZE + CastlePremiumMarketPlaceDialogFlag.COLOR_ICON_WIDTH / 2;
        this._bgColorMenu.y = this.crestGenerator.mc_colorSymbolTooltip.bg.x + CastlePremiumMarketPlaceDialogFlag.COLOR_MARGIN_SIZE + CastlePremiumMarketPlaceDialogFlag.COLOR_ICON_HEIGHT / 2;
        this.crestGenerator.mc_colorSymbolTooltip.bg.height = this._bgColorMenu.height + CastlePremiumMarketPlaceDialogFlag.COLOR_MARGIN_SIZE * 2;
        this.crestGenerator.mc_colorSymbolTooltip.bg.width = this._bgColorMenu.width + CastlePremiumMarketPlaceDialogFlag.COLOR_MARGIN_SIZE * 2;
        this.crestGenerator.mc_colorSymbolTooltip.bg.y = 0;
        this.crestGenerator.mc_colorSymbolTooltip.visible = true;
        this._bgColorMenu.visible = true;
        break;
      case 1:
        this.createSymbolColorMenu();
        this.crestGenerator.mc_colorSymbolTooltip.addChild(this._symbolColorMenu);
        this._symbolColorMenu.x = this.crestGenerator.mc_colorSymbolTooltip.bg.x + CastlePremiumMarketPlaceDialogFlag.COLOR_MARGIN_SIZE + CastlePremiumMarketPlaceDialogFlag.COLOR_ICON_WIDTH / 2;
        this._symbolColorMenu.y = this.crestGenerator.mc_colorSymbolTooltip.bg.x + CastlePremiumMarketPlaceDialogFlag.COLOR_MARGIN_SIZE + CastlePremiumMarketPlaceDialogFlag.COLOR_ICON_HEIGHT / 2;
        this.crestGenerator.mc_colorSymbolTooltip.bg.height = this._symbolColorMenu.height + CastlePremiumMarketPlaceDialogFlag.COLOR_MARGIN_SIZE * 2;
        this.crestGenerator.mc_colorSymbolTooltip.bg.width = this._symbolColorMenu.width + CastlePremiumMarketPlaceDialogFlag.COLOR_MARGIN_SIZE * 2;
        this.crestGenerator.mc_colorSymbolTooltip.bg.y = 0;
        this.crestGenerator.mc_colorSymbolTooltip.visible = true;
        this._symbolColorMenu.visible = true;
        break;
      case 2:
        this.createCrestSymbolMenu();
        this.crestGenerator.mc_colorSymbolTooltip.addChild(this._crestSymbolMenu);
        this._crestSymbolMenu.x = this.crestGenerator.mc_colorSymbolTooltip.bg.x + CastlePremiumMarketPlaceDialogFlag.SYMBOL_MARGIN_SIZE + CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_WIDTH / 2;
        this.crestGenerator.mc_colorSymbolTooltip.bg.width = this._crestSymbolMenu.width + CastlePremiumMarketPlaceDialogFlag.SYMBOL_MARGIN_SIZE * 2;
        this.crestGenerator.mc_colorSymbolTooltip.bg.height = this._crestSymbolMenu.height + CastlePremiumMarketPlaceDialogFlag.SYMBOL_MARGIN_SIZE * 2;
        this.crestGenerator.mc_colorSymbolTooltip.bg.y = -this._crestSymbolMenu.height / 2;
        this._crestSymbolMenu.y = this.crestGenerator.mc_colorSymbolTooltip.bg.y + CastlePremiumMarketPlaceDialogFlag.SYMBOL_MARGIN_SIZE + CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT / 2;
        this.crestGenerator.mc_colorSymbolTooltip.visible = true;
        this._crestSymbolMenu.visible = true;
        break;
      default:
        return;
    }
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.createCrestSymbolMenu = function () {
    var e;
    if (this._crestSymbolMenu) {
      s.MovieClipHelper.clearMovieClip(this._crestSymbolMenu);
    } else {
      this._crestSymbolMenu = new S();
    }
    var t = 0;
    var i = 0;
    for (var n = 0, o = Array.from(y.CastleModel.crestSymbolData.standardCrestSymbols.keys()); n < o.length; n++) {
      var a = o[n];
      if (a !== undefined) {
        if (c.instanceOfClass(y.CastleModel.crestSymbolData.standardCrestSymbols.get(a), "StandardCrestSymbolVO")) {
          var r = y.CastleModel.crestSymbolData.standardCrestSymbols.get(a);
          (e = R.CrestHelper.getCrestSymbolGraphic(r, CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_WIDTH, CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT)).name = "num" + r.id;
          e.symbolVO = r;
          e.graphics.beginFill(CastlePremiumMarketPlaceDialogFlag.SYMBOL_BACKGROUND_COLOR, CastlePremiumMarketPlaceDialogFlag.SYMBOL_BACKGROUND_ALPHA);
          e.graphics.drawRect(-CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_WIDTH / 2, -CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT / 2, CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT, CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT);
          e.graphics.endFill();
          this._crestSymbolMenu.addChild(e);
          e.x = i * (CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_WIDTH + CastlePremiumMarketPlaceDialogFlag.SYMBOL_MARGIN_SIZE);
          e.y = t * (CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT + CastlePremiumMarketPlaceDialogFlag.SYMBOL_MARGIN_SIZE);
          e.setBounds(-CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_WIDTH / 2, -CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT / 2, CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT, CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT);
          b.ButtonHelper.initBasicButton(e, 1.05);
          D.CastleMovieClipHelper.createHitArea(e);
          i++;
        }
        if (i > CastlePremiumMarketPlaceDialogFlag.SYMBOL_COLUMN_COUNT - 1) {
          i = 0;
          t++;
        }
      }
    }
    i = 0;
    t++;
    var l = new I.DashedLine(CastlePremiumMarketPlaceDialogFlag.SYMBOL_COLUMN_COUNT * (CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_WIDTH + CastlePremiumMarketPlaceDialogFlag.SYMBOL_MARGIN_SIZE) - CastlePremiumMarketPlaceDialogFlag.SYMBOL_MARGIN_SIZE, 2, CastlePremiumMarketPlaceDialogFlag.SYMBOL_PANEL_DELIMITER_COLOR, 5, 3);
    if (c.instanceOfClass(l, "DisplayObject")) {
      this._crestSymbolMenu.addChild(l);
    }
    l.x = -CastlePremiumMarketPlaceDialogFlag.SYMBOL_MARGIN_SIZE * 2;
    l.y = t * (CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT + CastlePremiumMarketPlaceDialogFlag.SYMBOL_MARGIN_SIZE);
    l.alpha = CastlePremiumMarketPlaceDialogFlag.SYMBOL_PANEL_DELIMITER_ALPHA;
    t++;
    for (var d = y.CastleModel.crestSymbolData.getAllPremiumSymbolIDsAsSortedArray(), p = 0; p < d.length; p++) {
      var g = h.int(d[p]);
      if (c.instanceOfClass(y.CastleModel.crestSymbolData.premiumCrestSymbols.get(g), "PremiumCrestSymbolVO")) {
        var C = y.CastleModel.crestSymbolData.premiumCrestSymbols.get(g);
        var _ = !y.CastleModel.crestSymbolData.isSymbolUnlocked(C);
        var m = 1;
        var f = C.toolTipText;
        if (_) {
          f = u.Localize.text(CastlePremiumMarketPlaceDialogFlag.UNLOCK_CREST_TOOLTIP_ID);
        } else if (!y.CastleModel.crestSymbolData.isSymbolBought(C)) {
          m = 0.2;
          f = u.Localize.text(CastlePremiumMarketPlaceDialogFlag.BUY_CREST_TOOLTIP_ID, [C.toolTipText]);
        }
        (e = R.CrestHelper.getCrestSymbolGraphic(C, CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_WIDTH, CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT, _, null, m)).name = "num" + C.id;
        e.symbolVO = C;
        e.toolTipText = f;
        e.graphics.beginFill(CastlePremiumMarketPlaceDialogFlag.SYMBOL_BACKGROUND_COLOR, CastlePremiumMarketPlaceDialogFlag.SYMBOL_BACKGROUND_ALPHA);
        e.graphics.drawRect(-CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_WIDTH / 2, -CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT / 2, CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT, CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT);
        e.graphics.endFill();
        this._crestSymbolMenu.addChild(e);
        e.x = i * (CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_WIDTH + CastlePremiumMarketPlaceDialogFlag.SYMBOL_MARGIN_SIZE);
        e.y = t * (CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT + CastlePremiumMarketPlaceDialogFlag.SYMBOL_MARGIN_SIZE);
        e.setBounds(-CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_WIDTH / 2, -CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT / 2, CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT, CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT);
        b.ButtonHelper.initBasicButton(e, 1.05);
        D.CastleMovieClipHelper.createHitArea(e);
        i++;
      }
      if (i > CastlePremiumMarketPlaceDialogFlag.SYMBOL_COLUMN_COUNT - 1) {
        i = 0;
        t++;
      }
    }
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.doubleCheckSaveCrest = function (e) {
    if (this._crestHasChanged) {
      M.CastleDialogHandler.getInstance().registerDefaultDialogs(x.CastleStandardYesNoDialog, new a.BasicStandardYesNoDialogProperties(u.Localize.text("dialog_saveCrest_header"), u.Localize.text("dialog_saveCrest"), this.bindFunction(this.sendNewCrest(e)), e, e));
    } else {
      e();
    }
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.createSymbolColorMenu = function () {
    this._symbolColorMenu = new S();
    var e = 0;
    var t = 0;
    var i = new r.ColorTransform();
    for (var n = 0; n < g.ClientConstCrest.SYMBOL_COLORS.length; n++) {
      var o = new S();
      var a = new Library.CastleInterfaceElements.btn_color1();
      o.addChild(a);
      i.color = g.ClientConstCrest.SYMBOL_COLORS[n];
      a.cc.useFilters([new L(i.redMultiplier, i.greenMultiplier, i.blueMultiplier, i.alphaMultiplier, i.redOffset, i.greenOffset, i.blueOffset, i.alphaOffset)]);
      o.name = "num" + n;
      this._symbolColorMenu.addChild(o);
      o.x = t * (CastlePremiumMarketPlaceDialogFlag.COLOR_ICON_WIDTH + CastlePremiumMarketPlaceDialogFlag.COLOR_MARGIN_SIZE);
      o.y = e * (CastlePremiumMarketPlaceDialogFlag.COLOR_ICON_HEIGHT + CastlePremiumMarketPlaceDialogFlag.COLOR_MARGIN_SIZE);
      b.ButtonHelper.initBasicButton(o, 1.05);
      if (++t > CastlePremiumMarketPlaceDialogFlag.COLOR_COLUMN_COUNT - 1) {
        t = 0;
        e++;
      }
    }
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.createBGColorMenu = function () {
    this._bgColorMenu = new S();
    var e = 0;
    var t = 0;
    var i = new r.ColorTransform();
    for (var n = 0; n < g.ClientConstCrest.BACKGROUND_COLORS.length; n++) {
      var o = new S();
      var a = new Library.CastleInterfaceElements.btn_color1();
      o.addChild(a);
      i.color = g.ClientConstCrest.BACKGROUND_COLORS[n];
      a.cc.useFilters([new L(i.redMultiplier, i.greenMultiplier, i.blueMultiplier, i.alphaMultiplier, i.redOffset, i.greenOffset, i.blueOffset, i.alphaOffset)]);
      o.name = "num" + n;
      this._bgColorMenu.addChild(o);
      o.x = t * (CastlePremiumMarketPlaceDialogFlag.COLOR_ICON_WIDTH + CastlePremiumMarketPlaceDialogFlag.COLOR_MARGIN_SIZE);
      o.y = e * (CastlePremiumMarketPlaceDialogFlag.COLOR_ICON_HEIGHT + CastlePremiumMarketPlaceDialogFlag.COLOR_MARGIN_SIZE);
      b.ButtonHelper.initBasicButton(o, 1.05);
      if (++t > CastlePremiumMarketPlaceDialogFlag.COLOR_COLUMN_COUNT - 1) {
        t = 0;
        e++;
      }
    }
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.onCrestChangeFromServer = function (e) {
    this.resetCrest();
    this.layoutManager.updateGameStage();
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.setCrestBonusInfo = function () {
    var e;
    var t = u.Localize.text(CastlePremiumMarketPlaceDialogFlag.BONUS_COPY_NOEFFECT_TEXT_ID);
    switch (this.crestVO.symbolPosType) {
      case g.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED:
        if (c.instanceOfClass(this.crestVO.symbolType1, "PremiumCrestSymbolVO")) {
          e = this.crestVO.symbolType1;
          t = u.Localize.text(CastlePremiumMarketPlaceDialogFlag.BONUS_COPY_DOUBLEEFFECT_TEXT_ID, [u.Localize.text(e.getAdjustedTooltipText(true))]);
        }
        break;
      case g.ClientConstCrest.SYMBOL_POSITION_TWO_HORIZONTAL:
      case g.ClientConstCrest.SYMBOL_POSITION_TWO_VERTICAL:
      case g.ClientConstCrest.SYMBOL_POSITION_FOUR_X:
        if (c.instanceOfClass(this.crestVO.symbolType1, "PremiumCrestSymbolVO") && c.instanceOfClass(this.crestVO.symbolType2, "PremiumCrestSymbolVO")) {
          if (this.crestVO.symbolType1 == this.crestVO.symbolType2) {
            e = this.crestVO.symbolType1;
            t = u.Localize.text(CastlePremiumMarketPlaceDialogFlag.BONUS_COPY_DOUBLEEFFECT_TEXT_ID, [u.Localize.text(e.getAdjustedTooltipText(true))]);
          } else {
            e = this.crestVO.symbolType1;
            var i = this.crestVO.symbolType2;
            t = u.Localize.text(CastlePremiumMarketPlaceDialogFlag.BONUS_COPY_TWOEFFECT_TEXT_ID, [e.toolTipText, i.toolTipText]);
          }
        } else if (c.instanceOfClass(this.crestVO.symbolType1, "PremiumCrestSymbolVO")) {
          e = this.crestVO.symbolType1;
          t = u.Localize.text(CastlePremiumMarketPlaceDialogFlag.BONUS_COPY_ONEEFFECT_TEXT_ID, [e.toolTipText]);
        } else if (c.instanceOfClass(this.crestVO.symbolType2, "PremiumCrestSymbolVO")) {
          e = this.crestVO.symbolType2;
          t = u.Localize.text(CastlePremiumMarketPlaceDialogFlag.BONUS_COPY_ONEEFFECT_TEXT_ID, [e.toolTipText]);
        }
        break;
      default:
        t = u.Localize.text(CastlePremiumMarketPlaceDialogFlag.BONUS_COPY_NOEFFECT_TEXT_ID);
    }
    this.itxt_currentBonus.textContentVO.stringValue = t;
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.crestGenerator.removeEventListener(f.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onChangeValue));
    this.controller.removeEventListener(E.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onCrestChangeFromServer));
    this.hideAllToolTips();
  };
  Object.defineProperty(CastlePremiumMarketPlaceDialogFlag.prototype, "crestGenerator", {
    get: function () {
      return this.subLayerDisp.crestComponent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketPlaceDialogFlag.prototype, "crestHasChanged", {
    get: function () {
      return this._crestHasChanged;
    },
    enumerable: true,
    configurable: true
  });
  CastlePremiumMarketPlaceDialogFlag.prototype.enableBasicButton = function (e, t) {
    for (var i = 0; i < e.length; i++) {
      e[i].enableButton = t;
    }
  };
  CastlePremiumMarketPlaceDialogFlag.__initialize_static_members = function () {
    CastlePremiumMarketPlaceDialogFlag.NAME = "CastlePremiumMarketPlaceDialogFlag";
    CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_WIDTH = 20;
    CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT = 20;
    CastlePremiumMarketPlaceDialogFlag.SYMBOL_MARGIN_SIZE = 5;
    CastlePremiumMarketPlaceDialogFlag.SYMBOL_COLUMN_COUNT = 6;
    CastlePremiumMarketPlaceDialogFlag.COLOR_ICON_WIDTH = 25;
    CastlePremiumMarketPlaceDialogFlag.COLOR_ICON_HEIGHT = 25;
    CastlePremiumMarketPlaceDialogFlag.COLOR_MARGIN_SIZE = 5;
    CastlePremiumMarketPlaceDialogFlag.COLOR_COLUMN_COUNT = 5;
    CastlePremiumMarketPlaceDialogFlag.SYMBOL_UNLOCKED_NOT_BOUGHT_ALPHA = 0.2;
    CastlePremiumMarketPlaceDialogFlag.SYMBOL_BACKGROUND_ALPHA = 0.1;
    CastlePremiumMarketPlaceDialogFlag.SYMBOL_BACKGROUND_COLOR = 0;
    CastlePremiumMarketPlaceDialogFlag.SYMBOL_PANEL_DELIMITER_ALPHA = 0.5;
    CastlePremiumMarketPlaceDialogFlag.SYMBOL_PANEL_DELIMITER_COLOR = 0;
    CastlePremiumMarketPlaceDialogFlag.BONUS_HEADER_TEXT_ID = "dialog_crestSymbol_header";
    CastlePremiumMarketPlaceDialogFlag.BONUS_COPY_NOEFFECT_TEXT_ID = "dialog_crestSymbol_noEffect";
    CastlePremiumMarketPlaceDialogFlag.BONUS_COPY_ONEEFFECT_TEXT_ID = "dialog_crestSymbol_oneEffect";
    CastlePremiumMarketPlaceDialogFlag.BONUS_COPY_TWOEFFECT_TEXT_ID = "dialog_crestSymbol_twoEffect";
    CastlePremiumMarketPlaceDialogFlag.BONUS_COPY_DOUBLEEFFECT_TEXT_ID = "dialog_crestSymbol_doubleEffect";
    CastlePremiumMarketPlaceDialogFlag.RANDOM_CREST_TOOLTIP_ID = "dialog_createAccount_random";
    CastlePremiumMarketPlaceDialogFlag.REVERT_CREST_TOOLTIP_ID = "reset_crest";
    CastlePremiumMarketPlaceDialogFlag.SAVE_CREST_TOOLTIP_ID = "save_crest";
    CastlePremiumMarketPlaceDialogFlag.UNLOCK_CREST_TOOLTIP_ID = "panel_crestSymbol_collectMore";
    CastlePremiumMarketPlaceDialogFlag.BUY_CREST_TOOLTIP_ID = "panel_crestSymbol_buy";
  };
  return CastlePremiumMarketPlaceDialogFlag;
}(T.CastleDialogSubLayer);
exports.CastlePremiumMarketPlaceDialogFlag = P;
var M = require("./9.js");
var R = require("./61.js");
var V = require("./38.js");
var x = require("./151.js");
var w = require("./2601.js");
l.classImplementsInterfaces(P, "ICollectableRendererList", "ISublayer");
P.__initialize_static_members();