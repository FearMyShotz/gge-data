Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./12.js");
var l = require("./31.js");
var c = require("./19.js");
var u = require("./4.js");
var d = require("./14.js");
var p = require("./81.js");
var h = require("./25.js");
var g = createjs.Point;
var C = function (e) {
  function FortuneTellerEventRewardInfoDialogItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FortuneTellerEventRewardInfoDialogItem, e);
  FortuneTellerEventRewardInfoDialogItem.prototype.fill = function () {
    var e = s.int(this.data);
    var t = this.getItemMc();
    var i = u.CastleModel.rewardData.getCopiedListById(e).getItemByIndex(0);
    t.mc_item.mouseChildren = true;
    var n = new l.CollectableRenderClips(t.mc_item).addIconMc(t.mc_item.mc_icon);
    h.CollectableRenderHelper.displaySingleItemComplete(this, n, i, new c.CollectableRenderOptions(c.CollectableRenderOptions.SET_ADVANCED, new g(55, 55)), this.bindFunction(this.preRenderFunc));
    t.mc_item.mouseChildren = true;
    d.CastleComponent.textFieldManager.registerTextField(t.txt_name, new a.LocalizedTextVO(i.getNameTextId()));
  };
  FortuneTellerEventRewardInfoDialogItem.prototype.preRenderFunc = function (e) {
    if (e.itemVO) {
      var t = e.getRenderer(c.CollectableRenderOptions.ICON_TRANSFORM);
      if (e.itemVO.itemType == r.CollectableEnum.LONG_TERM_POINT_EVENT_BOOSTER) {
        t.transform.offset.y = -5;
        t.transform.scale = 0.9;
      }
    }
  };
  return FortuneTellerEventRewardInfoDialogItem;
}(p.AInfiniteScrollListItem);
exports.FortuneTellerEventRewardInfoDialogItem = C;
o.classImplementsInterfaces(C, "ICollectableRendererList");