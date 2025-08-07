Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./4.js");
var p = require("./224.js");
var h = require("./27.js");
var g = require("./40.js");
var C = require("./8.js");
var _ = require("./1359.js");
var m = function (e) {
  function CastleForumTopicItemRenderer(t, i) {
    var n = this;
    n._canDeleteTopicOrAnswer = false;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t) || this)._categoryLayer = i;
    n.itemDisp.btn_deleteTopic.toolTipText = "dialog_alliance_communication_tooltip_eraseTopic";
    C.ButtonHelper.initBasicButton(n.itemDisp.btn_deleteTopic);
    n.disp.changeTextFieldCacheScale(2);
    return n;
  }
  n.__extends(CastleForumTopicItemRenderer, e);
  CastleForumTopicItemRenderer.prototype.onShow = function () {
    if (this._topicVO) {
      O.CastleComponent.textFieldManager.registerTextField(this.itemDisp.txt_title, new c.TextVO(this._topicVO.topicName)).autoFitToBounds = true;
      var t = h.CastleTimeStringHelper.getDateStringFromDate(this._topicVO.creationTimestamp);
      var i = a.TimeStringHelper.getTimeStringFromDate(this._topicVO.creationTimestamp, d.CastleModel.languageData.getTextById, a.TimeStringHelper.TWO_TIME_FORMAT);
      O.CastleComponent.textFieldManager.registerTextField(this.itemDisp.txt_fromName, new c.TextVO(this._topicVO.author)).autoFitToBounds = true;
      O.CastleComponent.textFieldManager.registerTextField(this.itemDisp.txt_fromDate, new c.TextVO(t));
      O.CastleComponent.textFieldManager.registerTextField(this.itemDisp.txt_fromTime, new c.TextVO(i));
      var n = "";
      var o = "";
      if (this._topicVO.lastPostTimestamp.valueOf() >= 0) {
        n = h.CastleTimeStringHelper.getDateStringFromDate(this._topicVO.lastPostTimestamp);
        o = a.TimeStringHelper.getTimeStringFromDate(this._topicVO.lastPostTimestamp, d.CastleModel.languageData.getTextById, a.TimeStringHelper.TWO_TIME_FORMAT);
      }
      O.CastleComponent.textFieldManager.registerTextField(this.itemDisp.txt_lastPostName, new c.TextVO(this._topicVO.lastPosterName)).autoFitToBounds = true;
      O.CastleComponent.textFieldManager.registerTextField(this.itemDisp.txt_lastPostDate, new c.TextVO(n));
      O.CastleComponent.textFieldManager.registerTextField(this.itemDisp.txt_lastPostTime, new c.TextVO(o));
      O.CastleComponent.textFieldManager.registerTextField(this.itemDisp.txt_answer, new l.LocalizedTextVO("dialog_alliance_communication_header_answers_number", ["" + this._topicVO.answerCount, "" + r.AllianceConst.MAX_REPLIES_TO_TOPIC]));
    }
    this.updateBackground();
    this.updateRankFields();
    this.itemDisp.visible = true;
    this.itemDisp.btn_deleteTopic.visible = false;
    this._canDeleteTopicOrAnswer = r.AllianceConst.hasAdminRightsForTopicAndAnswers(d.CastleModel.userData.allianceRank, this.topicVO.authorRank) || this.topicVO.author == d.CastleModel.userData.userName;
    e.prototype.onShow.call(this);
  };
  CastleForumTopicItemRenderer.prototype.onHide = function () {
    this.itemDisp.visible = false;
    e.prototype.onHide.call(this);
  };
  CastleForumTopicItemRenderer.prototype.updateBackground = function () {
    var e = CastleForumTopicItemRenderer.NORMAL_BACKGROUND_FRAME;
    var t = "dialog_alliance_communication_topicRead_tooltip";
    if (this.topicVO) {
      if (this.topicVO.wasRead) {
        if (this.topicVO.answerCount >= r.AllianceConst.MAX_REPLIES_TO_TOPIC) {
          e = CastleForumTopicItemRenderer.FULL_TOPIC_BACKGROUND_FRAME;
          t = "dialog_alliance_communication_topicFullRed_tooltip";
        }
      } else {
        e = CastleForumTopicItemRenderer.NEW_POST_BACKGROUND_FRAME;
        t = "dialog_alliance_communication_topicUnred_tooltip";
      }
    }
    this.itemDisp.mc_background.gotoAndStop(e);
    this.itemDisp.mc_toolTipMask.toolTipText = t;
  };
  CastleForumTopicItemRenderer.prototype.updateRankFields = function () {
    if (this.topicVO) {
      var e = this.topicVO.visibleRankingGroups.slice().sort();
      var t = u.int(e.indexOf(r.AllianceConst.RANKING_GROUP_LEADER));
      if (t >= 0 && e.length > 1) {
        e.splice(t, 1);
      }
      if (e.length == u.int(r.AllianceConst.ALLIANCE_RANKING_GROUPS_COUNT - 1)) {
        e.splice(2, 1);
      }
      for (var i = 0; i < CastleForumTopicItemRenderer.RANKFIELD_COUNT; ++i) {
        if (!(e[i] < 0) && !(e[i] > r.AllianceConst.RANKING_GROUP_APPLICANT)) {
          if (i < e.length) {
            this.itemDisp["mc_rank" + i].visible = true;
            this.itemDisp["mc_rank" + i].gotoAndStop(e[i] + 1);
            this.itemDisp["mc_rank" + i].toolTipText = p.CastleAllianceForumData.getVisibilityToolTip(e[i]);
          } else {
            this.itemDisp["mc_rank" + i].visible = false;
            this.itemDisp["mc_rank" + i].toolTipText = null;
          }
          this.itemDisp["mc_rank" + i].mouseChildren = false;
        }
      }
    }
  };
  CastleForumTopicItemRenderer.prototype.onClick = function (t) {
    if (C.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.itemDisp.btn_deleteTopic:
          if (this.topicVO) {
            f.CastleDialogHandler.getInstance().registerDefaultDialogs(b.CastleForumDeleteDialog, new _.CastleForumDeleteDialogProperties(b.CastleForumDeleteDialog.TYPE_TOPIC, this.topicVO.topicId));
          }
          break;
        default:
          this.onItemClick();
      }
    }
  };
  CastleForumTopicItemRenderer.prototype.onItemClick = function () {
    y.CastleForumViewTopic.currentShownTopicId = this.topicVO.topicId;
    this._categoryLayer.changeCategory(E.CastleCommunicationForum.CAT_VIEW_TOPIC);
  };
  CastleForumTopicItemRenderer.prototype.onRollOver = function (e) {
    O.CastleComponent.layoutManager.nativeCursor.setCursorType(o.BasicCustomCursor.CURSOR_CLICK);
    if (this._canDeleteTopicOrAnswer) {
      this.itemDisp.btn_deleteTopic.visible = true;
    }
    this.itemDisp.scaleX = this.itemDisp.scaleY = 1.02;
  };
  CastleForumTopicItemRenderer.prototype.onRollOut = function (e) {
    O.CastleComponent.layoutManager.nativeCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
    this.itemDisp.btn_deleteTopic.visible = false;
    this.itemDisp.scaleX = e.target.scaleY = 1;
  };
  Object.defineProperty(CastleForumTopicItemRenderer.prototype, "itemDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumTopicItemRenderer.prototype, "topicVO", {
    get: function () {
      return this._topicVO;
    },
    set: function (e) {
      this._topicVO = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleForumTopicItemRenderer.__initialize_static_members = function () {
    CastleForumTopicItemRenderer.RANKFIELD_COUNT = 3;
    CastleForumTopicItemRenderer.NORMAL_BACKGROUND_FRAME = 1;
    CastleForumTopicItemRenderer.NEW_POST_BACKGROUND_FRAME = 2;
    CastleForumTopicItemRenderer.FULL_TOPIC_BACKGROUND_FRAME = 3;
  };
  return CastleForumTopicItemRenderer;
}(g.CastleItemRenderer);
exports.CastleForumTopicItemRenderer = m;
var f = require("./9.js");
var O = require("./14.js");
var E = require("./606.js");
var y = require("./949.js");
var b = require("./1360.js");
s.classImplementsInterfaces(m, "ICollectableRendererList");
m.__initialize_static_members();