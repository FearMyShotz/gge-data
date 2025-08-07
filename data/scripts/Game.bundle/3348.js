Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./13.js");
var c = require("./42.js");
var u = function (e) {
  function QuestListEpicItem(t, i) {
    return e.call(this, new (s.getDefinitionByName("QuestListEpicItemMC"))(), t, i) || this;
  }
  n.__extends(QuestListEpicItem, e);
  QuestListEpicItem.prototype.addQuestItem = function (t, i = true) {
    if (!this.itxt_name) {
      this.itxt_name = d.CastleComponent.textFieldManager.registerTextField(this._headerMC.txt_name, new r.TextVO(l.TextHelper.toUpperCaseLocaSafe(t.questVO.getQuestSeriesText())), new o.InternalGGSTextFieldConfigVO(true));
      this.itxt_name.verticalAlign = c.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    }
    e.prototype.addQuestItem.call(this, t, i);
    this.contentMC.mask.height = 0;
  };
  return QuestListEpicItem;
}(require("./1643.js").AQuestCollapsibleItem);
exports.QuestListEpicItem = u;
var d = require("./14.js");
a.classImplementsInterfaces(u, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");