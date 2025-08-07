Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./296.js");
var c = require("./2449.js");
var u = require("./21.js");
var d = require("./102.js");
var p = require("./355.js");
var h = require("./13.js");
var g = require("./4.js");
var C = require("./335.js");
var _ = require("./27.js");
var m = require("./24.js");
var f = require("./20.js");
var O = require("./95.js");
var E = require("./47.js");
var y = require("./59.js");
var b = require("./42.js");
var D = require("./215.js");
var I = require("./235.js");
var T = require("./187.js");
var v = require("./8.js");
var S = require("./11.js");
var A = require("./2450.js");
var L = require("./2451.js");
var P = require("./2452.js");
var M = createjs.Point;
var R = function (e) {
  function AllianceCrestCreationDialog() {
    var t = this;
    t.selectedColorIndex = 0;
    t.selectionLayoutItems = [];
    t.selectionColorItems = [];
    t.defaultChestPos = new M(119, 6);
    t.defaultFallbackPos = new M(240, 128);
    t.freeChestPos = new M(253, 6);
    t.freeFallbackPos = new M(375, 128);
    t.onShowRunningTemporaryLayouts = 0;
    t.currentColorIDs = [];
    t._listStartY = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, AllianceCrestCreationDialog.NAME) || this;
  }
  n.__extends(AllianceCrestCreationDialog, e);
  AllianceCrestCreationDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this._listStartY = this.dialogDisp.mc_selection_layout.mc_list_big.mc_items.y;
  };
  AllianceCrestCreationDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    g.CastleModel.timerData.addEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    g.CastleModel.allianceData.addEventListener(d.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onMyAllianceUpdate));
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_reset, this.dialogDisp.btn_random, this.dialogDisp.btn_layout, this.dialogDisp.btn_color0, this.dialogDisp.btn_color1, this.dialogDisp.btn_color2]);
    v.ButtonHelper.initButton(this.dialogDisp.btn_event, 1, f.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId("dialog_CoA_title"))).verticalAlign = b.CastleGGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_event.txt_copy, new r.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId("panel_action_event")));
    this.dialogDisp.mc_copy1.visible = this.dialogDisp.mc_copy2.visible = false;
    this.dialogDisp.mc_freeCrest.visible = false;
    this.currentCrest = new C.AllianceCrestVO();
    this.currentCrest.cloneFromVO(this.dialogProperties.allianceVO.allianceCrestVO);
    this.currentColorIDs = this.currentCrest.colorIDs.slice(0);
    this.dialogDisp.btn_reset.toolTipText = "dialog_CoA_tooltip_reset";
    this.dialogDisp.btn_random.toolTipText = "dialog_CoA_tooltip_randomize";
    this.resetSelectionButtonStates();
    this.dialogDisp.btn_layout.gotoAndStop(2);
    this.openLayoutSelection();
    this.updateDialog();
    this.onShowRunningTemporaryLayouts = this.currentRunningTemporaryLayouts;
    this.onShowCrest = new C.AllianceCrestVO();
    this.onShowCrest.cloneFromVO(this.dialogProperties.allianceVO.allianceCrestVO);
  };
  AllianceCrestCreationDialog.prototype.updateDialog = function () {
    this.dialogDisp.mc_copy2.visible = this.currentCrest.layoutVO.maxDuration > 0 && this.currentCrest.layoutVO.remainingSeconds <= 0;
    this.dialogDisp.mc_copy1.visible = this.currentCrest.layoutVO.maxDuration > 0 && this.currentCrest.layoutVO.remainingSeconds > 0;
    var e = !this.dialogDisp.mc_copy1.visible && !this.dialogDisp.mc_copy2.visible;
    this.dialogDisp.mc_crest.x = e ? this.freeChestPos.x : this.defaultChestPos.x;
    this.dialogDisp.mc_crest.y = e ? this.freeChestPos.y : this.defaultChestPos.y;
    this.dialogDisp.mc_freeCrest.x = e ? this.freeFallbackPos.x : this.defaultFallbackPos.x;
    this.dialogDisp.mc_freeCrest.y = e ? this.freeFallbackPos.y : this.defaultFallbackPos.y;
    var t = new r.LocalizedTextVO("allianceCoat_Layout_name_" + this.currentCrest.layoutVO.allianceCoatLayoutID);
    var i = "";
    if (this.currentCrest.layoutVO.effects.length > 0) {
      for (var n = 0, a = this.currentCrest.layoutVO.effects; n < a.length; n++) {
        var l = a[n];
        if (i.length > 0) {
          i += "\n";
        }
        i += r.Localize.text("equip_effect_description_" + l.effect.name, l.effectValue.textReplacements);
      }
    }
    var c = r.Localize.text("allianceCoat_Layout_desc", [i]);
    c += "\n" + r.Localize.text("dialog_CoALayoutDuration_desc", [_.CastleTimeStringHelper.getFullTimeString(this.currentCrest.layoutVO.maxDuration)]);
    if (this.currentCrest.layoutVO.eventID > 0 && this.currentCrest.layoutVO.remainingSeconds <= 0) {
      c += "\n" + r.Localize.text("dialog_CoALayoutObtainable_desc", [r.Localize.text("event_title_" + this.currentCrest.layoutVO.eventID)]);
    }
    var u = new r.TextVO(c);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_copy1.mc_header.txt_copy, t).verticalAlign = b.CastleGGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_copy1.txt_copy, u).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_copy2.mc_header.txt_copy, t).verticalAlign = b.CastleGGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_copy2.txt_copy, u).autoFitToBounds = true;
    if (this.currentCrest.layoutVO.eventID > 0) {
      o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_copy1.mc_header.mc_icon);
      o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_copy2.mc_header.mc_icon);
      if (this.dialogDisp.mc_copy1.visible) {
        this.dialogDisp.mc_copy1.mc_header.mc_icon.addChild(p.EventIconHelper.createEventIconByEventID(this.currentCrest.layoutVO.eventID, new M(35, 35)));
      }
      if (this.dialogDisp.mc_copy2.visible) {
        this.dialogDisp.mc_copy2.mc_header.mc_icon.addChild(p.EventIconHelper.createEventIconByEventID(this.currentCrest.layoutVO.eventID, new M(35, 35)));
      }
    }
    this.dialogDisp.btn_color1.visible = this.currentCrest.layoutVO.noofColors > 1;
    this.dialogDisp.btn_color2.visible = this.currentCrest.layoutVO.noofColors > 2;
    for (var d = 0, h = this.selectionLayoutItems; d < h.length; d++) {
      var C = h[d];
      C.setSelected(C.layoutID == this.currentCrest.layoutID);
      C.activated = this.dialogProperties.allianceVO.allianceCrestVO.layoutID == C.layoutID;
    }
    this.colorizeMC(this.dialogDisp.btn_color0.mc_icon.mc_color, this.currentCrest.colors[0]);
    this.colorizeMC(this.dialogDisp.btn_color1.mc_icon.mc_color, this.currentCrest.colors[1]);
    this.colorizeMC(this.dialogDisp.btn_color2.mc_icon.mc_color, this.currentCrest.colors[2]);
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.btn_layout.mc_icon_normal);
    this.dialogDisp.btn_layout.mc_icon_premium.visible = this.currentCrest.layoutVO.maxDuration > 0;
    this.dialogDisp.btn_layout.mc_icon_normal.visible = this.currentCrest.layoutVO.maxDuration <= 0;
    var f = "Collectable_AllianceLayout_" + this.currentCrest.layoutVO.allianceCoatLayoutID;
    var O = new m.CastleGoodgameExternalClip(f, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(f));
    O.doWhenLoaded(this.bindFunction(this.onLayoutDisplayLoaded));
    this.dialogDisp.btn_layout.mc_icon_normal.addChild(O);
    T.CastleAllianceCrestHelper.setCrestGraphics(this.dialogDisp.mc_crest, this.currentCrest, I.AllianceCrestSizeEnum.CREST_CEATION_BIG, D.AllianceCrestEnum.DEFAULT_CREST);
    this.dialogDisp.mc_freeCrest.visible = !!this.dialogProperties.allianceVO.fallbackCrestVO;
    this.dialogDisp.mc_freeCrest.mouseChildren = false;
    this.dialogDisp.mc_freeCrest.toolTipText = "dialog_CoA_tooltip_autoEquip";
    if (this.dialogDisp.mc_freeCrest.visible) {
      T.CastleAllianceCrestHelper.setCrestGraphics(this.dialogDisp.mc_freeCrest.mc_crest, this.dialogProperties.allianceVO.fallbackCrestVO, I.AllianceCrestSizeEnum.CREST_CEATION_SMALL, D.AllianceCrestEnum.DEFAULT_CREST_SIMPLE);
    }
    var E;
    var y = this.currentCrest.layoutVO.remainingSeconds > 0 || this.currentCrest.layoutVO.maxDuration <= 0;
    var S = g.CastleModel.allianceData.hasRight(g.CastleModel.userData.allianceRank, s.AllianceConst.RIGHT_EMBLEM);
    var A = this.currentCrest.isClonedAEVOChanged(this.dialogProperties.allianceVO.allianceCrestVO);
    var L = y && S && A;
    v.ButtonHelper.enableButton(this.dialogDisp.btn_ok, L);
    v.ButtonHelper.enableButton(this.dialogDisp.btn_reset, A);
    this.dialogDisp.btn_ok.toolTipText = "dialog_CoA_tooltip_Save";
    if (!y) {
      this.dialogDisp.btn_ok.toolTipText = "dialog_CoA_tooltip_LayoutLocked";
    }
    if (!A) {
      this.dialogDisp.btn_ok.toolTipText = "dialog_CoA_tooltip_NoChanges";
    }
    if (!S) {
      this.dialogDisp.btn_ok.toolTipText = "dialog_CoA_tooltip_SaveDenied";
    }
    this.onTimer();
    if (this.currentCrest.layoutVO.eventID > 0) {
      E = g.CastleModel.specialEventData.getActiveEventByEventId(this.currentCrest.layoutVO.eventID);
    }
    this.dialogDisp.btn_event.visible = this.currentCrest.layoutVO.remainingSeconds <= 0 && !!E;
  };
  AllianceCrestCreationDialog.prototype.onLayoutDisplayLoaded = function (e) {
    o.MovieClipHelper.scaleDownToFit(e, 21, 22);
  };
  AllianceCrestCreationDialog.prototype.onTimer = function (e = null) {
    if (this.onShowRunningTemporaryLayouts != this.currentRunningTemporaryLayouts) {
      o.BasicModel.smartfoxClient.sendCommandVO(new l.C2SGetAllianceInfoVO(this.dialogProperties.allianceVO.allianceId));
      this.onShowRunningTemporaryLayouts = this.currentRunningTemporaryLayouts;
      return;
    }
    if (!!this.currentCrest.layoutVO && !(this.currentCrest.layoutVO.remainingSeconds <= 0)) {
      this._txt_Timer ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_copy1.txt_time, new r.TextVO(""));
      this._txt_Timer.text = _.CastleTimeStringHelper.getShortTimeString(this.currentCrest.layoutVO.remainingSeconds);
    }
  };
  AllianceCrestCreationDialog.prototype.doSave = function () {
    g.CastleModel.smartfoxClient.sendCommandVO(new c.C2SSetAllianceEmblemVO(this.currentCrest.getParamObject()));
    this.hide();
  };
  AllianceCrestCreationDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    g.CastleModel.timerData.removeEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    g.CastleModel.allianceData.removeEventListener(d.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onMyAllianceUpdate));
    for (var i = 0, n = this.selectionLayoutItems; i < n.length; i++) {
      n[i].destroy();
    }
    for (var o = 0, a = this.selectionColorItems; o < a.length; o++) {
      a[o].destroy();
    }
    this.selectionColorItems = [];
    this.selectionLayoutItems = [];
    if (this._scrollComponent) {
      this._scrollComponent.hide();
      this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
      this._scrollComponent.destroy();
      this._scrollComponent = null;
    }
  };
  AllianceCrestCreationDialog.prototype.onClick = function (e) {
    if (v.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_reset:
          this.currentCrest.cloneFromVO(this.dialogProperties.allianceVO.allianceCrestVO);
          this.updateDialog();
          break;
        case this.dialogDisp.btn_random:
          this.currentCrest.randomize();
          this.currentColorIDs = this.currentCrest.colorIDs.slice(0);
          this.updateDialog();
          break;
        case this.dialogDisp.btn_ok:
          this.doSave();
          break;
        case this.dialogDisp.btn_layout:
          this.resetSelectionButtonStates();
          this.dialogDisp.btn_layout.gotoAndStop(2);
          this.openLayoutSelection();
          break;
        case this.dialogDisp.btn_color0:
          this.resetSelectionButtonStates();
          this.dialogDisp.btn_color0.gotoAndStop(2);
          this.openColorSelection(0);
          break;
        case this.dialogDisp.btn_color1:
          this.resetSelectionButtonStates();
          this.dialogDisp.btn_color1.gotoAndStop(2);
          this.openColorSelection(1);
          break;
        case this.dialogDisp.btn_color2:
          this.resetSelectionButtonStates();
          this.dialogDisp.btn_color2.gotoAndStop(2);
          this.openColorSelection(2);
          break;
        case this.dialogDisp.btn_event:
          var t = g.CastleModel.specialEventData.getActiveEventByEventId(this.currentCrest.layoutVO.eventID);
          if (t) {
            t.openDialog();
            this.hide();
          }
      }
    }
  };
  AllianceCrestCreationDialog.prototype.resetSelectionButtonStates = function () {
    this.dialogDisp.btn_layout.gotoAndStop(1);
    this.dialogDisp.btn_color0.gotoAndStop(1);
    this.dialogDisp.btn_color1.gotoAndStop(1);
    this.dialogDisp.btn_color2.gotoAndStop(1);
  };
  AllianceCrestCreationDialog.prototype.openLayoutSelection = function () {
    this.dialogDisp.mc_selection_layout.visible = true;
    this.dialogDisp.mc_selection_color.visible = false;
    if (!(this.selectionLayoutItems.length > 0)) {
      var e;
      var t = this.dialogDisp.mc_selection_layout;
      for (var i = g.CastleModel.allianceCrestData.getFreeLayouts(), n = 0; n < i.length; n++) {
        var o = i[n];
        (e = new L.AllianceCrestCreation_FreeLayout_ItemVE(o)).addOnClick(this.bindFunction(this.onLayoutItemClick));
        this.selectionLayoutItems.push(e);
        t.mc_list_small.addChild(e);
        e.x = n % AllianceCrestCreationDialog.MAX_SMALL_LAYOUTS_ICONS_IN_ROW * 26;
        e.y = Math.floor(n / AllianceCrestCreationDialog.MAX_SMALL_LAYOUTS_ICONS_IN_ROW) * 26;
      }
      var a = g.CastleModel.allianceCrestData.getPremiumLayouts();
      for (n = 0; n < a.length; n++) {
        o = a[n];
        (e = new P.AllianceCrestCreation_PremiumLayout_ItemVE(o)).addOnClick(this.bindFunction(this.onLayoutItemClick));
        this.selectionLayoutItems.push(e);
        t.mc_list_big.mc_items.addChild(e);
        e.x = n % AllianceCrestCreationDialog.MAX_BIG_LAYOUTS_ICONS_IN_ROW * 52;
        e.y = Math.floor(n / AllianceCrestCreationDialog.MAX_BIG_LAYOUTS_ICONS_IN_ROW) * 50;
      }
      this._scrollComponent = new O.SimpleScrollComponent(new E.SimpleScrollVO().initByParent(t.mc_list_big.mc_slider).addMouseWheelElements([t]), new y.DynamicSizeScrollStrategyVertical(false, t.mc_list_big.mc_mask.height, false));
      var s = Math.ceil(a.length / AllianceCrestCreationDialog.MAX_BIG_LAYOUTS_ICONS_IN_ROW) * 50;
      this._scrollComponent.init(0, s - t.mc_list_big.mc_mask.height, s / 100, s / 100);
      this._scrollComponent.scrollToValue(0);
      this._scrollComponent.setVisibility(s > t.mc_list_big.mc_mask.height);
      this._scrollComponent.enableComponent(s > t.mc_list_big.mc_mask.height);
      this._scrollComponent.show();
      this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    }
  };
  AllianceCrestCreationDialog.prototype.onScroll = function () {
    this.dialogDisp.mc_selection_layout.mc_list_big.mc_items.y = this._listStartY - this._scrollComponent.currentValue;
  };
  AllianceCrestCreationDialog.prototype.openColorSelection = function (e) {
    this.dialogDisp.mc_selection_color.visible = true;
    this.dialogDisp.mc_selection_layout.visible = false;
    this.dialogDisp.mc_selection_color.mc_colorItems.visible = true;
    this.selectedColorIndex = e;
    this.dialogDisp.mc_selection_color.y = this.dialogDisp.btn_color0.height * e - 150;
    if (this.selectionColorItems.length > 0) {
      this.updateSelectionBG();
    } else {
      var t = this.dialogDisp.mc_selection_color.mc_colorItems;
      o.MovieClipHelper.clearMovieClip(t);
      for (var i = g.CastleModel.allianceCrestData.getAllColors(), n = 0; n < i.length; n++) {
        var a = i[n];
        var s = new A.AllianceCrestCreation_Color_ItemVE(a);
        t.addChild(s);
        s.x = n % AllianceCrestCreationDialog.MAX_COLOR_ICONS_IN_ROW * 23;
        s.y = Math.floor(n / AllianceCrestCreationDialog.MAX_COLOR_ICONS_IN_ROW) * 24;
        s.addOnClick(this.bindFunction(this.onColorItemClick));
        this.selectionColorItems.push(s);
      }
      this.updateSelectionBG();
    }
  };
  AllianceCrestCreationDialog.prototype.onLayoutItemClick = function (e) {
    this.currentCrest.resetColors();
    for (var t = 0; t < e.noofColors; t++) {
      if (this.currentColorIDs[t]) {
        this.currentCrest.setColorAtIndex(this.currentColorIDs[t], t);
      } else {
        this.currentCrest.setColorAtIndex(g.CastleModel.allianceCrestData.getRandomColor().allianceCoatColorID, t);
        this.currentColorIDs[t] = this.currentCrest.colors[t].allianceCoatColorID;
      }
    }
    this.currentCrest.layoutID = e.allianceCoatLayoutID;
    this.updateDialog();
  };
  AllianceCrestCreationDialog.prototype.onColorItemClick = function (e) {
    this.currentCrest.setColorAtIndex(e.allianceCoatColorID, this.selectedColorIndex);
    this.currentColorIDs[this.selectedColorIndex] = e.allianceCoatColorID;
    this.updateDialog();
  };
  AllianceCrestCreationDialog.prototype.updateSelectionBG = function () {
    if (this.dialogDisp.mc_selection_color.mc_colorItems.visible) {
      this.dialogDisp.mc_selection_color.mc_bg.height = this.dialogDisp.mc_selection_color.mc_colorItems.height + 20;
    }
  };
  AllianceCrestCreationDialog.prototype.colorizeMC = function (e, t) {
    if (t) {
      var i = new createjs.ColorTransform();
      i.color = t.color;
      e.useFilters([new createjs.ColorFilter(i.redMultiplier, i.greenMultiplier, i.blueMultiplier, i.alphaMultiplier, i.redOffset, i.greenOffset, i.blueOffset, i.alphaOffset)]);
    }
  };
  Object.defineProperty(AllianceCrestCreationDialog.prototype, "currentRunningTemporaryLayouts", {
    get: function () {
      return g.CastleModel.allianceData.myAllianceVO.numberOfActiveTemporaryLayouts();
    },
    enumerable: true,
    configurable: true
  });
  AllianceCrestCreationDialog.prototype.onMyAllianceUpdate = function (e) {
    if (g.CastleModel.allianceData.myAllianceVO) {
      var t = !this.currentCrest.isClonedAEVOChanged(this.onShowCrest);
      this.dialogProperties.allianceVO = g.CastleModel.allianceData.myAllianceVO;
      if (t) {
        this.currentCrest.cloneFromVO(g.CastleModel.allianceData.myAllianceVO.allianceCrestVO);
        this.onShowCrest.cloneFromVO(this.currentCrest);
      }
      this.updateDialog();
    } else {
      this.hide();
    }
  };
  Object.defineProperty(AllianceCrestCreationDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AllianceCrestCreationDialog.__initialize_static_members = function () {
    AllianceCrestCreationDialog.NAME = "AllianceCrestCreation1";
  };
  AllianceCrestCreationDialog.MAX_COLOR_ICONS_IN_ROW = 3;
  AllianceCrestCreationDialog.MAX_SMALL_LAYOUTS_ICONS_IN_ROW = 4;
  AllianceCrestCreationDialog.MAX_BIG_LAYOUTS_ICONS_IN_ROW = 2;
  return AllianceCrestCreationDialog;
}(S.CastleExternalDialog);
exports.AllianceCrestCreationDialog = R;
a.classImplementsInterfaces(R, "ICollectableRendererList");
R.__initialize_static_members();