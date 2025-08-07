Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./8.js");
var s = function (e) {
  function ConstructionItemSlotBuildingDistrict(t, i, n, o) {
    var s = e.call(this, t, i, n, o) || this;
    a.ButtonHelper.initBasicButton(o.mc_item, 1.02);
    return s;
  }
  n.__extends(ConstructionItemSlotBuildingDistrict, e);
  ConstructionItemSlotBuildingDistrict.prototype.update = function () {
    if (this.buildingVO) {
      e.prototype.update.call(this);
      o.MovieClipHelper.clearMovieClip(this.disp.mc_item.mc_icon);
      if (this.itemVO) {
        this.disp.mc_item.mc_icon.visible = false;
        r.ConstructionItemRenderer.renderWithoutBuildingIcon(this.itemVO, this.bindFunction(this.updateSlotItemDimension), this.disp.mc_item.mc_icon);
      }
      this.disp.visible = true;
    } else {
      this.disp.visible = false;
    }
  };
  ConstructionItemSlotBuildingDistrict.prototype.updateSlotItemDimension = function (e) {
    this.disp.mc_item.mc_icon.visible = true;
    o.MovieClipHelper.scaleToFit(this.disp.mc_item.mc_icon, 52, 52);
  };
  ConstructionItemSlotBuildingDistrict.prototype.onClick = function (e) {
    if (a.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.disp.mc_item:
          this.clickCallback(this);
      }
    }
  };
  return ConstructionItemSlotBuildingDistrict;
}(require("./997.js").ConstructionItemSlot);
exports.ConstructionItemSlotBuildingDistrict = s;
var r = require("./529.js");