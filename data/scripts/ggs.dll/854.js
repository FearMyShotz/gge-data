Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js");
var a = createjs.Container;
var s = i.getLogger("BasicHandleServerErrorCommand");
var r = function () {
  function Siren24ViewUtil() {}
  Object.defineProperty(Siren24ViewUtil, "ageRatingLogo", {
    get: function () {
      s.warn("Siren24ViewUtil.ageRatingLogo is not implemented");
      return new a();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Siren24ViewUtil, "contentDescriptorLogo", {
    get: function () {
      s.warn("Siren24ViewUtil.contentDescriptorLogo is not implemented");
      return new a();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Siren24ViewUtil, "licenceTable", {
    get: function () {
      s.warn("Siren24ViewUtil.licenceTable is not implemented");
      return new a();
    },
    enumerable: true,
    configurable: true
  });
  return Siren24ViewUtil;
}();
exports.Siren24ViewUtil = r;