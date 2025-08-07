Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./188.js");
var l = require("./278.js");
var c = require("./4.js");
var u = require("./8.js");
var d = require("./11.js");
var p = require("./951.js");
var h = require("./2439.js");
var g = createjs.Event;
var C = createjs.Point;
var _ = function (e) {
  function CastleTitleMainDialog() {
    var t = this;
    t.sublayerSystemMap = new Map();
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleTitleMainDialog.NAME) || this;
  }
  n.__extends(CastleTitleMainDialog, e);
  CastleTitleMainDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close]);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
  };
  CastleTitleMainDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    var i = this.sublayerSwitcher;
    var n = this.sublayerSystemMap;
    var a = this.checkAvailableSystems();
    if (i) {
      i.hide();
    }
    this.sublayerSwitcher = new l.SublayerSwitcher(this.bindFunction(this.createProperties));
    this.sublayerSystemMap = new Map();
    for (var s = 0; s < a.length; s++) {
      var r = a[s];
      this.sublayerSystemMap.set(r, s);
      this.sublayerSystemMap.set(s, r);
      var c = this.dialogDisp["tab_" + s];
      c.visible = a.length > 1;
      o.MovieClipHelper.clearMovieClip(c.mc_systemIcon);
      m.CastleTitleSystemHelper.setTitleSystemIcon(c.mc_systemIcon, r, new C(40, 40));
      c.toolTipText = m.CastleTitleSystemHelper.getTitleSystemTextID(r);
      c.addEventListener(g.ENTER_FRAME, this.bindFunction(this.onEnterTabFrame));
      this.sublayerSwitcher.add(s, c, this.getSublayerObject(r, i, n));
    }
    this.sublayerSwitcher.switchTo(this.sublayerSystemMap.get(this.dialogProperties.titleSystem));
    this.sublayerSwitcher.show();
  };
  CastleTitleMainDialog.prototype.onEnterTabFrame = function (e) {
    var t = this.sublayerSystemMap.get(s.int(e.target.name.split("_")[1]));
    m.CastleTitleSystemHelper.setTitleSystemIcon(e.target.mc_systemIcon, t, new C(40, 40));
    e.target.removeEventListener(g.ENTER_FRAME, this.bindFunction(this.onEnterTabFrame));
  };
  CastleTitleMainDialog.prototype.checkAvailableSystems = function () {
    var e = [];
    for (var t = 0; t < CastleTitleMainDialog.TITLESYSTEMS.length; t++) {
      var i = CastleTitleMainDialog.TITLESYSTEMS[t];
      if (c.CastleModel.titleData.isSystemAvailable(i)) {
        e.push(i);
      }
      this.dialogDisp["tab_" + t].visible = false;
    }
    return e;
  };
  CastleTitleMainDialog.prototype.createProperties = function (e) {
    switch (this.sublayerSystemMap.get(e)) {
      case r.ClientConstTitle.GLORY_TITLE:
        return new h.CastleTitleSublayerPropertiesFAME();
      case r.ClientConstTitle.BRAVERY_TITLE:
        return new p.CastleTitleSublayerFactionProperties();
      default:
        return new h.CastleTitleSublayerPropertiesFAME();
    }
  };
  CastleTitleMainDialog.prototype.getSublayerObject = function (e, t, i) {
    if (t && i && i.get(e) != null) {
      return t.getInfo(s.int(i.get(e))).sublayer;
    } else {
      return new f.CastleTitleSublayer(this.dialogDisp.sublayer);
    }
  };
  CastleTitleMainDialog.prototype.onClick = function (e) {
    if (u.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          this.sublayerSwitcher.showHelp();
      }
    }
  };
  CastleTitleMainDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.sublayerSwitcher.hide();
    for (var i = 0; i < CastleTitleMainDialog.TITLESYSTEMS.length; i++) {
      this.dialogDisp["tab_" + i].removeEventListener(g.ENTER_FRAME, this.bindFunction(this.onEnterTabFrame));
    }
  };
  Object.defineProperty(CastleTitleMainDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTitleMainDialog.__initialize_static_members = function () {
    CastleTitleMainDialog.TITLESYSTEMS = [r.ClientConstTitle.GLORY_TITLE, r.ClientConstTitle.BRAVERY_TITLE];
    CastleTitleMainDialog.NAME = "CastleTitleMain";
  };
  return CastleTitleMainDialog;
}(d.CastleExternalDialog);
exports.CastleTitleMainDialog = _;
var m = require("./117.js");
var f = require("./1371.js");
a.classImplementsInterfaces(_, "ICollectableRendererList");
_.__initialize_static_members();