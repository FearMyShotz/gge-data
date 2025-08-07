Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./482.js");
var o = require("./533.js");
var a = function () {
  function CastleResourcesVO() {
    this._castleID = 0;
    this._kingdomID = 0;
    this._resources = new r.CollectableList();
  }
  CastleResourcesVO.prototype.parseGRC = function (e) {
    this._castleID = _.int(e.AID);
    this._kingdomID = _.int(e.KID);
    this._resources = s.CollectableManager.parser.createGoodsListSave(new C.CollectableItemWoodVO(e.W), new g.CollectableItemStoneVO(e.S), new u.CollectableItemFoodVO(e.F), new c.CollectableItemCoalVO(e.C), new h.CollectableItemOilVO(e.O), new d.CollectableItemGlassVO(e.G), new p.CollectableItemIronVO(e.I), new l.CollectableItemAquamarineVO(e.A), new o.CollectableItemMeadVO(e.MEAD), new n.CollectableItemBeefVO(e.BEEF), new m.CollectableItemHoneyVO(e.HONEY));
  };
  Object.defineProperty(CastleResourcesVO.prototype, "castleID", {
    get: function () {
      return this._castleID;
    },
    set: function (e) {
      this._castleID = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourcesVO.prototype, "kingdomID", {
    get: function () {
      return this._kingdomID;
    },
    set: function (e) {
      this._kingdomID = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourcesVO.prototype, "resources", {
    get: function () {
      return this._resources;
    },
    set: function (e) {
      this._resources = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourcesVO.prototype, "resList", {
    get: function () {
      var e = [];
      for (var t = 0; t < this._resources.list.length; t++) {
        e.push(this._resources.list[t].amount);
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  return CastleResourcesVO;
}();
exports.CastleResourcesVO = a;
var s = require("./50.js");
var r = require("./48.js");
var l = require("./1013.js");
var c = require("./505.js");
var u = require("./453.js");
var d = require("./506.js");
var p = require("./507.js");
var h = require("./508.js");
var g = require("./267.js");
var C = require("./268.js");
var _ = require("./6.js");
var m = require("./637.js");