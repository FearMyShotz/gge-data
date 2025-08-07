Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AdditionalMemberInfoVO() {
    this._playerId = -1;
    this._givenC1 = 0;
    this._givenC2 = 0;
    this._givenResources = 0;
    this._loginActivity = 0;
    this._capitalCount = 0;
    this._metropolCount = 0;
    this._kingstowerCount = 0;
    this._monumentCount = 0;
    this._laboratoryCount = 0;
    this._dailyFame = 0;
  }
  AdditionalMemberInfoVO.prototype.parseAMI = function (e) {
    this._playerId = o.int(e.shift());
    this._givenC1 = o.int(e.shift());
    this._givenC2 = o.int(e.shift());
    this._givenResources = o.int(e.shift());
    this._loginActivity = o.int(e.shift());
    this._capitalCount = o.int(e.shift());
    this._metropolCount = o.int(e.shift());
    this._kingstowerCount = o.int(e.shift());
    this._monumentCount = o.int(e.shift());
    this._laboratoryCount = o.int(e.shift());
    this._dailyFame = o.int(e.shift());
  };
  Object.defineProperty(AdditionalMemberInfoVO.prototype, "hasLandmark", {
    get: function () {
      return this.capitalCount > 0 || this.metropolCount > 0 || this.kingstowerCount > 0 || this.monumentCount > 0 || this.laboratoryCount > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdditionalMemberInfoVO.prototype, "playerId", {
    get: function () {
      return this._playerId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdditionalMemberInfoVO.prototype, "givenC1", {
    get: function () {
      return this._givenC1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdditionalMemberInfoVO.prototype, "givenC2", {
    get: function () {
      return this._givenC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdditionalMemberInfoVO.prototype, "givenResources", {
    get: function () {
      return this._givenResources;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdditionalMemberInfoVO.prototype, "loginActivity", {
    get: function () {
      return this._loginActivity;
    },
    set: function (e) {
      this._loginActivity = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdditionalMemberInfoVO.prototype, "capitalCount", {
    get: function () {
      return this._capitalCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdditionalMemberInfoVO.prototype, "metropolCount", {
    get: function () {
      return this._metropolCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdditionalMemberInfoVO.prototype, "kingstowerCount", {
    get: function () {
      return this._kingstowerCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdditionalMemberInfoVO.prototype, "monumentCount", {
    get: function () {
      return this._monumentCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdditionalMemberInfoVO.prototype, "laboratoryCount", {
    get: function () {
      return this._laboratoryCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdditionalMemberInfoVO.prototype, "dailyFame", {
    get: function () {
      return this._dailyFame;
    },
    set: function (e) {
      this._dailyFame = e;
    },
    enumerable: true,
    configurable: true
  });
  return AdditionalMemberInfoVO;
}();
exports.AdditionalMemberInfoVO = n;
var o = require("./6.js");