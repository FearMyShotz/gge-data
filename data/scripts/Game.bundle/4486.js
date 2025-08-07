Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./51.js");
var s = require("./4487.js");
var r = require("./184.js");
var l = function (e) {
  function PlagueEventVO() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(PlagueEventVO, e);
  Object.defineProperty(PlagueEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return PlagueEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BuyPackagesEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlagueEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_Plague";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BuyPackagesEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlagueEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return a.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_PLAGUE_MONK;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BuyPackagesEventVO.prototype, "eventFullsizeCharacterName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  PlagueEventVO.prototype.openMerchantDialog = function (e, t) {
    this.executeOpenDialog(e, c.CastlePlagueMonkEventDialog, new s.CastlePlagueMonkEventDialogProperties(this));
  };
  Object.defineProperty(PlagueEventVO.prototype, "primesaleDescriptionTextID", {
    get: function () {
      return "dialog_primeday_primesale_plagueDoctor_description";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BuyPackagesEventVO.prototype, "primesaleDescriptionTextID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlagueEventVO.prototype, "primesaleSaveRubiesTextID", {
    get: function () {
      return "dialog_primeday_primesale_plagueDoctor_banner";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BuyPackagesEventVO.prototype, "primesaleSaveRubiesTextID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  PlagueEventVO.__initialize_static_members = function () {
    PlagueEventVO.EVENT_BUILDING_WOD = 289;
  };
  return PlagueEventVO;
}(r.BuyPackagesEventVO);
exports.PlagueEventVO = l;
var c = require("./4488.js");
o.classImplementsInterfaces(l, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");
l.__initialize_static_members();