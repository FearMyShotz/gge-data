Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./1254.js");
var c = require("./4.js");
var u = require("./20.js");
var d = require("./95.js");
var p = require("./47.js");
var h = require("./59.js");
var g = require("./8.js");
var C = require("./11.js");
var _ = function (e) {
  function GeneralIntroductionCinematicsPlaylistDialog() {
    return e.call(this, GeneralIntroductionCinematicsPlaylistDialog.NAME) || this;
  }
  n.__extends(GeneralIntroductionCinematicsPlaylistDialog, e);
  GeneralIntroductionCinematicsPlaylistDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    g.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close], u.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("dialog_generals_inn_cinematics_header_desc"));
    var i = new p.SimpleScrollVO().initByParent(this.dialogDisp).addSliderBackground(this.dialogDisp.mc_sliderBG).addMouseWheelElements([this.dialogDisp]);
    var n = new h.DynamicSizeScrollStrategyVertical(false, this.dialogDisp.mc_list.mask.height, true);
    this._scrollComponent = new d.SimpleScrollComponent(i, n);
    this._scrollY = this.dialogDisp.mc_list.y;
  };
  GeneralIntroductionCinematicsPlaylistDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.createPlaylist();
    var i = this.dialogDisp.mc_list.height;
    var n = Math.max(0, i - this.dialogDisp.mc_list.mask.height);
    this._scrollComponent.init(0, n, 110, 110);
    this._scrollComponent.scrollToValue(0);
    this._scrollComponent.show();
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  GeneralIntroductionCinematicsPlaylistDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this._scrollComponent.hide();
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
  };
  GeneralIntroductionCinematicsPlaylistDialog.prototype.createPlaylist = function () {
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_list);
    var e = 0;
    for (var t = 0, i = this.getAvailableCinematics(); t < i.length; t++) {
      var n = i[t];
      var r = new (a.getDefinitionByName("GeneralIntroductionCinematicsPlaylist_Item"))();
      var l = new (a.getDefinitionByName("GeneralIntroductionCinematics_Thumbnail_" + n.id))();
      this.dialogDisp.mc_list.addChild(r);
      this.textFieldManager.registerTextField(r.txt_title, new s.LocalizedTextVO(n.title));
      this.textFieldManager.registerTextField(r.txt_desc, new s.LocalizedTextVO(n.description));
      this.textFieldManager.registerTextField(r.txt_length, new s.LocalizedTextVO(n.length));
      g.ButtonHelper.initButton(r, 1, u.ClickFeedbackButtonHover);
      r.mc_thumbnail.addChild(l);
      r.cinematicVO = n;
      r.y = e;
      e = e + r.height + 3;
    }
  };
  GeneralIntroductionCinematicsPlaylistDialog.prototype.onScroll = function () {
    this.dialogDisp.mc_list.y = this._scrollY - this._scrollComponent.currentValue;
  };
  GeneralIntroductionCinematicsPlaylistDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        C.CastleExternalDialog.dialogHandler.showHelper("", r.Localize.text("help_generals_inn_cinematics_header_desc"));
    }
    if (t.target && t.target.cinematicVO) {
      l.CinematicController.getInstance().playCinematic(t.target.cinematicVO);
    }
  };
  GeneralIntroductionCinematicsPlaylistDialog.prototype.getAvailableCinematics = function () {
    return c.CastleModel.generalsIntroductionData.getAvailableCinematics();
  };
  GeneralIntroductionCinematicsPlaylistDialog.NAME = "GeneralIntroductionCinematicsPlaylistExt";
  return GeneralIntroductionCinematicsPlaylistDialog;
}(C.CastleExternalDialog);
exports.GeneralIntroductionCinematicsPlaylistDialog = _;