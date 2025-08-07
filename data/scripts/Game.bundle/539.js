Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./129.js");
var s = function (e) {
  function AUnitProductionBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AUnitProductionBuildingVE, e);
  AUnitProductionBuildingVE.prototype.addEventListener = function () {
    r.CastleComponent.controller.addEventListener(a.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, this.bindFunction(this.onPackageUpdate));
    e.prototype.addEventListener.call(this);
  };
  AUnitProductionBuildingVE.prototype.removeEventListener = function () {
    r.CastleComponent.controller.removeEventListener(a.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, this.bindFunction(this.onPackageUpdate));
    e.prototype.removeEventListener.call(this);
  };
  AUnitProductionBuildingVE.prototype.getRingMenuButtons = function () {
    var t = e.prototype.getRingMenuButtons.call(this);
    t.push(new u.RingMenuButtonRecruit());
    t.push(new c.RingMenuButtonProduce());
    t.push(new l.RingMenuButtonOverseer());
    return t;
  };
  AUnitProductionBuildingVE.prototype.onPackageUpdate = function (e) {
    this.updateStatusIcon();
  };
  Object.defineProperty(AUnitProductionBuildingVE.prototype, "unitProductionBuildingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return AUnitProductionBuildingVE;
}(require("./457.js").AProductionBuildingVE);
exports.AUnitProductionBuildingVE = s;
var r = require("./14.js");
var l = require("./1559.js");
var c = require("./2932.js");
var u = require("./1583.js");
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");