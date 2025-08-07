Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CollectableRenderHelper() {}
  CollectableRenderHelper.displaySingleItem = function (e, t, i, n = null, a = null) {
    var s = new o.CollectableRenderer(e, i);
    s.changeItemVO(t);
    if (n) {
      n(s);
    }
    s.update();
    if (a) {
      if (s.isFinishedRendering) {
        a(s);
      } else {
        s.onIconLoadedSignal.addOnce(a);
      }
    }
    return s;
  };
  CollectableRenderHelper.displaySingleItemAndAddToRenderList = function (e, t, i, n, o = null, a = null) {
    var s = CollectableRenderHelper.displaySingleItem(t, i, n, o, a);
    if (e) {
      e.collectableRenderList.push(s);
    }
    return s;
  };
  CollectableRenderHelper.displaySingleItemComplete = function (e, t, i, n, o = null, a = null) {
    if (e) {
      e.destroyCollectableRenderList();
    }
    return CollectableRenderHelper.displaySingleItemAndAddToRenderList(e, t, i, n, o, a);
  };
  CollectableRenderHelper.displayMultipleItems = function (e, t, i, n = null, o = null) {
    var a;
    var s = [];
    for (var r = 0; r < e.items.length; ++r) {
      a = CollectableRenderHelper.displaySingleItem(e.items[r], t ? t.getItemByIndexSave(r) : null, i, n, o);
      s.push(a);
    }
    return s;
  };
  CollectableRenderHelper.displayMultipleItemsAndAddToRenderList = function (e, t, i, n, o = null, a = null) {
    var s = CollectableRenderHelper.displayMultipleItems(t, i, n, o, a);
    if (e) {
      for (var r = 0; r < s.length; ++r) {
        e.collectableRenderList.push(s[r]);
      }
    }
    return s;
  };
  CollectableRenderHelper.displayMultipleItemsComplete = function (e, t, i, n, o = null, a = null) {
    if (e) {
      e.destroyCollectableRenderList();
    }
    return CollectableRenderHelper.displayMultipleItemsAndAddToRenderList(e, t, i, n, o, a);
  };
  CollectableRenderHelper.createCollectableLevelIndicatorVO = function (e, t, i = null) {
    var n;
    var o = null;
    var c = 0;
    if (s.instanceOfClass(e, "CollectableItemBuildingVO")) {
      var u = e.buildingVO;
      if (u.buildingGroundType != l.ClientConstCastle.BUILDINGGROUND_TYPE_DECO) {
        c = u.level;
        n = r.CollectableRendererLevelIndicatorMC.LEVEL_INDICATOR_BUILDING;
      }
    } else if (s.instanceOfClass(e, "CollectableItemUnitVO")) {
      c = e.unitVO.level;
      n = r.CollectableRendererLevelIndicatorMC.LEVEL_INDICATOR_UNIT;
    }
    if (c > 0 && n) {
      o = new a.CollectableLevelIndicatorVO(n, c, t, i);
    }
    return o;
  };
  return CollectableRenderHelper;
}();
exports.CollectableRenderHelper = n;
var o = require("./186.js");
var a = require("./2026.js");
var s = require("./1.js");
var r = require("./1169.js");
var l = require("./18.js");