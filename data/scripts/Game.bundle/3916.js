Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./20.js");
var l = require("./81.js");
var c = require("./8.js");
var u = function (e) {
  function CheatBotCollectionDialogItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CheatBotCollectionDialogItem, e);
  CheatBotCollectionDialogItem.prototype.fill = function () {
    this.itemMc.mouseChildren = false;
    this.itemMc.actLikeButton = true;
    c.ButtonHelper.initButton(this.itemMc, 1.05, r.ClickFeedbackButtonHover);
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.headerMC.txt_name, new s.TextVO(this.name)).autoFitToBounds = true;
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.headerMC.txt_value, new s.TextVO(this.description)).autoFitToBounds = true;
  };
  CheatBotCollectionDialogItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    new this.command().execute();
  };
  Object.defineProperty(CheatBotCollectionDialogItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CheatBotCollectionDialogItem.prototype, "name", {
    get: function () {
      return this.data.name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CheatBotCollectionDialogItem.prototype, "description", {
    get: function () {
      return this.data.description;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CheatBotCollectionDialogItem.prototype, "command", {
    get: function () {
      return this.data.command;
    },
    enumerable: true,
    configurable: true
  });
  return CheatBotCollectionDialogItem;
}(l.AInfiniteScrollListItem);
exports.CheatBotCollectionDialogItem = u;
a.classImplementsInterfaces(u, "ICollectableRendererList");