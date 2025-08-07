Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./4.js");
var l = require("./203.js");
var c = require("./8.js");
var u = function (e) {
  function CastleDeleteAllianceBookmarkDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleDeleteAllianceBookmarkDialog.NAME) || this;
  }
  n.__extends(CastleDeleteAllianceBookmarkDialog, e);
  CastleDeleteAllianceBookmarkDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("dialog_alliance_bookmarks_eraseBookmark_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("dialog_alliance_bookmarks_eraseBookmark_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_notify.txt_notifyAttackers, new s.LocalizedTextVO("dialog_alliance_bookmarks_eraseBookmark_sendMessage_copy"));
    c.ButtonHelper.initTwoStateButton(this.dialogDisp.mc_notify.btn_notify);
    c.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_no, this.dialogDisp.btn_ok]);
    this.crestComponent = new d.CastleCastleCrestComponent(this.dialogDisp.mc_sourceCastle);
  };
  CastleDeleteAllianceBookmarkDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    if (this.dialogProperties.bookmarkVO.type == l.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER) {
      this.dialogDisp.mc_notify.visible = true;
      c.ButtonHelper.setButtonSelected(this.dialogDisp.mc_notify.btn_notify, true);
      this.setSendMessageButtonTooltip();
    } else {
      this.dialogDisp.mc_notify.visible = false;
    }
  };
  CastleDeleteAllianceBookmarkDialog.prototype.showLoaded = function (t) {
    var i;
    if (t === undefined) {
      t = null;
    }
    e.prototype.showLoaded.call(this, t);
    i = this.dialogProperties.bookmarkVO.kingdomId == a.FactionConst.KINGDOM_ID ? p.CrestHelper.getPlayerOrFactionCrest(this.dialogProperties.bookmarkVO.worldmapObjectVO.ownerInfo) : this.dialogProperties.bookmarkVO.worldmapObjectVO.ownerInfo.crest;
    this.crestComponent.initComponent(i, this.dialogProperties.bookmarkVO.worldmapObjectVO);
  };
  CastleDeleteAllianceBookmarkDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
  };
  CastleDeleteAllianceBookmarkDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_no:
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        this.deleteBookmark();
        this.hide();
    }
    if (this.dialogDisp.mc_notify.visible && this.dialogDisp.mc_notify.btn_notify == t.target) {
      var i = c.ButtonHelper.isButtonSelected(this.dialogDisp.mc_notify.btn_notify);
      c.ButtonHelper.setButtonSelected(this.dialogDisp.mc_notify.btn_notify, !i);
      this.setSendMessageButtonTooltip();
    }
  };
  CastleDeleteAllianceBookmarkDialog.prototype.setSendMessageButtonTooltip = function () {
    if (c.ButtonHelper.isButtonSelected(this.dialogDisp.mc_notify.btn_notify)) {
      this.dialogDisp.mc_notify.btn_notify.toolTipText = "dialog_alliance_bookmarks_eraseBookmark_sendMessage_confirm_tooltip";
    } else {
      this.dialogDisp.mc_notify.btn_notify.toolTipText = "dialog_alliance_bookmarks_eraseBookmark_sendMessage_deny_tooltip";
    }
  };
  CastleDeleteAllianceBookmarkDialog.prototype.deleteBookmark = function () {
    r.CastleModel.bookmarkData.deleteBookmark(this.dialogProperties.bookmarkVO, c.ButtonHelper.isButtonSelected(this.dialogDisp.mc_notify.btn_notify));
  };
  Object.defineProperty(CastleDeleteAllianceBookmarkDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleDeleteAllianceBookmarkDialog.__initialize_static_members = function () {
    CastleDeleteAllianceBookmarkDialog.NAME = "CastleDeleteAllianceBookmark";
  };
  return CastleDeleteAllianceBookmarkDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleDeleteAllianceBookmarkDialog = u;
var d = require("./739.js");
var p = require("./61.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");
u.__initialize_static_members();