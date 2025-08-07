Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./4.js");
var c = require("./224.js");
var u = require("./27.js");
var d = require("./40.js");
var p = require("./8.js");
var h = require("./1359.js");
var g = function (e) {
  function CastleForumPostRenderer(t, i) {
    var n = this;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t) || this)._postVO = i;
    p.ButtonHelper.initBasicButton(n.itemDisp.btn_delete);
    return n;
  }
  n.__extends(CastleForumPostRenderer, e);
  CastleForumPostRenderer.prototype.onClick = function (e) {
    if (p.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.itemDisp.btn_delete:
          _.CastleDialogHandler.getInstance().registerDefaultDialogs(O.CastleForumDeleteDialog, new h.CastleForumDeleteDialogProperties(O.CastleForumDeleteDialog.TYPE_POST, f.CastleForumViewTopic.currentShownTopicId, this.postVO.postId));
      }
    }
  };
  CastleForumPostRenderer.prototype.fillWithContent = function () {
    m.CastleComponent.textFieldManager.registerTextField(this.itemDisp.txt_playerName, new s.TextVO(this.postVO.author)).selectable = true;
    var e = m.CastleComponent.textFieldManager.registerTextField(this.itemDisp.txt_content, new s.TextVO(this.postVO.content));
    e.selectable = true;
    var t = u.CastleTimeStringHelper.getDateStringFromDate(this.postVO.creationTimestamp);
    var i = o.TimeStringHelper.getTimeStringFromDate(this.postVO.creationTimestamp, l.CastleModel.languageData.getTextById, o.TimeStringHelper.TWO_TIME_FORMAT);
    m.CastleComponent.textFieldManager.registerTextField(this.itemDisp.txt_date, new s.TextVO(t)).selectable = true;
    m.CastleComponent.textFieldManager.registerTextField(this.itemDisp.txt_time, new s.TextVO(i)).selectable = true;
    this.itemDisp.mc_rank.icon_rank.gotoAndStop(this.postVO.allianceRank + 1);
    this.itemDisp.mc_rank.mouseChildren = false;
    this.itemDisp.mc_rank.toolTipText = "dialog_alliance_rank" + C.CastleAllianceData.getTextIDForRank(this.postVO.allianceRank);
    this.itemDisp.btn_delete.visible = c.CastleAllianceForumData.canDeletePost(this.postVO);
    this.itemDisp.btn_delete.toolTipText = "dialog_alliance_communication_eraseAnswer_tooltip";
    e.height = e.textHeight;
    var n = this.itemDisp.txt_content.getTextFormat().size;
    var a = r.int(e.textHeight + n + CastleForumPostRenderer.TEXT_PADDING_Y);
    e.height = a;
    this.itemDisp.mc_background.height = Math.max(CastleForumPostRenderer.TEXT_MIN_HEIGHT, a);
  };
  Object.defineProperty(CastleForumPostRenderer.prototype, "itemDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumPostRenderer.prototype, "postVO", {
    get: function () {
      return this._postVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleForumPostRenderer.__initialize_static_members = function () {
    CastleForumPostRenderer.TEXT_PADDING_Y = 1;
    CastleForumPostRenderer.TEXT_MIN_HEIGHT = 135;
  };
  return CastleForumPostRenderer;
}(d.CastleItemRenderer);
exports.CastleForumPostRenderer = g;
var C = require("./317.js");
var _ = require("./9.js");
var m = require("./14.js");
var f = require("./949.js");
var O = require("./1360.js");
a.classImplementsInterfaces(g, "ICollectableRendererList");
g.__initialize_static_members();