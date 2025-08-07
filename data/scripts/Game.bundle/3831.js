Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1788.js");
var s = require("./4.js");
var r = require("./5.js");
var l = require("./15.js");
var c = require("./1787.js");
var u = function (e) {
  function UpdateDynamicTopXDataCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(UpdateDynamicTopXDataCommand, e);
  UpdateDynamicTopXDataCommand.prototype.execute = function (e = null) {
    var t = e;
    var i = s.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT);
    if (i) {
      new a.UpdateDynamicTopXDataService().updateDynamicTopXForVO(i, t);
      l.CastleBasicController.getInstance().dispatchEvent(new c.DynamicTopXEvent(c.DynamicTopXEvent.UPDATE_DYNAMIC_TOP_X));
    }
  };
  return UpdateDynamicTopXDataCommand;
}(o.BasicCommand);
exports.UpdateDynamicTopXDataCommand = u;