Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./6.js");
var g = require("./266.js");
var C = require("./1408.js");
var _ = require("./107.js");
var m = require("./26.js");
var f = require("./758.js");
var O = require("./44.js");
var E = require("./13.js");
var y = require("./4.js");
var b = require("./33.js");
var D = require("./1409.js");
var I = require("./36.js");
var T = require("./20.js");
var v = require("./1410.js");
var S = require("./8.js");
var A = require("./185.js");
var L = require("./11.js");
var P = createjs.MouseEvent;
var M = createjs.Point;
var R = function (e) {
  function SkippableCooldownDialog() {
    return e.call(this, SkippableCooldownDialog.NAME) || this;
  }
  n.__extends(SkippableCooldownDialog, e);
  SkippableCooldownDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    S.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_fullSkip, this.dialogDisp.btn_minuteSkip], T.ClickFeedbackButtonHover);
    this.initAutoskip();
  };
  SkippableCooldownDialog.prototype.showLoaded = function (t = null) {
    this.itxt_description = this.textFieldManager.registerTextField(this.dialogDisp.text_description, new d.LocalizedTextVO(""));
    this.itxt_name = this.textFieldManager.registerTextField(this.dialogDisp.text_name, new p.TextVO(""));
    this.itxt_name.autoFitToBounds = true;
    this.dialogDisp.btn_minuteSkip.toolTipText = "timeSkipButton_tooltip";
    e.prototype.showLoaded.call(this, t);
    this.cooldown_component = new v.CastleCooldownComponent(this.dialogDisp.cooldown_component, this.bindFunction(this.onTimeUp), this.dialogProperties.mapObjectVO.remainingCooldownTimeInSeconds, this.dialogProperties.mapObjectVO.totalCooldownTime, this.getHeaderCooldownTextID());
    this.dialogDisp.btn_fullSkip.addEventListener(P.MOUSE_OVER, this.bindFunction(this.onMouseOverSkipButton));
    this.controller.addEventListener(f.SkipCooldownEvent.UPDATE, this.bindFunction(this.onMapobjectVOUpdated));
    y.CastleModel.specialEventData.addEventListener(m.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    this.cooldown_component.addEventListenerOnShow();
    this.updateMapobject();
    this.updateTime();
    S.ButtonHelper.delayEnableButton(this.dialogDisp.btn_fullSkip, true);
    this.showAutoskipPreview();
  };
  SkippableCooldownDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    this.dialogDisp.btn_fullSkip.removeEventListener(P.MOUSE_OVER, this.bindFunction(this.onMouseOverSkipButton));
    this.controller.removeEventListener(f.SkipCooldownEvent.UPDATE, this.bindFunction(this.onMapobjectVOUpdated));
    y.CastleModel.specialEventData.removeEventListener(m.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    this.cooldown_component.removeEventListenerOnHide();
  };
  SkippableCooldownDialog.prototype.onEventRemoved = function (e) {
    if (!this.dialogProperties.mapObjectVO.isVisibleOnMap) {
      this.hide();
    }
  };
  SkippableCooldownDialog.prototype.onMapobjectVOUpdated = function (e) {
    var t = this.dialogProperties.mapObjectVO.ownerInfo;
    if (e.mapObjectVO != null) {
      this.dialogProperties.mapObjectVO = e.mapObjectVO;
    }
    this.dialogProperties.mapObjectVO.ownerInfo = t;
    this.updateMapobject();
    this.updateTime();
  };
  SkippableCooldownDialog.prototype.onMouseOverSkipButton = function (e) {
    this.dialogDisp.btn_fullSkip.toolTipText = {
      t: "dungeonCooldown_skip_tooltip",
      p: [this.dialogProperties.mapObjectVO.skipCooldownCostC2 >> 0]
    };
  };
  SkippableCooldownDialog.prototype.onClick = function (t) {
    if (S.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_fullSkip:
          this.skipWithRubies();
          break;
        case this.dialogDisp.btn_minuteSkip:
          this.minuteSkip();
      }
    }
  };
  SkippableCooldownDialog.prototype.minuteSkip = function () {
    x.CastleDialogHandler.getInstance().registerDefaultDialogs(F.CastleMinuteSkipDialog, new N.SkippableCooldownMinuteSkipProperties(this.dialogProperties.mapObjectVO, this.useSubscription));
  };
  SkippableCooldownDialog.prototype.updateTime = function () {
    if (this.cooldown_component) {
      if (k.instanceOfClass(this.dialogProperties.mapObjectVO, "TreasureDungeonMapObjectVO")) {
        this.cooldown_component.updateTime(this.dialogProperties.mapObjectVO.tMapNode.coolDownInRemainingSeconds);
      } else {
        this.cooldown_component.updateTime(this.dialogProperties.mapObjectVO.remainingCooldownTimeInSeconds);
      }
    }
  };
  SkippableCooldownDialog.prototype.onTimeUp = function () {
    this.hide();
    this.dialogProperties.callCooldownFinishedFunction();
  };
  SkippableCooldownDialog.prototype.updateMapobject = function () {
    this.updateMapobjectText();
    this.updateMapobjectCrest();
    this.updateMapobjectIcon();
    A.SubscriptionHelper.showSubscriptionStarToTextField(this.cooldown_component.itxt_cooldown_time, this.useSubscription, 20, new M(-8, 0));
  };
  Object.defineProperty(SkippableCooldownDialog.prototype, "useSubscription", {
    get: function () {
      var e = false;
      if (k.instanceOfClass(this.dialogProperties.mapObjectVO, "NomadCampMapObjectVO") || k.instanceOfClass(this.dialogProperties.mapObjectVO, "SamuraiCampMapObjectVO") || k.instanceOfClass(this.dialogProperties.mapObjectVO, "NomadKhanCampMapObjectVO")) {
        e = y.CastleModel.subscriptionData.isEffectTypeActive(b.EffectTypeEnum.EFFECT_TYPE_COOLDOWN_REDUCTION);
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  SkippableCooldownDialog.prototype.updateMapobjectText = function () {
    this.itxt_name.textContentVO.stringValue = E.TextHelper.toUpperCaseLocaSafe(this.dialogProperties.mapObjectVO.areaNameString);
    this.itxt_description.textContentVO.textId = this.getMapobjectTextID();
  };
  SkippableCooldownDialog.prototype.getHeaderCooldownTextID = function () {
    if (k.instanceOfClass(this.dialogProperties.mapObjectVO, "DaimyoTownshipMapObjectVO")) {
      return "dialog_cooldownSkip_township_header";
    } else {
      return "Coldown_timer_header";
    }
  };
  SkippableCooldownDialog.prototype.getMapobjectTextID = function () {
    if (k.instanceOfClass(this.dialogProperties.mapObjectVO, "TreasureDungeonMapObjectVO")) {
      if (this.dialogProperties.mapObjectVO.tMapNode.isEndNode) {
        return "dungeonSeaQueen_FinalCastle_Cooldown_skip_copy";
      } else if (this.dialogProperties.mapObjectVO.tMapNode.isBridgeDungeon) {
        return "dungeonSeaQueen_fortressCastle_Cooldown_skip_copy";
      } else {
        return "dungeonSeaQueen_towerCastle_Cooldown_skip_copy";
      }
    }
    if (k.instanceOfClass(this.dialogProperties.mapObjectVO, "ChargeCampMapobjectVO")) {
      return "dungeonNormal_Cooldown_skip_tempServer";
    }
    if (k.instanceOfClass(this.dialogProperties.mapObjectVO, "DungeonMapobjectVO")) {
      switch (this.dialogProperties.mapObjectVO.kingdomID) {
        case l.WorldClassic.KINGDOM_ID:
          return O.SpecialServerHelper.checkTextIDForSkinText("dungeonNormal_Cooldown_skip_copy");
        case c.WorldIce.KINGDOM_ID:
          return "dungeonIcecream_Cooldown_skip_copy";
        case r.WorldDessert.KINGDOM_ID:
          return "dungeonDessert_Cooldown_skip_copy";
        case s.WorldVolcano.KINGDOM_ID:
          return "dungeonVolcano_Cooldown_skip_copy";
      }
    } else {
      if (k.instanceOfClass(this.dialogProperties.mapObjectVO, "NomadCampMapObjectVO")) {
        return "dialog_nomadCamp_cooldown";
      }
      if (k.instanceOfClass(this.dialogProperties.mapObjectVO, "NomadKhanCampMapObjectVO")) {
        return "dialog_khanCamp_cooldown";
      }
      if (k.instanceOfClass(this.dialogProperties.mapObjectVO, "SamuraiCampMapObjectVO")) {
        return "dialog_samuraiCamp_cooldown";
      }
      if (k.instanceOfClass(this.dialogProperties.mapObjectVO, "DaimyoCastleMapObjectVO")) {
        return "dialog_cooldownSkip_daimyo_desc";
      }
      if (k.instanceOfClass(this.dialogProperties.mapObjectVO, "DaimyoTownshipMapObjectVO")) {
        return "dialog_cooldownSkip_township_desc";
      }
    }
    return "";
  };
  SkippableCooldownDialog.prototype.updateMapobjectCrest = function () {
    var e = this.dialogProperties.mapObjectVO.ownerInfo.crest;
    w.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crest_placeholder, e, null, true);
  };
  SkippableCooldownDialog.prototype.updateMapobjectIcon = function () {
    var e;
    e = k.instanceOfClass(this.dialogProperties.mapObjectVO, "TreasureDungeonMapObjectVO") ? B.WorldmapObjectIconHelper.drawMapObjectIcon(this.dialogProperties.mapObjectVO, new M(70, 60), true, false, false, "", this.dialogProperties.mapObjectVO.tMapNode) : B.WorldmapObjectIconHelper.drawMapObjectIcon(this.dialogProperties.mapObjectVO, new M(70, 60), true, false, false);
    this.dialogDisp.mc_dungeon_placeholder.removeChildren();
    this.dialogDisp.mc_dungeon_placeholder.addChild(e);
    this.dialogDisp.mc_dungeon_placeholder.mouseChildren = false;
    this.dialogDisp.mc_dungeon_placeholder.toolTipText = this.getMapobjectTooltipString();
  };
  SkippableCooldownDialog.prototype.getMapobjectTooltipString = function () {
    var e = this.dialogProperties.mapObjectVO.areaNameString;
    if (k.instanceOfClass(this.dialogProperties.mapObjectVO, "DungeonMapobjectVO")) {
      var t = this.dialogProperties.mapObjectVO;
      e += "\n" + V.DungeonMapobject.textLine2(t).compose() + "\n" + V.DungeonMapobject.textLine3(t).compose();
    } else if (D.instanceOf_IDungeonMapobjectVO(this.dialogProperties.mapObjectVO)) {
      var i = this.dialogProperties.mapObjectVO;
      e += " " + u.Localize.text(o.GenericTextIds.VALUE_ASSIGN_COLON, [u.Localize.text("level"), i.dungeonLevel]);
    }
    return e;
  };
  SkippableCooldownDialog.prototype.skipWithRubies = function () {
    S.ButtonHelper.enableButton(this.dialogDisp.btn_fullSkip, false);
    var e;
    var t = this.dialogProperties.mapObjectVO.absAreaPos;
    var i = h.int(this.dialogProperties.mapObjectVO.kingdomID);
    e = k.instanceOfClass(this.dialogProperties.mapObjectVO, "TreasureDungeonMapObjectVO") ? new C.C2SSkipDungeonCooldownVO(t, i, this.dialogProperties.mapObjectVO.tMapNode) : new C.C2SSkipDungeonCooldownVO(t, i, null);
    y.CastleModel.smartfoxClient.sendCommandVO(e);
  };
  Object.defineProperty(SkippableCooldownDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  SkippableCooldownDialog.prototype.initAutoskip = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.mc_autoskip_preview.txt_preview, new d.LocalizedTextVO("dialog_cooldownSkip_unlockPreview_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_autoskip_preview.mc_tooltip.txt_title, new p.TextVO(E.TextHelper.toUpperCaseLocaSafeTextId("dialog_travelPlanning_autoCooldownSkip_preview_help_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_autoskip_preview.mc_tooltip.txt_description, new d.LocalizedTextVO("dialog_travelPlanning_autoCooldownSkip_preview_help_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_autoskip_preview.btn_buy.txt_label, new p.TextVO(E.TextHelper.toUpperCaseLocaSafeTextId("toTheShop")));
    this.dialogDisp.mc_autoskip_preview.icon_info.mouseChildren = false;
    this.dialogDisp.mc_autoskip_preview.mc_tooltip.visible = false;
    S.ButtonHelper.initButtons([this.dialogDisp.mc_autoskip_preview.btn_buy], I.ClickFeedbackButton);
    g.registerUIComponentToCXF(this.dialogDisp.mc_autoskip_preview.btn_buy, "btn_webshop", {
      page: "subscriptions",
      route: "/offer/3",
      sourceId: _.CXFSourceTrackingConstants.CXF_SOURCE_TRAVEL_PLANNING_DIALOG_AUTOSKIP_PREVIEW
    });
  };
  SkippableCooldownDialog.prototype.showAutoskipPreview = function () {
    var e = y.CastleModel.subscriptionData.isAutoSkipTarget(this.dialogProperties.mapObjectVO);
    var t = y.CastleModel.subscriptionData.isAutoSkipActiveForArea(this.dialogProperties.mapObjectVO);
    this.dialogDisp.mc_autoskip_preview.visible = e && !t;
  };
  SkippableCooldownDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    switch (t.target) {
      case this.dialogDisp.mc_autoskip_preview.icon_info:
        this.dialogDisp.mc_autoskip_preview.mc_tooltip.visible = true;
    }
  };
  SkippableCooldownDialog.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    switch (t.target) {
      case this.dialogDisp.mc_autoskip_preview.icon_info:
        this.dialogDisp.mc_autoskip_preview.mc_tooltip.visible = false;
    }
  };
  SkippableCooldownDialog.NAME = "DungeonCooldownEx_JUN23";
  return SkippableCooldownDialog;
}(L.CastleExternalDialog);
exports.SkippableCooldownDialog = R;
var V = require("./887.js");
var x = require("./9.js");
var w = require("./61.js");
var B = require("./70.js");
var F = require("./208.js");
var N = require("./2568.js");
a.classImplementsInterfaces(R, "ICollectableRendererList");
var k = require("./1.js");