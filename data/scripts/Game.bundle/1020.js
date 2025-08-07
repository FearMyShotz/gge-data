Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./16.js");
var u = require("./22.js");
var d = require("./4.js");
var p = require("./632.js");
var h = createjs.Point;
var g = function (e) {
  function BasicGateVO() {
    var t = this;
    t._gateBonus = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(BasicGateVO, e);
  BasicGateVO.prototype.updateSpawnPoints = function () {
    this._spawnPoints.length = 0;
    if (this.rotation == 0) {
      this._spawnPoints.push(new h(0, 1), new h(1, 1));
    } else {
      this._spawnPoints.push(new h(1, 0), new h(1, 1));
    }
  };
  BasicGateVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._gateBonus = l.int(u.CastleXMLUtils.getIntAttribute("gateBonus", t));
  };
  BasicGateVO.prototype.getNameString = function () {
    return this.group.toLowerCase() + "_name";
  };
  BasicGateVO.prototype.getShortInfoString = function () {
    return this.group.toLowerCase() + "_short_info";
  };
  BasicGateVO.prototype.getUpgradeInfoString = function () {
    return this.group.toLowerCase() + "_upgrade_info";
  };
  BasicGateVO.prototype.canUpgrade = function () {
    return e.prototype.canUpgrade.call(this) && this.level < d.CastleModel.areaData.activeIsoData.objects.defences.currentWallLevel;
  };
  Object.defineProperty(BasicGateVO.prototype, "usesColorFourCrest", {
    get: function () {
      return this.level <= 1;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.ADefenceBuildingVO.prototype, "usesColorFourCrest").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGateVO.prototype, "innerSpawnPoint", {
    get: function () {
      return this.spawnPoints[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGateVO.prototype, "outerSpawnPoint", {
    get: function () {
      return this.spawnPoints[1];
    },
    enumerable: true,
    configurable: true
  });
  BasicGateVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_UnitPercent, "dialog_defence_defenceBonusGate", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [this.gateBonus]), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    if (this.decoPoints > 0) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "protection_tt", new s.LocalizedNumberVO(this.decoPoints), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
  };
  Object.defineProperty(BasicGateVO.prototype, "gateBonus", {
    get: function () {
      return this._gateBonus;
    },
    enumerable: true,
    configurable: true
  });
  return BasicGateVO;
}(p.ADefenceBuildingVO);
exports.BasicGateVO = g;
a.classImplementsInterfaces(g, "IShopVO", "ICostVO", "IInventoryVO");