Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./12.js");
var s = require("./45.js");
var r = require("./104.js");
var l = require("./20.js");
var c = require("./81.js");
var u = require("./8.js");
var d = require("./2.js");
var p = require("./4.js");
var h = require("./3.js");
var g = require("./25.js");
var C = require("./31.js");
var _ = require("./52.js");
var m = require("./19.js");
var f = createjs.Point;
var O = function (e) {
  function RewardHubDialogMysteryBoxItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RewardHubDialogMysteryBoxItem, e);
  RewardHubDialogMysteryBoxItem.prototype.initLoaded = function () {
    e.prototype.initLoaded.call(this);
    u.ButtonHelper.initButtons([this.getItemMc().mc_item0.btn_left, this.getItemMc().mc_item1.btn_left, this.getItemMc().mc_item2.btn_left, this.getItemMc().mc_item0.btn_right, this.getItemMc().mc_item1.btn_right, this.getItemMc().mc_item2.btn_right], l.ClickFeedbackButtonHover);
  };
  RewardHubDialogMysteryBoxItem.prototype.fill = function () {
    this.fillItem(0);
    this.fillItem(1);
    this.fillItem(2);
  };
  RewardHubDialogMysteryBoxItem.prototype.fillItem = function (e) {
    var t = this.getItemMc()["mc_item" + e];
    d.MovieClipHelper.clearMovieClip(t.mc_item);
    if (this.getBox(e)) {
      t.visible = true;
      t.btn_left.toolTipText = h.Localize.text("dialog_mysteryBoxSystem_mysteryBoxHUB_openSingleBox_tooltip", [this.getBox(e).getNameTextId(), s.CollectableHelper.createVO(a.CollectableEnum.GENERIC_CURRENCY, 1, this.selectedKeyID).getNameTextId()]);
      if (this.selectedKeyID == _.ClientConstCurrency.ID_MYSTERY_BOX_KEY_COMMON) {
        t.btn_right.toolTipText = h.Localize.text("dialog_mysteryBoxSystem_mysteryBoxHUB_openMultipleBoxes_tooltip", [this.getBox(e).getNameTextId(), s.CollectableHelper.createVO(a.CollectableEnum.GENERIC_CURRENCY, 1, this.selectedKeyID).getNameTextId()]);
      } else {
        t.btn_right.toolTipText = h.Localize.text("dialog_mysteryBoxSystem_mysteryBoxHUB_openMultipleBoxes_needCommonKey_tooltip");
      }
      u.ButtonHelper.enableButton(t.btn_left, p.CastleModel.currencyData.getAmountById(this.selectedKeyID) > 0 || this.selectedKeyID == _.ClientConstCurrency.ID_MYSTERY_BOX_KEY_COMMON);
      u.ButtonHelper.enableButton(t.btn_right, this.selectedKeyID == _.ClientConstCurrency.ID_MYSTERY_BOX_KEY_COMMON);
      var i = new m.CollectableRenderOptions(m.CollectableRenderOptions.SET_ADVANCED, new f(130, 130));
      i.icon.showMysteryBoxDrawCounter = false;
      g.CollectableRenderHelper.displaySingleItemComplete(new r.CollectableRendererList(), new C.CollectableRenderClips(t.mc_item).addTextfield(t.txt_copy).addIconMc(t.mc_item).addInfoBtn(t.btn_info), this.getBox(e), i);
    } else {
      t.visible = false;
    }
  };
  Object.defineProperty(RewardHubDialogMysteryBoxItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  RewardHubDialogMysteryBoxItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (u.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.getItemMc().mc_item0.btn_left:
          p.CastleModel.lootBoxData.openLootBox(this.getBox(0).lootBoxID, this.selectedKeyID, false);
          break;
        case this.getItemMc().mc_item1.btn_left:
          p.CastleModel.lootBoxData.openLootBox(this.getBox(1).lootBoxID, this.selectedKeyID, false);
          break;
        case this.getItemMc().mc_item2.btn_left:
          p.CastleModel.lootBoxData.openLootBox(this.getBox(2).lootBoxID, this.selectedKeyID, false);
          break;
        case this.getItemMc().mc_item0.btn_right:
          p.CastleModel.lootBoxData.openLootBox(this.getBox(0).lootBoxID, this.selectedKeyID, true);
          break;
        case this.getItemMc().mc_item1.btn_right:
          p.CastleModel.lootBoxData.openLootBox(this.getBox(1).lootBoxID, this.selectedKeyID, true);
          break;
        case this.getItemMc().mc_item2.btn_right:
          p.CastleModel.lootBoxData.openLootBox(this.getBox(2).lootBoxID, this.selectedKeyID, true);
      }
    }
  };
  RewardHubDialogMysteryBoxItem.prototype.getBox = function (e) {
    if (e >= this.data.data.length) {
      return null;
    } else {
      return this.data.data[e];
    }
  };
  Object.defineProperty(RewardHubDialogMysteryBoxItem.prototype, "selectedKeyID", {
    get: function () {
      return this.data.selectedKey;
    },
    enumerable: true,
    configurable: true
  });
  return RewardHubDialogMysteryBoxItem;
}(c.AInfiniteScrollListItem);
exports.RewardHubDialogMysteryBoxItem = O;
o.classImplementsInterfaces(O, "ICollectableRendererList");