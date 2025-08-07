Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./4.js");
var s = function (e) {
  function CastleAlchemistRetirementDialogProperties(t, i) {
    var n = this;
    n._rewardID = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this)._ingredients = t;
    n._rewardID = i;
    return n;
  }
  n.__extends(CastleAlchemistRetirementDialogProperties, e);
  Object.defineProperty(CastleAlchemistRetirementDialogProperties.prototype, "rewardID", {
    get: function () {
      return this._rewardID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAlchemistRetirementDialogProperties.prototype, "ingredients", {
    get: function () {
      return this._ingredients;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAlchemistRetirementDialogProperties.prototype, "rewards", {
    get: function () {
      return a.CastleModel.rewardData.getListById(this.rewardID);
    },
    enumerable: true,
    configurable: true
  });
  return CastleAlchemistRetirementDialogProperties;
}(o.BasicProperties);
exports.CastleAlchemistRetirementDialogProperties = s;