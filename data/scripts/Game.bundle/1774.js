Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./84.js");
var r = require("./13.js");
var l = require("./955.js");
var c = require("./956.js");
var u = function (e) {
  function SamuraiDaimyoEventDialogInfo(t) {
    return e.call(this, t) || this;
  }
  n.__extends(SamuraiDaimyoEventDialogInfo, e);
  SamuraiDaimyoEventDialogInfo.prototype.init = function () {
    e.prototype.init.call(this);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new a.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("eventGuide"))).autoFitToBounds = true;
    this.topics.init(this.getTopics(), SamuraiDaimyoEventDialogInfo.TOPIC_ASSET_CLIP_NAME, p.SamuraiDaimyoEventDialog.NAME, SamuraiDaimyoEventDialogInfo.TOPIC_MASK_HEIGHT);
    this.addPage(SamuraiDaimyoEventDialogInfo.PAGE_TEXT, d.InfoCatalogPageScrollText, this.subLayerDisp.mc_pages.mc_pageText);
  };
  SamuraiDaimyoEventDialogInfo.prototype.updateInfoPage = function (e, t) {
    e.fillContent("dialog_samuraiInvasionDaimyo_guide_" + t.topicType.name + "_desc");
  };
  SamuraiDaimyoEventDialogInfo.prototype.getTopics = function () {
    var e = [];
    for (var t = 0, i = s.CastleEnum.getEnumListByClass(h.SamuraiDaimyoInfoTopicEnum); t < i.length; t++) {
      var n = i[t];
      e.push(new c.InfoCatalogTopicVO(n, "dialog_samuraiInvasionDaimyo_guide_" + n.name + "_header"));
    }
    return e;
  };
  SamuraiDaimyoEventDialogInfo.TOPIC_ASSET_CLIP_NAME = "SamuraiDaimyoEvent_InfoTopicsItem";
  SamuraiDaimyoEventDialogInfo.TOPIC_MASK_HEIGHT = 350;
  SamuraiDaimyoEventDialogInfo.PAGE_TEXT = "pageText";
  return SamuraiDaimyoEventDialogInfo;
}(l.AModernInfoCatalogDialogSublayer);
exports.SamuraiDaimyoEventDialogInfo = u;
var d = require("./748.js");
var p = require("./825.js");
var h = require("./3748.js");
o.classImplementsInterfaces(u, "ICollectableRendererList", "ISublayer");