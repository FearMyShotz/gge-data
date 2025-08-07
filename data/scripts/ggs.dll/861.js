Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./31.js");
var s = require("./115.js");
var r = require("./82.js");
var o = require("./100.js");
var l = require("./188.js");
var u = require("./5.js");
var c = require("./11.js");
var _ = require("./4.js");
var d = require("./18.js");
var m = require("./3.js");
var h = createjs.MovieClip;
var p = createjs.TimerEvent;
var g = function (e) {
  function BasicBackgroundComponent(t) {
    var n = e.call(this, t) || this;
    n.randomLoadingTextCount = 1;
    n._progressBarEnabled = true;
    n.onLoadedSignal = new r.NoneValueSignal();
    t.addEventListener("mouseover", n.bindFunction(n.onMouseOver));
    t.addEventListener("mouseout", n.bindFunction(n.onMouseOut));
    return n;
  }
  i.__extends(BasicBackgroundComponent, e);
  Object.defineProperty(BasicBackgroundComponent.prototype, "backgroundView", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  BasicBackgroundComponent.prototype.updateLoadingProgress = function (e) {
    this.progressBar.progressBarStatus.scaleX = e / 100;
  };
  Object.defineProperty(BasicBackgroundComponent.prototype, "progressBar", {
    get: function () {
      return this.backgroundView.mc_progressBar;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBackgroundComponent.prototype, "supportBtn", {
    get: function () {
      return this.backgroundView.mc_bg.btn_mailsupport;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBackgroundComponent.prototype, "background", {
    get: function () {
      return this.backgroundView.mc_bg;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBackgroundComponent.prototype, "versionTextfield", {
    get: function () {
      return this.backgroundView.mc_bg.txt_version;
    },
    enumerable: true,
    configurable: true
  });
  BasicBackgroundComponent.prototype.show = function () {
    e.prototype.show.call(this);
    this.backgroundView.play();
  };
  BasicBackgroundComponent.prototype.updatePosition = function () {
    if (this.background) {
      var e = this.background.getBounds();
      var t = this.backgroundView.stage.stageWidth / e.width;
      if (e.height * t > this.backgroundView.stage.stageHeight) {
        t = this.backgroundView.stage.stageHeight / e.height;
      }
      this.backgroundView.mc_progressBar.x = this.backgroundView.stage.stageWidth * 0.5;
      this.backgroundView.mc_progressBar.y = this.backgroundView.stage.stageHeight * 0.5;
      this.background.scaleX = this.background.scaleY = t;
      this.backgroundView.mc_bg.x = (this.backgroundView.stage.stageWidth - e.width * t) * 0.5;
      this.backgroundView.mc_bg.y = this.backgroundView.stage.stageHeight - e.height * t;
    }
  };
  Object.defineProperty(BasicBackgroundComponent.prototype, "scaleFactor", {
    get: function () {
      return this.background.scaleX;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBackgroundComponent.prototype, "gameNullPoint", {
    get: function () {
      return this.background.x;
    },
    enumerable: true,
    configurable: true
  });
  BasicBackgroundComponent.prototype.startProgressBar = function () {
    this.progressText = this.getRandomLoadingText();
    this.updateLoadingProgress(0);
    this.progressStartTime = Date.now();
    this.progressTimer ||= new m.Timer(20);
    this.progressTimer.addEventListener(p.TIMER, this.bindFunction(this.onProgressTimer));
    this.progressTimer.start();
    this.loadingTextUpdateTimer ||= new m.Timer(c.BasicConstants.AUTOMATIC_LOADING_BAR_UPDATE_TIME);
    this.loadingTextUpdateTimer.addEventListener(p.TIMER, this.bindFunction(this.updateRandomLoadingText));
    this.loadingTextUpdateTimer.start();
  };
  BasicBackgroundComponent.prototype.stopProgressBar = function () {
    if (this.progressTimer) {
      this.progressTimer.stop();
      this.progressTimer.removeEventListener(p.TIMER, this.bindFunction(this.onProgressTimer));
    }
    if (this.loadingTextUpdateTimer) {
      this.loadingTextUpdateTimer.removeEventListener(p.TIMER, this.bindFunction(this.updateRandomLoadingText));
      this.loadingTextUpdateTimer.stop();
    }
  };
  BasicBackgroundComponent.prototype.updateRandomLoadingText = function (e = null) {
    if (this.progressBar.parent != null && this.progressBar.visible != 0) {
      this.progressText = this.getRandomLoadingText();
    }
  };
  BasicBackgroundComponent.prototype.getRandomLoadingText = function () {
    if (this.randomLoadingTextCount > this.maxLoadingTextCount) {
      this.randomLoadingTextCount = 1;
    }
    var e = this.loadingTextIdPrefix + this.randomLoadingTextCount;
    this.randomLoadingTextCount++;
    if (_.BasicModel.languageData.languageXMLLoaded) {
      return d.Localize.text(e);
    } else {
      return "";
    }
  };
  BasicBackgroundComponent.prototype.updateLoadingText = function (e) {
    switch (e) {
      case c.BasicConstants.ITEM_XML_LOADER:
        this.progressText = d.Localize.text("loading_text_itemXML");
        break;
      default:
        this.progressText = this.getRandomLoadingText();
    }
  };
  Object.defineProperty(BasicBackgroundComponent.prototype, "progressText", {
    set: function (e) {
      if (this.env.showLoadingText && "txt_progress" in this.progressBar) {
        this.progressBar.txt_progress.text = e;
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicBackgroundComponent.prototype.onProgressTimer = function (e) {
    var t = Math.sin((Date.now() - this.progressStartTime) % c.BasicConstants.AUTOMATIC_LOADING_BAR_UPDATE_TIME / c.BasicConstants.AUTOMATIC_LOADING_BAR_UPDATE_TIME * (Math.PI * 0.5));
    var n = (t *= 100) > 0 ? Math.floor(t + 0.5) : Math.floor(t - 0.5);
    this.updateLoadingProgress(n);
  };
  BasicBackgroundComponent.prototype.hideProgressBar = function () {
    if (this.progressBar) {
      this.progressBar.visible = false;
      this.progressText = "";
    }
  };
  BasicBackgroundComponent.prototype.showProgressBar = function () {
    if (this._progressBarEnabled) {
      this.progressBar.visible = true;
      this.progressText = this.getRandomLoadingText();
    }
  };
  BasicBackgroundComponent.prototype.hide = function () {
    e.prototype.hide.call(this);
    if (this.backgroundView) {
      this.backgroundView.stop();
      for (var t = 0; t < this.backgroundView.numChildren; t++) {
        if (this.backgroundView.getChildAt(t) instanceof h) {
          this.backgroundView.getChildAt(t).stop();
        }
      }
    }
  };
  BasicBackgroundComponent.prototype.destroy = function () {
    this.disp.removeEventListener("mouseover", this.bindFunction(this.onMouseOver));
    this.disp.removeEventListener("mouseout", this.bindFunction(this.onMouseOut));
    e.prototype.destroy.call(this);
  };
  BasicBackgroundComponent.prototype.init = function () {
    if (this.versionTextfield) {
      this.versionTextfield.text = this.env.versionText;
      this.versionTextfield.visible = this.env.showVersion;
      this.updateLoadingProgress(0);
    }
    if (this.backgroundView && this.supportBtn) {
      this.supportBtn.visible = this.env.useexternallinks;
      this.supportBtn.addEventListener("click", this.bindFunction(this.onClick));
      this.supportBtn.addEventListener("mouseover", this.bindFunction(this.onOverSupport));
      this.supportBtn.addEventListener("mouseout", this.bindFunction(this.onOutSupport));
    }
  };
  BasicBackgroundComponent.prototype.showVersion = function () {
    this.versionTextfield.text = this.env.versionText;
    this.versionTextfield.visible = this.env.showVersion;
    if (this.supportBtn) {
      this.supportBtn.visible = this.env.useexternallinks;
    }
  };
  BasicBackgroundComponent.prototype.onMouseOver = function (e) {};
  BasicBackgroundComponent.prototype.onMouseOut = function (e) {};
  BasicBackgroundComponent.prototype.onOverSupport = function (e) {
    var t = this.supportBtn.scaleX * 1.05;
    this.supportBtn.scaleX = this.supportBtn.scaleY = t;
    if (this.customCursor) {
      this.customCursor.setCursorType(l.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  BasicBackgroundComponent.prototype.onOutSupport = function (e) {
    var t = this.supportBtn.scaleX * 1 / 1.05;
    this.supportBtn.scaleX = this.supportBtn.scaleY = t;
    if (this.customCursor) {
      this.customCursor.setCursorType(l.BasicCustomCursor.CURSOR_ARROW);
    }
  };
  BasicBackgroundComponent.prototype.onClick = function (e) {
    if (e.target == this.supportBtn) {
      s.SupportUtil.navigateToSupport(_.BasicModel.instanceProxy.selectedInstanceVO.instanceId, this.env.versionText, "-", -1, -1, a.GGSCountryController.instance.currentCountry.ggsLanguageCode);
    }
  };
  Object.defineProperty(BasicBackgroundComponent.prototype, "env", {
    get: function () {
      return u.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBackgroundComponent.prototype, "progressBarEnabled", {
    get: function () {
      return this._progressBarEnabled;
    },
    set: function (e) {
      this._progressBarEnabled = e;
      if (this._progressBarEnabled) {
        this.showProgressBar();
      } else {
        this.hideProgressBar();
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicBackgroundComponent.prototype.setProgressbarUpdateMethod = function (e) {
    if (e && this.progressTimer) {
      this.stopProgressBar();
    } else if (!e && !this.progressTimer) {
      this.startProgressBar();
    }
  };
  Object.defineProperty(BasicBackgroundComponent.prototype, "loadingTextIdPrefix", {
    get: function () {
      return "loading_text_";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBackgroundComponent.prototype, "maxLoadingTextCount", {
    get: function () {
      return c.BasicConstants.NUM_RANDOM_LOADINGTEXT_ELEMENTS_AVAILABLE;
    },
    enumerable: true,
    configurable: true
  });
  return BasicBackgroundComponent;
}(o.FlashUIComponent);
exports.BasicBackgroundComponent = g;