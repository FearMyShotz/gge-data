Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AllianceMemberScrollItemComparer() {}
  AllianceMemberScrollItemComparer.comparePrimaryRank = function (e, t) {
    var i = e.ownerInfoVO;
    var n = t.ownerInfoVO;
    var a = o.int(AllianceMemberScrollItemComparer.compareRank(i, n));
    if (a == 0) {
      a = o.int(AllianceMemberScrollItemComparer.compareName(i, n));
    }
    if (a == 0) {
      a = o.int(AllianceMemberScrollItemComparer.compareLevel(i, n));
    }
    if (a == 0) {
      a = o.int(AllianceMemberScrollItemComparer.compareDistance(e, t));
    }
    if (a == 0) {
      a = o.int(AllianceMemberScrollItemComparer.compareSelected(e, t));
    }
    return a;
  };
  AllianceMemberScrollItemComparer.comparePrimaryName = function (e, t) {
    var i = e.ownerInfoVO;
    var n = t.ownerInfoVO;
    var a = o.int(AllianceMemberScrollItemComparer.compareName(i, n));
    if (a == 0) {
      a = o.int(AllianceMemberScrollItemComparer.compareRank(i, n));
    }
    if (a == 0) {
      a = o.int(AllianceMemberScrollItemComparer.compareLevel(i, n));
    }
    if (a == 0) {
      a = o.int(AllianceMemberScrollItemComparer.compareDistance(e, t));
    }
    if (a == 0) {
      a = o.int(AllianceMemberScrollItemComparer.compareSelected(e, t));
    }
    return a;
  };
  AllianceMemberScrollItemComparer.comparePrimaryLevel = function (e, t) {
    var i = e.ownerInfoVO;
    var n = t.ownerInfoVO;
    var a = o.int(AllianceMemberScrollItemComparer.compareLevel(i, n));
    if (a == 0) {
      a = o.int(AllianceMemberScrollItemComparer.compareRank(i, n));
    }
    if (a == 0) {
      a = o.int(AllianceMemberScrollItemComparer.compareName(i, n));
    }
    if (a == 0) {
      a = o.int(AllianceMemberScrollItemComparer.compareDistance(e, t));
    }
    if (a == 0) {
      a = o.int(AllianceMemberScrollItemComparer.compareSelected(e, t));
    }
    return a;
  };
  AllianceMemberScrollItemComparer.compareLegendLevelValue = function (e, t) {
    var i = e.ownerInfoVO;
    var n = t.ownerInfoVO;
    var a = o.int(AllianceMemberScrollItemComparer.compareLegendLevel(e, t));
    if (a == 0) {
      a = o.int(AllianceMemberScrollItemComparer.compareRank(i, n));
    }
    if (a == 0) {
      a = o.int(AllianceMemberScrollItemComparer.compareName(i, n));
    }
    if (a == 0) {
      a = o.int(AllianceMemberScrollItemComparer.compareDistance(e, t));
    }
    if (a == 0) {
      a = o.int(AllianceMemberScrollItemComparer.compareSelected(e, t));
    }
    return a;
  };
  AllianceMemberScrollItemComparer.comparePrimaryDistance = function (e, t) {
    var i = o.int(AllianceMemberScrollItemComparer.compareDistance(e, t));
    var n = e.ownerInfoVO;
    var a = t.ownerInfoVO;
    if (i == 0) {
      i = o.int(AllianceMemberScrollItemComparer.compareRank(n, a));
    }
    if (i == 0) {
      i = o.int(AllianceMemberScrollItemComparer.compareName(n, a));
    }
    if (i == 0) {
      i = o.int(AllianceMemberScrollItemComparer.compareLevel(n, a));
    }
    if (i == 0) {
      i = o.int(AllianceMemberScrollItemComparer.compareSelected(e, t));
    }
    return i;
  };
  AllianceMemberScrollItemComparer.comparePrimarySelected = function (e, t) {
    var i = o.int(AllianceMemberScrollItemComparer.compareSelected(e, t));
    var n = e.ownerInfoVO;
    var a = t.ownerInfoVO;
    if (i == 0) {
      i = o.int(AllianceMemberScrollItemComparer.compareRank(n, a));
    }
    if (i == 0) {
      i = o.int(AllianceMemberScrollItemComparer.compareName(n, a));
    }
    if (i == 0) {
      i = o.int(AllianceMemberScrollItemComparer.compareLevel(n, a));
    }
    if (i == 0) {
      i = o.int(AllianceMemberScrollItemComparer.compareDistance(e, t));
    }
    return i;
  };
  AllianceMemberScrollItemComparer.compareHonorValue = function (e, t) {
    var i = e.ownerInfoVO;
    var n = t.ownerInfoVO;
    var a = o.int(AllianceMemberScrollItemComparer.compareHonor(e, t));
    if (a == 0) {
      a = o.int(AllianceMemberScrollItemComparer.compareRank(i, n));
    }
    if (a == 0) {
      a = o.int(AllianceMemberScrollItemComparer.compareName(i, n));
    }
    if (a == 0) {
      a = o.int(AllianceMemberScrollItemComparer.compareLevel(i, n));
    }
    if (a == 0) {
      a = o.int(AllianceMemberScrollItemComparer.compareDistance(e, t));
    }
    if (a == 0) {
      a = o.int(AllianceMemberScrollItemComparer.compareSelected(e, t));
    }
    return a;
  };
  AllianceMemberScrollItemComparer.compareMightValue = function (e, t) {
    var i = e.ownerInfoVO;
    var n = t.ownerInfoVO;
    var a = o.int(AllianceMemberScrollItemComparer.compareMight(e, t));
    if (a == 0) {
      a = o.int(AllianceMemberScrollItemComparer.compareRank(i, n));
    }
    if (a == 0) {
      a = o.int(AllianceMemberScrollItemComparer.compareName(i, n));
    }
    if (a == 0) {
      a = o.int(AllianceMemberScrollItemComparer.compareLevel(i, n));
    }
    if (a == 0) {
      a = o.int(AllianceMemberScrollItemComparer.compareDistance(e, t));
    }
    if (a == 0) {
      a = o.int(AllianceMemberScrollItemComparer.compareSelected(e, t));
    }
    return a;
  };
  AllianceMemberScrollItemComparer.compareRank = function (e, t) {
    if (e.allianceRank < t.allianceRank) {
      return -1;
    } else if (e.allianceRank > t.allianceRank) {
      return 1;
    } else {
      return 0;
    }
  };
  AllianceMemberScrollItemComparer.compareName = function (e, t) {
    if (e.playerName.toLowerCase() < t.playerName.toLowerCase()) {
      return -1;
    } else if (e.playerName.toLowerCase() > t.playerName.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  };
  AllianceMemberScrollItemComparer.compareLevel = function (e, t) {
    if (e.playerLevel < t.playerLevel) {
      return -1;
    } else if (e.playerLevel > t.playerLevel) {
      return 1;
    } else {
      return 0;
    }
  };
  AllianceMemberScrollItemComparer.compareDistance = function (e, t) {
    if (e.distanceToTarget < t.distanceToTarget) {
      return -1;
    } else if (e.distanceToTarget > t.distanceToTarget) {
      return 1;
    } else {
      return 0;
    }
  };
  AllianceMemberScrollItemComparer.compareSelected = function (e, t) {
    if (e.selected == 1 && t.selected == 0) {
      return -1;
    } else if (e.selected == 0 && t.selected == 1) {
      return 1;
    } else {
      return 0;
    }
  };
  AllianceMemberScrollItemComparer.compareHonor = function (e, t) {
    if (e.ownerInfoVO.honor < t.ownerInfoVO.honor) {
      return -1;
    } else if (e.ownerInfoVO.honor > t.ownerInfoVO.honor) {
      return 1;
    } else {
      return 0;
    }
  };
  AllianceMemberScrollItemComparer.compareMight = function (e, t) {
    if (e.ownerInfoVO.might < t.ownerInfoVO.might) {
      return -1;
    } else if (e.ownerInfoVO.might > t.ownerInfoVO.might) {
      return 1;
    } else {
      return 0;
    }
  };
  AllianceMemberScrollItemComparer.compareLegendLevel = function (e, t) {
    if (e.ownerInfoVO.playerLegendLevel < t.ownerInfoVO.playerLegendLevel) {
      return -1;
    } else if (e.ownerInfoVO.playerLegendLevel > t.ownerInfoVO.playerLegendLevel) {
      return 1;
    } else {
      return 0;
    }
  };
  AllianceMemberScrollItemComparer.compareInt = function (e, t) {
    if (e < t) {
      return -1;
    } else if (e > t) {
      return 1;
    } else {
      return 0;
    }
  };
  return AllianceMemberScrollItemComparer;
}();
exports.AllianceMemberScrollItemComparer = n;
var o = require("./6.js");