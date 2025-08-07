Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./87.js");
var a = require("./4.js");
var s = function () {
  function ARingMenuButton() {
    this.touchClickCount = 0;
  }
  Object.defineProperty(ARingMenuButton, "layoutManager", {
    get: function () {
      return r.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  ARingMenuButton.prototype.isBuildingInProgress = function () {
    if (!this.targetBuilding) {
      return false;
    }
    switch (this.targetBuilding.buildingVO.buildingState) {
      case o.IsoBuildingStateEnum.BUILD_COMPLETED:
      case o.IsoBuildingStateEnum.DISASSEMBLED_COMPLETED:
      case o.IsoBuildingStateEnum.UPGRADE_COMPLETED:
        return false;
      default:
        return true;
    }
  };
  ARingMenuButton.prototype.init = function (e, t, i) {
    this._parent = e;
    this._disp = null;
    this._targetBuilding = i;
  };
  Object.defineProperty(ARingMenuButton.prototype, "parent", {
    get: function () {
      return this._parent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ARingMenuButton.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  ARingMenuButton.prototype.destroy = function () {
    if (this._disp) {
      this._disp.visible = false;
    }
    this.removeEventListeners();
  };
  ARingMenuButton.prototype.onClick = function (e, t) {};
  ARingMenuButton.prototype.timerUpdate = function (e) {};
  ARingMenuButton.prototype.getInfoText = function () {
    return null;
  };
  ARingMenuButton.prototype.getAction = function () {
    return 0;
  };
  Object.defineProperty(ARingMenuButton.prototype, "targetBuilding", {
    get: function () {
      return this._targetBuilding;
    },
    enumerable: true,
    configurable: true
  });
  ARingMenuButton.prototype.addEventListeners = function () {};
  ARingMenuButton.prototype.removeEventListeners = function () {};
  ARingMenuButton.prototype.isOutOfTutorial = function () {
    return !a.CastleModel.tutorialData.isTutorialActive;
  };
  return ARingMenuButton;
}();
exports.ARingMenuButton = s;
var r = require("./17.js");
n.classImplementsInterfaces(s, "IRingMenuButton");