Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./129.js");
var s = require("./4.js");
var r = function (e) {
  function AutoRecruitmentCopyQueueInfoSublayer(t) {
    var i = e.call(this, t) || this;
    i._buildListComponent = new c.UnitProductionListComponent(i.subLayerDisp.productionElements, l.BasicBuildListComponent.ALIGN_HORIZONTAL);
    i._buildListComponent.slotsDraggable = false;
    i._buildListComponent.showProgressbar = false;
    return i;
  }
  n.__extends(AutoRecruitmentCopyQueueInfoSublayer, e);
  AutoRecruitmentCopyQueueInfoSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.controller.addEventListener(a.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, this.bindFunction(this.onPackageListUpdated));
    this._buildListComponent.fillItems(s.CastleModel.militaryData.getPackageListById(this.sublayerProperties.listId));
    this._buildListComponent.selectedSlot = -1;
    this._buildListComponent.productionItem.disp.mouseEnabled = false;
    var i = this._buildListComponent.items;
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var r = o[n];
        if (r !== undefined) {
          r.disp.icon_Lock.visible = false;
          r.disp.rentedFrame.visible = false;
          r.disp.vipFrame.visible = false;
          r.disp.icon_wait.visible = false;
          r.disp.mouseEnabled = false;
        }
      }
    }
  };
  AutoRecruitmentCopyQueueInfoSublayer.prototype.onPackageListUpdated = function (e) {
    this._buildListComponent.fillItems(s.CastleModel.militaryData.getPackageListById(this.sublayerProperties.listId));
  };
  AutoRecruitmentCopyQueueInfoSublayer.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.controller.removeEventListener(a.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, this.bindFunction(this.onPackageListUpdated));
    if (this._buildListComponent.selectedSlot > 0) {
      this._buildListComponent.selectedSlot = 0;
    }
  };
  Object.defineProperty(AutoRecruitmentCopyQueueInfoSublayer.prototype, "sublayerProperties", {
    get: function () {
      return this._params;
    },
    enumerable: true,
    configurable: true
  });
  return AutoRecruitmentCopyQueueInfoSublayer;
}(require("./34.js").CastleDialogSubLayer);
exports.AutoRecruitmentCopyQueueInfoSublayer = r;
var l = require("./458.js");
var c = require("./1578.js");
o.classImplementsInterfaces(r, "ICollectableRendererList", "ISublayer");