Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./2409.js");
var u = require("./4.js");
var d = require("./224.js");
var p = require("./180.js");
var h = require("./8.js");
var g = require("./35.js");
var C = require("./1357.js");
var _ = function (e) {
  function CastleForumNewTopic(t, i) {
    var n = this;
    n._topicNameText = "";
    n._contentText = "";
    CONSTRUCTOR_HACK;
    (n = e.call(this, t) || this)._parentLayer = i;
    n._itxt_topicName = n.textFieldManager.registerTextField(n.subLayerDisp.txt_topicName, new l.TextVO(s.Localize.text("dialog_alliance_communication_text_title")));
    n._itxt_content = n.textFieldManager.registerTextField(n.subLayerDisp.txt_content, new l.TextVO(""));
    n._itxt_topicName.change.add(n.bindFunction(n.onTopicNameTextChanged));
    n._itxt_content.change.add(n.bindFunction(n.onContentTextChanged));
    n._itxt_topicName.maxChars = a.AllianceConst.MAX_TOPIC_TEXT;
    n._itxt_content.maxChars = a.AllianceConst.MAX_REPLY_TEXT;
    n.textFieldManager.registerTextField(n.subLayerDisp.txt_title, new r.LocalizedTextVO("dialog_alliance_communication_newTopic_button"));
    n.textFieldManager.registerTextField(n.subLayerDisp.btn_submit.txt_value, new r.LocalizedTextVO("dialog_alliance_communication_sendTopic_button")).autoFitToBounds = true;
    n.subLayerDisp.btn_back.toolTipText = "dialog_alliance_communication_button_toOverview";
    n.textFieldManager.registerTextField(n.subLayerDisp.btn_visibility.txt_value, new r.LocalizedTextVO("dialog_alliance_communication_selectRanks_button")).autoFitToBounds = true;
    n.subLayerDisp.btn_visibility.toolTipText = "dialog_alliance_communication_selectRanks_tooltip";
    n._scrollComponent = new f.CastleTextScrollComponent(new p.CastleTextScrollVO(n.subLayerDisp.txt_content, n.subLayerDisp.btn_up, n.subLayerDisp.btn_down, n.subLayerDisp.btn_slider, n.subLayerDisp.mc_slider));
    n._scrollComponent.hideArrowsOnScrollToEdges = true;
    n._scrollComponent.invisibleOnFit = true;
    h.ButtonHelper.initBasicButtons([n.subLayerDisp.btn_back, n.subLayerDisp.btn_visibility, n.subLayerDisp.btn_submit, n.subLayerDisp.btn_up, n.subLayerDisp.btn_slider]);
    return n;
  }
  n.__extends(CastleForumNewTopic, e);
  CastleForumNewTopic.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this._itxt_topicName.clearText();
    this._itxt_content.clearText();
    CastleForumNewTopic.visibleRankingGroups = d.CastleAllianceForumData.getPreselectedTopicVisibility();
    this.addEventListener();
    this.updateSubmitButton();
    this._scrollComponent.onShow();
    this._itxt_topicName.textContentVO.stringValue = s.Localize.text("dialog_alliance_communication_text_title");
  };
  CastleForumNewTopic.prototype.addEventListener = function () {
    if (this._itxt_topicName.keyUp.numListeners <= 0) {
      this._itxt_topicName.focusIn.add(this.bindFunction(this.onFocusInTopicName));
      this._itxt_topicName.focusOut.add(this.bindFunction(this.onFocusOutTopicName));
    }
  };
  CastleForumNewTopic.prototype.onFocusInTopicName = function (e) {
    if (this._itxt_topicName.text == s.Localize.text("dialog_alliance_communication_text_title")) {
      this._itxt_topicName.clearText();
    }
    this._itxt_topicName.setSelection(0, this._itxt_topicName.text.length);
    this.updateSubmitButton();
  };
  CastleForumNewTopic.prototype.onFocusOutTopicName = function (e) {
    if (this._itxt_topicName.text == "") {
      this._itxt_topicName.textContentVO.stringValue = s.Localize.text("dialog_alliance_communication_text_title");
    }
    this.updateSubmitButton();
  };
  CastleForumNewTopic.prototype.onTopicNameTextChanged = function (e) {
    if (d.CastleAllianceForumData.getForumValidText(this._itxt_topicName.text).length > a.AllianceConst.MAX_TOPIC_TEXT) {
      this._itxt_topicName.textContentVO.stringValue = this._topicNameText;
    } else {
      this._topicNameText = this._itxt_topicName.text;
    }
    this.updateSubmitButton();
  };
  CastleForumNewTopic.prototype.onContentTextChanged = function (e) {
    if (d.CastleAllianceForumData.getForumValidText(this._itxt_content.text).length > a.AllianceConst.MAX_REPLY_TEXT) {
      this._itxt_content.textContentVO.stringValue = this._contentText;
    } else {
      this._contentText = this._itxt_content.text;
    }
    this.updateSubmitButton();
  };
  CastleForumNewTopic.prototype.getTopicNameText = function () {
    var e = this._itxt_topicName.text;
    if (e == s.Localize.text("dialog_alliance_communication_text_title")) {
      return "";
    } else {
      return e;
    }
  };
  CastleForumNewTopic.prototype.updateSubmitButton = function () {
    var e = d.CastleAllianceForumData.hasValidTopicName(this.getTopicNameText());
    var t = d.CastleAllianceForumData.hasValidPostText(this._itxt_content.text);
    var i = true;
    if (this.canSubmitTopic) {
      this.subLayerDisp.btn_submit.toolTipText = null;
    } else {
      i = false;
      this.subLayerDisp.btn_submit.toolTipText = !e && t ? {
        t: "dialog_alliance_communication_shortTitle_tooltip",
        p: [a.AllianceConst.MIN_FORUM_TEXT_LENGTH]
      } : e && !t ? {
        t: "dialog_alliance_communication_shortText_tooltip",
        p: [a.AllianceConst.MIN_FORUM_TEXT_LENGTH]
      } : {
        t: "dialog_alliance_communication_shortTextTitle_tooltip",
        p: [a.AllianceConst.MIN_FORUM_TEXT_LENGTH]
      };
    }
    h.ButtonHelper.enableButton(this.subLayerDisp.btn_submit, i);
  };
  Object.defineProperty(CastleForumNewTopic.prototype, "canSubmitTopic", {
    get: function () {
      return d.CastleAllianceForumData.hasValidTopicName(this.getTopicNameText()) && d.CastleAllianceForumData.hasValidPostText(this._itxt_content.text);
    },
    enumerable: true,
    configurable: true
  });
  CastleForumNewTopic.prototype.hide = function () {
    this._scrollComponent.onHide();
    e.prototype.hide.call(this);
  };
  CastleForumNewTopic.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (h.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.subLayerDisp.btn_submit:
          if (this.canSubmitTopic) {
            u.CastleModel.smartfoxClient.sendCommandVO(new c.C2SAllianceTopicCreateVO(this.getTopicNameText(), CastleForumNewTopic.visibleRankingGroups, this._itxt_content.text));
            this._parentLayer.changeCategory(E.CastleCommunicationForum.CAT_OVERVIEW);
          }
          break;
        case this.subLayerDisp.btn_back:
          this._parentLayer.changeCategory(E.CastleCommunicationForum.CAT_OVERVIEW);
          break;
        case this.subLayerDisp.btn_visibility:
          m.CastleDialogHandler.getInstance().registerDefaultDialogs(O.CastleForumVisibilityDialog, new C.CastleForumVisibilityDialogProperties(CastleForumNewTopic.visibleRankingGroups));
      }
    }
  };
  return CastleForumNewTopic;
}(g.CastleDialogSubLayer);
exports.CastleForumNewTopic = _;
var m = require("./9.js");
var f = require("./182.js");
var O = require("./1358.js");
var E = require("./606.js");
o.classImplementsInterfaces(_, "ICollectableRendererList", "ISublayer");