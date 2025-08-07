Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleSurveyMessageDialogProperties(t, i) {
    var n = this;
    n.surveyId = 0;
    n.surveyType = -1;
    n.isOldSurvey = false;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).surveyId = t;
    n.questions = i;
    return n;
  }
  n.__extends(CastleSurveyMessageDialogProperties, e);
  return CastleSurveyMessageDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleSurveyMessageDialogProperties = o;