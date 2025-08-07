Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./14.js");
var s = require("./40.js");
var r = require("./42.js");
var l = require("./8.js");
var c = require("./1786.js");
var u = function (e) {
  function ModernPackageShopFilterItem(t, i, n) {
    var o = e.call(this, t) || this;
    o._relationVOs = [];
    o._clickCallback = n;
    o._type = i;
    if (o.hasCheckBox) {
      l.ButtonHelper.initBasicButton(t.btn_checkbox);
      o.onShow();
    }
    return o;
  }
  n.__extends(ModernPackageShopFilterItem, e);
  ModernPackageShopFilterItem.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    this._clickCallback = null;
  };
  ModernPackageShopFilterItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.disp.btn_checkbox:
        if (this._clickCallback) {
          this._clickCallback(this.relationVOs, !this._active);
        }
    }
  };
  ModernPackageShopFilterItem.prototype.updateCheckbox = function (e) {
    this._active = false;
    if (this.hasCheckBox) {
      var t = 1;
      if (this._relationVOs.every(function (t) {
        return e.indexOf(t) > -1;
      })) {
        t = 2;
        this._active = true;
      } else if (this.type == c.AModernFilterablePackageShopDialogSublayer.FILTER_FILTER && this._relationVOs.some(function (t) {
        return e.indexOf(t) > -1;
      })) {
        t = 3;
        this._active = true;
      }
      this.disp.btn_checkbox.gotoAndStop(t);
    }
  };
  Object.defineProperty(ModernPackageShopFilterItem.prototype, "relationVOs", {
    get: function () {
      return this._relationVOs;
    },
    enumerable: true,
    configurable: true
  });
  ModernPackageShopFilterItem.prototype.addRelationVO = function (e) {
    if (this._relationVOs.length == 0) {
      switch (this.type) {
        case c.AModernFilterablePackageShopDialogSublayer.FILTER_CATEGORY:
          a.CastleComponent.textFieldManager.registerTextField(this.disp.txt_text, new o.LocalizedTextVO("filters_category_" + e.categoryID)).verticalAlign = r.CastleGGSVerticalAlign.MIDDLE;
          break;
        case c.AModernFilterablePackageShopDialogSublayer.FILTER_FILTER:
          a.CastleComponent.textFieldManager.registerTextField(this.disp.txt_text, new o.LocalizedTextVO("filters_filter_" + e.filterID)).verticalAlign = r.CastleGGSVerticalAlign.MIDDLE;
          break;
        case c.AModernFilterablePackageShopDialogSublayer.FILTER_SUBFILTER:
          a.CastleComponent.textFieldManager.registerTextField(this.disp.txt_text, new o.LocalizedTextVO("filters_subfilter_" + e.subFilterID)).verticalAlign = r.CastleGGSVerticalAlign.MIDDLE;
      }
    }
    if (this._relationVOs.indexOf(e) == -1) {
      this._relationVOs.push(e);
      this._relationVOs.sort(function (e, t) {
        if (e.categoryID == t.categoryID) {
          if (e.filterID == t.filterID) {
            return e.subFilterID - t.subFilterID;
          } else {
            return e.filterID - t.filterID;
          }
        } else {
          return e.categoryID - t.categoryID;
        }
      });
    }
  };
  Object.defineProperty(ModernPackageShopFilterItem.prototype, "hasCheckBox", {
    get: function () {
      return !!this.disp.btn_checkbox;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernPackageShopFilterItem.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  return ModernPackageShopFilterItem;
}(s.CastleItemRenderer);
exports.ModernPackageShopFilterItem = u;