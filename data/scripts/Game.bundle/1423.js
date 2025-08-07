Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./16.js");
var c = require("./11.js");
var u = require("./981.js");
var d = function (e) {
  function CastleExternalOKStandardDialog() {
    var t = this;
    t._initialHeight = -1;
    t._initialY = -1;
    t._initialButtonY = -1;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleExternalOKStandardDialog.NAME) || this;
  }
  n.__extends(CastleExternalOKStandardDialog, e);
  CastleExternalOKStandardDialog.prototype.showLoaded = function (t = null) {
    this.properties ||= new u.CastleExternalStandardOKDialogProperties();
    this._txt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO(this.dialogProperties.titleTextID));
    this._txt_desc = this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new s.LocalizedTextVO(this.dialogProperties.descTextID, this.dialogProperties.descTextIDParams));
    switch (this.dialogProperties.decorationState) {
      case u.CastleExternalStandardOKDialogProperties.ALL_OK_GREEN_DECORATION:
        this.showGreenDecoration();
        break;
      case u.CastleExternalStandardOKDialogProperties.ERROR_RED_DECORATION:
        this.showRedDecoration();
    }
    e.prototype.showLoaded.call(this, t);
    this.resize();
  };
  CastleExternalOKStandardDialog.prototype.showGreenDecoration = function () {
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_exit]);
    this.dialogDisp.dec_red.visible = false;
    this.dialogDisp.btn_close.visible = false;
    this.dialogDisp.dec_green.visible = true;
    this.dialogDisp.btn_ok.visible = true;
    this._txt_title.color = l.ClientConstColor.FONT_DEFAULT_COLOR;
  };
  CastleExternalOKStandardDialog.prototype.showRedDecoration = function () {
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_exit]);
    this.dialogDisp.dec_green.visible = false;
    this.dialogDisp.btn_ok.visible = false;
    this.dialogDisp.dec_red.visible = true;
    this.dialogDisp.btn_close.visible = true;
    this._txt_title.color = l.ClientConstColor.GENERIC_WHITE;
  };
  CastleExternalOKStandardDialog.prototype.resize = function () {
    if (this._initialHeight < 0) {
      this._initialHeight = r.int(this.dialogDisp.bg.height);
      this._initialY = r.int(this.dialogDisp.bg.y);
      this._initialButtonY = r.int(this.dialogDisp.btn_close.y);
    }
    var e = Math.max(this._txt_desc.textHeight + CastleExternalOKStandardDialog.MIN_HEIGHT, CastleExternalOKStandardDialog.MIN_HEIGHT);
    var t = r.int(this._initialHeight - e);
    this._txt_desc.height = this._txt_desc.textHeight;
    this.dialogDisp.bg.height = e;
    this.dialogDisp.bg.y = this._initialY - (t >> 1);
    this.dialogDisp.btn_close.y = this._initialButtonY - t;
    this.dialogDisp.btn_ok.y = this._initialButtonY - t;
  };
  CastleExternalOKStandardDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        if (this.dialogProperties.okBtnCallback) {
          this.dialogProperties.okBtnCallback();
        }
      case this.dialogDisp.btn_exit:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastleExternalOKStandardDialog.prototype, "dialogProperties", {
    get: function () {
      if (a.instanceOfClass(this.properties, "CastlePrivateOfferDialogProperties")) {
        this.properties = new u.CastleExternalStandardOKDialogProperties();
      }
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleExternalOKStandardDialog.__initialize_static_members = function () {
    CastleExternalOKStandardDialog.NAME = "CastleStandardOKExternal";
    CastleExternalOKStandardDialog.MIN_HEIGHT = 150;
  };
  return CastleExternalOKStandardDialog;
}(c.CastleExternalDialog);
exports.CastleExternalOKStandardDialog = d;
o.classImplementsInterfaces(d, "ICollectableRendererList");
d.__initialize_static_members();