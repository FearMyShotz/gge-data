Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./2413.js");
var p = require("./2414.js");
var h = require("./604.js");
var g = require("./4.js");
var C = require("./223.js");
var _ = require("./42.js");
var m = require("./8.js");
var f = require("./34.js");
var O = require("./2415.js");
var E = require("./1357.js");
var y = function (e) {
  function CastleForumViewTopic(t, i) {
    var n = this;
    n._isWaitingForServerMessage = false;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t) || this)._parentLayer = i;
    n._postScrollComponent = new O.CastleForumViewTopicScrollComponent(n.subLayerDisp);
    n.textFieldManager.registerTextField(n.subLayerDisp.btn_jumpToAnswer.txt_value, new l.LocalizedTextVO("dialog_alliance_communication_goToAnswer_button")).verticalAlign = _.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    n.textFieldManager.registerTextField(n.subLayerDisp.btn_visibility.txt_value, new l.LocalizedTextVO("dialog_alliance_communication_selectRanks_button")).verticalAlign = _.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    n.subLayerDisp.btn_back.toolTipText = "dialog_alliance_communication_button_toOverview";
    n.subLayerDisp.btn_visibility.toolTipText = "dialog_alliance_communication_selectRanks_tooltip";
    m.ButtonHelper.initBasicButtons([n.subLayerDisp.btn_back, n.subLayerDisp.btn_visibility, n.subLayerDisp.btn_jumpToAnswer, n.subLayerDisp.btn_answer, n.subLayerDisp.btn_up, n.subLayerDisp.btn_slider, n.subLayerDisp.btn_down]);
    return n;
  }
  n.__extends(CastleForumViewTopic, e);
  CastleForumViewTopic.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.clearSublayer();
    g.CastleModel.castleForumData.addEventListener(h.CastleAllianceForumEvent.ON_POST_CREATION_ACCEPTED, this.bindFunction(this.onPostCreationAccepted));
    g.CastleModel.castleForumData.addEventListener(h.CastleAllianceForumEvent.UPDATE_TOPIC_DETAIL, this.bindFunction(this.onTopicDetailUpdated));
    this.requestTopicData();
  };
  CastleForumViewTopic.prototype.hide = function () {
    g.CastleModel.castleForumData.removeEventListener(h.CastleAllianceForumEvent.UPDATE_TOPIC_DETAIL, this.bindFunction(this.onTopicDetailUpdated));
    g.CastleModel.castleForumData.removeEventListener(h.CastleAllianceForumEvent.ON_POST_CREATION_ACCEPTED, this.bindFunction(this.onPostCreationAccepted));
    if (this._postScrollComponent) {
      this._postScrollComponent.onHide();
    }
    if (this._answerComponent) {
      this._answerComponent.onHide();
    }
    e.prototype.hide.call(this);
  };
  CastleForumViewTopic.prototype.onPostCreationAccepted = function (e) {
    if (this._answerComponent) {
      this._answerComponent.resetComponent();
    }
  };
  CastleForumViewTopic.prototype.destroyPosts = function () {
    if (this._posts) {
      for (var e = 0; e < this._posts.length; ++e) {
        this._posts[e].onHide();
        this.subLayerDisp.mc_posts.mc_placeHolder.removeChild(this._posts[e].itemDisp);
      }
    }
  };
  CastleForumViewTopic.prototype.clearSublayer = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_answerCount, new c.TextVO(""));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_topicName, new c.TextVO(""));
    if (this._answerComponent) {
      this._answerComponent.onHide();
      this._answerComponent = null;
    }
    this.destroyPosts();
    o.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_posts.mc_placeHolder);
    this._posts = [];
    this.subLayerDisp.btn_visibility.visible = false;
  };
  CastleForumViewTopic.prototype.requestTopicData = function () {
    if (!this._isWaitingForServerMessage) {
      this._isWaitingForServerMessage = true;
      g.CastleModel.smartfoxClient.sendCommandVO(new p.C2SGetAllianceTopicRepliesVO(CastleForumViewTopic.currentShownTopicId));
    }
  };
  CastleForumViewTopic.prototype.onTopicDetailUpdated = function (e = null) {
    if (this.isSublayerActive) {
      if (e && e.params && e.params[0]) {
        this._parentLayer.changeCategory(S.CastleCommunicationForum.CAT_OVERVIEW);
      } else {
        this.textFieldManager.registerTextField(this.subLayerDisp.txt_answerCount, new l.LocalizedTextVO("dialog_alliance_communication_header_answers_number", ["" + this.topicDetail.posts.length, "" + r.AllianceConst.MAX_REPLIES_TO_TOPIC])).autoFitToBounds = true;
        this.textFieldManager.registerTextField(this.subLayerDisp.txt_topicName, new c.TextVO(this.topicDetail.topicName)).autoFitToBounds = true;
        this.subLayerDisp.btn_visibility.visible = this.topicDetail.hasRightsToChangeVisibility();
        m.ButtonHelper.enableButton(this.subLayerDisp.btn_answer, !this.hasMaxPosts);
        this._postScrollComponent.onShow();
        this.createAnswerMc();
        this.createPostsWithContent();
        this.rePositionPostsAndAnswer();
        if (!this._isWaitingForServerMessage && this._posts.length > 1) {
          this._postScrollComponent.scrollToEnd();
        }
        this.updateFullMode();
        this._answerComponent.updateAnswerButton();
        this._isWaitingForServerMessage = false;
        if (this._posts.length > 1) {
          this._postScrollComponent.scrollToEnd();
        }
      }
    }
  };
  CastleForumViewTopic.prototype.updateFullMode = function () {
    this.subLayerDisp.txt_answerCount.textColor = this.hasMaxPosts ? C.CastleAllianceForumData.TEXTCOLOR_FULL : C.CastleAllianceForumData.TEXTCOLOR_NONFULL;
    m.ButtonHelper.enableButton(this.subLayerDisp.btn_jumpToAnswer, !this.hasMaxPosts);
    this.subLayerDisp.btn_jumpToAnswer.toolTipText = this.hasMaxPosts ? "dialog_alliance_communication_topicFullRed_tooltip" : "dialog_alliance_communication_goToAnswer_tooltip";
  };
  CastleForumViewTopic.prototype.rePositionPostsAndAnswer = function () {
    if (this._posts) {
      var e = 0;
      for (var t = 0; t < this._posts.length; ++t) {
        this._posts[t].itemDisp.x = CastleForumViewTopic.POST_X_OFFSET;
        this._posts[t].itemDisp.y = e + CastleForumViewTopic.POST_Y_OFFSET;
        e += u.int(this._posts[t].itemDisp.height + CastleForumViewTopic.POST_Y_SPACE);
      }
      if (this.answerDisp) {
        this.answerDisp.x = CastleForumViewTopic.POST_X_OFFSET;
        this.answerDisp.y = e + CastleForumViewTopic.POST_Y_OFFSET + CastleForumViewTopic.ADDITIONAL_Y_SPACE_FOR_ANSWER;
      }
    }
  };
  CastleForumViewTopic.prototype.createPostsWithContent = function () {
    if (this.topicDetail.posts) {
      this.destroyPosts();
      this._posts = [];
      var e = s.getDefinitionByName("CastleForumTopicPost");
      for (var t = 0; t < this.topicDetail.posts.length; ++t) {
        var i = new e();
        i.name = "mc_post" + t;
        this.subLayerDisp.mc_posts.mc_placeHolder.addChild(i);
        i.x = i.y = 0;
        var n = new T.CastleForumPostRenderer(i, this.topicDetail.posts[t]);
        n.fillWithContent();
        this._posts.push(n);
        n.onShow();
      }
      this._posts.sort(b.ClientConstSort.sortForumTopicPostsByCreationDate(false));
      m.ButtonHelper.enableButton(this.subLayerDisp.btn_slider, this._posts.length > 1);
      this.subLayerDisp.btn_slider.mouseEnabled = this._posts.length > 1;
      m.ButtonHelper.enableButton(this.subLayerDisp.btn_down, this._posts.length > 1);
    }
  };
  CastleForumViewTopic.prototype.createAnswerMc = function () {
    if (this.subLayerDisp.mc_posts.mc_placeHolder.getChildByName("mc_answer")) {
      if (this._answerComponent) {
        this._answerComponent.topicDetailVO = this.topicDetail;
      }
    } else {
      if (this._answerComponent) {
        this._answerComponent.onHide();
      }
      var e = new (s.getDefinitionByName("CastleForumAnswerTopic"))();
      this.subLayerDisp.mc_posts.mc_placeHolder.addChild(e);
      e.name = "mc_answer";
      e.x = e.y = 0;
      this._answerComponent = new I.CastleForumAnswerRenderer(this, e, this.subLayerDisp.btn_answer, this.topicDetail);
      this._answerComponent.onShow();
      this._postScrollComponent.removeExtraListeners();
      this._postScrollComponent.addExtraListeners();
    }
  };
  CastleForumViewTopic.prototype.onSendingAnswer = function () {
    g.CastleModel.smartfoxClient.sendCommandVO(new d.C2SAllianceAnswerTopicVO(CastleForumViewTopic.currentShownTopicId, this._answerComponent.getAnswerText()));
  };
  CastleForumViewTopic.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (m.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.subLayerDisp.btn_back:
          this._parentLayer.changeCategory(S.CastleCommunicationForum.CAT_OVERVIEW);
          break;
        case this.subLayerDisp.btn_jumpToAnswer:
          this._postScrollComponent.scrollToEnd();
          if (this._answerComponent) {
            this._answerComponent.focusTextfield();
          }
          break;
        case this.subLayerDisp.btn_visibility:
          D.CastleDialogHandler.getInstance().registerDefaultDialogs(v.CastleForumVisibilityDialog, new E.CastleForumVisibilityDialogProperties(this.topicDetail.visibleRankingGroups, CastleForumViewTopic.currentShownTopicId));
      }
    }
  };
  Object.defineProperty(CastleForumViewTopic.prototype, "hasMaxPosts", {
    get: function () {
      return !this.topicDetail || !this.topicDetail.posts || this.topicDetail.posts.length >= r.AllianceConst.MAX_REPLIES_TO_TOPIC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumViewTopic.prototype, "topicDetail", {
    get: function () {
      return g.CastleModel.castleForumData.topicDetail;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumViewTopic.prototype, "answerDisp", {
    get: function () {
      return this.subLayerDisp.mc_posts.mc_placeHolder.getChildByName("mc_answer");
    },
    enumerable: true,
    configurable: true
  });
  CastleForumViewTopic.__initialize_static_members = function () {
    CastleForumViewTopic.POST_X_OFFSET = 0;
    CastleForumViewTopic.POST_Y_OFFSET = 0;
    CastleForumViewTopic.POST_Y_SPACE = 10;
    CastleForumViewTopic.ADDITIONAL_Y_SPACE_FOR_ANSWER = 20;
  };
  CastleForumViewTopic.currentShownTopicId = -1;
  return CastleForumViewTopic;
}(f.CastleDialogSubLayer);
exports.CastleForumViewTopic = y;
var b = require("./75.js");
var D = require("./9.js");
var I = require("./2416.js");
var T = require("./2417.js");
var v = require("./1358.js");
var S = require("./605.js");
a.classImplementsInterfaces(y, "ICollectableRendererList", "ISublayer");
y.__initialize_static_members();