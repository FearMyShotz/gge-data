Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Event;
var o = createjs.MouseEvent;
var a = function () {
  function Event2SignalController() {}
  Event2SignalController.add = function (e, t, i) {
    try {
      if (!Event2SignalController._eventDispatcherMap.get(e)) {
        Event2SignalController._eventDispatcherMap.set(e, {});
      }
      if (Event2SignalController._eventDispatcherMap.get(e)[t] == null) {
        Event2SignalController._eventDispatcherMap.get(e)[t] = new c.Signal();
      }
      Event2SignalController._eventDispatcherMap.get(e)[t].add(i);
    } catch (n) {
      u.warn("[Event2SignalController] [add]", e, t, i, n);
    }
  };
  Event2SignalController.hasEventListener = function (e, t) {
    return !!e && !!t && !!Event2SignalController._eventDispatcherMap && !!Event2SignalController._eventDispatcherMap.get(e) && !!Event2SignalController._eventDispatcherMap.get(e)[t];
  };
  Event2SignalController.dispatchSignal = function (e, t, i) {
    if (e && t && i && Event2SignalController._eventDispatcherMap && Event2SignalController._eventDispatcherMap.get(e) && Event2SignalController._eventDispatcherMap.get(e)[t]) {
      if (r.instanceOfClass(i, "CastleEvent")) {
        i.target = e;
      }
      Event2SignalController._eventDispatcherMap.get(e)[t].dispatch(i);
    }
  };
  Event2SignalController.remove = function (e, t, i) {
    try {
      if (Event2SignalController._eventDispatcherMap.get(e) && Event2SignalController._eventDispatcherMap.get(e)[t]) {
        Event2SignalController._eventDispatcherMap.get(e)[t].remove(i);
        if (Event2SignalController._eventDispatcherMap.get(e)[t].numListeners <= 0) {
          delete Event2SignalController._eventDispatcherMap.get(e)[t];
        }
        if (Object.keys(Event2SignalController._eventDispatcherMap.get(e)).length == 0) {
          Event2SignalController._eventDispatcherMap.delete(e);
        }
      }
    } catch (n) {
      u.warn("[Event2SignalController] [remove]", e, t, i, n);
    }
  };
  Event2SignalController.clear = function () {
    var e = Event2SignalController._eventDispatcherMap.get(s.CastleBasicController.getInstance());
    Event2SignalController._eventDispatcherMap.clear();
    Event2SignalController._eventDispatcherMap.set(s.CastleBasicController.getInstance(), e);
  };
  Event2SignalController.isNativeEvent = function (e) {
    var t = false;
    switch (e) {
      case n.INIT:
      case n.ADDED_TO_STAGE:
      case n.REMOVED_FROM_STAGE:
      case n.REMOVED:
      case n.ENTER_FRAME:
      case n.FRAME_CONSTRUCTED:
      case n.RENDER:
      case n.COMPLETE:
      case n.RESIZE:
      case o.CLICK:
      case o.MOUSE_DOWN:
      case o.MOUSE_MOVE:
      case o.MOUSE_OUT:
      case o.MOUSE_OVER:
      case o.MOUSE_UP:
      case o.MOUSE_WHEEL:
      case o.ROLL_OUT:
      case o.ROLL_OVER:
        t = true;
    }
    return t;
  };
  Event2SignalController.__initialize_static_members = function () {
    Event2SignalController._eventDispatcherMap = new Map();
  };
  Event2SignalController.LOGGER_NAME = "Event2SignalController";
  return Event2SignalController;
}();
exports.Event2SignalController = a;
var s = require("./15.js");
var r = require("./1.js");
var l = require("./116.js");
var c = require("./57.js");
a.__initialize_static_members();
var u = l.getLogger(a.LOGGER_NAME);