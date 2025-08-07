Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = require("./4.js");
var a = require("./165.js");
var s = function () {
  function AllianceCrestLayoutVO() {
    this._allianceCoatLayoutID = -1;
    this._noofColors = 0;
    this._eventID = 0;
    this._maxDuration = 0;
    this._effectIconID = 0;
  }
  AllianceCrestLayoutVO.prototype.parseXML = function (e) {
    this._allianceCoatLayoutID = n.CastleXMLUtils.getIntAttribute("allianceCoatLayoutID", e);
    this._noofColors = n.CastleXMLUtils.getIntAttribute("noofColors", e);
    this._eventID = n.CastleXMLUtils.getIntAttribute("eventID", e);
    this._maxDuration = n.CastleXMLUtils.getIntAttribute("maxDuration", e);
    this._effectIconID = n.CastleXMLUtils.getIntAttribute("effectIconID", e);
    this.parseEffects(e);
  };
  AllianceCrestLayoutVO.prototype.parseEffects = function (e) {
    this._effects = [];
    var t = n.CastleXMLUtils.getValueOrDefault("effects", e, "");
    if (t != "") {
      for (var i = 0, s = t.split(","); i < s.length; i++) {
        var r = s[i];
        if (r.length > 0) {
          var l = r.split("&");
          var c = o.CastleModel.effectsData.getEffectByID(parseInt(l[0]));
          var u = new a.BonusVO().parseFromValueString(c, l[1]);
          this._effects.push(u);
        }
      }
    }
  };
  Object.defineProperty(AllianceCrestLayoutVO.prototype, "allianceCoatLayoutID", {
    get: function () {
      return this._allianceCoatLayoutID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCrestLayoutVO.prototype, "noofColors", {
    get: function () {
      return this._noofColors;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCrestLayoutVO.prototype, "eventID", {
    get: function () {
      return this._eventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCrestLayoutVO.prototype, "maxDuration", {
    get: function () {
      return this._maxDuration;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCrestLayoutVO.prototype, "effectIconID", {
    get: function () {
      return this._effectIconID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCrestLayoutVO.prototype, "effects", {
    get: function () {
      return this._effects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCrestLayoutVO.prototype, "remainingSeconds", {
    get: function () {
      return o.CastleModel.allianceData.myAllianceVO.getRemainingSecondsForLayout(this._allianceCoatLayoutID);
    },
    enumerable: true,
    configurable: true
  });
  return AllianceCrestLayoutVO;
}();
exports.AllianceCrestLayoutVO = s;