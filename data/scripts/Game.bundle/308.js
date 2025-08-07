Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CrestVO() {
    this._backgroundType = 0;
    this.backgroundColor1 = 0;
    this.backgroundColor2 = 0;
    this.symbolPosType = 0;
    this.symbolColor1 = 0;
    this.symbolColor2 = 0;
    this.previousBackgroundColor2 = 0;
    this._isSet = false;
  }
  CrestVO.createDummyCrest = function () {
    var e = new CrestVO();
    e.setBackground(o.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 14408667);
    e.setSymbols(o.ClientConstCrest.SYMBOL_POSITION_NONE, 0, 14408667);
    return e;
  };
  CrestVO.prototype.setBackground = function (e, t = 0, i = 0) {
    this.previousBackgroundColor2 = this.backgroundColor2;
    this._backgroundType = l.int(e < o.ClientConstCrest.BACKGROUND_TYPES.length ? e : o.ClientConstCrest.BACKGROUND_TYPE_FOUR_X);
    this.backgroundColor1 = t;
    this.backgroundColor2 = this._backgroundType == o.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN ? t : i;
    this.fillClipColor();
  };
  CrestVO.prototype.setSymbols = function (e, t, i = 0, n = 0, s = 0) {
    this.symbolPosType = e < o.ClientConstCrest.SYMBOL_POSITION_TYPES.length ? e : o.ClientConstCrest.SYMBOL_POSITION_FOUR_X;
    this.symbolColor1 = i;
    this.symbolColor2 = s;
    if (t >= 0) {
      this.symbolType1 = a.CastleModel.crestSymbolData.getCrestSymbolVOByID(t);
    }
    if (n >= 0) {
      this.symbolType2 = a.CastleModel.crestSymbolData.getCrestSymbolVOByID(n);
    }
  };
  CrestVO.prototype.getParamObject = function () {
    var e = l.int(this.symbolType1 ? this.symbolType1.id : -1);
    var t = l.int(this.symbolType2 ? this.symbolType2.id : -1);
    return {
      BGT: this.backgroundType,
      BGC1: this.backgroundColor1,
      BGC2: this.backgroundColor2,
      SPT: this.symbolPosType,
      S1: e,
      SC1: this.symbolColor1,
      S2: t,
      SC2: this.symbolColor2
    };
  };
  CrestVO.prototype.loadFromParamObject = function (e) {
    var t;
    if (e) {
      this._isSet = e.IS;
      t = this._isSet ? e : o.ClientConstCrest.tutorialCrestVO.getParamObject();
      this.setSymbols(t.SPT, t.S1, t.SC1, t.S2, t.SC2);
      this.setBackground(t.BGT, t.BGC1, t.BGC2);
    } else {
      this.fillClipColor();
    }
  };
  CrestVO.prototype.fillClipColor = function () {
    this._colorsFour = [];
    switch (this.backgroundType) {
      case o.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN:
        this._colorsFour.push(this.backgroundColor1, this.backgroundColor1, this.backgroundColor1, this.backgroundColor1);
        break;
      case o.ClientConstCrest.BACKGROUND_TYPE_TWO_HORIZONTAL:
        this._colorsFour.push(this.backgroundColor1, this.backgroundColor2, this.backgroundColor1, this.backgroundColor2);
        break;
      case o.ClientConstCrest.BACKGROUND_TYPE_TWO_VERTICAL:
        this._colorsFour.push(this.backgroundColor1, this.backgroundColor1, this.backgroundColor2, this.backgroundColor2);
        break;
      case o.ClientConstCrest.BACKGROUND_TYPE_FOUR_X:
        this._colorsFour.push(this.backgroundColor1, this.backgroundColor2, this.backgroundColor2, this.backgroundColor1);
    }
    this._colorsTwo = [];
    if (this.backgroundType === o.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN) {
      this._colorsTwo.push(this.backgroundColor1, this.backgroundColor1);
    } else {
      this._colorsTwo.push(this.backgroundColor1, this.backgroundColor2);
    }
  };
  Object.defineProperty(CrestVO.prototype, "colorsFour", {
    get: function () {
      return this._colorsFour;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CrestVO.prototype, "colorsTwo", {
    get: function () {
      return this._colorsTwo;
    },
    enumerable: true,
    configurable: true
  });
  CrestVO.prototype.clone = function () {
    var e = new CrestVO();
    e.backgroundType = this.backgroundType;
    e.backgroundColor1 = this.backgroundColor1;
    e.backgroundColor2 = this.backgroundColor2;
    e.symbolPosType = this.symbolPosType;
    e.symbolType1 = this.symbolType1;
    e.symbolType2 = this.symbolType2;
    e.symbolColor1 = this.symbolColor1;
    e.symbolColor2 = this.symbolColor2;
    e.fillClipColor();
    return e;
  };
  Object.defineProperty(CrestVO.prototype, "tooltipText", {
    get: function () {
      var e = "";
      if (this.symbolBonusStrings != null) {
        for (var t = 0, i = this.symbolBonusStrings; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined && n != "" && n != null) {
            e += n + "\n";
          }
        }
      }
      if (e == "") {
        return null;
      } else {
        return e;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CrestVO.prototype, "symbolBonusStrings", {
    get: function () {
      var e;
      var t;
      if (r.instanceOfClass(this.symbolType1, "PremiumCrestSymbolVO")) {
        e = this.symbolType1.toolTipText;
      }
      if (r.instanceOfClass(this.symbolType2, "PremiumCrestSymbolVO")) {
        if (e != null) {
          if (e == (t = this.symbolType2.toolTipText)) {
            e = this.symbolType1.getAdjustedTooltipText(true);
            t = "";
          } else {
            e += "\n";
          }
        } else {
          e = this.symbolType2.toolTipText;
        }
      }
      return [e, t];
    },
    enumerable: true,
    configurable: true
  });
  CrestVO.prototype.createRandom = function () {
    var e = this.getRandomArrayElement(o.ClientConstCrest.RANDOM_CRESTS_STRINGS);
    this.loadFromParamObject(JSON.parse(e));
  };
  CrestVO.prototype.getRandomArrayElement = function (e, t = null) {
    for (var i = e[s.Random.integer(0, e.length)]; t && t.indexOf(i) >= 0;) {
      i = e[s.Random.integer(0, e.length)];
    }
    return i;
  };
  Object.defineProperty(CrestVO.prototype, "backgroundType", {
    get: function () {
      return this._backgroundType;
    },
    set: function (e) {
      if (this._backgroundType == o.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN && e != this._backgroundType) {
        this.backgroundColor2 = this.previousBackgroundColor2;
      } else if (e == o.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN) {
        this.previousBackgroundColor2 = this.backgroundColor2;
      }
      this._backgroundType = e;
    },
    enumerable: true,
    configurable: true
  });
  CrestVO.prototype.equals = function (e) {
    return this._backgroundType == e.backgroundType && this.backgroundColor1 == e.backgroundColor1 && this.backgroundColor2 == e.backgroundColor2 && this.symbolPosType == e.symbolPosType && this.symbolType1 == e.symbolType1 && this.symbolType2 == e.symbolType2 && this.symbolColor1 == e.symbolColor1 && this.symbolColor2 == e.symbolColor2;
  };
  Object.defineProperty(CrestVO.prototype, "isBlack", {
    get: function () {
      return this._backgroundType == 0 && this.backgroundColor1 == 0 && this.backgroundColor2 == 0 && this.symbolPosType == 0 && this.symbolColor1 == 0 && this.symbolColor2 == 0;
    },
    enumerable: true,
    configurable: true
  });
  CrestVO.prototype.getEffectsByType = function (e, t = null) {
    t = t || c.CastleEffectConditionVO.NULL_CONDITION;
    var i = [];
    if (r.instanceOfClass(this.symbolType1, "PremiumCrestSymbolVO")) {
      i = i.concat(this.symbolType1.getEffectsByType(e, t));
    }
    if (r.instanceOfClass(this.symbolType2, "PremiumCrestSymbolVO")) {
      i = i.concat(this.symbolType2.getEffectsByType(e, t));
    }
    return i;
  };
  CrestVO.prototype.getEffectValue = function (e, t) {
    var n = require("./111.js").CastleEffectsHelper.getTotalEffectValue(this.getEffectsByType(e, t), true);
    return n || new e.valueClass();
  };
  return CrestVO;
}();
exports.CrestVO = n;
var o = require("./368.js");
var a = require("./4.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./6.js");
var c = require("./142.js");