Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./4.js");
var c = require("./819.js");
var u = require("./8.js");
var d = function (e) {
  function CastleEilandRankingDialogRules(t) {
    var i = this;
    i._currentPage = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).pages = i.initPages();
    i.initBasicButtons([i.sublayerDisp.btn_arrowLeft, i.sublayerDisp.btn_arrowRight]);
    return i;
  }
  n.__extends(CastleEilandRankingDialogRules, e);
  CastleEilandRankingDialogRules.prototype.initPages = function () {
    var e = [];
    for (var t = CastleEilandRankingDialogRules.MIN_PAGE + 1; t <= CastleEilandRankingDialogRules.MAX_PAGE + 1; t++) {
      var i = this.sublayerDisp["page" + t];
      i.visible = false;
      e.push(i);
    }
    return e;
  };
  CastleEilandRankingDialogRules.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.itxt_pageIndicator = this.textFieldManager.registerTextField(this.sublayerDisp.txt_page, new s.LocalizedTextVO(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [CastleEilandRankingDialogRules.MIN_PAGE + 1, CastleEilandRankingDialogRules.MAX_PAGE + 1]));
    u.ButtonHelper.enableButton(this.sublayerDisp.btn_arrowLeft, this.scroll(CastleEilandRankingDialogRules.MIN_PAGE));
    u.ButtonHelper.enableButton(this.sublayerDisp.btn_arrowRight, true);
  };
  CastleEilandRankingDialogRules.prototype.onClick = function (e) {
    if (u.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.sublayerDisp.btn_arrowRight:
          u.ButtonHelper.enableButton(this.sublayerDisp.btn_arrowRight, this.scroll(this._currentPage + CastleEilandRankingDialogRules.SCROLL_RIGHT));
          u.ButtonHelper.enableButton(this.sublayerDisp.btn_arrowLeft, CastleEilandRankingDialogRules.MIN_PAGE != CastleEilandRankingDialogRules.MAX_PAGE);
          break;
        case this.sublayerDisp.btn_arrowLeft:
          u.ButtonHelper.enableButton(this.sublayerDisp.btn_arrowLeft, this.scroll(this._currentPage + CastleEilandRankingDialogRules.SCROLL_LEFT));
          u.ButtonHelper.enableButton(this.sublayerDisp.btn_arrowRight, CastleEilandRankingDialogRules.MIN_PAGE != CastleEilandRankingDialogRules.MAX_PAGE);
      }
    }
  };
  CastleEilandRankingDialogRules.prototype.scroll = function (e) {
    this.currentPage = e;
    return this.currentPage != CastleEilandRankingDialogRules.MIN_PAGE && this.currentPage != CastleEilandRankingDialogRules.MAX_PAGE;
  };
  Object.defineProperty(CastleEilandRankingDialogRules.prototype, "sublayerDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandRankingDialogRules.prototype, "currentPage", {
    get: function () {
      return this._currentPage;
    },
    set: function (e) {
      this.pages[this._currentPage].visible = false;
      this._currentPage = e;
      this.pages[this._currentPage].visible = true;
      this.itxt_pageIndicator.textContentVO.textReplacements = [this._currentPage + 1, CastleEilandRankingDialogRules.MAX_PAGE + 1];
      switch (e) {
        case 0:
          this.textFieldManager.registerTextField(this.pages[e].txt_title, new s.LocalizedTextVO("dialog_eiland_manual_page1_header"));
          this.textFieldManager.registerTextField(this.pages[e].txt_1, new s.LocalizedTextVO("dialog_eiland_manual_page1_textbox1"));
          this.textFieldManager.registerTextField(this.pages[e].txt_2, new s.LocalizedTextVO("dialog_eiland_manual_page1_textbox2"));
          this.textFieldManager.registerTextField(this.pages[e].txt_3, new s.LocalizedTextVO("dialog_eiland_manual_page1_textbox3"));
          break;
        case 1:
          this.textFieldManager.registerTextField(this.pages[e].txt_title, new s.LocalizedTextVO("dialog_eiland_manual_page2_header"));
          this.textFieldManager.registerTextField(this.pages[e].txt_1, new s.LocalizedTextVO("dialog_eiland_manual_page2_textbox1"));
          this.textFieldManager.registerTextField(this.pages[e].txt_2, new s.LocalizedTextVO("dialog_eiland_manual_page2_textbox2"));
          break;
        case 2:
          this.textFieldManager.registerTextField(this.pages[e].txt_title, new s.LocalizedTextVO("dialog_eiland_manual_page3_header"));
          this.textFieldManager.registerTextField(this.pages[e].txt_1, new s.LocalizedTextVO("dialog_eiland_manual_page3_textbox"));
          break;
        case 3:
          this.textFieldManager.registerTextField(this.pages[e].txt_1, new s.LocalizedTextVO("dialog_eiland_manual_page4_textbox"));
          break;
        case 4:
          this.textFieldManager.registerTextField(this.pages[e].txt_1, new s.LocalizedTextVO("dialog_eiland_manual_page5_textbox"));
          break;
        case 5:
          this.textFieldManager.registerTextField(this.pages[e].txt_1, new s.LocalizedTextVO("dialog_eiland_manual_page6_textbox1"));
          this.textFieldManager.registerTextField(this.pages[e].txt_2, new s.LocalizedTextVO("dialog_eiland_manual_page6_textbox2"));
          break;
        case 6:
          this.textFieldManager.registerTextField(this.pages[e].txt_1, new s.LocalizedTextVO("dialog_eiland_manual_page7_textbox2"));
          this.textFieldManager.registerTextField(this.pages[e].txt_2, new s.LocalizedTextVO("dialog_eiland_manual_page7_textbox3"));
          var t = l.CastleModel.titleData.getTitleByTitleID(52);
          var i = l.CastleModel.titleData.getTitleByTitleID(57);
          this.textFieldManager.registerTextField(this.pages[e].txt_title_positive, new s.LocalizedTextVO(t.textID));
          this.textFieldManager.registerTextField(this.pages[e].txt_title_negative, new s.LocalizedTextVO(i.textID));
          this.textFieldManager.registerTextField(this.pages[e].txt_bonus_1, new r.TextVO(c.CastleEilandTextComposer.generateBonusText(t)));
          this.textFieldManager.registerTextField(this.pages[e].txt_bonus_2, new r.TextVO(c.CastleEilandTextComposer.generateBonusText(i)));
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleEilandRankingDialogRules.__initialize_static_members = function () {
    CastleEilandRankingDialogRules.MIN_PAGE = 0;
    CastleEilandRankingDialogRules.MAX_PAGE = 6;
    CastleEilandRankingDialogRules.SCROLL_RIGHT = 1;
  };
  CastleEilandRankingDialogRules.SCROLL_LEFT = -1;
  return CastleEilandRankingDialogRules;
}(require("./34.js").CastleDialogSubLayer);
exports.CastleEilandRankingDialogRules = d;
a.classImplementsInterfaces(d, "ICollectableRendererList", "ISublayer");
d.__initialize_static_members();