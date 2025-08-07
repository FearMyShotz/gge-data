Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function EventInstanceMapper() {}
  EventInstanceMapper.getEvent = function (e, t) {
    if (EventInstanceMapper._eventInstanceMap.get(e) == null) {
      EventInstanceMapper._eventInstanceMap.set(e, {});
    }
    if (EventInstanceMapper._eventInstanceMap.get(e)[t] == null) {
      EventInstanceMapper._eventInstanceMap.get(e)[t] = new e(t);
    }
    return EventInstanceMapper._eventInstanceMap.get(e)[t];
  };
  EventInstanceMapper.__initialize_static_members = function () {
    EventInstanceMapper._eventInstanceMap = new Map();
  };
  return EventInstanceMapper;
}();
exports.EventInstanceMapper = n;
n.__initialize_static_members();