Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./26.js");
var l = require("./4.js");
var c = function (e) {
  function ACastleFactionChooseFactionDialog(t) {
    return e.call(this, t) || this;
  }
  n.__extends(ACastleFactionChooseFactionDialog, e);
  ACastleFactionChooseFactionDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
  };
  ACastleFactionChooseFactionDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    l.CastleModel.specialEventData.addEventListener(r.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  ACastleFactionChooseFactionDialog.prototype.hideLoaded = function (t = null) {
    l.CastleModel.specialEventData.removeEventListener(r.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    e.prototype.hideLoaded.call(this, t);
  };
  ACastleFactionChooseFactionDialog.prototype.onRemoveEvent = function (e) {
    if (s.instanceOfClass(e.specialEventVO, "FactionEventVO")) {
      this.hide();
    }
  };
  ACastleFactionChooseFactionDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        o.CommandController.instance.executeCommand(u.IngameClientCommands.OPEN_FACTION_EVENT_MAIN_DIALOG, d.FactionEventMainDialog.SUBLAYER_INTRODUCTION);
        this.hide();
    }
  };
  return ACastleFactionChooseFactionDialog;
}(require("./11.js").CastleExternalDialog);
exports.ACastleFactionChooseFactionDialog = c;
var u = require("./29.js");
var d = require("./662.js");
a.classImplementsInterfaces(c, "ICollectableRendererList");