Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleSlumDataVO() {
    this._payedGoods = new o.CollectableList();
    this._level = 0;
    this._packages = [];
    this._kID = 0;
  }
  CastleSlumDataVO.prototype.fillFromParamXML = function (e) {
    this._kID = parseInt(e.kID || "");
    this._level = s.int(e.slumLevel || "");
    this._partpaypriceVO = a.CastleModel.partPayPricesData.getVOById(parseInt(e.partPayPriceID || ""));
    for (var t = 0, i = (e.packageIDs || "").toString().split("+"); t < i.length; t++) {
      var n = i[t];
      if (n != null && n != "") {
        this._packages.push(a.CastleModel.eventPackageData.getEventPackageByID(parseInt(n)));
      }
    }
  };
  Object.defineProperty(CastleSlumDataVO.prototype, "partpaypriceVO", {
    get: function () {
      return this._partpaypriceVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSlumDataVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSlumDataVO.prototype, "packages", {
    get: function () {
      return this._packages;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSlumDataVO.prototype, "kID", {
    get: function () {
      return this._kID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSlumDataVO.prototype, "payedGoods", {
    get: function () {
      return this._payedGoods;
    },
    set: function (e) {
      this._payedGoods = e;
    },
    enumerable: true,
    configurable: true
  });
  return CastleSlumDataVO;
}();
exports.CastleSlumDataVO = n;
var o = require("./48.js");
var a = require("./4.js");
var s = require("./6.js");