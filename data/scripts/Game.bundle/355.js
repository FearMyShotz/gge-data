Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MovieClip;
var o = function () {
  function EventIconHelper() {}
  Object.defineProperty(EventIconHelper, "asset", {
    get: function () {
      if (l.isUndefined(this._asset)) {
        this._asset = new c.CastleGoodgameExternalClip(EventIconHelper.ITEM_CLASS_NAME, a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(EventIconHelper.ASSET_NAME), null, 0, false);
      }
      return this._asset;
    },
    enumerable: true,
    configurable: true
  });
  EventIconHelper.staticInit = function () {
    if (!EventIconHelper.wasStaticInitCalled) {
      EventIconHelper.wasStaticInitCalled = true;
      if (EventIconHelper.asset.isLoaded) {
        EventIconHelper.loadingComplete(EventIconHelper.asset);
      } else {
        EventIconHelper.asset.clipLoaded.addOnce(EventIconHelper.loadingComplete);
      }
    }
  };
  EventIconHelper.loadingComplete = function (e) {
    EventIconHelper._isInitialized = true;
    EventIconHelper.fillQueuedRequests();
  };
  EventIconHelper.fillQueuedRequests = function () {
    var e;
    if (EventIconHelper._queue != null) {
      for (var t = 0, i = EventIconHelper._queue; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          e = EventIconHelper.createIcon(n.eventID, n.isAlliance);
          s.MovieClipHelper.scaleToFit(e, n.size.x, n.size.y);
          n.iconMC.addChild(e);
        }
      }
    }
    EventIconHelper._queue.length = 0;
  };
  EventIconHelper.createIcon = function (e, t, i = null) {
    var n;
    var o = t ? "_alliance" : "";
    try {
      n = new (r.getDefinitionByName("eventIcon_" + e + o))();
    } catch (e) {
      n = new (r.getDefinitionByName("eventIcon_0"))();
    }
    if (i) {
      n.scaleX = n.scaleY = n.height = Math.min(i.y / n.height, i.x / n.width);
    }
    return n;
  };
  EventIconHelper.createEventIconByEventID = function (e, t, i) {
    var o;
    if (i === undefined) {
      i = false;
    }
    EventIconHelper.staticInit();
    if (EventIconHelper._isInitialized) {
      o = EventIconHelper.createIcon(e, i, t);
    } else {
      o = new n();
      var a = new u(e, o, t, i);
      EventIconHelper._queue.push(a);
    }
    return o;
  };
  EventIconHelper._queue = [];
  EventIconHelper._isInitialized = false;
  EventIconHelper.ASSET_NAME = "EventIcons";
  EventIconHelper.ITEM_CLASS_NAME = "eventIcon_0";
  EventIconHelper.wasStaticInitCalled = false;
  return EventIconHelper;
}();
exports.EventIconHelper = o;
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./228.js");
var c = require("./24.js");
var u = function () {
  return function QueueItem(e, t, i, n) {
    this.eventID = 0;
    this.isAlliance = false;
    this.eventID = e;
    this.iconMC = t;
    this.size = i;
    this.isAlliance = n;
  };
}();