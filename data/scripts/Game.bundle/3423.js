Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./67.js");
var r = require("./19.js");
var l = require("./4.js");
var c = require("./174.js");
var u = require("./40.js");
var d = createjs.Point;
var p = function (e) {
  function SeasonLeagueMainDialogInfoPageMedals(t) {
    var i = e.call(this, t) || this;
    i.init();
    return i;
  }
  n.__extends(SeasonLeagueMainDialogInfoPageMedals, e);
  SeasonLeagueMainDialogInfoPageMedals.prototype.init = function () {
    h.CastleComponent.textFieldManager.registerTextField(this.disp.txt_text, new a.LocalizedTextVO("dialog_seasonLeague_infoSection_medalOverview_text_1")).autoFitToBounds = true;
  };
  SeasonLeagueMainDialogInfoPageMedals.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    h.CastleComponent.controller.addEventListener(c.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onInfoUpdated));
  };
  SeasonLeagueMainDialogInfoPageMedals.prototype.removeEventListener = function () {
    h.CastleComponent.controller.removeEventListener(c.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onInfoUpdated));
    e.prototype.removeEventListener.call(this);
  };
  SeasonLeagueMainDialogInfoPageMedals.prototype.update = function () {
    g.CollectableRenderHelper.displayMultipleItemsComplete(this, new s.CollectableRenderClipsList(this.disp, "mc_item"), l.CastleModel.seasonLeagueData.server.playerMedals, new r.CollectableRenderOptions(r.CollectableRenderOptions.SET_DEFAULT, new d(55, 55)));
  };
  SeasonLeagueMainDialogInfoPageMedals.prototype.onInfoUpdated = function (e) {
    this.update();
  };
  return SeasonLeagueMainDialogInfoPageMedals;
}(u.CastleItemRenderer);
exports.SeasonLeagueMainDialogInfoPageMedals = p;
var h = require("./14.js");
var g = require("./25.js");
o.classImplementsInterfaces(p, "ICollectableRendererList");