Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./308.js");
var a = require("./2.js");
var s = require("./3.js");
var r = a.getLogger("CoreJS.ExternalInterfaceController");
var o = function () {
  function ExternalInterfaceController() {
    this._javascriptFunctionCallDefaultFactory = new i.JavascriptCallDefaultFactory();
  }
  Object.defineProperty(ExternalInterfaceController, "instance", {
    get: function () {
      if (ExternalInterfaceController._externalInterfaceController == null) {
        ExternalInterfaceController._externalInterfaceController = new ExternalInterfaceController();
      }
      return ExternalInterfaceController._externalInterfaceController;
    },
    enumerable: true,
    configurable: true
  });
  ExternalInterfaceController.prototype.executeJavaScriptFunction = function (e) {
    if (typeof e == "string") {
      r.info("executing ExternalInterfaceCall from ExternalInterfaceController [Deprecated] " + e + " - TODO  check behaviour when a callback or return value is expected --> it is now ASYNC");
      return s.ExternalInterface.call(e);
    }
    var t = e.createVO();
    if (t) {
      r.info("executing ExternalInterfaceCall for " + t.functionName + " - TODO  check behaviour when a callback or return value is expected --> it is now ASYNC");
      return s.ExternalInterface.call.apply(s.ExternalInterface, [t.functionName].concat(t.parameters));
    }
    r.error("JavascriptFunctionCallVO is null");
  };
  ExternalInterfaceController.VERSION = "$Id$";
  ExternalInterfaceController.NAME = "ExternalInterfaceController";
  return ExternalInterfaceController;
}();
exports.ExternalInterfaceController = o;