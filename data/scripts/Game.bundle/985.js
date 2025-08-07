Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./12.js");
var s = require("./74.js");
var r = require("./84.js");
var l = require("./52.js");
var c = function (e) {
  function ModernPackageShopResourceTipEnum(t, i, n, a) {
    var s = e.call(this, t.type.name + "_" + t.id, o.BasicEnum.instantiationKey) || this;
    s._worldmapObjectFrame = 0;
    s._typeVO = t;
    s._titleTextId = i;
    s._descTextId = n;
    s._worldmapObjectFrame = a;
    return s;
  }
  n.__extends(ModernPackageShopResourceTipEnum, e);
  ModernPackageShopResourceTipEnum.getTypeByVO = function (e) {
    for (var t = 0, i = r.CastleEnum.getEnumListByClass(ModernPackageShopResourceTipEnum); t < i.length; t++) {
      var n = i[t];
      if (n.typeVO.isSameAs(e)) {
        return n;
      }
    }
    return ModernPackageShopResourceTipEnum.NONE;
  };
  Object.defineProperty(ModernPackageShopResourceTipEnum.prototype, "typeVO", {
    get: function () {
      return this._typeVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernPackageShopResourceTipEnum.prototype, "titleTextId", {
    get: function () {
      return this._titleTextId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernPackageShopResourceTipEnum.prototype, "descTextId", {
    get: function () {
      return this._descTextId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernPackageShopResourceTipEnum.prototype, "worldmapObjectFrame", {
    get: function () {
      return this._worldmapObjectFrame;
    },
    enumerable: true,
    configurable: true
  });
  ModernPackageShopResourceTipEnum.__initialize_static_members = function () {
    ModernPackageShopResourceTipEnum.NONE = new ModernPackageShopResourceTipEnum(new s.CollectableTypeVO(), "", "", 1);
    ModernPackageShopResourceTipEnum.AQUAMARINE = new ModernPackageShopResourceTipEnum(new s.CollectableTypeVO(a.CollectableEnum.AQUAMARINE), "dialog_eiland_aquamarinShop_noAquamarin_header", "dialog_eiland_aquamarinShop_noAquamarin_description", 4);
    ModernPackageShopResourceTipEnum.KHAN_TABLET = new ModernPackageShopResourceTipEnum(new s.CollectableTypeVO(a.CollectableEnum.GENERIC_CURRENCY, l.ClientConstCurrency.ID_KHAN_TABLET), "dialog_nomadInvasion_tip_title", "dialog_nomadInvasion_tip_description", 1);
    ModernPackageShopResourceTipEnum.SKULL_RELIC = new ModernPackageShopResourceTipEnum(new s.CollectableTypeVO(a.CollectableEnum.GENERIC_CURRENCY, l.ClientConstCurrency.ID_SKULL_RELIC), "dialog_thornking_tip_title", "dialog_thornking_tip_description", 2);
    ModernPackageShopResourceTipEnum.PEARL_RELIC = new ModernPackageShopResourceTipEnum(new s.CollectableTypeVO(a.CollectableEnum.GENERIC_CURRENCY, l.ClientConstCurrency.ID_PEARL_RELIC), "dialog_seaqueen_tip_title", "dialog_seaqueen_tip_description", 3);
    ModernPackageShopResourceTipEnum.GREEN_SKULL_RELIC = new ModernPackageShopResourceTipEnum(new s.CollectableTypeVO(a.CollectableEnum.GENERIC_CURRENCY, l.ClientConstCurrency.ID_GREEN_SKULL_RELIC), "dialog_thornking_tip_greenSkull_title", "dialog_thornking_tip_greenSkull_description", 2);
    ModernPackageShopResourceTipEnum.SAMURAI_TOKEN = new ModernPackageShopResourceTipEnum(new s.CollectableTypeVO(a.CollectableEnum.GENERIC_CURRENCY, l.ClientConstCurrency.ID_SAMURAI_TOKEN), "dialog_samuraiShop_tip_title", "dialog_samuraiShop_tip_description", 6);
    ModernPackageShopResourceTipEnum.SILVER_RUNE = new ModernPackageShopResourceTipEnum(new s.CollectableTypeVO(a.CollectableEnum.GENERIC_CURRENCY, l.ClientConstCurrency.ID_SILVER_RUNE), "dialog_underworld_tip_title_dummy", "dialog_underworld_tip_description", 7);
    ModernPackageShopResourceTipEnum.GOLD_RUNE = new ModernPackageShopResourceTipEnum(new s.CollectableTypeVO(a.CollectableEnum.GENERIC_CURRENCY, l.ClientConstCurrency.ID_GOLD_RUNE), "dialog_underworld_tip_gold_title", "dialog_underworld_tip2_description", 8);
    ModernPackageShopResourceTipEnum.KHAN_MEDAL = new ModernPackageShopResourceTipEnum(new s.CollectableTypeVO(a.CollectableEnum.GENERIC_CURRENCY, l.ClientConstCurrency.ID_KHAN_MEDAL), "dialog_notEnoughCurrency_title", "dialog_notEnoughCurrency_desc_khanMedals", 10);
    ModernPackageShopResourceTipEnum.SAMURAI_MEDAL = new ModernPackageShopResourceTipEnum(new s.CollectableTypeVO(a.CollectableEnum.GENERIC_CURRENCY, l.ClientConstCurrency.ID_SAMURAI_MEDAL), "dialog_notEnoughCurrency_title", "dialog_notEnoughCurrency_samuraiMedal_desc", 5);
  };
  return ModernPackageShopResourceTipEnum;
}(r.CastleEnum);
exports.ModernPackageShopResourceTipEnum = c;
c.__initialize_static_members();