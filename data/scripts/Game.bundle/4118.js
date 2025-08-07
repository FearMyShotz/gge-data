Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./18.js");
var c = require("./39.js");
var u = require("./159.js");
var d = require("./37.js");
var p = require("./4.js");
var h = require("./89.js");
var g = function (e) {
  function ResearchPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ResearchPanelButton, e);
  ResearchPanelButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this.listenOnXPChanged();
  };
  ResearchPanelButton.prototype.removeEventListener = function () {
    O.CastleComponent.controller.removeEventListener(d.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onJoinMainCastle));
    e.prototype.removeEventListener.call(this);
  };
  Object.defineProperty(ResearchPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_Research;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ResearchPanelButton.prototype.isButtonEnabled = function () {
    if (p.CastleModel.tutorialData.isTutorialActive) {
      return false;
    }
    var e = p.CastleModel.wodData.createVObyWOD(l.ClientConstCastle.WID_RESEARCH_TOWER, f.CastleWodData.TYPE_BUILDING);
    return p.CastleModel.userData.userLevel >= e.requiredLevel;
  };
  ResearchPanelButton.prototype.getButtonTooltip = function () {
    var e = p.CastleModel.wodData.createVObyWOD(l.ClientConstCastle.WID_RESEARCH_TOWER, f.CastleWodData.TYPE_BUILDING);
    if (this.isButtonEnabled()) {
      return "research";
    } else {
      return r.Localize.text("research") + ": " + r.Localize.text(c.ClientConstTextIds.LEVEL_NEEDED, [e.requiredLevel]);
    }
  };
  ResearchPanelButton.prototype.onButtonClicked = function () {
    if (p.CastleModel.researchData.isResearchTowerBuilt) {
      O.CastleComponent.dialogHandler.registerDefaultDialogs(y.CastleResearchDialog);
    } else if (O.CastleComponent.layoutManager.isInMyCastle && p.CastleModel.areaData.activeArea.isMyMainCastle && p.CastleModel.kingdomData.activeKingdomID == s.WorldClassic.KINGDOM_ID) {
      this.onJoinMainCastle(null);
    } else {
      O.CastleComponent.controller.addEventListener(d.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onJoinMainCastle));
      p.CastleModel.smartfoxClient.sendCommandVO(new u.C2SJoinCastleVO(p.CastleModel.userData.castleList.getHomeCastle().objectId, s.WorldClassic.KINGDOM_ID));
    }
  };
  ResearchPanelButton.prototype.onJoinMainCastle = function (e) {
    O.CastleComponent.controller.removeEventListener(d.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onJoinMainCastle));
    var t = C.castAs(_.Iso.renderer.objects.provider.getObjectByType(m.IsoObjectEnum.RESEARCH_TOWER), "ABasicBuildingVE");
    if (t) {
      _.Iso.renderer.camera.scrollToGridPos(t.vo.pos);
      _.Iso.renderer.mouse.changeSelectedTarget(t);
    } else {
      _.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
      var i = O.CastleComponent.layoutManager.getPanel(b.CastleDecoShopPanel);
      var n = p.CastleModel.wodData.getBuildingVOById(l.ClientConstCastle.RESEARCH_BUILDING_WOD_LEVEL1);
      if (!i.centerAndHighlightBuildingInShop(n)) {
        O.CastleComponent.dialogHandler.registerDefaultDialogs(E.CastleStandardOkDialog, new a.BasicStandardOkDialogProperties(r.Localize.text("dialog_primeday_primesale_warningTitle"), r.Localize.text("dialog_primeday_primesale_warning")));
      }
    }
  };
  return ResearchPanelButton;
}(h.APanelButton);
exports.ResearchPanelButton = g;
var C = require("./1.js");
o.classImplementsInterfaces(g, "ICollectableRendererList");
var _ = require("./34.js");
var m = require("./80.js");
var f = require("./56.js");
var O = require("./14.js");
var E = require("./38.js");
var y = require("./450.js");
var b = require("./260.js");