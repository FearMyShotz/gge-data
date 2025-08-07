Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./3.js");
var C = require("./6.js");
var _ = require("./930.js");
var m = require("./26.js");
var f = require("./31.js");
var O = require("./19.js");
var E = require("./44.js");
var y = require("./13.js");
var b = require("./4.js");
var D = require("./82.js");
var I = require("./47.js");
var T = require("./59.js");
var v = require("./42.js");
var S = require("./214.js");
var A = require("./235.js");
var L = require("./187.js");
var P = require("./8.js");
var M = require("./11.js");
var R = createjs.MovieClip;
var V = createjs.Point;
var x = function (e) {
  function SupportOverviewDialog() {
    var t = this;
    t.unitListDefaultY = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, SupportOverviewDialog.NAME) || this;
  }
  n.__extends(SupportOverviewDialog, e);
  SupportOverviewDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new d.TextVO(y.TextHelper.toUpperCaseLocaSafe(p.Localize.text("dialog_supportOverview_header"))));
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.scrollComponent = new D.ModernSliderScrollComponent(new I.SimpleScrollVO().initByParent(this.dialogDisp.mc_slider).addMouseWheelElements([this.dialogDisp]).addVisualElements([this.dialogDisp.mc_slider]), new T.DynamicSizeScrollStrategyVertical(true), true);
    this.dialogDisp.mc_unitList.mask = this.dialogDisp.mc_mask;
    this.unitListDefaultY = C.int(this.dialogDisp.mc_unitList.y);
    P.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_retreat], Y.ClickFeedbackButtonHover);
  };
  SupportOverviewDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.updateTextIDs();
    this.getSupportMovements();
    this.showSourceCastle();
    this.showTargetCastle();
    this.updateCrests();
    this.updateTroopInfo();
    this.fillTroopList();
    this.updateSkin();
    this.scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    b.CastleModel.specialEventData.addEventListener(m.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnd));
  };
  SupportOverviewDialog.prototype.updateTextIDs = function () {
    if (W.instanceOfClass(this.dialogProperties.mapObjectVO, "ABGAllianceTowerMapobjectVO")) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_troopsHeader, new d.TextVO(y.TextHelper.toUpperCaseLocaSafe(p.Localize.text("dialog_beyondTheHorizon_AllianceTower_supportOverview_YourTroops_header"))));
      this.dialogDisp.btn_retreat.toolTipText = "dialog_beyondTheHorizon_AllianceTower_supportOverview_YourTroopsRetreat_tooltip";
      this.dialogDisp.icon_unitCount.toolTipText = "dialog_beyondTheHorizon_AllianceTower_supportOverview_YourTroopsAtTower_tooltip";
      this.dialogDisp.icon_foodConsumption.toolTipText = "dialog_beyondTheHorizon_AllianceTower_supportOverview_YourTroopsFoodConsumption_tooltip";
      this.dialogDisp.icon_meadConsumption.toolTipText = "meadwastage";
      this.dialogDisp.icon_beefConsumption.toolTipText = "beefwastage";
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_troopsHeader, new d.TextVO(y.TextHelper.toUpperCaseLocaSafe(p.Localize.text("dialog_supportOverview_defendingTroop_header"))));
      this.dialogDisp.btn_retreat.toolTipText = "dialog_supportOverview_retreat_tooltip";
      this.dialogDisp.icon_unitCount.toolTipText = "dialog_supportOverview_troops_tooltip";
      this.dialogDisp.icon_foodConsumption.toolTipText = "dialog_supportOverview_food_tooltip";
      this.dialogDisp.icon_meadConsumption.toolTipText = "meadwastage";
      this.dialogDisp.icon_beefConsumption.toolTipText = "beefwastage";
    }
  };
  SupportOverviewDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.supportMovements = null;
    this.scrollComponent.hide();
    this.scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    this.dialogDisp.mc_unitList.y = this.unitListDefaultY;
    b.CastleModel.specialEventData.removeEventListener(m.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnd));
  };
  SupportOverviewDialog.prototype.getSupportMovements = function () {
    this.supportMovements = [];
    for (var e = 0, t = Array.from(b.CastleModel.armyData.mapMovements.values()); e < t.length; e++) {
      var i = t[e];
      if (i !== undefined && i.isMyMovement && i.targetArea.absAreaPos.equals(this.dialogProperties.mapObjectVO.absAreaPos) && W.instanceOfClass(i, "SupportDefenceMapmovementVO")) {
        this.supportMovements.push(i);
      }
    }
    this.dialogDisp.btn_retreat.visible = this.supportMovements.length > 0;
  };
  SupportOverviewDialog.prototype.showSourceCastle = function () {
    var e;
    e = this.supportMovements.length <= 0 ? b.CastleModel.userData.castleList.getMainCastleByKingdomID(0) : this.supportMovements[0].sourceArea;
    this.itxtNameSourceCastle = this.textFieldManager.registerTextField(this.dialogDisp.info_sourceCastle.txt_castleName, new d.TextVO(""));
    this.itxtNameSourceCastle.autoFitToBounds = true;
    this.itxtNameSourceCastle.verticalAlign = v.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.itxtNameSourceCastle.textContentVO.stringValue = e.areaNameString;
    this.itxtNameSourceCastle.verticalAlign = v.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    r.MovieClipHelper.clearMovieClip(this.dialogDisp.icon_sourceCastle);
    this.dialogDisp.icon_sourceCastle.addChild(H.WorldmapObjectIconHelper.drawMapObjectIcon(e, SupportOverviewDialog.CASTLE_SIZE, true, false, false, "", null));
  };
  SupportOverviewDialog.prototype.showTargetCastle = function () {
    this.itxtNameTargetCastle = this.textFieldManager.registerTextField(this.dialogDisp.info_targetCastle.txt_castleName, new d.TextVO(""));
    this.itxtNameTargetCastle.autoFitToBounds = true;
    this.itxtNameTargetCastle.verticalAlign = v.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.itxtNameTargetCastle.textContentVO.stringValue = this.dialogProperties.mapObjectVO.areaNameString;
    this.itxtNameTargetCastle.verticalAlign = v.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    r.MovieClipHelper.clearMovieClip(this.dialogDisp.icon_targetCastle);
    this.dialogDisp.icon_targetCastle.addChild(H.WorldmapObjectIconHelper.drawMapObjectIcon(this.dialogProperties.mapObjectVO, SupportOverviewDialog.CASTLE_SIZE, true, false, false, "", null));
  };
  SupportOverviewDialog.prototype.updateCrests = function () {
    G.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crest_source, b.CastleModel.userData.playerCrest, null, true);
    if (this.dialogProperties.mapObjectVO.areaType == c.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP) {
      this.dialogDisp.mc_crest_target.visible = true;
      G.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crest_target, b.CastleModel.userData.playerCrest, null, true);
      if (this._allianceCrestContainer) {
        this._allianceCrestContainer.visible = false;
      }
    } else {
      this.dialogDisp.mc_crest_target.visible = false;
      if (!this._allianceCrestContainer) {
        this._allianceCrestContainer = new R();
        this._allianceCrestContainer.x = this.dialogDisp.mc_crest_target.x;
        this._allianceCrestContainer.y = this.dialogDisp.mc_crest_target.y;
        this.dialogDisp.addChild(this._allianceCrestContainer);
      }
      this._allianceCrestContainer.visible = true;
      L.CastleAllianceCrestHelper.setCrestGraphics(this._allianceCrestContainer, this.dialogProperties.mapObjectVO.ownerInfo.allianceCrestVO, A.AllianceCrestSizeEnum.S, S.AllianceCrestEnum.DEFAULT_CREST_SIMPLE);
    }
  };
  SupportOverviewDialog.prototype.updateTroopInfo = function () {
    var e = 0;
    var t = 0;
    var i = 0;
    var n = 0;
    if (this.supportMovements != null) {
      for (var o = 0, a = this.supportMovements; o < a.length; o++) {
        var r = a[o];
        if (r !== undefined) {
          e += C.int(r.armySize);
          t += C.int(r.foodSupply);
          i += C.int(r.meadSupply);
          n += C.int(r.beefSupply);
        }
      }
    }
    if (this.dialogProperties.capacity > -1) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_unitCount, new g.LocalizedTextVO(s.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [e, this.dialogProperties.capacity]));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_unitCount, new h.LocalizedNumberVO(e));
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_foodConsumption, new h.LocalizedNumberVO(t));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_meadConsumption, new h.LocalizedNumberVO(i)).visible = i > 0;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_beefConsumption, new h.LocalizedNumberVO(n)).visible = n > 0;
    this.dialogDisp.icon_meadConsumption.visible = i > 0;
    this.dialogDisp.icon_beefConsumption.visible = n > 0;
  };
  SupportOverviewDialog.prototype.fillTroopList = function () {
    this.destroyCollectableRenderList();
    r.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_unitList);
    var e = new N.UnitInventoryDictionary();
    if (this.supportMovements != null) {
      for (var t = 0, i = this.supportMovements; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = n.inventory.getSoldiers();
          if (o != null) {
            for (var a = 0, s = o; a < s.length; a++) {
              var c = s[a];
              if (c !== undefined) {
                e.addUnit(c.wodId, c.inventoryAmount);
              }
            }
          }
        }
      }
    }
    var u = e.getSoldiers();
    u.sort(w.ClientConstSort.sortByUnitSortOrder);
    var d;
    var p;
    var h;
    var g = l.getDefinitionByName("DaimyoSupportOverviewItemMC");
    for (var _ = 0; _ < u.length; _++) {
      var m = new g();
      m.y = Math.floor(_ / SupportOverviewDialog.UNITS_PER_ROW) * (SupportOverviewDialog.UNIT_GAP + SupportOverviewDialog.UNIT_ITEM_SIZE.y);
      m.x = _ % SupportOverviewDialog.UNITS_PER_ROW * (SupportOverviewDialog.UNIT_GAP + SupportOverviewDialog.UNIT_ITEM_SIZE.x);
      this.dialogDisp.mc_unitList.addChild(m);
      d = u[_];
      (p = new f.CollectableRenderClips(m.mc_item)).addIconMc(m.mc_item.mc_icon);
      p.addInfoBtn(m.btn_info);
      h = F.CollectableHelper.createVO(B.CollectableEnum.UNITS, d.inventoryAmount, d.wodId);
      var E = new O.CollectableRenderOptions(O.CollectableRenderOptions.SET_DEFAULT, SupportOverviewDialog.UNIT_SIZE);
      E.tooltip.useAmount = false;
      U.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, p, h, E);
    }
    var y = C.int(Math.max(0, this.dialogDisp.mc_unitList.height - this.dialogDisp.mc_mask.height + SupportOverviewDialog.UNIT_GAP * 2));
    this.scrollComponent.init(0, y, SupportOverviewDialog.SCROLL_STEP, SupportOverviewDialog.SCROLL_STEP);
    this.scrollComponent.strategy.visibleValue = this.dialogDisp.mc_mask.height;
    this.scrollComponent.setVisibility(y > 0);
    this.scrollComponent.show();
  };
  SupportOverviewDialog.prototype.updateSkin = function () {
    r.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_bgSkin);
    var e = SupportOverviewDialog.DEFAUL_SKIN_NAME;
    if (E.SpecialServerHelper.isOnSpecialServer && E.SpecialServerHelper.skinName) {
      e += "_" + E.SpecialServerHelper.skinName;
    }
    var t = l.getDefinitionByName(e);
    t ||= l.getDefinitionByName(SupportOverviewDialog.DEFAUL_SKIN_NAME);
    var i = new t();
    this.dialogDisp.mc_bgSkin.addChild(i);
  };
  SupportOverviewDialog.prototype.onScroll = function () {
    this.dialogDisp.mc_unitList.y = this.unitListDefaultY - this.scrollComponent.currentValue;
  };
  SupportOverviewDialog.prototype.onEventEnd = function (e) {
    if (e.specialEventVO.eventId == u.EventConst.EVENTTYPE_SAMURAI_INVASION) {
      this.hide();
    }
  };
  SupportOverviewDialog.prototype.onClick = function (t) {
    if (P.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          if (W.instanceOfClass(this.dialogProperties.mapObjectVO, "ABGAllianceTowerMapobjectVO")) {
            k.CastleDialogHandler.getInstance().showHelper("", p.Localize.text("help_beyondTheHorizon_AllianceTower_supportOverview"));
          } else {
            k.CastleDialogHandler.getInstance().showHelper("", p.Localize.text("help_supportOverview"));
          }
          break;
        case this.dialogDisp.btn_retreat:
          k.CastleDialogHandler.getInstance().registerDefaultDialogs(j.CastleStandardYesNoDialog, new a.BasicStandardYesNoDialogProperties(p.Localize.text("dialog_moveOverview_sendHome"), p.Localize.text("dialog_retreatYesNo_copy"), this.bindFunction(this.onClickRetreat)));
      }
      e.prototype.onClick.call(this, t);
    }
  };
  SupportOverviewDialog.prototype.onClickRetreat = function (e) {
    if (this.supportMovements != null) {
      for (var t = 0, i = this.supportMovements; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          b.CastleModel.smartfoxClient.sendCommandVO(new _.C2SCancelMovementVO(n.objectId));
        }
      }
    }
    this.hide();
  };
  Object.defineProperty(SupportOverviewDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  SupportOverviewDialog.__initialize_static_members = function () {
    SupportOverviewDialog.CASTLE_SIZE = new V(80, 70);
    SupportOverviewDialog.UNIT_SIZE = new V(64, 62);
    SupportOverviewDialog.UNIT_ITEM_SIZE = new V(72, 71);
  };
  SupportOverviewDialog.NAME = "SupportOverview_N";
  SupportOverviewDialog.UNITS_PER_ROW = 6;
  SupportOverviewDialog.UNIT_GAP = 20;
  SupportOverviewDialog.SCROLL_STEP = 46;
  SupportOverviewDialog.DEFAUL_SKIN_NAME = "SupportOverviewBG";
  return SupportOverviewDialog;
}(M.CastleExternalDialog);
exports.SupportOverviewDialog = x;
o.classImplementsInterfaces(x, "ICollectableRendererList");
var w = require("./75.js");
var B = require("./12.js");
var F = require("./45.js");
var N = require("./156.js");
var k = require("./9.js");
var U = require("./25.js");
var G = require("./61.js");
var H = require("./70.js");
var j = require("./151.js");
x.__initialize_static_members();
var W = require("./1.js");
var Y = require("./20.js");