Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./31.js");
var u = require("./19.js");
var d = require("./11.js");
var p = createjs.MovieClip;
var h = createjs.Point;
var g = function (e) {
  function CastleDungeonTreasureChestOpenDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleDungeonTreasureChestOpenDialog.NAME) || this;
  }
  n.__extends(CastleDungeonTreasureChestOpenDialog, e);
  CastleDungeonTreasureChestOpenDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.LocalizedTextVO("dialog_primeday_specialoffer_rewardtitle"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new l.LocalizedTextVO("dialog_privateOffer_whaleChest_rewardGet_description"));
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    this.dialogDisp.btn_ok.toolTipText = o.GenericTextIds.BUTTON_OKAY;
    this.updateRewards();
  };
  CastleDungeonTreasureChestOpenDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleDungeonTreasureChestOpenDialog.prototype.updateRewards = function () {
    var e;
    var t = this.offerVO.getTotalRewardListFromOfferVO();
    this.destroyCollectableRenderList();
    var i = CastleDungeonTreasureChestOpenDialog.REWARD_START_X;
    for (var n = 0; n < t.length && n < 13; ++n) {
      e = t.getItemByIndex(n);
      if (r.instanceOfClass(e, "ACollectableItemEquipmentVO")) {
        this.addEquipmentItem(e, i);
      } else {
        this.addRewardItem(e, i);
      }
      i += CastleDungeonTreasureChestOpenDialog.REWARD_ITEM_DIST;
    }
  };
  CastleDungeonTreasureChestOpenDialog.prototype.addRewardItem = function (e, t) {
    var i = new (s.getDefinitionByName("StandardRewardItem"))();
    this.dialogDisp.addChild(i);
    C.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new c.CollectableRenderClips(i), e, new u.CollectableRenderOptions(u.CollectableRenderOptions.SET_ADVANCED));
    i.x = t;
    i.y = CastleDungeonTreasureChestOpenDialog.REWARD_ITEM_YPOS;
  };
  CastleDungeonTreasureChestOpenDialog.prototype.addEquipmentItem = function (e, t) {
    var i = new p();
    this.dialogDisp.addChild(i);
    C.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new c.CollectableRenderClips(i).addIconMc(i), e, new u.CollectableRenderOptions(u.CollectableRenderOptions.SET_BASIC, new h(50, 50)));
    i.x = t;
    i.y = CastleDungeonTreasureChestOpenDialog.REWARD_ITEM_YPOS;
  };
  Object.defineProperty(CastleDungeonTreasureChestOpenDialog.prototype, "offerVO", {
    get: function () {
      return this.dialogProperties.offerVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDungeonTreasureChestOpenDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleDungeonTreasureChestOpenDialog.__initialize_static_members = function () {
    CastleDungeonTreasureChestOpenDialog.REWARD_START_X = 227;
    CastleDungeonTreasureChestOpenDialog.REWARD_ITEM_YPOS = 352;
    CastleDungeonTreasureChestOpenDialog.REWARD_ITEM_DIST = 75;
    CastleDungeonTreasureChestOpenDialog.NAME = "CastleDungeonTreasureChestOpenExternal";
  };
  return CastleDungeonTreasureChestOpenDialog;
}(d.CastleExternalDialog);
exports.CastleDungeonTreasureChestOpenDialog = g;
var C = require("./25.js");
a.classImplementsInterfaces(g, "ICollectableRendererList");
g.__initialize_static_members();