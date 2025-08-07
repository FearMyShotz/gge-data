Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./16.js");
var h = require("./1993.js");
var g = require("./1166.js");
var C = require("./4.js");
var _ = require("./127.js");
var m = require("./213.js");
var f = require("./24.js");
var O = createjs.Point;
var E = function () {
  function CastleEquipmentToolTip() {
    this._showCountdown = false;
    this._forceHideTimer = false;
    CastleEquipmentToolTip._equipToolTipClip = new f.CastleGoodgameExternalClip("Equipment_ToolTip_H", n.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_ToolTip_H"), null, 24, true);
  }
  Object.defineProperty(CastleEquipmentToolTip.prototype, "equipToolTip", {
    get: function () {
      return CastleEquipmentToolTip._equipToolTipClip.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentToolTip.prototype.initToolTip = function (e, t, i = null, n = true, o = false) {
    if (CastleEquipmentToolTip._equipToolTipClip.isLoaded && (this._showCountdown = n, this._forceHideTimer = o, this._currentEquippableVO = e, this._currentLordVO = i, this._currentTarget = t, e)) {
      this.setItemInfo(this.equipToolTip.itemInfo);
      var a = this.getSecondSetItem();
      if (this._currentEquippableVO.slotType == _.BasicEquippableVO.SLOT_TYPE_SKIN) {
        this.setSetItemInfo(this.equipToolTip.setInfo_1, this._currentEquippableVO.setID > 0 ? this._currentEquippableVO : a);
        this.setSetItemInfo(this.equipToolTip.setInfo_2, this._currentEquippableVO.setID > 0 && a ? a : null);
      } else {
        this.setSetItemInfo(this.equipToolTip.setInfo_1, this._currentEquippableVO.setID > 0 ? this._currentEquippableVO : a);
        this.setSetItemInfo(this.equipToolTip.setInfo_2, this._currentEquippableVO.setID > 0 ? a : null);
      }
      var s = d.int(this.equipToolTip.bg.height);
      s += d.int(Math.max(this.equipToolTip.setInfo_1.bg.height - 10, 0));
      s += d.int(Math.max(this.equipToolTip.setInfo_2.bg.height - 10, 0));
      this.setPosition(s, this.bindFunction(this.positionAsCombinedTooltip), "positionAsCombinedTooltip");
    }
  };
  CastleEquipmentToolTip.prototype.setPosition = function (e, t, i) {
    var n = this._currentTarget.localToGlobal(new O(0, 0));
    var o = n.clone();
    n.y -= this._currentTarget.height / 2;
    o.y += this._currentTarget.height / 2 + e;
    if (n.y - e < 0) {
      if (o.y < this.equipToolTip.stage.stageHeight || i == "positionAsSplitTooltip") {
        t(o, e);
      } else if (this.equipToolTip.bg.height <= this.equipToolTip.stage.stageHeight && !this.hasSetInfo() && this._currentEquippableVO.setID <= 0) {
        this.positionAsNextToIcon(n, this.equipToolTip.bg.height);
        t(this.disp.localToGlobal(new O(0, 0)), e);
      } else {
        this.setPosition(this.equipToolTip.bg.height, this.bindFunction(this.positionAsSplitTooltip), "positionAsSplitTooltip");
      }
    } else {
      t(n, e);
    }
  };
  CastleEquipmentToolTip.prototype.hasSetInfo = function () {
    return this.equipToolTip.setInfo_1.visible || this.equipToolTip.setInfo_2.visible;
  };
  CastleEquipmentToolTip.prototype.positionAsNextToIcon = function (e, t) {
    if (e.x - 20 - CastleEquipmentToolTip.BOX_WIDTH > 0) {
      this.disp.x = e.x - 20 - CastleEquipmentToolTip.BOX_WIDTH * 0.5;
    } else if (e.x + 20 + CastleEquipmentToolTip.BOX_WIDTH < this.equipToolTip.stage.stageWidth) {
      this.disp.x = e.x + 20 + CastleEquipmentToolTip.BOX_WIDTH * 0.5;
    } else {
      this.disp.x = m.CastleMathHelper.clamp(e.x, 0 + CastleEquipmentToolTip.BOX_WIDTH * 0.5, this.equipToolTip.stage.stageWidth - CastleEquipmentToolTip.BOX_WIDTH * 0.5);
    }
    this.disp.y = this.equipToolTip.stage.stageHeight - (this.equipToolTip.stage.stageHeight - t) / 2;
  };
  CastleEquipmentToolTip.prototype.positionAsSplitTooltip = function (e, t) {
    this.disp.x = m.CastleMathHelper.clamp(e.x, 0 + CastleEquipmentToolTip.BOX_WIDTH * 0.5, this.equipToolTip.stage.stageWidth - CastleEquipmentToolTip.BOX_WIDTH * 0.5);
    this.disp.y = e.y;
    var i = d.int(this.disp.x + CastleEquipmentToolTip.BOX_WIDTH * 1.5 > this.equipToolTip.stage.stageWidth ? -1 : 1);
    this.equipToolTip.setInfo_1.x = CastleEquipmentToolTip.BOX_WIDTH * i;
    i = d.int(this.disp.x + CastleEquipmentToolTip.BOX_WIDTH * (i * 2 + 0.5) > this.equipToolTip.stage.stageWidth ? -1 : i * 2);
    this.equipToolTip.setInfo_2.x = CastleEquipmentToolTip.BOX_WIDTH * i;
    this.equipToolTip.itemInfo.y = 0;
    this.equipToolTip.bg.height = t;
    var n = d.int(this.equipToolTip.stage.stageHeight - e.y);
    this.equipToolTip.setInfo_1.y = Math.min(this.equipToolTip.setInfo_1.bg.height - this.equipToolTip.bg.height, n);
    this.equipToolTip.setInfo_2.y = Math.min(this.equipToolTip.setInfo_2.bg.height - this.equipToolTip.bg.height, n);
  };
  CastleEquipmentToolTip.prototype.positionAsCombinedTooltip = function (e, t) {
    this.disp.x = m.CastleMathHelper.clamp(e.x, 0 + CastleEquipmentToolTip.BOX_WIDTH * 0.5, this.equipToolTip.stage.stageWidth - CastleEquipmentToolTip.BOX_WIDTH * 0.5);
    this.disp.y = e.y;
    this.equipToolTip.setInfo_1.x = 0;
    this.equipToolTip.setInfo_2.x = 0;
    this.equipToolTip.bg.height = t;
    this.equipToolTip.setInfo_2.y = 0;
    this.equipToolTip.setInfo_1.y = this.equipToolTip.setInfo_2.y - (this.equipToolTip.setInfo_2.visible ? this.equipToolTip.setInfo_2.bg.height - 10 : 0);
    this.equipToolTip.itemInfo.y = this.equipToolTip.setInfo_1.y - (this.equipToolTip.setInfo_1.visible ? this.equipToolTip.setInfo_1.bg.height - 10 : 0);
    this.equipToolTip.setInfo_1.bg.visible = false;
    this.equipToolTip.setInfo_2.bg.visible = false;
  };
  CastleEquipmentToolTip.prototype.getSecondSetItem = function () {
    if (b.instanceOfClass(this._currentEquippableVO, "BasicEquipmentVO")) {
      var e = this._currentEquippableVO.gemVO;
      if (e && e.setVO && (this._currentEquippableVO.setID <= 0 || e.setVO.id != this._currentEquippableVO.setVO.id)) {
        return e;
      }
    }
    return null;
  };
  CastleEquipmentToolTip.prototype.setItemInfo = function (e) {
    e.itxt_name = CastleEquipmentToolTip.textFieldManager.registerTextField(e.txt_name, new l.TextVO(this._currentEquippableVO.nameString));
    e.itxt_name.color = this._currentEquippableVO.nameColor;
    e.itxt_name.visible = !this.isTextEmpty(e.itxt_name.textContentVO.stringValue);
    e.itxt_short_description = CastleEquipmentToolTip.textFieldManager.registerTextField(e.txt_short_description, new l.TextVO(this.getShortDescriptionText(this._currentEquippableVO)));
    e.itxt_short_description.visible = !this.isTextEmpty(e.itxt_short_description.textContentVO.stringValue);
    e.itxt_short_description_starLevel = CastleEquipmentToolTip.textFieldManager.registerTextField(e.txt_short_description_starLevel, new l.TextVO(this._currentEquippableVO.typeDescriptionStarLevelText));
    e.itxt_short_description_starLevel.visible = !this.isTextEmpty(e.itxt_short_description_starLevel.textContentVO.stringValue);
    e.itxt_description = CastleEquipmentToolTip.textFieldManager.registerTextField(e.txt_description, new c.LocalizedTextVO(this._currentEquippableVO.bonusDescriptionText));
    e.itxt_description.visible = !this.isTextEmpty(e.itxt_description.text);
    e.itxt_extraText = CastleEquipmentToolTip.textFieldManager.registerTextField(e.txt_extraText, new l.TextVO(this._currentEquippableVO.extraText));
    e.itxt_extraText.visible = !this.isTextEmpty(e.itxt_extraText.textContentVO.stringValue);
    e.itxt_extraTextAppearanceTarget = CastleEquipmentToolTip.textFieldManager.registerTextField(e.txt_extraTextAppearanceTarget, new l.TextVO(this._currentEquippableVO.extraTextAppearanceTarget));
    e.itxt_extraTextAppearanceTarget.visible = !this.isTextEmpty(e.itxt_extraTextAppearanceTarget.textContentVO.stringValue);
    if (b.instanceOfClass(this._currentEquippableVO, "BasicEquipmentVO")) {
      var t = this._currentEquippableVO.gemVO;
      if (this._currentEquippableVO.canSlotGem) {
        e.itxt_gemText = CastleEquipmentToolTip.textFieldManager.registerTextField(e.txt_gemText, t ? new c.LocalizedTextVO(t.bonusDescriptionText) : new c.LocalizedTextVO("equip_effect_description_emptyGemSocket_name"));
      } else {
        e.itxt_gemText = CastleEquipmentToolTip.textFieldManager.registerTextField(e.txt_gemText, new c.LocalizedTextVO("equip_effect_description_noGemSocket_name"));
      }
      e.itxt_gemText.visible = !this.isTextEmpty(e.itxt_gemText.text);
      if (this._currentEquippableVO.isSkinItem()) {
        e.mc_appearance.visible = true;
        this.setAppearanceInfo(e.mc_appearance);
      } else {
        e.mc_appearance.visible = false;
      }
    } else {
      e.itxt_gemText = CastleEquipmentToolTip.textFieldManager.registerTextField(e.txt_gemText, new l.TextVO(""));
      e.itxt_gemText.visible = false;
      e.mc_appearance.visible = false;
    }
    var i = this.placeTextField(e.itxt_extraTextAppearanceTarget, null);
    i = this.placeTextField(e.itxt_extraText, i);
    i = this.placeMC(e.mc_appearance, i);
    i = this.placeTextField(e.itxt_gemText, i);
    i = this.placeTextField(e.itxt_description, i);
    i = this.placeTextField(e.itxt_short_description_starLevel, i);
    i = this.placeTextField(e.itxt_short_description, i);
    i = this.placeTextField(e.itxt_name, i);
    e.line0.visible = !this.isTextEmpty(e.itxt_name.text) && !this.isTextEmpty(e.itxt_short_description.text);
    e.line0.y = e.itxt_short_description.y - 2;
    e.line1.visible = !this.isTextEmpty(e.itxt_short_description.text) && !this.isTextEmpty(e.itxt_description.text);
    e.line1.y = e.itxt_description.y - 2;
    e.line1_5.visible = !this.isTextEmpty(e.itxt_short_description_starLevel.text);
    e.line1_5.y = e.itxt_short_description_starLevel.y - 2;
    e.line2.visible = !this.isTextEmpty(e.itxt_gemText.text);
    e.line2.y = e.itxt_gemText.y - 2;
    e.line3.visible = !this.isTextEmpty(e.itxt_extraText.text);
    e.line3.y = e.itxt_extraText.y - 2;
    e.line4.visible = !this.isTextEmpty(e.itxt_extraTextAppearanceTarget.text);
    e.line4.y = e.itxt_extraTextAppearanceTarget.y - 2;
    this.equipToolTip.bg.height = Math.abs(i.y) + 5;
  };
  CastleEquipmentToolTip.prototype.setAppearanceInfo = function (e) {
    e.customHeight ||= e.height;
    n.MovieClipHelper.clearMovieClip(e.mc_appearance_container.iconHolder);
    if (this._currentEquippableVO.lordType == _.BasicEquippableVO.LORD_TYPE_COMMANDER) {
      var t = C.CastleModel.kingdomData.activeKingdomID == r.WorldIsland.KINGDOM_ID;
      var i = t ? C.CastleModel.kingdomData.getKingdomVOByID(r.WorldIsland.KINGDOM_ID).kingdomName : "Common";
      var o = "Skin_Mapmovement_" + this._currentEquippableVO.skinAssetID + "_" + i;
      if (!n.BasicModel.basicLoaderData.isItemAssetVersioned(o)) {
        o = "Skin_Mapmovement_" + this._currentEquippableVO.skinAssetID + "_Common";
      }
      var a = y.getDefinitionByNameFromLibrary("LoadingAnimation_Centered");
      var s = new f.CastleGoodgameExternalClip(o, n.BasicModel.basicLoaderData.getVersionedItemAssetUrl(o), this.clipColor, 0, false, a, false, 1, false, false, true);
      e.mc_appearance_container.iconHolder.addChild(s);
      s.doWhenLoaded(function (e) {
        D.CastleMovieClipHelper.scaleWithAntiAliasing(s, 215, 105, 1, true);
      });
      CastleEquipmentToolTip.textFieldManager.registerTextField(e.txt_appearance, new c.LocalizedTextVO(t ? "equip_effect_description_appearance_commander_ship" : "equip_effect_description_appearance_commander_army"));
    } else {
      var l = this._currentLordVO && this._currentLordVO.isBaron && this._currentLordVO.lockedInCastleID > -1 ? C.CastleModel.userData.castleList.getCastleVOByID(this._currentLordVO.lockedInCastleID) : C.CastleModel.userData.castleList.getHomeCastle();
      var u = l.equipmentUniqueIdSkin;
      l.equipmentUniqueIdSkin = this._currentEquippableVO.uniqueID;
      var d = I.WorldmapObjectIconHelper.drawMapObjectIcon(l, new O(215, 105), true, false, false);
      e.mc_appearance_container.iconHolder.addChild(d);
      l.equipmentUniqueIdSkin = u;
      var p = this.getAppearanceTextID(l);
      CastleEquipmentToolTip.textFieldManager.registerTextField(e.txt_appearance, new c.LocalizedTextVO(p));
    }
  };
  CastleEquipmentToolTip.prototype.getAppearanceTextID = function (e) {
    switch (e.areaType) {
      case r.WorldConst.AREA_TYPE_OUTPOST:
        return "equip_effect_description_appearance_baron_outpost";
      case r.WorldConst.AREA_TYPE_CAPITAL:
        return "equip_effect_description_appearance_baron_capital";
      case r.WorldConst.AREA_TYPE_METROPOL:
        return "equip_effect_description_appearance_baron_metropolis";
      default:
        return "equip_effect_description_appearance_baron_mainCastle";
    }
  };
  Object.defineProperty(CastleEquipmentToolTip.prototype, "clipColor", {
    get: function () {
      var e = [];
      e.push(new n.ClipColor("flag", C.CastleModel.userData.playerCrest.colorsFour));
      return e;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentToolTip.prototype.getShortDescriptionText = function (e) {
    var t = this._currentEquippableVO.typeDescriptionText;
    if (!!b.instanceOfClass(e, "BasicEquipmentVO") && !e.isPermanent && !this._forceHideTimer) {
      t += "\n" + this.getDurationText(e, this._showCountdown);
    }
    return t;
  };
  CastleEquipmentToolTip.prototype.isTextEmpty = function (e) {
    return e.length == 0 || e == "<p></p>";
  };
  CastleEquipmentToolTip.prototype.setSetItemInfo = function (e, t) {
    e.itxt_setReached = CastleEquipmentToolTip.textFieldManager.registerTextField(e.txt_setReached, new l.TextVO(""));
    e.itxt_setNotReached = CastleEquipmentToolTip.textFieldManager.registerTextField(e.txt_setNotReached, new l.TextVO(""));
    e.itxt_setName = CastleEquipmentToolTip.textFieldManager.registerTextField(e.txt_setName, new l.TextVO(""));
    e.itxt_setName.color = p.ClientConstColor.LORD_HAS_UNIQUE_ITEM_EQUIPPED;
    var i = t ? t.setVO : null;
    e.bg.visible = false;
    if (i) {
      e.itxt_setReached = CastleEquipmentToolTip.textFieldManager.registerTextField(e.txt_setReached, new c.LocalizedTextVO(i.getReachedSetBonusText(this._currentLordVO)));
      e.itxt_setNotReached = CastleEquipmentToolTip.textFieldManager.registerTextField(e.txt_setNotReached, new c.LocalizedTextVO(i.getNotReachedSetBonusText(this._currentLordVO)));
      var n = "";
      if (this._currentLordVO) {
        var o = u.Localize.text(a.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this._currentLordVO.getCountOfSetId(i.id), i.maxNeededItems]);
        n = u.Localize.text(a.GenericTextIds.VALUE_ASSIGN_COLON, [o, i.name]);
      } else {
        n = i.name;
      }
      if (b.instanceOfClass(t, "BasicEquipmentVO")) {
        n = this.getNameForSkinEquipment(t, n);
        if (t.isPermanent && t.slotType == _.BasicEquippableVO.SLOT_TYPE_SKIN) {
          e.itxt_setName.color = p.ClientConstColor.EQUIPMENT_COLOR_RARITY_UNIQUE;
        }
      }
      e.itxt_setName.textContentVO.stringValue = n;
      e.bg.visible = true;
    } else {
      e.itxt_setName.textContentVO = new l.TextVO("");
      if (t && b.instanceOfClass(t, "BasicEquipmentVO")) {
        e.itxt_setName.textContentVO = new l.TextVO(this.getNameForSkinEquipment(t));
        if (t.isPermanent && t.slotType == _.BasicEquippableVO.SLOT_TYPE_SKIN) {
          e.itxt_setName.color = p.ClientConstColor.EQUIPMENT_COLOR_GEM;
        }
      }
      e.itxt_setReached.textContentVO.stringValue = "";
      e.itxt_setNotReached.textContentVO.stringValue = "";
    }
    for (var r = 0; r < CastleEquipmentToolTip.NUMBER_OF_SET_MCS; r++) {
      var d = e["mc_setItem" + (r + 1)];
      d.itxt_value = CastleEquipmentToolTip.textFieldManager.registerTextField(d.txt_value, new l.TextVO(""));
      d.itxt_value.textAlign = s.GGSTextAlign.LEFT;
      if (!i || r >= i.setItems.length) {
        d.itxt_value.textContentVO.stringValue = "";
        d.visible = false;
      } else {
        var g = i.setItems[r];
        d.itxt_value.textContentVO.stringValue = g.nameString;
        if (b.instanceOfClass(g, "CastleHeroVO") && h.ClientConstHero.STARTER_HEROES.indexOf(g.uniqueID) > -1 && g.uniqueID != C.CastleModel.userData.selectedHeroID) {
          continue;
        }
        if (this._currentLordVO && this._currentLordVO.hasUniqueItemEquipped(g)) {
          d.itxt_value.color = p.ClientConstColor.LORD_HAS_UNIQUE_ITEM_EQUIPPED;
          d.mc_point.gotoAndStop(2);
        } else {
          d.itxt_value.color = p.ClientConstColor.LORD_HAS_NO_UNIQUE_ITEM_EQUIPPED;
          d.mc_point.gotoAndStop(1);
        }
        d.bg.height = d.itxt_value.textHeight + 3;
        d.mc_point.y = d.bg.height / 2;
        d.visible = true;
        d.mc_star.visible = false;
        if (b.instanceOfClass(g, "BasicEquipmentVO") && g.hasStar) {
          d.mc_star.visible = true;
          d.mc_star.gotoAndStop(g.starRarity + 1);
          CastleEquipmentToolTip.textFieldManager.registerTextField(d.mc_star.txt_level, new l.TextVO(g.starLevel.toString()));
        }
        if (b.instanceOfClass(g, "CastleGemVO") && g.hasStar) {
          d.mc_star.visible = true;
          d.mc_star.gotoAndStop(g.starRarity + 1);
          CastleEquipmentToolTip.textFieldManager.registerTextField(d.mc_star.txt_level, new l.TextVO(g.starLevel.toString()));
        }
      }
    }
    e.itxt_setReached.visible = !this.isTextEmpty(e.itxt_setReached.text);
    e.itxt_setNotReached.visible = !this.isTextEmpty(e.itxt_setNotReached.text);
    e.itxt_setName.visible = t && (t.setVO != null || t.slotType == _.BasicEquippableVO.SLOT_TYPE_SKIN);
    var m = this.placeTextField(e.itxt_setNotReached, null);
    m = this.placeTextField(e.itxt_setReached, m);
    for (var f = CastleEquipmentToolTip.NUMBER_OF_SET_MCS; f > 0; f--) {
      m = this.placeMC(e["mc_setItem" + f], m);
    }
    m = this.placeTextField(e.itxt_setName, m);
    e.line.visible = !this.isTextEmpty(e.itxt_setReached.text) && !this.isTextEmpty(e.itxt_setNotReached.text);
    e.line.y = e.itxt_setNotReached.y - 2;
    e.bg.height = m ? Math.abs(m.y) + 5 : 0;
    e.visible = m != null;
  };
  CastleEquipmentToolTip.prototype.getNameForSkinEquipment = function (e, t = null) {
    var i = "";
    if (e.isPermanent && e.slotType == _.BasicEquippableVO.SLOT_TYPE_SKIN && e.isPermanent) {
      i = u.Localize.text("equip_effect_description_permanentAppearance");
    }
    if (!g.CastleStringHelper.isNullOrEmpty(t)) {
      i += (i.length > 0 ? "\n" : "") + t;
    }
    return i;
  };
  CastleEquipmentToolTip.prototype.placeTextField = function (e, t) {
    if (e.visible) {
      e.y = (t && t.visible ? t.y : -5) - e.textHeight - 4;
      return e;
    } else {
      return t;
    }
  };
  CastleEquipmentToolTip.prototype.placeMC = function (e, t) {
    if (e.visible) {
      var i = y.castAs(t, "IBasicGGSTextField");
      e.y = (t ? t.y : 0) - (e.itxt_value ? e.itxt_value.textHeight : e.customHeight ? e.customHeight : e.height) - (i != null ? 7 : 5);
      return e;
    }
    return t;
  };
  CastleEquipmentToolTip.prototype.getDurationText = function (e, t = true) {
    var i = d.int(t ? e.remainingDuration : e.totalDuration);
    var n = d.int(i / 60);
    var o = d.int(n / 60);
    var a = d.int(o / 24);
    if (a > 0) {
      return u.Localize.text("countdown_time_equipment_days", [a, o - a * 24]);
    } else if (o > 0) {
      return u.Localize.text("countdown_time_equipment_hours", [o, n - o * 60]);
    } else {
      return u.Localize.text("countdown_time_equipment_minutes", [n]);
    }
  };
  Object.defineProperty(CastleEquipmentToolTip, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentToolTip.prototype, "disp", {
    get: function () {
      return CastleEquipmentToolTip._equipToolTipClip;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentToolTip.BOX_WIDTH = 230;
  CastleEquipmentToolTip.NUMBER_OF_SET_MCS = 12;
  return CastleEquipmentToolTip;
}();
exports.CastleEquipmentToolTip = E;
var y = require("./1.js");
var b = require("./1.js");
var D = require("./41.js");
var I = require("./70.js");