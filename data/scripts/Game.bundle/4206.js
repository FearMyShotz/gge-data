Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./51.js");
var u = require("./4.js");
var d = require("./24.js");
var p = require("./20.js");
var h = require("./8.js");
var g = require("./131.js");
var C = createjs.MovieClip;
var _ = function (e) {
  function GuidancePanel() {
    var t = e.call(this, new C()) || this;
    t._clip = new d.CastleGoodgameExternalClip(GuidancePanel.ASSET_NAME, s.BasicModel.basicLoaderData.getVersionedItemAssetUrl(GuidancePanel.ASSET_NAME), null, 0, false);
    t._clip.doWhenLoaded(t.bindFunction(t.onLoaded));
    t.disp.addChild(t._clip);
    return t;
  }
  n.__extends(GuidancePanel, e);
  GuidancePanel.prototype.onLoaded = function () {
    this.panelDisp.icon_questGiver.scaleX = this.panelDisp.icon_questGiver.scaleY = 0.6;
    h.ButtonHelper.initButtons([this.panelDisp.mc_speechbubble.btn_close], p.ClickFeedbackButtonHover);
    h.ButtonHelper.initBasicButton(this.panelDisp.icon_questGiver, 1.05);
    this._itxt_text = a.GoodgameTextFieldManager.getInstance().registerTextField(this.panelDisp.mc_speechbubble.txt_text, new l.LocalizedTextVO(""));
  };
  GuidancePanel.prototype.showWithText = function (e, t, i) {
    var n = this;
    if (i === undefined) {
      i = null;
    }
    this._clip.doWhenLoaded(function (a) {
      n.show();
      o.MovieClipHelper.clearMovieClip(n.panelDisp.icon_questGiver);
      var l = u.CastleModel.questData.getQuestGiverSmallClassName(e, u.CastleModel.userData.hasAlternativeQuestGiver);
      var p = new d.CastleGoodgameExternalClip(l + "_Icon", s.BasicModel.basicLoaderData.getVersionedItemAssetUrl(l), null, 0, false, r.getDefinitionByName("QuestGiverSmall_" + c.ClientConstCharacter.CHAR_ID_UNKNOWN + "_Icon"));
      n.panelDisp.icon_questGiver.addChild(p);
      n.panelDisp.mc_speechbubble.visible = true;
      n._itxt_text.textContentVO.textId = t;
      n._itxt_text.textContentVO.textReplacements = i;
    });
  };
  GuidancePanel.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.panelDisp.icon_questGiver:
        this.panelDisp.mc_speechbubble.visible = true;
        break;
      case this.panelDisp.mc_speechbubble.btn_close:
        this.panelDisp.mc_speechbubble.visible = false;
    }
  };
  GuidancePanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      this.disp.x = this.disp.stage.stageWidth - 100;
      this.disp.y = 100;
    }
  };
  Object.defineProperty(GuidancePanel.prototype, "panelDisp", {
    get: function () {
      return this._clip.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  GuidancePanel.ASSET_NAME = "GuidancePanelExt";
  return GuidancePanel;
}(g.CastlePanel);
exports.GuidancePanel = _;