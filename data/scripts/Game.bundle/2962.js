Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./27.js");
var p = require("./1027.js");
var h = function (e) {
  function AutoRecruitmentCopyListItemUnitsVE(t) {
    var i = e.call(this, t) || this;
    t.mc_skull.toolTipText = "dialog_copyQueue_starved";
    return i;
  }
  n.__extends(AutoRecruitmentCopyListItemUnitsVE, e);
  AutoRecruitmentCopyListItemUnitsVE.prototype.applyNewVO = function () {
    g.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new c.TextVO(this.vo.data.CN)).autoFitToBounds = true;
    g.CastleComponent.textFieldManager.registerTextField(this.disp.txt_food, new l.LocalizedNumberVO(u.int(this.vo.data.F))).autoFitToBounds = true;
    g.CastleComponent.textFieldManager.registerTextField(this.disp.txt_foodProduction, new l.LocalizedNumberVO(this.foodProduction)).autoFitToBounds = true;
    g.CastleComponent.textFieldManager.registerTextField(this.disp.txt_foodCycle, new l.LocalizedNumberVO(this.foodProductionAfterLoop)).autoFitToBounds = true;
    var e = this.vo.recruitmentTime > 0 ? d.CastleTimeStringHelper.getEventTimeString(this.vo.recruitmentTime) : "-";
    g.CastleComponent.textFieldManager.registerTextField(this.disp.txt_time, new c.TextVO(e)).autoFitToBounds = true;
    this.updateStarveEntry();
    g.CastleComponent.textFieldManager.registerTextField(this.disp.txt_units, new l.LocalizedNumberVO(this.vo.data.U)).autoFitToBounds = true;
    C.CostHelper.setCostColor(this.disp.txt_foodProduction, this.foodProduction < 0);
    C.CostHelper.setCostColor(this.disp.txt_foodCycle, this.foodProductionAfterLoop < 0);
  };
  AutoRecruitmentCopyListItemUnitsVE.prototype.updateStarveEntry = function () {
    var e = this.getFoodIsEmptyTimeInSeconds();
    var t = e > 0 && this.vo.recruitmentTime > 0 && e - this.vo.recruitmentTime <= 0;
    this.disp.mc_skull.visible = t;
    var i = "";
    if (this.vo.errorId == s.ERROR.MISSING_REQUIRED_BUILDING) {
      i = "-";
    } else if (!t) {
      i = o.TimeStringHelper.getTimeToString(e, o.TimeStringHelper.ONE_TIME_FORMAT, r.Localize.text);
    }
    g.CastleComponent.textFieldManager.registerTextField(this.disp.txt_timeStarve, new c.TextVO(i)).autoFitToBounds = true;
  };
  AutoRecruitmentCopyListItemUnitsVE.prototype.getErrorToolTipTextId = function (t) {
    switch (t) {
      case s.ERROR.NO_FREE_CONSTRUCTION_SLOT:
        return "dialog_copyQueue_disabled_recruiting";
      case s.ERROR.MISSING_REQUIRED_BUILDING:
        return "dialog_copyQueue_disabled_unitsUnavailable";
      default:
        return e.prototype.getErrorToolTipTextId.call(this, t);
    }
  };
  Object.defineProperty(AutoRecruitmentCopyListItemUnitsVE.prototype, "eventTimeWarningTextId", {
    get: function () {
      return "dialog_copyQueue_units_eventEnd";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.AAutoRecruitmentCopyListItemVE.prototype, "eventTimeWarningTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AutoRecruitmentCopyListItemUnitsVE.prototype.getFoodIsEmptyTimeInSeconds = function () {
    var e = this.foodProductionAfterLoop;
    var t = u.int(this.vo.data.F);
    if (e >= 0) {
      return -1;
    } else {
      return t / -e * 60 * 60;
    }
  };
  Object.defineProperty(AutoRecruitmentCopyListItemUnitsVE.prototype, "foodProductionAfterLoop", {
    get: function () {
      return this.foodProduction - this.vo.data.AFC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyListItemUnitsVE.prototype, "foodProduction", {
    get: function () {
      return this.vo.data.DF / 10;
    },
    enumerable: true,
    configurable: true
  });
  return AutoRecruitmentCopyListItemUnitsVE;
}(p.AAutoRecruitmentCopyListItemVE);
exports.AutoRecruitmentCopyListItemUnitsVE = h;
var g = require("./14.js");
var C = require("./66.js");
a.classImplementsInterfaces(h, "ICollectableRendererList");