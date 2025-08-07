Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = function (e) {
  function FusionForgeHubDialogCatalysts(t) {
    var i = this;
    i._lists = [];
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).init();
    return i;
  }
  n.__extends(FusionForgeHubDialogCatalysts, e);
  FusionForgeHubDialogCatalysts.prototype.init = function () {
    this.dialogDisp.mc_equipment.visible = false;
  };
  FusionForgeHubDialogCatalysts.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.updateCatalystLists();
    if (this._lists != null) {
      for (var i = 0, n = this._lists; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          o.onShow();
          o.update();
        }
      }
    }
  };
  FusionForgeHubDialogCatalysts.prototype.hide = function () {
    if (this._lists != null) {
      for (var t = 0, i = this._lists; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onHide();
        }
      }
    }
    e.prototype.hide.call(this);
  };
  FusionForgeHubDialogCatalysts.prototype.updateCatalystLists = function () {
    if (this._lists) {
      if (this._lists != null) {
        for (var e = 0, t = this._lists; e < t.length; e++) {
          var i = t[e];
          if (i !== undefined) {
            i.destroy();
          }
        }
      }
      this._lists = null;
    }
    this._lists = [];
    for (var n = 0; n < FusionForgeHubDialogCatalysts.LIST_PARAMS.length; ++n) {
      this._lists.push(new r.FusionForgeHubDialogCatalystsList(this.dialogDisp.getChildByName(FusionForgeHubDialogCatalysts.LIST_PARAMS[n][0]), FusionForgeHubDialogCatalysts.LIST_PARAMS[n][1]));
    }
  };
  Object.defineProperty(FusionForgeHubDialogCatalysts.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  FusionForgeHubDialogCatalysts.__initialize_static_members = function () {
    FusionForgeHubDialogCatalysts.LIST_PARAMS = [["mc_deco", a.FusionConst.DECORATION_FORGE_ID]];
  };
  return FusionForgeHubDialogCatalysts;
}(require("./35.js").CastleDialogSubLayer);
exports.FusionForgeHubDialogCatalysts = s;
var r = require("./2635.js");
o.classImplementsInterfaces(s, "ICollectableRendererList", "ISublayer");
s.__initialize_static_members();