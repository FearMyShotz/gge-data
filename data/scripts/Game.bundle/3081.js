Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./1037.js");
var l = require("./13.js");
var c = require("./4.js");
var u = require("./76.js");
var d = require("./77.js");
var p = function (e) {
  function OfficersSchoolDialogUnlock(t) {
    var i = e.call(this, t) || this;
    var n = new d.InfiniteScrollListOptions(C.OfficersSchoolUnlockedItems, "OfficersSchoolUnlockedItem", g.OfficersSchoolDialog.NAME);
    n.itemPaddingY = 4;
    n.useSmoothScroll = true;
    i._scrollList = new h.InfiniteScrollListComponent(new u.InfiniteScrollListClips(i.subLayerDisp.mc_list).addMaskMc(i.subLayerDisp.mc_mask).addItemContainerMc(i.subLayerDisp.mc_list).addSliderMc(i.subLayerDisp.mc_slider), n);
    i._scrollList.scrollComponent.scrollVO.addMouseWheelElements([i.disp]);
    return i;
  }
  n.__extends(OfficersSchoolDialogUnlock, e);
  OfficersSchoolDialogUnlock.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    c.CastleModel.officerSchoolData.addEventListener(r.OfficersSchoolDataEvent.DATA_UPDATED, this.bindFunction(this.updateData));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new s.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("dialog_trainingProgram_unitUnlock_header")));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_copy, new a.LocalizedTextVO("dialog_trainingProgram_unitUnlock_desc"));
    this._scrollList.onShow();
    this.updateData();
  };
  OfficersSchoolDialogUnlock.prototype.hide = function () {
    e.prototype.hide.call(this);
    this._scrollList.onHide();
    c.CastleModel.officerSchoolData.removeEventListener(r.OfficersSchoolDataEvent.DATA_UPDATED, this.bindFunction(this.updateData));
  };
  OfficersSchoolDialogUnlock.prototype.updateData = function (e = null) {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_time, new s.TextVO(" "));
    this.updateItems();
  };
  OfficersSchoolDialogUnlock.prototype.updateItems = function () {
    var e = [];
    for (var t = c.CastleModel.officerSchoolData.uniqueOfficersSchoolUnitWodIDs, i = 0; i < t.length; i += 4) {
      var n = {
        wodIDs: []
      };
      for (var o = 0; o < 4; o++) {
        if (i + o < t.length) {
          n.wodIDs.push(t[i + o]);
        }
      }
      e.push(n);
    }
    this._scrollList.updateWithNewData(e);
  };
  return OfficersSchoolDialogUnlock;
}(require("./34.js").CastleDialogSubLayer);
exports.OfficersSchoolDialogUnlock = p;
var h = require("./78.js");
var g = require("./1036.js");
var C = require("./3082.js");
o.classImplementsInterfaces(p, "ICollectableRendererList", "ISublayer");