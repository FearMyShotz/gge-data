Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./31.js");
var r = require("./19.js");
var l = require("./432.js");
var c = require("./14.js");
var u = require("./81.js");
var d = require("./25.js");
var p = createjs.Point;
var h = function (e) {
  function GeneralsHubInfoDialogListItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GeneralsHubInfoDialogListItem, e);
  GeneralsHubInfoDialogListItem.prototype.initLoaded = function () {
    e.prototype.initLoaded.call(this);
  };
  GeneralsHubInfoDialogListItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
  };
  GeneralsHubInfoDialogListItem.prototype.onHide = function () {
    e.prototype.onHide.call(this);
  };
  GeneralsHubInfoDialogListItem.prototype.fill = function () {
    if (l.CastleCheatData.cheatShowMysteryBoxChances) {
      c.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_copy, new a.LocalizedTextVO("dialog_mysteryBoxSystem_mysteryBoxInfo_drawChances", [this.chance]));
    } else {
      c.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_copy, new a.LocalizedTextVO(this.reward ? this.reward.getNameTextId() : " "));
    }
    var e = new r.CollectableRenderOptions(r.CollectableRenderOptions.SET_ADVANCED, new p(64, 64));
    e.tooltip.showEquipmentCountdown = false;
    e.icon.unitLevelDimension = new p(26, 26);
    if (this.reward) {
      d.CollectableRenderHelper.displaySingleItemComplete(this, new s.CollectableRenderClips(this.getItemMc().mc_item).addTextfieldBgMc(this.getItemMc().mc_item.mc_bg).addTextfield(this.getItemMc().mc_item.txt_amount).addInfoBtn(this.getItemMc().btn_info), this.reward, e);
    }
  };
  Object.defineProperty(GeneralsHubInfoDialogListItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  GeneralsHubInfoDialogListItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
  };
  Object.defineProperty(GeneralsHubInfoDialogListItem.prototype, "reward", {
    get: function () {
      return this.data.reward;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsHubInfoDialogListItem.prototype, "rewardCategory", {
    get: function () {
      return this.data.rewardCategory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsHubInfoDialogListItem.prototype, "chance", {
    get: function () {
      return this.data.chance;
    },
    enumerable: true,
    configurable: true
  });
  return GeneralsHubInfoDialogListItem;
}(u.AInfiniteScrollListItem);
exports.GeneralsHubInfoDialogListItem = h;
o.classImplementsInterfaces(h, "ICollectableRendererList");