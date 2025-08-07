Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./48.js");
var a = require("./35.js");
var s = function () {
  function CommandController() {
    this.commandMap = new Map();
    if (CommandController._instance) {
      throw new Error("this is a singleton. cannot instanciate more than once");
    }
  }
  Object.defineProperty(CommandController, "instance", {
    get: function () {
      CommandController._instance ||= new CommandController();
      return CommandController._instance;
    },
    enumerable: true,
    configurable: true
  });
  CommandController.prototype.registerCommand = function (e, t, n = null, i = false) {
    var a = this.commandMap.get(e);
    if (a) {
      a.removeAllReceiver();
    }
    a = new t();
    this.commandMap.set(e, a);
    a.singleExecution = i;
    if (n) {
      a.addReceiver(n);
    }
  };
  CommandController.prototype.addReceiverToCommand = function (e, t) {
    var n = this.commandMap.get(t);
    if (n) {
      n.addReceiver(e);
    } else {
      i.fatal("cannot add commandreceiver to non existing command");
    }
  };
  CommandController.prototype.removeReceiverFromCommand = function (e, t) {
    var n = this.commandMap.get(t);
    if (n) {
      n.removeReceiver(e);
    } else {
      i.fatal("cannot remove commandreceiver from non existing command");
    }
  };
  CommandController.prototype.executeCommand = function (e, t) {
    var n;
    if (t === undefined) {
      t = null;
    }
    if (this.commandMap.get(e)) {
      if ((n = this.commandMap.get(e)).executed && n.singleExecution) {
        var i = e + " was already executed";
        a.warn(i);
      } else {
        n.execute(t);
        for (var s = n.commandReceiver.length, r = 0; r < s; r++) {
          n.commandReceiver[r].handleCommand(e, t);
        }
        n.executed = true;
      }
    } else {
      a.warn(e + " has no instance in commandmap");
    }
  };
  CommandController.prototype.getExecFunctionFromCommand = function (e) {
    for (var t = 0, n = Array.from(this.commandMap.keys()); t < n.length; t++) {
      var a = n[t];
      if (e == a) {
        if (this.commandMap.get(a)) {
          return this.commandMap.get(a).execute;
        } else {
          i.fatal(e + "has no instance in commandmap");
          return null;
        }
      }
    }
    i.fatal(e + "unknown error while retrieving execute function from command");
    return null;
  };
  return CommandController;
}();
exports.CommandController = s;