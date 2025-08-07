Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./1.js");
var u = require("./1.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./6.js");
var g = require("./23.js");
var C = require("./23.js");
var _ = function (e) {
  function CastleAgeGateCheckDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleAgeGateCheckDialog.NAME) || this;
  }
  n.__extends(CastleAgeGateCheckDialog, e);
  CastleAgeGateCheckDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new d.LocalizedTextVO("generic_register_age"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_text, new d.LocalizedTextVO("commons_continue"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_bubble.txt_text, new d.LocalizedTextVO("error_age_invalid"));
    this.i_txt_input = this.textFieldManager.registerTextField(this.dialogDisp.txt_age, new p.TextVO(""));
    this.i_txt_input.type = c.TextFieldType.INPUT;
    this.i_txt_input.selectable = true;
    this.i_txt_input.restrict = "0-9";
    this.i_txt_input.maxChars = 2;
    this.dialogDisp.mc_bubble.visible = false;
  };
  CastleAgeGateCheckDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (t.target == this.dialogDisp.btn_ok) {
      this.checkAge();
    }
  };
  CastleAgeGateCheckDialog.prototype.checkAge = function () {
    if (this.i_txt_input.text.length == 0) {
      this.showBubble();
    } else {
      l.CommandController.instance.executeCommand(a.BasicController.COMMAND_VALIDATE_AGE, new o.AgeGateValidationVO(h.int(this.i_txt_input.text), this.bindFunction(this.onFinishValidation)));
    }
  };
  CastleAgeGateCheckDialog.prototype.showBubble = function () {
    C.TweenMax.fromTo(this.dialogDisp.mc_bubble, 0.5, {
      visible: true,
      scaleY: 0,
      scaleX: 0
    }, {
      scaleY: 1,
      scaleX: 1,
      ease: g.Bounce.easeOut
    });
  };
  CastleAgeGateCheckDialog.prototype.onFinishValidation = function (e) {
    if (e) {
      if (r.BasicModel.ageGateData.autoLoginTryFailed) {
        l.CommandController.instance.executeCommand(a.BasicController.COMMAND_LOGIN);
        l.CommandController.instance.executeCommand(O.IngameClientCommands.INIT_EQUIPMENT_FAVORITES);
      } else {
        this.layoutManager.state = s.BasicLayoutManager.STATE_STARTSCREEN;
      }
    } else {
      m.CastleDialogHandler.getInstance().registerDefaultDialogs(f.CastleAgeGateCheckFailedDialog);
    }
    this.hide();
  };
  CastleAgeGateCheckDialog.__initialize_static_members = function () {
    CastleAgeGateCheckDialog.NAME = "CastleAgeGateCheck";
  };
  return CastleAgeGateCheckDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleAgeGateCheckDialog = _;
var m = require("./9.js");
var f = require("./4169.js");
var O = require("./29.js");
u.classImplementsInterfaces(_, "ICollectableRendererList");
_.__initialize_static_members();