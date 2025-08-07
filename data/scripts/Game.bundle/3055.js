Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./529.js");
var s = require("./4.js");
var r = require("./62.js");
var l = function (e) {
  function LegendTempleBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(LegendTempleBuildingVE, e);
  LegendTempleBuildingVE.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    c.CastleComponent.controller.addEventListener(a.LegendSkillsDataEvent.LEGEND_SKILLS_UPDATED, this.bindFunction(this.onLegendSkillDataUpdated));
    c.CastleComponent.controller.addEventListener(h.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onLegendSkillDataUpdated));
    c.CastleComponent.controller.addEventListener(h.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLegendSkillDataUpdated));
    c.CastleComponent.controller.addEventListener(g.IsoEvent.ON_OBJECT_CHANGED, this.bindFunction(this.onLegendSkillDataUpdated));
  };
  LegendTempleBuildingVE.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    c.CastleComponent.controller.removeEventListener(a.LegendSkillsDataEvent.LEGEND_SKILLS_UPDATED, this.bindFunction(this.onLegendSkillDataUpdated));
    c.CastleComponent.controller.removeEventListener(h.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onLegendSkillDataUpdated));
    c.CastleComponent.controller.removeEventListener(h.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLegendSkillDataUpdated));
    c.CastleComponent.controller.removeEventListener(g.IsoEvent.ON_OBJECT_CHANGED, this.bindFunction(this.onLegendSkillDataUpdated));
  };
  Object.defineProperty(LegendTempleBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_LegendTemple;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  LegendTempleBuildingVE.prototype.getRingMenuButtons = function () {
    var t = e.prototype.getRingMenuButtons.call(this);
    t.push(new u.RingMenuButtonLegendTemple());
    return t;
  };
  LegendTempleBuildingVE.prototype.createStatusIcons = function () {
    e.prototype.createStatusIcons.call(this);
    if (this.statusIcons.iconList.length <= 0) {
      var t = s.CastleModel.legendSkillData.availablePoints > 0;
      var i = s.CastleModel.currencyData.getCurrencyById(p.ClientConstCurrency.ID_SCEAT_TOKEN);
      var n = i ? i.amount : 0;
      var o = n > 0;
      var a = n > 0 && n >= i.xmlCurrencyVO.softCap;
      var r = s.CastleModel.currencyData.getCurrencyById(p.ClientConstCurrency.ID_IMPERIAL_DUCAT);
      var l = r ? r.amount : 0;
      var c = l > 0;
      var u = l > 0 && l >= r.xmlCurrencyVO.softCap;
      var h = "legendTemple";
      h += a ? "2" : o ? "1" : "0";
      h += t ? "1" : "0";
      h += u ? "2" : c ? "1" : "0";
      this.statusIcons.addIcon(d.IsoStatusIconEnum.getByName(h));
    }
  };
  LegendTempleBuildingVE.prototype.onLegendSkillDataUpdated = function (e) {
    this.updateStatusIcon();
  };
  return LegendTempleBuildingVE;
}(r.ABasicBuildingVE);
exports.LegendTempleBuildingVE = l;
var c = require("./14.js");
var u = require("./3056.js");
var d = require("./177.js");
var p = require("./52.js");
var h = require("./32.js");
var g = require("./92.js");
o.classImplementsInterfaces(l, "ICollectableRendererList", "IIngameUICapable");