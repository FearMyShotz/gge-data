Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./43.js");
var l = require("./24.js");
var c = require("./41.js");
var u = require("./201.js");
var d = function (e) {
  function CastlePaymentRewardSpecialOfferItemSet(t, i = CastlePaymentRewardSpecialOfferItemSet.NAME) {
    var n = e.call(this, CastlePaymentRewardSpecialOfferItemSet.initExternalClip(t, i)) || this;
    n._callback = null;
    if (n.externalClip.isLoaded) {
      n.displayObjectClipIsLoaded(n.externalClip);
    } else {
      n.externalClip.clipLoaded.addOnceWithPriority(n.bindFunction(n.displayObjectClipIsLoaded), CastlePaymentRewardSpecialOfferItemSet.CLIP_LOADED_PRIORITY_LOADED);
      CastlePaymentRewardSpecialOfferItemSet.dialogHandler.registerDialogsWithType(g.CastleExternalPreloaderDialog, new u.CastleExternalPreloaderDialogProperties(n.bindFunction(n.hideOnLoading)), false, r.CastleDialogConsts.PRIORITY_TOP, 0, r.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
    }
    return n;
  }
  n.__extends(CastlePaymentRewardSpecialOfferItemSet, e);
  CastlePaymentRewardSpecialOfferItemSet.initExternalClip = function (e, t) {
    return new l.CastleGoodgameExternalClip(e, CastlePaymentRewardSpecialOfferItemSet.getAssetFileURL(t), null, 0, false);
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferItemSet.prototype, "externalClip", {
    get: function () {
      if (s.instanceOfClass(this.disp, "CastleGoodgameExternalClip")) {
        return this.disp;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferItemSet.prototype.hideOnLoading = function () {
    this.externalClip.clipLoaded.removeAll();
    this.hide();
  };
  CastlePaymentRewardSpecialOfferItemSet.getAssetFileURL = function (e) {
    return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e);
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferItemSet.prototype, "componentDisp", {
    get: function () {
      if (this.externalClip) {
        return this.externalClip.currentshownDisplayObject;
      } else {
        return this.disp;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferItemSet.prototype.displayObjectClipIsLoaded = function (e) {
    this.dispBounds = c.CastleMovieClipHelper.getVisibleBounds(this.componentDisp);
    this.disp = this.componentDisp;
    if (this.componentDisp.btn_up) {
      this.componentDisp.btn_up.visible = false;
    }
    if (this.componentDisp.btn_down) {
      this.componentDisp.btn_down.visible = false;
    }
    h.CastleLayoutManager.getInstance().hideDialog(g.CastleExternalPreloaderDialog);
    if (this._callback) {
      this._callback();
    }
    this._callback = null;
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferItemSet.prototype, "isComponentLoaded", {
    get: function () {
      return this.externalClip.isLoaded;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferItemSet.prototype, "callback", {
    set: function (e) {
      this._callback = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferItemSet, "dialogHandler", {
    get: function () {
      return p.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferItemSet.__initialize_static_members = function () {
    CastlePaymentRewardSpecialOfferItemSet.NAME = "CastlePaymentRewardSpecialOfferComponents";
    CastlePaymentRewardSpecialOfferItemSet.CLIP_LOADED_PRIORITY_LOADED = 3;
  };
  return CastlePaymentRewardSpecialOfferItemSet;
}(a.FlashUIComponent);
exports.CastlePaymentRewardSpecialOfferItemSet = d;
var p = require("./9.js");
var h = require("./17.js");
var g = require("./154.js");
d.__initialize_static_members();