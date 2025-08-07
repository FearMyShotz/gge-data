Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./6.js");
var s = require("./8.js");
var r = function (e) {
  function EquipmentFilterPanel(t, i) {
    var n = e.call(this, t, i) || this;
    s.ButtonHelper.initCheckBoxes([n._disp.cbx_unique, n._disp.cbx_relic, n._disp.cbx_legendary, n._disp.cbx_epic, n._disp.cbx_rare, n._disp.cbx_common]);
    n.cbx_legendary = s.ButtonHelper.getBasicButton(n._disp.cbx_legendary);
    n.cbx_epic = s.ButtonHelper.getBasicButton(n._disp.cbx_epic);
    n.cbx_rare = s.ButtonHelper.getBasicButton(n._disp.cbx_rare);
    n.cbx_common = s.ButtonHelper.getBasicButton(n._disp.cbx_common);
    n.cbx_unique = s.ButtonHelper.getBasicButton(n._disp.cbx_unique);
    n.cbx_relic = s.ButtonHelper.getBasicButton(n._disp.cbx_relic);
    n._disp.cbx_relic.toolTipText = "equipment_rarity_relic";
    n._disp.cbx_unique.toolTipText = "equipment_rarity_unique";
    n._disp.cbx_legendary.toolTipText = "equipment_rarity_legendary";
    n._disp.cbx_epic.toolTipText = "equipment_rarity_epic";
    n._disp.cbx_rare.toolTipText = "equipment_rarity_rare";
    n._disp.cbx_common.toolTipText = "equipment_rarity_common";
    n.reset();
    return n;
  }
  n.__extends(EquipmentFilterPanel, e);
  EquipmentFilterPanel.prototype.setButtonWordID = function () {
    return "eq";
  };
  EquipmentFilterPanel.prototype.filter = function (e) {
    var t = [];
    for (var i = 0; i < e.length; i++) {
      if (e[i] && (!this.cbx_favorite.isSelected || this.checkForFavorite(e[i]))) {
        if (this.cbx_set.isSelected) {
          if (!this.checkForSetID(e[i], this._selectedLord)) {
            continue;
          }
        } else {
          if (!this.eqFitsRareness(e[i])) {
            continue;
          }
          if (this.searchString != "" && !this.searchForNameString(e[i])) {
            continue;
          }
        }
        t.push(e[i]);
      }
    }
    return t;
  };
  EquipmentFilterPanel.prototype.eqFitsRareness = function (e) {
    return !!this.cbx_common.isSelected && (e.rareID == o.EquipmentConst.RARENESS_COMMON || e.rareID == o.EquipmentConst.RARENESS_HERO_COMMON) || !!this.cbx_rare.isSelected && (e.rareID == o.EquipmentConst.RARENESS_RARE || e.rareID == o.EquipmentConst.RARENESS_HERO_RARE) || !!this.cbx_epic.isSelected && (e.rareID == o.EquipmentConst.RARENESS_EPIC || e.rareID == o.EquipmentConst.RARENESS_HERO_EPIC) || !!this.cbx_legendary.isSelected && (e.rareID == o.EquipmentConst.RARENESS_LEGENDARY || e.rareID == o.EquipmentConst.RARENESS_HERO_LEGENDARY) || !!this.cbx_unique.isSelected && (e.rareID == o.EquipmentConst.RARENESS_UNIQUE || e.rareID == o.EquipmentConst.RARENESS_HERO_UNIQUE) || !!this.cbx_relic.isSelected && !!l.instanceOfClass(e, "RelicEquipmentVO");
  };
  EquipmentFilterPanel.prototype.searchForNameString = function (e) {
    if (e.nameString.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1) {
      return true;
    }
    if (e.extraText.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1) {
      return true;
    }
    if (e.typeDescriptionText.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1) {
      return true;
    }
    if (e.bonusDescriptionText.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1) {
      return true;
    }
    if (e.setVO) {
      if (e.setVO.name.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1) {
        return true;
      }
      if (e.setVO.getSetBonusText().toLowerCase().indexOf(this.searchString.toLowerCase()) > -1) {
        return true;
      }
    }
    return false;
  };
  EquipmentFilterPanel.prototype.checkForFavorite = function (e) {
    return !!e.isFavoriteSaved;
  };
  EquipmentFilterPanel.prototype.checkForSetID = function (e, t) {
    if (!this._selectedLord) {
      return false;
    }
    var i = a.int(e.setID);
    var n = a.int(e.gemVO ? e.gemVO.setID : -1);
    var o = 0;
    var s = 0;
    for (var r in t.equipmentSlots) {
      var l = t.equipmentSlots[r];
      if (l !== undefined && l.equipmentVO) {
        o = a.int(l.equipmentVO.setID);
        s = a.int(l.equipmentVO.gemVO ? l.equipmentVO.gemVO.setID : -1);
        if (i > 0 && i == o) {
          return true;
        }
        if (n > 0 && n == s) {
          return true;
        }
      }
    }
    return false;
  };
  EquipmentFilterPanel.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this._disp.cbx_unique:
        this.toggleCheckbox(this.cbx_unique);
        break;
      case this._disp.cbx_relic:
        this.toggleCheckbox(this.cbx_relic);
        break;
      case this._disp.cbx_legendary:
        this.toggleCheckbox(this.cbx_legendary);
        break;
      case this._disp.cbx_epic:
        this.toggleCheckbox(this.cbx_epic);
        break;
      case this._disp.cbx_rare:
        this.toggleCheckbox(this.cbx_rare);
        break;
      case this._disp.cbx_common:
        this.toggleCheckbox(this.cbx_common);
    }
  };
  EquipmentFilterPanel.prototype.reset = function (t = false) {
    e.prototype.reset.call(this, t);
    this.cbx_legendary.selected();
    this.cbx_epic.selected();
    this.cbx_rare.selected();
    this.cbx_common.selected();
    this.cbx_unique.selected();
    this.cbx_relic.selected();
    if (t) {
      this.changed.dispatch();
    }
  };
  return EquipmentFilterPanel;
}(require("./1272.js").ABasicFilterPanel);
exports.EquipmentFilterPanel = r;
var l = require("./1.js");