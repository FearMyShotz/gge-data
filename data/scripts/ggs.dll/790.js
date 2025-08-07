Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./5.js");
var s = require("./6.js");
var r = createjs.Container;
var o = function (e) {
  function BasicInitLoggerCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicInitLoggerCommand, e);
  BasicInitLoggerCommand.prototype.execute = function (e = null) {
    if (e && e instanceof r) {
      this.stage = e;
    }
    this.configureCoreLogChannels();
    this.configureLogger();
    if (this.env.urlVariables.forceToShowLogger || this.env.isLocal || this.env.isTest) {
      this.enableLogger = true;
    } else {
      this.enableLogger = false;
    }
  };
  BasicInitLoggerCommand.prototype.configureCoreLogChannels = function () {};
  BasicInitLoggerCommand.prototype.configureLogger = function () {};
  Object.defineProperty(BasicInitLoggerCommand.prototype, "enableLogger", {
    set: function (e) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicInitLoggerCommand.prototype, "env", {
    get: function () {
      return a.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return BasicInitLoggerCommand;
}(s.SimpleCommand);
exports.BasicInitLoggerCommand = o;