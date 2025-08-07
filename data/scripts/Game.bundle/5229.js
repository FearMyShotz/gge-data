Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AreaFactory() {}
  AreaFactory.createArea = function (e) {
    var t = new r.AreaData();
    var i = d.int(e.areaType);
    var n = [];
    switch (i) {
      case u.WorldConst.AREA_TYPE_CASTLE:
      case u.WorldConst.AREA_TYPE_CAPITAL:
      case u.WorldConst.AREA_TYPE_OUTPOST:
      case u.WorldConst.AREA_TYPE_FACTION_CAMP:
      case u.WorldConst.AREA_TYPE_KINGDOM_CASTLE:
      case u.WorldConst.AREA_TYPE_TREASURE_CAMP:
      case u.WorldConst.AREA_TYPE_METROPOL:
        n = [s.AreaDataEnum.COMMON_INFO, s.AreaDataEnum.ISO_DATA, s.AreaDataEnum.CONSTRUCTION_LIST, s.AreaDataEnum.STORAGE, s.AreaDataEnum.CONSTRUCTION_ITEMS];
    }
    switch (i) {
      case u.WorldConst.AREA_TYPE_FACTION_CAMP:
      case u.WorldConst.AREA_TYPE_TREASURE_CAMP:
        n.push(s.AreaDataEnum.MORALITY);
    }
    switch (i) {
      case u.WorldConst.AREA_TYPE_KINGDOM_CASTLE:
        n.push(s.AreaDataEnum.SLUM);
    }
    t.areaInfo = e;
    t.initData(n);
    return t;
  };
  AreaFactory.parseAreaInfo = function (e, t) {
    var i;
    if (e == u.WorldConst.AREA_TYPE_TREASURE_CAMP) {
      i = new a.EventCampMapobjectVO();
      if (l.CastleModel.specialEventData.activeSeasonVO) {
        i.mapID = d.int(l.CastleModel.specialEventData.activeSeasonVO.mapID);
      }
      i.ownerInfo = l.CastleModel.otherPlayerData.getOwnInfoVO();
    } else {
      i = o.WorldmapObjectFactory.parseWorldMapArea(t.A);
      if (t.O) {
        i.ownerInfo = l.CastleModel.otherPlayerData.parseOwnerInfo(t.O);
      } else if (!c.instanceOfClass(i, "OutpostMapobjectVO")) {
        i.ownerInfo = l.CastleModel.otherPlayerData.getOwnerInfoVO(i.ownerInfo.playerID);
      }
    }
    return i;
  };
  AreaFactory.createAreaFromServer = function (e, t) {
    var i = AreaFactory.parseAreaInfo(e, t);
    return AreaFactory.createArea(i);
  };
  return AreaFactory;
}();
exports.AreaFactory = n;
var o = require("./147.js");
var a = require("./734.js");
var s = require("./1158.js");
var r = require("./5263.js");
var l = require("./4.js");
var c = require("./1.js");
var u = require("./5.js");
var d = require("./6.js");