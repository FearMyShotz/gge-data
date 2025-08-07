Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./31.js");
var u = require("./19.js");
var d = require("./4.js");
var p = require("./24.js");
var h = require("./11.js");
var g = createjs.Point;
var C = function (e) {
  function CastleSeasonEventWinDialog() {
    return e.call(this, CastleSeasonEventWinDialog.NAME) || this;
  }
  n.__extends(CastleSeasonEventWinDialog, e);
  CastleSeasonEventWinDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.LocalizedTextVO("dialog_season_victory_titel"));
    m.CrestHelper.setCrestGraphics(this.dialogDisp.bg.crest, d.CastleModel.userData.playerCrest);
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_holder);
    this.clip = new p.CastleGoodgameExternalClip("EventWin_" + this.dialogProperties.eventID, a.BasicModel.basicLoaderData.getVersionedItemAssetUrl("EventWin_" + this.dialogProperties.eventID), null, 0, false);
    this.dialogDisp.mc_holder.addChild(this.clip);
    if (this.clip.isLoaded) {
      this.onClipLoaded();
    } else {
      this.clip.clipLoaded.addOnce(this.bindFunction(this.onClipLoaded));
    }
    switch (this.dialogProperties.eventID) {
      case r.EventConst.EVENTTYPE_CRUSADE_THORNKING:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new l.LocalizedTextVO("dialog_season_victory_copy"));
        break;
      case r.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
        var i = d.CastleModel.specialEventData.getActiveEventByEventId(this.dialogProperties.eventID);
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new l.LocalizedTextVO("dialog_seasonEvent_" + i.mapID + "_victory_copy"));
        break;
      case r.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new l.LocalizedTextVO("dialog_seasonEvent_64_victory_copy"));
    }
  };
  CastleSeasonEventWinDialog.prototype.onClipLoaded = function (e = null) {
    var t = this.clip.currentshownDisplayObject.mc_equipHolder;
    o.MovieClipHelper.clearMovieClip(t);
    this.updateReward(t);
  };
  CastleSeasonEventWinDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleSeasonEventWinDialog.prototype.updateReward = function (e) {
    _.CollectableRenderHelper.displaySingleItemComplete(this, new c.CollectableRenderClips(e).addIconMc(e), this.reward, new u.CollectableRenderOptions(u.CollectableRenderOptions.SET_ICON, new g(91, 91)));
  };
  Object.defineProperty(CastleSeasonEventWinDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSeasonEventWinDialog.prototype, "reward", {
    get: function () {
      return this.dialogProperties.reward;
    },
    enumerable: true,
    configurable: true
  });
  CastleSeasonEventWinDialog.NAME = "CastleSeasonEventWinEx";
  return CastleSeasonEventWinDialog;
}(h.CastleExternalDialog);
exports.CastleSeasonEventWinDialog = C;
var _ = require("./25.js");
var m = require("./61.js");
s.classImplementsInterfaces(C, "ICollectableRendererList");