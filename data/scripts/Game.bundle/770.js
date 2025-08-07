Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./16.js");
var c = require("./4.js");
var u = require("./336.js");
var d = require("./632.js");
var p = require("./858.js");
var h = function (e) {
  function CastlewallDefenceVO() {
    var t = e.call(this) || this;
    t._name = "Castlewall";
    t._group = "Defence";
    t._width = 1;
    t._height = 1;
    t._rotationType = u.IsoObjectRotationEnum._2FramesFor4Dir;
    return t;
  }
  n.__extends(CastlewallDefenceVO, e);
  Object.defineProperty(CastlewallDefenceVO.prototype, "isAvailableByBuildOrder", {
    get: function () {
      var e = r.int(this.isoData ? this.isoData.objects.defences.currentWallLevel : c.CastleModel.areaData.activeIsoData.objects.defences.currentWallLevel);
      return this.level == e + 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlewallDefenceVO.prototype, "isAvailableByLevelAndEffect", {
    get: function () {
      return this.isAvailableByBuildOrder && Object.getOwnPropertyDescriptor(p.AShopVO.prototype, "isAvailableByLevelAndEffect").get.call(this);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlewallDefenceVO.prototype, "isAvailableByLevel", {
    get: function () {
      return Object.getOwnPropertyDescriptor(p.AShopVO.prototype, "isAvailableByLevel").get.call(this);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.ADefenceBuildingVO.prototype, "isAvailableByLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlewallDefenceVO.prototype.getNameString = function () {
    return "castlewall_name";
  };
  Object.defineProperty(CastlewallDefenceVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.ADefenceBuildingVO.prototype, "isInfoTooltipAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlewallDefenceVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.ADefenceBuildingVO.prototype, "isRingmenuAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlewallDefenceVO.prototype.createInfoDialogItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Defence, "dialog_defence_defenceBonusWall", new s.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [this.wallBonus]), l.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return CastlewallDefenceVO;
}(d.ADefenceBuildingVO);
exports.CastlewallDefenceVO = h;
a.classImplementsInterfaces(h, "IShopVO", "ICostVO", "IInventoryVO");