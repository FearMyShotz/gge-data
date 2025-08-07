Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./6.js");
var u = require("./43.js");
var d = require("./1987.js");
var p = function (e) {
  function CastleDialogHandler() {
    var t = e.call(this) || this;
    if (o.BasicDialogHandler.dialogHandler) {
      throw new Error("Calling constructor not allowed! Use getInstance instead.");
    }
    return t;
  }
  n.__extends(CastleDialogHandler, e);
  CastleDialogHandler.prototype.init = function () {
    this._dialogsRegistered = [];
    this._dialogsDisplayed = [];
    this.initDialogsBehavior();
  };
  CastleDialogHandler.prototype.initDialogsBehavior = function () {
    this._dialogsBehavior = new Map();
    this._dialogsBehavior.set(u.CastleDialogConsts.DIALOG_TYPE_DEFAULT, new h.CastleDefaultDialogBehavior());
    this._dialogsBehavior.set(u.CastleDialogConsts.DIALOG_TYPE_MODAL, new C.CastleModalDialogBehavior());
    this._dialogsBehavior.set(u.CastleDialogConsts.DIALOG_TYPE_PRELOADER, new f.CastlePreloaderDialogBehavior());
    this._dialogsBehavior.set(u.CastleDialogConsts.DIALOG_TYPE_SINGLE, new O.CastleSingleDialogBehavior());
    this._dialogsBehavior.set(u.CastleDialogConsts.DIALOG_TYPE_MODAL_SINGLE, new _.CastleModalSingleDialogBehavior());
    this._dialogsBehavior.set(u.CastleDialogConsts.DIALOG_TYPE_LOGIN, new g.CastleLoginDialogBehavior());
    this._dialogsBehavior.set(u.CastleDialogConsts.DIALOG_TYPE_SINGLE_INSTANCE, new E.SingleInstanceDialogBehavior());
    var e = new m.CastlePaymentDialogBehavior();
    this._dialogsBehavior.set(u.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIVATE_PRIME_TIME, e);
    this._dialogsBehavior.set(u.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_TIME, e);
    this._dialogsBehavior.set(u.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIVATE_PRIME_DAY, e);
    this._dialogsBehavior.set(u.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_DAY, e);
    this._dialogsBehavior.set(u.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIVATE_PRIME_SALE, e);
    this._dialogsBehavior.set(u.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_SALE, e);
    this._dialogsBehavior.set(u.CastleDialogConsts.DIALOG_TYPE_PAYMENT_DEFAULT, e);
  };
  CastleDialogHandler.getInstance = function () {
    o.BasicDialogHandler.dialogHandler ||= new CastleDialogHandler();
    if (o.BasicDialogHandler.dialogHandler instanceof CastleDialogHandler) {
      return o.BasicDialogHandler.dialogHandler;
    } else {
      return null;
    }
  };
  CastleDialogHandler.prototype.registerDialogsWithType = function (e, t = null, n = false, o = c.int(u.CastleDialogConsts.PRIORITY_LOW), a = 0, r = c.int(u.CastleDialogConsts.DIALOG_TYPE_DEFAULT)) {
    if (require("./1988.js").DialogBlocker.isAllowedToShowDialog(e, t)) {
      if (r == u.CastleDialogConsts.DIALOG_TYPE_DEFAULT && typeof e == "function" && e.hasOwnProperty("DEFAULT_BEHAVIOR")) {
        r = c.int(e.DEFAULT_BEHAVIOR);
      }
      var p = new d.CastleDialogVO();
      p.key = e;
      p.properties = t;
      p.blockDialogs = n;
      p.delay = a;
      p.priority = o;
      p.type = r;
      if (this._dialogsBehavior.get(p.type).checkRegisterBehavior(p, this._dialogsRegistered, this._dialogsDisplayed)) {
        if (this._dialogsBehavior.get(p.type).checkRemoveDisplayedWhenRegisterBehavior() && l.instanceOfClass(this.layoutManager, "CastleLayoutManager")) {
          this.layoutManager.hideDialogWithDialogKey(p.key);
        }
        this._dialogsRegistered.push(p);
        s.VectorSortHelper.sort(this._dialogsRegistered, this.bindFunction(this.sortCastleDialogs));
      }
    }
  };
  CastleDialogHandler.prototype.registerDialogs = function (e, t = null, i = false, n = c.int(u.CastleDialogConsts.PRIORITY_LOW), o = 0) {
    this.registerDialogsWithType(e, t, i, n, o, u.CastleDialogConsts.DIALOG_TYPE_LOGIN);
  };
  CastleDialogHandler.prototype.registerDefaultDialogs = function (e, t = null, i = false, n = c.int(u.CastleDialogConsts.PRIORITY_LOW), o = 0) {
    this.registerDialogsWithType(e, t, i, n, o, u.CastleDialogConsts.DIALOG_TYPE_DEFAULT);
  };
  CastleDialogHandler.prototype.registerDialogsWithTypeAndDefaultValues = function (e, t = null, i = c.int(u.CastleDialogConsts.DIALOG_TYPE_DEFAULT)) {
    this.registerDialogsWithType(e, t, false, u.CastleDialogConsts.PRIORITY_LOW, 0, i);
  };
  CastleDialogHandler.prototype.sortCastleDialogs = function (e, t) {
    if (e.priority > t.priority) {
      return -1;
    } else if (e.priority < t.priority) {
      return 1;
    } else {
      return 0;
    }
  };
  CastleDialogHandler.prototype.forceShowDialog = function (e) {
    if (this.isThereADialog && this._dialogsRegistered != null) {
      for (var t = 0, i = this._dialogsRegistered; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.key == e) {
          r.debug("Using CastleDialogHandlerForcedShowDialog");
          this._forcedDialog = this._dialogsRegistered.shift();
          this.blockDialogs = this.blockDialogs || this._forcedDialog.blockDialogs;
          this._dialogsDisplayed.push(this._forcedDialog);
          this.layoutManager.showDialog(this._forcedDialog.key, this._forcedDialog.properties, null);
        }
      }
    }
  };
  CastleDialogHandler.prototype.showDialog = function (e = 0) {
    if (this.isThereADialog) {
      this.performDialogDisplay();
    }
  };
  CastleDialogHandler.prototype.showHelper = function (e, t, i = null) {
    CastleDialogHandler.getInstance().registerDialogsWithType(y.CastleHelperDialog, new a.BasicStandardOkDialogProperties(e, t, i), false, u.CastleDialogConsts.PRIORITY_LOW, 0, u.CastleDialogConsts.DIALOG_TYPE_MODAL);
  };
  CastleDialogHandler.prototype.performDialogDisplay = function () {
    for (var e = 0; e < this._dialogsRegistered.length;) {
      var t = this._dialogsRegistered[e];
      if (this._dialogsBehavior.get(t.type).checkDisplayBehavior(t, this._dialogsRegistered, this._dialogsDisplayed, e, this.blockDialogs)) {
        this._dialogVO = t;
        this._dialogsRegistered.splice(e, 1);
        if (this._dialogsBehavior.get(this._dialogVO.type).canModifyBlockDialogs()) {
          this.blockDialogs = this._dialogVO.blockDialogs;
        }
        this._dialogsDisplayed.push(this._dialogVO);
        this.layoutManager.showDialog(this._dialogVO.key, this._dialogVO.properties, null);
        console.log("Show Dialog: key = " + this._dialogVO.key.name + ", type = " + this._dialogVO.type);
        return;
      }
      e++;
    }
  };
  CastleDialogHandler.prototype.removeDialog = function (e) {
    if (e) {
      var t;
      var i = -1;
      for (var n = c.int(this._dialogsRegistered.length), o = 0; o < n; o++) {
        if ((t = this._dialogsRegistered[o]).key == e) {
          i = t.type;
          break;
        }
      }
      if (i != -1 && this._dialogsBehavior.get(i).checkRemoveRegisteredWhenHideBehavior()) {
        for (var a = c.int(this._dialogsRegistered.length - 1); a >= 0; a--) {
          if (this._dialogsRegistered[a].key == e) {
            this._dialogsRegistered.splice(a, 1);
          }
        }
      }
    }
  };
  CastleDialogHandler.prototype.clearAllRegisteredDialogs = function () {
    this._dialogsRegistered.length = 0;
    this._dialogsRegistered = [];
  };
  CastleDialogHandler.prototype.removeDisplayedDialogFromList = function (e) {
    if (!e) {
      return false;
    }
    var t;
    for (var i = c.int(this._dialogsDisplayed.length - 1); i >= 0; i--) {
      if (this._dialogsDisplayed[i].key == e) {
        t = this._dialogsDisplayed[i];
        if (this._dialogsBehavior.get(t.type).canModifyBlockDialogs()) {
          this.blockDialogs = false;
        }
        t = null;
        this._dialogsDisplayed.splice(i, 1);
        return true;
      }
    }
    return false;
  };
  CastleDialogHandler.prototype.isDialogRegistered = function (e) {
    for (var t = 0; t < this._dialogsRegistered.length; t++) {
      if (this._dialogsRegistered[t].key == e) {
        return true;
      }
    }
    return false;
  };
  Object.defineProperty(CastleDialogHandler.prototype, "isThereADialog", {
    get: function () {
      return this._dialogsRegistered.length > 0;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(o.BasicDialogHandler.prototype, "isThereADialog").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDialogHandler.prototype, "isDisplayingAnyDialog", {
    get: function () {
      return this._dialogsDisplayed && this._dialogsDisplayed.length > 0;
    },
    enumerable: true,
    configurable: true
  });
  CastleDialogHandler.prototype.destroy = function () {
    this._dialogsRegistered = [];
  };
  CastleDialogHandler.prototype.onHideCurrentDialog = function () {
    if (this._forcedDialog) {
      this.removeDisplayedDialogFromList(this._forcedDialog.key);
      this._forcedDialog = null;
      this.blockDialogs = false;
    }
  };
  return CastleDialogHandler;
}(o.BasicDialogHandler);
exports.CastleDialogHandler = p;
var h = require("./4215.js");
var g = require("./4216.js");
var C = require("./4217.js");
var _ = require("./4218.js");
var m = require("./4219.js");
var f = require("./4220.js");
var O = require("./4221.js");
var E = require("./4222.js");
var y = require("./4223.js");