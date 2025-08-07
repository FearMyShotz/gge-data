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
  function ListAllianceApplicationItem(t) {
    var i = e.call(this, t) || this;
    t.actLikeButton = true;
    t.mouseChildren = false;
    return i;
  }
  n.__extends(ListAllianceApplicationItem, e);
  ListAllianceApplicationItem.prototype.customFillItem = function () {
    if (!this.itxt_date || !this.itxt_date.textContentVO) {
      this.itxt_date = this.textFieldManager.registerTextField(this.disp.txt_date, new r.LocalizedTextVO("dialog_inbox_timeAgo", [0]));
      this.itxt_date.autoFitToBounds = true;
    }
    if (!this.itxt_name || !this.itxt_name.textContentVO) {
      this.itxt_name = this.textFieldManager.registerTextField(this.disp.txt_name, new l.TextVO(""));
    }
    if (!this.itxt_honor || !this.itxt_honor.textContentVO) {
      this.itxt_honor = this.textFieldManager.registerTextField(this.disp.txt_honor, new l.TextVO(""));
    }
    if (!this.itxt_distance || !this.itxt_distance.textContentVO) {
      this.itxt_distance = this.textFieldManager.registerTextField(this.disp.txt_distance, new l.TextVO(""));
    }
    if (!this.itxt_level || !this.itxt_level.textContentVO) {
      this.itxt_level = this.textFieldManager.registerTextField(this.disp.txt_level, new l.TextVO(""));
    }
    this.itxt_date.textContentVO.textId = "dialog_inbox_timeAgo";
    this.itxt_date.textContentVO.textReplacements = [this.itemVO.listVO.getApplicationDateString()];
    this.itxt_name.textContentVO.stringValue = this.itemVO.listVO.playerOwnerInfo.playerName;
    this.itxt_honor.textContentVO.stringValue = String(this.itemVO.listVO.playerOwnerInfo.honor);
    this.itxt_distance.textContentVO.stringValue = String(this.itemVO.listVO.distance);
    this.itxt_level.textContentVO.stringValue = String(this.itemVO.listVO.playerOwnerInfo.playerLevel);
  };
  Object.defineProperty(ListAllianceApplicationItem.prototype, "itemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ListAllianceApplicationItem.prototype, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return ListAllianceApplicationItem;
}(a.ScrollItem);
exports.ListAllianceApplicationItem = c;
s.classImplementsInterfaces(c, "MovieClip");