Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./8.js");
var c = function (e) {
  function ForwardMessageListItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(ForwardMessageListItem, e);
  ForwardMessageListItem.prototype.customFillItem = function () {
    this.textFieldManager.registerTextField(this._disp.txt_name, new r.TextVO(this.itemVO.name));
    this.textFieldManager.registerTextField(this._disp.txt_level, new r.TextVO(this.itemVO.level + ""));
    this.textFieldManager.registerTextField(this._disp.txt_honor, new r.TextVO(this.itemVO.honor + ""));
    this._disp.btn_moveLeft.toolTipText = "dialog_forwardMessage_removeRecipient";
    this._disp.btn_moveRight.toolTipText = "dialog_forwardMessage_addRecipient";
    this._disp.btn_moveLeft.visible = false;
    this._disp.btn_moveRight.visible = false;
    l.ButtonHelper.initBasicButtons([this._disp.btn_moveLeft, this._disp.btn_moveRight]);
  };
  ForwardMessageListItem.prototype.onRollOver = function (e) {
    if (this.itemVO.isReceiver) {
      this._disp.btn_moveLeft.visible = true;
    } else {
      this._disp.btn_moveRight.visible = true;
    }
  };
  ForwardMessageListItem.prototype.onRollOut = function (e) {
    this._disp.btn_moveLeft.visible = false;
    this._disp.btn_moveRight.visible = false;
  };
  Object.defineProperty(ForwardMessageListItem.prototype, "itemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ForwardMessageListItem.prototype, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return ForwardMessageListItem;
}(a.ScrollItem);
exports.ForwardMessageListItem = c;
s.classImplementsInterfaces(c, "MovieClip");