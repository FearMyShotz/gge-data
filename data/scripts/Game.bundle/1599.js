Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3123.js");
var l = require("./1043.js");
var c = require("./580.js");
var u = require("./3124.js");
var d = function (e) {
  function CastleUpgradeLandmarkDialogProperties(t) {
    var i = e.call(this) || this;
    i._worldMapObjectVO = t;
    return i;
  }
  n.__extends(CastleUpgradeLandmarkDialogProperties, e);
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "worldMapObjectVO", {
    get: function () {
      return this._worldMapObjectVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "bonusComponentClass", {
    get: function () {
      return u.MonumentBonusComponent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "updateEventType", {
    get: function () {
      return c.MonumentEvent.MONUMENT_UPDATED;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "resetEventType", {
    get: function () {
      return c.MonumentEvent.MONUMENTS_RESET_WARNING;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "progressEventType", {
    get: function () {
      return l.CastleMonumentProgressEvent.NEW_PROGRESS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "progressCommandVO", {
    get: function () {
      return new r.C2SGetMonumentProgress(this.worldMapObjectVO.objectId);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "textErrorLostLandmark", {
    get: function () {
      return "error_monument_lostMonument";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "textTitle", {
    get: function () {
      return "dialog_monument_upgradeMonument_title";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "textUpgradeMax", {
    get: function () {
      return "dialog_monument_upgradeMonument_maximum_copy";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "textSendMax", {
    get: function () {
      return "dialog_monument_sendResources_maximum_copy";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "textUpgrade", {
    get: function () {
      return "dialog_monument_upgradeMonument_copy";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "textSend", {
    get: function () {
      return "dialog_monument_sendResources_copy";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "textSendMaxTooltip", {
    get: function () {
      return "dialog_monument_sendResources_maximum_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "textSendTooltip", {
    get: function () {
      return "dialog_monument_sendResources_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "textSendWoodStoneTooltip", {
    get: function () {
      return "dialog_monument_sendWoodStone_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "textHelp", {
    get: function () {
      return s.Localize.text("help_upgradeMonument");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "textProgressTooltip", {
    get: function () {
      return "dialog_monument_progressbar_requirements_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "textProgressTooltipMax", {
    get: function () {
      return "dialog_monument_progressbar_maximum_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  return CastleUpgradeLandmarkDialogProperties;
}(o.BasicProperties);
exports.CastleUpgradeLandmarkDialogProperties = d;
a.classImplementsInterfaces(d, "IUpgradeLandmarkDialogProperties");