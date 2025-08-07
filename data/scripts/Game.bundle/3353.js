Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./163.js");
var r = require("./14.js");
var l = require("./8.js");
var c = createjs.MouseEvent;
var u = function (e) {
  function QuestMapTile() {
    var t = this;
    t._startIndex = 0;
    t._height = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._disp = new (a.getDefinitionByName("QuestMapTileMC"))();
    l.ButtonHelper.initBasicButtons([t._disp.quest0, t._disp.quest1, t._disp.quest2, t._disp.quest3]);
    return t;
  }
  n.__extends(QuestMapTile, e);
  QuestMapTile.prototype.show = function (e, t) {
    var i;
    var n;
    var o;
    this._quests = e;
    this._startIndex = t;
    this._disp.path0.visible = t >= 0;
    var a = 0;
    for (var s = 0; s <= QuestMapTile.QUESTS_PER_TILE; s++) {
      i = this._disp["quest" + s];
      n = this._disp["path" + s];
      if (o = this._quests.length > t + s ? this._quests[t + s].questVO : null) {
        if (s < QuestMapTile.QUESTS_PER_TILE) {
          i.gotoAndStop(o.isCompleted ? 2 : o.isFailed ? 3 : 1);
          i.icon.gotoAndStop(o.isEpicQuest ? 2 : 1);
          i.visible = true;
          i.mouseChildren = false;
          a = s;
        }
        n.gotoAndStop(o.isCompleted ? 1 : o.isFailed ? 2 : o.isLocked ? 3 : 4);
        n.visible = t + s > 0;
      } else {
        if (s < QuestMapTile.QUESTS_PER_TILE) {
          i.visible = false;
        }
        n.visible = false;
      }
    }
    this._height = a == QuestMapTile.QUESTS_PER_TILE - 1 ? this.disp.height : this.disp["quest" + a].y + 55;
    this._disp.addEventListener(c.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.addEventListener(c.CLICK, this.bindFunction(this.onMouseClick));
  };
  QuestMapTile.prototype.hide = function () {
    this._disp.addEventListener(c.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.addEventListener(c.CLICK, this.bindFunction(this.onMouseClick));
    this._quests = null;
  };
  QuestMapTile.prototype.onMouseOver = function (e) {
    switch (e.target) {
      case this._disp.quest0:
        p.QuestMapTooltipHelper.showToolTip(e.target, this._quests[this._startIndex].questVO);
        break;
      case this._disp.quest1:
        p.QuestMapTooltipHelper.showToolTip(e.target, this._quests[this._startIndex + 1].questVO);
        break;
      case this._disp.quest2:
        p.QuestMapTooltipHelper.showToolTip(e.target, this._quests[this._startIndex + 2].questVO);
        break;
      case this._disp.quest3:
        p.QuestMapTooltipHelper.showToolTip(e.target, this._quests[this._startIndex + 3].questVO);
    }
  };
  QuestMapTile.prototype.onMouseClick = function (e) {
    switch (e.target) {
      case this._disp.quest0:
        this._quests[this._startIndex].select(true, true);
        d.TooltipManagerFacade.hideAllTooltips();
        break;
      case this._disp.quest1:
        this._quests[this._startIndex + 1].select(true, true);
        d.TooltipManagerFacade.hideAllTooltips();
        break;
      case this._disp.quest2:
        this._quests[this._startIndex + 2].select(true, true);
        d.TooltipManagerFacade.hideAllTooltips();
        break;
      case this._disp.quest3:
        this._quests[this._startIndex + 3].select(true, true);
        d.TooltipManagerFacade.hideAllTooltips();
    }
  };
  Object.defineProperty(QuestMapTile.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(QuestMapTile.prototype, "isLayoutEnabled", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(QuestMapTile.prototype, "height", {
    get: function () {
      return this._height;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(QuestMapTile.prototype, "width", {
    get: function () {
      return this.disp.width;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(QuestMapTile.prototype, "margin", {
    get: function () {
      return QuestMapTile.MARGIN;
    },
    enumerable: true,
    configurable: true
  });
  QuestMapTile.__initialize_static_members = function () {
    QuestMapTile.QUESTS_PER_TILE = 4;
    QuestMapTile.MARGIN = new s.LayoutMargin(0, 0, 0, 0);
  };
  return QuestMapTile;
}(r.CastleComponent);
exports.QuestMapTile = u;
var d = require("./200.js");
var p = require("./1056.js");
o.classImplementsInterfaces(u, "ICollectableRendererList", "ILayoutable");
u.__initialize_static_members();