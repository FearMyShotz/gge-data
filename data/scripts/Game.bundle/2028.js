Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./188.js");
var l = require("./22.js");
var c = require("./4.js");
var u = require("./165.js");
var d = function (e) {
  function TitleVO() {
    var t = e !== null && e.apply(this, arguments) || this;
    t._titleID = -1;
    t._titleSystem = "";
    t._threshold = 0;
    t._isAForcedTitle = false;
    t._decay = 0;
    t._isPositive = false;
    t._topX = 0;
    t._previousTitleID = -1;
    t._rewardID = -1;
    t._mightValue = -1;
    t._currentAssigneePID = -1;
    t._assignmentCooldown = 0;
    t._nextTitleID = -1;
    t._orderInSystem = -1;
    return t;
  }
  n.__extends(TitleVO, e);
  TitleVO.prototype.parseXml = function (e) {
    this._titleID = parseInt(l.CastleXMLUtils.getValueOrDefault("titleID", e, "-1", true));
    this._titleSystem = l.CastleXMLUtils.getValueOrDefault("type", e, "-1", true);
    this._threshold = parseInt(l.CastleXMLUtils.getValueOrDefault("threshold", e, "-1", false));
    this._displayType = l.CastleXMLUtils.getValueOrDefault("displayType", e, "-1", false);
    this._isAForcedTitle = parseInt(l.CastleXMLUtils.getValueOrDefault("forced", e, "-1", false)) == 1;
    this._decay = parseInt(l.CastleXMLUtils.getValueOrDefault("decay", e, "-1", false));
    this._isPositive = parseInt(l.CastleXMLUtils.getValueOrDefault("isPositive", e, "-1", false)) == 1;
    this._topX = parseInt(l.CastleXMLUtils.getValueOrDefault("topX", e, "-1", false));
    this._previousTitleID = parseInt(l.CastleXMLUtils.getValueOrDefault("previousTitleID", e, "-1", false));
    this._rewardID = parseInt(l.CastleXMLUtils.getValueOrDefault("rewardID", e, "-1", false));
    this._rewardList = c.CastleModel.rewardData.getListById(this._rewardID);
    this._mightValue = parseInt(l.CastleXMLUtils.getValueOrDefault("mightValue", e, "-1"));
    var t = l.CastleXMLUtils.getValueOrDefault("effects", e, "");
    if (t != "") {
      for (var i = 0, n = t.split(","); i < n.length; i++) {
        var o = n[i];
        if (o.length > 0) {
          var a = o.split("&");
          var s = c.CastleModel.effectsData.getEffectByID(parseInt(a[0]));
          var r = new u.BonusVO().parseFromValueString(s, a[1]);
          this._boni.push(r);
        }
      }
    }
  };
  TitleVO.prototype.parseTI = function (e) {
    this._assignmentCooldown = s.int(e.TCD);
    this._currentAssigneePID = s.int(e.PID);
    this._currentAssignee = e.PN;
  };
  TitleVO.prototype.resetAssignment = function () {
    this._assignmentCooldown = 0;
    this._currentAssigneePID = -1;
    this._currentAssignee = "";
  };
  Object.defineProperty(TitleVO.prototype, "titleID", {
    get: function () {
      return this._titleID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "titleSystem", {
    get: function () {
      return this._titleSystem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "threshold", {
    get: function () {
      return this._threshold;
    },
    set: function (e) {
      this._threshold = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "displayType", {
    get: function () {
      return this._displayType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "isAForcedTitle", {
    get: function () {
      return this._isAForcedTitle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "decay", {
    get: function () {
      return this._decay;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "topX", {
    get: function () {
      return this._topX;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "isKing", {
    get: function () {
      return this.titleID == 50;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "isPositive", {
    get: function () {
      return this._isPositive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "isTopXTitle", {
    get: function () {
      return this.topX > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "previousTitleID", {
    get: function () {
      return this._previousTitleID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "nextTitleID", {
    get: function () {
      return this._nextTitleID;
    },
    set: function (e) {
      this._nextTitleID = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "orderInSystem", {
    get: function () {
      return this._orderInSystem;
    },
    set: function (e) {
      this._orderInSystem = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "rewardID", {
    get: function () {
      return this._rewardID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "mightValue", {
    get: function () {
      return this._mightValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "currentAssignee", {
    get: function () {
      return this._currentAssignee;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "currentAssigneePID", {
    get: function () {
      return this._currentAssigneePID;
    },
    set: function (e) {
      this._currentAssigneePID = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "textID", {
    get: function () {
      if (this.titleID == -1) {
        return "";
      } else {
        return String("playerTitle_" + this.titleID);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "descriptionTextVO", {
    get: function () {
      if (this.isIslandTitle) {
        var e = "";
        for (var t = 0, i = this.boni; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            if (e != "") {
              e += "\n";
            }
            e += a.Localize.text(n.effect.defaultTextID, n.effectValue.textReplacements);
          }
        }
        return new o.LocalizedTextVO(e);
      }
      return p.CastleTitleSystemHelper.getTitleRewardText(this);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "isSuffix", {
    get: function () {
      return this._displayType == r.ClientConstTitle.DISPLAYTYPE_SUFFIX;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "isIslandTitle", {
    get: function () {
      return this._titleSystem == r.ClientConstTitle.ISLAND_TITLE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "isAssigned", {
    get: function () {
      return this.currentAssigneePID != -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "assignmentCooldown", {
    get: function () {
      return this._assignmentCooldown;
    },
    enumerable: true,
    configurable: true
  });
  return TitleVO;
}(require("./686.js").EffectsHandlerVO);
exports.TitleVO = d;
var p = require("./106.js");