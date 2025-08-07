Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./432.js");
var s = require("./14.js");
var r = require("./81.js");
var l = require("./394.js");
var c = require("./3.js");
var u = function (e) {
  function MysteryBoxInfoDialogListItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MysteryBoxInfoDialogListItem, e);
  MysteryBoxInfoDialogListItem.prototype.initLoaded = function () {
    e.prototype.initLoaded.call(this);
    this._rewards = new l.TempServerSimpleRewardsComponent(this.getItemMc(), true, false, 0);
  };
  MysteryBoxInfoDialogListItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._rewards.onShow();
  };
  MysteryBoxInfoDialogListItem.prototype.onHide = function () {
    this._rewards.onHide();
    e.prototype.onHide.call(this);
  };
  MysteryBoxInfoDialogListItem.prototype.fill = function () {
    s.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_copy0, new c.LocalizedTextVO("dialog_mysteryBoxSystem_boxRarity_" + this.rewardCategory.toLocaleLowerCase()));
    s.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_copy1, new c.LocalizedTextVO("dialog_mysteryBoxSystem_mysteryBoxInfo_drawChances", [this.chance])).visible = a.CastleCheatData.cheatShowMysteryBoxChances;
    this.getItemMc().mc_legendary.visible = this.rewardCategory == "Legendary";
    this.getItemMc().mc_epic.visible = this.rewardCategory == "Epic";
    this.getItemMc().mc_rare.visible = this.rewardCategory == "Rare";
    this.getItemMc().mc_common.visible = this.rewardCategory == "Common";
    this._rewards.updateWithNewData(this.rewards);
  };
  Object.defineProperty(MysteryBoxInfoDialogListItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  MysteryBoxInfoDialogListItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
  };
  Object.defineProperty(MysteryBoxInfoDialogListItem.prototype, "rewards", {
    get: function () {
      return this.data.rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MysteryBoxInfoDialogListItem.prototype, "rewardCategory", {
    get: function () {
      return this.data.rewardCategory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MysteryBoxInfoDialogListItem.prototype, "chance", {
    get: function () {
      return this.data.chance;
    },
    enumerable: true,
    configurable: true
  });
  return MysteryBoxInfoDialogListItem;
}(r.AInfiniteScrollListItem);
exports.MysteryBoxInfoDialogListItem = u;
o.classImplementsInterfaces(u, "ICollectableRendererList");