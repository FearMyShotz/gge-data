Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CollectableRenderClips(e = null) {
    this._itemMc = e;
    this.getDefaultsFromItemMc();
  }
  CollectableRenderClips.prototype.getDefaultsFromItemMc = function () {
    this._iconMc = this._infoBtn = this._textBackgroundMc = this._colorBackgroundMc = this._equipmentBackgroundMc = this._minuteSkipBackgroundMc = null;
    this._textfield = null;
    if (this._itemMc) {
      this._iconMc ||= this._itemMc.getChildByName("mc_icon");
      this._textfield ||= this._itemMc.getChildByName("txt_text");
      this._infoBtn ||= this._itemMc.getChildByName("btn_info");
      this._textBackgroundMc ||= this._itemMc.getChildByName("mc_textBackground");
      this._colorBackgroundMc ||= this._itemMc.getChildByName("mc_colorBackground");
      this._equipmentBackgroundMc ||= this._itemMc.getChildByName("mc_equipmentBackground");
      this._minuteSkipBackgroundMc ||= this._itemMc.getChildByName("mc_minuteSkipBackground");
      this._buildingLevelMc ||= this._itemMc.getChildByName("mc_buildingLevel");
      if (!this._unitLevelMc) {
        this.addUnitLevelMc(this._itemMc.getChildByName("mc_unitLevel"));
      }
      this._allianceRewardBackgroundMc ||= this._itemMc.getChildByName("bg_allianceReward");
      this._storageBar ||= this._itemMc.getChildByName("mc_storageBar");
    }
  };
  CollectableRenderClips.prototype.addItemMc = function (e, t = false) {
    this._itemMc = e;
    if (t) {
      this.getDefaultsFromItemMc();
    }
    return this;
  };
  CollectableRenderClips.prototype.addIconMc = function (e) {
    this._iconMc = e;
    return this;
  };
  CollectableRenderClips.prototype.addTextfield = function (e) {
    this._textfield = e;
    return this;
  };
  CollectableRenderClips.prototype.addInfoBtn = function (e) {
    this._infoBtn = e;
    return this;
  };
  CollectableRenderClips.prototype.addTextfieldBgMc = function (e) {
    this._textBackgroundMc = e;
    return this;
  };
  CollectableRenderClips.prototype.addColorBgMc = function (e) {
    this._colorBackgroundMc = e;
    return this;
  };
  CollectableRenderClips.prototype.addEquipmentBgMc = function (e) {
    this._equipmentBackgroundMc = e;
    return this;
  };
  CollectableRenderClips.prototype.addBuildingLevelMc = function (e) {
    this._buildingLevelMc = e;
    return this;
  };
  CollectableRenderClips.prototype.addUnitLevelMc = function (e) {
    this._unitLevelMc = e;
    if (e) {
      e.visible = false;
    }
    return this;
  };
  CollectableRenderClips.prototype.addDynamicLevelIndicatorVO = function (e) {
    this._collectableLevelIndicatorVO = e;
    return this;
  };
  CollectableRenderClips.prototype.addMinuteSkipBgMc = function (e) {
    this._minuteSkipBackgroundMc = e;
    return this;
  };
  CollectableRenderClips.prototype.addAllianceBackgroundMc = function (e) {
    this._allianceRewardBackgroundMc = e;
    return this;
  };
  CollectableRenderClips.prototype.addStorageBar = function (e) {
    this._storageBar = e;
    return this;
  };
  CollectableRenderClips.prototype.getTooltipTargetMc = function () {
    if (this.itemMc) {
      return this.itemMc;
    } else if (this.iconMc) {
      return this.iconMc;
    } else {
      return null;
    }
  };
  Object.defineProperty(CollectableRenderClips.prototype, "itemMc", {
    get: function () {
      return this._itemMc;
    },
    set: function (e) {
      this._itemMc = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderClips.prototype, "iconMc", {
    get: function () {
      return this._iconMc;
    },
    set: function (e) {
      this._iconMc = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderClips.prototype, "textfield", {
    get: function () {
      return this._textfield;
    },
    set: function (e) {
      this._textfield = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderClips.prototype, "infoBtn", {
    get: function () {
      return this._infoBtn;
    },
    set: function (e) {
      this._infoBtn = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderClips.prototype, "minuteSkipBackgroundMc", {
    get: function () {
      return this._minuteSkipBackgroundMc;
    },
    set: function (e) {
      this._minuteSkipBackgroundMc = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderClips.prototype, "buildingLevelMC", {
    get: function () {
      return this._buildingLevelMc;
    },
    set: function (e) {
      this._buildingLevelMc = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderClips.prototype, "unitLevelMC", {
    get: function () {
      return this._unitLevelMc;
    },
    set: function (e) {
      this._unitLevelMc = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderClips.prototype, "textBackgroundMc", {
    get: function () {
      return this._textBackgroundMc;
    },
    set: function (e) {
      this._textBackgroundMc = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderClips.prototype, "colorBackgroundMc", {
    get: function () {
      return this._colorBackgroundMc;
    },
    set: function (e) {
      this._colorBackgroundMc = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderClips.prototype, "equipmentBackgroundMc", {
    get: function () {
      return this._equipmentBackgroundMc;
    },
    set: function (e) {
      this._equipmentBackgroundMc = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderClips.prototype, "allianceRewardBackgroundMc", {
    get: function () {
      return this._allianceRewardBackgroundMc;
    },
    set: function (e) {
      this._allianceRewardBackgroundMc = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderClips.prototype, "storageBar", {
    get: function () {
      return this._storageBar;
    },
    set: function (e) {
      this._storageBar = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderClips.prototype, "collectableLevelIndicatorVO", {
    get: function () {
      return this._collectableLevelIndicatorVO;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableRenderClips;
}();
exports.CollectableRenderClips = n;