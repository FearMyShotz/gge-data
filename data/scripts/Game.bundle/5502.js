Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./31.js");
var p = require("./19.js");
var h = require("./11.js");
var g = createjs.Point;
var C = function (e) {
  function CastleNewServerAnnounceDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleNewServerAnnounceDialog.NAME) || this;
  }
  n.__extends(CastleNewServerAnnounceDialog, e);
  CastleNewServerAnnounceDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.LocalizedTextVO("mail_newServer_header"));
  };
  CastleNewServerAnnounceDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    var i = o.BasicModel.instanceProxy;
    var n = this.getServerName(i.selectedInstanceVO);
    var a = this.getServerName(i.getInstanceVOByZoneID(this.dialogProperties.zoneId));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc2, new c.LocalizedTextVO("mail_newServer_desc2", [a]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_instructions, new c.LocalizedTextVO("mail_newServer_instructions", [a]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc3, new c.LocalizedTextVO("mail_newServer_desc3", [n]));
    var s = new _.CollectableItemBuildingVO(this.dialogProperties.wodId);
    var r = new d.CollectableRenderClips(this.dialogDisp.mc_reward);
    m.CollectableRenderHelper.displaySingleItemComplete(this, r, s, new p.CollectableRenderOptions(p.CollectableRenderOptions.SET_ADVANCED, new g(80, 87)));
    this.dialogDisp.mc_reward.mouseChildren = true;
    if (this.dialogProperties.url) {
      this.displayLink();
    } else {
      this.dialogProperties.onLinkReceived.addOnce(this.bindFunction(this.displayLink));
    }
  };
  CastleNewServerAnnounceDialog.prototype.getServerName = function (e) {
    if (e) {
      if (e.instanceLocaId) {
        return l.Localize.text(e.instanceLocaId) + e.instanceCountID;
      } else {
        return l.Localize.text(e.instanceLocaId);
      }
    } else {
      return "[New server name will be here, hopefully]";
    }
  };
  CastleNewServerAnnounceDialog.prototype.displayLink = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_link, new u.TextVO(this.dialogProperties.url));
  };
  CastleNewServerAnnounceDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancel:
      case this.dialogDisp.btn_ok:
        this.hide();
        break;
      case this.dialogDisp.txt_link:
        this.goToURL();
    }
  };
  CastleNewServerAnnounceDialog.prototype.goToURL = function () {
    r.navigateToURL(new a.URLRequest(this.dialogProperties.url), "_blank");
  };
  Object.defineProperty(CastleNewServerAnnounceDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleNewServerAnnounceDialog.__initialize_static_members = function () {
    CastleNewServerAnnounceDialog.NAME = "CastleNewServerAnnounceDialog";
  };
  return CastleNewServerAnnounceDialog;
}(h.CastleExternalDialog);
exports.CastleNewServerAnnounceDialog = C;
var _ = require("./291.js");
var m = require("./25.js");
s.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();