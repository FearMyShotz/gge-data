Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./23.js");
var u = require("./23.js");
var d = require("./429.js");
var p = require("./511.js");
var h = require("./31.js");
var g = require("./104.js");
var C = require("./19.js");
var _ = require("./4.js");
var m = require("./8.js");
var f = require("./41.js");
var O = require("./11.js");
var E = require("./979.js");
var y = function (e) {
  function InviteAFriendInstructionsDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, InviteAFriendInstructionsDialog.NAME) || this;
  }
  n.__extends(InviteAFriendInstructionsDialog, e);
  InviteAFriendInstructionsDialog.prototype.initPages = function () {
    this.page_mcs = [];
    this.itxt_pages = [];
    this.pageContainer = this.dialogDisp.pagecontainer;
    f.CastleMovieClipHelper.applyMask(this.pageContainer);
    for (var e = 1; e <= InviteAFriendInstructionsDialog.PAGE_COUNT; e++) {
      var t = this.pageContainer["page" + e];
      var i = t["txt_" + e];
      var n = e == 1;
      t.visible = e == 1;
      if (i) {
        var o = l.int(InviteAFriendInstructionsDialog.page_txt_ids[e - 1]);
        var a = InviteAFriendInstructionsDialog.page_txt_id + (o < 10 ? "0" : "") + o;
        var s = this.textFieldManager.registerTextField(i, new r.LocalizedTextVO(a));
        this.itxt_pages.push(s);
        this.checkFurtherTexts(t);
      }
      if (n) {
        this.renderPaymentRewards(t);
        this.addTextForPaymentRewards(t);
      }
      this.page_mcs.push(t);
    }
  };
  InviteAFriendInstructionsDialog.prototype.renderPaymentRewards = function (e) {
    for (var t = _.CastleModel.inviteFriendsData.getRewardVOsByType(D.CastleInviteFriendsData.TYPE_PAYMENT).sort(b.ClientConstSort.sortInviteRewardsByFriendCount), i = 0; i < t.length; ++i) {
      e["item" + i].btn_info.actLikeButton = true;
      var n = new g.CollectableRendererList();
      I.CollectableRenderHelper.displaySingleItemAndAddToRenderList(n, new h.CollectableRenderClips(e["item" + i].item).addInfoBtn(e["item" + i].btn_info), t[i].getRewardCollectableList().getItemByIndex(0), new C.CollectableRenderOptions(C.CollectableRenderOptions.SET_DEFAULT));
    }
  };
  InviteAFriendInstructionsDialog.prototype.addTextForPaymentRewards = function (e) {
    this.textFieldManager.registerTextField(e.txt_2, new r.LocalizedTextVO("dialog_referFriend_instruction_page_01_rewards01"));
    this.textFieldManager.registerTextField(e.txt_3, new r.LocalizedTextVO("dialog_referFriend_instruction_page_01_rewards02", [InviteAFriendInstructionsDialog.AMOUNT_OF_FRIENDS]));
  };
  InviteAFriendInstructionsDialog.prototype.checkFurtherTexts = function (e) {
    this.checkTextfield(e.txt_copy, S.InviteAFriendLinkDialog.TEXT_ID_COPY);
    this.checkTextfield(e.txt_email, T.CastlePremiumMarketPlaceDialogInviteAFriend.TEXT_ID_EMAIL_BUTTON);
    this.checkTextfield(e.txt_mail0, v.InviteAFriendEmailDialog.TEXT_ID_HEADER);
    this.checkTextfield(e.txt_mail1, v.InviteAFriendEmailDialog.TEXT_ID_FRIEND_NAME);
    this.checkTextfield(e.txt_mail2, v.InviteAFriendEmailDialog.TEXT_ID_FRIEND_MAIL);
    this.checkTextfield(e.txt_mail3, v.InviteAFriendEmailDialog.TEXT_ID_YOUR_NAME);
    for (var t = 1; t <= 4; t++) {
      var i = e["txt_reward" + t];
      if (i) {
        var n = InviteAFriendInstructionsDialog.rewardReplacements[t - 1];
        var o = n[0] == 1;
        this.textFieldManager.registerTextField(i, new r.LocalizedTextVO("dialog_referFriend_inviteDialog_condition_levelFriends" + (o ? "_singular" : ""))).textContentVO.textReplacements = o ? [n[1]] : n;
      }
    }
  };
  InviteAFriendInstructionsDialog.prototype.checkTextfield = function (e, t) {
    if (e) {
      this.textFieldManager.registerTextField(e, new r.LocalizedTextVO(t));
    }
  };
  InviteAFriendInstructionsDialog.prototype.initLoaded = function (t = null) {
    this.initPages();
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.pagination = new d.Pagination(this, InviteAFriendInstructionsDialog.PAGE_COUNT);
    this.pagination.addControl(new p.PaginationArrows(this, this.pagination));
    e.prototype.initLoaded.call(this);
  };
  InviteAFriendInstructionsDialog.prototype.showLoaded = function (t) {
    var i;
    if (t === undefined) {
      t = null;
    }
    e.prototype.showLoaded.call(this, t);
    for (var n = 1; n <= InviteAFriendInstructionsDialog.PAGE_COUNT; n++) {
      (i = this.page_mcs[n - 1]).visible = n == 1;
      i.x = 0;
    }
    this.itxt_header = this.textFieldManager.registerTextField(this.dialogDisp.txt_header, new r.LocalizedTextVO(InviteAFriendInstructionsDialog.header_txt_id));
    this.itxt_header.verticalAlign = o.GGSVerticalAlign.MIDDLE;
    this.itxt_header.multiline = false;
    this.itxt_pageIndicator = this.textFieldManager.registerTextField(this.dialogDisp.txt_page, new r.LocalizedTextVO(a.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [1, this.pagination.maxPages]));
    this.pagination.reset();
    this.pagination.currentPage = l.int(this.dialogProperties.startPage);
  };
  InviteAFriendInstructionsDialog.prototype.onClick = function (e) {
    if (m.ButtonHelper.isButtonEnabled(e.target) && !this.pagination.handleClick(e)) {
      switch (e.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
      }
    }
  };
  InviteAFriendInstructionsDialog.prototype.getLeftArrow = function () {
    return this.dialogDisp.btn_arrow_left;
  };
  InviteAFriendInstructionsDialog.prototype.getRightArrow = function () {
    return this.dialogDisp.btn_arrow_right;
  };
  InviteAFriendInstructionsDialog.prototype.changeArrow = function (e, t) {
    return false;
  };
  InviteAFriendInstructionsDialog.prototype.updatePages = function (e, t) {
    if (e != t) {
      var i = 1;
      if (e > t) {
        i = -1;
      }
      this.itxt_pageIndicator.textContentVO.textReplacements = [this.pagination.currentPage, this.pagination.maxPages];
      var n = this.page_mcs[e];
      var o = this.page_mcs[t];
      n.visible = true;
      o.visible = true;
      u.TweenMax.fromTo(n, 0.25, {
        x: 0
      }, {
        x: -InviteAFriendInstructionsDialog.pageWidth * i,
        onComplete: this.onTweenComplete(e, false),
        ease: c.Power1.easeInOut
      });
      u.TweenMax.fromTo(o, 0.25, {
        x: InviteAFriendInstructionsDialog.pageWidth * i
      }, {
        x: 0,
        onComplete: this.onTweenComplete(t, true),
        ease: c.Power1.easeInOut
      });
    }
  };
  InviteAFriendInstructionsDialog.prototype.onTweenComplete = function (e, t) {
    var i = this.page_mcs[e];
    if (t) {
      return function (e = null) {
        i.visible = true;
      };
    } else {
      return function (e = null) {
        i.visible = false;
      };
    }
  };
  Object.defineProperty(InviteAFriendInstructionsDialog.prototype, "dialogProperties", {
    get: function () {
      if (this.properties == null) {
        this.properties = new E.InviteAFriendInstructionsProperties();
      }
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  InviteAFriendInstructionsDialog.__initialize_static_members = function () {
    InviteAFriendInstructionsDialog.NAME = "InviteAFriendInstructions";
    InviteAFriendInstructionsDialog.PAGE_NUMBER_FACEBOOK = 3;
    InviteAFriendInstructionsDialog.PAGE_NUMBER_EMAIL = 4;
    InviteAFriendInstructionsDialog.PAGE_NUMBER_LINK = 5;
    InviteAFriendInstructionsDialog.rewardReplacements = [[5, 30], [10, 30], [1, 40], [5, 40]];
    InviteAFriendInstructionsDialog.header_txt_id = "dialog_referFriend_instructions_header";
    InviteAFriendInstructionsDialog.page_txt_id = "dialog_referFriend_instructions_page_";
    InviteAFriendInstructionsDialog.page_txt_ids = [1, 2, 8, 9, 3, 4, 5, 6, 7];
    InviteAFriendInstructionsDialog.PAGE_COUNT = 9;
    InviteAFriendInstructionsDialog.pageWidth = 664;
    InviteAFriendInstructionsDialog.pageHeight = 438;
    InviteAFriendInstructionsDialog.AMOUNT_OF_FRIENDS = 5;
  };
  return InviteAFriendInstructionsDialog;
}(O.CastleExternalDialog);
exports.InviteAFriendInstructionsDialog = y;
var b = require("./75.js");
var D = require("./434.js");
var I = require("./25.js");
var T = require("./1420.js");
var v = require("./1421.js");
var S = require("./1424.js");
s.classImplementsInterfaces(y, "ICollectableRendererList", "IPaginationContainer", "IPaginationArrowsContainer");
y.__initialize_static_members();