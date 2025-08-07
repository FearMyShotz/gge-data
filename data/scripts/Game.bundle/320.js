Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./67.js");
var u = require("./19.js");
var d = require("./40.js");
var p = createjs.Point;
var h = function (e) {
  function CastleResourceListComponent(t, i, n = 3, o = 1, a = null) {
    var s = this;
    s._itemsPerLine = 0;
    s._maxLines = 0;
    s._padding = 5.6;
    s._iconDimension = new p(32, 32);
    s._displayAsCosts = false;
    s._useKiloAbbreviationForAmount = false;
    s._containerItems = [];
    s._summedResourceIconClass = Library.CastleInterfaceElements.Icon_GenericSpecialResource;
    CONSTRUCTOR_HACK;
    (s = e.call(this, t) || this)._itemClass = i;
    s._itemsPerLine = n;
    s._maxLines = o;
    s._containerMc = a || s.resourceListComponent.mc_container;
    return s;
  }
  n.__extends(CastleResourceListComponent, e);
  CastleResourceListComponent.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.setTitle("");
    this.removeContainerItems();
    this.removeOldStyleItems();
  };
  CastleResourceListComponent.prototype.removeContainerItems = function () {
    if (this._containerMc) {
      this._containerMc.removeChildren();
      this._containerItems = [];
    }
  };
  CastleResourceListComponent.prototype.removeOldStyleItems = function () {
    for (var e, t = 0; e = this.resourceListComponent["i" + t]; ++t) {
      e.visible = false;
    }
  };
  CastleResourceListComponent.prototype.setTitle = function (e) {
    if (this.resourceListComponent.txt_title) {
      m.CastleComponent.textFieldManager.registerTextField(this.resourceListComponent.txt_title, new r.TextVO(e));
    }
  };
  CastleResourceListComponent.prototype.updateComponent = function (e, t = null) {
    if (t) {
      this.setTitle(t);
    }
    this.removeOldStyleItems();
    this.destroyCollectableRenderList();
    this.removeContainerItems();
    if (e) {
      var i;
      if (!CastleResourceListComponent.SPECIAL_RESOURCES) {
        CastleResourceListComponent.__initialize_static_members();
      }
      var n;
      var o;
      var a = this.maxItemCount;
      if (e.length > a) {
        n = e.getFilteredListWithoutTypes(CastleResourceListComponent.SPECIAL_RESOURCES);
        o = e.getFilteredListByTypes(CastleResourceListComponent.SPECIAL_RESOURCES);
      } else {
        n = e;
        o = new C.CollectableList();
      }
      for (var s = l.int(Math.min(n.length + (o.length > 0 ? 1 : 0), a)), r = this.getPositionList(s), c = 0; c < s; ++c) {
        (i = new this._itemClass()).name = "i" + c;
        this._containerMc.addChild(i);
        i.x = r[c].x;
        i.y = r[c].y;
        this._containerItems.push(i);
      }
      if (n.length > 0) {
        this.displayAsList(n);
      }
      if (o.length > 0) {
        this.displayAsSubsumedResources(o, n.length);
      }
    }
  };
  CastleResourceListComponent.prototype.displayAsList = function (e) {
    var t = new u.CollectableRenderOptions(this._displayAsCosts ? u.CollectableRenderOptions.SET_COST_LIST : u.CollectableRenderOptions.SET_RESOURCE_LIST, this._iconDimension);
    t.tooltip.useAmount = false;
    if (this._displayAsCosts) {
      t.costTextfield.useOtherResourceStorage = this._otherResourceStorageForCosts;
    } else {
      t.textfield.useKiloAbbreviationForAmount = this._useKiloAbbreviationForAmount;
    }
    _.CollectableRenderHelper.displayMultipleItemsComplete(this, new c.CollectableRenderClipsList(this._containerMc, "i").addTextfields("txt_loot"), e, t);
  };
  CastleResourceListComponent.prototype.displayAsSubsumedResources = function (e, t) {
    var i = this._containerItems[t];
    if (i) {
      o.MovieClipHelper.clearMovieClip(i.mc_icon);
      var n = new this._summedResourceIconClass();
      i.mc_icon.addChild(n);
      o.MovieClipHelper.centerMovieClip(n, this._iconDimension.x, this._iconDimension.y);
      m.CastleComponent.textFieldManager.registerTextField(i.txt_loot, new s.LocalizedNumberVO(this.getSummedResourceValue(e)));
      i.mouseChildren = false;
      i.visible = true;
      i.toolTipText = e.getRewardAmountTooltip();
    }
  };
  CastleResourceListComponent.prototype.getSummedResourceValue = function (e) {
    var t = 0;
    for (var i = 0; i < e.length; i++) {
      t += l.int(e.getItemByIndex(i).amount);
    }
    return t;
  };
  CastleResourceListComponent.prototype.getPositionList = function (e) {
    var t;
    var i = l.int(Math.min(e, this.maxItemCount));
    var n = [];
    for (var o = Math.ceil(i / this._itemsPerLine), a = this.getItemDimension(), s = 0, r = 0; r < o; ++r) {
      s = r >= o - 1 && i % this._itemsPerLine != 0 ? i % this._itemsPerLine : this._itemsPerLine;
      t = new p(-(a.x * s + this._padding * (s - 1)) / 2 + a.x / 2, a.y * r + r * this._padding);
      for (var c = 0; c < s; ++c) {
        n.push(new p(t.x + c * a.x + c * this._padding, t.y));
      }
    }
    return n;
  };
  Object.defineProperty(CastleResourceListComponent.prototype, "maxItemCount", {
    get: function () {
      return this._itemsPerLine * this._maxLines;
    },
    enumerable: true,
    configurable: true
  });
  CastleResourceListComponent.prototype.getItemDimension = function () {
    var e = new this._itemClass();
    this._containerMc.addChild(e);
    var t = new p(e.width, e.height);
    this._containerMc.removeChild(e);
    return t;
  };
  Object.defineProperty(CastleResourceListComponent.prototype, "resourceListComponent", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceListComponent.prototype, "displayAsCosts", {
    set: function (e) {
      this._displayAsCosts = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceListComponent.prototype, "otherResourceStorageForCosts", {
    set: function (e) {
      this._otherResourceStorageForCosts = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceListComponent.prototype, "useKiloAbbreviationForAmount", {
    set: function (e) {
      this._useKiloAbbreviationForAmount = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceListComponent.prototype, "iconDimension", {
    set: function (e) {
      this._iconDimension = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceListComponent.prototype, "padding", {
    set: function (e) {
      this._padding = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleResourceListComponent.__initialize_static_members = function () {
    CastleResourceListComponent.SPECIAL_RESOURCES = [g.CollectableEnum.COAL, g.CollectableEnum.OIL, g.CollectableEnum.GLASS, g.CollectableEnum.IRON];
  };
  return CastleResourceListComponent;
}(d.CastleItemRenderer);
exports.CastleResourceListComponent = h;
var g = require("./12.js");
var C = require("./48.js");
var _ = require("./25.js");
var m = require("./14.js");
a.classImplementsInterfaces(h, "ICollectableRendererList");