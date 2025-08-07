Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./583.js");
var r = require("./24.js");
var l = require("./8.js");
var c = function (e) {
  function EquipmentGemSocket(t, i = false) {
    var n = e.call(this) || this;
    n._enableExtractBehaviour = false;
    n._equipmentVO = t;
    n._enableExtractBehaviour = i;
    l.ButtonHelper.initBasicButton(n);
    n._gemClip = new r.CastleGoodgameExternalClip("Equipment_SocketTop_Relicus", o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_SocketTop_Relicus"), null, 0, true);
    if (n._gemClip.isLoaded) {
      u.EquipmentIconHelper.addGem(n._gemClip, n._equipmentVO)(n._gemClip);
      n.onLoaded(n._gemClip);
    } else {
      n._gemClip.clipLoaded.addOnce(u.EquipmentIconHelper.addGem(n._gemClip, n._equipmentVO));
      n._gemClip.clipLoaded.addOnce(n.bindFunction(n.onLoaded));
    }
    n.addChild(n._gemClip.asDisplayObject());
    return n;
  }
  n.__extends(EquipmentGemSocket, e);
  EquipmentGemSocket.prototype.onLoaded = function (e) {
    this.toolTipText = "dialog_gemExtract_tooltip";
    this.showArrow(false);
    this.mouseEnabled = this._enableExtractBehaviour;
  };
  EquipmentGemSocket.prototype.showArrow = function (e) {};
  Object.defineProperty(EquipmentGemSocket.prototype, "disp", {
    get: function () {
      return this._gemClip.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentGemSocket.prototype, "equipmentVO", {
    get: function () {
      return this._equipmentVO;
    },
    enumerable: true,
    configurable: true
  });
  EquipmentGemSocket.ANIM_DURATION = 0.4;
  EquipmentGemSocket.MASK_POSITIONS = [-39, 7];
  EquipmentGemSocket.GEM_POSITIONS = [-16.55, 15];
  return EquipmentGemSocket;
}(s.CastleMovieClip);
exports.EquipmentGemSocket = c;
var u = require("./73.js");
a.classImplementsInterfaces(c, "MovieClip");