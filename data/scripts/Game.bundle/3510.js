Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./1069.js");
var r = require("./4.js");
var l = require("./1696.js");
var c = function (e) {
  function CastleRandomDungeonWinDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleRandomDungeonWinDialog.NAME) || this;
  }
  n.__extends(CastleRandomDungeonWinDialog, e);
  CastleRandomDungeonWinDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward, new a.LocalizedTextVO("reward"));
  };
  CastleRandomDungeonWinDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("dialog_eventDungeon_" + this.dialogProperties.skinID + "_win_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_winText, new a.LocalizedTextVO("dialog_eventDungeon_" + this.dialogProperties.skinID + "_win_desc"));
    r.CastleModel.smartfoxClient.sendCommandVO(new s.C2SSpecialEventInfoVO());
  };
  CastleRandomDungeonWinDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastleRandomDungeonWinDialog.prototype, "rewards", {
    get: function () {
      return this.dialogProperties.rewards;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ARandomDungeonRewardDialog.prototype, "rewards").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRandomDungeonWinDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleRandomDungeonWinDialog.__initialize_static_members = function () {
    CastleRandomDungeonWinDialog.NAME = "CastleRandomDungeonWinExternal";
  };
  return CastleRandomDungeonWinDialog;
}(l.ARandomDungeonRewardDialog);
exports.CastleRandomDungeonWinDialog = c;
o.classImplementsInterfaces(c, "ICollectableRendererList");
c.__initialize_static_members();