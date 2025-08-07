Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./51.js");
var s = require("./106.js");
var r = function (e) {
  function CastlePostSendGoodsHorseDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastlePostSendGoodsHorseDialog.NAME) || this;
  }
  n.__extends(CastlePostSendGoodsHorseDialog, e);
  CastlePostSendGoodsHorseDialog.prototype.showLoaded = function (t = null) {
    s.CharacterHelper.createCharacterBig(a.ClientConstCharacter.CHAR_ID_MERCHANT, this.dialogDisp.mc_char, 190, 135);
    this.hideAttackDisplayElements();
    e.prototype.showLoaded.call(this, t);
  };
  CastlePostSendGoodsHorseDialog.__initialize_static_members = function () {
    CastlePostSendGoodsHorseDialog.NAME = "CastlePostActionHorse_S";
  };
  return CastlePostSendGoodsHorseDialog;
}(require("./945.js").CastlePostSendGoodsDialog);
exports.CastlePostSendGoodsHorseDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();