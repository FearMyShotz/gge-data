Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./51.js");
var u = require("./29.js");
var d = require("./9.js");
var p = require("./1142.js");
var h = require("./4.js");
var g = function (e) {
  function DonationEventEventVO() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(DonationEventEventVO, e);
  DonationEventEventVO.prototype.parseParamObject = function (e) {
    this._settingID = e.DSI;
    this._settingVO = h.CastleModel.donationEventData.getSettingVOByID(this._settingID);
    this._leaderBoardRewardSetID = e.LRSI;
  };
  Object.defineProperty(DonationEventEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return 2899;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_DonationEvent";
    },
    enumerable: true,
    configurable: true
  });
  DonationEventEventVO.prototype.openDialog = function (e = true) {
    var t = this.getEventTeaserMessageVO();
    if (t && !t.read) {
      o.CommandController.instance.executeCommand(u.IngameClientCommands.OPEN_MESSAGE_DIALOG_COMMAND, t);
    } else {
      d.CastleDialogHandler.getInstance().registerDialogs(p.DonationEventDialog);
    }
  };
  DonationEventEventVO.prototype.executeOpenDialog = function (e, t, i = null) {
    d.CastleDialogHandler.getInstance().registerDefaultDialogs(p.DonationEventDialog);
  };
  Object.defineProperty(DonationEventEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return c.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_ARCHITECT;
    },
    enumerable: true,
    configurable: true
  });
  DonationEventEventVO.prototype.getEventTeaserMessageVO = function () {
    for (var e = 0, t = h.CastleModel.messageData.incomingMails; e < t.length; e++) {
      var i = t[e];
      if (i !== undefined && a.instanceOfClass(i, "MessageSpecialEventVO")) {
        var n = i;
        if (n && n.subtypeEvent == l.MessageConst.SPECIAL_ID_SPECIAL_EVENT_START && n.additionalInformation[0] == r.EventConst.EVENTTYPE_DONATION) {
          return n;
        }
      }
    }
    return null;
  };
  Object.defineProperty(DonationEventEventVO.prototype, "settingVO", {
    get: function () {
      return this._settingVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventEventVO.prototype, "leaderBoardRewardSetID", {
    get: function () {
      return this._leaderBoardRewardSetID;
    },
    enumerable: true,
    configurable: true
  });
  return DonationEventEventVO;
}(require("./79.js").ASpecialEventVO);
exports.DonationEventEventVO = g;
s.classImplementsInterfaces(g, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");