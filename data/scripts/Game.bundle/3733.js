Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = createjs.MouseEvent;
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./13.js");
var c = require("./4.js");
var u = require("./157.js");
var d = require("./288.js");
var p = function (e) {
  function DifficultyScalingDifficultyListItem(t, i) {
    var n = e.call(this, new (s.getDefinitionByName("EventDifficultySelectItem"))(), i) || this;
    n._data = t;
    n.fill();
    return n;
  }
  n.__extends(DifficultyScalingDifficultyListItem, e);
  DifficultyScalingDifficultyListItem.prototype.fill = function () {
    var e = c.CastleModel.castleAchievementData.isDifficultyUnlocked(this.difficulty.difficultyID);
    if (e && this.difficulty.difficultyType.difficultyTypeID > 10 && this.difficulty.unlockC2 > 0) {
      e = false;
    }
    var t = this.difficulty.isLocked && !e;
    this.itemMc.mc_locked.visible = t;
    this.itemMc.mouseChildren = false;
    this.itemMc.actLikeButton = true;
    if (t) {
      a.MovieClipHelper.clearMovieClip(this.itemMc.mc_icon);
    } else {
      d.DifficultyScalingHelper.addDifficultyIcon(this.itemMc.mc_icon, this.difficulty, 30, 30, null);
    }
    this.itemMc.mc_unselected.visible = !this.selected;
    this.itemMc.mc_selected.visible = this.selected;
    this.itemMc.mc_over.visible = false;
    this.itemMc.mc_down.visible = false;
    a.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.mc_selected.txt_selected, new r.TextVO(l.TextHelper.toUpperCaseLocaSafe(r.Localize.text(this.difficulty.name_textID)))).autoFitToBounds = true;
    a.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.mc_unselected.txt_unselected, new r.TextVO(l.TextHelper.toUpperCaseLocaSafe(r.Localize.text(this.difficulty.name_textID)))).autoFitToBounds = true;
  };
  DifficultyScalingDifficultyListItem.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    if (this.disp) {
      this.disp.addEventListener(o.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.addEventListener(o.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  DifficultyScalingDifficultyListItem.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    if (this.disp) {
      this.disp.removeEventListener(o.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.removeEventListener(o.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  DifficultyScalingDifficultyListItem.prototype.onMouseOver = function (e) {
    this.itemMc.mc_over.visible = true;
  };
  DifficultyScalingDifficultyListItem.prototype.onMouseOut = function (e) {
    this.itemMc.mc_over.visible = false;
    this.itemMc.mc_down.visible = false;
  };
  DifficultyScalingDifficultyListItem.prototype.onMouseDown = function (e) {
    this.itemMc.mc_down.visible = true;
    this.itemMc.mc_over.visible = false;
  };
  DifficultyScalingDifficultyListItem.prototype.onMouseUp = function (e) {
    this.itemMc.mc_down.visible = false;
  };
  Object.defineProperty(DifficultyScalingDifficultyListItem.prototype, "itemMc", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingDifficultyListItem.prototype, "difficulty", {
    get: function () {
      return this._data.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingDifficultyListItem.prototype, "selected", {
    get: function () {
      return this._data.selected;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingDifficultyListItem.prototype, "data", {
    get: function () {
      return this._data;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingDifficultyListItem.prototype, "height", {
    get: function () {
      return this.disp.height;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.ACollapsibleItem.prototype, "height").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return DifficultyScalingDifficultyListItem;
}(u.ACollapsibleItem);
exports.DifficultyScalingDifficultyListItem = p;
s.classImplementsInterfaces(p, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");