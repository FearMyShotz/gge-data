Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./22.js");
var a = require("./221.js");
var s = require("./4.js");
var r = require("./165.js");
var l = function () {
  function XmlSubscriptionBuffVO() {
    this._id = 0;
    this._subscriptionTypeId = 0;
    this._tier = 0;
    this._boni = [];
    this._displayOrder = 0;
    this._seriesId = 0;
    this._requiredMembers = 0;
    this._packageType = a.SubscriptionPackageEnum.UNKNOWN;
  }
  XmlSubscriptionBuffVO.prototype.parseXml = function (e) {
    this._id = n.int(o.CastleXMLUtils.getIntAttribute("subscriptionBuffID", e, -1));
    this._subscriptionTypeId = n.int(o.CastleXMLUtils.getIntAttribute("subscriptionTypeID", e, -1));
    this._tier = n.int(o.CastleXMLUtils.getIntAttribute("tier", e, -1));
    this._displayOrder = n.int(o.CastleXMLUtils.getIntAttribute("displayOrder", e, -1));
    this._seriesId = n.int(o.CastleXMLUtils.getIntAttribute("seriesID", e, -1));
    this._requiredMembers = n.int(o.CastleXMLUtils.getIntAttribute("requiredMembers", e, -1));
    this._packageType = a.SubscriptionPackageEnum.getTypeByServerId(this._subscriptionTypeId);
    var t = o.CastleXMLUtils.getStringAttribute("effects", e);
    if (t != "") {
      for (var i = 0, l = t.split(","); i < l.length; i++) {
        var c = l[i];
        if (c.length > 0) {
          var u = c.split("&");
          var d = s.CastleModel.effectsData.getEffectByID(parseInt(u[0]));
          var p = new r.BonusVO().parseFromValueString(d, u[1]);
          this._boni.push(p);
        }
      }
    }
  };
  Object.defineProperty(XmlSubscriptionBuffVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSubscriptionBuffVO.prototype, "subscriptionTypeId", {
    get: function () {
      return this._subscriptionTypeId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSubscriptionBuffVO.prototype, "tier", {
    get: function () {
      return this._tier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSubscriptionBuffVO.prototype, "boni", {
    get: function () {
      return this._boni;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSubscriptionBuffVO.prototype, "displayOrder", {
    get: function () {
      return this._displayOrder;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSubscriptionBuffVO.prototype, "seriesId", {
    get: function () {
      return this._seriesId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSubscriptionBuffVO.prototype, "requiredMembers", {
    get: function () {
      return this._requiredMembers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSubscriptionBuffVO.prototype, "packageType", {
    get: function () {
      return this._packageType;
    },
    enumerable: true,
    configurable: true
  });
  return XmlSubscriptionBuffVO;
}();
exports.XmlSubscriptionBuffVO = l;