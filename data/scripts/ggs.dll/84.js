Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./367.js");
var a = require("./25.js");
var s = require("./368.js");
var r = function () {
  function BasicDialogHandler() {
    this._blockDialogs = false;
    this.init();
    if (BasicDialogHandler.dialogHandler) {
      throw new Error("Calling constructor not allowed! Use getInstance instead.");
    }
  }
  BasicDialogHandler.prototype.init = function () {
    this._dialogs = [];
  };
  BasicDialogHandler.getInstance = function () {
    BasicDialogHandler.dialogHandler ||= new BasicDialogHandler();
    return BasicDialogHandler.dialogHandler;
  };
  BasicDialogHandler.prototype.registerDialogs = function (e, t = null, n = false, a = BasicDialogHandler.PRIORITY_LOW, r = 0) {
    var o = new s.BasicDialogVO();
    o.key = e;
    o.properties = t;
    o.blockDialogs = n;
    o.delay = r;
    o.priority = a;
    this._dialogs.push(o);
    i.VectorSortHelper.sort(this._dialogs, this.sortDialogs);
  };
  BasicDialogHandler.prototype.sortDialogs = function (e, t) {
    if (e.priority > t.priority) {
      return -1;
    } else if (e.priority < t.priority) {
      return 1;
    } else {
      return 0;
    }
  };
  BasicDialogHandler.prototype.forceShowDialog = function (e) {
    if (this.isThereADialog) {
      for (var t = 0, n = this._dialogs; t < n.length; t++) {
        if (n[t].key === e) {
          this._dialog = this._dialogs.shift();
          this._blockDialogs = this._blockDialogs || this._dialog.blockDialogs;
          this.layoutManager.showDialog(this._dialog.key, this._dialog.properties);
        }
      }
    }
  };
  BasicDialogHandler.prototype.showDialog = function (e = 0) {
    if (this.isThereADialog) {
      if (!this._blockDialogs) {
        this.performDialogDisplay();
      }
    }
  };
  BasicDialogHandler.prototype.performDialogDisplay = function () {
    this._dialog = this._dialogs.shift();
    this._blockDialogs = this._dialog.blockDialogs;
    this.layoutManager.showDialog(this._dialog.key, this._dialog.properties);
  };
  BasicDialogHandler.prototype.onHideCurrentDialog = function () {
    if (this._dialog) {
      this._dialog = null;
      this.blockDialogs = false;
    }
  };
  BasicDialogHandler.prototype.removeDialog = function (e) {
    for (var t = 0; t < this._dialogs.length; t++) {
      if (this._dialogs[t].key === e) {
        this._dialogs.splice(t, 1);
        t = -1;
      }
    }
  };
  BasicDialogHandler.prototype.isDialogRegistered = function (e) {
    for (var t = 0; t < this._dialogs.length; t++) {
      if (this._dialogs[t].key === e) {
        return true;
      }
    }
    return false;
  };
  Object.defineProperty(BasicDialogHandler.prototype, "isThereADialog", {
    get: function () {
      return this._dialogs.length > 0;
    },
    enumerable: true,
    configurable: true
  });
  BasicDialogHandler.prototype.destroy = function () {
    this._dialogs = [];
  };
  Object.defineProperty(BasicDialogHandler.prototype, "layoutManager", {
    get: function () {
      return a.BasicLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicDialogHandler.prototype, "blockDialogs", {
    get: function () {
      return this._blockDialogs;
    },
    set: function (e) {
      this._blockDialogs = e;
    },
    enumerable: true,
    configurable: true
  });
  BasicDialogHandler.PRIORITY_LOW = 1;
  BasicDialogHandler.PRIORITY_MIDDLE = 2;
  BasicDialogHandler.PRIORITY_HIGH = 3;
  BasicDialogHandler.PRIORITY_TOP = 4;
  return BasicDialogHandler;
}();
exports.BasicDialogHandler = r;