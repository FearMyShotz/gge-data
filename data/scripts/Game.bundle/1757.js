Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./963.js");
var c = require("./1434.js");
var u = require("./818.js");
var d = require("./4.js");
var p = require("./8.js");
var h = require("./587.js");
var g = require("./34.js");
var C = require("./3689.js");
var _ = function (e) {
  function AUnlockPrebuiltCastle(t, i) {
    var n = this;
    n.targetSpaceID = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t) || this).targetSpaceID = i;
    n.txt_info1 = n.textFieldManager.registerTextField(n.subLayerDisp.txt_info1, new r.LocalizedTextVO(""));
    n.txt_info1.autoFitToBounds = true;
    n.txt_info2 = n.textFieldManager.registerTextField(n.subLayerDisp.txt_info2, new r.LocalizedTextVO(""));
    n.txt_info2.autoFitToBounds = true;
    return n;
  }
  n.__extends(AUnlockPrebuiltCastle, e);
  AUnlockPrebuiltCastle.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.update(t);
  };
  AUnlockPrebuiltCastle.prototype.update = function (e) {
    this.castleVO = e;
    this.targetSpaceID = e.spaceIds[0];
    var t = AUnlockPrebuiltCastle.TEXT_ID_PREFIX + "detailsDialog_infoBox_" + this.unlockTypeTextId + e.textIdName();
    this.txt_info1.textContentVO.textId = t + "_01";
    this.txt_info2.textContentVO.textId = t + "_02";
  };
  Object.defineProperty(AUnlockPrebuiltCastle.prototype, "unlockButtonTextId", {
    get: function () {
      return AUnlockPrebuiltCastle.TEXT_ID_PREFIX + "unlockButton_" + this.castleVO.textIdName();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AUnlockPrebuiltCastle.prototype, "unlockTypeTextId", {
    get: function () {
      throw new Error("Abstract method");
    },
    enumerable: true,
    configurable: true
  });
  AUnlockPrebuiltCastle.prototype.buyPrebuiltCastle = function (e, t = false) {
    if (!f.FlashBlockHelper.checkFlashBlock(this.targetSpaceID)) {
      var i = false;
      for (var n = 0, o = this.castleVO.spaceIds; n < o.length; n++) {
        var s = o[n];
        if (s !== undefined) {
          i ||= a.WorldConst.WORLD_IDS.indexOf(s) != -1;
        }
      }
      if (i) {
        var r = new C.CastleKingdomChooseLocalizationDialogProperties();
        r.onDirectionSelected = this.bindFunction(function (i) {
          this.confirmUnlock(this.bindFunction(function () {
            d.CastleModel.smartfoxClient.sendCommandVO(new l.C2SSelectKingdomCastleVO(this.castleVO.id, i, t, this.targetSpaceID));
            e();
          }), t);
        });
        O.CastleDialogHandler.getInstance().registerDefaultDialogs(D.CastleKingdomChooseLocalizationDialog, r);
      } else {
        this.confirmUnlock(this.bindFunction(function () {
          d.CastleModel.smartfoxClient.sendCommandVO(new c.C2SSelectSeasonCampVO(this.castleVO.id, t, this.targetSpaceID));
          e();
        }), t);
      }
    }
  };
  AUnlockPrebuiltCastle.prototype.confirmUnlock = function (e, t) {
    var i = AUnlockPrebuiltCastle.TEXT_ID_PREFIX + "confirm" + this.unlockTypeTextId + this.castleVO.textIdName() + "_body";
    var n = this.getCosts(t);
    if (y.CostHelper.canAfford(new E.CollectablesCosts(n))) {
      O.CastleDialogHandler.getInstance().registerDefaultDialogs(b.CastleConfirmCostsDialog, new h.CastleConfirmCostsDialogProperties(s.Localize.text("dialog_factionJoin_confirm_header"), s.Localize.text(i), n, null, e));
    } else {
      e();
    }
  };
  AUnlockPrebuiltCastle.prototype.getCosts = function (e) {
    var t;
    if (e) {
      (t = new m.CollectableList()).addItem(this.castleVO.costC2);
      return t;
    } else {
      return this.castleVO.primaryCosts;
    }
  };
  AUnlockPrebuiltCastle.prototype.disableUntilResponse = function (e) {
    p.ButtonHelper.enableButton(e, false);
    function t(i) {
      if (i.isError) {
        p.ButtonHelper.enableButton(e, true);
      }
      this.controller.removeEventListener(u.PrebuiltCastleResponseEvent.RESPONSE, this.bindFunction(t));
    }
    this.controller.addEventListener(u.PrebuiltCastleResponseEvent.RESPONSE, this.bindFunction(t));
  };
  AUnlockPrebuiltCastle.TEXT_ID_PREFIX = "dialog_kingdomStart_prebuiltCastle_";
  return AUnlockPrebuiltCastle;
}(g.CastleDialogSubLayer);
exports.AUnlockPrebuiltCastle = _;
var m = require("./48.js");
var f = require("./160.js");
var O = require("./9.js");
var E = require("./367.js");
var y = require("./66.js");
var b = require("./612.js");
var D = require("./3690.js");
o.classImplementsInterfaces(_, "ICollectableRendererList", "ISublayer");