Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleShoppingCartPrimeDayCategory(e, t, i, n) {
    this._groupId = 0;
    this._categoryMc = e;
    this._groupId = t + 1;
    e.gotoAndStop(this._groupId);
    this._choosableGroup = new o.CastleShoppingCartPrimeDayChoosableGroup(this, i);
    this._selectedGroup = new a.CastleShoppingCartPrimeDaySelectedGroup(this, n);
    if (this._selectedGroup.full()) {
      this._choosableGroup.disable();
    }
  }
  CastleShoppingCartPrimeDayCategory.prototype.checkClick = function (e) {
    var t = this._choosableGroup.checkClick(e) || this._selectedGroup.checkClick(e);
    if (this._selectedGroup.full()) {
      this._choosableGroup.disable();
    } else {
      this._choosableGroup.enable();
    }
    return t;
  };
  CastleShoppingCartPrimeDayCategory.prototype.clear = function () {
    this._choosableGroup.clear();
    this._selectedGroup.clear();
  };
  Object.defineProperty(CastleShoppingCartPrimeDayCategory.prototype, "categoryMc", {
    get: function () {
      return this._categoryMc;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayCategory.prototype, "groupId", {
    get: function () {
      return this._groupId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayCategory.prototype, "choosableGroup", {
    get: function () {
      return this._choosableGroup;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayCategory.prototype, "selectedGroup", {
    get: function () {
      return this._selectedGroup;
    },
    enumerable: true,
    configurable: true
  });
  return CastleShoppingCartPrimeDayCategory;
}();
exports.CastleShoppingCartPrimeDayCategory = n;
var o = require("./2086.js");
var a = require("./2088.js");