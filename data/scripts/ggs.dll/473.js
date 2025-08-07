Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./474.js");
var a = require("./45.js");
var s = require("./187.js");
var r = function () {
  function BasicPrivateOfferVOFactory(e) {
    this.privateOfferData = e;
  }
  BasicPrivateOfferVOFactory.prototype.createOfferFromParams = function (e) {
    var t = new i.BasicPrivateOfferVO();
    this.fillFromParamObject(t, e.O);
    return t;
  };
  BasicPrivateOfferVOFactory.prototype.fillFromParamObject = function (e, t) {
    var n;
    var i;
    var r = null;
    var o = parseInt(t.OID);
    a.PrivateOfferStateEnum.getEnumByServerEventID(parseInt(t.OS));
    if (t.RS) {
      Date.now() + parseInt(t.RS) * 1000;
      false;
    } else {
      true;
    }
    r = new Map();
    if (t.OD) {
      for (n in t.OD) {
        i = t.OD[o];
        var l = this.privateOfferData.createOfferDescriptionObject(n, i);
        if (l) {
          r.set(o, l);
        }
      }
    }
    if (t.QD) {
      this.privateOfferData.createQuestConditionContainer(t.QD, s.OfferQuestConditionLogicEnum.getConditionLogicByName(t.QD.logic));
    }
  };
  BasicPrivateOfferVOFactory.prototype.dispose = function () {
    this.privateOfferData = null;
  };
  return BasicPrivateOfferVOFactory;
}();
exports.BasicPrivateOfferVOFactory = r;