Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./45.js");
var a = require("./74.js");
var s = require("./31.js");
var r = require("./19.js");
var l = require("./20.js");
var c = require("./8.js");
var u = require("./25.js");
var d = require("./114.js");
var p = createjs.Point;
var h = function (e) {
  function ADynamicTabPackageShopDialog(t) {
    var i = e.call(this, t) || this;
    i._currencies = [];
    return i;
  }
  n.__extends(ADynamicTabPackageShopDialog, e);
  ADynamicTabPackageShopDialog.prototype.initTabsByPackages = function (e, t = null, i = "tab_", n = 12) {
    this._subLayer = new Map();
    this._tabMcPrefix = i;
    this._maxTabs = n;
    var d = [];
    var h = function (e) {
      var t = e.getCostList().getItemByIndex(0);
      if (!d.some(function (e) {
        return o.CollectableHelper.haveSameIdAndType(e, t);
      })) {
        d.push(t.clone());
      }
    };
    for (var g = 0, C = this.getEventPackages(); g < C.length; g++) {
      h(C[g]);
    }
    if (t) {
      d.sort(t);
    }
    this._currencies = d.map(function (e) {
      return new a.CollectableTypeVO().initByCollectable(e);
    });
    this._defaultSublayer ||= new e(this.dialogDisp.tab_shop, this.dialogClassName);
    for (var _ = 0; _ < n; _++) {
      var m = this.dialogDisp[i + _];
      if (m) {
        if (_ < d.length) {
          c.ButtonHelper.initButtons([m], l.ClickFeedbackButtonHover);
          var f = new r.CollectableRenderOptions(r.CollectableRenderOptions.ICON, new p(32, 32));
          f.icon.useDropShadowIcon = true;
          u.CollectableRenderHelper.displaySingleItem(new s.CollectableRenderClips(m), d[_], f);
          m.toolTipText = d[_].getTooltipTextId();
          this._subLayer.set(_.toString(), this._defaultSublayer);
        } else {
          m.visible = false;
        }
      }
    }
  };
  ADynamicTabPackageShopDialog.prototype.changeCategory = function (t) {
    if (this._currentCategory != t) {
      e.prototype.changeCategory.call(this, t);
      this.showSublayer(this._subLayer.get(t), [this._currencies[parseInt(t)]]);
      for (var i = 0; i < this._maxTabs; i++) {
        var n = this.dialogDisp[this._tabMcPrefix + i];
        if (n) {
          o = n;
          a = i.toString() == this._currentCategory;
          o.mc_selected.visible = a;
        }
      }
      var o;
      var a;
    }
  };
  ADynamicTabPackageShopDialog.prototype.onClick = function (t) {
    if (c.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      if (t.target.name && t.target.name.startsWith(this._tabMcPrefix)) {
        this.changeCategory(t.target.name.replace(this._tabMcPrefix, ""));
      }
    }
  };
  ADynamicTabPackageShopDialog.prototype.getEventPackages = function () {
    return [];
  };
  return ADynamicTabPackageShopDialog;
}(d.CastleExternalSubLayerDialog);
exports.ADynamicTabPackageShopDialog = h;