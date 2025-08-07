Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2665.js");
var o = require("./4.js");
var a = createjs.MovieClip;
var s = function () {
  function CastleLegendSkillTreeComponent(e) {
    this._height = 0;
    this._disp = new a();
    this._treeNode = this.legendSkillData.getSkillTreeNode(e);
    this.createTree();
    this.updateTree();
  }
  CastleLegendSkillTreeComponent.prototype.createTree = function () {
    this._tierComponents = [];
    this._height = 0;
    for (var e = 0, t = this._treeNode.childs; e < t.length; e++) {
      var i = t[e];
      if (i) {
        var o = new n.CastleLegendSkillTierComponent(i, this._treeNode.id);
        this._disp.addChild(o.disp);
        this._tierComponents.push(o);
        o.disp.y = this._height;
        this._height += o.height + CastleLegendSkillTreeComponent.TIER_SPACING_Y;
      }
    }
  };
  CastleLegendSkillTreeComponent.prototype.updateTree = function () {
    for (var e = 0; e < this._tierComponents.length; e++) {
      this._tierComponents[e].updateTier();
    }
  };
  CastleLegendSkillTreeComponent.prototype.show = function () {
    for (var e = 0; e < this._tierComponents.length; e++) {
      this._tierComponents[e].show();
    }
  };
  CastleLegendSkillTreeComponent.prototype.hide = function () {
    for (var e = 0; e < this._tierComponents.length; e++) {
      this._tierComponents[e].hide();
    }
  };
  Object.defineProperty(CastleLegendSkillTreeComponent.prototype, "height", {
    get: function () {
      return this.disp.height;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillTreeComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillTreeComponent.prototype, "treeNode", {
    get: function () {
      return this._treeNode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillTreeComponent.prototype, "legendSkillData", {
    get: function () {
      return o.CastleModel.legendSkillData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillTreeComponent.prototype, "tierComponents", {
    get: function () {
      return this._tierComponents;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillTreeComponent.TIER_SPACING_Y = 4;
  return CastleLegendSkillTreeComponent;
}();
exports.CastleLegendSkillTreeComponent = s;