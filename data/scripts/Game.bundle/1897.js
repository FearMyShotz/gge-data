Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./40.js");
var r = require("./8.js");
var l = function (e) {
  function ACastleTournamentRankListItem(t) {
    var i = this;
    i._rank = -1;
    i._points = -1;
    i._searchFieldValue = "";
    CONSTRUCTOR_HACK;
    i = e.call(this, t) || this;
    r.ButtonHelper.initBasicButton(t);
    return i;
  }
  n.__extends(ACastleTournamentRankListItem, e);
  ACastleTournamentRankListItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this.update();
  };
  ACastleTournamentRankListItem.prototype.update = function () {
    this.updateBgColor();
    this.updateText();
  };
  ACastleTournamentRankListItem.prototype.updateBgColor = function () {};
  ACastleTournamentRankListItem.prototype.updateText = function () {};
  ACastleTournamentRankListItem.prototype.parseItemData = function (e) {
    this._rank = a.int(e[0]);
    this._points = a.int(e[1]);
  };
  Object.defineProperty(ACastleTournamentRankListItem.prototype, "isSearchTextRelevant", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  ACastleTournamentRankListItem.prototype.setVisibility = function (t) {
    e.prototype.setVisibility.call(this, t);
    this.removeEventListener();
    if (this.isVisible) {
      this.addEventListener();
    }
    this.disp.visible = this.isVisible;
  };
  Object.defineProperty(ACastleTournamentRankListItem.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    set: function (e) {
      this._rank = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleTournamentRankListItem.prototype, "points", {
    get: function () {
      return this._points;
    },
    set: function (e) {
      this._points = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleTournamentRankListItem.prototype, "searchFieldValue", {
    get: function () {
      return this._searchFieldValue;
    },
    set: function (e) {
      this._searchFieldValue = e;
    },
    enumerable: true,
    configurable: true
  });
  return ACastleTournamentRankListItem;
}(s.CastleItemRenderer);
exports.ACastleTournamentRankListItem = l;
o.classImplementsInterfaces(l, "ICollectableRendererList");