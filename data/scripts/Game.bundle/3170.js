Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./71.js");
var r = require("./15.js");
var l = require("./4.js");
var c = require("./1045.js");
var u = require("./244.js");
var d = function (e) {
  function CastleAquamarineShopDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleAquamarineShopDialog.NAME) || this;
  }
  n.__extends(CastleAquamarineShopDialog, e);
  CastleAquamarineShopDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    r.CastleBasicController.getInstance().addEventListener(s.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onUserResourcesChange));
  };
  CastleAquamarineShopDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    r.CastleBasicController.getInstance().removeEventListener(s.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onUserResourcesChange));
  };
  Object.defineProperty(CastleAquamarineShopDialog.prototype, "descriptionText", {
    get: function () {
      return "dialog_eiland_aquamarinShop_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleSpecialCurrencyMerchantDialog.prototype, "descriptionText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAquamarineShopDialog.prototype, "detailedDescriptionText", {
    get: function () {
      return "dialog_eiland_aquamarinShop_description";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleSpecialCurrencyMerchantDialog.prototype, "detailedDescriptionText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAquamarineShopDialog.prototype, "userSpecialCurrencies", {
    get: function () {
      var e = [];
      e.push(new h.CollectableTypeVO(p.CollectableEnum.AQUAMARINE));
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAquamarineShopDialog.prototype, "merchantScrollItem", {
    get: function () {
      return g.AquamarineShopScrollItem;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleSpecialCurrencyMerchantDialog.prototype, "merchantScrollItem").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAquamarineShopDialog.prototype, "isEvent", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleSpecialCurrencyMerchantDialog.prototype, "isEvent").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleAquamarineShopDialog.prototype.onUserResourcesChange = function (e) {
    this.setCurrencyDisplay();
  };
  CastleAquamarineShopDialog.prototype.getItemListVOs = function () {
    var e = [];
    if (l.CastleModel.kingdomData.activeKingdomID == a.WorldIsland.KINGDOM_ID) {
      var t = l.CastleModel.kingdomData.activeKingdomVO.slumVOs[0];
      if (t.level > 0) {
        for (var i = 0, n = t.packages; i < n.length; i++) {
          var o = n[i];
          if (o !== undefined && o.isVisible(l.CastleModel.userData.userLevel, l.CastleModel.userData.userLegendLevel, l.CastleModel.areaData.activeAreaInfo.areaType)) {
            var s = new u.MerchantScrollItemVO();
            s.eventPackageVO = o;
            s.specialEventVO = this.dialogProperties.buyPackageEventVO;
            e.push(s);
          }
        }
      }
    }
    return e;
  };
  CastleAquamarineShopDialog.__initialize_static_members = function () {
    CastleAquamarineShopDialog.NAME = "CastleAquamarinShopExternal";
  };
  return CastleAquamarineShopDialog;
}(c.CastleSpecialCurrencyMerchantDialog);
exports.CastleAquamarineShopDialog = d;
var p = require("./12.js");
var h = require("./74.js");
var g = require("./3171.js");
o.classImplementsInterfaces(d, "ICollectableRendererList");
d.__initialize_static_members();