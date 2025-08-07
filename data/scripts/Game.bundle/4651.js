Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./27.js");
var u = require("./229.js");
var d = createjs.TimerEvent;
var p = function (e) {
  function CastleTimerOkDialog(t = null) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t ?? new (a.getDefinitionByName("CastleStandardOk"))()) || this).itxt_title = i.textFieldManager.registerTextField(i.standardDialog.txt_title, new l.TextVO(""));
    i.itxt_copy = i.textFieldManager.registerTextField(i.standardDialog.txt_copy, new l.TextVO(""));
    i.itxt_copy.autoFitToBounds = true;
    i.standardDialog.btn_label.visible = false;
    return i;
  }
  n.__extends(CastleTimerOkDialog, e);
  CastleTimerOkDialog.prototype.show = function () {
    e.prototype.show.call(this);
    this.itxt_title.textContentVO.stringValue = r.Localize.text(this.standardDialogProperties.titleTextID);
    this.itxt_copy.textContentVO.stringValue = r.Localize.text(this.getDialogMessage());
    this.timer = new a.Timer(1000, 0);
    this.timer.start();
    this.timer.addEventListener(d.TIMER, this.bindFunction(this.onTimer));
  };
  CastleTimerOkDialog.prototype.onTimer = function (e) {
    this.itxt_copy.textContentVO.stringValue = r.Localize.text(this.getDialogMessage());
    if (this.standardDialogProperties.remainingSeconds <= 0) {
      this.hide();
    }
  };
  CastleTimerOkDialog.prototype.getDialogMessage = function () {
    var e = r.Localize.text(this.standardDialogProperties.descTextID);
    e += "\n\n";
    return e += c.CastleTimeStringHelper.getFullTimeString(this.standardDialogProperties.remainingSeconds);
  };
  CastleTimerOkDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.standardDialog.btn_close:
      case this.standardDialog.btn_ok:
        this.hide();
    }
  };
  CastleTimerOkDialog.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.timer.stop();
    this.timer.removeEventListener(d.TIMER, this.bindFunction(this.onTimer));
  };
  Object.defineProperty(CastleTimerOkDialog.prototype, "standardDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTimerOkDialog.prototype, "standardDialog", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleTimerOkDialog.__initialize_static_members = function () {
    CastleTimerOkDialog.NAME = o.CommonDialogNames.StandardOkDialog_NAME;
  };
  return CastleTimerOkDialog;
}(u.CastleDialog);
exports.CastleTimerOkDialog = p;
s.classImplementsInterfaces(p, "ICollectableRendererList");
p.__initialize_static_members();