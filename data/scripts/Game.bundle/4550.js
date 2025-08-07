Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function TimeLimitedCampaignQuestEventEventVO() {
    return e.call(this) || this;
  }
  n.__extends(TimeLimitedCampaignQuestEventEventVO, e);
  TimeLimitedCampaignQuestEventEventVO.prototype.parseParamObject = function (e) {
    this._questIDs = [];
    for (var t = 0, i = e.CQS; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        this._questIDs.push(n.QID);
      }
    }
  };
  Object.defineProperty(TimeLimitedCampaignQuestEventEventVO.prototype, "questIDs", {
    get: function () {
      return this._questIDs;
    },
    enumerable: true,
    configurable: true
  });
  return TimeLimitedCampaignQuestEventEventVO;
}(require("./79.js").ASpecialEventVO);
exports.TimeLimitedCampaignQuestEventEventVO = a;
o.classImplementsInterfaces(a, "IEventOverviewable");