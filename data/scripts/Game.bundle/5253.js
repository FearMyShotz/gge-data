Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./142.js");
var r = require("./71.js");
var l = function (e) {
  function AreaDataConstructionItems() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AreaDataConstructionItems, e);
  AreaDataConstructionItems.prototype.updateConstructionItems = function (e) {
    if (e) {
      this._constructionItemParams = e;
      for (var t = 0, i = this.areaData.isoData.objects.innerBuildings.list; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          p.Iso.controller.processor.addCommandToQueue(new d.IsoCommandObjectUpdateConstructionItems(n.isoData, n));
        }
      }
      p.Iso.controller.processor.executeQueue();
      c.CastleComponent.controller.dispatchEvent(new r.AreaDataEvent(r.AreaDataEvent.ON_CONSTRUCTION_ITEMS_UPDATED));
    }
  };
  AreaDataConstructionItems.prototype.getConstructionItemEffectValue = function (e) {
    var t = 0;
    var i = this.areaData.isoData.objects.getCompleteObjectsList();
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var s = o[n];
        if (s !== undefined) {
          var r = s;
          if (r && r.hasConstructionItemSlots) {
            t += a.int(r.getConstructionItemEffectValue(e));
          }
        }
      }
    }
    return t;
  };
  AreaDataConstructionItems.prototype.getEffectValue = function (e, t) {
    t = t || s.CastleEffectConditionVO.NULL_CONDITION;
    var i = u.CastleEffectsHelper.getTotalEffectValue(this.getBonusVOsByType(e, t));
    return i || new e.valueClass();
  };
  AreaDataConstructionItems.prototype.getBonusVOsByType = function (e, t) {
    t = t || s.CastleEffectConditionVO.NULL_CONDITION;
    var i = [];
    var n = this.areaData.isoData.objects.getCompleteObjectsList();
    if (n != null) {
      for (var o = 0, a = n; o < a.length; o++) {
        var r = a[o];
        if (r !== undefined) {
          var l = r;
          if (l && (l.hasConstructionItemSlots || l.hasModernEffects)) {
            i = i.concat(l.getBonusVOsByTypeFromConstructionItemsOnly(e, t));
          }
        }
      }
    }
    return i;
  };
  AreaDataConstructionItems.prototype.getConstructionItemGroupEffectAmount = function (e) {
    var t = 0;
    var i = this.areaData.isoData.objects.getCompleteObjectsList();
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          var s = a;
          if (s && s.hasConstructionItemSlots) {
            t += s.getConstructionItemGroupEffectsAmount(e);
          }
        }
      }
    }
    return t;
  };
  Object.defineProperty(AreaDataConstructionItems.prototype, "constructionItemParams", {
    get: function () {
      return this._constructionItemParams;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataConstructionItems.prototype, "ignoreCap", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  return AreaDataConstructionItems;
}(require("./561.js").AAreaDataComponent);
exports.AreaDataConstructionItems = l;
var c = require("./14.js");
var u = require("./111.js");
var d = require("./1947.js");
var p = require("./33.js");
o.classImplementsInterfaces(l, "ICollectableRendererList", "IAreaDataComponent", "IEffectSource");