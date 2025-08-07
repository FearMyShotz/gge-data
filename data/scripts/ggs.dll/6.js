Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function SimpleCommand(e = false) {
    this._executed = false;
    this._singleExecution = false;
    this._commandReceiver = [];
    this._singleExecution = e;
  }
  Object.defineProperty(SimpleCommand.prototype, "executed", {
    get: function () {
      return this._executed;
    },
    set: function (e) {
      this._executed = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleCommand.prototype, "singleExecution", {
    get: function () {
      return this._singleExecution;
    },
    set: function (e) {
      this._singleExecution = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleCommand.prototype, "commandReceiver", {
    get: function () {
      return this._commandReceiver;
    },
    enumerable: true,
    configurable: true
  });
  SimpleCommand.prototype.execute = function (e = null) {};
  SimpleCommand.prototype.addReceiver = function (e) {
    this._commandReceiver.push(e);
  };
  SimpleCommand.prototype.removeReceiver = function (e) {
    for (var t = 0; t < this._commandReceiver.length; t++) {
      if (this._commandReceiver[t] == e) {
        this._commandReceiver.splice(t, 1);
      }
    }
  };
  SimpleCommand.prototype.removeAllReceiver = function () {
    for (var e = 0; e < this._commandReceiver.length; e++) {
      this._commandReceiver[e] = null;
    }
  };
  return SimpleCommand;
}();
exports.SimpleCommand = i;