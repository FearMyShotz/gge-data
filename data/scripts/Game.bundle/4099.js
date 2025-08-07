Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./21.js");
var d = require("./4.js");
var p = require("./804.js");
var h = require("./943.js");
var g = require("./4100.js");
var C = createjs.Event;
var _ = function (e) {
  function CastleTaxComponent(t) {
    var i = this;
    i.startScale = 0;
    i.oldTaxState = -1;
    i._active = false;
    i.lastUpdated = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).startScale = i.taxComponent.btn_tax.scaleX;
    i.speechBubble = new g.CastleSpeechBubbleComponent(i.taxComponent.mc_speechBubble, i.taxComponent.mc_speechBubble.txt_text);
    i.speechBubble.initComponent(l.Localize.text("speechbubble_launchTaxman"), -1, -1, 0, 1);
    i.speechBubble.disp.actLikeButton = true;
    return i;
  }
  n.__extends(CastleTaxComponent, e);
  CastleTaxComponent.prototype.init = function () {
    e.prototype.init.call(this);
    this.txtTaxTime = h.CastleUIComponent.textFieldManager.registerTextField(this.taxComponent.mc_taxTime.txt_taxTime, new c.TextVO(""));
    this.taxComponent.mc_speechBubble.mouseChildren = false;
    this.taxComponent.mc_speechBubble.basicButton = new o.BasicButton(this.taxComponent.mc_speechBubble);
    this.taxComponent.btn_tax.doCache();
    this.taxComponent.mc_speechBubble.doCache();
  };
  CastleTaxComponent.prototype.applyProperties = function () {
    d.CastleModel.timerData.addEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTaxDataUpdated));
    this.onTaxDataUpdated();
    this.taxComponent.btn_tax.direction = 0;
  };
  CastleTaxComponent.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.taxComponent.mc_speechBubble:
      case this.taxComponent.btn_tax:
        a.CommandController.instance.executeCommand(m.IngameClientCommands.OPEN_ACTIVE_TAX_DIALOG_COMMAND);
    }
  };
  CastleTaxComponent.prototype.onTaxDataUpdated = function (e = null) {
    if (!this.taxInfoVO || this.taxInfoVO.taxState != p.TaxInfoVO.TAXSTATUS_WAIT_FOR_COLLECT) {
      this.taxComponent.btn_tax.rotation = 0;
    }
    this.taxComponent.btn_tax.scaleX = this.taxComponent.btn_tax.scaleY = this.startScale;
    this.initTaxComponent();
  };
  CastleTaxComponent.prototype.initTaxComponent = function () {
    var e = this.taxInfoVO;
    if (e) {
      switch (e.taxState) {
        case p.TaxInfoVO.TAXSTATUS_NONE:
          this.txtTaxTime.visible = false;
          if (this.oldTaxState != p.TaxInfoVO.TAXSTATUS_NONE || this.oldTaxState == -1) {
            this.speechBubble.bubbleText = l.Localize.text("speechbubble_launchTaxman");
            if (this.speechBubble.disp.cacheCanvas) {
              this.speechBubble.disp.updateCache();
            } else {
              this.speechBubble.disp.doCache();
            }
            this.showTaxBubble();
          }
          break;
        case p.TaxInfoVO.TAXSTATUS_COLLECTING:
          this.showTaxTime();
          if (this.oldTaxState != p.TaxInfoVO.TAXSTATUS_COLLECTING || this.oldTaxState == -1) {
            this.speechBubble.hide();
          }
          break;
        case p.TaxInfoVO.TAXSTATUS_WAIT_FOR_COLLECT:
          this.txtTaxTime.visible = false;
          if (this.oldTaxState != p.TaxInfoVO.TAXSTATUS_WAIT_FOR_COLLECT || this.oldTaxState == -1) {
            this.speechBubble.bubbleText = l.Localize.text("speechbubble_waitForCollect");
            if (this.speechBubble.disp.cacheCanvas) {
              this.speechBubble.disp.updateCache();
            } else {
              this.speechBubble.disp.doCache();
            }
            if (d.CastleModel.tutorialData.isInTutorial()) {
              this.speechBubble.hide();
            } else {
              this.showTaxBubble();
            }
          }
      }
      this.oldTaxState = e.taxState;
    }
  };
  CastleTaxComponent.prototype.showTaxBubble = function () {
    if (this.taxInfoVO.population > 0) {
      this.speechBubble.show();
    }
  };
  CastleTaxComponent.prototype.onEnterFrame = function (e) {
    if (this.taxInfoVO) {
      switch (this.taxInfoVO.taxState) {
        case p.TaxInfoVO.TAXSTATUS_NONE:
          this.scaleButton();
          break;
        case p.TaxInfoVO.TAXSTATUS_WAIT_FOR_COLLECT:
          this.shakeButton();
      }
    }
  };
  CastleTaxComponent.prototype.shakeButton = function () {
    if (!(f.CachedTimer.getCachedTimer() < this.lastUpdated + 1000 / 30)) {
      this.lastUpdated = f.CachedTimer.getCachedTimer();
      if (this.taxComponent.btn_tax.direction == 0) {
        if (this.taxComponent.btn_tax.rotation - CastleTaxComponent.SPEED < -20) {
          this.taxComponent.btn_tax.direction = 1;
        } else {
          this.taxComponent.btn_tax.rotation -= CastleTaxComponent.SPEED;
        }
      } else if (this.taxComponent.btn_tax.rotation + CastleTaxComponent.SPEED > 20) {
        this.taxComponent.btn_tax.direction = 0;
      } else {
        this.taxComponent.btn_tax.rotation += CastleTaxComponent.SPEED;
      }
    }
  };
  CastleTaxComponent.prototype.scaleButton = function () {
    if (this.taxComponent.btn_tax.direction == 0) {
      if (this.taxComponent.btn_tax.scaleX - CastleTaxComponent.SCALE_SPEED < this.startScale) {
        this.taxComponent.btn_tax.direction = 1;
      } else {
        this.taxComponent.btn_tax.scaleX = this.taxComponent.btn_tax.scaleY -= CastleTaxComponent.SCALE_SPEED;
      }
    } else if (this.taxComponent.btn_tax.scaleX + CastleTaxComponent.SCALE_SPEED > this.startScale) {
      this.taxComponent.btn_tax.direction = 0;
    } else {
      this.taxComponent.btn_tax.scaleX = this.taxComponent.btn_tax.scaleY += CastleTaxComponent.SCALE_SPEED;
    }
  };
  CastleTaxComponent.prototype.showTaxTime = function () {
    this.txtTaxTime.textContentVO.stringValue = s.TimeStringHelper.getShortTimeStringBySeconds(this.taxInfoVO.remainingCollectionTimeInSeconds, s.TimeStringHelper.TWO_TIME_FORMAT);
    this.txtTaxTime.visible = this.taxInfoVO.remainingCollectionTimeInSeconds > 0;
  };
  CastleTaxComponent.prototype.destroy = function () {
    d.CastleModel.timerData.removeEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTaxDataUpdated));
    e.prototype.destroy.call(this);
    this.speechBubble.destroy();
  };
  Object.defineProperty(CastleTaxComponent.prototype, "taxComponent", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTaxComponent.prototype, "active", {
    get: function () {
      return this._active;
    },
    set: function (e) {
      this._active = e;
      if (this._active) {
        this.disp.stage.addEventListener(C.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
      } else {
        this.disp.stage.removeEventListener(C.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTaxComponent.prototype, "taxInfoVO", {
    get: function () {
      return d.CastleModel.taxData.taxInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleTaxComponent.SPEED = 5;
  CastleTaxComponent.SCALE_SPEED = 0.01;
  return CastleTaxComponent;
}(h.CastleUIComponent);
exports.CastleTaxComponent = _;
var m = require("./29.js");
var f = require("./30.js");
r.classImplementsInterfaces(_, "ICollectableRendererList");