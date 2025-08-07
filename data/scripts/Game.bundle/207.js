Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./5.js");
var o = require("./5.js");
var a = require("./5.js");
var s = require("./51.js");
var r = require("./4.js");
var l = require("./1320.js");
var c = function () {
  function AdvisorAttackHelper() {}
  AdvisorAttackHelper.getTeaserFileName = function (e) {
    switch (e) {
      case a.AttackAdvisorConst.ADVISOR_TYPE_NOMAD:
        return "NomadAdvisorTeasers";
    }
    return "NomadAdvisorTeasers";
  };
  AdvisorAttackHelper.getTextIDSuffix = function (e) {
    switch (e) {
      case a.AttackAdvisorConst.ADVISOR_TYPE_NOMAD:
        return "nomad";
    }
    return "nomad";
  };
  AdvisorAttackHelper.getAdvisorActivationInfo = function (e) {
    switch (e) {
      case a.AttackAdvisorConst.ADVISOR_TYPE_NOMAD:
        var t = r.CastleModel.specialEventData.getActiveEventByEventId(o.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
        if (t) {
          return t.getAdvisorActivationInfo();
        }
    }
    return new l.AdvisorActivationInfoVO(false, false, 0);
  };
  AdvisorAttackHelper.getAdvisorTypeByAreaType = function (e) {
    switch (e) {
      case n.WorldConst.AREA_TYPE_NOMAD_CAMP:
        return a.AttackAdvisorConst.ADVISOR_TYPE_NOMAD;
    }
    return -1;
  };
  AdvisorAttackHelper.getAdvisorTypeByEventID = function (e) {
    var t = -1;
    switch (e) {
      case o.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE:
        t = a.AttackAdvisorConst.ADVISOR_TYPE_NOMAD;
    }
    var i = r.CastleModel.specialEventData.getActiveEventByEventId(e);
    if (i && i.isActive && i.advisorActivationCurrencyId > 0) {
      return t;
    } else {
      return -1;
    }
  };
  AdvisorAttackHelper.getEventVOByAdvisorType = function (e) {
    switch (e) {
      case a.AttackAdvisorConst.ADVISOR_TYPE_NOMAD:
        return r.CastleModel.specialEventData.getActiveEventByEventId(o.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
    }
    return null;
  };
  AdvisorAttackHelper.getCharacterByAdvisorType = function (e) {
    switch (e) {
      case a.AttackAdvisorConst.ADVISOR_TYPE_NOMAD:
        return s.ClientConstCharacter.CHAR_ID_NOMADADVISOR;
    }
    if (e > 0) {
      return s.ClientConstCharacter.CHAR_ID_NOMADADVISOR;
    } else {
      return s.ClientConstCharacter.CHAR_ID_GENERAL;
    }
  };
  return AdvisorAttackHelper;
}();
exports.AdvisorAttackHelper = c;