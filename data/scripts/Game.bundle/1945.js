Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./296.js");
var h = require("./5135.js");
var g = require("./5136.js");
var C = require("./102.js");
var _ = require("./4.js");
var m = require("./43.js");
var f = require("./8.js");
var O = require("./11.js");
var E = require("./93.js");
var y = require("./5137.js");
var b = require("./5138.js");
var D = function (e) {
  function CastleForwardMessageDialog() {
    var t = this;
    t._dataLoaded = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleForwardMessageDialog.NAME) || this;
  }
  n.__extends(CastleForwardMessageDialog, e);
  CastleForwardMessageDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this._dataLoaded = false;
    this.dialogDisp.btn_honor_left.toolTipText = "honor";
    this.dialogDisp.btn_honor_right.toolTipText = "honor";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.btn_allRight.toolTipText = "dialog_forwardMessage_addAll";
    this.dialogDisp.btn_allLeft.toolTipText = "dialog_forwardMessage_removeAll";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new d.LocalizedTextVO("dialog_forwardlog_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_member, new d.LocalizedTextVO("dialog_alliance_member"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_receiver, new d.LocalizedTextVO("dialog_newMessage_messageTo"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_level_right, new d.LocalizedTextVO("level"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_level_left, new d.LocalizedTextVO("level"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name_right, new d.LocalizedTextVO("generic_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name_left, new d.LocalizedTextVO("generic_name"));
    this._messageListLeft = new a.ItemScrollList(this.dialogDisp.mc_container_left);
    this._messageListRight = new a.ItemScrollList(this.dialogDisp.mc_container_right);
    this._messageListLeft.scrollItemClass = y.ForwardMessageListItem;
    this._messageListRight.scrollItemClass = y.ForwardMessageListItem;
    this._messageListLeft.initList();
    this._messageListRight.initList();
    f.ButtonHelper.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_forward, this.dialogDisp.btn_cancel, this.dialogDisp.mc_container_left.btn_up, this.dialogDisp.mc_container_left.btn_down, this.dialogDisp.mc_container_right.btn_up, this.dialogDisp.mc_container_right.btn_down, this.dialogDisp.btn_allRight, this.dialogDisp.btn_allLeft]);
  };
  CastleForwardMessageDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (!this._dataLoaded) {
      _.CastleModel.allianceData.addEventListener(C.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdate));
      o.BasicController.getInstance().sendCommandVOAndWait(new p.C2SGetAllianceInfoVO(_.CastleModel.userData.allianceID));
      return;
    }
    this.deleteAllReceivers();
    this.checkEnableForwardButton();
    if (this._dataLoaded) {
      this._messageListLeft.addEventListener(s.ScrollItemEvent.CLICK, this.bindFunction(this.onClickItem));
      this._messageListRight.addEventListener(s.ScrollItemEvent.CLICK, this.bindFunction(this.onClickItem));
    }
  };
  CastleForwardMessageDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this._messageListLeft.removeEventListener(s.ScrollItemEvent.CLICK, this.bindFunction(this.onClickItem));
    this._messageListRight.removeEventListener(s.ScrollItemEvent.CLICK, this.bindFunction(this.onClickItem));
    this._dataLoaded = false;
  };
  CastleForwardMessageDialog.prototype.onAllianceDataUpdate = function (e) {
    _.CastleModel.allianceData.removeEventListener(C.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdate));
    this._dataLoaded = true;
    this.show();
  };
  CastleForwardMessageDialog.prototype.onClickItem = function (e) {
    if (l.instanceOfClass(e.originTarget, "MovieClip")) {
      if (e.originTarget.name == "btn_moveRight") {
        this.selectItem(e.scrollItem.scrollItemVO);
      } else if (e.originTarget.name == "btn_moveLeft") {
        this.deselectItem(e.scrollItem.scrollItemVO);
      }
    } else {
      I.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(T.CastlePlayerInfoDialog, new E.CastlePlayerInfoDialogProperties(e.scrollItem.scrollItemVO.playerID), m.CastleDialogConsts.DIALOG_TYPE_SINGLE);
    }
  };
  CastleForwardMessageDialog.prototype.fillList = function (e, t) {
    var i = _.CastleModel.allianceData.myAllianceVO.memberList.sort(this.bindFunction(this.compareFunction));
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a.playerID != _.CastleModel.userData.playerID) {
          var s = new b.ForwardMessageListItemVO();
          s.playerID = a.playerID;
          s.name = a.playerName;
          s.honor = a.honor;
          s.level = a.playerLevel;
          s.isReceiver = t;
          e.pushContent(s);
        }
      }
    }
    e.initList();
  };
  CastleForwardMessageDialog.prototype.clearList = function (e) {
    e.clear();
    e.initList();
  };
  CastleForwardMessageDialog.prototype.compareFunction = function (e, t) {
    if (e.playerLevel == t.playerLevel) {
      return t.honor - e.honor;
    } else {
      return t.playerLevel - e.playerLevel;
    }
  };
  CastleForwardMessageDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (f.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_forward:
          this.sendMessage();
          break;
        case this.dialogDisp.btn_allLeft:
          this.deleteAllReceivers();
          break;
        case this.dialogDisp.btn_allRight:
          this.selectAll();
          break;
        case this.dialogDisp.btn_help:
          this.showHelp();
      }
      this.checkEnableForwardButton();
    }
  };
  CastleForwardMessageDialog.prototype.sendMessage = function () {
    var e;
    var t;
    switch (this.dialogProperties.messageType) {
      case c.MessageConst.MESSAGE_TYPE_BATTLE_LOG:
        t = h.C2SForwardBattleLogVO;
        break;
      case c.MessageConst.MESSAGE_TYPE_SPY_PLAYER:
        t = g.C2SForwardSpyLogVO;
    }
    if (t && this._messageListRight.voList) {
      e = new Array(this._messageListRight.voList.length);
      for (var i = 0; i < this._messageListRight.voList.length; ++i) {
        e[i] = this._messageListRight.voList[i].playerID;
      }
      _.CastleModel.smartfoxClient.sendCommandVO(new t(e, this.dialogProperties.messageID));
    }
    this.hide();
  };
  CastleForwardMessageDialog.prototype.deleteAllReceivers = function () {
    this.clearList(this._messageListLeft);
    this.clearList(this._messageListRight);
    this.fillList(this._messageListLeft, false);
  };
  CastleForwardMessageDialog.prototype.selectAll = function () {
    this.clearList(this._messageListLeft);
    this.clearList(this._messageListRight);
    this.fillList(this._messageListRight, true);
  };
  CastleForwardMessageDialog.prototype.selectItem = function (e) {
    this._messageListLeft.removeContent(e);
    e.isReceiver = true;
    this._messageListRight.pushContent(e);
    this._messageListLeft.initList(this._messageListLeft.currentStartIndex);
    this._messageListRight.initList(this._messageListRight.currentStartIndex);
  };
  CastleForwardMessageDialog.prototype.checkEnableForwardButton = function () {
    f.ButtonHelper.enableButton(this.dialogDisp.btn_forward, this._messageListRight.voList && this._messageListRight.voList.length > 0);
    if (f.ButtonHelper.isButtonEnabled(this.dialogDisp.btn_forward)) {
      this.dialogDisp.btn_forward.toolTipText = "";
    } else {
      this.dialogDisp.btn_forward.toolTipText = "dialog_forwardMessage_addRecipient";
    }
  };
  CastleForwardMessageDialog.prototype.deselectItem = function (e) {
    this._messageListRight.removeContent(e);
    e.isReceiver = false;
    this._messageListLeft.pushContent(e);
    this._messageListLeft.initList(this._messageListLeft.currentStartIndex);
    this._messageListRight.initList(this._messageListRight.currentStartIndex);
  };
  CastleForwardMessageDialog.prototype.showHelp = function () {
    I.CastleDialogHandler.getInstance().showHelper("", u.Localize.text("dialog_forwardlog_help"));
  };
  Object.defineProperty(CastleForwardMessageDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleForwardMessageDialog.__initialize_static_members = function () {
    CastleForwardMessageDialog.NAME = "CastleForwardMessageExt";
  };
  return CastleForwardMessageDialog;
}(O.CastleExternalDialog);
exports.CastleForwardMessageDialog = D;
var I = require("./9.js");
var T = require("./94.js");
r.classImplementsInterfaces(D, "ICollectableRendererList");
D.__initialize_static_members();