Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = function (e) {
  function AutoRecruitmentCopyDialogProperties() {
    var t = this;
    t._listId = 0;
    t._listData = [];
    t._loopFeeCosts = new r.CollectableItemC2VO(0);
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(AutoRecruitmentCopyDialogProperties, e);
  AutoRecruitmentCopyDialogProperties.prototype.parseServerInformation = function (e) {
    var t = e.A;
    this._listData = [];
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          this._listData.push(o);
          this._listId = a.int(o.LID);
        }
      }
    }
  };
  Object.defineProperty(AutoRecruitmentCopyDialogProperties.prototype, "listId", {
    get: function () {
      return this._listId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyDialogProperties.prototype, "listData", {
    get: function () {
      return this._listData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyDialogProperties.prototype, "loopFeeCosts", {
    get: function () {
      return this._loopFeeCosts;
    },
    enumerable: true,
    configurable: true
  });
  return AutoRecruitmentCopyDialogProperties;
}(o.BasicProperties);
exports.AutoRecruitmentCopyDialogProperties = s;
var r = require("./128.js");