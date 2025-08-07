Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./18.js");
var s = require("./71.js");
var r = require("./4.js");
var l = require("./109.js");
var c = function (e) {
  function StatusIconRepairAll() {
    var t = e.call(this, "Btn_repairAllHud", l.ACastleStatusIcon.PRIORITY_LOW) || this;
    t.setTooltip("btn_burnCastle");
    return t;
  }
  n.__extends(StatusIconRepairAll, e);
  StatusIconRepairAll.prototype.addEventListenerForVisibility = function () {
    this.controller.addEventListener(s.AreaDataEvent.ON_BURNING_CASTLE_UPDATED, this.bindFunction(this.onUpdateCastleData));
  };
  StatusIconRepairAll.prototype.removeEventListenerForVisibility = function () {
    this.controller.removeEventListener(s.AreaDataEvent.ON_BURNING_CASTLE_UPDATED, this.bindFunction(this.onUpdateCastleData));
  };
  StatusIconRepairAll.prototype.onUpdateCastleData = function (e) {
    this.setVisibility();
  };
  StatusIconRepairAll.prototype.setVisibilityLoaded = function () {
    var e = r.CastleModel.areaData.activeArea;
    if (u.IsoHelper.view.isInIsoScreen && e && e.isMyArea && !e.isUnderConquerProcess && e.commonInfo.isCastleBurning) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconRepairAll.prototype.onClick = function () {
    if (r.CastleModel.areaData.activeArea) {
      o.CommandController.instance.executeCommand(d.IngameClientCommands.OPEN_TIP_DIALOG_COMMAND, [a.ClientConstCastle.TIP_REPAIR, true]);
    } else {
      this.setVisibilityLoaded();
    }
  };
  return StatusIconRepairAll;
}(l.ACastleStatusIcon);
exports.StatusIconRepairAll = c;
var u = require("./46.js");
var d = require("./29.js");