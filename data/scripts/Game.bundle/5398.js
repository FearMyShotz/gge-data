Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./5399.js");
var s = require("./83.js");
var r = require("./99.js");
var l = function (e) {
  function CastleMessageInfoVO() {
    return e.call(this) || this;
  }
  n.__extends(CastleMessageInfoVO, e);
  CastleMessageInfoVO.prototype.parseMessageHeader = function (e) {
    this._infoId = e;
  };
  CastleMessageInfoVO.prototype.parseSubject = function () {
    return o.Localize.text("dialog_info_message_title_" + this._infoId);
  };
  CastleMessageInfoVO.prototype.parseSender = function () {
    return o.Localize.text("system");
  };
  Object.defineProperty(CastleMessageInfoVO.prototype, "dialogInfo", {
    get: function () {
      return new s.DialogInfoVO(c.CastleMessageInfoDialog, new a.CastleMessageInfoDialogProperties(this._infoId));
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AMessageVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleMessageInfoVO;
}(r.AMessageVO);
exports.CastleMessageInfoVO = l;
var c = require("./5400.js");