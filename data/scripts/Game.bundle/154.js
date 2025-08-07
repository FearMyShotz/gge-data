Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./229.js");
var c = createjs.Event;
var u = function (e) {
  function CastleExternalPreloaderDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, new Library.CastleInterfaceElements.CastleExternalPreloader()) || this;
  }
  n.__extends(CastleExternalPreloaderDialog, e);
  CastleExternalPreloaderDialog.prototype.applyProperties = function () {
    e.prototype.applyProperties.call(this);
    this.dialogDisp.btn_close.visible = false;
    var t = new (r.getDefinitionByNameFromLibrary("LoadingAnimation"))();
    t.scaleX = t.scaleY = 3;
    this.dialogDisp.mc_loading.addChild(t);
  };
  CastleExternalPreloaderDialog.prototype.hide = function () {
    if (this.dialogDisp.mc_loading.numChildren > 0) {
      o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_loading);
      if (this.disp && this.disp.parent) {
        this.disp.parent.removeChild(this.disp);
      }
      this.properties = null;
    }
    if (this.disp && this.disp.stage) {
      this.disp.stage.removeEventListener(a.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUp));
      window.removeEventListener(c.RESIZE, this.bindFunction(this.onResize));
    }
    if (this.disp) {
      this.disp.visible = false;
    }
    this.layoutManager.hideDialog(CastleExternalPreloaderDialog);
    this.destroyCollectableRenderList();
    this.removeEventListenerOnHide();
    this.layoutManager.restrictToHighestDialog();
  };
  CastleExternalPreloaderDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.dialogProperties.hideFunction();
        this.hide();
    }
  };
  Object.defineProperty(CastleExternalPreloaderDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalPreloaderDialog.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleExternalPreloaderDialog.__initialize_static_members = function () {
    CastleExternalPreloaderDialog.NAME = "CastleExternalPreloaderDialog";
  };
  return CastleExternalPreloaderDialog;
}(l.CastleDialog);
exports.CastleExternalPreloaderDialog = u;
s.classImplementsInterfaces(u, "ICollectableRendererList");
u.__initialize_static_members();