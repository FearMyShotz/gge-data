Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./1.js");
var u = require("./5.js");
var d = require("./15.js");
var p = require("./4.js");
var h = require("./515.js");
var g = function (e) {
  function CastleCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleCommand, e);
  Object.defineProperty(CastleCommand.prototype, "env", {
    get: function () {
      return r.EnvGlobalsHandler.globals;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(o.BasicCommand.prototype, "env").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleCommand.prototype.executeCommand = function (e, t) {
    if (this.delayCommandController.isDelayedCommand(this.cmdId)) {
      this.delayCommandController.addDelayCommand(this.cmdId, this, [e, t]);
    } else {
      this.exec([e, t]);
    }
    return false;
  };
  CastleCommand.prototype.exec = function (e) {
    throw new Error("method needs to be overriden");
  };
  CastleCommand.prototype.showErrorDialog = function (e, t) {
    if (p.CastleModel.tutorialData.isTutorialActive) {
      switch (e) {
        case u.ERROR.INVALID_OBJECT_ID:
          return;
      }
    } else {
      s.CommandController.instance.executeCommand(a.BasicController.COMMAND_HANDLE_SERVER_ERROR, new l.ServerErrorVO(e, t, this.cmdId));
    }
  };
  Object.defineProperty(CastleCommand.prototype, "controller", {
    get: function () {
      return d.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCommand.prototype, "layoutManager", {
    get: function () {
      return C.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCommand.prototype, "delayCommandController", {
    get: function () {
      return h.CommandDelayController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleCommand;
}(o.BasicCommand);
exports.CastleCommand = g;
var C = require("./17.js");
c.classImplementsInterfaces(g, "IExecCommand");