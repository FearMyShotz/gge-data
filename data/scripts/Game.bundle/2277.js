Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./2278.js");
var u = require("./32.js");
var d = require("./44.js");
var p = require("./4.js");
var h = require("./280.js");
var g = require("./163.js");
var C = require("./1294.js");
var _ = require("./2279.js");
var m = require("./916.js");
var f = require("./2281.js");
var O = require("./2282.js");
var E = require("./2284.js");
var y = require("./2288.js");
var b = require("./2292.js");
var D = require("./2294.js");
var I = require("./2295.js");
var T = require("./2297.js");
var v = require("./9.js");
var S = require("./2298.js");
var A = require("./37.js");
var L = require("./14.js");
var P = require("./1.js");
var M = require("./1299.js");
var R = require("./2300.js");
var V = function (e) {
  function OptionsDialogAccountDetails(t) {
    var i = e.call(this) || this;
    i._items = [];
    i._showNewsletter = t;
    return i;
  }
  n.__extends(OptionsDialogAccountDetails, e);
  OptionsDialogAccountDetails.prototype.createItems = function () {
    var e = this;
    this._nameInfoItem = new m.OptionsDialogAccountInfoItem(l.Localize.text("dialog_options_accountManagement_playerName_title"), OptionsDialogAccountDetails.ITEM_PROPERTIES_ACCOUNT_INFO, this.bindFunction(this.onEditName));
    var t = o.EnvGlobalsHandler.globals;
    this._nameInfoItem.showActionButton(!t.isOnTemporaryServer && !t.isOnAllianceBattleGroundServer);
    this._accountIdInfoItem = new R.OptionsDialogAccountIdInfoItem(l.Localize.text("dialog_options_accountManagement_accountID_title"), OptionsDialogAccountDetails.ITEM_PROPERTIES_ACCOUNT_INFO, this.bindFunction(this.onCopyInfo), p.CastleModel.playerEmailData.isMailState_Verified);
    this._accountIdInfoItem.showActionButton(p.CastleModel.playerEmailData.isMailState_Verified, 3);
    this._accountIdInfoItem.setActionButtonToolTipText("dialog_options_accountDetails_copy_tooltip");
    M.CastleWebShopAccountIDMicroservice.Instance.onAccountIdRetrievedSignal.removeAll();
    if (p.CastleModel.playerEmailData.isMailState_Verified) {
      M.CastleWebShopAccountIDMicroservice.Instance.onAccountIdRetrievedSignal.add(this.bindFunction(this.onAccountIdRetrieved));
      M.CastleWebShopAccountIDMicroservice.Instance.getAccountID();
    } else {
      this._accountIdInfoItem.setText(l.Localize.text("dialog_options_accountManagement_accountID_missingEmail_desc"));
    }
    this._serverInfoItem = new m.OptionsDialogAccountInfoItem(l.Localize.text("dialog_options_accountManagement_playerName_desc"), OptionsDialogAccountDetails.ITEM_PROPERTIES_ACCOUNT_INFO);
    this._languageInfoItem = new m.OptionsDialogAccountInfoItem(l.Localize.text("dialog_options_accountManagement_language_desc"), OptionsDialogAccountDetails.ITEM_PROPERTIES_ACCOUNT_INFO, this.bindFunction(this.onEditLanguage));
    this._languageInfoItem.showActionButton(false);
    this._emailInfoItem = new f.OptionsDialogAccountInfoItemEmail(l.Localize.text("dialog_options_accountDetails_email_desc"), OptionsDialogAccountDetails.ITEM_PROPERTIES_ACCOUNT_INFO, this.bindFunction(this.onEditEmail), this.bindFunction(this.onSendAgainEmail), this.bindFunction(this.onGotoEmail));
    L.CastleComponent.controller.removeEventListener(A.CastleServerMessageArrivedEvent.RMC_ARRIVED, this.bindFunction(this.onEmailStatusArrived));
    L.CastleComponent.controller.removeEventListener(A.CastleServerMessageArrivedEvent.MNS_ARRIVED, this.bindFunction(this.onEmailStatusArrived));
    L.CastleComponent.controller.removeEventListener(u.CastleUserDataEvent.GPI_UPDATE, this.bindFunction(this.onEmailStatusArrived));
    L.CastleComponent.controller.addEventListener(A.CastleServerMessageArrivedEvent.RMC_ARRIVED, this.bindFunction(this.onEmailStatusArrived));
    L.CastleComponent.controller.addEventListener(A.CastleServerMessageArrivedEvent.MNS_ARRIVED, this.bindFunction(this.onEmailStatusArrived));
    L.CastleComponent.controller.addEventListener(u.CastleUserDataEvent.GPI_UPDATE, this.bindFunction(this.onEmailStatusArrived));
    var i = new D.OptionsDialogSaveAccountItem(OptionsDialogAccountDetails.ITEM_PROPERTIES_CATEGORY);
    var n = new b.OptionsDialogNewsletterItem(OptionsDialogAccountDetails.ITEM_PROPERTIES_CATEGORY);
    var a = new O.OptionsDialogChangePasswordItem(OptionsDialogAccountDetails.ITEM_PROPERTIES_CATEGORY);
    var s = new y.OptionsDialogFacebookItem(OptionsDialogAccountDetails.ITEM_PROPERTIES_CATEGORY);
    var r = new E.OptionsDialogDeleteAccountItem(OptionsDialogAccountDetails.ITEM_PROPERTIES_CATEGORY);
    this._items = [];
    this._items.push(this._nameInfoItem);
    this._items.push(this._accountIdInfoItem);
    this._items.push(this._serverInfoItem);
    this._items.push(this._languageInfoItem);
    this._items.push(this._emailInfoItem);
    this._items.push(i);
    this._items.push(n);
    this._items.push(a);
    if (!d.SpecialServerHelper.isOnSpecialServer) {
      this._items.push(s);
    }
    if (!o.EnvGlobalsHandler.globals.isOnSpecialServer) {
      this._items.push(r);
    }
    this._items.forEach(function (t) {
      return t.updateSignal.add(e.bindFunction(e.onStateChange));
    });
    this.updateItems();
    if (this._showNewsletter) {
      [i, n].forEach(function (e) {
        return e.preExpand();
      });
    }
    return this._items;
  };
  OptionsDialogAccountDetails.prototype.updateItems = function () {
    this.updateAccountInfo();
    this._items.forEach(function (e) {
      return e.updateItem();
    });
    this.accordionComponent.onItemChangeComplete();
  };
  OptionsDialogAccountDetails.prototype.updateAccountInfo = function () {
    this._nameInfoItem.setText(p.CastleModel.userData.userName);
    if (p.CastleModel.playerEmailData.isMailState_Verified) {
      this._accountIdInfoItem.setText(p.CastleModel.webShopAccountIdData.accountID || "");
    } else {
      this._accountIdInfoItem.setText(l.Localize.text("dialog_options_accountManagement_accountID_missingEmail_desc"));
    }
    this._serverInfoItem.setText(l.Localize.text(s.BasicModel.instanceProxy.selectedInstanceVO.instanceLocaId));
    this._languageInfoItem.setText(l.Localize.text("language_native_" + a.EnvironmentProvider.instance.current.data.languageCode));
    this._emailInfoItem.setText(this.getEmailText());
    if (this.showEditMailButton()) {
      this._emailInfoItem.showExclamation1(this.eMailChangeInProgress());
      this._emailInfoItem.showActionButton(true, 1, this.eMailChangeInProgress() ? "dialog_options_accountDetails_changeEmail_stopChange_tooltip" : "dialog_options_accountDetails_changeEmail_tooltip");
      this._emailInfoItem.showButtonGoto(false);
    } else {
      this._emailInfoItem.showActionButton(false);
      this._emailInfoItem.showButtonGoto(p.CastleModel.playerEmailData.isMailState_Unregistered, 1, "dialog_options_accountDetails_enterEmail_tooltip");
    }
    var e = p.CastleModel.playerEmailData.isMailState_Unverified;
    this._emailInfoItem.showButton2(e, 2, "dialog_options_accountDetails_sendAgain_tooltip");
    this._emailInfoItem.enableButtons(!p.CastleModel.playerEmailData.api_unavailable_in_process);
  };
  OptionsDialogAccountDetails.prototype.onStateChange = function () {
    this.updateItems();
  };
  OptionsDialogAccountDetails.prototype.onEditName = function () {
    v.CastleDialogHandler.getInstance().registerDefaultDialogs(I.CastleChangePlayerNameDialog, new T.CastleChangePlayerNameDialogProperties(p.CastleModel.changePlayerNameData.getCurrentC2Cost));
  };
  OptionsDialogAccountDetails.prototype.onCopyInfo = function () {
    P.Clipboard.generalClipboard.clear();
    P.Clipboard.generalClipboard.setData(P.ClipboardFormats.TEXT_FORMAT, p.CastleModel.webShopAccountIdData.accountID || "", false);
  };
  OptionsDialogAccountDetails.prototype.onAccountIdRetrieved = function () {
    this._accountIdInfoItem.setText(p.CastleModel.webShopAccountIdData.accountID || "");
  };
  OptionsDialogAccountDetails.prototype.onEditLanguage = function () {};
  OptionsDialogAccountDetails.prototype.onEditEmail = function () {
    if (this.eMailChangeInProgress()) {
      v.CastleDialogHandler.getInstance().registerDefaultDialogs(_.CastleChangePlayerEmailCancelDialog);
    } else {
      v.CastleDialogHandler.getInstance().registerDefaultDialogs(S.CastleChangePlayerEmailDialog);
    }
  };
  OptionsDialogAccountDetails.prototype.onEmailStatusArrived = function (e) {
    this.updateAccountInfo();
  };
  OptionsDialogAccountDetails.prototype.showEditMailButton = function () {
    return !p.CastleModel.playerEmailData.isMailState_Unregistered;
  };
  OptionsDialogAccountDetails.prototype.eMailChangeInProgress = function () {
    return p.CastleModel.playerEmailData.isMailState_MailChangePending;
  };
  OptionsDialogAccountDetails.prototype.getEmailText = function () {
    if (p.CastleModel.playerEmailData.isMailState_MailChangePending) {
      return l.Localize.text("dialog_options_newEmail_changePending_desc", [p.CastleModel.playerEmailData.newEmail]);
    } else if (p.CastleModel.playerEmailData.isMailState_Unverified) {
      return l.Localize.text("dialog_options_newEmail_verificationPending_desc", [p.CastleModel.userData.email]);
    } else {
      return p.CastleModel.userData.email || "-";
    }
  };
  OptionsDialogAccountDetails.prototype.onSendAgainEmail = function () {
    s.BasicModel.smartfoxClient.sendCommandVO(new c.C2SResendEmail(p.CastleModel.playerEmailData.isMailState_Unverified ? r.PlayerConst.RESEND_MAIL_ACCOUNT_VERIFICATION : 1));
  };
  OptionsDialogAccountDetails.prototype.onGotoEmail = function () {
    var e = this._items.find(function (e) {
      return e instanceof D.OptionsDialogSaveAccountItem;
    });
    if (e && e.isVisible) {
      e.expand(true, true, true);
      this.accordionComponent.scrollToValue(e.disp.y);
    }
  };
  OptionsDialogAccountDetails.__initialize_static_members = function () {
    OptionsDialogAccountDetails.ITEM_PROPERTIES_ACCOUNT_INFO = new h.GenericCollapsibleItemProperties(new g.LayoutMargin(0, 2, 0, 0));
    OptionsDialogAccountDetails.ITEM_PROPERTIES_CATEGORY = new h.GenericCollapsibleItemProperties(new g.LayoutMargin(8, 0, 0, 0));
  };
  return OptionsDialogAccountDetails;
}(C.AOptionsDialogContentCreator);
exports.OptionsDialogAccountDetails = V;
V.__initialize_static_members();