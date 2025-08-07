Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./384.js");
var c = function (e) {
  function RenderMarket() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RenderMarket, e);
  RenderMarket.prototype.renderData = function (e, t) {
    var i = new u.CastleResourceListComponent(e.btn_goods, Library.CastleInterfaceElements.GoodsInfoItem);
    var n = t;
    l.AMovementRenderStrategy.setDecoFrame(e, l.AMovementRenderStrategy.FRAME_MARKET);
    e.btn_goods.visible = true;
    i.updateComponent(n.lootList);
    if (n.lootList.length > 0) {
      e.fieldAction = this.textFieldManager.registerTextField(e.txt_action, new r.LocalizedTextVO("dialog_moveOverview_trade"), new a.InternalGGSTextFieldConfigVO(true));
    } else {
      var c = s.Localize.text("dialog_moveOverview_trade");
      var d = s.Localize.text("dialog_moveOverview_wayHome");
      e.fieldAction = this.textFieldManager.registerTextField(e.txt_action, new r.LocalizedTextVO(o.GenericTextIds.VALUE_DASH_SPLIT, [c, d]), new a.InternalGGSTextFieldConfigVO(true));
    }
  };
  return RenderMarket;
}(l.AMovementRenderStrategy);
exports.RenderMarket = c;
var u = require("./320.js");