Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function BasicReconnectDialogProperties(t, n, i = null, a = "Try again") {
    var s = e.call(this) || this;
    s.buttonLabel_reconnect = "Try again";
    s.copy = "";
    s.title = "";
    s.functionReconnect = i;
    s.buttonLabel_reconnect = a;
    s.title = t;
    s.copy = n;
    return s;
  }
  i.__extends(BasicReconnectDialogProperties, e);
  return BasicReconnectDialogProperties;
}(require("./79.js").BasicProperties);
exports.BasicReconnectDialogProperties = a;