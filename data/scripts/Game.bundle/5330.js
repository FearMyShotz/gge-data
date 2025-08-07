Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./60.js");
var s = require("./26.js");
var r = require("./4.js");
var l = function () {
  function OfferDescriptionVisualHideEvent() {
    this._eventIDs = [];
  }
  Object.defineProperty(OfferDescriptionVisualHideEvent.prototype, "name", {
    get: function () {
      return a.ClientConstOffer.OFFER_VISUAL_HIDE_EVENT;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualHideEvent.prototype.registerVisualParameter = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionVisualHideEvent.prototype.parseFromObjectParam = function (e) {
    if (e.EIDS) {
      for (var t = e.EIDS, i = 0; i < t.length; ++i) {
        this._eventIDs.push(t[i]);
      }
    } else {
      this._eventIDs = [];
    }
  };
  OfferDescriptionVisualHideEvent.prototype.execute = function (e) {
    if (this._eventIDs.length > 0 && c.Iso.data) {
      c.Iso.controller.dataUpdater.updateEventBuildings();
    }
    var t = r.CastleModel.privateOfferData.getListOfHiddenEvents();
    for (var i = 0; i < this._eventIDs.length; i++) {
      var o = r.CastleModel.specialEventData.getActiveEventByEventId(this._eventIDs[i]);
      if (o) {
        var a = false;
        if (t != null) {
          for (var l = 0, d = t; l < d.length; l++) {
            var p = d[l];
            if (p !== undefined && p == o.eventId) {
              a = true;
            }
          }
        }
        r.CastleModel.specialEventData.dispatchEvent(new s.CastleSpecialEventEvent(s.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, o));
        if (!a) {
          if (o.openWithLogin) {
            n.CommandController.instance.executeCommand(u.IngameClientCommands.OPEN_EVENT_DIALOG_COMMAND, [o, false]);
          }
          r.CastleModel.specialEventData.updateEvents();
        }
      }
    }
    return true;
  };
  OfferDescriptionVisualHideEvent.prototype.toExecuteInState = function (e) {
    return true;
  };
  Object.defineProperty(OfferDescriptionVisualHideEvent.prototype, "eventIDs", {
    get: function () {
      return this._eventIDs;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionVisualHideEvent;
}();
exports.OfferDescriptionVisualHideEvent = l;
var c = require("./34.js");
var u = require("./29.js");
o.classImplementsInterfaces(l, "IOfferDescriptionVisualParameter");