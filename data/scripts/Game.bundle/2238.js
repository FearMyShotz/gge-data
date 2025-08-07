Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./12.js");
var r = require("./104.js");
var l = createjs.Point;
var c = require("./81.js");
var u = require("./2.js");
var d = require("./4.js");
var p = require("./25.js");
var h = require("./31.js");
var g = require("./19.js");
var C = require("./247.js");
var _ = function (e) {
  function GeneralsHubDialogIMultiRewardItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GeneralsHubDialogIMultiRewardItem, e);
  GeneralsHubDialogIMultiRewardItem.prototype.initLoaded = function () {
    e.prototype.initLoaded.call(this);
    this.clipLists = [new r.CollectableRendererList(), new r.CollectableRendererList(), new r.CollectableRendererList(), new r.CollectableRendererList()];
  };
  GeneralsHubDialogIMultiRewardItem.prototype.fill = function () {
    for (var e = 0; e < 4; e++) {
      var t = this.rewards.length > e ? this.rewards[e] : null;
      u.MovieClipHelper.clearMovieClip(this.itemMc["mc_icon" + e]);
      this.itemMc["mc_item" + e].visible = false;
      if (t) {
        this.clipLists[e].destroyCollectableRenderList();
        if (this.showCurrencyAsGeneral(t.RW)) {
          var i = d.CastleModel.generalsData.getGeneralXMLVOByTokenID(t.RW.id);
          var n = d.CastleModel.generalsData.playerGenerals.get(i.generalID);
          new C.GeneralSelectionItem(n, this.itemMc["mc_icon" + e], false, false, false, true, null, true, false, false, true);
          this.itemMc["mc_icon" + e].getChildAt(0).y = -50;
          this.itemMc["mc_icon" + e].scaleX = this.itemMc["mc_icon" + e].scaleY = 1.9;
          this.itemMc["mc_icon" + e].mouseChildren = false;
          this.itemMc["mc_icon" + e].toolTipText = a.Localize.text("generic_amount_reward", [new a.LocalizedNumberVO(t.RW.amount), t.RW.getNameTextId()]);
        } else {
          this.itemMc["mc_item" + e].visible = true;
          var o = new g.CollectableRenderOptions(g.CollectableRenderOptions.SET_ADVANCED, new l(173, 173));
          o.icon.unitLevelDimension = new l(70, 70);
          o.icon.unitLevelOffset = new l(-70, -70);
          var s = new h.CollectableRenderClips(this.itemMc["mc_item" + e].mc_item).addIconMc(this.itemMc["mc_item" + e].mc_item.mc_icon).addBuildingLevelMc(this.itemMc["mc_item" + e].mc_item.mc_buildingLevel).addTextfieldBgMc(this.itemMc["mc_item" + e].mc_item.text_bg).addTextfield(this.itemMc["mc_item" + e].mc_item.txt_text).addInfoBtn(this.itemMc["mc_item" + e].btn_info);
          p.CollectableRenderHelper.displaySingleItemComplete(this.clipLists[e], s, t.RW, o);
        }
      }
    }
  };
  GeneralsHubDialogIMultiRewardItem.prototype.showCurrencyAsGeneral = function (e) {
    if (!e) {
      return false;
    }
    if (e.itemType != s.CollectableEnum.GENERIC_CURRENCY) {
      return false;
    }
    var t = d.CastleModel.generalsData.getGeneralXMLVOByTokenID(e.id);
    if (!t) {
      return false;
    }
    var i = d.CastleModel.generalsData.playerGenerals.get(t.generalID);
    var n = d.CastleModel.currencyData.getAmountById(e.id);
    return (!i || !i.isUnlocked) && n >= t.rarity.unlockCosts || !!i && !!i.isUnlocked && !!(i.requiredShards > 0) && !!(n >= i.requiredShards);
  };
  Object.defineProperty(GeneralsHubDialogIMultiRewardItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsHubDialogIMultiRewardItem.prototype, "rewards", {
    get: function () {
      return this.data.rewards;
    },
    enumerable: true,
    configurable: true
  });
  return GeneralsHubDialogIMultiRewardItem;
}(c.AInfiniteScrollListItem);
exports.GeneralsHubDialogIMultiRewardItem = _;
o.classImplementsInterfaces(_, "ICollectableRendererList");