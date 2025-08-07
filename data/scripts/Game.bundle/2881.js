Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./16.js");
var l = require("./28.js");
var c = require("./22.js");
var u = require("./53.js");
var d = require("./30.js");
var p = require("./44.js");
var h = function (e) {
  function AABGBoosterBuildingVO() {
    var t = this;
    t.skinID = 0;
    t.scoreSystemID = 0;
    t.lastSentPoints = 0;
    t.lastSentTimeStamp = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(AABGBoosterBuildingVO, e);
  AABGBoosterBuildingVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this.skinID = s.int(c.CastleXMLUtils.getIntAttribute("skinID", t));
    this.scoreSystemID = s.int(c.CastleXMLUtils.getIntAttribute("scoringID", t));
  };
  AABGBoosterBuildingVO.prototype.createInfoPanelItems = function (t) {
    e.prototype.createInfoPanelItems.call(this, t);
    t.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_InfluenceDepletion, "depletion_influence_tt", new a.LocalizedTextVO("relicequip_dialog_relicDecrease_value_single", [this.mineVO.reductionDisplay]));
  };
  AABGBoosterBuildingVO.prototype.createInfoDialogItems = function (t) {
    e.prototype.createInfoDialogItems.call(this, t);
    t.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_InfluenceDepletion, "depletion_influence_tt", new a.LocalizedTextVO("relicequip_dialog_relicDecrease_value_single", [this.mineVO.reductionDisplay]), r.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  AABGBoosterBuildingVO.prototype.parseServerObject = function (t) {
    e.prototype.parseServerObject.call(this, t);
    if (t.length > 0) {
      this.lastSentPoints = s.int(t[2]);
      this.lastSentTimeStamp = s.int(d.CachedTimer.getCachedTimer());
    }
  };
  Object.defineProperty(AABGBoosterBuildingVO.prototype, "skinName", {
    get: function () {
      return p.SpecialServerHelper.skinName;
    },
    enumerable: true,
    configurable: true
  });
  AABGBoosterBuildingVO.prototype.isAvailableInAreaType = function (t) {
    return !!u.ABGHelper.abgEvent && u.ABGHelper.abgEvent.settingVO.skinID == this.skinID && u.ABGHelper.abgEvent.settingVO.scoringSystemVO.scoringID == this.scoreSystemID && e.prototype.isAvailableInAreaType.call(this, t);
  };
  AABGBoosterBuildingVO.prototype.getVisualClassName = function () {
    var e = this.name + "_" + this.group;
    if (this.type != "") {
      e += "_" + this.type;
    }
    return e + "_" + this.skinName;
  };
  Object.defineProperty(AABGBoosterBuildingVO.prototype, "currentCollectedInfluencePoints", {
    get: function () {
      var e = d.CachedTimer.getCachedTimer() - this.lastSentTimeStamp;
      var t = s.int(e * l.ClientConstTime.MILLISEC_2_SEC * (this.mineVO.amountInfluencePerMinute / l.ClientConstTime.MINUTES_2_SEC));
      return Math.min(this.lastSentPoints + t, this.mineVO.maxInfluencePoints);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AABGBoosterBuildingVO.prototype, "timeTillEmptyInSeconds", {
    get: function () {
      return s.int(this.mineVO.maxInfluencePoints - this.currentCollectedInfluencePoints) / (this.mineVO.amountInfluencePerMinute / l.ClientConstTime.MINUTES_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  return AABGBoosterBuildingVO;
}(require("./536.js").AMineBuildingVO);
exports.AABGBoosterBuildingVO = h;
o.classImplementsInterfaces(h, "IShopVO", "ICostVO", "IInventoryVO");