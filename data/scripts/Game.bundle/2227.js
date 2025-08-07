Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./100.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./4.js");
var c = require("./2228.js");
var u = createjs.MovieClip;
var d = function () {
  function GeneralsSkillTreeComponent(e, t) {
    this._height = 0;
    this._attackHighlight = false;
    this._disp = new u();
    this._attackHighlight = t;
    this._treeNode = this.generalsData.getSkillTreeNode(e);
    this.createTree();
    this.updateTree();
  }
  GeneralsSkillTreeComponent.prototype.createTree = function () {
    this._tierComponents = [];
    this._height = 10;
    for (var e = 0, t = this._treeNode.childs; e < t.length; e++) {
      var i = t[e];
      if (i && !i.isHidden) {
        var l = new c.GeneralsSkillTierComponent(i, this._treeNode.id, this._attackHighlight);
        this._disp.addChild(l.disp);
        this._tierComponents.push(l);
        l.disp.y = this._height;
        this._height += l.disp.height + GeneralsSkillTreeComponent.TIER_SPACING_Y;
      }
    }
    if (this.treeNode.isIncomplete) {
      var u = new (s.getDefinitionByName("GeneralSkillTreeDialogExt_SkillTier"))();
      u.bg_completed.visible = false;
      u.txt_tier.width = 720;
      u.y = this._height;
      o.GoodgameTextFieldManager.getInstance().registerTextField(u.txt_tier, new r.LocalizedTextVO("dialog_generals_skillTree_comingSoon_banner"), new a.InternalGGSTextFieldConfigVO(true)).textAlign = n.GGSTextAlign.CENTER;
      this._disp.addChild(u);
      this._height += GeneralsSkillTreeComponent.COMINGSOON_HEIGHT;
    }
  };
  GeneralsSkillTreeComponent.prototype.updateTree = function () {
    for (var e = 0; e < this._tierComponents.length; e++) {
      this._tierComponents[e].updateTier();
    }
  };
  GeneralsSkillTreeComponent.prototype.show = function () {
    for (var e = 0; e < this._tierComponents.length; e++) {
      this._tierComponents[e].show();
    }
  };
  GeneralsSkillTreeComponent.prototype.hide = function () {
    for (var e = 0; e < this._tierComponents.length; e++) {
      this._tierComponents[e].hide();
    }
  };
  Object.defineProperty(GeneralsSkillTreeComponent.prototype, "height", {
    get: function () {
      return this._height;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsSkillTreeComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsSkillTreeComponent.prototype, "treeNode", {
    get: function () {
      return this._treeNode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsSkillTreeComponent.prototype, "generalsData", {
    get: function () {
      return l.CastleModel.generalsData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsSkillTreeComponent.prototype, "tierComponents", {
    get: function () {
      return this._tierComponents;
    },
    enumerable: true,
    configurable: true
  });
  GeneralsSkillTreeComponent.TIER_SPACING_Y = 10;
  GeneralsSkillTreeComponent.COMINGSOON_HEIGHT = 100;
  return GeneralsSkillTreeComponent;
}();
exports.GeneralsSkillTreeComponent = d;