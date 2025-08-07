Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./31.js");
var u = require("./19.js");
var d = createjs.Point;
var p = function (e) {
  function CastlePrimeSaleScrollItem(t) {
    var i = e.call(this, t) || this;
    i.itxt_old_costs = i.textFieldManager.registerTextField(i._disp.txt_old_costs, new l.LocalizedNumberVO(0));
    i.itxt_new_costs = i.textFieldManager.registerTextField(i._disp.txt_new_costs, new l.LocalizedNumberVO(0));
    return i;
  }
  n.__extends(CastlePrimeSaleScrollItem, e);
  CastlePrimeSaleScrollItem.prototype.customFillItem = function () {
    this.itxt_old_costs.textContentVO.numberValue = this.psScrollItemVO.packageVO.basicPriceC2;
    this.itxt_new_costs.textContentVO.numberValue = this.psScrollItemVO.packageVO.priceC2;
    var e = this.disp.mc_item;
    var t = new d(44, 35);
    var i = new c.CollectableRenderClips(e);
    i.addIconMc(e.mc_package);
    i.addInfoBtn(this.disp.btn_info);
    if (this.rewardRenderer) {
      this.rewardRenderer.destroy();
    }
    this.rewardRenderer = new h.CollectableRenderer(i, new u.CollectableRenderOptions(u.CollectableRenderOptions.SET_BASIC, t));
    this.rewardRenderer.options.icon.dimension = t;
    this.rewardRenderer.updateWithNewVO(this.psScrollItemVO.packageVO.reward);
    e.toolTipText = r.Localize.text(this.psScrollItemVO.packageVO.nameTextID);
  };
  Object.defineProperty(CastlePrimeSaleScrollItem.prototype, "psScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrimeSaleScrollItem.prototype, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastlePrimeSaleScrollItem.prototype.reset = function () {
    if (this.rewardRenderer) {
      this.rewardRenderer.destroy();
    }
    e.prototype.reset.call(this);
  };
  return CastlePrimeSaleScrollItem;
}(a.ScrollItem);
exports.CastlePrimeSaleScrollItem = p;
var h = require("./186.js");
s.classImplementsInterfaces(p, "MovieClip");