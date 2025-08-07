Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./1.js");
var d = require("./5.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./3.js");
var C = require("./3.js");
var _ = require("./6.js");
var m = require("./16.js");
var f = require("./37.js");
var O = require("./71.js");
var E = require("./13.js");
var y = require("./4.js");
var b = require("./490.js");
var D = require("./24.js");
var I = require("./82.js");
var T = require("./47.js");
var v = require("./59.js");
var S = require("./8.js");
var A = require("./185.js");
var L = require("./11.js");
var P = createjs.MouseEvent;
var M = createjs.Point;
var R = function (e) {
  function BuildingDistrictDialog() {
    var t = this;
    t._contentStartPosY = 0;
    t._currentDistrictType = -1;
    t.isDragging = false;
    t.lastMousePosY = NaN;
    CONSTRUCTOR_HACK;
    return t = e.call(this, BuildingDistrictDialog.NAME) || this;
  }
  n.__extends(BuildingDistrictDialog, e);
  BuildingDistrictDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.dialogDisp.mc_capacity.mouseChildren = false;
    this.dialogDisp.mc_capacity.toolTipText = "districtSpace_tt";
    this.dialogDisp.mc_decoPoints.icon_decoPoints.mouseChildren = false;
    this.dialogDisp.mc_decoPoints.icon_decoPoints.toolTipText = "publicOrder_combined";
    this.dialogDisp.mc_buildingList.mouseChildren = false;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_buildingList.txt_buildingList, new C.LocalizedTextVO("dialog_district_buildingList_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_content, new h.TextVO(E.TextHelper.toUpperCaseLocaSafe(g.Localize.text("dialog_district_overview"))));
    S.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_upgrade, this.dialogDisp.btn_gacha], Y.ClickFeedbackButton);
    var i = new v.DynamicSizeScrollStrategyVertical(true, BuildingDistrictDialog.ROW_HEIGHT * 2);
    this._scrollComponent = new I.ModernSliderScrollComponent(new T.SimpleScrollVO().initByParent(this.dialogDisp.mc_slider).addMouseWheelElements([this.dialogDisp]), i);
    this._interactionData = new k.ConstructionItemsInteractionData();
    this.initCISlots();
    this.dialogDisp.bottomMenu.visible = false;
    this.dialogDisp.bottomMenu_noCI.visible = false;
    this.dialogDisp.mc_decoPoints.visible = false;
    this.dialogDisp.mc_contentHolder.mask = this.dialogDisp.mc_mask;
    this.dialogDisp.bg_cached.mouseChildren = false;
    this.dialogDisp.mc_ringmenuMask.visible = false;
    this._contentStartPosY = _.int(this.dialogDisp.mc_contentHolder.y);
  };
  BuildingDistrictDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(O.AreaDataEvent.ON_BURNING_CASTLE_UPDATED, this.bindFunction(this.onUpdateCastleData));
    this.controller.addEventListener(f.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onSwitchCastle));
  };
  BuildingDistrictDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    this.controller.removeEventListener(O.AreaDataEvent.ON_BURNING_CASTLE_UPDATED, this.bindFunction(this.onUpdateCastleData));
    this.controller.removeEventListener(f.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onSwitchCastle));
  };
  BuildingDistrictDialog.prototype.onUpdateCastleData = function (e) {
    this.updateBuildingSlots();
    if (this._interactionData.selectedBuilding && this._slots != null) {
      for (var t = 0, i = this._slots; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.index == this._interactionData.selectedBuilding.districtSlotID && (!n.building || n.building.vo != this._interactionData.selectedBuilding)) {
          this.deselectBuilding();
          break;
        }
      }
    }
    this.updateDecoPoints();
  };
  BuildingDistrictDialog.prototype.onSwitchCastle = function (e) {
    this.hide();
  };
  BuildingDistrictDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new h.TextVO(E.TextHelper.toUpperCaseLocaSafe(this.dialogProperties.districtBuildingVO.getInfoTooltipLine1())));
    this.initBuildingListTooltip();
    this.updateBuildingSlots();
    this.updateUpgradeButton();
    this.updateDecoPoints();
    this.updateGacha();
    this._currentDistrictType = this.dialogProperties.districtBuildingVO.districtTypeID;
    var i = Math.max(0, Math.ceil((this.getMaxLevelCapacity() - BuildingDistrictDialog.ITEMS_PER_ROW * BuildingDistrictDialog.VISIBLE_ROWS) / BuildingDistrictDialog.ITEMS_PER_ROW)) * BuildingDistrictDialog.ROW_HEIGHT + BuildingDistrictDialog.ADDITIONAL_BOTTOM_HEIGHT;
    this._scrollComponent.init(0, i, BuildingDistrictDialog.ROW_HEIGHT, BuildingDistrictDialog.ROW_HEIGHT / 4);
    this._scrollComponent.show();
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
    this._interactionData.SGN_UPDATE.add(this.bindFunction(this.onSelectBuilding));
    this.onScrollValueChange();
    if (this._ciSlots != null) {
      for (var n = 0, o = this._ciSlots; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          a.show();
        }
      }
    }
    window.setTimeout(this.bindFunction(this.preselectBuilding), 1);
    this.disp.addEventListener(P.PRESS_MOVE, this.bindFunction(this.onMouseMove));
  };
  BuildingDistrictDialog.prototype.preselectBuilding = function () {
    if (this.dialogProperties.targetBuildingVE) {
      x.Iso.renderer.mouse.deselectTarget();
      x.Iso.renderer.mouse.changeSelectedTarget(this.dialogProperties.targetBuildingVE);
      this._interactionData.setSelectedBuilding(this.dialogProperties.targetBuildingVE.buildingVO);
    }
  };
  BuildingDistrictDialog.prototype.onScrollValueChange = function () {
    this.dialogDisp.mc_contentHolder.y = this._contentStartPosY - this._scrollComponent.currentValue;
  };
  BuildingDistrictDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this._scrollComponent.hide();
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChange));
    this.deselectBuilding();
    this._interactionData.SGN_UPDATE.remove(this.bindFunction(this.onSelectBuilding));
    if (this._ciSlots != null) {
      for (var i = 0, n = this._ciSlots; i < n.length; i++) {
        s = n[i];
        if (s !== undefined) {
          s.hide();
        }
      }
    }
    if (this._slots != null) {
      for (var o = 0, a = this._slots; o < a.length; o++) {
        var s;
        s = a[o];
        if (s !== undefined) {
          s.onHide();
        }
      }
    }
    var r = this.layoutManager.getIngameUIComponent(w.RingMenuBuilding);
    if (r) {
      r.disp.mask = null;
    }
    this._slots = [];
    c.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_contentHolder);
    this.disp.removeEventListener(P.PRESS_MOVE, this.bindFunction(this.onMouseMove));
  };
  BuildingDistrictDialog.prototype.initBuildingListTooltip = function () {
    var e = this.textFieldManager.registerTextField(this.dialogDisp.mc_buildingList_tooltip.txt_buildings, new h.TextVO(this.getValidBuildingsList()));
    this.dialogDisp.mc_buildingList_tooltip.bg.height = e.textHeight + 20;
    this.dialogDisp.mc_buildingList_tooltip.visible = false;
  };
  BuildingDistrictDialog.prototype.updateUpgradeButton = function () {
    var e = this.dialogProperties.districtBuildingVO.hasUpgrade;
    S.ButtonHelper.enableButton(this.dialogDisp.btn_upgrade, e);
    this.dialogDisp.btn_upgrade.toolTipText = e ? "upgrade" : "levelCapReached";
  };
  BuildingDistrictDialog.prototype.updateBuildingSlots = function () {
    var e = u.getDefinitionByName(this.dialogProperties.districtBuildingVO.buildingSlotAssetName);
    var t = this.getBuildings();
    var i = this.getMaxLevelCapacity();
    this._slots = [];
    c.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_contentHolder);
    this.updateDistrictBackground(i);
    var n = 0;
    for (var o = 0; o < i; o++) {
      var a = new e();
      var s = t[o];
      var r = new G.BuildingDistrictSlot(a, s, this.dialogProperties.districtBuildingVO, o, this._interactionData);
      this.dialogDisp.mc_contentHolder.addChild(r.disp);
      r.onShow();
      this._slots.push(r);
      if (s) {
        n++;
      }
    }
    this.textFieldManager.registerTextField(this.dialogDisp.mc_capacity.txt_capacity, new C.LocalizedTextVO(l.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [n, this.dialogProperties.districtBuildingVO.districtSlots]));
  };
  BuildingDistrictDialog.prototype.updateDistrictBackground = function (e) {
    if (this._currentDistrictType != this.dialogProperties.districtBuildingVO.districtTypeID) {
      this._backgroundClip_Top = null;
      this._backgroundClip_Bottom = null;
      this._backgroundClips_Middle = [];
    }
    this._backgroundClip_Top ||= this.createBackgroundTile("BuildingDistrictBackground_Top_" + this.dialogProperties.districtBuildingVO.districtTypeID);
    this._backgroundClip_Bottom ||= this.createBackgroundTile("BuildingDistrictBackground_Bottom_" + this.dialogProperties.districtBuildingVO.districtTypeID);
    this._backgroundClips_Middle ||= [];
    var t = Math.max(0, Math.ceil(e / 3) - 2);
    this.dialogDisp.mc_contentHolder.addChild(this._backgroundClip_Top);
    this._backgroundClip_Top.recolor();
    for (var i = 0; i < t; i++) {
      if (this._backgroundClips_Middle.length < i + 1) {
        this._backgroundClips_Middle.push(this.createBackgroundTile("BuildingDistrictBackground_Middle_" + this.dialogProperties.districtBuildingVO.districtTypeID));
      }
      var n = this._backgroundClips_Middle[i];
      n.y = (i + 1) * BuildingDistrictDialog.ROW_HEIGHT;
      this.dialogDisp.mc_contentHolder.addChild(n);
      n.recolor();
    }
    this._backgroundClip_Bottom.y = (i + 1) * BuildingDistrictDialog.ROW_HEIGHT;
    this.dialogDisp.mc_contentHolder.addChild(this._backgroundClip_Bottom);
    this._backgroundClip_Bottom.recolor();
  };
  BuildingDistrictDialog.prototype.createBackgroundTile = function (e) {
    var t = [];
    t.push(new r.ClipColor("flag", y.CastleModel.userData.playerCrest.colorsTwo));
    var i = s.BasicModel.basicLoaderData.getVersionedItemAssetUrl("BuildingDistrictBackground_" + this.dialogProperties.districtBuildingVO.districtTypeID);
    return new D.CastleGoodgameExternalClip(e, i, t, 0, false, null, false, 1, false, false, true);
  };
  BuildingDistrictDialog.prototype.initCISlots = function () {
    this._ciSlots = [];
    for (var e = 0; e < d.ConstructionItemConst.SLOT_TYPE_COUNTS.length; ++e) {
      for (var t = 0; t < d.ConstructionItemConst.SLOT_TYPE_COUNTS[e]; ++t) {
        var i = new U.ConstructionItemSlotBuildingDistrict(new b.ConstructionItemSlotVO(e, t), this._interactionData, this.bindFunction(this.onClickConstructionItemSlot), this.dialogDisp.bottomMenu["slot_" + e + "_" + t]);
        this._ciSlots.push(i);
      }
    }
  };
  BuildingDistrictDialog.prototype.onSelectBuilding = function (e) {
    var t = !!this._interactionData.selectedBuilding;
    this.bottomMenu.visible = t;
    if (t) {
      var i = this._interactionData.selectedBuilding.multiInfoPanelVO.items;
      for (var n = 0; n < this.getMaxEffects(); n++) {
        var o = this.bottomMenu["mc_effect" + n];
        var a = i.length > n ? i[n] : null;
        if (a) {
          o.mc_empty.visible = false;
          c.MovieClipHelper.clearMovieClip(o.mc_icon);
          var s = new a.iconClass();
          c.MovieClipHelper.scaleToFit(s, 30, 30);
          o.mc_icon.addChild(s);
          o.toolTipText = a.tooltipText;
          o.mouseChildren = false;
          var r = this.textFieldManager.registerTextField(o.txt_value, a.textVO);
          var l = a.textColor == m.ClientConstColor.FONT_DEFAULT_COLOR ? m.ClientConstColor.MODERN_DEFAULT_BRIGHT : a.textColor;
          A.SubscriptionHelper.showSubscriptionStarToTextField(r, a.useSubscription, 15, new M(-3, -3), true, l);
        } else {
          o.mc_empty.visible = true;
          o.toolTipText = null;
        }
      }
      var u = this._interactionData.selectedBuilding.hasConstructionItemSlots;
      if (this._ciSlots != null) {
        for (var d = 0, p = this._ciSlots; d < p.length; d++) {
          var h = p[d];
          if (h !== undefined) {
            h.disp.visible = u;
          }
        }
      }
      var g = this.layoutManager.getIngameUIComponent(w.RingMenuBuilding);
      var C = W.CastleMovieClipHelper.applyMaskFromMovieClip(g.disp, this.dialogDisp.mc_ringmenuMask, g.disp.parent);
      var _ = this.dialogDisp.localToGlobal(this.dialogDisp.mc_ringmenuMask.x, this.dialogDisp.mc_ringmenuMask.y);
      var f = g.disp.parent.globalToLocal(_);
      C.x = f.x;
      C.y = f.y;
      this.adjustScrollBounds(this.bottomMenu.height);
      this._scrollComponent.scrollToValue(this._scrollComponent.currentValue);
      var O = Math.floor(this._interactionData.selectedBuilding.districtSlotID / BuildingDistrictDialog.ITEMS_PER_ROW) * BuildingDistrictDialog.ROW_HEIGHT;
      var E = O - BuildingDistrictDialog.ROW_HEIGHT * 0.25;
      if (this._scrollComponent.currentValue > O) {
        this._scrollComponent.scrollToValue(O);
      } else if (this._scrollComponent.currentValue < E) {
        this._scrollComponent.scrollToValue(E);
      }
    } else {
      this.adjustScrollBounds();
      this._scrollComponent.scrollToValue(this._scrollComponent.currentValue);
    }
  };
  BuildingDistrictDialog.prototype.adjustScrollBounds = function (e = 0) {
    var t = Math.max(0, Math.ceil((this.getMaxLevelCapacity() - BuildingDistrictDialog.ITEMS_PER_ROW * BuildingDistrictDialog.VISIBLE_ROWS) / BuildingDistrictDialog.ITEMS_PER_ROW));
    var i = _.int(t * BuildingDistrictDialog.ROW_HEIGHT + e + BuildingDistrictDialog.ADDITIONAL_BOTTOM_HEIGHT);
    this._scrollComponent.setScrollBounds(this._scrollComponent.minValue, i);
  };
  BuildingDistrictDialog.prototype.onClickConstructionItemSlot = function (e) {
    if (e.isLocked()) {
      N.ConstructionItemsHelper.handleSlotClickLocked(e.slotVO);
    } else {
      var t = new F.CastleConstructionItemsMainDialogProperties(B.CastleConstructionItemsMainDialog.SUBLAYER_ITEMS_ASSIGN, e.slotVO, e.buildingVO);
      L.CastleExternalDialog.dialogHandler.registerDefaultDialogs(B.CastleConstructionItemsMainDialog, t);
    }
  };
  BuildingDistrictDialog.prototype.onClick = function (e) {
    if (!!this._interactionData.selectedBuilding && !S.ButtonHelper.hasBasicButton(e.target) && !this.clickTargetIsBuilding(e.target)) {
      this.deselectBuilding();
    }
    if (S.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_upgrade:
          this.hide();
          var t = H.castAs(x.Iso.renderer.objects.provider.getObjectById(this.dialogProperties.districtBuildingVO.objectId), "ADistrictBuildingVE");
          if (t) {
            x.Iso.renderer.mouse.changeSelectedTarget(t);
          }
          break;
        case this.dialogDisp.btn_help:
          L.CastleExternalDialog.dialogHandler.showHelper("", g.Localize.text("help_district"));
          break;
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_gacha:
          var i = this.getGachaEventVO();
          this.hide();
          if (i) {
            i.openDialog();
          }
      }
      if (o.currentBrowserInfo.isTouchEvent(e) && e.target == this.dialogDisp.mc_buildingList) {
        this.dialogDisp.mc_buildingList_tooltip.visible = !this.dialogDisp.mc_buildingList_tooltip.visible;
        x.Iso.renderer.mouse.deselectTarget();
      }
    }
  };
  BuildingDistrictDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (t.target == this.dialogDisp.mc_buildingList) {
      this.dialogDisp.mc_buildingList_tooltip.visible = true;
      x.Iso.renderer.mouse.deselectTarget();
    }
  };
  BuildingDistrictDialog.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    if (t.target == this.dialogDisp.mc_buildingList) {
      this.dialogDisp.mc_buildingList_tooltip.visible = false;
    }
  };
  BuildingDistrictDialog.prototype.onMouseDown = function (e) {
    if (c.MovieClipHelper.isChildrenOf(e.target, this.dialogDisp.mc_contentHolder)) {
      this.isDragging = true;
      this.lastMousePosY = this.dialogDisp.stage.mouseY;
      this.layoutManager.nativeCursor.setCursorType(a.BasicCustomCursor.CURSOR_DRAG);
    }
  };
  BuildingDistrictDialog.prototype.onMouseUp = function (e) {
    if (this.isDragging) {
      this.isDragging = false;
      this.layoutManager.nativeCursor.setCursorType(a.BasicCustomCursor.CURSOR_ARROW);
    }
  };
  BuildingDistrictDialog.prototype.onMouseMove = function (e) {
    if (this.isDragging) {
      var t = _.int(this.dialogDisp.stage.mouseY - this.lastMousePosY);
      this._scrollComponent.scrollToValue(this._scrollComponent.currentValue - t);
      this.lastMousePosY = this.dialogDisp.stage.mouseY;
    }
  };
  BuildingDistrictDialog.prototype.clickTargetIsBuilding = function (e) {
    if (e && this._slots != null) {
      for (var t = 0, i = this._slots; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && c.MovieClipHelper.isChildrenOf(e, n.disp.buildingHolder)) {
          return true;
        }
      }
    }
    return false;
  };
  BuildingDistrictDialog.prototype.deselectBuilding = function () {
    x.Iso.renderer.mouse.deselectTarget();
    this._interactionData.setSelectedBuilding(null);
  };
  BuildingDistrictDialog.prototype.getValidBuildingsList = function () {
    var e;
    var t = y.CastleModel.areaData.activeArea ? y.CastleModel.areaData.activeArea.spaceId : -1;
    var i = y.CastleModel.areaData.activeArea ? y.CastleModel.areaData.activeArea.areaInfo.areaType : -1;
    var n = y.CastleModel.buildingDistrictData.getPossibleBuildingsForType(this.dialogProperties.districtBuildingVO.districtTypeID, t, i);
    var o = "";
    var a = [];
    if (n != null) {
      for (var s = 0, r = n; s < r.length; s++) {
        var c = r[s];
        if (c !== undefined) {
          e = g.Localize.text(l.GenericTextIds.VALUE_SIMPLE_COMP, ["•", g.Localize.text(c.getNameString())]);
          if (!(a.indexOf(e) > -1)) {
            if (o != "") {
              o += "\n";
            }
            a.push(e);
            o += e;
          }
        }
      }
    }
    if (this.isDecoDistrict()) {
      o += "\n";
      o += g.Localize.text(l.GenericTextIds.VALUE_SIMPLE_COMP, ["•", g.Localize.text("moreComingSoon")]);
    }
    return g.Localize.text("dialog_district_buildingList_desc", [o]);
  };
  BuildingDistrictDialog.prototype.getBuildings = function () {
    var e = new Array(this.getMaxLevelCapacity());
    var t = x.Iso.renderer.objects.provider.getObjectsByGroupType(V.IsoObjectGroupEnum.INNER_BUILDINGS);
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && j.instanceOfClass(o.vo, "ABasicBuildingVO") && o.vo.inDistrictID == this.dialogProperties.districtBuildingVO.districtTypeID) {
          e[o.vo.districtSlotID] = o;
        }
      }
    }
    return e;
  };
  BuildingDistrictDialog.prototype.getMaxLevelCapacity = function () {
    return _.int(y.CastleModel.wodData.getHighestUpgradeForBuilding(this.dialogProperties.districtBuildingVO.wodId).districtSlots);
  };
  BuildingDistrictDialog.prototype.isDecoDistrict = function () {
    return this.dialogProperties.districtBuildingVO.districtTypeID == 7;
  };
  Object.defineProperty(BuildingDistrictDialog.prototype, "bottomMenu", {
    get: function () {
      if (this.isDecoDistrict()) {
        return this.dialogDisp.bottomMenu_noCI;
      } else {
        return this.dialogDisp.bottomMenu;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BuildingDistrictDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  BuildingDistrictDialog.prototype.getMaxEffects = function () {
    if (this.isDecoDistrict()) {
      return BuildingDistrictDialog.MAX_EFFECTS_NO_CI;
    } else {
      return BuildingDistrictDialog.MAX_EFFECTS;
    }
  };
  BuildingDistrictDialog.prototype.updateDecoPoints = function () {
    if (this.isDecoDistrict()) {
      this.dialogDisp.mc_decoPoints.visible = true;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_decoPoints.txt_decoPoints, new p.LocalizedNumberVO(this.dialogProperties.districtBuildingVO.getDistrictDecoPoints()));
    } else {
      this.dialogDisp.mc_decoPoints.visible = false;
    }
  };
  BuildingDistrictDialog.prototype.updateGacha = function () {
    if (this.dialogDisp.btn_gacha) {
      this.dialogDisp.btn_gacha.visible = this.dialogProperties.districtBuildingVO.gachaEventID > -1;
      var e = this.getGachaEventVO();
      this.dialogDisp.btn_gacha.toolTipText = e ? e.eventBuildingNameId : "comingSoon";
      S.ButtonHelper.enableButton(this.dialogDisp.btn_gacha, !!e);
    }
  };
  BuildingDistrictDialog.prototype.getGachaEventVO = function () {
    return y.CastleModel.specialEventData.getActiveEventByEventId(this.dialogProperties.districtBuildingVO.gachaEventID);
  };
  BuildingDistrictDialog.NAME = "BuildingDistrict_Oct24";
  BuildingDistrictDialog.ITEMS_PER_ROW = 3;
  BuildingDistrictDialog.VISIBLE_ROWS = 2;
  BuildingDistrictDialog.ROW_HEIGHT = 214;
  BuildingDistrictDialog.MAX_EFFECTS = 6;
  BuildingDistrictDialog.MAX_EFFECTS_NO_CI = 10;
  BuildingDistrictDialog.ADDITIONAL_BOTTOM_HEIGHT = 72;
  return BuildingDistrictDialog;
}(L.CastleExternalDialog);
exports.BuildingDistrictDialog = R;
o.classImplementsInterfaces(R, "ICollectableRendererList");
var V = require("./143.js");
var x = require("./33.js");
var w = require("./369.js");
var B = require("./323.js");
var F = require("./357.js");
var N = require("./239.js");
var k = require("./1462.js");
var U = require("./2728.js");
var G = require("./2729.js");
var H = require("./1.js");
var j = require("./1.js");
var W = require("./41.js");
var Y = require("./36.js");