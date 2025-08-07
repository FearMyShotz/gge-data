Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./24.js");
var r = function (e) {
  function CastleBasicTipDialog(t) {
    CONSTRUCTOR_HACK;
    return e.call(this, t || CastleBasicTipDialog.NAME) || this;
  }
  n.__extends(CastleBasicTipDialog, e);
  CastleBasicTipDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    var i = new s.CastleGoodgameExternalClip(this.tipPicClassName, this.assetFileURL_0, null, 0, false);
    this.disp.mc_holder.addChild(i.asDisplayObject());
  };
  Object.defineProperty(CastleBasicTipDialog.prototype, "tipPicClassName", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBasicTipDialog.prototype, "assetFileURL_0", {
    get: function () {
      return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.tipPicClassName);
    },
    enumerable: true,
    configurable: true
  });
  CastleBasicTipDialog.__initialize_static_members = function () {
    CastleBasicTipDialog.NAME = "CastleBasicTipDialog";
  };
  return CastleBasicTipDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleBasicTipDialog = r;
a.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();