Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = createjs.BitmapData;
var a = require("./894.js").create();
var s = function () {
  function SeededRandom(e = 0) {
    this._seed = 0;
    this._pointer = 0;
    this.seedInvalid = true;
    this._seed = e;
    this.bmpd = new i(1000, 200);
  }
  Object.defineProperty(SeededRandom, "instance", {
    get: function () {
      if (SeededRandom._instance == null) {
        SeededRandom._instance = new SeededRandom();
      }
      return SeededRandom._instance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeededRandom, "seed", {
    get: function () {
      return a.seed;
    },
    set: function (e) {
      a.seed(e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeededRandom, "pointer", {
    get: function () {
      return SeededRandom.instance.pointer;
    },
    set: function (e) {
      SeededRandom.instance.pointer = e;
    },
    enumerable: true,
    configurable: true
  });
  SeededRandom.random = function () {
    return SeededRandom.instance.random();
  };
  SeededRandom.float = function (e, t = NaN) {
    return SeededRandom.instance.float(e, t);
  };
  SeededRandom.boolean = function (e = 0.5) {
    return SeededRandom.instance.boolean(e);
  };
  SeededRandom.sign = function (e = 0.5) {
    return SeededRandom.instance.sign(e);
  };
  SeededRandom.bit = function (e = 0.5) {
    return SeededRandom.instance.bit(e);
  };
  SeededRandom.integer = function (e, t = NaN) {
    return SeededRandom.instance.integer(e, t);
  };
  SeededRandom.reset = function () {};
  Object.defineProperty(SeededRandom.prototype, "seed", {
    get: function () {
      return this._seed;
    },
    set: function (e) {
      if (e != this._seed) {
        this.seedInvalid = true;
        this._pointer = 0;
      }
      this._seed = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeededRandom.prototype, "pointer", {
    get: function () {
      return this._pointer;
    },
    set: function (e) {
      this._pointer = e;
    },
    enumerable: true,
    configurable: true
  });
  SeededRandom.prototype.random = function () {
    return a.random();
  };
  SeededRandom.prototype.float = function (e, t = NaN) {
    if (isNaN(t)) {
      t = e;
      e = 0;
    }
    return a.floatBetween(e, t);
  };
  SeededRandom.prototype.boolean = function (e = 0.5) {
    return SeededRandom.random() < e;
  };
  SeededRandom.prototype.sign = function (e = 0.5) {
    if (SeededRandom.random() < e) {
      return 1;
    } else {
      return -1;
    }
  };
  SeededRandom.prototype.bit = function (e = 0.5) {
    if (SeededRandom.random() < e) {
      return 1;
    } else {
      return 0;
    }
  };
  SeededRandom.prototype.integer = function (e, t = NaN) {
    if (isNaN(t)) {
      t = e;
      e = 0;
    }
    return a.intBetween(e, t);
  };
  SeededRandom.prototype.reset = function () {
    this._pointer = 0;
  };
  return SeededRandom;
}();
exports.SeededRandom = s;