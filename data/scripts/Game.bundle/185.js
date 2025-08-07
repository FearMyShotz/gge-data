Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./16.js");
var a = createjs.Point;
var s = function () {
  function SubscriptionHelper() {}
  SubscriptionHelper.showSubscriptionStarToTextField = function (e, t, i, s = null, r = true, l = o.ClientConstColor.FONT_DEFAULT_COLOR) {
    var c = e.originalTextField;
    if (t) {
      s ||= new a();
      if (c.parent.getChildByName("subStar") != null) {
        c.parent.removeChild(c.parent.getChildByName("subStar"));
      }
      var u = n.int(c.x + s.x);
      var d = n.int(c.y + c.height + s.y);
      var p = new Library.CastleInterfaceElements_Icons.Icon_SubscriptionStar();
      p.scaleX = p.scaleY = i / p.width;
      if (r) {
        c.parent.addChild(p);
      }
      p.x = u;
      p.y = d;
      p.name = "subStar";
      e.color = o.ClientConstColor.DEFAULT_SUBSCRIPTION;
    } else {
      var h = c.parent.getChildByName("subStar");
      e.color = l;
      if (!h) {
        return;
      }
      c.parent.removeChild(h);
    }
  };
  return SubscriptionHelper;
}();
exports.SubscriptionHelper = s;