Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AutoRecruitmentCopyListItemVO(e) {
    this._areaId = 0;
    this._kingdomId = 0;
    this._errorId = 0;
    this._costs = new o.AutoRecruitmentCosts();
    this._recruitmentTime = 0;
    this._isSelected = false;
    this._data = e;
    this._areaId = s.int(e.AID);
    this._kingdomId = s.int(e.SID);
    this._errorId = s.int(e.EID);
    this.costs.fillByServerData(e);
    this._recruitmentTime = s.int(e.ART);
  }
  Object.defineProperty(AutoRecruitmentCopyListItemVO.prototype, "hasError", {
    get: function () {
      return this.errorId != a.ERROR.ALL_OK;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyListItemVO.prototype, "isSelected", {
    get: function () {
      return this._isSelected;
    },
    set: function (e) {
      this._isSelected = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyListItemVO.prototype, "data", {
    get: function () {
      return this._data;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyListItemVO.prototype, "areaId", {
    get: function () {
      return this._areaId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyListItemVO.prototype, "kingdomId", {
    get: function () {
      return this._kingdomId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyListItemVO.prototype, "errorId", {
    get: function () {
      return this._errorId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyListItemVO.prototype, "costs", {
    get: function () {
      return this._costs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyListItemVO.prototype, "recruitmentTime", {
    get: function () {
      return this._recruitmentTime;
    },
    enumerable: true,
    configurable: true
  });
  return AutoRecruitmentCopyListItemVO;
}();
exports.AutoRecruitmentCopyListItemVO = n;
var o = require("./646.js");
var a = require("./5.js");
var s = require("./6.js");