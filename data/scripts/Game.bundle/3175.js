Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./18.js");
var r = require("./32.js");
var l = require("./4.js");
var c = require("./371.js");
var u = require("./145.js");
var d = require("./194.js");
var p = function (e) {
  function FriendInviteSurroundingsVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FriendInviteSurroundingsVE, e);
  FriendInviteSurroundingsVE.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    h.CastleComponent.controller.addEventListener(r.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
  };
  FriendInviteSurroundingsVE.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    h.CastleComponent.controller.removeEventListener(r.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
  };
  FriendInviteSurroundingsVE.prototype.createAdditionalClips = function () {
    e.prototype.createAdditionalClips.call(this);
    if (l.CastleModel.userData.userLevel < FriendInviteSurroundingsVE.ADVISE_LEVEL) {
      this.additionalClips.addClips(u.IsoAdditionalClipEnum.EXCLAMATION_MARK2);
    }
  };
  Object.defineProperty(FriendInviteSurroundingsVE.prototype, "hasBuildingPlaceHolder", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.ASurroundingBuildingVE.prototype, "hasBuildingPlaceHolder").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FriendInviteSurroundingsVE.prototype.onLevelUp = function (e) {
    this.updateAdditionalClips();
  };
  FriendInviteSurroundingsVE.prototype.onMouseClick = function () {
    if (!a.EnvGlobalsHandler.globals.isOnSpecialServer) {
      if (a.EnvGlobalsHandler.globals.loginIsKeyBased || a.EnvGlobalsHandler.globals.urlVariables.nativeStore == a.BasicConstants.NATIVE_STORE_MICROSOFT) {
        h.CastleComponent.dialogHandler.registerDefaultDialogs(g.CastleFriendListDialog);
      } else {
        h.CastleComponent.dialogHandler.registerDefaultDialogs(C.CastlePremiumMarketPlaceDialog, new c.CastlePremiumMarketPlaceDialogProperties(s.ClientConstCastle.CATEGORY_MARKETPLACE_INVITE_A_FRIEND));
      }
    }
  };
  FriendInviteSurroundingsVE.ADVISE_LEVEL = 20;
  return FriendInviteSurroundingsVE;
}(d.ASurroundingBuildingVE);
exports.FriendInviteSurroundingsVE = p;
var h = require("./14.js");
var g = require("./759.js");
var C = require("./315.js");
o.classImplementsInterfaces(p, "ICollectableRendererList", "IIngameUICapable");