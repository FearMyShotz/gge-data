Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./429.js");
var u = require("./24.js");
var d = require("./8.js");
var p = function (e) {
  function FactionEventIntroductionSublayer(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).pagination = new c.Pagination(i, FactionEventIntroductionSublayer.PAGES);
    i.externalClip = new u.CastleGoodgameExternalClip("FactionEventDlgInstructions", o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("FactionEventDlgInstructions"), null, 0, false);
    i.initBasicButtons([t.mc_pagination.btn_left, t.mc_pagination.btn_right]);
    i.textFieldManager.registerTextField(t.txt_header, new l.LocalizedTextVO("dialog_faction_tutorial_header"));
    i.itxt_pagination = i.textFieldManager.registerTextField(t.mc_pagination.txt_page, new l.LocalizedTextVO(a.GenericTextIds.VALUE_PROPORTIONAL_VALUE));
    return i;
  }
  n.__extends(FactionEventIntroductionSublayer, e);
  FactionEventIntroductionSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.loadPages();
    this.updatePageDisplay();
    this.updatePagination();
  };
  FactionEventIntroductionSublayer.prototype.onClick = function (e) {
    if (d.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.subLayerDisp.mc_pagination.btn_left:
          this.pagination.scrollLeft();
          break;
        case this.subLayerDisp.mc_pagination.btn_right:
          this.pagination.scrollRight();
      }
    }
  };
  FactionEventIntroductionSublayer.prototype.loadPages = function () {
    if (this.externalClip.isLoaded) {
      this.onPagesLoaded(this.externalClip);
    } else {
      this.externalClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.onPagesLoaded));
    }
  };
  FactionEventIntroductionSublayer.prototype.onPagesLoaded = function (e) {
    var t = this.externalClip.currentshownDisplayObject;
    s.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_pages);
    this.subLayerDisp.mc_pages.addChild(this.externalClip.currentshownDisplayObject);
    this.textFieldManager.registerTextField(t.page0.txt_desc0, new l.LocalizedTextVO("dialog_faction_tutorial_slide1_copy1"));
    this.textFieldManager.registerTextField(t.page0.txt_desc1, new l.LocalizedTextVO("dialog_faction_tutorial_slide1_copy2"));
    this.textFieldManager.registerTextField(t.page0.txt_desc2, new l.LocalizedTextVO("dialog_faction_tutorial_slide1_copy3"));
    this.textFieldManager.registerTextField(t.page1.txt_desc0, new l.LocalizedTextVO("dialog_faction_tutorial_slide2_copy1"));
    this.textFieldManager.registerTextField(t.page1.txt_desc1, new l.LocalizedTextVO("dialog_faction_tutorial_slide2_copy2"));
    this.textFieldManager.registerTextField(t.page2.txt_desc0, new l.LocalizedTextVO("dialog_faction_tutorial_slide3_copy1"));
    this.textFieldManager.registerTextField(t.page2.txt_desc1, new l.LocalizedTextVO("dialog_faction_tutorial_slide3_copy2"));
    this.textFieldManager.registerTextField(t.page3.txt_desc0, new l.LocalizedTextVO("dialog_faction_tutorial_slide4_copy1"));
    this.textFieldManager.registerTextField(t.page4.txt_header, new l.LocalizedTextVO("dialog_faction_tutorial_slide5_header"));
    this.textFieldManager.registerTextField(t.page5.txt_header, new l.LocalizedTextVO("dialog_faction_tutorial_slide6_header"));
    this.textFieldManager.registerTextField(t.page5.txt_desc0, new l.LocalizedTextVO("dialog_faction_tutorial_slide6_copy1"));
    this.textFieldManager.registerTextField(t.page5.txt_desc1, new l.LocalizedTextVO("dialog_faction_tutorial_slide6_copy2"));
  };
  FactionEventIntroductionSublayer.prototype.updatePages = function (e, t) {
    this.updatePageDisplay();
    this.updatePagination();
  };
  FactionEventIntroductionSublayer.prototype.updatePageDisplay = function () {
    var e = this.externalClip.currentshownDisplayObject;
    if (e) {
      for (var t = 0; t < FactionEventIntroductionSublayer.PAGES; ++t) {
        e["page" + t].visible = this.pagination.currentPageIndex == t;
      }
    }
  };
  FactionEventIntroductionSublayer.prototype.updatePagination = function () {
    this.subLayerDisp.mc_pagination.btn_left.visible = this.pagination.canScrollLeft();
    this.subLayerDisp.mc_pagination.btn_right.visible = this.pagination.canScrollRight();
    this.itxt_pagination.textContentVO.textReplacements = [this.pagination.currentPage, FactionEventIntroductionSublayer.PAGES];
  };
  FactionEventIntroductionSublayer.__initialize_static_members = function () {
    FactionEventIntroductionSublayer.PAGES = 6;
  };
  return FactionEventIntroductionSublayer;
}(require("./35.js").CastleDialogSubLayer);
exports.FactionEventIntroductionSublayer = p;
r.classImplementsInterfaces(p, "ICollectableRendererList", "ISublayer", "IPaginationContainer");
p.__initialize_static_members();