Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1982.js");
var s = require("./1983.js");
var r = require("./1984.js");
var l = function (e) {
  function CastleModel() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleModel, e);
  CastleModel.addModel = function (e) {
    CastleModel.models.push(e);
    return e;
  };
  CastleModel.resetModels = function () {
    if (CastleModel.models != null) {
      for (var e = 0; e < CastleModel.models.length; e++) {
        var t = CastleModel.models[e];
        if (t) {
          t.reset();
        }
      }
    }
  };
  Object.defineProperty(CastleModel, "profiler", {
    get: function () {
      CastleModel._profiler ||= new a.CastleProfiler();
      return CastleModel._profiler;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleModel, "smartfoxClient", {
    get: function () {
      return o.BasicModel._smartfoxClient;
    },
    set: function (e) {
      o.BasicModel._smartfoxClient = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleModel, "userData", {
    get: function () {
      return o.BasicModel._userData;
    },
    set: function (e) {
      o.BasicModel._userData = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleModel, "socialData", {
    get: function () {
      return o.BasicModel._socialData;
    },
    set: function (e) {
      o.BasicModel._socialData = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleModel, "languageData", {
    get: function () {
      return o.BasicModel._languageData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleModel, "localData", {
    get: function () {
      return o.BasicModel._localData;
    },
    set: function (e) {
      o.BasicModel._localData = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleModel, "eventPackageData", {
    get: function () {
      return CastleModel._eventPackageData;
    },
    set: function (e) {
      CastleModel._eventPackageData = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleModel, "worldAssignment", {
    get: function () {
      return window.ggs.worldAssignment;
    },
    enumerable: true,
    configurable: true
  });
  CastleModel.__initialize_static_members = function () {
    CastleModel.koreanData = new r.CastleKoreanData();
  };
  CastleModel.models = [];
  return CastleModel;
}(s.CastleSlimModel);
exports.CastleModel = l;
l.__initialize_static_members();