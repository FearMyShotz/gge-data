Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CollectableRenderClipsList(e = null, t = null) {
    this._items = [];
    this.createByParentMc(e, t);
  }
  CollectableRenderClipsList.prototype.createByParentMc = function (e, t) {
    if (e && t) {
      var i;
      this._items = [];
      for (var n = 0; i = e.getChildByName(t + n); ++n) {
        this._items.push(new a.CollectableRenderClips(i));
      }
    }
    return this;
  };
  CollectableRenderClipsList.prototype.createByItemMcList = function (e) {
    if (e) {
      this._items = [];
      for (var t = 0; t < e.length; ++t) {
        this._items.push(new a.CollectableRenderClips(e[t]));
      }
    }
    return this;
  };
  CollectableRenderClipsList.prototype.addItemMcs = function (e, t = null, i = false, n = true) {
    this.addMc("addItemMc", e, t, i);
    if (n) {
      for (var o = 0; o < this._items.length; ++o) {
        this._items[o].getDefaultsFromItemMc();
      }
    }
    return this;
  };
  CollectableRenderClipsList.prototype.addItemMCsToList = function (e, t) {
    if (e && t) {
      var i;
      this._items ||= [];
      for (var n = 0; i = e.getChildByName(t + n); ++n) {
        this._items.push(new a.CollectableRenderClips(i));
      }
    }
  };
  CollectableRenderClipsList.prototype.addIconMcs = function (e, t = null, i = false) {
    return this.addMc("addIconMc", e, t, i);
  };
  CollectableRenderClipsList.prototype.addTextfields = function (e, t = null, i = false) {
    return this.addMc("addTextfield", e, t, i);
  };
  CollectableRenderClipsList.prototype.addInfoBtns = function (e, t = null, i = false) {
    return this.addMc("addInfoBtn", e, t, i);
  };
  CollectableRenderClipsList.prototype.addBuildingLevelMc = function (e, t = null, i = false) {
    return this.addMc("addBuildingLevelMc", e, t, i);
  };
  CollectableRenderClipsList.prototype.addTextfieldBgMcs = function (e, t = null, i = false) {
    return this.addMc("addTextfieldBgMc", e, t, i);
  };
  CollectableRenderClipsList.prototype.addColorBgMcs = function (e, t = null, i = false) {
    return this.addMc("addColorBgMc", e, t, i);
  };
  CollectableRenderClipsList.prototype.addEquipmentBgMcs = function (e, t = null, i = false) {
    return this.addMc("addEquipmentBgMc", e, t, i);
  };
  CollectableRenderClipsList.prototype.addMc = function (e, t, i, n) {
    var a;
    var s;
    var r;
    var l;
    if (i === undefined) {
      i = null;
    }
    if (n === undefined) {
      n = false;
    }
    for (var c = 0; c < this.items.length; ++c) {
      s = this.items[c];
      a = i || s.itemMc;
      r = n ? t + c : t;
      if (l = o.CastleMovieClipHelper.iterateThroughMc(a, r)) {
        s[e](l);
      }
    }
    return this;
  };
  Object.defineProperty(CollectableRenderClipsList.prototype, "items", {
    get: function () {
      return this._items;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableRenderClipsList;
}();
exports.CollectableRenderClipsList = n;
var o = require("./41.js");
var a = require("./31.js");