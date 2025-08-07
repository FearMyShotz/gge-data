Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ClientConstMessage() {}
  ClientConstMessage.isValidText = function (e) {
    if (!e || e == "") {
      return o.int(ClientConstMessage.TEXT_INVALID_MISSING_TEXT);
    }
    var t = 0;
    for (var i = o.int(e.length), n = 0; n < i; n++) {
      if (e.substr(n, 1).match(ClientConstMessage.EMPTY_PATTERN)) {
        t++;
      }
    }
    if (i == t) {
      return o.int(ClientConstMessage.TEXT_INVALID_MISSING_TEXT);
    } else if (i - t < ClientConstMessage.MINIMUM_LENGTH) {
      return o.int(ClientConstMessage.TEXT_INVALID_TEXT_TOO_SHORT);
    } else {
      return o.int(ClientConstMessage.TEXT_VALID);
    }
  };
  ClientConstMessage.__initialize_static_members = function () {
    ClientConstMessage.EMPTY_PATTERN = /\s+/;
    ClientConstMessage.DEFAULT_TEXT_LIMIT_COLOR = 15388850;
    ClientConstMessage.MINIMUM_LENGTH = 3;
    ClientConstMessage.TEXT_INVALID_MISSING_TEXT = 0;
    ClientConstMessage.TEXT_VALID = 1;
  };
  ClientConstMessage.TEXT_INVALID_TEXT_TOO_SHORT = -1;
  return ClientConstMessage;
}();
exports.ClientConstMessage = n;
var o = require("./6.js");
n.__initialize_static_members();