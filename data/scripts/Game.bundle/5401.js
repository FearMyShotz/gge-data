Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./5402.js");
var s = require("./83.js");
var r = require("./99.js");
var l = function (e) {
  function MessageAboVO() {
    return e.call(this) || this;
  }
  n.__extends(MessageAboVO, e);
  MessageAboVO.prototype.parseMessageHeader = function (e) {
    this._goods = new d.CollectableList();
    for (var t = e.split("#"), i = 0; i < t.length; ++i) {
      t[i] = parseInt(t[i]);
    }
    this._goods = c.CollectableManager.parser.s2cParamList.createList(t);
  };
  MessageAboVO.prototype.parseSubject = function () {
    var e = this._goods.getItemByIndexSave(0);
    var t = e ? e.itemType : u.CollectableEnum.UNKNOWN;
    var i = this._subject;
    switch (t) {
      case u.CollectableEnum.WOOD:
        i = o.Localize.text("dialog_messageHeader_abo_wood");
        break;
      case u.CollectableEnum.STONE:
        i = o.Localize.text("dialog_messageHeader_abo_stone");
        break;
      case u.CollectableEnum.FOOD:
        i = o.Localize.text("dialog_messageHeader_abo_food");
        break;
      case u.CollectableEnum.C1:
        i = o.Localize.text("dialog_messageHeader_abo_c1");
        break;
      case u.CollectableEnum.C2:
        i = o.Localize.text("dialog_messageHeader_abo_c2");
    }
    return i;
  };
  MessageAboVO.prototype.parseSender = function () {
    return o.Localize.text("system");
  };
  Object.defineProperty(MessageAboVO.prototype, "dialogInfo", {
    get: function () {
      return new s.DialogInfoVO(p.CastlePremiumAboReceivedDialog, new a.CastlePremiumAboReceivedDialogProperties(this));
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AMessageVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageAboVO.prototype, "goods", {
    get: function () {
      return this._goods;
    },
    enumerable: true,
    configurable: true
  });
  return MessageAboVO;
}(r.AMessageVO);
exports.MessageAboVO = l;
var c = require("./50.js");
var u = require("./12.js");
var d = require("./48.js");
var p = require("./5403.js");