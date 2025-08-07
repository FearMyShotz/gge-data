Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = function () {
  function CastleRewardData(e) {
    this.parseXml(e);
  }
  CastleRewardData.prototype.parseXml = function (e) {
    this._rewardVos = new Map();
    this._welcomeBackRewardVOs = new Map();
    var t = e.rewards;
    if (t) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o != undefined) {
          var a = new s.RewardVO();
          a.fillFromParamXml(o);
          this._rewardVos.set(a.id, a);
        }
      }
    }
    var l = e.welcomeBackRewards;
    if (l) {
      for (var c = 0, u = l; c < u.length; c++) {
        var d = u[c];
        if (d != undefined) {
          var p = new r.WelcomeBackRewardVO();
          p.fillFromParamXml(d);
          this._welcomeBackRewardVOs.set(p.id, p);
        }
      }
    }
  };
  CastleRewardData.prototype.getWelcomeBackRewardListById = function (e) {
    if (this._welcomeBackRewardVOs.get(e)) {
      return this._welcomeBackRewardVOs.get(e).rewardList;
    } else {
      return null;
    }
  };
  CastleRewardData.prototype.getListById = function (e) {
    if (this._rewardVos.get(e)) {
      return this._rewardVos.get(e).rewardList.clone();
    } else {
      return null;
    }
  };
  CastleRewardData.prototype.getCopiedListById = function (e) {
    if (this._rewardVos.get(e)) {
      var t = this._rewardVos.get(e);
      if (t) {
        return t.rewardList.clone();
      } else {
        return null;
      }
    }
    return null;
  };
  CastleRewardData.prototype.getListByIdArray = function (e, t = false) {
    var i;
    var n = new a.CollectableList();
    if (e != null) {
      for (var o = 0, s = e; o < s.length; o++) {
        var r = s[o];
        if (r !== undefined && (i = this.getListById(r))) {
          n.addList(i, t);
        }
      }
    }
    return n;
  };
  CastleRewardData.prototype.getListByIdVector = function (e) {
    var t = new a.CollectableList();
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var s = this.getListById(o);
          if (s) {
            t.addList(s);
          }
        }
      }
    }
    return t;
  };
  CastleRewardData.prototype.getGrantTypeByRewardID = function (e) {
    if (this._rewardVos.get(e)) {
      return n.int(this._rewardVos.get(e).grantType);
    } else {
      return -1;
    }
  };
  return CastleRewardData;
}();
exports.CastleRewardData = o;
var a = require("./48.js");
var s = require("./5651.js");
var r = require("./5652.js");