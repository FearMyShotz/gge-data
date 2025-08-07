Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./100.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./728.js");
var u = require("./29.js");
var d = require("./4.js");
var p = require("./193.js");
var h = require("./9.js");
var g = require("./14.js");
var C = require("./20.js");
var _ = require("./8.js");
var m = require("./382.js");
var f = require("./2290.js");
var O = require("./2291.js");
var E = function (e) {
  function OptionsDialogFacebookItem(t) {
    var i = e.call(this, new (r.getDefinitionByName("CastleOptions_FacebookConnectItem"))(), t) || this;
    _.ButtonHelper.initButtons([i.contentMC.btn_facebook], C.ClickFeedbackButtonHover);
    g.CastleComponent.textFieldManager.registerTextField(i._headerMC.txt_default, new l.LocalizedTextVO("dialog_options_connectFacebook_title"), new a.InternalGGSTextFieldConfigVO(true));
    g.CastleComponent.textFieldManager.registerTextField(i._headerMC.mc_open.txt_selected, new l.LocalizedTextVO("dialog_options_connectFacebook_title"), new a.InternalGGSTextFieldConfigVO(true));
    return i;
  }
  n.__extends(OptionsDialogFacebookItem, e);
  OptionsDialogFacebookItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    g.CastleComponent.controller.addEventListener(c.CastleFacebookEvent.FACEBOOK_MAPPING_UPDATED, this.bindFunction(this.onFacebookUpdate));
    g.CastleComponent.controller.addEventListener(c.CastleFacebookEvent.FACEBOOK_MAPPING_ERROR, this.bindFunction(this.onFacebookUpdate));
    g.CastleComponent.controller.addEventListener(c.CastleFacebookEvent.FACEBOOK_ACTION_CANCELED, this.bindFunction(this.onFacebookUpdate));
  };
  OptionsDialogFacebookItem.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    g.CastleComponent.controller.removeEventListener(c.CastleFacebookEvent.FACEBOOK_MAPPING_UPDATED, this.bindFunction(this.onFacebookUpdate));
    g.CastleComponent.controller.removeEventListener(c.CastleFacebookEvent.FACEBOOK_MAPPING_ERROR, this.bindFunction(this.onFacebookUpdate));
    g.CastleComponent.controller.removeEventListener(c.CastleFacebookEvent.FACEBOOK_ACTION_CANCELED, this.bindFunction(this.onFacebookUpdate));
  };
  OptionsDialogFacebookItem.prototype.updateItem = function () {
    e.prototype.updateItem.call(this);
    this.disp.visible = p.CastleFacebookModule.available;
    if (this.disp.visible) {
      _.ButtonHelper.enableButton(this.contentMC.btn_facebook, true);
      this.updateFacebookTexts();
    }
  };
  OptionsDialogFacebookItem.prototype.updateFacebookTexts = function () {
    var e = d.CastleModel.userData.isConnectedToFacebook ? "dialog_options_connectFacebook_alreadyConnected_desc" : "dialog_options_connectFacebook_connect_desc";
    var t = d.CastleModel.userData.isConnectedToFacebook ? "dialog_options_facebookDisconnect" : "dialog_options_connectFacebook_button";
    g.CastleComponent.textFieldManager.registerTextField(this.contentMC.txt_description, new l.LocalizedTextVO(e), new a.InternalGGSTextFieldConfigVO(true));
    g.CastleComponent.textFieldManager.registerTextField(this.contentMC.btn_facebook.txt_label, new l.LocalizedTextVO(t), new a.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
  };
  OptionsDialogFacebookItem.prototype.onFacebookUpdate = function (e) {
    this.updateSignal.dispatch();
  };
  OptionsDialogFacebookItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (_.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.contentMC.btn_facebook:
          if (d.CastleModel.userData.isConnectedToFacebook && d.CastleModel.userData.isPasswordTemporary) {
            this.handleSaveAccount(true, d.CastleModel.userData.hasEmail, this.bindFunction(this.handleMapOrUnmapFacebook));
          } else {
            this.handleMapOrUnmapFacebook();
          }
      }
    }
  };
  OptionsDialogFacebookItem.prototype.handleSaveAccount = function (e = false, t = false, i = null) {
    var n = t ? f.CastleSaveAccountDialog.TYPE_SAVE_PASSWORD : f.CastleSaveAccountDialog.TYPE_SAVE_ACCOUNT;
    var o = e ? f.CastleSaveAccountDialog.STYLE_MANDATORY : f.CastleSaveAccountDialog.STYLE_NORMAL;
    h.CastleDialogHandler.getInstance().registerDefaultDialogs(f.CastleSaveAccountDialog, new O.CastleSaveAccountDialogProperties(n, o, i));
  };
  OptionsDialogFacebookItem.prototype.handleMapOrUnmapFacebook = function () {
    _.ButtonHelper.enableButton(this.contentMC.btn_facebook, false);
    o.CommandController.instance.executeCommand(u.IngameClientCommands.MAP_USER_TO_FACEBOOK, !d.CastleModel.userData.isConnectedToFacebook);
  };
  return OptionsDialogFacebookItem;
}(m.AOptionsDialogCollapsibleItem);
exports.OptionsDialogFacebookItem = E;
s.classImplementsInterfaces(E, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");