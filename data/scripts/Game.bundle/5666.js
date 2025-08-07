Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./22.js");
var a = function () {
  function XmlSeasonEventRewardVO() {
    this._id = 0;
    this._rewardSetId = 0;
    this._eventIDs = [];
    this._rankId = 0;
    this._rewardIds = [];
    this._needsSeasonPass = false;
  }
  XmlSeasonEventRewardVO.prototype.parseXml = function (e) {
    this._id = n.int(o.CastleXMLUtils.getIntAttribute("id", e, -1));
    this._rewardSetId = n.int(o.CastleXMLUtils.getIntAttribute("rewardSetID", e, -1));
    this._eventIDs = o.CastleXMLUtils.createIntListFromAttribute("eventIDs", e);
    this._rankId = n.int(o.CastleXMLUtils.getIntAttribute("rankID", e, -1));
    this._rewardIds = o.CastleXMLUtils.createIntListFromAttribute("rewardIDs", e);
    this._needsSeasonPass = o.CastleXMLUtils.getBooleanAttribute("needsSeasonPass", e, false);
  };
  Object.defineProperty(XmlSeasonEventRewardVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonEventRewardVO.prototype, "rewardSetId", {
    get: function () {
      return this._rewardSetId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonEventRewardVO.prototype, "eventIDs", {
    get: function () {
      return this._eventIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonEventRewardVO.prototype, "rankId", {
    get: function () {
      return this._rankId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonEventRewardVO.prototype, "rewardIds", {
    get: function () {
      return this._rewardIds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonEventRewardVO.prototype, "needsSeasonPass", {
    get: function () {
      return this._needsSeasonPass;
    },
    enumerable: true,
    configurable: true
  });
  return XmlSeasonEventRewardVO;
}();
exports.XmlSeasonEventRewardVO = a;