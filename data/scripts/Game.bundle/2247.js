Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./2248.js");
var l = require("./4.js");
var c = require("./513.js");
var u = function (e) {
  function CastleRenameLordDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleRenameLordDialog.NAME) || this;
  }
  n.__extends(CastleRenameLordDialog, e);
  CastleRenameLordDialog.prototype.showLoaded = function (t = null) {
    this.initStaticText(this.dialogDisp.txt_title, "dialog_renameLord_title");
    this.initStaticText(this.dialogDisp.txt_copy, "dialog_renameLord_copy");
    this.initStaticText(this.dialogDisp.txt_insertTitle, "dialog_renameLord_insertText");
    this.dialogDisp.mc_costs.visible = false;
    e.prototype.showLoaded.call(this, t);
  };
  Object.defineProperty(CastleRenameLordDialog.prototype, "textMaxChars", {
    get: function () {
      return s.EquipmentConst.LORD_NAME_MAX_LENGTH;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.BasicRenameDialog.prototype, "textMaxChars").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRenameLordDialog.prototype, "defaultName", {
    get: function () {
      return this.dialogProperties.lordVO.defaultName.compose();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.BasicRenameDialog.prototype, "defaultName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleRenameLordDialog.prototype.validate = function () {
    if (e.prototype.validate.call(this)) {
      if (o.TextValide.isSmartFoxValide(this.itxt_insert.text) && o.TextValide.isUsernameValide(this.itxt_insert.text)) {
        return true;
      }
      this.alert("generic_alert_watchout", "register_emptyName_copy");
    }
    return false;
  };
  CastleRenameLordDialog.prototype.sendCommand = function () {
    l.CastleModel.smartfoxClient.sendCommandVO(new r.C2SRenameLordVO(this.itxt_insert.text, this.dialogProperties.lordVO.id));
    this.hide();
  };
  Object.defineProperty(CastleRenameLordDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleRenameLordDialog.__initialize_static_members = function () {
    CastleRenameLordDialog.NAME = "CastleNameAlliance";
  };
  return CastleRenameLordDialog;
}(c.BasicRenameDialog);
exports.CastleRenameLordDialog = u;
a.classImplementsInterfaces(u, "ICollectableRendererList");
u.__initialize_static_members();