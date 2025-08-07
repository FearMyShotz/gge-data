Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./12.js");
var c = require("./67.js");
var u = require("./19.js");
var d = require("./13.js");
var p = require("./81.js");
var h = require("./25.js");
var g = createjs.Point;
var C = function (e) {
  function GachaEventEndDialogItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GachaEventEndDialogItem, e);
  GachaEventEndDialogItem.prototype.initLoaded = function () {
    e.prototype.initLoaded.call(this);
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().mc_empty.txt_empty, new r.LocalizedTextVO("noRewards"));
    this._itxt_type = o.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().txt_type, new s.TextVO(""));
  };
  GachaEventEndDialogItem.prototype.fill = function () {
    e.prototype.fill.call(this);
    if (this.rank > 0) {
      this._itxt_type.textContentVO.stringValue = d.TextHelper.toUpperCaseLocaSafeTextId("yourRankingPlaceholder", [this.rank]);
    } else {
      this._itxt_type.textContentVO.stringValue = d.TextHelper.toUpperCaseLocaSafeTextId("dialog_dailyQuests_questPoints", [this.currentScore]);
    }
    if (this.rewards.length <= 0) {
      this.getItemMc().mc_empty.visible = true;
    } else {
      this.getItemMc().mc_empty.visible = false;
      var t = new c.CollectableRenderClipsList(this.getItemMc(), "mc_item");
      var i = new u.CollectableRenderOptions(u.CollectableRenderOptions.SET_ADVANCED, new g(65, 65));
      t.addItemMcs("mc_item").addInfoBtns("parent.btn_info").addIconMcs("mc_item.mc_icon").addTextfields("mc_item.txt_text").addTextfieldBgMcs("mc_item.mc_textBackground").addBuildingLevelMc("mc_item.mc_buildingLevel");
      h.CollectableRenderHelper.displayMultipleItemsComplete(this, t, this.rewards, i, this.bindFunction(this.afterRenderFunc));
    }
  };
  GachaEventEndDialogItem.prototype.afterRenderFunc = function (e) {
    var t = e.getRenderer(u.CollectableRenderOptions.ICON_TRANSFORM);
    if (e.itemVO && e.itemVO.itemType == l.CollectableEnum.BUILDING) {
      t.transform.offset.y = -3;
    }
    if (e.itemVO && e.itemVO.itemType == l.CollectableEnum.EQUIPMENT_UNIQUE) {
      t.transform.offset.y = 0;
    }
  };
  Object.defineProperty(GachaEventEndDialogItem.prototype, "rewards", {
    get: function () {
      return this.data.rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaEventEndDialogItem.prototype, "rank", {
    get: function () {
      return this.data.rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaEventEndDialogItem.prototype, "currentScore", {
    get: function () {
      return this.data.score;
    },
    enumerable: true,
    configurable: true
  });
  return GachaEventEndDialogItem;
}(p.AInfiniteScrollListItem);
exports.GachaEventEndDialogItem = C;
a.classImplementsInterfaces(p.AInfiniteScrollListItem, "ICollectableRendererList");