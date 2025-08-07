Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./69.js");
var l = require("./43.js");
var c = require("./24.js");
var u = require("./201.js");
var d = function (e) {
  function OpenDialogWithAdditionalExternalAssetsCommand() {
    var t = this;
    t.loadingQueue = 0;
    t.allItemsLoading = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(OpenDialogWithAdditionalExternalAssetsCommand, e);
  OpenDialogWithAdditionalExternalAssetsCommand.prototype.openDialog = function () {
    throw new r.AbstractMethodError();
  };
  OpenDialogWithAdditionalExternalAssetsCommand.prototype.addAssets = function (e) {
    throw new r.AbstractMethodError();
  };
  OpenDialogWithAdditionalExternalAssetsCommand.prototype.execute = function (e = null) {
    this.allItemsLoading = false;
    this.showPreloaderDialog();
    this.addAssets(e);
    this.allItemsLoading = true;
    this.checkProgress();
  };
  OpenDialogWithAdditionalExternalAssetsCommand.prototype.loadAsset = function (e, t) {
    this.loadingQueue++;
    var i = new c.CastleGoodgameExternalClip(e, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(t), null, 0, false);
    if (i.isLoaded) {
      this.loadingComplete(i);
    } else {
      i.clipLoaded.addOnce(this.bindFunction(this.loadingComplete));
    }
  };
  OpenDialogWithAdditionalExternalAssetsCommand.prototype.loadingComplete = function (e) {
    this.loadingQueue--;
    this.checkProgress();
  };
  OpenDialogWithAdditionalExternalAssetsCommand.prototype.checkProgress = function () {
    if (this.allItemsLoading && this.loadingQueue == 0) {
      this.hidePreloaderDialog();
      this.openDialog();
    }
  };
  OpenDialogWithAdditionalExternalAssetsCommand.prototype.showPreloaderDialog = function () {
    p.CastleDialogHandler.getInstance().registerDialogsWithType(g.CastleExternalPreloaderDialog, new u.CastleExternalPreloaderDialogProperties(null), false, l.CastleDialogConsts.PRIORITY_TOP, 0, l.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
  };
  OpenDialogWithAdditionalExternalAssetsCommand.prototype.hidePreloaderDialog = function () {
    h.CastleLayoutManager.getInstance().hideDialog(g.CastleExternalPreloaderDialog);
  };
  return OpenDialogWithAdditionalExternalAssetsCommand;
}(a.SimpleCommand);
exports.OpenDialogWithAdditionalExternalAssetsCommand = d;
var p = require("./9.js");
var h = require("./17.js");
var g = require("./154.js");
s.classImplementsInterfaces(d, "ISimpleCommand");