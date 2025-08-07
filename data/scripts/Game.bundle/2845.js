Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./999.js");
var r = function (e) {
  function EventBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(EventBuildingVO, e);
  Object.defineProperty(EventBuildingVO.prototype, "isoSortOrder", {
    get: function () {
      return this.eventVO.isoSortOrder;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AEventBuildingVO.prototype, "isoSortOrder").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  EventBuildingVO.prototype.getInfoTooltipLine1 = function () {
    return a.Localize.text(this.eventVO.eventBuildingNameId);
  };
  EventBuildingVO.prototype.getInfoTooltipLine2 = function () {
    if (this.eventVO.eventBuildingNameId == "eventBuilding_fameBoost" || this.eventVO.eventBuildingNameId == "eventBuilding_Colossus") {
      return a.Localize.text("glory_camp_hover");
    } else {
      return a.Localize.text("clickToOpen");
    }
  };
  Object.defineProperty(EventBuildingVO.prototype, "eventVO", {
    get: function () {
      return this._eventVO;
    },
    set: function (e) {
      this._eventVO = e;
    },
    enumerable: true,
    configurable: true
  });
  return EventBuildingVO;
}(s.AEventBuildingVO);
exports.EventBuildingVO = r;
o.classImplementsInterfaces(r, "IShopVO", "ICostVO", "IInventoryVO");