Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = require("./4.js");
var a = function () {
  function GeneralGeneralSlotXmlVO(e = null) {
    if (e) {
      this.fillFromParamXml(e);
    }
  }
  Object.defineProperty(GeneralGeneralSlotXmlVO.prototype, "slotID", {
    get: function () {
      return this._slotID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralGeneralSlotXmlVO.prototype, "abilityGroupIDs", {
    get: function () {
      return this._abilityGroupIDs;
    },
    enumerable: true,
    configurable: true
  });
  GeneralGeneralSlotXmlVO.prototype.fillFromParamXml = function (e) {
    var t = this;
    this._slotID = parseInt(e.slotID || "0");
    var i = n.CastleXMLUtils.getIntArrayFromString(n.CastleXMLUtils.getValueOrDefault("abilityGroupIDs", e, ""), ",");
    this._abilityGroupIDs = [];
    i.forEach(function (e) {
      var i = o.CastleModel.generalsData.getAbilityGroupByID(e);
      if (i && i.length > 0) {
        t._abilityGroupIDs.push(e);
      }
    });
  };
  Object.defineProperty(GeneralGeneralSlotXmlVO.prototype, "abilityGroups", {
    get: function () {
      var e = [];
      for (var t = 0; t < this.abilityGroupIDs.length; t++) {
        e.push(o.CastleModel.generalsData.getAbilityGroupByID(this.abilityGroupIDs[t]));
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  return GeneralGeneralSlotXmlVO;
}();
exports.GeneralGeneralSlotXmlVO = a;