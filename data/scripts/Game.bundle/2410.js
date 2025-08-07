Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./2411.js");
var c = require("./604.js");
var u = require("./4.js");
var d = require("./223.js");
var p = require("./8.js");
var h = function (e) {
  function CastleForumOverview(t, i) {
    var n = this;
    n._isWaitingForServerMessage = false;
    n._currentPage = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t) || this)._parentLayer = i;
    n.textFieldManager.registerTextField(n.subLayerDisp.btn_newTopic.txt_value, new r.LocalizedTextVO("dialog_alliance_communication_newTopic_button")).autoFitToBounds = true;
    n.subLayerDisp.mc_topicCount.toolTipText = "dialog_alliance_communication_hiddenTopics_tooltip";
    n.textFieldManager.registerTextField(n.subLayerDisp.txt_titleTopic, new r.LocalizedTextVO("dialog_alliance_communication_header_topic"));
    n.textFieldManager.registerTextField(n.subLayerDisp.txt_titleFrom, new r.LocalizedTextVO("dialog_alliance_communication_header_fromPlayer"));
    n.textFieldManager.registerTextField(n.subLayerDisp.txt_titleLastPost, new r.LocalizedTextVO("dialog_alliance_communication_header_lastReply"));
    n._topicItems = [];
    for (var o = 0; o < CastleForumOverview.TOPICS_PER_PAGE; ++o) {
      n._topicItems.push(new g.CastleForumTopicItemRenderer(n.subLayerDisp["mc_item" + o], n._parentLayer));
    }
    p.ButtonHelper.initBasicButtons([n.subLayerDisp.btn_newTopic, n.subLayerDisp.btn_prevTopic, n.subLayerDisp.btn_nextTopic]);
    return n;
  }
  n.__extends(CastleForumOverview, e);
  CastleForumOverview.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    p.ButtonHelper.enableButton(this.subLayerDisp.btn_newTopic, !this.hasMaxTopics);
    this.onTopicOverviewUpdated();
    u.CastleModel.castleForumData.addEventListener(c.CastleAllianceForumEvent.UPDATE_TOPIC_OVERVIEW, this.bindFunction(this.onTopicOverviewUpdated));
    this.requestTopicData();
  };
  CastleForumOverview.prototype.requestTopicData = function () {
    if (!this._isWaitingForServerMessage) {
      this._isWaitingForServerMessage = true;
      u.CastleModel.smartfoxClient.sendCommandVO(new l.C2SGetAllianceTopicsVO());
    }
  };
  CastleForumOverview.prototype.onTopicOverviewUpdated = function (e = null) {
    this._isWaitingForServerMessage = false;
    if (this.isSublayerActive) {
      if (this._currentPage > this.maxPage) {
        this._currentPage = this.maxPage;
      }
      for (var t = 0; t < CastleForumOverview.TOPICS_PER_PAGE; ++t) {
        var i = this.topicStartIndex + t;
        if (u.CastleModel.castleForumData.topics && i < u.CastleModel.castleForumData.topics.length) {
          var n = u.CastleModel.castleForumData.topics[i];
          this._topicItems[t].topicVO = n;
          this._topicItems[t].onShow();
        } else {
          this._topicItems[t].topicVO = null;
          this._topicItems[t].onHide();
        }
      }
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_topicSite, new r.LocalizedTextVO("numbersXY", [this._currentPage + 1, this.maxPage + 1])).color = this.hasMaxTopics ? d.CastleAllianceForumData.TEXTCOLOR_FULL : d.CastleAllianceForumData.TEXTCOLOR_NONFULL;
      this.subLayerDisp.btn_prevTopic.visible = this._currentPage > 0;
      this.subLayerDisp.btn_nextTopic.visible = !(this._currentPage >= this.maxPage);
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_topicCount.txt_value, new r.LocalizedTextVO("dialog_alliance_communication_topicAmount", [u.CastleModel.castleForumData.topicCount, s.AllianceConst.MAX_TOPIC_COUNT])).autoFitToBounds = true;
      p.ButtonHelper.enableButton(this.subLayerDisp.btn_newTopic, !this.hasMaxTopics);
      this.textFieldManager.registerTextField(this.subLayerDisp.btn_newTopic.txt_value, new r.LocalizedTextVO(this.subLayerDisp.btn_newTopic.enabled ? "dialog_alliance_communication_newTopic_button" : "dialog_alliance_communication_topicFull_button"));
      this.subLayerDisp.btn_newTopic.toolTipText = this.hasMaxTopics ? "dialog_alliance_communication_topicFull_tooltip" : "dialog_alliance_communication_newTopic_tooltip";
    }
  };
  Object.defineProperty(CastleForumOverview.prototype, "maxPage", {
    get: function () {
      if (!u.CastleModel.castleForumData.topics || u.CastleModel.castleForumData.topics.length <= 0) {
        return 0;
      } else {
        return o.MathBase.ceil(u.CastleModel.castleForumData.topics.length / CastleForumOverview.TOPICS_PER_PAGE, 0) - 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumOverview.prototype, "topicStartIndex", {
    get: function () {
      return this._currentPage * CastleForumOverview.TOPICS_PER_PAGE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumOverview.prototype, "hasMaxTopics", {
    get: function () {
      return u.CastleModel.castleForumData.topicCount >= s.AllianceConst.MAX_TOPIC_COUNT;
    },
    enumerable: true,
    configurable: true
  });
  CastleForumOverview.prototype.hide = function () {
    u.CastleModel.castleForumData.removeEventListener(c.CastleAllianceForumEvent.UPDATE_TOPIC_OVERVIEW, this.bindFunction(this.onTopicOverviewUpdated));
    e.prototype.hide.call(this);
  };
  CastleForumOverview.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (p.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.subLayerDisp.btn_newTopic:
          if (!this.hasMaxTopics) {
            this._parentLayer.changeCategory(C.CastleCommunicationForum.CAT_NEW_TOPIC);
          }
          break;
        case this.subLayerDisp.btn_nextTopic:
          this._currentPage++;
          if (this._currentPage > this.maxPage) {
            this._currentPage = this.maxPage;
          }
          this.onTopicOverviewUpdated();
          break;
        case this.subLayerDisp.btn_prevTopic:
          this._currentPage--;
          if (this._currentPage < 0) {
            this._currentPage = 0;
          }
          this.onTopicOverviewUpdated();
      }
    }
  };
  CastleForumOverview.__initialize_static_members = function () {
    CastleForumOverview.TOPICS_PER_PAGE = 6;
  };
  return CastleForumOverview;
}(require("./34.js").CastleDialogSubLayer);
exports.CastleForumOverview = h;
var g = require("./2412.js");
var C = require("./605.js");
a.classImplementsInterfaces(h, "ICollectableRendererList", "ISublayer");
h.__initialize_static_members();