Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./5.js");
var o = require("./116.js");
var a = require("./1.js");
var s = require("./4.js");
var r = require("./9.js");
var l = require("./493.js");
var c = require("./876.js");
var u = require("./494.js");
var d = createjs.MouseEvent;
var p = o.getLogger("CXFDecorator");
var h = function () {
  function CXFDecorator(e, t = null, i = {}) {
    this.mc = e;
    this.name = t || e.name;
    this.params = i;
    if (a.ExternalInterface.available) {
      p.info("decorating  button ", this.name + " with CXF functionalities");
      e.addEventListener(d.CLICK, this.bindFunction(this.notifyFunc));
    } else {
      e.addEventListener(d.CLICK, this.bindFunction(this.debugOnlyClickListener));
    }
  }
  CXFDecorator.prototype.notifyFunc = function (e) {
    var t = this;
    var i = s.CastleModel.specialEventData.getActiveEventByEventId(n.EventConst.EVENTTYPE_SHOPPING_CART_PRIMEDAY);
    if (i && !(i.shoppingCartOptionIds.length >= 9) && s.CastleModel.localData.readShoppingCartWarning()) {
      r.CastleDialogHandler.getInstance().registerDefaultDialogs(c.CastleShoppingCartPrimeDayConfirmDialog, new l.CastleStandardYesNoDialogProperties("", "", function () {
        r.CastleDialogHandler.getInstance().registerDefaultDialogs(u.CastleShoppingCartPrimeDayDialog);
      }, function () {
        t.openCXFShop();
      }, null, "", "", [i.endTimestamp]));
      return;
    }
    this.openCXFShop();
  };
  CXFDecorator.prototype.openCXFShop = function () {
    p.info("BUTTON WAS CLICKED", this.name);
    p.info("CXFSourceTracking", this.params);
    a.ExternalInterface.call("UIButtonClicked", [this.name, this.params]);
  };
  CXFDecorator.prototype.openCXFShopDebug = function () {
    p.debug("ExternalInterface unavailable, button [" + this.name + "@{" + this.mc.id + "}] should trigger ExternalInterface UIButtonClicked");
  };
  CXFDecorator.prototype.debugOnlyClickListener = function (e) {
    var t = this;
    var i = s.CastleModel.specialEventData.getActiveEventByEventId(n.EventConst.EVENTTYPE_SHOPPING_CART_PRIMEDAY);
    if (i && !(i.shoppingCartOptionIds.length >= 9) && s.CastleModel.localData.readShoppingCartWarning()) {
      r.CastleDialogHandler.getInstance().registerDefaultDialogs(c.CastleShoppingCartPrimeDayConfirmDialog, new l.CastleStandardYesNoDialogProperties("", "", function () {
        r.CastleDialogHandler.getInstance().registerDefaultDialogs(u.CastleShoppingCartPrimeDayDialog);
      }, function () {
        t.openCXFShopDebug();
      }, null, "", "", [i.endTimestamp]));
      return;
    }
    this.openCXFShopDebug();
  };
  CXFDecorator.prototype.undecorate = function () {
    if (a.ExternalInterface.available) {
      this.mc.removeEventListener(d.CLICK, this.bindFunction(this.notifyFunc));
    } else {
      this.mc.removeEventListener(d.CLICK, this.bindFunction(this.debugOnlyClickListener));
    }
    this.mc = null;
  };
  return CXFDecorator;
}();
exports.CXFDecorator = h;