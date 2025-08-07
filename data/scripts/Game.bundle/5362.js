Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./5363.js");
var r = require("./5364.js");
var l = require("./5365.js");
var c = require("./5366.js");
var u = require("./1403.js");
var d = require("./5367.js");
var p = function (e) {
  function CastleCollectorEventData(t) {
    var i = e.call(this) || this;
    i._collectEventInfoVOs = new Map();
    var n = t.collectorEventOptions;
    if (n != null) {
      for (var o = 0, a = n; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined) {
          var r = new d.CollectEventInfoVO(s);
          i._collectEventInfoVOs.set(r.collectorEventOptionID, r);
        }
      }
    }
    var l = t.collectorEventRewards;
    if (l != null) {
      for (var c = 0, u = l; c < u.length; c++) {
        var p = u[c];
        if (p !== undefined) {
          var g = new h.CollectorEventRewardVO(p);
          if (i.getCollectInfoVOByID(g.eventOptionID)) {
            i.getCollectInfoVOByID(g.eventOptionID).addCollectEventRewardVO(g);
          }
        }
      }
    }
    return i;
  }
  n.__extends(CastleCollectorEventData, e);
  CastleCollectorEventData.prototype.getCollectInfoVOByID = function (e) {
    return this._collectEventInfoVOs.get(e);
  };
  CastleCollectorEventData.prototype.isCollectorEventCurrency = function (e) {
    if (this._collectEventInfoVOs != null) {
      for (var t = 0, i = Array.from(this._collectEventInfoVOs.values()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.collectorCurrencyID == e) {
          return true;
        }
      }
    }
    return false;
  };
  CastleCollectorEventData.prototype.getPlayerCollectorAmount = function (e) {
    o.BasicModel.smartfoxClient.sendCommandVO(new l.C2SGetPlayerCollectorCurrencyVO(e));
  };
  CastleCollectorEventData.prototype.getTempserverCollectorAmount = function (e) {
    o.BasicModel.smartfoxClient.sendCommandVO(new c.C2SGetPlayerTempServerCollectorCurrencyVO(e));
  };
  CastleCollectorEventData.prototype.getABGCollectorAmount = function (e) {
    o.BasicModel.smartfoxClient.sendCommandVO(new r.C2SAllianceBattleGroundGetPlayerInfluenceVO(e));
  };
  CastleCollectorEventData.prototype.getABGAllianceCollectorAmount = function (e) {
    o.BasicModel.smartfoxClient.sendCommandVO(new s.C2SAllianceBattleGroundGetAllianceInfluenceVO(e));
  };
  CastleCollectorEventData.prototype.parse_PCC = function (e) {
    var t = a.int(e.PID);
    this.lastGotAmountForTarget = a.int(e.CCA);
    this.dispatchEvent(new u.CastleCollectorEventDataEvent(u.CastleCollectorEventDataEvent.COLLECT_CURRENCY_INFO, t, this.lastGotAmountForTarget));
  };
  CastleCollectorEventData.prototype.parse_GPIP = function (e) {
    var t = a.int(e.PID);
    this.lastGotAmountForTarget = a.int(e.AMT);
    this.dispatchEvent(new u.CastleCollectorEventDataEvent(u.CastleCollectorEventDataEvent.COLLECT_CURRENCY_INFO, t, this.lastGotAmountForTarget));
  };
  CastleCollectorEventData.prototype.parse_GAIP = function (e) {
    var t = a.int(e.AID);
    this.lastGotAmountForTarget = a.int(e.AMT);
    this.dispatchEvent(new u.CastleCollectorEventDataEvent(u.CastleCollectorEventDataEvent.COLLECT_CURRENCY_INFO, t, this.lastGotAmountForTarget));
  };
  return CastleCollectorEventData;
}(createjs.EventDispatcher);
exports.CastleCollectorEventData = p;
var h = require("./5368.js");