Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CommandDelayController(e) {
    if (e == null) {
      throw new Error("do not instantiate, use getInstance()");
    }
    this.delayCommandVOs = [];
  }
  CommandDelayController.getInstance = function () {
    CommandDelayController.commandDelayController ||= new CommandDelayController(new o());
    return CommandDelayController.commandDelayController;
  };
  CommandDelayController.prototype.addDelayCommandID = function (e, t = true) {
    if (this.delayCommandVOs != null) {
      for (var i = 0, n = this.delayCommandVOs; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.commandID == e) {
          return;
        }
      }
    }
    this.delayCommandVOs.push(new s.CastleDelayCommandVO(e, t));
  };
  CommandDelayController.prototype.addDelayCommand = function (e, t, i) {
    this.getCommandVO(e).addCommand(t, i);
  };
  CommandDelayController.prototype.isDelayedCommand = function (e) {
    if (this.delayCommandVOs != null) {
      for (var t = 0, i = this.delayCommandVOs; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.commandID == e) {
          return true;
        }
      }
    }
    return false;
  };
  CommandDelayController.prototype.finishDelayOfCommand = function (e) {
    var t = this.getCommandVO(e);
    if (t) {
      this.executeCommand(t);
      this.destroyCommandVO(t);
    }
  };
  CommandDelayController.prototype.finishDelayOfAllCommands = function () {
    if (this.delayCommandVOs != null) {
      for (var e = 0, t = this.delayCommandVOs; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          this.executeCommand(i);
          i.commandList = null;
          i.paramList = null;
        }
      }
    }
    this.delayCommandVOs.splice(0, this.delayCommandVOs.length);
  };
  CommandDelayController.prototype.executeCommand = function (e) {
    var t = e.commandList;
    var i = e.paramList;
    var n = t.length;
    for (var o = a.int(n - 1); o > -1; o--) {
      var s = t.splice(o, 1)[0];
      var r = i.splice(o, 1)[0];
      s.exec(r);
    }
  };
  CommandDelayController.prototype.destroyCommandVO = function (e) {
    this.delayCommandVOs.splice(this.delayCommandVOs.indexOf(e), 1);
    e.commandList = null;
    e.paramList = null;
  };
  CommandDelayController.prototype.getCommandVO = function (e) {
    if (this.delayCommandVOs != null) {
      for (var t = 0, i = this.delayCommandVOs; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.commandID == e) {
          return n;
        }
      }
    }
    return null;
  };
  return CommandDelayController;
}();
exports.CommandDelayController = n;
var o = function () {
  return function SingletonBlocker() {};
}();
exports.SingletonBlocker = o;
var a = require("./6.js");
var s = require("./2307.js");