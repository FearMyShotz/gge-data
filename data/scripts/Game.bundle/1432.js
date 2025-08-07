Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SQuestDonateRessourcesVO(t, i = 0, n = 0, o = 0, a = 0, s = 0, r = 0, l = 0, c = 0, u = -1, d = false) {
    var p = this;
    p.QID = 0;
    p.F = 0;
    p.W = 0;
    p.S = 0;
    p.C1 = 0;
    p.O = 0;
    p.C = 0;
    p.I = 0;
    p.G = 0;
    p.PWR = 0;
    p.PO = 0;
    CONSTRUCTOR_HACK;
    (p = e.call(this) || this).QID = t;
    p.F = i;
    p.W = n;
    p.S = o;
    p.C1 = a;
    p.O = r;
    p.C = s;
    p.I = c;
    p.G = l;
    p.PWR = d == 1 ? 1 : 0;
    p.PO = u;
    return p;
  }
  n.__extends(C2SQuestDonateRessourcesVO, e);
  C2SQuestDonateRessourcesVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_QUEST_DONATE_RESOURCES;
  };
  return C2SQuestDonateRessourcesVO;
}(o.BasicCommandVO);
exports.C2SQuestDonateRessourcesVO = s;