Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = function () {
  function GeneralCinematicVO(e) {
    this._id = e;
  }
  Object.defineProperty(GeneralCinematicVO.prototype, "title", {
    get: function () {
      return s.Localize.text("generals_introduction_cinematic" + this.cinematicID + "_name");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralCinematicVO.prototype, "description", {
    get: function () {
      return s.Localize.text("generals_introduction_cinematic" + this.cinematicID + "_desc");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralCinematicVO.prototype, "fileName", {
    get: function () {
      var e = this.getLocaSuffix();
      return "GeneralsIntroductionCinematic_" + this._id + "_" + e + ".mp4";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralCinematicVO.prototype, "length", {
    get: function () {
      return GeneralCinematicVO.CINEMATICS_LENGTH[this._id];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralCinematicVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralCinematicVO.prototype, "cinematicID", {
    get: function () {
      if (this._id < 10) {
        return "0" + this._id;
      } else {
        return "" + this._id;
      }
    },
    enumerable: true,
    configurable: true
  });
  GeneralCinematicVO.prototype.getLocaSuffix = function () {
    var e = o.EnvGlobalsHandler.globals.currentCountryLanguageCode;
    if (GeneralCinematicVO.AVAILABLE_LANGUAGES.indexOf(e) > -1) {
      return e;
    } else {
      return "en";
    }
  };
  GeneralCinematicVO.prototype.onPlayCinematic = function () {
    n.ClientFunnelTrackingController.getInstance().trackState("start_cinematic_" + this.cinematicID);
  };
  GeneralCinematicVO.AVAILABLE_LANGUAGES = ["br", "cs", "de", "en", "es", "fr", "hu", "it", "ja", "nl", "pl", "ro", "ru", "tr"];
  GeneralCinematicVO.CINEMATICS_LENGTH = ["0:00", "1:11", "0:57"];
  return GeneralCinematicVO;
}();
exports.GeneralCinematicVO = r;
a.classImplementsInterfaces(r, "ICinematicVO");