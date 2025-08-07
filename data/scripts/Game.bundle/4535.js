Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./13.js");
var l = require("./8.js");
var c = require("./11.js");
var u = require("./36.js");
var d = function (e) {
  function CastleTempServerInfoDialog() {
    return e.call(this, CastleTempServerInfoDialog.NAME) || this;
  }
  n.__extends(CastleTempServerInfoDialog, e);
  CastleTempServerInfoDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    l.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], u.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title0, new s.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId(this.dialogProps.title1ID)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title1, new s.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId(this.dialogProps.title2ID)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO(this.dialogProps.copyID));
  };
  CastleTempServerInfoDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastleTempServerInfoDialog.prototype, "dialogProps", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTempServerInfoDialog.NAME = "CastleTempServerInfo";
  return CastleTempServerInfoDialog;
}(c.CastleExternalDialog);
exports.CastleTempServerInfoDialog = d;
o.classImplementsInterfaces(d, "ICollectableRendererList");