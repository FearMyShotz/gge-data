Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = function (e) {
  function ListMemberSearchItem(t) {
    var i = e.call(this, t) || this;
    t.actLikeButton = true;
    t.mouseChildren = false;
    i.itxt_name = i.textFieldManager.registerTextField(t.txt_name, new l.TextVO(""));
    i.itxt_level = i.textFieldManager.registerTextField(t.txt_level, new r.NumberVO(0));
    i.itxt_distance = i.textFieldManager.registerTextField(t.txt_distance, new r.NumberVO(0));
    i.itxt_honor = i.textFieldManager.registerTextField(t.txt_honor, new r.NumberVO(0));
    return i;
  }
  n.__extends(ListMemberSearchItem, e);
  ListMemberSearchItem.prototype.customFillItem = function () {
    this.itxt_name.textContentVO.stringValue = this.itemVO.listVO.playerOwnerInfo.playerName;
    this.itxt_level.textContentVO.numberValue = this.itemVO.listVO.playerOwnerInfo.playerLevel;
    this.itxt_distance.textContentVO.numberValue = this.itemVO.listVO.distance;
    this.itxt_honor.textContentVO.numberValue = this.itemVO.listVO.playerOwnerInfo.honor;
  };
  Object.defineProperty(ListMemberSearchItem.prototype, "itemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ListMemberSearchItem.prototype, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return ListMemberSearchItem;
}(a.ScrollItem);
exports.ListMemberSearchItem = c;
s.classImplementsInterfaces(c, "MovieClip");