Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./540.js");
var s = function (e) {
  function AutoRecruitmentCopyCostSublayer(t) {
    var i = e.call(this, t) || this;
    i._costComponent = new r.AutoRecruitmentCostComponent(t, true);
    return i;
  }
  n.__extends(AutoRecruitmentCopyCostSublayer, e);
  AutoRecruitmentCopyCostSublayer.prototype.updateCosts = function () {
    this._costComponent.updateWithNewCosts(this.getCurrentCosts());
  };
  AutoRecruitmentCopyCostSublayer.prototype.getCurrentCosts = function () {
    var e = new l.AutoRecruitmentCosts();
    e.priceType = a.AutoRecruitmentPriceEnum.getTypeByListId(this._properties.listId);
    for (var t = 0, i = this._properties.listComponent.listData; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        e.priceType = n.costs.priceType;
        if (n.isSelected) {
          e.costs.addList(n.costs.costs, true);
          e.duplicatingCosts.amount += n.costs.duplicatingCosts.amount;
        }
      }
    }
    e.loopFee.amount = this._properties.loopFeeCosts.amount * this._properties.listComponent.getSelectedCastlesCount();
    return e;
  };
  AutoRecruitmentCopyCostSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this._properties = t;
    this._properties.listComponent.onSelectionChanged.add(this.bindFunction(this.onItemSelectionChanged));
    this.updateCosts();
  };
  AutoRecruitmentCopyCostSublayer.prototype.onItemSelectionChanged = function () {
    this.updateCosts();
  };
  AutoRecruitmentCopyCostSublayer.prototype.hide = function () {
    e.prototype.hide.call(this);
    this._properties.listComponent.onSelectionChanged.remove(this.bindFunction(this.onItemSelectionChanged));
  };
  return AutoRecruitmentCopyCostSublayer;
}(require("./35.js").CastleDialogSubLayer);
exports.AutoRecruitmentCopyCostSublayer = s;
var r = require("./1577.js");
var l = require("./646.js");
o.classImplementsInterfaces(s, "ICollectableRendererList", "ISublayer");