Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./191.js");
var l = function (e) {
  function ComboboxItemRendererRecruitList() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ComboboxItemRendererRecruitList, e);
  ComboboxItemRendererRecruitList.prototype.renderItem = function (e, t, i, n, r) {
    var l = s.castAs(new this.itemMCClass(), "MovieClip");
    l.actLikeButton = true;
    l.mouseChildren = false;
    l.itxt_item = o.GoodgameTextFieldManager.getInstance().registerTextField(l.txt_item, new r(e.itemLabel), new a.InternalGGSTextFieldConfigVO(true));
    l.itxt_item.mouseEnabled = false;
    l.bg.gotoAndStop(1);
    if (i > 0) {
      l.bg.width = i;
      l.itxt_item.width = i;
    }
    l.bg.height = n;
    l.id = t;
    var c = s.castAs(e.data, "IWorldmapObjectVO");
    if (l && c) {
      l.mc_icon.visible = false;
      l.mc_icon.x = l.bg.x + l.bg.width - l.mc_icon.width;
      l.mc_kingdomPoint.x = l.mc_icon.x + l.mc_icon.width / 2 - l.mc_kingdomPoint.width / 2;
      l.mc_kingdomPoint.gotoAndStop(Math.min(c.kingdomID + 1, 6));
      l.itxt_item.autoFitToBounds = true;
    }
    return l;
  };
  Object.defineProperty(ComboboxItemRendererRecruitList.prototype, "itemMCClass", {
    get: function () {
      return Library.CastleInterfaceElements.RecruitCastleListComboboxItem;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ComboboxItemRenderer.prototype, "itemMCClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ComboboxItemRendererRecruitList;
}(r.ComboboxItemRenderer);
exports.ComboboxItemRendererRecruitList = l;