Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./148.js");
var c = require("./1217.js");
var u = function (e) {
  function AlienInvasionMapobjectVO() {
    var t = e.call(this) || this;
    t.name = "AlienInvasion";
    t.type = "-";
    t._secondsSinceEspionage = -1;
    t._associatedEventID = a.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE;
    t._alienPlayerID = l.ClientConstNPCs.NPC_ID_USER_INVASION;
    t.areaType = s.WorldConst.AREA_TYPE_ALIEN_CAMP;
    return t;
  }
  n.__extends(AlienInvasionMapobjectVO, e);
  Object.defineProperty(AlienInvasionMapobjectVO.prototype, "areaNameString", {
    get: function () {
      return r.Localize.text("alienInvasion_castleName");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AlienInvasionMapobjectVO.prototype, "assetTypeName", {
    get: function () {
      return "AlienInvasion";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.AAlienInvasionMapobjectVO.prototype, "assetTypeName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return AlienInvasionMapobjectVO;
}(c.AAlienInvasionMapobjectVO);
exports.AlienInvasionMapobjectVO = u;
var d = require("./101.js");
o.classImplementsInterfaces(u, "IDetailViewAble", "IWorldmapObjectVO", "IDungeonMapobjectVO");