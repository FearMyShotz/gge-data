Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./23.js");
var c = require("./23.js");
var u = require("./4.js");
var d = require("./415.js");
var p = createjs.Point;
var h = function (e) {
  function InfoTooltipExpansion() {
    var t = this;
    CONSTRUCTOR_HACK;
    (t = e.call(this, new Library.CastleInterfaceElements.ExpansionTooltip()) || this).infoToolTip.mouseChildren = false;
    t.infoToolTip.mouseEnabled = false;
    t.iCostC1Txt = t.textFieldManager.registerTextField(t.infoToolTip.txt_textCost, new s.LocalizedTextVO("cost"));
    t.iCostC2Txt = t.textFieldManager.registerTextField(t.infoToolTip.txt_textCostPremium, new s.LocalizedTextVO("cost"));
    return t;
  }
  n.__extends(InfoTooltipExpansion, e);
  InfoTooltipExpansion.prototype.updateMenuPosition = function () {
    if (this._target && this._target.uiPos && this._target.uiDisp && this._target.uiDisp.stage) {
      var e = this._target.uiDisp.localToGlobal(new p(this._target.uiDisp.stage.x + this._target.uiDisp.width / 2, this._target.uiDisp.stage.y + this._target.uiDisp.height / 2));
      this.disp.x = e.x;
      this.disp.y = e.y;
    } else {
      this.hide();
    }
  };
  InfoTooltipExpansion.prototype.initComponent = function () {
    var e = 0;
    if (this.targetExpansionVO) {
      var t;
      if (o.getQualifiedClassName(this._target.uiDisp).indexOf("ExpandArrow_Normal_") >= 0) {
        this.iCostC1Txt.visible = true;
        this.iCostC2Txt.visible = false;
        if (this.targetExpansionVO.isSceatLocked) {
          this.textFieldManager.registerTextField(this.infoToolTip.txt_name, new s.LocalizedTextVO("dialog_needLegendTemple_skill_header"));
        } else if (this.targetExpansionVO.userHasLevelForBuyNormal) {
          if (this.targetExpansionVO.userHasResourcesForBuy) {
            this.textFieldManager.registerTextField(this.infoToolTip.txt_name, new s.LocalizedTextVO("expansion_buy"));
          } else {
            this.textFieldManager.registerTextField(this.infoToolTip.txt_name, new s.LocalizedTextVO("expansion_notEnoughResources"));
          }
        } else {
          e = r.int(a.ConstructionConst.getExpandLevelForResources(_.Iso.data.objects.groundObjects.expansionAmount + 1));
          this.textFieldManager.registerTextField(this.infoToolTip.txt_name, new s.LocalizedTextVO("expansion_higherLevelNeeded", [e]));
        }
        t = u.CastleModel.expansionCostsData.getExpandCostNormal();
        m.CostHelper.initAsCosts(t, this.infoToolTip);
      } else {
        this.iCostC2Txt.visible = true;
        this.iCostC1Txt.visible = false;
        if (this.targetExpansionVO.userHasLevelForBuyPremium) {
          this.textFieldManager.registerTextField(this.infoToolTip.txt_name, new s.LocalizedTextVO("expansion_buyPremium"));
        } else {
          e = r.int(a.ConstructionConst.getExpandLevelForC2(_.Iso.data.objects.groundObjects.expansionAmount + 1));
          this.textFieldManager.registerTextField(this.infoToolTip.txt_name, new s.LocalizedTextVO("expansion_higherLevelNeeded", [e]));
        }
        var i = r.int(u.CastleModel.costsData.getFinalCostsC2(u.CastleModel.expansionCostsData.getExpandCostC2()));
        t = g.CollectableManager.parser.createGoodsListSave(new C.CollectableItemC2VO(i));
        m.CostHelper.initAsCosts(t, this.infoToolTip);
      }
      c.TweenMax.fromTo(this.infoToolTip, 0.2, {
        alpha: 0
      }, {
        alpha: 1,
        ease: l.Linear.easeIn
      });
    }
  };
  Object.defineProperty(InfoTooltipExpansion.prototype, "worldLayer", {
    get: function () {
      return _.Iso.renderer.layers.transformLayer;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.BasicIngameUIComponent.prototype, "worldLayer").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfoTooltipExpansion.prototype, "infoToolTip", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfoTooltipExpansion.prototype, "targetExpansionVO", {
    get: function () {
      return this._target.expansionVO;
    },
    enumerable: true,
    configurable: true
  });
  InfoTooltipExpansion.__initialize_static_members = function () {
    InfoTooltipExpansion.NAME = "InfoTooltipExpansion";
  };
  return InfoTooltipExpansion;
}(d.BasicIngameUIComponent);
exports.InfoTooltipExpansion = h;
var g = require("./50.js");
var C = require("./128.js");
var _ = require("./33.js");
var m = require("./66.js");
h.__initialize_static_members();