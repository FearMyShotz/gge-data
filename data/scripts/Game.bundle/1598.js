Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3120.js");
var l = require("./3121.js");
var c = require("./423.js");
var u = require("./3122.js");
var d = function (e) {
  function CastleUpgradeLaboratoryDialogProperties(t) {
    var i = e.call(this) || this;
    i._worldMapObjectVO = t;
    return i;
  }
  n.__extends(CastleUpgradeLaboratoryDialogProperties, e);
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "worldMapObjectVO", {
    get: function () {
      return this._worldMapObjectVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "bonusComponentClass", {
    get: function () {
      return u.LaboratoryBonusComponent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "updateEventType", {
    get: function () {
      return c.LaboratoryEvent.LABORATORY_UPDATED;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "resetEventType", {
    get: function () {
      return c.LaboratoryEvent.LABORATORY_RESET_WARNING;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "progressEventType", {
    get: function () {
      return l.CastleLaboratoryProgressEvent.NEW_PROGRESS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "progressCommandVO", {
    get: function () {
      return new r.C2SGetLaboratoryProgressVO(this.worldMapObjectVO.objectId);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "textErrorLostLandmark", {
    get: function () {
      return "error_laboratory_lostLaboratory";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "textTitle", {
    get: function () {
      return "dialog_laboratory_upgradeLaboratory_title";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "textUpgradeMax", {
    get: function () {
      return "dialog_laboratory_upgradeLaboratory_maximum_copy";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "textSendMax", {
    get: function () {
      return "dialog_laboratory_sendResources_maximum_copy";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "textUpgrade", {
    get: function () {
      return "dialog_laboratory_upgradeLaboratory_copy";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "textSend", {
    get: function () {
      return "dialog_laboratory_sendResources_copy";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "textSendMaxTooltip", {
    get: function () {
      return "dialog_laboratory_sendResources_maximum_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "textSendTooltip", {
    get: function () {
      return "dialog_laboratory_sendResources_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "textSendWoodStoneTooltip", {
    get: function () {
      return "dialog_laboratory_sendWoodStone_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "textHelp", {
    get: function () {
      return s.Localize.text("help_upgradeLaboratory");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "textProgressTooltip", {
    get: function () {
      return "dialog_laboratory_progressbar_requirements_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "textProgressTooltipMax", {
    get: function () {
      return "dialog_laboratory_progressbar_maximum_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  return CastleUpgradeLaboratoryDialogProperties;
}(o.BasicProperties);
exports.CastleUpgradeLaboratoryDialogProperties = d;
a.classImplementsInterfaces(d, "IUpgradeLandmarkDialogProperties");