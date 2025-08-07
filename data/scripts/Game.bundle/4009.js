Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./81.js");
var a = require("./14.js");
var s = require("./3.js");
var r = require("./2.js");
var l = function (e) {
  function CastleStormIslandsRuleItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleStormIslandsRuleItem, e);
  CastleStormIslandsRuleItem.prototype.fill = function () {
    var e = this.data;
    var t = this.getItemMc();
    a.CastleComponent.textFieldManager.registerTextField(t.txt_copy, new s.LocalizedTextVO(e.teaserID));
    r.MovieClipHelper.clearMovieClip(t.mc_icon);
    var i = new Library.CastleStormIslandsRules[e.teaserID]();
    if (i) {
      t.mc_icon.addChild(i);
    }
  };
  return CastleStormIslandsRuleItem;
}(o.AInfiniteScrollListItem);
exports.CastleStormIslandsRuleItem = l;