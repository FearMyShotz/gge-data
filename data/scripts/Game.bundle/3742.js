Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./21.js");
var u = require("./13.js");
var d = require("./4.js");
var p = require("./375.js");
var h = require("./40.js");
var g = require("./322.js");
var C = createjs.Point;
var _ = function (e) {
  function CastleAllianceSamuraiInvasionDaimyoTooltip(t) {
    var i = e.call(this, t) || this;
    m.CastleComponent.textFieldManager.registerTextField(t.txt_info, new r.LocalizedTextVO("jumpTo_worldMap")).autoFitToBounds = true;
    return i;
  }
  n.__extends(CastleAllianceSamuraiInvasionDaimyoTooltip, e);
  CastleAllianceSamuraiInvasionDaimyoTooltip.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    d.CastleModel.timerData.addEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  CastleAllianceSamuraiInvasionDaimyoTooltip.prototype.removeEventListener = function () {
    d.CastleModel.timerData.removeEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    e.prototype.removeEventListener.call(this);
  };
  CastleAllianceSamuraiInvasionDaimyoTooltip.prototype.updateWithNewData = function (e) {
    this._areaVE = e;
    this.update();
  };
  CastleAllianceSamuraiInvasionDaimyoTooltip.prototype.update = function () {
    var e = this.areaVE.disp.getBounds(null);
    this.disp.x = this.areaVE.disp.x + CastleAllianceSamuraiInvasionDaimyoTooltip.POS_OFFSET.x;
    this.disp.y = this.areaVE.disp.y + e.top + CastleAllianceSamuraiInvasionDaimyoTooltip.POS_OFFSET.y;
    m.CastleComponent.textFieldManager.registerTextField(this.disp.txt_title, new s.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId(this.areaVE.vo.contractType == p.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE ? "DaimyoCastle" : "township"))).autoFitToBounds = true;
    m.CastleComponent.textFieldManager.registerTextField(this.disp.txt_rank, new s.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("rank_value", [this.areaVE.vo.rank]))).autoFitToBounds = true;
    m.CastleComponent.textFieldManager.registerTextField(this.disp.txt_level, new r.LocalizedTextVO("levelX_colon", [this.areaVE.vo.level])).autoFitToBounds = true;
    var t = this.areaVE.vo.contractType == p.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE ? d.CastleModel.daimyoCastleXmlData.getDaimyoCastle(this.areaVE.vo.rank, this.areaVE.vo.level, this.areaVE.vo.eventAutoScalingCampID) : d.CastleModel.daimyoTownshipXmlData.getDaimyoTownship(this.areaVE.vo.rank, this.areaVE.vo.level, this.areaVE.vo.eventAutoScalingCampID);
    m.CastleComponent.textFieldManager.registerTextField(this.disp.txt_levelProgress, t.shogunPointsNeededForLevelUp > 0 ? new r.LocalizedTextVO("value_proportional_value", [this.areaVE.vo.shogunPoints, t.shogunPointsNeededForLevelUp]) : new s.TextVO("")).autoFitToBounds = true;
    var i = new g.SimpleProgressBarComponent(this.disp.mc_levelProgress, 238);
    if (t.shogunPointsNeededForLevelUp > 0) {
      i.setProgressByPercent(this.areaVE.vo.shogunPoints / t.shogunPointsNeededForLevelUp);
    } else {
      i.setProgressByPercent(1);
    }
    var n = d.CastleModel.samuraiDaimyoData.server.getXmlContract(this.areaVE.vo.contractType, this.areaVE.vo.rank);
    var o = d.CastleModel.samuraiDaimyoData.server.getContractProgress(this.areaVE.vo.contractType, this.areaVE.vo.rank);
    var a = new g.SimpleProgressBarComponent(this.disp.mc_pointProgress, 238);
    if (o) {
      var c = o.points;
      var h = n.shogunPoints;
      var C = l.int(this.areaVE.vo.contractType == p.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE ? d.CastleModel.samuraiDaimyoData.server.getCastleWarEffort(this.areaVE.vo.rank) : d.CastleModel.samuraiDaimyoData.server.getTownshipWarEffort(this.areaVE.vo.rank));
      m.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, new r.LocalizedTextVO("warEffortPointsX_colon", [C])).autoFitToBounds = true;
      m.CastleComponent.textFieldManager.registerTextField(this.disp.txt_pointProgress, new r.LocalizedTextVO("value_proportional_value", [c, h])).autoFitToBounds = true;
      a.setProgressByPercent(c / h);
    } else {
      m.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, new s.TextVO("")).autoFitToBounds = true;
      m.CastleComponent.textFieldManager.registerTextField(this.disp.txt_pointProgress, new s.TextVO("")).autoFitToBounds = true;
      a.setProgressByPercent(0);
    }
    this.updateCooldownTimer();
  };
  CastleAllianceSamuraiInvasionDaimyoTooltip.prototype.updateCooldownTimer = function () {
    if (this.areaVE && this.areaVE.vo) {
      var e = l.int(this.areaVE.vo.getRemainingCooldown());
      m.CastleComponent.textFieldManager.registerTextField(this.disp.txt_cooldown, e > 0 ? new r.LocalizedTextVO("cooldownX_colon", [o.TimeStringHelper.getShortTimeStringBySeconds(e)]) : new s.TextVO("")).autoFitToBounds = true;
    } else {
      m.CastleComponent.textFieldManager.registerTextField(this.disp.txt_cooldown, new s.TextVO("")).autoFitToBounds = true;
    }
  };
  CastleAllianceSamuraiInvasionDaimyoTooltip.prototype.onTimer = function (e) {
    if (this.isVisible) {
      this.updateCooldownTimer();
    }
  };
  Object.defineProperty(CastleAllianceSamuraiInvasionDaimyoTooltip.prototype, "areaVE", {
    get: function () {
      return this._areaVE;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceSamuraiInvasionDaimyoTooltip.__initialize_static_members = function () {
    CastleAllianceSamuraiInvasionDaimyoTooltip.POS_OFFSET = new C(0, -5);
  };
  return CastleAllianceSamuraiInvasionDaimyoTooltip;
}(h.CastleItemRenderer);
exports.CastleAllianceSamuraiInvasionDaimyoTooltip = _;
var m = require("./14.js");
a.classImplementsInterfaces(_, "ICollectableRendererList");
_.__initialize_static_members();