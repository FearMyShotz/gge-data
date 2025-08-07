Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./3.js");
var s = require("./18.js");
var r = require("./4.js");
var l = require("./24.js");
var c = function (e) {
  function CastleRelocatePanel() {
    var t = this;
    t.ASSET_NAME = "CastleRelocatePanel";
    CONSTRUCTOR_HACK;
    (t = e.call(this, new l.CastleGoodgameExternalClip("CastleRelocatePanel", o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CastleRelocatePanel.NAME), null, 0, false)) || this)._screenClip = t.disp;
    if (t.externalClip.isLoaded) {
      t.initAfterLoaded(t.externalClip);
    } else {
      t.externalClip.clipLoaded.addOnce(t.bindFunction(t.initAfterLoaded));
    }
    return t;
  }
  n.__extends(CastleRelocatePanel, e);
  Object.defineProperty(CastleRelocatePanel.prototype, "externalClip", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleRelocatePanel.prototype.initAfterLoaded = function (e = null) {
    var t = this.panelDisp.txt_title;
    var i = this.panelDisp.txt_desc;
    this.textFieldManager.registerTextField(t, new a.LocalizedTextVO("panel_relocate_title"));
    this.textFieldManager.registerTextField(i, new a.LocalizedTextVO("panel_relocate_desc"));
  };
  CastleRelocatePanel.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.panelDisp.btn_cancel:
        r.CastleModel.worldmapData ||= r.CastleModel.addModel(r.CastleModel.worldmapData = new u.CastleWorldmapData());
        this.layoutManager.state = d.CastleLayoutManager.STATE_WORLDMAP;
        this.layoutManager.worldmapScreen.renderer.camera.centerArea(r.CastleModel.userData.castleList.getHomeCastle().absAreaPos);
    }
  };
  CastleRelocatePanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      this.disp.getBounds(null);
      this.disp.y = this.disp.stage.stageHeight;
      this.disp.x = this.disp.stage.stageWidth / 2;
      if (this.env.hasNetworkBuddies) {
        this.disp.y -= s.ClientConstCastle.BUDDY_PANEL_HEIGHT;
      }
    }
  };
  Object.defineProperty(CastleRelocatePanel.prototype, "panelDisp", {
    get: function () {
      return this._screenClip.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  CastleRelocatePanel.NAME = "CastleRelocatePanel";
  return CastleRelocatePanel;
}(require("./131.js").CastlePanel);
exports.CastleRelocatePanel = c;
var u = require("./502.js");
var d = require("./17.js");