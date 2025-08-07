Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./23.js");
var d = require("./23.js");
var p = require("./19.js");
var h = require("./13.js");
var g = require("./14.js");
var C = require("./47.js");
var _ = require("./189.js");
var m = require("./42.js");
var f = createjs.MouseEvent;
var O = createjs.Point;
var E = function (e) {
  function QuestMapTooltip() {
    return e.call(this) || this;
  }
  n.__extends(QuestMapTooltip, e);
  QuestMapTooltip.prototype.show = function (e) {
    if (!this._toolTipDisp) {
      this._toolTipDisp = new (r.getDefinitionByName("QuestMapToolTipMC"))();
      this._toolTipDisp.mouseEnabled = true;
      this._toolTipDisp.mouseChildren = true;
      this.rewardComponent = new b.SimpleCollectableScrollComponent(this._toolTipDisp, new C.SimpleScrollVO().initByParent(this._toolTipDisp).addMouseWheelElements([this._toolTipDisp]), new _.SimpleScrollStrategyHorizontal(), 3, 3);
    }
    g.CastleComponent.textFieldManager.registerTextField(this._toolTipDisp.txt_name, new c.TextVO(h.TextHelper.toUpperCaseLocaSafe(e.getQuestName()))).verticalAlign = m.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.rewardComponent.show(e.rewards, new p.CollectableRenderOptions(p.CollectableRenderOptions.SET_ADVANCED, new O(65, 63)), this.bindFunction(this.preRenderFunc));
    this._toolTipDisp.addEventListener(f.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._toolTipDisp.addEventListener(f.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  };
  QuestMapTooltip.prototype.preRenderFunc = function (e) {
    if (e.itemVO) {
      var t = e.getRenderer(p.CollectableRenderOptions.ICON_TRANSFORM);
      if (y.ClientConstCollectable.COLLECTABLES_WITHOUT_TEXTFIELD.indexOf(e.itemVO.itemType) == -1) {
        t.transform.offset.y = -7;
        t.transform.scale = 0.78;
      } else {
        t.transform.offset.y = 0;
      }
    }
  };
  QuestMapTooltip.prototype.onMouseOver = function (e) {
    if (a.BasicToolTipManager.TOOLTIP_LABEL in e.target && e.target.toolTipText) {
      g.CastleComponent.layoutManager.tooltipManager.show(e.target.toolTipText, e.target);
    }
    if ((l.instanceOfClass(e.target, "BasicButton") || l.instanceOfClass(e.target, "MovieClip") && e.target.basicButton != null) && e.target.enabled) {
      g.CastleComponent.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_CLICK);
    }
    d.TweenMax.killTweensOf(this._toolTipDisp);
    d.TweenMax.to(this._toolTipDisp, I.QuestMapTooltipHelper.FADE_DURATION, {
      autoAlpha: 1,
      ease: u.Linear.easeOut
    });
  };
  QuestMapTooltip.prototype.onMouseOut = function (e) {
    g.CastleComponent.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
    D.TooltipManagerFacade.hideAllTooltips();
  };
  QuestMapTooltip.prototype.hide = function () {
    this._toolTipDisp.removeEventListener(f.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._toolTipDisp.removeEventListener(f.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this.rewardComponent.hide();
  };
  Object.defineProperty(QuestMapTooltip.prototype, "disp", {
    get: function () {
      return this._toolTipDisp;
    },
    enumerable: true,
    configurable: true
  });
  return QuestMapTooltip;
}(g.CastleComponent);
exports.QuestMapTooltip = E;
var y = require("./86.js");
var b = require("./652.js");
var D = require("./200.js");
var I = require("./1056.js");
s.classImplementsInterfaces(E, "ICollectableRendererList");