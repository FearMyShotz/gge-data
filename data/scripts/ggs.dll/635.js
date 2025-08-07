Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js").getLogger("Hacks.WorldAssignment.LanguageOverride");
exports.forceEnglishForSupportAgents = function (e, t) {
  if (t) {
    i.warn("SUK / HYDRA / COMMUNITY-SUPPORT LOGIN --> Overriding Language from " + e.ggsLanguageCode + " to ENGLISH ");
    return Object.assign({}, e, {
      ggsLanguageCode: "en"
    });
  } else {
    return e;
  }
};