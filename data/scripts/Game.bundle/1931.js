Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./5.js");
var o = require("./50.js");
var a = require("./234.js");
var s = require("./155.js");
var r = require("./52.js");
var l = function () {
  function AdvisorAttackOverviewVO() {}
  AdvisorAttackOverviewVO.prototype.parseServerData = function (e) {
    this._gained = o.CollectableManager.parser.s2cParamList.createList(e.G);
    this._lost = o.CollectableManager.parser.s2cParamList.createList(e.L);
    this._lostUnits = e.LU;
    this._lostTools = e.LT;
    this._wins = e.W;
    this._defeats = e.D;
    this._stopped = e.P;
    this._advisorType = n.AttackAdvisorConst.ADVISOR_TYPE_NOMAD;
    this._commanders = e[n.CommKeys.ADVISOR_ATTACK_OVERVIEW_COMMANDERS];
    this.restoreLootDefaults();
  };
  Object.defineProperty(AdvisorAttackOverviewVO.prototype, "gained", {
    get: function () {
      return this._gained;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorAttackOverviewVO.prototype, "lost", {
    get: function () {
      return this._lost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorAttackOverviewVO.prototype, "lostUnits", {
    get: function () {
      return this._lostUnits;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorAttackOverviewVO.prototype, "lostTools", {
    get: function () {
      return this._lostTools;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorAttackOverviewVO.prototype, "wins", {
    get: function () {
      return this._wins;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorAttackOverviewVO.prototype, "defeats", {
    get: function () {
      return this._defeats;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorAttackOverviewVO.prototype, "stopped", {
    get: function () {
      return this._stopped;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorAttackOverviewVO.prototype, "advisorType", {
    get: function () {
      return this._advisorType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorAttackOverviewVO.prototype, "commanders", {
    get: function () {
      return this._commanders;
    },
    enumerable: true,
    configurable: true
  });
  AdvisorAttackOverviewVO.prototype.restoreLootDefaults = function () {
    switch (this.advisorType) {
      case n.AttackAdvisorConst.ADVISOR_TYPE_NOMAD:
        this._gained.addItem(new s.CollectableItemGenericCurrencyVO(r.ClientConstCurrency.ID_KHAN_TABLET, 0), true);
        this._gained.addItem(new a.CollectableItemC1VO(0), true);
    }
  };
  return AdvisorAttackOverviewVO;
}();
exports.AdvisorAttackOverviewVO = l;