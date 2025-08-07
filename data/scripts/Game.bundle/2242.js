Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1270.js");
var a = require("./1.js");
var s = require("./23.js");
var r = require("./23.js");
var l = require("./23.js");
var c = require("./23.js");
var u = function (e) {
  function AmbientAnimationsHandler(t) {
    var i = e.call(this, t) || this;
    i.CANDLE_ANIMATION = "Candlelight_Animation";
    i.CODE_BASED_ANIMATIONS = "Codebased_Animation_Elements";
    i.CANDLES_STICKS_ANIMATION = "CandlelightSticks_Back";
    i.CHANDLELIERS_ANIMATION = "Lightbeams_Chandleliers";
    i.CANDLE_LIGHT_MIDDLE_BACK1_ANIMATION = "CandleLight_Middle_Back1";
    i.CANDLE_LIGHT_MIDDLE_BACK2_ANIMATION = "CandleLight_Middle_Back2";
    i.BEAM_FRONT_1_ANIMATION = "Beam_Front1";
    i.BEAM_FRONT_2_ANIMATION = "Beam_Front2";
    i.BEAMS_MIDDLE_ANIMATION = "Lightbeams_Middle";
    i.BEAMS_BACK_ANIMATION = "Lightbeams_Back";
    i.PARTICLES_ANIMATION = "Particles";
    i.DUST_ANIMATION = "Dust";
    i.animationAssets = [i.CANDLE_ANIMATION, i.CODE_BASED_ANIMATIONS];
    return i;
  }
  n.__extends(AmbientAnimationsHandler, e);
  AmbientAnimationsHandler.prototype.initialize = function () {
    this._candlesAnimationsPlaceholders = [this._disp.mc_candlelight_animation_0, this._disp.mc_candlelight_animation_1, this._disp.mc_candlelight_animation_2, this._disp.mc_candlelight_animation_3, this._disp.mc_candlelight_animation_4, this._disp.mc_candlelight_animation_5, this._disp.mc_candlelight_animation_6, this._disp.mc_candlelight_animation_7];
    var e;
    var t;
    var i = a.getDefinitionByName(this.CANDLE_ANIMATION);
    for (var n = 0; n < this._candlesAnimationsPlaceholders.length; n++) {
      e = this._candlesAnimationsPlaceholders[n];
      (t = new i()).framerate = 6;
      e.addChild(t);
      e.name = this.CANDLE_ANIMATION;
      e.mouseEnabled = false;
    }
    var o = a.getDefinitionByName(this.CANDLES_STICKS_ANIMATION);
    this._candlesSticksLightAnimation = new o();
    this._disp.mc_candlelight_sticks_back_animation.name = this.CANDLES_STICKS_ANIMATION;
    this._disp.mc_candlelight_sticks_back_animation.addChild(this._candlesSticksLightAnimation);
    this._disp.mc_candlelight_sticks_back_animation.mouseEnabled = false;
    var s = a.getDefinitionByName(this.CHANDLELIERS_ANIMATION);
    this._chandleliersLightAnimation = new s();
    this._disp.mc_lightbeams_chandleliers_animation.name = this.CHANDLELIERS_ANIMATION;
    this._disp.mc_lightbeams_chandleliers_animation.addChild(this._chandleliersLightAnimation);
    this._disp.mc_lightbeams_chandleliers_animation.mouseEnabled = false;
    var r = a.getDefinitionByName(this.CANDLE_LIGHT_MIDDLE_BACK1_ANIMATION);
    this._candleLightMiddleBack1 = new r();
    this._disp.mc_candlelight_middle_back1.name = this.CANDLE_LIGHT_MIDDLE_BACK1_ANIMATION;
    this._disp.mc_candlelight_middle_back1.addChild(this._candleLightMiddleBack1);
    this._disp.mc_candlelight_middle_back1.mouseEnabled = false;
    var l = a.getDefinitionByName(this.CANDLE_LIGHT_MIDDLE_BACK2_ANIMATION);
    this._candleLightMiddleBack2 = new l();
    this._disp.mc_candlelight_middle_back2.name = this.CANDLE_LIGHT_MIDDLE_BACK2_ANIMATION;
    this._disp.mc_candlelight_middle_back2.addChild(this._candleLightMiddleBack1);
    this._disp.mc_candlelight_middle_back2.mouseEnabled = false;
    this._candleLightAnimationsPlaceholders = [this._disp.mc_candlelight_sticks_back_animation, this._disp.mc_lightbeams_chandleliers_animation, this._disp.mc_candlelight_middle_back1, this._disp.mc_candlelight_middle_back2];
    var c = a.getDefinitionByName(this.BEAM_FRONT_1_ANIMATION);
    this._beamFront1Animation = new c();
    this._disp.mc_beam_front_1_animation.name = this.BEAM_FRONT_1_ANIMATION;
    this._disp.mc_beam_front_1_animation.addChild(this._beamFront1Animation);
    this._disp.mc_beam_front_1_animation.mouseEnabled = false;
    var u = a.getDefinitionByName(this.BEAM_FRONT_2_ANIMATION);
    this._beamFront2Animation = new u();
    this._disp.mc_beam_front_2_animation.name = this.BEAM_FRONT_2_ANIMATION;
    this._disp.mc_beam_front_2_animation.addChild(this._beamFront2Animation);
    this._disp.mc_beam_front_2_animation.mouseEnabled = false;
    var d = a.getDefinitionByName(this.BEAMS_MIDDLE_ANIMATION);
    this._beamsMiddleAnimation = new d();
    this._disp.mc_lightbeams_middle_animation.name = this.BEAMS_MIDDLE_ANIMATION;
    this._disp.mc_lightbeams_middle_animation.addChild(this._beamsMiddleAnimation);
    this._disp.mc_lightbeams_middle_animation.mouseEnabled = false;
    var p = a.getDefinitionByName(this.BEAMS_BACK_ANIMATION);
    this._beamBackAnimation = new p();
    this._disp.mc_beam_back_animation.name = this.BEAMS_BACK_ANIMATION;
    this._disp.mc_beam_back_animation.addChild(this._beamBackAnimation);
    this._disp.mc_beam_back_animation.mouseEnabled = false;
    this._lightBeamsAnimationsPlaceholders = [this._disp.mc_beam_front_1_animation, this._disp.mc_beam_front_2_animation, this._disp.mc_lightbeams_middle_animation, this._disp.mc_beam_back_animation];
    var h = a.getDefinitionByName(this.PARTICLES_ANIMATION);
    this._particlesAnimation = new h();
    this._disp.mc_particles_animation.name = this.PARTICLES_ANIMATION;
    this._disp.mc_particles_animation.addChild(this._particlesAnimation);
    this._disp.mc_particles_animation.mouseEnabled = false;
    var g = a.getDefinitionByName(this.DUST_ANIMATION);
    this._dustAnimation = new g();
    this._disp.mc_dust_animation.name = this.DUST_ANIMATION;
    this._disp.mc_dust_animation.addChild(this._dustAnimation);
    this._disp.mc_dust_animation.mouseEnabled = false;
    this._particlesAnimationsPlaceholders = [this._disp.mc_particles_animation, this._disp.mc_dust_animation];
    this.animations = [].concat(this._candlesAnimationsPlaceholders, this._candleLightAnimationsPlaceholders, this._lightBeamsAnimationsPlaceholders, this._particlesAnimationsPlaceholders);
  };
  AmbientAnimationsHandler.prototype.startAnimations = function () {
    var e;
    for (var t = 0; t < this._candlesAnimationsPlaceholders.length; t++) {
      e = this._candlesAnimationsPlaceholders[t];
      this.playAnimation(e, Math.floor(Math.random() * e.children[0].totalFrames));
      this.playAnimation(e, Math.floor(Math.random() * e.children[0].totalFrames));
    }
    c.TweenMax.fromTo(this._disp.mc_beam_front_1_animation, 6, {
      alpha: 1
    }, {
      alpha: 0.2,
      ease: r.Power2.easeInOut,
      delay: 5,
      yoyo: true,
      repeat: -1
    });
    c.TweenMax.fromTo(this._disp.mc_beam_front_2_animation, 6, {
      alpha: 1
    }, {
      alpha: 0.2,
      ease: r.Power2.easeInOut,
      delay: 6,
      yoyo: true,
      repeat: -1
    });
    c.TweenMax.fromTo(this._disp.mc_beam_back_animation, 6, {
      alpha: 1
    }, {
      alpha: 0.2,
      ease: r.Power2.easeInOut,
      delay: 4,
      yoyo: true,
      repeat: -1
    });
    c.TweenMax.fromTo(this._disp.mc_lightbeams_middle_animation, 6, {
      alpha: 1
    }, {
      alpha: 0.2,
      ease: r.Power2.easeInOut,
      delay: 4,
      yoyo: true,
      repeat: -1
    });
    c.TweenMax.fromTo(this._disp.mc_lightbeams_chandleliers_animation, 6, {
      alpha: 1
    }, {
      alpha: 0.2,
      ease: r.Power2.easeInOut,
      delay: 2,
      yoyo: true,
      repeat: -1
    });
    c.TweenMax.fromTo(this._disp.mc_dust_animation, 40, {
      alpha: 1
    }, {
      alpha: 0.1,
      ease: l.Power4.easeIn,
      delay: 4,
      yoyo: false,
      repeat: -1
    });
    c.TweenMax.fromTo(this._disp.mc_dust_animation, 6, {
      x: 170
    }, {
      x: 220,
      ease: s.Power1.easeInOut,
      delay: 0,
      yoyo: true,
      repeat: -1
    });
    c.TweenMax.fromTo(this._disp.mc_dust_animation, 40, {
      y: -300
    }, {
      y: -250,
      ease: s.Power1.easeInOut,
      delay: 0,
      yoyo: false,
      repeat: -1
    });
    c.TweenMax.fromTo(this._disp.mc_particles_animation, 40, {
      alpha: 1
    }, {
      alpha: 0.1,
      ease: l.Power4.easeIn,
      delay: 4,
      yoyo: false,
      repeat: -1
    });
    c.TweenMax.fromTo(this._disp.mc_particles_animation, 6, {
      x: -440
    }, {
      x: -480,
      ease: s.Power1.easeInOut,
      delay: 0,
      yoyo: true,
      repeat: -1
    });
    c.TweenMax.fromTo(this._disp.mc_particles_animation, 40, {
      y: -20
    }, {
      y: 30,
      ease: s.Power1.easeInOut,
      delay: 0,
      yoyo: true,
      repeat: -1
    });
  };
  return AmbientAnimationsHandler;
}(o.GeneralsHubBasicAnimationsHandler);
exports.AmbientAnimationsHandler = u;