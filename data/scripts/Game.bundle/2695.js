Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = require("./4.js");
var l = function (e) {
  function C2SDisassembleConstructionItemVO(t, i, n = 1) {
    var o = this;
    o.CID = 0;
    o.KID = 0;
    o.AID = 0;
    o.LFID = 0;
    o.AMT = 1;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).CID = t;
    o.KID = a.int(r.CastleModel.kingdomData.activeKingdomID);
    o.AID = a.int(r.CastleModel.areaData.activeAreaInfo.objectId);
    o.LFID = i;
    o.AMT = n;
    return o;
  }
  n.__extends(C2SDisassembleConstructionItemVO, e);
  C2SDisassembleConstructionItemVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_DISASSEMBLE_CONSTRUCTION_ITEM;
  };
  return C2SDisassembleConstructionItemVO;
}(o.BasicCommandVO);
exports.C2SDisassembleConstructionItemVO = l;