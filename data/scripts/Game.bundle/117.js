Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./3.js");
var a = require("./57.js");
var s = require("./199.js");
var r = require("./207.js");
var l = require("./15.js");
var c = require("./4.js");
var u = require("./17.js");
var d = require("./63.js");
var p = require("./470.js");
var h = require("./836.js");
var g = require("./554.js");
var C = function () {
  function AttackDialogController() {
    this.onResizeDialog = new a.Signal();
    this.hideDialog = new a.Signal();
    this.onLordChanged = new a.Signal();
    this.onSelectedWaveInfoSlotContainerChanged = new a.Signal();
    this.onAutoFillALLSelectionChanged = new a.Signal();
    this.onOpenUnitPicker = new a.Signal();
    this.updateAllWaveInfo = new a.Signal();
    this.onMouseOverWave = new a.Signal();
    this.onMouseOutWave = new a.Signal();
    this.onShowSpyInfo = new a.Signal();
    this.onHideSpyInfo = new a.Signal();
    this.onShowAutoFillOptions = new a.Signal();
    this.onHideAutoFillOptions = new a.Signal();
    this.onAutoFillAllWaves = new a.Signal();
    this.showPlayerInfos = new a.Signal();
    this.hidePlayerInfos = new a.Signal();
    this.showTargetInfos = new a.Signal();
    this.hideTargetInfos = new a.Signal();
    this.openGeneralSelection = new a.Signal();
    this.closeGeneralSelection = new a.Signal();
    this.updateAutoFillSelections = new a.Signal();
    this.onStartDrag = new a.Signal();
    this.onStopDrag = new a.Signal();
    this.onDetailViewSelectionChanged = new a.Signal();
    this._selectedWaveIndex = -1;
    this._selectedWaveName = "";
    this.detailViewCachedData = {};
    this.controllerReady = false;
    this._expandWaveTrackingTemp = [];
  }
  AttackDialogController.prototype.initAttackVO = function (e) {
    this.controllerReady = false;
    this.attackVO = e;
    this._selectedLordID = 0;
    this._selectedLord = null;
    this._autoFillSelected = new Map();
    this._selectedWaveIndex = -1;
    this._isWaveDetailView = false;
    this._selectedDetailView = 0;
    this.setSelectedWaveInfoSlotMC(null, null, -1);
    this._attackAdvisorType = r.AdvisorAttackHelper.getAdvisorTypeByAreaType(this.attackVO.targetArea.areaType);
  };
  AttackDialogController.prototype.changeSelectionForAutoFill = function (e, t) {
    if (e == AttackDialogController.AUTOFILL_SELECTION_ALL) {
      for (var i = Array.from(this._autoFillSelected.keys()), n = 0; n < i.length; n++) {
        if (i[n] != AttackDialogController.AUTOFILL_SELECTION_POSITION_RIGHT && i[n] != AttackDialogController.AUTOFILL_SELECTION_POSITION_LEFT && i[n] != AttackDialogController.AUTOFILL_SELECTION_POSITION_MIDDLE) {
          this._autoFillSelected.set(i[n], t);
        }
      }
    } else {
      this._autoFillSelected.set(e, t);
    }
    this.onAutoFillALLSelectionChanged.dispatch();
    if (this.isAutoFillSaveSelected && !c.CastleModel.tutorialData.isTutorialActive) {
      this.saveAttackFilterOptions(false);
    }
  };
  AttackDialogController.prototype.getIsWaveSelectedForAutoFill = function (e) {
    if (this.isWaveDetailView && e != AttackDialogController.AUTOFILL_SELECTION_POSITION_LEFT && e != AttackDialogController.AUTOFILL_SELECTION_POSITION_MIDDLE && e != AttackDialogController.AUTOFILL_SELECTION_POSITION_RIGHT) {
      return this._selectedDetailView == e;
    } else {
      return !!this.isWaveActive(e) && (this._autoFillSelected.has(e) ? this._autoFillSelected.get(e) : (this._autoFillSelected.set(e, true), true));
    }
  };
  AttackDialogController.prototype.isWaveActive = function (e) {
    if (e == g.AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.CONST_WAVE_NAME) {
      return p.AttackDialogHelper.canUseSupportTools();
    } else {
      return e == h.AttackDialogWaveHandlerFinalYardWaveInfoItem.CONST_WAVE_NAME || e == AttackDialogController.AUTOFILL_SELECTION_POSITION_RIGHT || e == AttackDialogController.AUTOFILL_SELECTION_POSITION_LEFT || e == AttackDialogController.AUTOFILL_SELECTION_POSITION_MIDDLE || e < this.attackVO.army.getWaveCount();
    }
  };
  AttackDialogController.prototype.getNumberOfNormalWavesSelected = function () {
    var e = 0;
    for (var t = 0; t < this.attackVO.army.waves.length; t++) {
      if (this.getIsWaveSelectedForAutoFill(t)) {
        e++;
      }
    }
    return e;
  };
  AttackDialogController.prototype.isAnyFlankSelected = function () {
    return this.getIsWaveSelectedForAutoFill(AttackDialogController.AUTOFILL_SELECTION_POSITION_LEFT) || this.getIsWaveSelectedForAutoFill(AttackDialogController.AUTOFILL_SELECTION_POSITION_MIDDLE) || this.getIsWaveSelectedForAutoFill(AttackDialogController.AUTOFILL_SELECTION_POSITION_RIGHT);
  };
  Object.defineProperty(AttackDialogController.prototype, "selectedLord", {
    get: function () {
      if (this._selectedLordID >= 0) {
        return c.CastleModel.lordData.getLordByID(this._selectedLordID);
      } else {
        return this._selectedLord;
      }
    },
    set: function (e) {
      if (e && e.id >= 0) {
        this._selectedLordID = e.id;
        this._selectedLord = null;
      } else {
        this._selectedLordID = -1;
        this._selectedLord = e;
      }
      this.updateAreEffects();
      this.onLordChanged.dispatch();
      l.CastleBasicController.getInstance().dispatchEvent(new s.CastleDialogEvent(s.CastleDialogEvent.ATTACK_SCREEN_LORD_SELECTED));
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogController.prototype.updateAreEffects = function () {
    if (this.selectedLord) {
      if (this.attackVO.additionalEffects) {
        this.selectedLord.areaEffects = this.attackVO.additionalEffects.effects;
      } else {
        this.selectedLord.areaEffects = [];
      }
    }
  };
  Object.defineProperty(AttackDialogController.prototype, "selectedWaveInfo", {
    get: function () {
      return this._selectedWaveInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogController.prototype, "selectedWaveInfoSlotContainer", {
    get: function () {
      return this._selectedWaveInfoSlotContainer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogController.prototype, "selectedWaveIndex", {
    get: function () {
      return this._selectedWaveIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogController.prototype, "selectedWaveName", {
    get: function () {
      return this._selectedWaveName;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogController.prototype.setSelectedWaveInfoSlotMC = function (e, t, i, n = "") {
    if (this._selectedWaveInfoSlotContainer == e && e != null) {
      e = null;
      t = null;
      i = -1;
      n = "";
    }
    this._selectedWaveInfoSlotContainer = e;
    this._selectedWaveName = n;
    this._selectedWaveInfo = t;
    this._selectedWaveIndex = i;
    this.onSelectedWaveInfoSlotContainerChanged.dispatch();
  };
  AttackDialogController.prototype.setSelectedWaveIndex = function (e) {
    this._selectedWaveIndex = e;
    this.onSelectedWaveInfoSlotContainerChanged.dispatch();
  };
  AttackDialogController.prototype.setPresetPicker = function (e) {
    this.presetPicker = e;
  };
  AttackDialogController.prototype.setAutoFillOptions = function (e) {
    this.autoFillOptions = e;
  };
  AttackDialogController.prototype.saveAttackFilterOptions = function (e) {
    if (e) {
      c.CastleModel.localData.saveAttackDialogSelections(null);
    } else if (this.autoFillOptions && this._autoFillSelected && this.presetPicker.selectedPreset) {
      var t = {
        toolFilter: Array.from(this.autoFillOptions.toolFilter.entries()),
        unitFilter: Array.from(this.autoFillOptions.unitFilter.entries()),
        waveFilter: Array.from(this._autoFillSelected.entries()),
        presetIndex: this.presetPicker.selectedPreset.index
      };
      c.CastleModel.localData.saveAttackDialogSelections(t);
    }
  };
  Object.defineProperty(AttackDialogController.prototype, "isAutoFillSaveSelected", {
    get: function () {
      return !!c.CastleModel.localData.getAttackDialogSelections();
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogController.prototype.applySavedFilterOptions = function () {
    var e = this;
    var t = c.CastleModel.localData.getAttackDialogSelections();
    this.controllerReady = true;
    if (t) {
      if (t.toolFilter) {
        t.toolFilter.forEach(function (t) {
          e.autoFillOptions.setToolFilter(t[0], t[1]);
        });
      }
      if (t.unitFilter) {
        t.unitFilter.forEach(function (t) {
          e.autoFillOptions.setUnitFilter(t[0], t[1]);
        });
      }
      if (t.waveFilter) {
        t.waveFilter.forEach(function (t) {
          e._autoFillSelected.set(t[0], t[1]);
        });
      }
      this.autoFillOptions.fillLeftFlank = this.getIsWaveSelectedForAutoFill(AttackDialogController.AUTOFILL_SELECTION_POSITION_LEFT);
      this.autoFillOptions.fillRightFlank = this.getIsWaveSelectedForAutoFill(AttackDialogController.AUTOFILL_SELECTION_POSITION_RIGHT);
      this.autoFillOptions.fillMiddleFlank = this.getIsWaveSelectedForAutoFill(AttackDialogController.AUTOFILL_SELECTION_POSITION_MIDDLE);
      if (this.presetPicker.isInit()) {
        this.presetPicker.selectIndex(t.presetIndex);
      } else {
        this.presetPicker.onDataChangeHandled.add(this.bindFunction(this.onPresetsLoaded));
      }
      this.updateAutoFillSelections.dispatch();
      this.updateAllWaveInfo.dispatch();
    }
  };
  AttackDialogController.prototype.onPresetsLoaded = function () {
    this.presetPicker.onDataChangeHandled.remove(this.bindFunction(this.onPresetsLoaded));
    var e = c.CastleModel.localData.getAttackDialogSelections();
    this.presetPicker.selectIndex(e.presetIndex);
  };
  Object.defineProperty(AttackDialogController.prototype, "draggedUnitVO", {
    get: function () {
      return this._draggedUnitVO;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogController.prototype.startDrag = function (e) {
    this.stopDrag();
    this._draggedUnitVO = e;
    this._draggedUnitMC = d.WodPicHelper.addPlayerUnitPic(this._draggedUnitVO, null, AttackDialogController.DRAG_UNIT_WIDTH, AttackDialogController.DRAG_UNIT_HEIGHT);
    u.CastleLayoutManager.getInstance().nativeCursor.startDrag(this._draggedUnitMC);
    this.onStartDrag.dispatch();
  };
  AttackDialogController.prototype.stopDrag = function () {
    u.CastleLayoutManager.getInstance().nativeCursor.stopDrag(this._draggedUnitMC);
    this._draggedUnitVO = null;
    this._draggedUnitMC = null;
    this.onStopDrag.dispatch();
  };
  Object.defineProperty(AttackDialogController.prototype, "isWaveDetailView", {
    get: function () {
      return this._isWaveDetailView;
    },
    set: function (e) {
      this._isWaveDetailView = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogController.prototype, "selectedDetailView", {
    get: function () {
      return this._selectedDetailView;
    },
    set: function (e) {
      this._selectedDetailView = e;
      this.onAutoFillALLSelectionChanged.dispatch();
      this.onDetailViewSelectionChanged.dispatch();
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogController.prototype.addToExpandWaveTrackingTemp = function (e) {
    this._expandWaveTrackingTemp.push(e);
  };
  AttackDialogController.prototype.trackExpandWaves = function (e) {
    this._expandWaveTrackingTemp.toString();
    this._expandWaveTrackingTemp = [];
  };
  AttackDialogController.prototype.openSpyInfoFlank = function (e) {
    switch (e) {
      case "left":
        AttackDialogController.getInstance().onShowSpyInfo.dispatch(AttackDialogController.getInstance().attackVO.spyInfo.itemsLeft, o.Localize.text("dialog_spyLog_flankSpy"), true, false, false, true, "left");
        break;
      case "right":
        AttackDialogController.getInstance().onShowSpyInfo.dispatch(AttackDialogController.getInstance().attackVO.spyInfo.itemsRight, o.Localize.text("dialog_spyLog_flankSpy"), true, false, false, true, "right");
        break;
      case "middle":
        AttackDialogController.getInstance().onShowSpyInfo.dispatch(AttackDialogController.getInstance().attackVO.spyInfo.itemsMiddle, o.Localize.text("dialog_spyLog_frontSpy"), true, true, false, true, "middle");
        break;
      case "keep":
        AttackDialogController.getInstance().onShowSpyInfo.dispatch(AttackDialogController.getInstance().attackVO.spyInfo.itemsKeep, o.Localize.text("dialog_spyLog_keepSpy"), false, false, false, true, "keep");
    }
  };
  Object.defineProperty(AttackDialogController.prototype, "attackAdvisorType", {
    get: function () {
      return this._attackAdvisorType;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogController.prototype.isAttackAdvisorAvailable = function () {
    return this._attackAdvisorType > 0 && this._selectedLordID >= 0 && r.AdvisorAttackHelper.getAdvisorActivationInfo(this._attackAdvisorType).advisorActivationCurrencyId > 0;
  };
  AttackDialogController.getInstance = function () {
    AttackDialogController.controller ||= new AttackDialogController();
    return AttackDialogController.controller;
  };
  AttackDialogController.__initialize_static_members = function () {};
  AttackDialogController.AUTOFILL_SELECTION_POSITION_RIGHT = "right";
  AttackDialogController.AUTOFILL_SELECTION_POSITION_LEFT = "left";
  AttackDialogController.AUTOFILL_SELECTION_POSITION_MIDDLE = "middle";
  AttackDialogController.AUTOFILL_SELECTION_ALL = "all";
  AttackDialogController.DRAG_UNIT_WIDTH = 50;
  AttackDialogController.DRAG_UNIT_HEIGHT = 50;
  return AttackDialogController;
}();
exports.AttackDialogController = C;
n.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();