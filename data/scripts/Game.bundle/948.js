Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./223.js");
var s = function (e) {
  function AllianceMemberScrollItemVO(t, i, n, o, s = false, r = false, l = true) {
    var c = this;
    c._selected = false;
    c._distanceToTarget = 0;
    c._legendXPShown = false;
    c._honorShown = false;
    c._coinShown = true;
    CONSTRUCTOR_HACK;
    (c = e.call(this) || this)._legendXPShown = !!s;
    c._honorShown = !!r;
    c._coinShown = !!l;
    c._additionalMemberInfoVO = i;
    c._ownerInfoVO = t;
    var u = t.getMainCastlePositionByKingdomID(o);
    c._distanceToTarget = a.MapHelper.getShortestDistance(n, u);
    return c;
  }
  n.__extends(AllianceMemberScrollItemVO, e);
  Object.defineProperty(AllianceMemberScrollItemVO.prototype, "selected", {
    get: function () {
      return this._selected;
    },
    set: function (e) {
      this._selected = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMemberScrollItemVO.prototype, "distanceToTarget", {
    get: function () {
      return this._distanceToTarget;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMemberScrollItemVO.prototype, "ownerInfoVO", {
    get: function () {
      return this._ownerInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMemberScrollItemVO.prototype, "additionalMemberInfoVO", {
    get: function () {
      return this._additionalMemberInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMemberScrollItemVO.prototype, "legendXPShown", {
    get: function () {
      return this._legendXPShown;
    },
    set: function (e) {
      this._legendXPShown = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMemberScrollItemVO.prototype, "honorShown", {
    get: function () {
      return this._honorShown;
    },
    set: function (e) {
      this._honorShown = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMemberScrollItemVO.prototype, "coinShown", {
    get: function () {
      return this._coinShown;
    },
    set: function (e) {
      this._coinShown = e;
    },
    enumerable: true,
    configurable: true
  });
  return AllianceMemberScrollItemVO;
}(o.ScrollItemVO);
exports.AllianceMemberScrollItemVO = s;