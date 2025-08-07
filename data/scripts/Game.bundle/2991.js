Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./62.js");
var s = function (e) {
  function ConstructorBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ConstructorBuildingVE, e);
  Object.defineProperty(ConstructorBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Constructor;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ConstructorBuildingVE.prototype.createAdditionalClips = function () {
    e.prototype.createAdditionalClips.call(this);
    if (c.CastleModel.areaData.activeArea && c.CastleModel.areaData.activeArea.isMyArea && c.CastleModel.constructionItemData.hasNewExpiredItems()) {
      this.additionalClips.addClips(l.IsoAdditionalClipEnum.EXCLAMATION_MARK);
    }
  };
  ConstructorBuildingVE.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    c.CastleModel.constructionItemData.addEventListener(u.CastleConstructionItemsEvent.LAST_EXPIRATION_TIME_SAVED, this.bindFunction(this.onExpirationDataChanged));
    c.CastleModel.constructionItemData.addEventListener(u.CastleConstructionItemsEvent.NEC_RECEIVED, this.bindFunction(this.onExpirationDataChanged));
  };
  ConstructorBuildingVE.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    c.CastleModel.constructionItemData.removeEventListener(u.CastleConstructionItemsEvent.LAST_EXPIRATION_TIME_SAVED, this.bindFunction(this.onExpirationDataChanged));
    c.CastleModel.constructionItemData.removeEventListener(u.CastleConstructionItemsEvent.NEC_RECEIVED, this.bindFunction(this.onExpirationDataChanged));
  };
  ConstructorBuildingVE.prototype.onExpirationDataChanged = function (e) {
    this.updateAdditionalClips();
  };
  ConstructorBuildingVE.prototype.getRingMenuButtons = function () {
    var t = e.prototype.getRingMenuButtons.call(this);
    t.push(new r.RingMenuButtonConstructor());
    return t;
  };
  return ConstructorBuildingVE;
}(a.ABasicBuildingVE);
exports.ConstructorBuildingVE = s;
var r = require("./2992.js");
var l = require("./145.js");
var c = require("./4.js");
var u = require("./495.js");
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");