Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./9.js");
var o = require("./154.js");
var a = require("./43.js");
var s = require("./17.js");
var r = function () {
  function MicroServiceRequestPreloader() {}
  MicroServiceRequestPreloader.showPreloader = function (e, t = -1) {
    n.CastleDialogHandler.getInstance().registerDialogsWithType(o.CastleExternalPreloaderDialog, e, false, a.CastleDialogConsts.PRIORITY_TOP, 0, a.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
    if (t != -1) {
      setTimeout(this.bindFunction(this.hidePreloader), t);
    }
  };
  MicroServiceRequestPreloader.hidePreloader = function () {
    s.CastleLayoutManager.getInstance().hideDialog(o.CastleExternalPreloaderDialog);
  };
  return MicroServiceRequestPreloader;
}();
exports.MicroServiceRequestPreloader = r;