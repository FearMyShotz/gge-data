Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MouseEvent;
var o = function () {
  function PrebuiltCastleSelector(e, t, i) {
    this._selectionIndex = 0;
    this.numberOfCastles = 0;
    this.spaceId = 0;
    this.disp = e;
    this.numberOfCastles = i;
    this.castleItemAssetName = t;
    this.camps = [];
    for (var n = 0; n < i; ++n) {
      var o = e[t + n];
      this.camps[n] = new a.PrebuiltCastleItem(o);
    }
  }
  PrebuiltCastleSelector.prototype.show = function (e) {
    this.spaceId = e;
    this.disp.addEventListener(n.CLICK, this.bindFunction(this.onClick));
    c.CastleBasicController.getInstance().addEventListener(l.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleListAvailable));
    u.CastleModel.smartfoxClient.sendCommandVO(new s.C2SGetDetailedCastleListVO());
  };
  PrebuiltCastleSelector.prototype.onDetailedCastleListAvailable = function (e) {
    var t = u.CastleModel.prebuiltCastleData.getCastles(this.spaceId);
    for (var i = 0; i < this.numberOfCastles; ++i) {
      this.camps[i].show(t[i]);
    }
    c.CastleBasicController.getInstance().removeEventListener(l.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleListAvailable));
  };
  PrebuiltCastleSelector.prototype.hide = function () {
    this.disp.removeEventListener(n.CLICK, this.bindFunction(this.onClick));
    for (var e = 0; e < this.numberOfCastles; ++e) {
      this.camps[e].hide();
    }
    c.CastleBasicController.getInstance().removeEventListener(l.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleListAvailable));
  };
  Object.defineProperty(PrebuiltCastleSelector.prototype, "selectionIndex", {
    get: function () {
      return this._selectionIndex;
    },
    set: function (e) {
      if (e > this.numberOfCastles - 1 || e < 0) {
        throw new Error("Selection must be 0.." + (this.numberOfCastles - 1) + ". Passed " + e);
      }
      this._selectionIndex = e;
      this.validateSelection();
      this.updateSelectionMark();
    },
    enumerable: true,
    configurable: true
  });
  PrebuiltCastleSelector.prototype.validateSelection = function () {
    for (var e = 0, t = u.CastleModel.prebuiltCastleData.getCastles(this.spaceId); t[this._selectionIndex].minLevel > u.CastleModel.userData.level && e <= this.numberOfCastles;) {
      e++;
      this._selectionIndex = r.int((this._selectionIndex + 1) % this.numberOfCastles);
    }
    if (e >= this.numberOfCastles) {
      throw new Error("No castle is selectable by the user. How did we even end up in this dialog then?");
    }
  };
  Object.defineProperty(PrebuiltCastleSelector.prototype, "selectionData", {
    get: function () {
      return this.camps[this._selectionIndex].castleItemVO;
    },
    enumerable: true,
    configurable: true
  });
  PrebuiltCastleSelector.prototype.updateSelectionMark = function () {
    for (var e = 0; e < this.numberOfCastles; ++e) {
      this.camps[e].selected = e == this._selectionIndex;
    }
  };
  PrebuiltCastleSelector.prototype.onClick = function (e) {
    if (d.ButtonHelper.isButtonEnabled(e.target)) {
      for (var t = 0; t < this.numberOfCastles; ++t) {
        if (e.target == this.disp[this.castleItemAssetName + t]) {
          this.selectionIndex = t;
          return;
        }
      }
    }
  };
  return PrebuiltCastleSelector;
}();
exports.PrebuiltCastleSelector = o;
var a = require("./3553.js");
var s = require("./217.js");
var r = require("./6.js");
var l = require("./218.js");
var c = require("./15.js");
var u = require("./4.js");
var d = require("./8.js");