Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./22.js");
var c = require("./1966.js");
var u = require("./79.js");
var d = function (e) {
  function FakeEventVO(t) {
    var i = this;
    i._eventBuildingWOD = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._eventId = t;
    i._eventType = "FakeEvent";
    return i;
  }
  n.__extends(FakeEventVO, e);
  FakeEventVO.prototype.parseEventXmlNode = function (e) {
    this._originalEventType = String(l.CastleXMLUtils.getValueOrDefault("eventType", e, "", true));
    this._eventType = "FakeEvent";
    this.setEventBuildingProperties();
  };
  FakeEventVO.prototype.setEventBuildingProperties = function () {
    var e = c.CastleSpecialEventFactory.createByEventType(this._originalEventType);
    if (!e || s.instanceOfClass(e, "ASeasonEventVO") || s.instanceOfClass(e, "PaymentrewardEventVO")) {
      this._eventBuildingNameID = "";
      this._eventBuildingWOD = 0;
    } else {
      this._eventBuildingNameID = e.eventBuildingNameId;
      this._eventBuildingWOD = e.eventBuildingWOD;
    }
  };
  Object.defineProperty(FakeEventVO.prototype, "eventId", {
    get: function () {
      return -Number.MAX_VALUE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.ASpecialEventVO.prototype, "eventId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FakeEventVO.prototype, "remainingEventTimeInSeconds", {
    get: function () {
      return 0;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.ASpecialEventVO.prototype, "remainingEventTimeInSeconds").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FakeEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return this._eventBuildingWOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FakeEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return this._eventBuildingNameID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FakeEventVO.prototype, "originalEventType", {
    get: function () {
      return this._originalEventType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FakeEventVO.prototype, "isAdditionalLibLoaded", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.ASpecialEventVO.prototype, "isAdditionalLibLoaded").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FakeEventVO.prototype, "isActive", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.ASpecialEventVO.prototype, "isActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FakeEventVO.prototype.openDialog = function (e = true) {
    this.executeOpenDialog(e, p.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("dialog_factionEventEnd_waiting_title"), r.Localize.text("dialog_factionEventEnd_waiting_copy")));
  };
  return FakeEventVO;
}(u.ASpecialEventVO);
exports.FakeEventVO = d;
var p = require("./38.js");
a.classImplementsInterfaces(d, "IEventOverviewable");