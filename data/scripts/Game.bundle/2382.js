Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./2383.js");
var u = require("./604.js");
var d = require("./44.js");
var p = require("./4.js");
var h = require("./8.js");
var g = function (e) {
  function CastleAllianceDialogCommunication(t) {
    var i = this;
    i._currentCategory = CastleAllianceDialogCommunication.CAT_NONE;
    i._isWaitingForServerMessage = false;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).init();
    return i;
  }
  n.__extends(CastleAllianceDialogCommunication, e);
  CastleAllianceDialogCommunication.prototype.init = function () {
    this._subLayers = new Map();
    this._subLayers.set(CastleAllianceDialogCommunication.CAT_CHAT, new _.CastleCommunicationChat(this.subLayerDisp.cat_chat));
    this._subLayers.set(CastleAllianceDialogCommunication.CAT_FORUM, new m.CastleCommunicationForum(this.subLayerDisp.cat_forum));
    this._categoryButtonNames = new Map();
    this._categoryButtonNames.set(CastleAllianceDialogCommunication.CAT_CHAT, "btn_cat_chat");
    this._categoryButtonNames.set(CastleAllianceDialogCommunication.CAT_FORUM, "btn_cat_forum");
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_cat_chat.txt_text, new s.LocalizedTextVO("allianceChat")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_cat_forum.txt_text, new s.LocalizedTextVO("dialog_alliance_communication_forum")).autoFitToBounds = true;
    h.ButtonHelper.initBasicButton(this.subLayerDisp.btn_cat_chat, 1.02);
    h.ButtonHelper.initBasicButton(this.subLayerDisp.btn_cat_forum, 1.02);
    h.ButtonHelper.initBasicButtons([this.subLayerDisp.btn_cat_chat, this.subLayerDisp.btn_cat_forum]);
  };
  CastleAllianceDialogCommunication.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    p.CastleModel.castleForumData.addEventListener(u.CastleAllianceForumEvent.ON_UNREAD_TOPICS_COUNT_UPDATED, this.bindFunction(this.onTopicsCountUpdated));
    this.subLayerDisp.btn_cat_chat.mc_messageCounter.visible = false;
    this.subLayerDisp.btn_cat_forum.mc_messageCounter.visible = false;
    this.changeCategory(CastleAllianceDialogCommunication.CAT_CHAT);
    this.subLayerDisp.btn_cat_forum.visible = !d.SpecialServerHelper.isCrossplay();
  };
  CastleAllianceDialogCommunication.prototype.hide = function () {
    e.prototype.hide.call(this);
    p.CastleModel.castleForumData.removeEventListener(u.CastleAllianceForumEvent.ON_UNREAD_TOPICS_COUNT_UPDATED, this.bindFunction(this.onTopicsCountUpdated));
    if (this._currentCategory != CastleAllianceDialogCommunication.CAT_NONE) {
      this._subLayers.get(this._currentCategory).hide();
      this._currentCategory = CastleAllianceDialogCommunication.CAT_NONE;
    }
  };
  CastleAllianceDialogCommunication.prototype.requestTopicCountData = function () {
    this._isWaitingForServerMessage = true;
    p.CastleModel.smartfoxClient.sendCommandVO(new c.C2SGetAllianceUnreadTopicsCount());
  };
  CastleAllianceDialogCommunication.prototype.onTopicsCountUpdated = function (e = null) {
    this._isWaitingForServerMessage = false;
    var t = l.int(p.CastleModel.castleForumData.unreadTopicsCount);
    this.subLayerDisp.btn_cat_forum.mc_messageCounter.visible = this._currentCategory != CastleAllianceDialogCommunication.CAT_FORUM && t > 0;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_cat_forum.mc_messageCounter.txt_value, new r.TextVO("" + t));
  };
  CastleAllianceDialogCommunication.prototype.changeCategory = function (e) {
    if (this._currentCategory != e) {
      if (this._currentCategory != CastleAllianceDialogCommunication.CAT_NONE) {
        this._subLayers.get(this._currentCategory).hide();
      }
      this._subLayers.get(e).show(this._params);
      this._currentCategory = e;
      if (this._currentCategory != CastleAllianceDialogCommunication.CAT_FORUM) {
        this.requestTopicCountData();
      } else {
        this.onTopicsCountUpdated();
      }
      this.updateCategoryButtons();
    }
  };
  CastleAllianceDialogCommunication.prototype.updateCategoryButtons = function () {
    if (this._categoryButtonNames != null) {
      for (var e = 0, t = Array.from(this._categoryButtonNames.keys()); e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          var n = this._categoryButtonNames.get(i);
          var o = i == this._currentCategory;
          this.subLayerDisp[n].mc_background.gotoAndStop(o ? 1 : 2);
        }
      }
    }
  };
  CastleAllianceDialogCommunication.prototype.onClick = function (e) {
    if (h.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.subLayerDisp.btn_cat_chat:
          this.changeCategory(CastleAllianceDialogCommunication.CAT_CHAT);
          break;
        case this.subLayerDisp.btn_cat_forum:
          this.changeCategory(CastleAllianceDialogCommunication.CAT_FORUM);
      }
    }
  };
  CastleAllianceDialogCommunication.prototype.showHelp = function () {
    switch (this._currentCategory) {
      case CastleAllianceDialogCommunication.CAT_CHAT:
        C.CastleDialogHandler.getInstance().showHelper("", a.Localize.text("help_allianceChat"));
        break;
      case CastleAllianceDialogCommunication.CAT_FORUM:
        this._subLayers.get(CastleAllianceDialogCommunication.CAT_FORUM).showHelp();
    }
  };
  CastleAllianceDialogCommunication.__initialize_static_members = function () {
    CastleAllianceDialogCommunication.CAT_CHAT = "cat_chat";
    CastleAllianceDialogCommunication.CAT_FORUM = "cat_forum";
    CastleAllianceDialogCommunication.CAT_NONE = "cat_none";
  };
  return CastleAllianceDialogCommunication;
}(require("./34.js").CastleDialogSubLayer);
exports.CastleAllianceDialogCommunication = g;
var C = require("./9.js");
var _ = require("./2384.js");
var m = require("./605.js");
o.classImplementsInterfaces(g, "ICollectableRendererList", "ISublayer");
g.__initialize_static_members();