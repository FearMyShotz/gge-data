Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1728.js");
var s = require("./44.js");
var r = require("./54.js");
var l = require("./5377.js");
var c = function (e) {
  function CastleJudgementData(t) {
    var i = e.call(this) || this;
    i._judgementVOs = new Map();
    var n = t.judgements;
    if (g.JudgementConditionEnum.WOOD == undefined) {
      g.JudgementConditionEnum.__initialize_static_members();
    }
    if (n != null) {
      for (var o = 0, a = n; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined) {
          var r = new C.JudgementVO();
          r.fillFromParamXML(s);
          i._judgementVOs.set(r.id, r);
        }
      }
    }
    return i;
  }
  n.__extends(CastleJudgementData, e);
  CastleJudgementData.prototype.reset = function () {
    this._activeJudgement = null;
  };
  CastleJudgementData.prototype.destroy = function () {
    this._activeJudgement = null;
    if (this._judgementVOs != null) {
      for (var t = 0, i = Array.from(this._judgementVOs.values()); t < i.length; t++) {
        i[t].dispose();
      }
    }
    this._judgementVOs = null;
    e.prototype.destroy.call(this);
  };
  CastleJudgementData.prototype.getJudgementVObyID = function (e) {
    return this._judgementVOs.get(e);
  };
  CastleJudgementData.prototype.parse_SJC = function (e) {
    this.startNewJudgement(parseInt(e.JID));
  };
  CastleJudgementData.prototype.parse_JJC = function (e) {
    p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleJudgementRewardDialog, new l.CastleJudgementRewardDialogProperties(this.activeJudgement.id, e.CO));
    this.endActiveJudgement();
  };
  CastleJudgementData.prototype.startNewJudgement = function (e) {
    if (this.activeJudgement) {
      this.endActiveJudgement();
    }
    this._activeJudgement = this._judgementVOs.get(e);
    if (this._activeJudgement) {
      if (d.Iso && d.Iso.data && d.Iso.controller && d.Iso.controller.dataUpdater) {
        d.Iso.controller.dataUpdater.initObjects(u.IsoObjectGroupEnum.JUDGEMENTS);
      }
      this.dispatchEvent(new a.CastleJudgementDataEvent(a.CastleJudgementDataEvent.NEW_JUDGEMENT_STARTED));
    }
  };
  CastleJudgementData.prototype.endActiveJudgement = function () {
    this._activeJudgement = null;
    if (d.Iso.data) {
      d.Iso.controller.dataUpdater.initObjects(u.IsoObjectGroupEnum.JUDGEMENTS);
    }
    this.dispatchEvent(new a.CastleJudgementDataEvent(a.CastleJudgementDataEvent.JUDGEMENT_ENDED));
  };
  Object.defineProperty(CastleJudgementData.prototype, "activeJudgement", {
    get: function () {
      if (s.SpecialServerHelper.isCrossplay()) {
        return null;
      } else {
        return this._activeJudgement;
      }
    },
    enumerable: true,
    configurable: true
  });
  return CastleJudgementData;
}(r.CastleBasicData);
exports.CastleJudgementData = c;
var u = require("./143.js");
var d = require("./34.js");
var p = require("./9.js");
var h = require("./5378.js");
var g = require("./1077.js");
var C = require("./5379.js");
o.classImplementsInterfaces(c, "IUpdatable");