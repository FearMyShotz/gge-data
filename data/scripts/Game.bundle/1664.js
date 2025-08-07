Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./23.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./57.js");
var l = function () {
  function MysteryBoxOpeningAnimationHandler(e) {
    this.prefixBox = "Animation_";
    this.prefixRarity = "Pedestal_BG_rarity_";
    this.prefixOrb = "Animation_MysteryBox_Orb_";
    this._disp = e;
    this.animationCompleteSignal = new r.Signal();
    MysteryBoxOpeningAnimationHandler.animationsLoadedSignal.add(this.bindFunction(this.onAnimationsLoaded));
  }
  MysteryBoxOpeningAnimationHandler.loadAnimations = function () {
    var e = [];
    e = (e = (e = (e = e.concat(MysteryBoxOpeningAnimationHandler.ASSETS_BOXES)).concat(MysteryBoxOpeningAnimationHandler.ASSETS_RARITIES)).concat(MysteryBoxOpeningAnimationHandler.ASSETS_ORBS)).concat([MysteryBoxOpeningAnimationHandler.ASSET_STARS]);
    a.loadAssets(e, a.AssetLoadingFlowType.PARALLEL).then(function (e) {
      MysteryBoxOpeningAnimationHandler.animationLoaded = true;
      if (MysteryBoxOpeningAnimationHandler.animationStarted) {
        MysteryBoxOpeningAnimationHandler.animationsLoadedSignal.dispatch();
      }
    }).catch(function (e) {
      return n.warn("failed to load mystery box assets", e);
    });
  };
  MysteryBoxOpeningAnimationHandler.prototype.onAnimationsLoaded = function () {
    if (MysteryBoxOpeningAnimationHandler.animationStarted) {
      this.selectAnimation();
      this.stopAnimation();
      this.playAnimation();
    }
  };
  MysteryBoxOpeningAnimationHandler.prototype.selectAnimation = function () {
    var e = s.getDefinitionByName(this.getAnimationClass(MysteryBoxOpeningAnimationHandler.ASSETS_RARITIES, this.prefixRarity + this._rarity));
    var t = s.getDefinitionByName(this.getAnimationClass(MysteryBoxOpeningAnimationHandler.ASSETS_BOXES, this.prefixBox + this._name));
    var i = s.getDefinitionByName(this.getAnimationClass(MysteryBoxOpeningAnimationHandler.ASSETS_ORBS, this.prefixOrb + this._orbCategory));
    var n = s.getDefinitionByName(MysteryBoxOpeningAnimationHandler.ASSET_STARS);
    this._pedestal = new e();
    this._box = new t();
    this._orb = new i();
    this._stars = new n();
    this._disp.mc_pedestal.addChild(this._pedestal);
    this._disp.mc_box.addChild(this._box);
    this._disp.mc_box.addChild(this._orb);
    this._disp.mc_box.addChild(this._stars);
    o.TweenLite.delayedCall(2, this.bindFunction(this.onStarsAnimationComplete));
    o.TweenLite.delayedCall(3, this.bindFunction(this.onOrbAnimationComplete));
  };
  MysteryBoxOpeningAnimationHandler.prototype.getAnimationClass = function (e, t) {
    var i;
    try {
      i = e[e.indexOf(t)];
    } catch (e) {
      console.error("Mysterybox animation not found: " + t + " " + e);
    }
    return i;
  };
  MysteryBoxOpeningAnimationHandler.prototype.onStarsAnimationComplete = function () {
    this.animationCompleteSignal.dispatch();
    this._stars.stop();
  };
  MysteryBoxOpeningAnimationHandler.prototype.onOrbAnimationComplete = function () {
    this._box.gotoAndStop(this._box.totalFrames - 1);
    this._orb.stop();
  };
  MysteryBoxOpeningAnimationHandler.prototype.startAnimation = function (e, t, i) {
    this._name = e;
    this._rarity = t.toString();
    this._orbCategory = i;
    if (MysteryBoxOpeningAnimationHandler.animationLoaded) {
      this.selectAnimation();
      this.stopAnimation();
      this.playAnimation();
    } else {
      MysteryBoxOpeningAnimationHandler.animationStarted = true;
    }
  };
  MysteryBoxOpeningAnimationHandler.prototype.playAnimation = function () {
    this._box.visible = true;
    this._orb.visible = true;
    this._stars.visible = true;
    this._box.play();
    this._orb.play();
    this._stars.play();
  };
  MysteryBoxOpeningAnimationHandler.prototype.stopAnimation = function () {
    this._box.gotoAndStop(0);
    this._orb.gotoAndStop(0);
    this._stars.gotoAndStop(0);
  };
  MysteryBoxOpeningAnimationHandler.prototype.reset = function () {
    this.stopAnimation();
    a.MovieClipHelper.clearMovieClip(this._disp.mc_pedestal);
    a.MovieClipHelper.clearMovieClip(this._disp.mc_box);
    this._box.visible = false;
    this._orb.visible = false;
    this._stars.visible = false;
  };
  MysteryBoxOpeningAnimationHandler.animationsLoadedSignal = new r.Signal();
  MysteryBoxOpeningAnimationHandler.animationLoaded = false;
  MysteryBoxOpeningAnimationHandler.animationStarted = false;
  MysteryBoxOpeningAnimationHandler.ASSETS_BOXES = ["Animation_MysteryBoxBronze", "Animation_MysteryBoxGold", "Animation_MysteryBoxSilver", "Animation_SummerBox2022", "Animation_SalesBox2022", "Animation_AutumnBox2022", "Animation_WinterBox2022", "Animation_SpringBox2023", "Animation_HoL8BoxLittle", "Animation_HoL8BoxBig"];
  MysteryBoxOpeningAnimationHandler.ASSETS_RARITIES = ["Pedestal_BG_rarity_1", "Pedestal_BG_rarity_2", "Pedestal_BG_rarity_3", "Pedestal_BG_rarity_4"];
  MysteryBoxOpeningAnimationHandler.ASSETS_ORBS = ["Animation_MysteryBox_Orb_Common", "Animation_MysteryBox_Orb_Rare", "Animation_MysteryBox_Orb_Epic", "Animation_MysteryBox_Orb_Legendary"];
  MysteryBoxOpeningAnimationHandler.ASSET_STARS = "Animation_MysteryBox_Stars";
  return MysteryBoxOpeningAnimationHandler;
}();
exports.MysteryBoxOpeningAnimationHandler = l;