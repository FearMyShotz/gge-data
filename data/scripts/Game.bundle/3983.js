Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./837.js");
var s = require("./9.js");
var r = require("./20.js");
var l = require("./8.js");
var c = require("./11.js");
var u = require("./1795.js");
var d = require("./1837.js");
var p = require("./1840.js");
var h = function (e) {
  function AdvisorAttackActivationDialog() {
    return e.call(this, AdvisorAttackActivationDialog.NAME) || this;
  }
  n.__extends(AdvisorAttackActivationDialog, e);
  AdvisorAttackActivationDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    l.ButtonHelper.initButtons([this.dialogDisp.btn_close], r.ClickFeedbackButtonHover);
    this._advisorActivationComponent = new u.AdvisorAttackActivationComponent(this.dialogDisp, u.AdvisorAttackActivationComponent.TEASERSUFFIX_ACTIVATE);
  };
  AdvisorAttackActivationDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._advisorActivationComponent.show(this.dialogProperties.advisorType);
    this.controller.addEventListener(a.AdvisorActivationEvent.ADVISOR_ACTIVATION_CHANGED, this.bindFunction(this.onActivationChanged));
  };
  AdvisorAttackActivationDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    if (this._advisorActivationComponent) {
      this._advisorActivationComponent.onHide();
    }
    this.controller.removeEventListener(a.AdvisorActivationEvent.ADVISOR_ACTIVATION_CHANGED, this.bindFunction(this.onActivationChanged));
  };
  AdvisorAttackActivationDialog.prototype.onActivationChanged = function (e) {
    var t = this.dialogProperties.advisorType;
    if (e.advisorType == t) {
      this.hide();
      s.CastleDialogHandler.getInstance().registerDefaultDialogs(d.AdvisorAttackOverviewDialog, new p.AdvisorAttackOverviewDialogProperties(t));
    }
  };
  AdvisorAttackActivationDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(AdvisorAttackActivationDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AdvisorAttackActivationDialog.NAME = "NomadAdvisorActivationExt";
  return AdvisorAttackActivationDialog;
}(c.CastleExternalDialog);
exports.AdvisorAttackActivationDialog = h;
o.classImplementsInterfaces(h, "ICollectableRendererList");