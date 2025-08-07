Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./9.js");
var s = require("./4.js");
var r = function (e) {
  function BasicReportSurveyCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicReportSurveyCommand, e);
  BasicReportSurveyCommand.prototype.execute = function (e = null) {
    var t = e[0];
    var n = e[1];
    var i = e[2];
    var r = e[3];
    var o = e[4];
    var l = e[5];
    var u = e[6];
    var c = e[7];
    s.BasicModel.smartfoxClient.sendMessage(a.BasicSmartfoxConstants.C2S_REPORT_SURVEY, [t, n, i, r, o, l ? 1 : 0, u ? 1 : 0, JSON.stringify(c)]);
  };
  return BasicReportSurveyCommand;
}(require("./6.js").SimpleCommand);
exports.BasicReportSurveyCommand = r;