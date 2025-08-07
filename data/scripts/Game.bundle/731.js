Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = function () {
  function LordFactory() {}
  LordFactory.createLord = function (e, t = false, i = false) {
    if (!e) {
      return null;
    }
    var o;
    var c = n.int(e.DLID || e.ID);
    if (c < 0) {
      if (o = i ? r.CastleModel.lordData.getDefaultLordWithoutEquipmentByID(c) : r.CastleModel.lordData.getDefaultLordByID(c)) {
        o.parseLord(e, true, i);
        return o;
      } else {
        return null;
      }
    }
    switch (e.WID) {
      case l.EquipmentConst.COMMANDER_WEARER_ID:
        o = new s.CommanderVO();
        break;
      case l.EquipmentConst.BARON_WEARER_ID:
        o = new a.BaronVO();
    }
    o.parseLord(e, t, i);
    return o;
  };
  return LordFactory;
}();
exports.LordFactory = o;
var a = require("./1321.js");
var s = require("./1322.js");
var r = require("./4.js");
var l = require("./5.js");