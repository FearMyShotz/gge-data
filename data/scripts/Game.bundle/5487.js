Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./57.js");
var s = require("./5488.js");
var r = require("./1940.js");
var l = require("./15.js");
var c = require("./4.js");
var u = function (e) {
  function CastleNewServerAnnounceDialogProperties(t, i, n) {
    var o = this;
    o._zoneId = 0;
    o._webSiteId = 0;
    o._wodId = 0;
    o.onLinkReceived = new a.Signal();
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this)._zoneId = t;
    o._webSiteId = i;
    o._wodId = n;
    o._url = null;
    l.CastleBasicController.getInstance().addEventListener(r.LinkReceivedEvent.LINK_RECEIVED, o.bindFunction(o.handleLinkReceived));
    c.CastleModel.smartfoxClient.sendCommandVO(new s.C2SGetInstanceLink(t, i));
    return o;
  }
  n.__extends(CastleNewServerAnnounceDialogProperties, e);
  CastleNewServerAnnounceDialogProperties.prototype.handleLinkReceived = function (e) {
    this._url = e.url;
    this.onLinkReceived.dispatch();
  };
  Object.defineProperty(CastleNewServerAnnounceDialogProperties.prototype, "webSiteId", {
    get: function () {
      return this._webSiteId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNewServerAnnounceDialogProperties.prototype, "zoneId", {
    get: function () {
      return this._zoneId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNewServerAnnounceDialogProperties.prototype, "url", {
    get: function () {
      return this._url;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNewServerAnnounceDialogProperties.prototype, "wodId", {
    get: function () {
      return this._wodId;
    },
    enumerable: true,
    configurable: true
  });
  return CastleNewServerAnnounceDialogProperties;
}(o.BasicProperties);
exports.CastleNewServerAnnounceDialogProperties = u;