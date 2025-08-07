Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./2.js");
var p = require("./2.js");
var h = require("./2.js");
var g = require("./2.js");
var C = require("./1.js");
var _ = require("./1.js");
var m = require("./1.js");
var f = require("./3.js");
var O = require("./3.js");
var E = require("./6.js");
var y = require("./18.js");
var b = require("./16.js");
var D = require("./342.js");
var I = require("./306.js");
var T = require("./24.js");
var v = require("./683.js");
var S = require("./4163.js");
var A = require("./41.js");
var L = require("./381.js");
var P = createjs.Container;
var M = createjs.TextField;
var R = createjs.MouseEvent;
var V = require("./1137.js");
var x = require("./334.js");
var w = function (e) {
  function CastleStartscreenComponent(t = null) {
    var i = this;
    i.showAnimation = false;
    i.bgAnimationMP4Played = false;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t || new (C.getDefinitionByName("CastleStartscreenBackground_ZZZ39Facebook"))()) || this;
  }
  n.__extends(CastleStartscreenComponent, e);
  CastleStartscreenComponent.prototype.init = function () {
    var t = this;
    e.prototype.init.call(this);
    this.updateSupportBnt();
    this.copyrightDisp.visible = false;
    this.initCopyrights();
    s.BasicLanguageFontManager.getInstance().addEventListener(p.LanguageDataEvent.FONT_LOAD_COMPLETE, this.bindFunction(this.onFontsLoaded));
    u.GGSCountryController.instance.currentCountryChanged.add(this.bindFunction(this.onCountryChanged));
    f.Localization.usePipe = false;
    this.startScreen.mc_bg.mc_copyright.visible = false;
    this._supportTooltip = new S.TooltipDisplayLite(new O.LocalizedTextVO("support_GGS_tooltip"));
    CastleStartscreenComponent.onStartScreenShown = new g.NoneValueSignal();
    if (_.currentBrowserInfo.isMobile) {
      CastleStartscreenComponent.onTouchMoveSignal = new o.PointSignal();
      CastleStartscreenComponent.onTouchMoveSignal.add(function (e) {
        if (e === null) {
          t.startScreen.y = 0;
          t.supportBtn.y = t.startScreen.stage.stageHeight - 23;
        } else {
          t.startScreen.y += e.y;
          t.supportBtn.y -= e.y;
        }
      });
    }
  };
  CastleStartscreenComponent.prototype.updateSupportBnt = function () {
    this.supportBtn.mouseChildren = false;
    this.supportBtn.visible = this.env.useexternallinks && !D.ClientConstInstanceIDs.isBetaInstance() && m.instanceOfClass(this.env, "CastleEnvironmentGlobals") && !this.env.isClosedBeta;
  };
  CastleStartscreenComponent.prototype.initCopyrights = function () {
    if (!this._copyright_AGB || !this._copyright_Impressum || !this._copyright_Support || !this._copyright_Forum || !this._copyright_GG) {
      this._copyright_AGB = new L.LinkComponent(this.copyrightDisp.mc_agb, "copyright_agb", this.env.urlAGB);
      this._copyright_Impressum = new L.LinkComponent(this.copyrightDisp.mc_impressum, "copyright_impressum", "https://www.goodgamestudios.com/terms_ja/");
      this._copyright_Support = new L.LinkComponent(this.copyrightDisp.mc_Support, "copyright_support", "https://support.goodgamestudios.com/?g=12&lang=" + this.env.currentCountryLanguageCode);
      this._copyright_Forum = new L.LinkComponent(this.copyrightDisp.mc_forum, "copyright_forum", "https://" + this.env.currentCountryLanguageCode + ".board.goodgamestudios.com/empire/");
      this._copyright_GG = new L.LinkComponent(this.copyrightDisp.mc_gg, "copyright_gg", "https://www.goodgamestudios.com");
    }
  };
  CastleStartscreenComponent.prototype.updateCopyright = function () {
    this.copyrightDisp.visible = this.env.currentCountryLanguageCode == "ja";
    if (this.copyrightDisp.visible) {
      this.initCopyrights();
      this._copyright_AGB.update(this.env.urlAGB);
      this._copyright_Impressum.update("https://www.goodgamestudios.com/terms_ja/");
      this._copyright_Support.update("https://support.goodgamestudios.com/?g=12&lang=" + this.env.currentCountryLanguageCode);
      this._copyright_Forum.update("https://community.goodgamestudios.com/empire/" + this.env.currentCountryLanguageCode);
      this._copyright_GG.update();
      this.copyrightDisp.doCache();
      this.copyrightDisp.updateCache();
    }
  };
  CastleStartscreenComponent.prototype.onOverSupport = function (t) {
    e.prototype.onOverSupport.call(this, t);
    t.target.addChild(this._supportTooltip);
    this._supportTooltip.show();
    if (t.target.cacheCanvas) {
      t.target.doCache();
    }
  };
  CastleStartscreenComponent.prototype.onOutSupport = function (t) {
    e.prototype.onOutSupport.call(this, t);
    t.target.removeChild(this._supportTooltip);
    this._supportTooltip.hide();
    if (t.target.cacheCanvas) {
      t.target.doCache();
    }
  };
  CastleStartscreenComponent.prototype.onCountryChanged = function (e) {
    this.updateCopyright();
  };
  CastleStartscreenComponent.prototype.update = function () {
    this.backgroundView.scaleY *= 1.0001;
    this.updateCopyright();
    this.updatePosition();
  };
  CastleStartscreenComponent.prototype.onFontsLoaded = function (e = null) {
    this.update();
  };
  CastleStartscreenComponent.prototype.onAddedToStage = function (t) {
    e.prototype.onAddedToStage.call(this, t);
    this.initBackground();
    this.customCursor = new v.CastleNativeCustomCursor();
    this.customCursor.init();
    this.startScreen.addChild(this.customCursor.disp);
    if (this.startScreen.mc_bg && this.startScreen.mc_bg.numChildren > 3 && this.startScreen.mc_bg.getChildAt(4)) {
      this.startScreen.mc_bg.getChildAt(4).doCache();
    }
  };
  CastleStartscreenComponent.prototype.initBackground = function () {
    this._backgroundSprite = new P();
    this._backgroundSprite.graphics.beginFill(b.ClientConstColor.BACKGROUND_COLOR);
    this._backgroundSprite.graphics.drawRect(0, 0, 1, 1);
    this._backgroundSprite.graphics.endFill();
    this.startScreen.addChildAt(this._backgroundSprite, 0);
  };
  CastleStartscreenComponent.prototype.showVersion = function () {
    var e = this.backgroundView.mc_bg.txt_version__duplicate__0_0_1 || this.backgroundView.mc_bg.txt_version;
    e.text = I.CastleVersionInformation.versionInstance.versionText.replace(/\n/g, "");
    e.visible = true;
    if (this.supportBtn) {
      this.supportBtn.visible = this.env.useexternallinks;
    }
    if (this.env.versionInformation.serverXMLVersion == this.env.versionInformation.itemXmlVersion || !this.env.isTest && !this.env.urlVariables.forceToShowTestServers) {
      e.textColor = 2626317;
    } else {
      e.textColor = 16711935;
    }
    this.updateSupportBnt();
  };
  CastleStartscreenComponent.prototype.loadBackground = function () {
    var e = new T.CastleGoodgameExternalClip("CastleStartscreenBackground_BG", r.BasicModel.basicLoaderData.getVersionedItemAssetUrl("CastleStartscreenBackground_BG"), null, 0, false, null, false, 1, false, false, true);
    if (e.isLoaded) {
      this.onBackgroundIsLoaded();
    } else {
      e.clipLoaded.addOnce(this.bindFunction(this.onBackgroundIsLoaded));
    }
    this.startScreen.mc_bg.mc_bgHolder.addChild(e.asDisplayObject());
  };
  CastleStartscreenComponent.prototype.onBackgroundIsLoaded = function (e = null) {
    l.ClientFunnelTrackingController.getInstance().trackState("interfaceLoaded_startscreenBackground");
    this.updatePosition();
  };
  CastleStartscreenComponent.prototype.loadAnimation = function () {};
  CastleStartscreenComponent.prototype.onResize = function (t) {
    var i = this;
    if (!_.currentBrowserInfo.isMobile || !M.isMobileKeyboardShown) {
      e.prototype.onResize.call(this, t);
      this.updatePosition();
      if (this.timeoutForResize) {
        clearTimeout(this.timeoutForResize);
      }
      this.timeoutForResize = window.setTimeout(function () {
        i.updatePosition();
        clearTimeout(i.timeoutForResize);
      }, 300);
    }
  };
  CastleStartscreenComponent.prototype.getRandomLoadingText = function () {
    this.updateCopyright();
    if (this.randomLoadingTextCount > y.ClientConstCastle.NUM_RANDOM_LOADINGTEXT_ELEMENTS_AVAILABLE) {
      this.randomLoadingTextCount = 1;
    }
    var e = "loading_text_empire_" + this.randomLoadingTextCount;
    this.randomLoadingTextCount++;
    return e;
  };
  CastleStartscreenComponent.prototype.startProgressBar = function () {
    e.prototype.startProgressBar.call(this);
  };
  Object.defineProperty(CastleStartscreenComponent.prototype, "progressText", {
    get: function () {
      return Object.getOwnPropertyDescriptor(o.BasicBackgroundComponent.prototype, "progressText").get.call(this);
    },
    set: function (e) {
      if (this.progressBar.txt_loadingText && this.env.showLoadingText && r.BasicModel.languageData) {
        this.textFieldManager.registerTextField(this.progressBar.txt_loadingText, new O.LocalizedTextVO(e));
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartscreenComponent.prototype, "startScreen", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartscreenComponent.prototype, "copyrightDisp", {
    get: function () {
      return this.backgroundView.mc_bg.mc_copyright;
    },
    enumerable: true,
    configurable: true
  });
  CastleStartscreenComponent.prototype.updatePosition = function () {
    var e = this.disp.stage ? this.disp.stage.stageWidth : document.documentElement.clientWidth;
    var t = this.disp.stage ? this.disp.stage.stageHeight : document.documentElement.clientHeight;
    this.backgroundView.mc_progressBar.x = e * 0.5;
    this.backgroundView.mc_progressBar.y = 275;
    this.supportBtn.y = V.CastleStartscreenPanel.getBottomOffset(e, t) - 23;
    if (this.background) {
      this.background.x = (e - 1650) / 2;
      this.background.y = 0;
    }
    if (_.MobileHelper.isScreenTooSmall()) {
      this.supportBtn.x = 840 - e / 2;
    }
    var i = E.int(document.getElementById("edgeStartscreenVideoReplacement").clientWidth);
    var n = E.int(document.getElementById("edgeStartscreenVideoReplacement").clientHeight);
    if (this.copyrightDisp.visible) {
      var o = E.int(Math.min(e, i));
      this.copyrightDisp.x = o - this.backgroundView.x - (this.background ? this.background.x : 0) + (e - o) * 0.5;
      var a = E.int(Math.min(t, n));
      this.copyrightDisp.y = a;
    }
    if (x.StartscreenHelper.hasBackgroundAnimation()) {
      x.StartscreenHelper.updateBackgroundAnimation(this.bgAnimationMP4Played);
    }
    if (this._backgroundSprite && this._backgroundSprite.stage) {
      this._backgroundSprite.width = e / this.disp.scaleX;
      this._backgroundSprite.height = t / this.disp.scaleY;
      this._backgroundSprite.x = -this.disp.x / this.disp.scaleX;
      this._backgroundSprite.y = -this.disp.y / this.disp.scaleY;
      window.renderBgStageOnNextTick = true;
    }
  };
  Object.defineProperty(CastleStartscreenComponent.prototype, "textFieldManager", {
    get: function () {
      return d.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleStartscreenComponent.prototype.hide = function () {
    u.GGSCountryController.instance.currentCountryChanged.remove(this.bindFunction(this.onCountryChanged));
    e.prototype.hide.call(this);
    if (this.backgroundAnimation && this.backgroundAnimation.isLoaded) {
      this.backgroundAnimation.stop();
      A.CastleMovieClipHelper.stopAllMovies(this.backgroundAnimation.currentshownDisplayObject, 1);
    }
    this._supportTooltip.hide();
    this.progressBar.removeEventListener(R.CLICK, this.bindFunction(this.onClick));
    this.disp.parent.mouseEnabled = this.disp.parent.tickEnabled = this.disp.parent.tickChildren = this.disp.parent.visible = false;
    this.disp.visible = false;
    document.getElementById("edgeStartscreenVideoReplacement").style.display = "none";
    var t = document.getElementById("startScreenVideo");
    if (t) {
      t.style.display = "none";
      try {
        if (this.bgAnimationMP4Played && t.isPlaying) {
          t.pause();
          this.bgAnimationMP4Played = false;
        }
      } catch (e) {}
    }
  };
  CastleStartscreenComponent.prototype.show = function () {
    var t = this;
    e.prototype.show.call(this);
    if (this.showAnimation && this.backgroundAnimation && this.backgroundAnimation.isLoaded) {
      h.MovieClipHelper.playAllMovies(this.backgroundAnimation.currentshownDisplayObject);
    }
    if (this.env.isTest) {
      this.progressBar.mouseChildren = false;
      this.progressBar.addEventListener(R.CLICK, this.bindFunction(this.onClick));
    }
    this.disp.parent.mouseEnabled = this.disp.parent.tickEnabled = this.disp.parent.tickChildren = this.disp.parent.visible = true;
    this.disp.visible = true;
    if (window.bgStage) {
      window.bgStage.color = "transparent";
    }
    if (document.getElementById("loading")) {
      window.setLoadingScreenProgress(93);
    } else if (x.StartscreenHelper.hasBackgroundAnimation()) {
      var i = document.getElementById("startScreenVideo");
      if (i) {
        i.style.display = "block";
        var n = i.play();
        if (n && n.then) {
          n.then(function () {
            t.bgAnimationMP4Played = true;
          }, function (e) {
            i.style.display = "none";
            document.getElementById("edgeStartscreenVideoReplacement").style.display = "block";
          });
        }
      }
    } else {
      document.getElementById("edgeStartscreenVideoReplacement").style.display = "block";
    }
  };
  CastleStartscreenComponent.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (t.target == this.supportBtn) {
      t.stopPropagation();
    }
    if (t.target == this.progressBar) {
      c.CommandController.instance.executeCommand(a.BasicController.COMMAND_CONNECTION_TIMEOUT);
    }
  };
  return CastleStartscreenComponent;
}(o.BasicBackgroundComponent);
exports.CastleStartscreenComponent = w;