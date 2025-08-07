Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./3.js");
var a = require("./23.js");
var s = require("./23.js");
var r = require("./23.js");
var l = require("./68.js");
var c = createjs.Event;
var u = function () {
  function CastleColossusMeterDelegate(e) {
    this.glowHelper = {
      blurX: 0,
      blurY: 0,
      strength: 0
    };
    this.disp = e;
    this.initArrow();
  }
  CastleColossusMeterDelegate.prototype.initArrow = function () {
    this.disp.y = CastleColossusMeterDelegate.MAX_VIEW_Y;
    n.GoodgameTextFieldManager.getInstance().registerTextField(this.scoreTextField, new o.TextVO("0"));
  };
  CastleColossusMeterDelegate.prototype.setLawOrderValue = function (e) {
    e = Math.min(CastleColossusMeterDelegate.MAX_LAWORDER_VALUE, e);
    var t = CastleColossusMeterDelegate.MAX_LAWORDER_VALUE - CastleColossusMeterDelegate.MIN_LAWORDER_VALUE;
    var i = Math.max(e - CastleColossusMeterDelegate.MIN_LAWORDER_VALUE, 0) / t;
    var u = (CastleColossusMeterDelegate.MAX_VIEW_Y - CastleColossusMeterDelegate.MIN_VIEW_Y) * i;
    var d = CastleColossusMeterDelegate.MAX_VIEW_Y - u;
    if (Math.round(this.disp.y) != Math.round(d)) {
      r.TweenMax.fromTo(this.disp, 1, {
        y: this.disp.y
      }, {
        y: d,
        ease: s.Power1.easeInOut
      });
      this.glowHelper = {
        blurX: 20,
        blurY: 10,
        strength: 3
      };
      this.glow = l.BitmapFilterHelper.FILTER_GLOW_COLOSSUS[0];
      this.disp.useFilters([this.glow], false, 1);
      r.TweenMax.fromTo(this.glowHelper, 1, {
        delay: 0.5,
        blurX: 40,
        blurY: 20,
        strength: 3
      }, {
        blurX: 0,
        blurY: 0,
        strength: 1,
        ease: a.Linear.easeInOut,
        onComplete: this.bindFunction(this.removeUpdatefilter)
      });
      this.disp.addEventListener(c.ENTER_FRAME, this.bindFunction(this.updateFilter));
    }
    n.GoodgameTextFieldManager.getInstance().registerTextField(this.scoreTextField, new o.TextVO(String(Math.round(e))));
  };
  CastleColossusMeterDelegate.prototype.dispose = function () {
    this.disp.removeEventListener(c.ENTER_FRAME, this.bindFunction(this.updateFilter));
  };
  CastleColossusMeterDelegate.prototype.updateFilter = function (e) {
    this.glow.blurX = this.glowHelper.blurX;
    this.glow.blurY = this.glowHelper.blurY;
    this.glow.strength = this.glowHelper.strength;
    this.disp.useFilters([this.glow]);
  };
  CastleColossusMeterDelegate.prototype.removeUpdatefilter = function () {
    this.disp.removeEventListener(c.ENTER_FRAME, this.bindFunction(this.updateFilter));
    this.disp.useFilters(l.BitmapFilterHelper.NO_FILTER);
  };
  Object.defineProperty(CastleColossusMeterDelegate.prototype, "scoreTextField", {
    get: function () {
      return this.disp.txt_placement;
    },
    enumerable: true,
    configurable: true
  });
  CastleColossusMeterDelegate.__initialize_static_members = function () {
    CastleColossusMeterDelegate.MAX_VIEW_Y = 221.5;
    CastleColossusMeterDelegate.MIN_LAWORDER_VALUE = 0;
    CastleColossusMeterDelegate.MAX_LAWORDER_VALUE = 4000;
  };
  CastleColossusMeterDelegate.MIN_VIEW_Y = -195.85;
  return CastleColossusMeterDelegate;
}();
exports.CastleColossusMeterDelegate = u;
u.__initialize_static_members();