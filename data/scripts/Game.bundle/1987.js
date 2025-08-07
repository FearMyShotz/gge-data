Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./1.js");
var a = require("./1988.js");
var s = require("./91.js");
var r = require("./15.js");
var l = require("./83.js");
var c = require("./9.js");
var u = require("./17.js");
var d = require("./736.js");
var p = require("./395.js");
var h = require("./376.js");
var g = require("./116.js");
var C = require("./1881.js");
var _ = require("./493.js");
var m = require("./372.js");
var f = require("./1104.js");
var O = require("./443.js");
var E = function () {
  function DialogBlocker() {}
  DialogBlocker.isAllowedToShowDialog = function (e, t) {
    if (typeof e == "string") {
      return true;
    }
    var i = false;
    if (DialogBlocker.DIALOG_TYPES_TO_BLOCK != null) {
      for (var n = 0, o = DialogBlocker.DIALOG_TYPES_TO_BLOCK; n < o.length; n++) {
        var s = o[n];
        if (s !== undefined && a.ClassHierarchyUtil.inheritsFrom(e, s)) {
          i = true;
        }
      }
    }
    return !i || !DialogBlocker.isBlockerDialogOpen || (DialogBlocker.delayDialogDisplay(e, t), false);
  };
  Object.defineProperty(DialogBlocker, "isBlockerDialogOpen", {
    get: function () {
      var e = u.CastleLayoutManager.getInstance().fix_dialogs;
      if (!e) {
        return false;
      }
      if (e != null) {
        for (var t = 0, i = Array.from(e.values()); t < i.length; t++) {
          var s = i[t];
          if (s !== undefined && s && s.isVisible() && DialogBlocker.DIALOGS_BLOCKING_OTHER_DIALOGS != null) {
            for (var r = 0, l = DialogBlocker.DIALOGS_BLOCKING_OTHER_DIALOGS; r < l.length; r++) {
              var c = l[r];
              if (c !== undefined && a.ClassHierarchyUtil.inheritsFrom(n.getDefinitionByName(o.getQualifiedClassName(s)), c)) {
                return true;
              }
            }
          }
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  DialogBlocker.delayDialogDisplay = function (e, t) {
    var i = new l.DialogInfoVO(e, t);
    DialogBlocker.queuedDialogs.push(i);
    DialogBlocker.controller.addEventListener(s.CastleLayoutManagerEvent.HIDE_DIALOG, DialogBlocker.onHideDialog);
  };
  DialogBlocker.onHideDialog = function (e) {
    if (!DialogBlocker.isBlockerDialogOpen && DialogBlocker.DIALOGS_BLOCKING_OTHER_DIALOGS != null) {
      for (var t = 0, i = DialogBlocker.DIALOGS_BLOCKING_OTHER_DIALOGS; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && a.ClassHierarchyUtil.inheritsFrom(e.params[0], n)) {
          if (DialogBlocker.queuedDialogs != null) {
            for (var o = 0, r = DialogBlocker.queuedDialogs; o < r.length; o++) {
              var l = r[o];
              if (l !== undefined) {
                c.CastleDialogHandler.getInstance().registerDialogs(l.dialogClass, l.properties);
              }
            }
          }
          DialogBlocker.controller.removeEventListener(s.CastleLayoutManagerEvent.HIDE_DIALOG, DialogBlocker.onHideDialog);
          DialogBlocker.queuedDialogs = [];
          return;
        }
      }
    }
  };
  Object.defineProperty(DialogBlocker, "controller", {
    get: function () {
      return r.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  DialogBlocker.__initialize_static_members = function () {
    DialogBlocker.DIALOG_TYPES_TO_BLOCK = [g.CastlePaymentRewardSpecialOfferDialog, _.CastleShoppingCartPrimeDayDialog, C.CastleTieredPrimeDayDialog, m.CastleAbstractPrimeSaleDialog];
    DialogBlocker.DIALOGS_BLOCKING_OTHER_DIALOGS = [h.CastleFightDialog, p.CastleStartAttackDialog, d.ACastlePostActionDialog, O.CastleSpyDialog, f.CastlePostSpyDialog];
  };
  DialogBlocker.queuedDialogs = [];
  return DialogBlocker;
}();
exports.DialogBlocker = E;
E.__initialize_static_members();