Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./31.js");
var d = require("./19.js");
var p = require("./13.js");
var h = require("./24.js");
var g = require("./14.js");
var C = require("./8.js");
var _ = require("./25.js");
var m = require("./1628.js");
var f = createjs.Point;
var O = createjs.MovieClip;
var E = function (e) {
  function CollectableListTooltip() {
    var t = e.call(this) || this;
    t._itemMCs = [];
    t._contentMCs = [];
    t._disp = new O();
    t._clip = new h.CastleGoodgameExternalClip(CollectableListTooltip.ASSET_NAME, r.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CollectableListTooltip.ASSET_NAME), null, 0, false);
    t._disp.addChild(t._clip);
    return t;
  }
  n.__extends(CollectableListTooltip, e);
  Object.defineProperty(CollectableListTooltip.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableListTooltip.prototype, "tooltipDisp", {
    get: function () {
      return this._clip.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  CollectableListTooltip.prototype.show = function (t, i, n) {
    var a = this;
    if (i.length != n.length) {
      throw new Error("texts and collectablelists have different length");
    }
    if (this._clip.isLoaded) {
      this.destroyCollectableRenderList();
      this._contentMCs[0] ||= this.tooltipDisp.mc_tooltip;
      this._contentMCs.forEach(function (e) {
        return e.visible = false;
      });
      this._itemMCs.forEach(function (e) {
        return e.visible = false;
      });
      var s = 0;
      for (var r = 0; r < i.length; r++) {
        if (!this._contentMCs[r]) {
          this._contentMCs[r] = new (l.getDefinitionByName("CollectableListTooltipExt_Content"))();
          this.tooltipDisp.addChild(this._contentMCs[r]);
        }
        this.displayContent(this._contentMCs[r], i[r], n[r], r, s);
        s += n[r].length;
      }
      this.tooltipDisp.mc_arrowContainer.rotation = 0;
      var c = t.localToGlobal(new f(0, 0));
      var u = t.height / 2;
      var d = false;
      if (c.y - u - this.disp.height < 0) {
        this.tooltipDisp.mc_arrowContainer.rotation = 180;
        this._contentMCs.forEach(function (e) {
          return e.y = 10;
        });
        d = true;
        this._disp.y = c.y + u;
      } else {
        this._disp.y = c.y - u;
      }
      var p = this.disp.width / 2;
      this._disp.x = o.MathBase.clamp(c.x, 0 + p, g.CastleComponent.layoutManager.stage.stageWidth - p);
      this.tooltipDisp.mc_arrowContainer.mc_arrow.x = (c.x - this._disp.x) * (d ? -1 : 1);
      e.prototype.onShow.call(this);
    } else {
      this._clip.doWhenLoaded(function () {
        a.show(t, i, n);
      });
    }
  };
  CollectableListTooltip.prototype.displayContent = function (e, t, i, n, o) {
    e.visible = i.length > 0;
    s.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_title, new c.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId(t)));
    a.MovieClipHelper.clearMovieClip(e.mc_items);
    for (var r = 0; r < i.length; r++) {
      var h = o + r;
      if (!this._itemMCs[h]) {
        var g = new (l.getDefinitionByName("CollectableListTooltip_ItemContainer"))();
        g.x = r % 3 * CollectableListTooltip.X_OFFSET;
        g.y = Math.floor(r / 3) * CollectableListTooltip.Y_OFFSET;
        C.ButtonHelper.initBasicButton(g.btn_info);
        this._itemMCs[h] = g;
      }
      var m = this._itemMCs[h];
      e.mc_items.addChild(m);
      m.visible = true;
      var O = i.getItemByIndex(r);
      var E = new u.CollectableRenderClips(m.mc_item).addInfoBtn(m.btn_info);
      var y = new d.CollectableRenderOptions(d.CollectableRenderOptions.SET_DEFAULT, new f(64, 62));
      _.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, E, O, y);
    }
    var b = Math.floor(i.length / 3) * CollectableListTooltip.Y_OFFSET;
    e.bg_1.height = 89 + b;
    e.bg_2.height = 139 + b;
    e.y = -this.tooltipDisp.mc_tooltip.height - 10;
    e.x = n * 262;
  };
  Object.defineProperty(CollectableListTooltip.prototype, "fadeDuration", {
    get: function () {
      return CollectableListTooltip.FADE_DURATION;
    },
    enumerable: true,
    configurable: true
  });
  CollectableListTooltip.ASSET_NAME = "CollectableListTooltipExt";
  CollectableListTooltip.X_OFFSET = 87;
  CollectableListTooltip.Y_OFFSET = 85;
  CollectableListTooltip.FADE_DURATION = 0.1;
  return CollectableListTooltip;
}(m.InteractiveTooltip);
exports.CollectableListTooltip = E;