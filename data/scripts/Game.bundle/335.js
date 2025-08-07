Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = function () {
  function AllianceCrestVO() {
    this._layoutID = -1;
    this._colorIDs = [];
    this._colors = [];
    this._frameID = 1;
    this._isEmpty = false;
    this._isEmpty = true;
  }
  Object.defineProperty(AllianceCrestVO.prototype, "layoutID", {
    get: function () {
      return this._layoutID;
    },
    set: function (e) {
      this._layoutID = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCrestVO.prototype, "layoutVO", {
    get: function () {
      return a.CastleModel.allianceCrestData.getLayoutVOById(this._layoutID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCrestVO.prototype, "colors", {
    get: function () {
      if (this._colors.length == 0) {
        for (var e = 0; e < this._colorIDs.length; e++) {
          var t = n.int(this._colorIDs[e]);
          var i = a.CastleModel.allianceCrestData.getColorVOById(t);
          if (i) {
            this._colors.push(i);
          }
        }
      }
      return this._colors;
    },
    enumerable: true,
    configurable: true
  });
  AllianceCrestVO.prototype.resetColors = function () {
    this._colorIDs = [];
    this._colors = [];
  };
  Object.defineProperty(AllianceCrestVO.prototype, "colorIDs", {
    get: function () {
      return this._colorIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCrestVO.prototype, "frameID", {
    get: function () {
      return this._frameID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCrestVO.prototype, "isEmpty", {
    get: function () {
      return this._isEmpty;
    },
    enumerable: true,
    configurable: true
  });
  AllianceCrestVO.prototype.getParamObject = function () {
    var e = [];
    for (var t = 0; t < this.layoutVO.noofColors; t++) {
      e.push(this._colorIDs[t]);
    }
    return {
      ACLI: this._layoutID,
      ACCS: e
    };
  };
  AllianceCrestVO.prototype.cloneFromVO = function (e) {
    this.fillWithData(e.getParamObject());
  };
  AllianceCrestVO.prototype.fillWithData = function (e) {
    if (!e) {
      var t = a.CastleModel.allianceCrestData.createRandomCrest();
      e = {
        ACLI: t.layoutID,
        ACCS: t.colorIDs
      };
    }
    if (e) {
      this._layoutID = n.int(e.ACLI);
      this._colorIDs = e.ACCS;
      this._colors = [];
      this._isEmpty = false;
    } else {
      this._isEmpty = true;
    }
  };
  AllianceCrestVO.prototype.fillFromArray = function (e) {
    var t = {
      ACLI: e[0],
      ACCS: e[1]
    };
    this.fillWithData(t);
  };
  AllianceCrestVO.prototype.isClonedAEVOChanged = function (e) {
    return this.layoutID != e.layoutID || this._colorIDs.length > 0 && this._colorIDs[0] != e.colorIDs[0] || this._colorIDs.length > 1 && this._colorIDs[1] != e.colorIDs[1] || this._colorIDs.length > 2 && this._colorIDs[2] != e.colorIDs[2];
  };
  AllianceCrestVO.prototype.randomize = function () {
    var e = a.CastleModel.allianceCrestData.createRandomCrest();
    this.cloneFromVO(e);
  };
  AllianceCrestVO.prototype.setColorAtIndex = function (e, t) {
    this._colorIDs[t] = e;
    this._colors = [];
  };
  return AllianceCrestVO;
}();
exports.AllianceCrestVO = o;
var a = require("./4.js");