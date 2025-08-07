Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./41.js");
var a = require("./1270.js");
var s = require("./1.js");
var r = require("./2.js");
var l = require("./17.js");
var c = createjs.MouseEvent;
var u = function (e) {
  function CharactersAnimationsHandler(t) {
    var i = e.call(this, t) || this;
    i.animationAssets = [CharactersAnimationsHandler.KING_ANIMATION, CharactersAnimationsHandler.KNIGHT_ANIMATION, CharactersAnimationsHandler.PRINCESS_ANIMATION];
    return i;
  }
  n.__extends(CharactersAnimationsHandler, e);
  CharactersAnimationsHandler.prototype.initialize = function () {
    this._animationHoveredSignal = new r.StringSignal();
    this._animationUnhoveredSignal = new r.StringSignal();
    this._hoverCharacters = [this._disp.mc_king_hover, this._disp.mc_knight_hover, this._disp.mc_princess_hover];
    this._hoverCharactersBounds = [this._disp.king_bounds, this._disp.knight_bounds, this._disp.princess_bounds];
    var e = s.getDefinitionByName(CharactersAnimationsHandler.KING_ANIMATION);
    this._kingAnimation = new e();
    this._disp.mc_king_animation.name = CharactersAnimationsHandler.KING_ANIMATION;
    this._disp.mc_king_animation.addChild(this._kingAnimation);
    this._disp.mc_king_animation.mouseChildren = false;
    this._disp.mc_king_hover.name = CharactersAnimationsHandler.KING_ANIMATION;
    this._disp.king_bounds.name = CharactersAnimationsHandler.KING_ANIMATION;
    this._disp.mc_king_hover.gotoAndStop(1);
    var t = s.getDefinitionByName(CharactersAnimationsHandler.KNIGHT_ANIMATION);
    this._knightAnimation = new t();
    this._disp.mc_knight_animation.name = CharactersAnimationsHandler.KNIGHT_ANIMATION;
    this._disp.mc_knight_animation.addChild(this._knightAnimation);
    this._disp.mc_knight_animation.mouseChildren = false;
    this._disp.mc_knight_hover.name = CharactersAnimationsHandler.KNIGHT_ANIMATION;
    this._disp.knight_bounds.name = CharactersAnimationsHandler.KNIGHT_ANIMATION;
    this._disp.mc_knight_hover.gotoAndStop(1);
    var i = s.getDefinitionByName(CharactersAnimationsHandler.PRINCESS_ANIMATION);
    this._princessAnimation = new i();
    this._disp.mc_princess_animation.name = CharactersAnimationsHandler.PRINCESS_ANIMATION;
    this._disp.mc_princess_animation.addChild(this._princessAnimation);
    this._disp.mc_princess_animation.mouseChildren = false;
    this._disp.mc_princess_hover.name = CharactersAnimationsHandler.PRINCESS_ANIMATION;
    this._disp.princess_bounds.name = CharactersAnimationsHandler.PRINCESS_ANIMATION;
    this._disp.mc_princess_hover.gotoAndStop(1);
    this.animations = [this._disp.mc_king_animation, this._disp.mc_knight_animation, this._disp.mc_princess_animation];
    this._disp.mc_king_hover.visible = false;
    this._disp.mc_knight_hover.visible = false;
    this._disp.mc_princess_hover.visible = false;
    this._disp.mc_king_hover.mouseChildren = false;
    this._disp.mc_knight_hover.mouseChildren = false;
    this._disp.mc_princess_hover.mouseChildren = false;
  };
  CharactersAnimationsHandler.prototype.onMouseOver = function (e) {
    var t = null;
    if (o.CastleMovieClipHelper.isDOPartOfDO(e.target, this._disp.king_bounds)) {
      t = CharactersAnimationsHandler.KING_ANIMATION;
      if (!o.CastleMovieClipHelper.isDOPartOfDO(e.target, this._disp.king_bounds.mc_quest_king)) {
        this._disp.mc_king_hover.gotoAndStop(1);
      }
    }
    if (o.CastleMovieClipHelper.isDOPartOfDO(e.target, this._disp.knight_bounds)) {
      t = CharactersAnimationsHandler.KNIGHT_ANIMATION;
      if (!o.CastleMovieClipHelper.isDOPartOfDO(e.target, this._disp.knight_bounds.mc_quest_knight)) {
        this._disp.mc_knight_hover.gotoAndStop(1);
      }
    }
    if (o.CastleMovieClipHelper.isDOPartOfDO(e.target, this._disp.princess_bounds)) {
      t = CharactersAnimationsHandler.PRINCESS_ANIMATION;
      if (!o.CastleMovieClipHelper.isDOPartOfDO(e.target, this._disp.princess_bounds.mc_quest_princess)) {
        this._disp.mc_princess_hover.gotoAndStop(1);
      }
    }
    if (t) {
      var i = t;
      this.toggleShowHideHoverState(i, true);
      this.toggleAnimationsActivation(i, false);
      this.stopAnimationByName(i);
      this._animationHoveredSignal.dispatch(i);
      l.CastleLayoutManager.getInstance().customCursor.setCursorType(r.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  CharactersAnimationsHandler.prototype.onMouseOut = function (e) {
    var t = null;
    if (o.CastleMovieClipHelper.isDOPartOfDO(e.target, this._disp.king_bounds)) {
      t = CharactersAnimationsHandler.KING_ANIMATION;
      if (!o.CastleMovieClipHelper.isDOPartOfDO(e.target, this._disp.king_bounds.mc_quest_king)) {
        this._disp.mc_king_hover.gotoAndStop(1);
      }
    }
    if (o.CastleMovieClipHelper.isDOPartOfDO(e.target, this._disp.knight_bounds)) {
      t = CharactersAnimationsHandler.KNIGHT_ANIMATION;
      if (!o.CastleMovieClipHelper.isDOPartOfDO(e.target, this._disp.knight_bounds.mc_quest_knight)) {
        this._disp.mc_knight_hover.gotoAndStop(1);
      }
    }
    if (o.CastleMovieClipHelper.isDOPartOfDO(e.target, this._disp.princess_bounds)) {
      t = CharactersAnimationsHandler.PRINCESS_ANIMATION;
      if (!o.CastleMovieClipHelper.isDOPartOfDO(e.target, this._disp.princess_bounds.mc_quest_princess)) {
        this._disp.mc_princess_hover.gotoAndStop(1);
      }
    }
    if (t) {
      var i = t;
      this.playAnimationByName(i);
      this.toggleShowHideHoverState(i, false);
      this.toggleAnimationsActivation(i, true);
      this._animationUnhoveredSignal.dispatch(i);
    }
  };
  CharactersAnimationsHandler.prototype.onMouseDown = function (e) {
    if (o.CastleMovieClipHelper.isDOPartOfDO(e.target, this._disp.king_bounds) && !o.CastleMovieClipHelper.isDOPartOfDO(e.target, this._disp.king_bounds.mc_quest_king) || o.CastleMovieClipHelper.isDOPartOfDO(e.target, this._disp.mc_king_animation)) {
      this._disp.mc_king_hover.gotoAndStop(1);
    }
    if (o.CastleMovieClipHelper.isDOPartOfDO(e.target, this._disp.knight_bounds) && !o.CastleMovieClipHelper.isDOPartOfDO(e.target, this._disp.knight_bounds.mc_quest_knight) || o.CastleMovieClipHelper.isDOPartOfDO(e.target, this._disp.mc_knight_animation)) {
      this._disp.mc_knight_hover.gotoAndStop(1);
    }
    if (o.CastleMovieClipHelper.isDOPartOfDO(e.target, this._disp.princess_bounds) && !o.CastleMovieClipHelper.isDOPartOfDO(e.target, this._disp.princess_bounds.mc_quest_princess) || o.CastleMovieClipHelper.isDOPartOfDO(e.target, this._disp.mc_princess_animation)) {
      this._disp.mc_princess_hover.gotoAndStop(1);
    }
  };
  CharactersAnimationsHandler.prototype.onMouseUp = function (e) {
    if (o.CastleMovieClipHelper.isDOPartOfDO(e.target, this._disp.king_bounds) && !o.CastleMovieClipHelper.isDOPartOfDO(e.target, this._disp.king_bounds.mc_quest_king) || o.CastleMovieClipHelper.isDOPartOfDO(e.target, this._disp.mc_king_animation)) {
      this._disp.mc_king_hover.gotoAndStop(1);
    }
    if (o.CastleMovieClipHelper.isDOPartOfDO(e.target, this._disp.knight_bounds) && !o.CastleMovieClipHelper.isDOPartOfDO(e.target, this._disp.knight_bounds.mc_quest_knight) || o.CastleMovieClipHelper.isDOPartOfDO(e.target, this._disp.mc_knight_animation)) {
      this._disp.mc_knight_hover.gotoAndStop(1);
    }
    if (o.CastleMovieClipHelper.isDOPartOfDO(e.target, this._disp.princess_bounds) && !o.CastleMovieClipHelper.isDOPartOfDO(e.target, this._disp.princess_bounds.mc_quest_princess) || o.CastleMovieClipHelper.isDOPartOfDO(e.target, this._disp.mc_princess_animation)) {
      this._disp.mc_princess_hover.gotoAndStop(1);
    }
  };
  CharactersAnimationsHandler.prototype.toggleShowHideHoverState = function (e, t) {
    switch (e) {
      case CharactersAnimationsHandler.KING_ANIMATION:
        this._disp.mc_king_hover.visible = t;
        break;
      case CharactersAnimationsHandler.KNIGHT_ANIMATION:
        this._disp.mc_knight_hover.visible = t;
        break;
      case CharactersAnimationsHandler.PRINCESS_ANIMATION:
        this._disp.mc_princess_hover.visible = t;
    }
  };
  CharactersAnimationsHandler.prototype.toggleAnimationsActivation = function (e = "", t) {
    for (var i = 0; i < this.animations.length; i++) {
      if (this.animations[i].name != e) {
        this._hoverCharacters[i].visible = false;
        this.animations[i].visible = true;
        this.playAnimation(this.animations[i]);
      } else {
        this.animations[i].visible = t;
      }
    }
  };
  CharactersAnimationsHandler.prototype.startAnimations = function () {
    this.addEventListener();
    this.playAnimation(this._disp.mc_king_animation);
    this.playAnimation(this._disp.mc_knight_animation);
    this.playAnimation(this._disp.mc_princess_animation);
  };
  Object.defineProperty(CharactersAnimationsHandler.prototype, "animationHoveredSignal", {
    get: function () {
      return this._animationHoveredSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CharactersAnimationsHandler.prototype, "animationUnhoveredSignal", {
    get: function () {
      return this._animationUnhoveredSignal;
    },
    enumerable: true,
    configurable: true
  });
  CharactersAnimationsHandler.prototype.reset = function () {
    e.prototype.reset.call(this);
    this.removeEventListener();
  };
  CharactersAnimationsHandler.prototype.addEventListener = function () {
    this._disp.king_bounds.addEventListener(c.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.knight_bounds.addEventListener(c.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.princess_bounds.addEventListener(c.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.king_bounds.addEventListener(c.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this._disp.knight_bounds.addEventListener(c.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this._disp.princess_bounds.addEventListener(c.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this._disp.king_bounds.addEventListener(c.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this._disp.knight_bounds.addEventListener(c.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this._disp.princess_bounds.addEventListener(c.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this._disp.king_bounds.addEventListener(c.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this._disp.knight_bounds.addEventListener(c.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this._disp.princess_bounds.addEventListener(c.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  CharactersAnimationsHandler.prototype.removeEventListener = function () {
    this._disp.king_bounds.removeEventListener(c.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.knight_bounds.removeEventListener(c.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.princess_bounds.removeEventListener(c.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.king_bounds.removeEventListener(c.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this._disp.knight_bounds.removeEventListener(c.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this._disp.princess_bounds.removeEventListener(c.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this._disp.king_bounds.removeEventListener(c.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this._disp.knight_bounds.removeEventListener(c.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this._disp.princess_bounds.removeEventListener(c.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this._disp.king_bounds.removeEventListener(c.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this._disp.knight_bounds.removeEventListener(c.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this._disp.princess_bounds.removeEventListener(c.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  CharactersAnimationsHandler.prototype.stopAnimations = function () {
    e.prototype.stopAnimations.call(this);
    this.stopAnimation(this._disp.mc_king_animation);
    this.stopAnimation(this._disp.mc_knight_animation);
    this.stopAnimation(this._disp.mc_princess_animation);
  };
  CharactersAnimationsHandler.KING_ANIMATION = "King_Animation";
  CharactersAnimationsHandler.KNIGHT_ANIMATION = "Knight_Animation";
  CharactersAnimationsHandler.PRINCESS_ANIMATION = "Princess_Animation";
  return CharactersAnimationsHandler;
}(a.GeneralsHubBasicAnimationsHandler);
exports.CharactersAnimationsHandler = u;