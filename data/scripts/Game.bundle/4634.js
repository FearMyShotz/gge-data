Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1926.js");
var l = function (e) {
  function CastleInitalizeControllerCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleInitalizeControllerCommand, e);
  CastleInitalizeControllerCommand.prototype.initializeGameControllers = function () {
    a.info("Initialize controllers");
    this.layoutManager.onStartProgressbar();
    if (!o.BasicController.getInstance().soundController) {
      this.initSoundController(new r.CastleSoundController());
    }
  };
  Object.defineProperty(CastleInitalizeControllerCommand.prototype, "layoutManager", {
    get: function () {
      return c.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleInitalizeControllerCommand;
}(o.BasicInitalizeControllerCommand);
exports.CastleInitalizeControllerCommand = l;
var c = require("./17.js");
s.classImplementsInterfaces(l, "ISimpleCommand");