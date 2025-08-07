Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ConstructionItemToolTip() {
    this.maxIconWidth = NaN;
    this.maxIconHeight = NaN;
    this.buildingAreaSize = NaN;
  }
  ConstructionItemToolTip.prototype.init = function () {
    this._itxt_name = ConstructionItemToolTip.textFieldManager.registerTextField(this._disp.txt_name, new d.TextVO(""));
    this._itxt_level = ConstructionItemToolTip.textFieldManager.registerTextField(this._disp.txt_level, new u.LocalizedTextVO(""));
    this._itxt_info = ConstructionItemToolTip.textFieldManager.registerTextField(this._disp.txt_info, new u.LocalizedTextVO("value_dash_split"));
    this._itxt_effect = ConstructionItemToolTip.textFieldManager.registerTextField(this._disp.txt_effect, new d.TextVO(""));
    this._itxt_flavor = ConstructionItemToolTip.textFieldManager.registerTextField(this._disp.mc_flavor_area.txt_flavor, new u.LocalizedTextVO(""));
    this._itxt_temporary = ConstructionItemToolTip.textFieldManager.registerTextField(this._disp.mc_temporary.txt_flavor, new d.TextVO(""));
    this._itxt_limit = ConstructionItemToolTip.textFieldManager.registerTextField(this._disp.txt_limit, new u.LocalizedTextVO(""));
    ConstructionItemToolTip.textFieldManager.registerTextField(this._disp.mc_building_area.txt_building, new u.LocalizedTextVO("ci_tooltip_appearance"));
  };
  ConstructionItemToolTip.prototype.initToolTipByConstructionItem = function (e) {
    this.init();
    this.setNameText(e.nameTextId, e.rarityColor, a.CastleDataHolder.instance.cheatShowConstructionItemIDs ? " ID:" + e.id : "");
    this.setLevelRarityText(e.rarityTextId, e.isAppearanceItem ? 0 : e.level);
    this.setInfoText(e);
    this.setAppearanceItemInfo(e);
    this.setLimitText(e);
    this.setTemporaryText(e);
    this._itxt_effect.visible = true;
    this._itxt_effect.textContentVO.stringValue = e.effectText;
    this._itxt_effect.height = this._itxt_effect.textHeight;
    this._disp.mc_bluePrintEffect.visible = false;
    this._disp.mc_bluePrintEffect2.visible = false;
    this._disp.mc_bluePrintEffect3.visible = false;
    this.resize();
  };
  ConstructionItemToolTip.prototype.initToolTipByBlueprint = function (e, t = null) {
    var i = e.recipes[0].constructionItem;
    var n = o.ConstructionItemsHelper.getBestUnlockedCI(e);
    var a = e.recipes[e.recipes.length - 1].constructionItem;
    this.init();
    this.setNameText(e.nameId, n ? n.rarityColor : ConstructionItemToolTip.DEFAULT_COLOR, t);
    this.setLevelRarityText();
    this.setInfoText(i);
    this.setAppearanceItemInfo(i);
    this.setLimitText(i);
    this._itxt_effect.visible = false;
    this.setBluePrintEffectText(i, a);
    this.resize();
  };
  ConstructionItemToolTip.prototype.setNameText = function (e, t = ConstructionItemToolTip.DEFAULT_COLOR, i = null) {
    this._itxt_name.textContentVO.stringValue = c.Localize.text(e) + (i || "");
    this._itxt_name.color = t;
  };
  ConstructionItemToolTip.prototype.setLevelRarityText = function (e = "", t = 0) {
    this._itxt_level.visible = true;
    this._disp.line_level.visible = true;
    if (t && e) {
      var i = [c.Localize.text("ci_level", [t]), c.Localize.text(e)];
      this._itxt_level.textContentVO.textId = "value_dash_split";
      this._itxt_level.textContentVO.textReplacements = i;
    } else if (e) {
      this._itxt_level.textContentVO.textId = e;
    } else {
      this._itxt_level.visible = false;
      this._disp.line_level.visible = false;
    }
  };
  ConstructionItemToolTip.prototype.setInfoText = function (e) {
    var t = [e.applicableBuildingsString, c.Localize.text(e.slotNameTextId)];
    this._itxt_info.textContentVO.textReplacements = t;
  };
  ConstructionItemToolTip.prototype.setAppearanceItemInfo = function (e) {
    var t = e.flavourTextId;
    this._disp.mc_flavor_area.visible = t != "" && t != null;
    if (t) {
      this._itxt_flavor.textContentVO.textId = t;
    }
    this._disp.mc_building_area.visible = e.isAppearanceItem;
    if (e.isAppearanceItem) {
      s.WodPicHelper.addWodPic(e.skinnedBuildingVO, this._disp.mc_building_area.mc_building_container, this.maxIconWidth, this.maxIconHeight);
    }
  };
  ConstructionItemToolTip.prototype.setLimitText = function (e) {
    var t = e.areaLimit;
    if (t == 1) {
      this._itxt_limit.textContentVO.textId = "ci_tooltip_maxLimit_singular";
    } else if (t > 1) {
      this._itxt_limit.textContentVO.textId = "ci_tooltip_maxLimit_plural";
      this._itxt_limit.textContentVO.textReplacements = [t];
    }
    this._disp.line_limit.visible = t > 0;
    this._itxt_limit.visible = t > 0;
  };
  ConstructionItemToolTip.prototype.setBluePrintEffectText = function (e, t) {
    this._disp.mc_bluePrintEffect.visible = false;
    this._disp.mc_bluePrintEffect2.visible = false;
    this._disp.mc_bluePrintEffect3.visible = false;
    for (var i = 0; i < t.effectsAmount; i++) {
      var n = t.getBluePrintEffectName(i);
      var o = this._disp["mc_bluePrintEffect" + (i > 0 ? i : "")];
      o.visible = true;
      var a = ConstructionItemToolTip.textFieldManager.registerTextField(o.txt_bp_effect, new d.TextVO(n));
      var s = ConstructionItemToolTip.textFieldManager.registerTextField(o.txt_bp_first, new u.LocalizedTextVO("ciblueprint_tooltip_firstLevel", [e.level]));
      var l = ConstructionItemToolTip.textFieldManager.registerTextField(o.txt_bp_max, new u.LocalizedTextVO("ciblueprint_tooltip_maxLevel", [t.level]));
      var c = ConstructionItemToolTip.textFieldManager.registerTextField(o.txt_bp_firstValue, new d.TextVO(e.getBlueprintEffectValueText(i)));
      var p = ConstructionItemToolTip.textFieldManager.registerTextField(o.txt_bp_maxValue, new d.TextVO(t.getBlueprintEffectValueText(i)));
      s.color = e.rarityColor;
      l.color = t.rarityColor;
      c.color = e.rarityColor;
      p.color = t.rarityColor;
      var h = !r.ClientConstUtils.isTlfMode;
      var g = h ? s.x : s.x + s.width;
      c.x = g + (h ? s.textWidth : -s.textWidth - c.width);
      p.x = g + (h ? l.textWidth : -l.textWidth - p.width);
      s.y = a.textHeight - 3;
      c.y = a.textHeight - 3;
      l.y = s.y + s.textHeight - 3;
      p.y = c.y + c.textHeight - 3;
    }
  };
  ConstructionItemToolTip.prototype.setTemporaryText = function (e) {
    this._disp.mc_temporary.visible = e.isTemporary;
    if (e.isTemporary) {
      if (e.getRemainingTime() > 0) {
        this._itxt_temporary.textContentVO.stringValue = this.getDurationText(e.isExpiring() ? e.getRemainingTime() : e.duration);
      } else {
        this._itxt_temporary.textContentVO.stringValue = c.Localize.text("dialog_ci_tempCiExpired_header");
      }
    }
  };
  ConstructionItemToolTip.prototype.getDurationText = function (e) {
    var t = Math.floor(e / 60);
    var i = Math.floor(t / 60);
    var n = Math.floor(i / 24);
    if (n > 0) {
      return c.Localize.text("countdown_time_equipment_days", [n, i - n * 24]);
    } else if (i > 0) {
      return c.Localize.text("countdown_time_equipment_hours", [i, t - i * 60]);
    } else {
      return c.Localize.text("countdown_time_equipment_minutes", [t]);
    }
  };
  ConstructionItemToolTip.prototype.resize = function () {
    var e = -ConstructionItemToolTip.BOX_MARGIN;
    if (this._disp.mc_flavor_area.visible) {
      e = this._disp.mc_flavor_area.y = e - this._itxt_flavor.textHeight;
    }
    if (this._disp.mc_building_area.visible) {
      e = this._disp.mc_building_area.y = e - this.buildingAreaSize;
    }
    if (this._itxt_limit.visible) {
      e = this._itxt_limit.y = e - this._itxt_limit.textHeight;
      e = this._disp.line_limit.y = e;
    }
    if (this._disp.mc_bluePrintEffect.visible) {
      if (this._disp.mc_bluePrintEffect3.visible) {
        e = this._disp.mc_bluePrintEffect3.y = e - this._disp.mc_bluePrintEffect3.height;
        e -= 2;
      }
      if (this._disp.mc_bluePrintEffect2.visible) {
        e = this._disp.mc_bluePrintEffect2.y = e - this._disp.mc_bluePrintEffect2.height;
        e -= 2;
      }
      e = this._disp.mc_bluePrintEffect.y = e - this._disp.mc_bluePrintEffect.height;
    } else {
      e = this._itxt_effect.y = e - this._itxt_effect.textHeight;
    }
    e = this._disp.line_effect.y = e;
    e = this._itxt_info.y = e - this._itxt_info.textHeight;
    e = this._disp.line_info.y = e;
    if (this._disp.mc_temporary.visible) {
      e = this._disp.mc_temporary.y = e - this._itxt_temporary.textHeight;
    }
    if (this._itxt_level.visible) {
      e = this._itxt_level.y = e - this._itxt_level.textHeight;
      e = this._disp.line_level.y = e;
    }
    e = this._itxt_name.y = e - this._itxt_name.textHeight;
    this._disp.bg.height = -e + ConstructionItemToolTip.BOX_MARGIN;
  };
  Object.defineProperty(ConstructionItemToolTip.prototype, "disp", {
    get: function () {
      if (!this._disp) {
        this._disp = new Library.CastleInterfaceElements.ConstructionItem_ToolTip_Sep24();
        this.maxIconWidth = this.disp.mc_building_area.mc_building_container.width - ConstructionItemToolTip.PICTURE_MARGIN * 2;
        this.maxIconHeight = this.disp.mc_building_area.mc_building_container.height - ConstructionItemToolTip.PICTURE_MARGIN * 2;
        this.buildingAreaSize = this.disp.mc_building_area.height;
      }
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemToolTip, "textFieldManager", {
    get: function () {
      return l.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemToolTip.BOX_MARGIN = 4;
  ConstructionItemToolTip.PICTURE_MARGIN = 4;
  ConstructionItemToolTip.DEFAULT_COLOR = 12690820;
  return ConstructionItemToolTip;
}();
exports.ConstructionItemToolTip = n;
var o = require("./239.js");
var a = require("./176.js");
var s = require("./63.js");
var r = require("./55.js");
var l = require("./2.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");