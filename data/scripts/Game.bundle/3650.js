Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./4.js");
var c = require("./8.js");
var u = function (e) {
  function CastleKongregateRatingDialog() {
    var t = this;
    t.starsVoted = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleKongregateRatingDialog.NAME) || this;
  }
  n.__extends(CastleKongregateRatingDialog, e);
  CastleKongregateRatingDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_cancel]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO("dialog_rateEmpire_header")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO("dialog_rateEmpire_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rating, new r.LocalizedTextVO(""));
    this.highlightButtons(0);
    this.dialogDisp.star_0.mouseChildren = false;
    this.dialogDisp.star_1.mouseChildren = false;
    this.dialogDisp.star_2.mouseChildren = false;
    this.dialogDisp.star_3.mouseChildren = false;
    this.dialogDisp.star_4.mouseChildren = false;
    c.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
  };
  CastleKongregateRatingDialog.prototype.highlightButtons = function (e) {
    for (var t = 0; t < e; t++) {
      this.dialogDisp["star_" + t].mc_highlight.visible = true;
    }
    for (var i = e; i < CastleKongregateRatingDialog.STARCOUNT; i++) {
      this.dialogDisp["star_" + i].mc_highlight.visible = false;
    }
  };
  CastleKongregateRatingDialog.prototype.selectButtons = function (e) {
    this.starsVoted = e;
    if (e > 0) {
      c.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
    }
    for (var t = e; t < CastleKongregateRatingDialog.STARCOUNT; t++) {
      this.dialogDisp["star_" + t].gotoAndStop(CastleKongregateRatingDialog.FRAME_UNSELECT);
    }
    for (var i = 0; i < e; i++) {
      this.dialogDisp["star_" + i].gotoAndStop(CastleKongregateRatingDialog.FRAME_SELECT);
    }
  };
  CastleKongregateRatingDialog.prototype.onMouseOver = function (e) {
    switch (e.target) {
      case this.dialogDisp.star_0:
        this.highlightButtons(1);
        break;
      case this.dialogDisp.star_1:
        this.highlightButtons(2);
        break;
      case this.dialogDisp.star_2:
        this.highlightButtons(3);
        break;
      case this.dialogDisp.star_3:
        this.highlightButtons(4);
        break;
      case this.dialogDisp.star_4:
        this.highlightButtons(5);
        break;
      case this.dialogDisp.mc_hitArea:
        this.highlightButtons(0);
    }
  };
  CastleKongregateRatingDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.star_0:
        this.selectButtons(1);
        break;
      case this.dialogDisp.star_1:
        this.selectButtons(2);
        break;
      case this.dialogDisp.star_2:
        this.selectButtons(3);
        break;
      case this.dialogDisp.star_3:
        this.selectButtons(4);
        break;
      case this.dialogDisp.star_4:
        this.selectButtons(5);
        break;
      case this.dialogDisp.btn_ok:
        if (!this.dialogDisp.btn_ok.enabled) {
          break;
        }
        if (this.starsVoted == 5) {
          d.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleKongregateNotificationDialog);
        } else {
          d.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties("", s.Localize.text("dialog_rateEmpire_sucess_Failed")));
        }
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancel:
        l.CastleModel.privateOfferData.sendOfferQuestAccept(this.dialogProperties.offerVO.id, this.starsVoted);
        this.hide();
    }
  };
  Object.defineProperty(CastleKongregateRatingDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleKongregateRatingDialog.__initialize_static_members = function () {
    CastleKongregateRatingDialog.NAME = "CastleKongregateRating";
    CastleKongregateRatingDialog.STARCOUNT = 5;
    CastleKongregateRatingDialog.FRAME_UNSELECT = 1;
    CastleKongregateRatingDialog.FRAME_SELECT = 2;
  };
  return CastleKongregateRatingDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleKongregateRatingDialog = u;
var d = require("./9.js");
var p = require("./38.js");
var h = require("./1744.js");
a.classImplementsInterfaces(u, "ICollectableRendererList");
u.__initialize_static_members();