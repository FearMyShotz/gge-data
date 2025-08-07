Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1296.js");
var a = require("./15.js");
var s = require("./11.js");
var r = require("./3.js");
var l = require("./8.js");
var c = require("./13.js");
var u = require("./20.js");
var d = require("./918.js");
var p = require("./4.js");
var h = require("./21.js");
var g = require("./23.js");
var C = require("./9.js");
var _ = require("./154.js");
var m = require("./201.js");
var f = require("./43.js");
var O = require("./2.js");
var E = function (e) {
  function CastleDeleteAccountDialog() {
    return e.call(this, CastleDeleteAccountDialog.NAME) || this;
  }
  n.__extends(CastleDeleteAccountDialog, e);
  CastleDeleteAccountDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    l.ButtonHelper.initButtons([this.dialogDisp.btn_right, this.dialogDisp.btn_left], u.ClickFeedbackButtonHover);
    this._ibtnLeft = this.textFieldManager.registerTextField(this.dialogDisp.btn_left.txt_label, new r.LocalizedTextVO(""));
    this._ibtnRight = this.textFieldManager.registerTextField(this.dialogDisp.btn_right.txt_label, new r.LocalizedTextVO(""));
    this._ibtnLeft.autoFitToBounds = true;
    this._ibtnRight.autoFitToBounds = true;
  };
  CastleDeleteAccountDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (p.CastleModel.deleteAccountData.isAccountDeletionStarted) {
      O.CommandController.instance.executeCommand(a.CastleBasicController.TRACK_ACCOUNT_DELETION_ACTION, [o.AccountDeletionTrackingEvent.ACCOUNT_DELETION_POPUP]);
    } else {
      O.CommandController.instance.executeCommand(a.CastleBasicController.TRACK_ACCOUNT_DELETION_ACTION, [o.AccountDeletionTrackingEvent.DELETION_INITIALIZATION]);
    }
    this.updateElements();
  };
  CastleDeleteAccountDialog.prototype.updateElements = function () {
    var e;
    var t;
    var i;
    var n;
    var o;
    if (p.CastleModel.deleteAccountData.isAccountDeletionStarted) {
      p.CastleModel.timerData.addEventListener(h.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimeUpdate));
      e = "dialog_deleteAccount_initiated_popup_title";
      t = "dialog_deleteAccount_initiated_popup_description";
      i = "abort";
      n = "close";
      this._mainActionButton = this.dialogDisp.btn_right;
      o = 3;
    } else {
      p.CastleModel.timerData.removeEventListener(h.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimeUpdate));
      e = "dialog_deleteAccount_confirmation_popup_title";
      t = "dialog_deleteAccount_confirmation_popup_description";
      i = "abort";
      n = "delete";
      this._mainActionButton = this.dialogDisp.btn_left;
      o = 5;
    }
    this.updateButtonLabels(n, i);
    l.ButtonHelper.enableButton(this._mainActionButton, false);
    g.TweenLite.delayedCall(o, this.bindFunction(this.enableDeleteButton));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO(c.TextHelper.toUpperCaseLocaSafeTextId(e)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO(t));
  };
  CastleDeleteAccountDialog.prototype.updateButtonLabels = function (e, t) {
    this._ibtnLeft.text = c.TextHelper.toUpperCaseLocaSafeTextId(e);
    this._ibtnRight.text = c.TextHelper.toUpperCaseLocaSafeTextId(t);
  };
  CastleDeleteAccountDialog.prototype.enableDeleteButton = function () {
    l.ButtonHelper.enableButton(this._mainActionButton, true);
  };
  CastleDeleteAccountDialog.prototype.updateRemainingTime = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO("dialog_deleteAccount_initiated_popup_description", [p.CastleModel.deleteAccountData.getDateForDelete()]));
  };
  CastleDeleteAccountDialog.prototype.onTimeUpdate = function (e = null) {
    if (p.CastleModel.deleteAccountData.isAccountDeletionStarted) {
      this.updateRemainingTime();
    } else {
      p.CastleModel.timerData.removeEventListener(h.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimeUpdate));
    }
  };
  CastleDeleteAccountDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (l.ButtonHelper.isButtonEnabled(t.target)) {
      if (t.target == this._mainActionButton) {
        if (p.CastleModel.deleteAccountData.isAccountDeletionStarted) {
          O.CommandController.instance.executeCommand(a.CastleBasicController.TRACK_ACCOUNT_DELETION_ACTION, [o.AccountDeletionTrackingEvent.ACCOUNT_DELETION_CANCEL]);
          this.abortDeletion();
        } else {
          O.CommandController.instance.executeCommand(a.CastleBasicController.TRACK_ACCOUNT_DELETION_ACTION, [o.AccountDeletionTrackingEvent.DELETION_INITIALIZATION_CONFIRM]);
          this.deleteAccount();
        }
      } else {
        if (p.CastleModel.deleteAccountData.isAccountDeletionStarted) {
          O.CommandController.instance.executeCommand(a.CastleBasicController.TRACK_ACCOUNT_DELETION_ACTION, [o.AccountDeletionTrackingEvent.ACCOUNT_DELETION_OK]);
        } else {
          O.CommandController.instance.executeCommand(a.CastleBasicController.TRACK_ACCOUNT_DELETION_ACTION, [o.AccountDeletionTrackingEvent.DELETION_INITIALIZATION_CANCEL]);
        }
        this.hide();
      }
    }
  };
  CastleDeleteAccountDialog.prototype.deleteAccount = function () {
    if (!p.CastleModel.deleteAccountData.isAccountDeletionStarted) {
      d.CastleDeleteAccountMicroservice.Instance.deleteAccount();
      this.showLoadingPanel();
    }
    this.hide();
  };
  CastleDeleteAccountDialog.prototype.abortDeletion = function () {
    if (p.CastleModel.deleteAccountData.isAccountDeletionStarted) {
      d.CastleDeleteAccountMicroservice.Instance.abortDeletion();
      this.showLoadingPanel();
    }
    this.hide();
  };
  CastleDeleteAccountDialog.prototype.showLoadingPanel = function () {
    C.CastleDialogHandler.getInstance().registerDialogsWithType(_.CastleExternalPreloaderDialog, new m.CastleExternalPreloaderDialogProperties(null), false, f.CastleDialogConsts.PRIORITY_TOP, 0, f.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
  };
  CastleDeleteAccountDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    p.CastleModel.timerData.removeEventListener(h.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimeUpdate));
  };
  CastleDeleteAccountDialog.__initialize_static_members = function () {
    CastleDeleteAccountDialog.NAME = "CastleDeleteAccount";
  };
  return CastleDeleteAccountDialog;
}(s.CastleExternalDialog);
exports.CastleDeleteAccountDialog = E;
E.__initialize_static_members();