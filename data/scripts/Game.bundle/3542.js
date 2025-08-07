Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function SeasonLeagueMainDialogInfoPagePasses(t) {
    var i = e.call(this, t) || this;
    i.init();
    return i;
  }
  n.__extends(SeasonLeagueMainDialogInfoPagePasses, e);
  SeasonLeagueMainDialogInfoPagePasses.prototype.init = function () {};
  SeasonLeagueMainDialogInfoPagePasses.prototype.update = function (e) {
    this.disp.mc_season.visible = e == "season";
    this.disp.mc_promotion.visible = e == "promotion";
    this.disp.mc_event.visible = e == "event";
    switch (e) {
      case "season":
        r.CastleComponent.textFieldManager.registerTextField(this.disp.txt_copy, new a.LocalizedTextVO("dialog_seasonLeague_infoSection_seasonPass_text_1")).autoFitToBounds = true;
        break;
      case "promotion":
        r.CastleComponent.textFieldManager.registerTextField(this.disp.txt_copy, new a.LocalizedTextVO("dialog_seasonLeague_infoSection_promotionPass_text_1")).autoFitToBounds = true;
        break;
      case "event":
        r.CastleComponent.textFieldManager.registerTextField(this.disp.txt_copy, new a.LocalizedTextVO("dialog_seasonLeague_infoSection_eventPass_text_1")).autoFitToBounds = true;
    }
  };
  return SeasonLeagueMainDialogInfoPagePasses;
}(require("./40.js").CastleItemRenderer);
exports.SeasonLeagueMainDialogInfoPagePasses = s;
var r = require("./14.js");
o.classImplementsInterfaces(s, "ICollectableRendererList");