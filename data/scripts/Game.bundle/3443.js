Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./4.js");
var r = require("./147.js");
var l = function (e) {
  function WmoCapturedLostDialogProperties(t, i, n, o, l) {
    var c = e.call(this) || this;
    c.title = "";
    c.copy = "";
    c.buildingList = [];
    c.ciList = [];
    c.ownerInfo = null;
    c.isCapturedDialog = false;
    c.isLostDialog = false;
    c.wmoVO = null;
    c.title = t;
    c.copy = i;
    c.isCapturedDialog = o;
    c.isLostDialog = l;
    c.buildingList = n[a.CommKeys.BUILDING_LIST] ? n[a.CommKeys.BUILDING_LIST] : n[a.CommKeys.WOD_IDS];
    c.ciList = n[a.CommKeys.CONSTRUCTION_ITEM_LIST] ? n[a.CommKeys.CONSTRUCTION_ITEM_LIST] : [];
    c.ownerInfo = s.CastleModel.otherPlayerData.parseOwnerInfo(n[a.CommKeys.OWNER_INFO_2]);
    c.ownerInfo ||= s.CastleModel.otherPlayerData.getOwnInfoVO();
    c.wmoVO = r.WorldmapObjectFactory.parseWorldMapArea(n[a.CommKeys.AREA_INFO_2]);
    return c;
  }
  n.__extends(WmoCapturedLostDialogProperties, e);
  Object.defineProperty(WmoCapturedLostDialogProperties.prototype, "isInventoryEmpty", {
    get: function () {
      return (!this.ciList || this.ciList.length == 0) && (!this.buildingList || this.buildingList.length == 0);
    },
    enumerable: true,
    configurable: true
  });
  return WmoCapturedLostDialogProperties;
}(o.BasicProperties);
exports.WmoCapturedLostDialogProperties = l;