Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./841.js");
var c = require("./4.js");
var u = require("./34.js");
var d = require("./3992.js");
var p = function (e) {
  function CastleAllianceActionOverviewDialogGift(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleAllianceActionOverviewDialogGift, e);
  CastleAllianceActionOverviewDialogGift.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_copy, new s.LocalizedTextVO("dialog_allianceGift_menu__copy"));
    this.initBasicButtons([this.subLayerDisp.mc_list.btn_up, this.subLayerDisp.mc_list.btn_down, this.subLayerDisp.mc_list.item0.btn_collect, this.subLayerDisp.mc_list.item1.btn_collect, this.subLayerDisp.mc_list.item2.btn_collect, this.subLayerDisp.mc_list.item3.btn_collect, this.subLayerDisp.mc_list.item4.btn_collect]);
    this.giftList = new o.ItemScrollList(this.subLayerDisp.mc_list, this.subLayerDisp.mc_list);
    this.giftList.scrollItemClass = h.AllianceGiftScrollItem;
    this.createList();
    c.CastleModel.allianceGiftData.addEventListener(l.CastleAllianceGiftEvent.DATA_UPDATED, this.bindFunction(this.onListUpdate));
  };
  CastleAllianceActionOverviewDialogGift.prototype.onListUpdate = function (e) {
    this.createList();
  };
  CastleAllianceActionOverviewDialogGift.prototype.createList = function () {
    this.giftList.clear();
    var e = r.int(this.giftList.currentStartIndex);
    var t = c.CastleModel.allianceGiftData.gifts;
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = new d.AllianceGiftScrollItemVO(o);
          this.giftList.pushContent(a);
        }
      }
    }
    this.giftList.initList(e);
  };
  CastleAllianceActionOverviewDialogGift.prototype.hide = function () {
    e.prototype.hide.call(this);
    c.CastleModel.allianceGiftData.removeEventListener(l.CastleAllianceGiftEvent.DATA_UPDATED, this.bindFunction(this.onListUpdate));
    if (this.giftList) {
      this.giftList.remove();
      this.giftList.clear();
      this.giftList = null;
    }
  };
  return CastleAllianceActionOverviewDialogGift;
}(u.CastleDialogSubLayer);
exports.CastleAllianceActionOverviewDialogGift = p;
var h = require("./3993.js");
a.classImplementsInterfaces(p, "ICollectableRendererList", "ISublayer");