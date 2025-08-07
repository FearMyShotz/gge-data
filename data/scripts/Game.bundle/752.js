Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./18.js");
var d = require("./26.js");
var p = require("./31.js");
var h = require("./19.js");
var g = require("./53.js");
var C = require("./13.js");
var _ = require("./4.js");
var m = require("./76.js");
var f = require("./77.js");
var O = require("./47.js");
var E = require("./59.js");
var y = require("./8.js");
var b = require("./11.js");
var D = require("./2526.js");
var I = require("./2527.js");
var T = createjs.Point;
var v = function (e) {
  function CastleSpecialServerPreBuildCastleSelectionDialog() {
    var t = this;
    t.selectedCastleIndex = -1;
    t.BUILDING_CATEGORIES = [u.ClientConstCastle.BUILDINGGROUND_TYPE_CIVIL, u.ClientConstCastle.BUILDINGGROUND_TYPE_MILITARY, u.ClientConstCastle.BUILDINGGROUND_TYPE_DEFENCE, u.ClientConstCastle.BUILDINGGROUND_TYPE_DECO];
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleSpecialServerPreBuildCastleSelectionDialog.NAME) || this;
  }
  n.__extends(CastleSpecialServerPreBuildCastleSelectionDialog, e);
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    y.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.mc_costs.mc_buySpecialCurrency.btn_buySpecialCurrency], G.ClickFeedbackButtonHover);
    y.ButtonHelper.initButtons([this.dialogDisp.btn_buy], w.ClickFeedbackButton, 1);
    y.ButtonHelper.initButtons([this.dialogDisp.btn_buy2], G.ClickFeedbackButtonHover, 1);
    this._buildingListBuilder = new I.CastleSpecialServerPreBuildCastleSelectionBuildingList(this.dialogDisp.mc_items.mc_itemList);
    this._buildingList = new j.ModernSliderScrollComponent(new O.SimpleScrollVO().initByParent(this.dialogDisp.mc_items.mc_itemList).addMouseWheelElements([this.dialogDisp.mc_items]).addVisualElements([this.dialogDisp.mc_items.mc_itemList]).addMinusButton(this.dialogDisp.mc_items.mc_slider.btn_minus).addPlusButton(this.dialogDisp.mc_items.mc_slider.btn_plus).addSliderButton(this.dialogDisp.mc_items.mc_slider.btn_slider).addSliderLine(this.dialogDisp.mc_items.mc_slider.mc_sliderLine), new E.DynamicSizeScrollStrategyVertical(true, this.dialogDisp.mc_items.mc_mask.height));
    var i = new f.InfiniteScrollListOptions(R.CastleSpecialServerPreBuildCastleSelectionDialogPreBuiltItem, "CastleSpecialServerPreBuildCastleSelectionPreBuiltItem", CastleSpecialServerPreBuildCastleSelectionDialog.NAME);
    i.itemPaddingY = 6;
    i.useSmoothScroll = true;
    this._preBuildList = new A.InfiniteScrollListComponent(new m.InfiniteScrollListClips(this.dialogDisp.mc_preBuilts).addMaskMc(this.dialogDisp.mc_preBuilts.mc_mask).addSliderMc(this.dialogDisp.mc_preBuilts.mc_slider), i);
    this.dialogDisp.mc_costs.mc_buySpecialCurrency.btn_buySpecialCurrency.toolTipText = "dialog_tempServer_CastlePassageToken_button_tooltip";
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (y.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_buy:
        case this.dialogDisp.btn_buy2:
          this.onClickBuy();
          break;
        case this.dialogDisp.btn_close:
          this.onCloseOK();
          break;
        case this.dialogDisp.btn_help:
          if (this.isCastleTransportationOnly) {
            if (oe.SpecialServerHelper.isOnSpecialServer) {
              S.CastleDialogHandler.getInstance().showHelper("", l.Localize.text("help_tempServer_castleTransport"));
            } else {
              S.CastleDialogHandler.getInstance().showHelper("", l.Localize.text("help_tempServer_castleTransport_main"));
            }
          } else {
            S.CastleDialogHandler.getInstance().showHelper("", l.Localize.text("help_chooseCastle"));
          }
          break;
        case this.dialogDisp.mc_costs.mc_buySpecialCurrency.btn_buySpecialCurrency:
          var i = new k.CastleGenericBuyDialogProperties();
          i.specialEventVO = this.eventVO;
          i.eventPackageVO = this.currencyBuyPackgeVO;
          S.CastleDialogHandler.getInstance().registerDefaultDialogs(N.ModernPackageShopBuyDialog, i);
      }
    }
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.onClickBuy = function () {
    var e = this.presetVOs[this.selectedCastleIndex].costs;
    var t = new X.CollectablesCosts(e);
    if (!z.CostHelper.canAfford(t) && this.isCastleTransportationOnly) {
      S.CastleDialogHandler.getInstance().registerDefaultDialogs(J.DarkOkDialog, new Z.BasicStandardOkDialogProperties("dialog_insufficientCurrency_header", "dialog_insufficientCurrency_CastlePassageToken_desc"));
    } else if (e.length != 0 && e.list[0].amount != 0) {
      S.CastleDialogHandler.getInstance().registerDefaultDialogs(M.CastleTempServerCostConfirmationDialog, new D.CastleTempServerConfirmationDialogProperties(this.presetVOs[this.selectedCastleIndex], this.dialogProperties.globalServerID, this.bindFunction(this.onConfirmed)));
    } else {
      S.CastleDialogHandler.getInstance().registerDefaultDialogs(P.CastleTempServerConfirmationDialog, new D.CastleTempServerConfirmationDialogProperties(this.presetVOs[this.selectedCastleIndex], this.dialogProperties.globalServerID, this.bindFunction(this.onConfirmed)));
    }
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.onConfirmed = function () {
    var e = !!this.presetVOs[this.selectedCastleIndex].costs.containsType(K.CollectableEnum.C2);
    if (this.dialogProperties.type == B.CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_ABG) {
      _.CastleModel.smartfoxClient.sendCommandVO(new ee.C2STempServerSelectCastleVO(this.presetVOs[this.selectedCastleIndex].preBuildCastleVO.id, e, false, this.dialogProperties.globalServerID));
      _.CastleModel.userData.connectToABGServer = true;
    } else if (this.dialogProperties.type == B.CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_TEMPSERVER) {
      _.CastleModel.smartfoxClient.sendCommandVO(new ee.C2STempServerSelectCastleVO(this.presetVOs[this.selectedCastleIndex].preBuildCastleVO.id, e, false, this.dialogProperties.globalServerID));
      _.CastleModel.userData.connectToTempServer = true;
    } else if (this.dialogProperties.type == B.CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_STORMISLANDS) {
      _.CastleModel.smartfoxClient.sendCommandVO(new te.C2SSelectKingdomCastleVO(this.presetVOs[this.selectedCastleIndex].preBuildCastleVO.id, 0, e, ie.WorldIsland.KINGDOM_ID));
    }
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.onCloseOK = function () {
    this.hide();
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    _.CastleModel.specialEventData.addEventListener(d.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
    this.controller.addEventListener(Q.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    if (this.dialogProperties.type == B.CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_STORMISLANDS) {
      this.controller.addEventListener($.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onIslandReset));
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId(this.isCastleTransportationOnly ? "dialog_tempServer_castleTransport_header" : "dialog_chooseCastle_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title_content, new s.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_preBuiltCastle_desc_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title_castle, new s.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_preBuiltCastle_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_buy.txt_value, new s.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_preBuiltCastle_buyCastle_Button")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_buy2.txt_value, new s.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("build")));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.costs_1.txt_copy, new s.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("dialoge_shapeshifter_Travel_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_castleTransportation.txt_desc, new r.LocalizedTextVO("dialog_tempServer_castleTransport_desc"));
    this.dialogDisp.mc_castleTransportation.visible = this.isCastleTransportationOnly;
    this.dialogDisp.mc_preBuilts.visible = !this.isCastleTransportationOnly;
    this._preBuildList.onShow();
    this._preBuildList.updateWithNewData(this.getPresetsAsVecObj());
    this._buildingList.show();
    this._buildingList.onScrollSignal.add(this.bindFunction(this.onValueChanged));
    this._buildingList.scrollToPercent(0);
    this.selectCastle(this.selectedCastleIndex == -1 ? 0 : this.selectedCastleIndex);
    if (this.isCastleTransportationOnly) {
      this.controller.addEventListener(W.CastlePrebuiltCastleDataEvent.MAIN_CASTLE_BUILDINGS_UPDATED, this.bindFunction(this.onMainCastleBuildingsUpdated));
      _.CastleModel.smartfoxClient.sendCommandVO(new Y.C2SGetCastleTransportationBuildingsVO());
    }
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.onMainCastleBuildingsUpdated = function (e) {
    this.selectCastle(this.selectedCastleIndex == -1 ? 0 : this.selectedCastleIndex);
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.onCurrenciesUpdated = function (e) {
    this.fillCosts();
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.onValueChanged = function () {
    this.dialogDisp.mc_items.mc_itemList.y = -this._buildingList.currentValue;
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.fillCosts = function () {
    this.dialogDisp.mc_costs.mc_discount.visible = this.presetVOs[this.selectedCastleIndex].preBuildCastleVO.shownDiscount > 0;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.mc_discount.txt_discount, new r.LocalizedTextVO(H.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [this.presetVOs[this.selectedCastleIndex].preBuildCastleVO.shownDiscount]));
    this.dialogDisp.btn_buy.visible = true;
    this.dialogDisp.btn_buy2.visible = false;
    this.dialogDisp.mc_costs.mc_buySpecialCurrency.visible = false;
    this.dialogDisp.mc_costs.mc_buySpecialCurrency.mc_discount.visible = false;
    var e = this.presetVOs[this.selectedCastleIndex].costs;
    if (e.length <= 1) {
      this.dialogDisp.mc_costs.costs_1.visible = true;
      this.dialogDisp.mc_costs.costs_2.visible = false;
      this.dialogDisp.mc_costs.costs_3.visible = false;
      this.dialogDisp.mc_costs.costs_4.visible = false;
      if (e.length == 0 || e.list[0].amount == 0) {
        this.dialogDisp.mc_costs.costs_1.txt_value.textColor = q.ClientConstColor.FONT_DEFAULT_COLOR;
        this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.costs_1.txt_value, new s.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("forFree")));
        this.textFieldManager.registerTextField(this.dialogDisp.btn_buy2.txt_value, new s.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("build")));
        this.dialogDisp.btn_buy.visible = false;
        this.dialogDisp.btn_buy2.visible = true;
        a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_costs.costs_1.mc_icon);
      } else {
        var t = e.list[0];
        var i = new X.CollectablesCosts(e);
        var n = z.CostHelper.canAfford(i);
        this.fillStartResourceItem(this.dialogDisp.mc_costs.costs_1, t, new T(30, 30), n ? q.ClientConstColor.FONT_DEFAULT_COLOR : q.ClientConstColor.FONT_INSUFFICIENT_COLOR);
        this.textFieldManager.registerTextField(this.dialogDisp.btn_buy2.txt_value, new s.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_preBuiltCastle_buyCastle_Button")));
        this.dialogDisp.btn_buy.visible = t.itemType == K.CollectableEnum.C2;
        this.dialogDisp.btn_buy2.visible = t.itemType != K.CollectableEnum.C2;
        this.dialogDisp.mc_costs.mc_buySpecialCurrency.visible = !!this.currencyBuyPackgeVO;
        if (t.itemType == K.CollectableEnum.GENERIC_CURRENCY) {
          this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.costs_1.txt_value, new r.LocalizedTextVO(H.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [t.amount, _.CastleModel.currencyData.getAmountById(t.id)]));
        }
        if (this.currencyBuyPackgeVO && U.EventPackagePrimeSaleEventVO.getPackageDiscountC2(this.currencyBuyPackgeVO.packageID) > 0) {
          this.dialogDisp.mc_costs.mc_buySpecialCurrency.mc_discount.visible = true;
          var o = U.EventPackagePrimeSaleEventVO.getPackageDiscountC2(this.currencyBuyPackgeVO.packageID);
          this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.mc_buySpecialCurrency.mc_discount.txt_discount, new r.LocalizedTextVO(H.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [o]));
        }
      }
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.btn_buy2.txt_value, new s.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_preBuiltCastle_buyCastle_Button")));
      this.dialogDisp.btn_buy.visible = false;
      this.dialogDisp.btn_buy2.visible = true;
      this.dialogDisp.mc_costs.costs_1.visible = false;
      this.dialogDisp.mc_costs.costs_2.visible = e.length == 2;
      this.dialogDisp.mc_costs.costs_3.visible = e.length == 3;
      this.dialogDisp.mc_costs.costs_4.visible = e.length >= 4;
      var l = e.length == 2 ? this.dialogDisp.mc_costs.costs_2 : e.length == 3 ? this.dialogDisp.mc_costs.costs_3 : this.dialogDisp.mc_costs.costs_4;
      for (var c = 0; c < 4; c++) {
        this.fillStartResourceItem(l["cost" + c], e.list.length > c ? e.list[c] : null, new T(30, 30), null, true);
      }
    }
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.fillDescription = function () {
    this.dialogDisp.mc_items.mc_itemList.mc_header.mc_description.visible = true;
    var e = "dialog_prebuiltCastle" + this.presetVOs[this.selectedCastleIndex].preBuildCastleVO.id + "_info";
    this.textFieldManager.registerTextField(this.dialogDisp.mc_items.mc_itemList.mc_header.mc_description.txt_description, new r.LocalizedTextVO(e));
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.fillStartCurrencies = function () {
    this.dialogDisp.mc_items.mc_itemList.mc_header.mc_description.visible = false;
    if (this.presetVOs[this.selectedCastleIndex].startPlayerLegendLevel > 0) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_items.mc_itemList.mc_header.txt_title1, new s.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_castleTransport_startingLevel", [this.presetVOs[this.selectedCastleIndex].startPlayerLegendLevel])));
      this.dialogDisp.mc_items.mc_itemList.mc_header.icon_level.gotoAndStop(2);
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_items.mc_itemList.mc_header.txt_title1, new s.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("castleLevel", [this.presetVOs[this.selectedCastleIndex].startPlayerLevel])));
      this.dialogDisp.mc_items.mc_itemList.mc_header.icon_level.gotoAndStop(1);
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title2, new s.TextVO(this.presetVOs[this.selectedCastleIndex].getNameText()));
    var e = [];
    var t = [];
    for (var i = 0, n = this.presetVOs[this.selectedCastleIndex].startResourceVO.startResources.list; i < n.length; i++) {
      var o = n[i];
      if (o !== undefined) {
        if (V.instanceOfClass(o, "ACollectableItemResourceVO")) {
          e.push(o);
        } else {
          t.push(o);
        }
      }
    }
    var a = 0;
    for (a = 0; a < 4; a++) {
      this.fillStartResourceItem(this.dialogDisp.mc_items.mc_itemList.mc_header["mc_currency" + a], t.length > a ? t[a] : null, new T(22, 22));
    }
    for (a = 0; a < 8; a++) {
      this.fillStartResourceItem(this.dialogDisp.mc_items.mc_itemList.mc_header["mc_resource" + a], e.length > a ? e[a] : null, new T(22, 22));
    }
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.fillStartResourceItem = function (e, t, i, n = null, o = false) {
    if (e) {
      if (n) {
        e.txt_value.textColor = n;
      }
      if (t) {
        e.visible = true;
        var s = undefined;
        if (o) {
          var r = _.CastleModel.userCastleListDetailed.getMainCastleByKingdomID(ne.WorldClassic.KINGDOM_ID);
          (s = new h.CollectableRenderOptions(h.CollectableRenderOptions.SET_COST_LIST, i)).costTextfield.useOtherResourceStorage = r.getResourcesAsCollectableList();
        } else {
          s = new h.CollectableRenderOptions(h.CollectableRenderOptions.SET_RESOURCE_LIST, i);
        }
        s.tooltip.useAmount = false;
        s.textfield.useAutoFitToBounds = false;
        var l = new p.CollectableRenderClips();
        l.addIconMc(e.mc_icon);
        l.addTextfield(e.txt_value);
        L.CollectableRenderHelper.displaySingleItemComplete(this, l, t, s);
      } else {
        e.visible = false;
        a.MovieClipHelper.clearMovieClip(e.mc_icon);
      }
    }
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.getPresetsAsVecObj = function () {
    var e = [];
    var t = 0;
    if (this.presetVOs != null) {
      for (var i = 0, n = this.presetVOs; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          e.push([o, t, this.bindFunction(this.selectCastle), this.dialogProperties.type]);
          t++;
        }
      }
    }
    return e;
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.getBuildingData = function () {
    var e = [];
    for (var t = 0; t < this.BUILDING_CATEGORIES.length; t++) {
      e.push([]);
    }
    for (var i = 0; i < this.preBuildCastle.buildings.length; i++) {
      var n = c.int(this.BUILDING_CATEGORIES.indexOf(this.preBuildCastle.buildings[i].buildingVO.buildingGroundType));
      if (n < 0) {
        n = c.int(this.BUILDING_CATEGORIES.indexOf(u.ClientConstCastle.BUILDINGGROUND_TYPE_DEFENCE));
      }
      e[n].push(this.preBuildCastle.buildings[i]);
    }
    return e;
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    _.CastleModel.specialEventData.removeEventListener(d.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
    this.controller.removeEventListener(Q.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    this.controller.removeEventListener(W.CastlePrebuiltCastleDataEvent.MAIN_CASTLE_BUILDINGS_UPDATED, this.bindFunction(this.onMainCastleBuildingsUpdated));
    this.controller.removeEventListener($.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onIslandReset));
    this._buildingList.hide();
    this._buildingList.onScrollSignal.remove(this.bindFunction(this.onValueChanged));
    this.selectedCastleIndex = -1;
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.selectCastle = function (e) {
    this.selectedCastleIndex = e;
    for (var t = 0, i = this._preBuildList.items; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        if (e == n.index) {
          n.select();
        } else {
          n.unSelect();
        }
      }
    }
    this._buildingListBuilder.fillWithData(this.getBuildingData());
    this._buildingList.init(0, this.dialogDisp.mc_items.mc_itemList.height - this.dialogDisp.mc_items.mc_slider.height, 60, 60);
    this._buildingList.show();
    this._buildingList.scrollToPercent(0);
    this.fillStartCurrencies();
    this.fillCosts();
    if (this.dialogProperties.type == B.CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_STORMISLANDS) {
      this.fillDescription();
    }
  };
  Object.defineProperty(CastleSpecialServerPreBuildCastleSelectionDialog.prototype, "preBuildCastle", {
    get: function () {
      return this.presetVOs[this.selectedCastleIndex].preBuildCastleVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialServerPreBuildCastleSelectionDialog.prototype, "presetVOs", {
    get: function () {
      if (this.dialogProperties.type == B.CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_ABG) {
        return g.ABGHelper.abgEvent.settingVO.presetVOs;
      } else if (this.dialogProperties.type == B.CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_TEMPSERVER) {
        return F.TempServerHelper.tmpServerEvent.settingVO.presetVOs;
      } else if (this.dialogProperties.type == B.CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_STORMISLANDS) {
        return _.CastleModel.kingdomData.stormIslandsPreBuildCastles;
      } else {
        return undefined;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.onRefreshSpecialEvent = function (e) {
    if (this.dialogProperties.isEvent() && !this.eventVO) {
      this.hide();
    }
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.onIslandReset = function (e) {
    if (this.dialogProperties.type == B.CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_STORMISLANDS) {
      this.hide();
    }
  };
  Object.defineProperty(CastleSpecialServerPreBuildCastleSelectionDialog.prototype, "eventVO", {
    get: function () {
      if (this.dialogProperties.globalServerID == x.GlobalServerConst.ALLIANCE_BATTLE_GROUND_SERVER) {
        return g.ABGHelper.abgEvent;
      } else if (this.dialogProperties.globalServerID == x.GlobalServerConst.TEMP_SERVER) {
        return F.TempServerHelper.tmpServerEvent;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialServerPreBuildCastleSelectionDialog.prototype, "currencyBuyPackgeVO", {
    get: function () {
      return this.presetVOs[this.selectedCastleIndex].currencyBuyPackage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialServerPreBuildCastleSelectionDialog.prototype, "isCastleTransportationOnly", {
    get: function () {
      return this.presetVOs.length == 1 && this.presetVOs[0].preBuildCastleVO.isMainCastleCopy;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialServerPreBuildCastleSelectionDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSpecialServerPreBuildCastleSelectionDialog.NAME = "CastleSpecialServerPreBuildCastleSelection_X";
  return CastleSpecialServerPreBuildCastleSelectionDialog;
}(b.CastleExternalDialog);
exports.CastleSpecialServerPreBuildCastleSelectionDialog = v;
o.classImplementsInterfaces(v, "ICollectableRendererList");
var S = require("./9.js");
var A = require("./78.js");
var L = require("./25.js");
var P = require("./1393.js");
var M = require("./2528.js");
var R = require("./2529.js");
var V = require("./1.js");
var x = require("./5.js");
var w = require("./36.js");
var B = require("./615.js");
var F = require("./137.js");
var N = require("./206.js");
var k = require("./167.js");
var U = require("./190.js");
var G = require("./20.js");
var H = require("./2.js");
var j = require("./82.js");
var W = require("./1394.js");
var Y = require("./2530.js");
var K = require("./12.js");
var z = require("./66.js");
var q = require("./16.js");
var X = require("./367.js");
var Q = require("./32.js");
var J = require("./216.js");
var Z = require("./2.js");
var $ = require("./243.js");
var ee = require("./1395.js");
var te = require("./964.js");
var ie = require("./5.js");
var ne = require("./5.js");
var oe = require("./44.js");