Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./81.js");
var a = require("./1.js");
var s = require("./1666.js");
var r = require("./3.js");
var l = require("./2.js");
var c = function (e) {
  function RewardHubErrorsItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RewardHubErrorsItem, e);
  RewardHubErrorsItem.prototype.fill = function () {
    l.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.txt_info, new r.LocalizedTextVO(this.data.infoTextId));
  };
  Object.defineProperty(RewardHubErrorsItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  return RewardHubErrorsItem;
}(o.AInfiniteScrollListItem);
exports.RewardHubErrorsItem = c;
a.classImplementsInterfaces(s.RewardHubDialogItem, "ICollectableRendererList");