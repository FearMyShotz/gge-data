Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./258.js");
var h = require("./23.js");
var g = require("./23.js");
var C = require("./919.js");
var _ = require("./37.js");
var m = require("./32.js");
var f = require("./4.js");
var O = require("./42.js");
var E = require("./8.js");
var y = require("./11.js");
var b = createjs.Point;
var D = function (e) {
  function CastleSelectUserName() {
    var t = this;
    t.errorMessagePosition = new b(219.55, -23.8);
    t.nameSelectionPosition = new b(367.5, 49.5);
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleSelectUserName.NAME) || this;
  }
  n.__extends(CastleSelectUserName, e);
  CastleSelectUserName.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_header, new c.LocalizedTextVO("facebook_playerName_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new c.LocalizedTextVO("facebook_playerName_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_playername, new c.LocalizedTextVO("player"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_nameSelection.txt_title, new c.LocalizedTextVO("error_name_propositions"));
    this._txtInput_username = this.textFieldManager.registerTextField(this.dialogDisp.input_playername, new u.TextVO(""));
    this._txtInput_username.type = s.TextFieldType.INPUT;
    this._txtInput_username.multiline = false;
    this._txtInput_username.maxChars = p.CredentialsValidationConstants.USERNAME_MAX_LENGTH;
  };
  CastleSelectUserName.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.hideAllErrorMessages();
    this._txtInput_username.textContentVO.stringValue = f.CastleModel.userData.userName;
    if (f.CastleModel.tutorialData.isTutorialActive) {
      E.ButtonHelper.enableButton(this.dialogDisp.btn_close, false);
      E.ButtonHelper.enableButton(this.dialogDisp.btn_cancel, false);
    }
  };
  CastleSelectUserName.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (E.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_cancel:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          if (this.usernameIsValid()) {
            this.sendUsernameToServer();
          }
          break;
        case this.dialogDisp.mc_nameSelection.i0:
        case this.dialogDisp.mc_nameSelection.i1:
        case this.dialogDisp.mc_nameSelection.i2:
        case this.dialogDisp.mc_nameSelection.i3:
          var i = t.target;
          this._txtInput_username.clearText();
          this._txtInput_username.textContentVO = new u.TextVO(this.textFieldManager.getTextField(i.txt_Name).text);
          this.hideAllErrorMessages();
      }
    }
  };
  CastleSelectUserName.prototype.sendUsernameToServer = function () {
    this.controller.addEventListener(_.CastleServerMessageArrivedEvent.SDC_ARRIVED, this.bindFunction(this.onSDCArrived));
    f.CastleModel.smartfoxClient.sendCommandVO(new C.C2SSetCredentials(a.TextValide.getValideSmartFoxText(this._txtInput_username.text), "", ""));
  };
  CastleSelectUserName.prototype.onSDCArrived = function (e) {
    this.controller.removeEventListener(_.CastleServerMessageArrivedEvent.SDC_ARRIVED, this.bindFunction(this.onSDCArrived));
    var t = d.int(e.params[0]);
    var i = e.params[1];
    switch (t) {
      case l.ERROR.ALL_OK:
        f.CastleModel.userData.userName = this._txtInput_username.text;
        this.hide();
        this.controller.dispatchEvent(new m.CastleUserDataEvent(m.CastleUserDataEvent.CHANGE_USER_NAME));
        break;
      case l.ERROR.INVALID_NAME:
        this.showNameError("error_name_invalid");
        break;
      case l.ERROR.NAME_ALREADY_IN_USE:
        this.showNameError("error_name_exists");
        break;
      case l.ERROR.NAME_HAS_ONLY_NUMBERS:
        this.showNameError("error_name_is_number");
        this.initNameSelection(i.NS);
        break;
      case l.ERROR.USAGE_OF_BADWORDS:
        this.showNameError("error_badword");
        this.initNameSelection(i.NS);
        break;
      default:
        this.showNameError("error_name_invalid");
    }
  };
  CastleSelectUserName.prototype.hideAllErrorMessages = function () {
    this.dialogDisp.mc_nameSelection.visible = false;
    this.dialogDisp.mc_errorName.visible = false;
  };
  CastleSelectUserName.prototype.usernameIsValid = function () {
    if (this._txtInput_username.text.length == 0) {
      this.showNameError("error_name_empty");
      return false;
    }
    if (this._txtInput_username.text.length < o.BasicModel.basicLocalization.getUsernameMinLength) {
      this.showNameError("error_name_too_short");
      return false;
    }
    if (!a.TextValide.isUsernameValide(this._txtInput_username.text)) {
      this.showNameError("error_name_invalid");
      var e = a.TextValide.getValidUsername(this._txtInput_username.text);
      if (e != "" && a.TextValide.isUsernameValide(e)) {
        this.initNameSelection([e]);
      }
      return false;
    }
    return true;
  };
  CastleSelectUserName.prototype.showNameError = function (e) {
    this.textFieldManager.registerTextField(this.dialogDisp.mc_errorName.txt_errorText, new c.LocalizedTextVO(e)).verticalAlign = O.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.dialogDisp.mc_errorName.x = this.errorMessagePosition.x;
    this.dialogDisp.mc_errorName.y = this.errorMessagePosition.y;
    this.dialogDisp.mc_errorName.visible = true;
    g.TweenMax.fromTo(this.dialogDisp.mc_errorName, 0.5, {
      scaleX: 0,
      scaleY: 0
    }, {
      scaleX: 1,
      scaleY: 1,
      ease: h.Bounce.easeOut
    });
  };
  CastleSelectUserName.prototype.initNameSelection = function (e) {
    var t;
    for (var i = 0; i < 4; i++) {
      var n = this.dialogDisp.mc_nameSelection["i" + i];
      n.actLikeButton = true;
      n.mouseChildren = false;
      n.visible = true;
      t = "";
      if (e && i < e.length) {
        t = e[i];
      }
      if (t != "") {
        this.textFieldManager.registerTextField(n.txt_Name, new u.TextVO(t));
        n.suggestedName = t;
      } else {
        n.visible = false;
      }
    }
    this.dialogDisp.mc_nameSelection.x = this.nameSelectionPosition.x;
    this.dialogDisp.mc_nameSelection.y = this.nameSelectionPosition.y;
    this.dialogDisp.mc_nameSelection.visible = e != null;
    g.TweenMax.fromTo(this.dialogDisp.mc_nameSelection, 0.5, {
      scaleX: 0,
      scaleY: 0
    }, {
      scaleX: 1,
      scaleY: 1,
      ease: h.Bounce.easeOut
    });
  };
  CastleSelectUserName.__initialize_static_members = function () {
    CastleSelectUserName.NAME = "CastleSelectUserNameExternal";
  };
  return CastleSelectUserName;
}(y.CastleExternalDialog);
exports.CastleSelectUserName = D;
r.classImplementsInterfaces(D, "ICollectableRendererList");
D.__initialize_static_members();