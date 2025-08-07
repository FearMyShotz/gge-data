Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./32.js");
var s = require("./8.js");
var r = function (e) {
  function CastleFacebookTestDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleFacebookTestDialog.NAME) || this;
  }
  n.__extends(CastleFacebookTestDialog, e);
  CastleFacebookTestDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_fbGetData, this.dialogDisp.btn_exit]);
  };
  CastleFacebookTestDialog.prototype.getUserData = function () {
    this.controller.addEventListener(a.CastleUserDataEvent.FACEBOOK_DATA_UPDATED, this.bindFunction(this.onFacebookUpdated));
    l.CastleFacebookModule.login();
  };
  CastleFacebookTestDialog.prototype.onFacebookUpdated = function (e) {
    this.controller.removeEventListener(a.CastleUserDataEvent.FACEBOOK_DATA_UPDATED, this.bindFunction(this.onFacebookUpdated));
  };
  CastleFacebookTestDialog.prototype.onClick = function (t) {
    if (s.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_ok:
        case this.dialogDisp.btn_exit:
          this.hide();
          break;
        case this.dialogDisp.btn_fbGetData:
          this.getUserData();
      }
    }
  };
  CastleFacebookTestDialog.__initialize_static_members = function () {
    CastleFacebookTestDialog.NAME = "CastleFacebookTestExternal";
  };
  return CastleFacebookTestDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleFacebookTestDialog = r;
var l = require("./193.js");
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();