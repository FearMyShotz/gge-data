Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleIngameMessageHandler() {
    this._blockMessages = false;
    this.init();
    if (CastleIngameMessageHandler.messageHandler) {
      throw new Error("Calling constructor not allowed! Use getInstance instead.");
    }
  }
  CastleIngameMessageHandler.prototype.init = function () {
    this._messages = [];
  };
  CastleIngameMessageHandler.getInstance = function () {
    CastleIngameMessageHandler.messageHandler ||= new CastleIngameMessageHandler();
    return CastleIngameMessageHandler.messageHandler;
  };
  CastleIngameMessageHandler.prototype.registerMessage = function (e, t = null, i = true, n = CastleIngameMessageHandler.PRIORITY_LOW, o = 0) {
    var s = new a.BasicDialogVO();
    s.key = e;
    s.properties = t;
    s.blockDialogs = i;
    s.delay = o;
    s.priority = n;
    this._messages.push(s);
    r.VectorSortHelper.sort(this._messages, this.bindFunction(this.sortMessages));
  };
  CastleIngameMessageHandler.prototype.sortMessages = function (e, t) {
    if (e.priority > t.priority) {
      return -1;
    } else if (e.priority < t.priority) {
      return 1;
    } else {
      return 0;
    }
  };
  CastleIngameMessageHandler.prototype.showMessage = function (e = 0) {
    if (this.layoutManager.currentState == s.BasicLayoutManager.STATE_LOGIN) {
      this._messages = [];
    }
    if (this.layoutManager.isIngameState && this.isThereAMessage) {
      if (!this._blockMessages) {
        this._message = this._messages.shift();
        this._blockMessages = !!this._message.blockDialogs;
        this.layoutManager.showIngameMessage(this._message.key, this._message.properties);
      }
    }
  };
  CastleIngameMessageHandler.prototype.onHideCurrentMessage = function () {
    if (this._message) {
      this._message = null;
      this.blockMessages = false;
    }
  };
  Object.defineProperty(CastleIngameMessageHandler.prototype, "isThereAMessage", {
    get: function () {
      return this._messages.length > 0;
    },
    enumerable: true,
    configurable: true
  });
  CastleIngameMessageHandler.prototype.destroy = function () {
    this._messages = [];
  };
  Object.defineProperty(CastleIngameMessageHandler.prototype, "layoutManager", {
    get: function () {
      return o.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIngameMessageHandler.prototype, "blockMessages", {
    get: function () {
      return this._blockMessages;
    },
    set: function (e) {
      this._blockMessages = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleIngameMessageHandler.__initialize_static_members = function () {
    CastleIngameMessageHandler.PRIORITY_LOW = 1;
    CastleIngameMessageHandler.PRIORITY_MIDDLE = 2;
    CastleIngameMessageHandler.PRIORITY_HIGH = 3;
  };
  return CastleIngameMessageHandler;
}();
exports.CastleIngameMessageHandler = n;
var o = require("./17.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
n.__initialize_static_members();