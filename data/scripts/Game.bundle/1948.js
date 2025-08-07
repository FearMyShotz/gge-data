Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./491.js");
var r = function (e) {
  function IsoCommandObjectUpdateConstructionItems(t, i) {
    var n = e.call(this, t) || this;
    n._vo = i;
    return n;
  }
  n.__extends(IsoCommandObjectUpdateConstructionItems, e);
  IsoCommandObjectUpdateConstructionItems.prototype.execute = function () {
    var e = this.vo;
    if (e) {
      var t = e.getConstructionItem(new s.ConstructionItemSlotVO(a.ConstructionItemConst.APPEARANCE_SLOT_TYPE, 0));
      e.parseConstructionItems(this.isoData.areaData.constructionItems.constructionItemParams);
      if (t != e.getConstructionItem(new s.ConstructionItemSlotVO(a.ConstructionItemConst.APPEARANCE_SLOT_TYPE, 0))) {
        e.updateData();
        this.isoData.grid.updateBuildingPos(e);
        var i = l.Iso.renderer.objects.provider.getObjectByVO(e);
        if (i) {
          i.updateDisp();
        }
      }
    }
  };
  Object.defineProperty(IsoCommandObjectUpdateConstructionItems.prototype, "vo", {
    get: function () {
      return this._vo;
    },
    enumerable: true,
    configurable: true
  });
  return IsoCommandObjectUpdateConstructionItems;
}(require("./310.js").AIsoCommandModel);
exports.IsoCommandObjectUpdateConstructionItems = r;
var l = require("./34.js");
o.classImplementsInterfaces(r, "ICollectableRendererList");