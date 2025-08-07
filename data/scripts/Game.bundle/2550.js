Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SGetAttackDungeonInfosVO(t, i, n) {
    var o = this;
    o.SX = 0;
    o.SY = 0;
    o.TX = 0;
    o.TY = 0;
    o.KID = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).KID = n;
    o.SX = a.int(t.x);
    o.SY = a.int(t.y);
    o.TX = a.int(i.x);
    o.TY = a.int(i.y);
    return o;
  }
  n.__extends(C2SGetAttackDungeonInfosVO, e);
  C2SGetAttackDungeonInfosVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_GET_ATTACK_DUNGEON_INFOS;
  };
  return C2SGetAttackDungeonInfosVO;
}(o.BasicCommandVO);
exports.C2SGetAttackDungeonInfosVO = r;