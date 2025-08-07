Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./123.js");
var u = require("./31.js");
var d = require("./19.js");
var p = require("./4.js");
var h = require("./1446.js");
var g = createjs.Point;
var C = function (e) {
  function DecorationForgeSelectSourceAndCatalystDialogListItemSourceVE(t) {
    return e.call(this, t) || this;
  }
  n.__extends(DecorationForgeSelectSourceAndCatalystDialogListItemSourceVE, e);
  DecorationForgeSelectSourceAndCatalystDialogListItemSourceVE.prototype.update = function () {
    e.prototype.update.call(this);
    var t = this.itemVO ? this.itemVO.data : null;
    this.disp.visible = t != null;
    if (t) {
      m.CollectableRenderHelper.displaySingleItemComplete(this, new u.CollectableRenderClips(this.disp.mc_item).addInfoBtn(this.disp.btn_info), t, new d.CollectableRenderOptions(d.CollectableRenderOptions.SET_BASIC, new g(95, 59)));
      this.disp.mc_unique.visible = this.sourceBuildingVO.isUnique();
      var i = this.disp.mc_item.mc_amount;
      i.visible = t.amount > 0 && !this.disp.mc_unique.visible;
      if (i.visible) {
        _.CastleComponent.textFieldManager.registerTextField(i.txt_value, new s.LocalizedNumberVO(t.amount));
      }
      var n = l.int(a.FusionConst.getFusionXPFromSource(this.sourceBuildingVO.fusionInfoVO.getCurrentLevel(), this.itemVO.targetDecoItemVO.buildingVO.fusionInfoVO.getCurrentLevel()));
      _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_xp, new s.LocalizedNumberVO(n));
      var o = l.int(a.FusionConst.getBonusFusionXPChanceFromSource(p.CastleModel.fusionForgeData.xml.getFusionSystem(a.FusionConst.DECORATION_FORGE_ID).baseBonusFusionXPChance, this.sourceBuildingVO.fusionInfoVO.getCurrentLevel(), this.itemVO.targetDecoItemVO.buildingVO.fusionInfoVO.getCurrentLevel()));
      this.disp.mc_item.mc_empty.visible = this.isSourceFeederDeco && t.amount == 0;
      _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_bonusChance, new r.LocalizedTextVO("value_percentage", [o]));
    }
  };
  Object.defineProperty(DecorationForgeSelectSourceAndCatalystDialogListItemSourceVE.prototype, "isSourceFeederDeco", {
    get: function () {
      return this.sourceBuildingVO.fusionInfoVO.isFusionSource && !this.sourceBuildingVO.fusionInfoVO.isFusionTarget;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeSelectSourceAndCatalystDialogListItemSourceVE.prototype, "sourceBuildingVO", {
    get: function () {
      return this.itemVO.data.buildingVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeSelectSourceAndCatalystDialogListItemSourceVE.prototype, "showBuyButton", {
    get: function () {
      return this.isSourceFeederDeco && !!this.buyPackageVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeSelectSourceAndCatalystDialogListItemSourceVE.prototype, "buyPackageVO", {
    get: function () {
      var e;
      for (var t = 0, i = p.CastleModel.fusionForgeData.xml.getFusionShopPackages(c.ClientConstPackages.FUSION_SHOP_ID_HARD); t < i.length; t++) {
        var n = i[t];
        if (f.instanceOfClass(n.reward, "CollectableItemBuildingVO") && n.reward.buildingVO.wodId == this.sourceBuildingVO.wodId) {
          e = n;
          break;
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeSelectSourceAndCatalystDialogListItemSourceVE.prototype, "isUseAble", {
    get: function () {
      return this.itemVO.data.amount != 0 || this.itemVO.data.buildingVO.isUnique();
    },
    enumerable: true,
    configurable: true
  });
  DecorationForgeSelectSourceAndCatalystDialogListItemSourceVE.prototype.isSelectable = function () {
    return this.isUseAble;
  };
  return DecorationForgeSelectSourceAndCatalystDialogListItemSourceVE;
}(h.ADecorationForgeSelectionListItemVE);
exports.DecorationForgeSelectSourceAndCatalystDialogListItemSourceVE = C;
var _ = require("./14.js");
var m = require("./25.js");
o.classImplementsInterfaces(C, "ICollectableRendererList");
var f = require("./1.js");