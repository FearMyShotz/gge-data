Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function AModernHighscoreComponentItem(t, i) {
    var n = e.call(this, t) || this;
    n._rank = 0;
    n._parentComponent = i;
    n.init();
    return n;
  }
  n.__extends(AModernHighscoreComponentItem, e);
  AModernHighscoreComponentItem.prototype.init = function () {};
  AModernHighscoreComponentItem.prototype.updateWithNewData = function (e, t) {
    this._rank = e;
    this._data = t;
    this.update();
  };
  AModernHighscoreComponentItem.prototype.update = function () {
    this.fillContentWithAny();
    if (this.data) {
      this.setVisibility(true);
      this.fillContentWithData();
    } else if (this.rank > 0 && this.rank <= this.maxRank) {
      this.setVisibility(true);
      this.fillContentWithEmpty();
    } else {
      this.setVisibility(false);
    }
  };
  AModernHighscoreComponentItem.prototype.fillContentWithAny = function () {};
  AModernHighscoreComponentItem.prototype.fillContentWithData = function () {};
  AModernHighscoreComponentItem.prototype.fillContentWithEmpty = function () {};
  AModernHighscoreComponentItem.prototype.setItemIndicatorSearchedName = function () {};
  Object.defineProperty(AModernHighscoreComponentItem.prototype, "maxRank", {
    get: function () {
      return this.parentComponent.maxRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AModernHighscoreComponentItem.prototype, "parentComponent", {
    get: function () {
      return this._parentComponent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AModernHighscoreComponentItem.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AModernHighscoreComponentItem.prototype, "data", {
    get: function () {
      return this._data;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AModernHighscoreComponentItem.prototype, "name", {
    get: function () {
      if (this.data && this.data[2] && this.data[2].N) {
        return this.data[2].N;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  return AModernHighscoreComponentItem;
}(require("./40.js").CastleItemRenderer);
exports.AModernHighscoreComponentItem = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");