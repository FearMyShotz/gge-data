Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./1937.js");
var l = require("./83.js");
var c = require("./99.js");
var u = function (e) {
  function MessageRuinInfoVO() {
    var t = this;
    t.posX = 0;
    t.posY = 0;
    t.remainingRuinTime = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(MessageRuinInfoVO, e);
  MessageRuinInfoVO.prototype.parseMessageHeader = function (e) {
    var t = e.split(a.MessageConst.SUBTYPE_META_DATA_SPLITTER);
    this.posX = parseInt(t[0]);
    this.posY = parseInt(t[1]);
    this.remainingRuinTime = parseInt(t[2]);
  };
  MessageRuinInfoVO.prototype.parseSubject = function () {
    return s.Localize.text("dialog_relocateRuin_remainingRuinTime", [o.TimeStringHelper.getCommaTimeStringFromSeconds(this.remainingRuinTime, s.Localize.text)]);
  };
  MessageRuinInfoVO.prototype.parseSender = function () {
    return s.Localize.text("system");
  };
  Object.defineProperty(MessageRuinInfoVO.prototype, "dialogInfo", {
    get: function () {
      return new l.DialogInfoVO(d.CastleRelocateRuinDialog, new r.CastleRelocateRuinDialogProperties(this.posX, this.posY, this.remainingRuinTime, false));
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.AMessageVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return MessageRuinInfoVO;
}(c.AMessageVO);
exports.MessageRuinInfoVO = u;
var d = require("./1938.js");