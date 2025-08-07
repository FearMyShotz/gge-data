Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleDecoShop() {
    this.buildDecoShop();
  }
  CastleDecoShop.prototype.buildDecoShop = function () {
    this._civil = [];
    this._military = [];
    this._deco = [];
    this._defence = [];
    this._tutorial = [];
    this._only_in_event = [];
    for (var e = 0, t = Array.from(r.CastleModel.wodData.voSubList(a.CastleWodData.TYPE_BUILDING).values()); e < t.length; e++) {
      var i = t[e];
      if (i !== undefined && (i.group == s.ClientConstCastle.GROUP_BUILDING || i.group == s.ClientConstCastle.GROUP_DEFENCE || i.group == s.ClientConstCastle.GROUP_MOAT)) {
        var n = i;
        if (n.shopCategory == s.ClientConstCastle.CATEGORY_NOT_IN_SHOP) {
          continue;
        }
        switch (n.shopCategory) {
          case s.ClientConstCastle.CATEGORY_CIVIL:
            this._civil.push(r.CastleModel.wodData.createVObyWOD(i.wodId, a.CastleWodData.TYPE_BUILDING));
            break;
          case s.ClientConstCastle.CATEGORY_MILITARY:
            this._military.push(r.CastleModel.wodData.createVObyWOD(i.wodId, a.CastleWodData.TYPE_BUILDING));
            break;
          case s.ClientConstCastle.CATEGORY_DECO:
            this._deco.push(r.CastleModel.wodData.createVObyWOD(i.wodId, a.CastleWodData.TYPE_BUILDING));
            break;
          case s.ClientConstCastle.CATEGORY_DEFENCE:
            this._defence.push(r.CastleModel.wodData.createVObyWOD(i.wodId, a.CastleWodData.TYPE_BUILDING));
            break;
          case s.ClientConstCastle.CATEGORY_TUTORIAL:
            this._tutorial.push(r.CastleModel.wodData.createVObyWOD(i.wodId, a.CastleWodData.TYPE_BUILDING));
            break;
          case s.ClientConstCastle.CATEGORY_SEASONEVENT:
            if (i.objectType == o.IsoObjectEnum.DECO) {
              this._deco.push(r.CastleModel.wodData.createVObyWOD(i.wodId, a.CastleWodData.TYPE_BUILDING));
            } else {
              this._only_in_event.push(r.CastleModel.wodData.createVObyWOD(i.wodId, a.CastleWodData.TYPE_BUILDING));
            }
        }
      }
    }
  };
  Object.defineProperty(CastleDecoShop.prototype, "storage", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDecoShop.prototype, "defence", {
    get: function () {
      return this._defence;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDecoShop.prototype, "civil", {
    get: function () {
      return this._civil;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDecoShop.prototype, "military", {
    get: function () {
      return this._military;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDecoShop.prototype, "deco", {
    get: function () {
      return this._deco;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDecoShop.prototype, "tutorial", {
    get: function () {
      return this._tutorial;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDecoShop.prototype, "only_in_event", {
    get: function () {
      return this._only_in_event;
    },
    enumerable: true,
    configurable: true
  });
  return CastleDecoShop;
}();
exports.CastleDecoShop = n;
var o = require("./80.js");
var a = require("./56.js");
var s = require("./18.js");
var r = require("./4.js");