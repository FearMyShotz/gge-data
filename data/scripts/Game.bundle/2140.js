Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./3.js");
var l = require("./1232.js");
var c = require("./37.js");
var u = require("./76.js");
var d = require("./77.js");
var p = function (e) {
  function CastleAllianceInfoDialogABGTower(t) {
    var i = e.call(this, t) || this;
    i.textFieldManager.registerTextField(i.sublayerDisp.txt_member, new r.LocalizedTextVO("dialog_alliance_member"));
    i.itxt_memberAmount = i.textFieldManager.registerTextField(i.sublayerDisp.txt_memberAmount, new r.LocalizedTextVO(""));
    var n = new d.InfiniteScrollListOptions(C.CastleAllianceInfoDialogABGTowerItem, "CastleAllianceInfo_ABGTowerItem", g.CastleAllianceInfoDialog.NAME);
    n.itemPaddingY = 6;
    n.useSmoothScroll = true;
    i._scrollList = new h.InfiniteScrollListComponent(new u.InfiniteScrollListClips(i.subLayerDisp.mc_list).addMaskMc(i.subLayerDisp.mc_mask).addItemContainerMc(i.subLayerDisp.mc_list.mc_items).addSliderMc(i.subLayerDisp.mc_list.mc_slider), n);
    return i;
  }
  n.__extends(CastleAllianceInfoDialogABGTower, e);
  CastleAllianceInfoDialogABGTower.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.itxt_memberAmount.textContentVO.textId = s.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
    this.itxt_memberAmount.textContentVO.textReplacements = [this.allianceInfoVO.memberAmount, this.allianceInfoVO.memberMax];
    a.BasicModel.smartfoxClient.sendCommandVO(new l.C2SAllianceBattleGroundGetTowerInfoVO(this.allianceInfoVO.allianceId));
    this.controller.addEventListener(c.CastleServerMessageArrivedEvent.ABG_TOWERS_LIST_INFO, this.bindFunction(this.updateItems));
    this._scrollList.onShow();
  };
  CastleAllianceInfoDialogABGTower.prototype.hide = function () {
    e.prototype.hide.call(this);
    this._scrollList.onHide();
    this.controller.removeEventListener(c.CastleServerMessageArrivedEvent.ABG_TOWERS_LIST_INFO, this.bindFunction(this.updateItems));
  };
  CastleAllianceInfoDialogABGTower.prototype.updateItems = function (e) {
    var t = [];
    for (var i = 0; i < e.params.length; i++) {
      t.push(e.params[i]);
    }
    this._scrollList.updateWithNewData(t);
  };
  Object.defineProperty(CastleAllianceInfoDialogABGTower.prototype, "allianceInfoVO", {
    get: function () {
      return this._params[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInfoDialogABGTower.prototype, "sublayerDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceInfoDialogABGTower;
}(require("./35.js").CastleDialogSubLayer);
exports.CastleAllianceInfoDialogABGTower = p;
var h = require("./78.js");
var g = require("./132.js");
var C = require("./2141.js");
o.classImplementsInterfaces(p, "ICollectableRendererList", "ISublayer");