Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./23.js");
var p = require("./23.js");
var h = require("./51.js");
var g = require("./4.js");
var C = require("./24.js");
var _ = function (e) {
  function CastleTutorialPanel(t = null) {
    var i = this;
    i._fadeAllowed = true;
    i._currentPosition = 0;
    i._lockedQuestGiverID = 0;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t ?? new Library.CastleInterfaceElements.TutorialPanel()) || this;
  }
  n.__extends(CastleTutorialPanel, e);
  CastleTutorialPanel.prototype.init = function () {
    e.prototype.init.call(this);
    this.icopy = this.textFieldManager.registerTextField(this.tutorialPanel.mc_speechBubble.txt_copy, new c.LocalizedTextVO(""));
    this.icopy.autoFitToBounds = true;
    this.icopy.mouseEnabled = false;
    this.tutorialPanel.mc_questGiver.mouseChildren = false;
    if (l.MobileHelper.isScreenTooSmall()) {
      this.tutorialPanel.mc_questGiver.scaleX = this.tutorialPanel.mc_questGiver.scaleY = 0.6;
      this.tutorialPanel.mc_speechBubble.scaleX = this.tutorialPanel.mc_speechBubble.scaleY = 0.6;
    }
  };
  CastleTutorialPanel.prototype.showSpeechBubble = function (e, t = u.int(h.ClientConstCharacter.CHAR_ID_UNKNOWN), i = u.int(CastleTutorialPanel.POS_CENTER), n = true, o = false) {
    this.setText(e, t);
    this.showWithFadeIn(i, n, o);
  };
  CastleTutorialPanel.prototype.hide = function () {
    this._lockedQuestGiverID = -1;
    e.prototype.hide.call(this);
  };
  CastleTutorialPanel.prototype.show = function () {
    e.prototype.show.call(this);
  };
  CastleTutorialPanel.prototype.showWithText = function (t, i, n = CastleTutorialPanel.POS_TOP_RIGHT, o = null) {
    e.prototype.show.call(this);
    this.setText(t, i, o);
    this.showWithFadeIn(n, false);
  };
  CastleTutorialPanel.prototype.setText = function (e, t, i = null) {
    r.MovieClipHelper.clearMovieClip(this.tutorialPanel.mc_questGiver);
    var n = g.CastleModel.questData.getQuestGiverSmallClassName(t, g.CastleModel.userData.hasAlternativeQuestGiver);
    var u = new C.CastleGoodgameExternalClip(n + "_Icon", o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(n), null, 0, false, l.getDefinitionByName("QuestGiverSmall_" + h.ClientConstCharacter.CHAR_ID_UNKNOWN + "_Icon"));
    if (t != h.ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER) {
      u.clipSizeComponent = new a.ClipSizeComponent(134, 153);
    }
    this.tutorialPanel.mc_questGiver.addChild(u.asDisplayObject());
    this._lockedQuestGiverID = t;
    this.icopy ||= this.textFieldManager.registerTextField(this.tutorialPanel.mc_speechBubble.txt_copy, new c.LocalizedTextVO(""));
    this._fadeAllowed = this.icopy.textContentVO.textId != e;
    this.icopy.textContentVO.textId = e;
    if (i) {
      this.icopy.textContentVO.textReplacements = i;
    }
    this.icopy.verticalAlign = s.GGSVerticalAlign.MIDDLE;
  };
  CastleTutorialPanel.prototype.showWithFadeIn = function (e, t = true, i = false) {
    this._currentPosition = e;
    this.updatePosition();
    this.hideOkButton();
    this.tutorialPanel.mc_speechBubble.visible = false;
    this.tutorialPanel.mc_questGiver.visible = true;
    this.show();
    if (t && this._fadeAllowed) {
      p.TweenMax.fromTo(this.tutorialPanel.mc_questGiver, 0, {
        alpha: 0.1
      }, {
        alpha: 1,
        ease: d.Linear.easeOut,
        onComplete: this.fadeInSpeechBubble,
        onCompleteParams: [i]
      });
    } else {
      this.tutorialPanel.mc_questGiver.alpha = 1;
      this.fadeInSpeechBubble([i]);
    }
  };
  CastleTutorialPanel.prototype.fadeInSpeechBubble = function (e) {
    if (e.shift()) {
      this.showOkButton();
    }
    this.tutorialPanel.mc_speechBubble.visible = true;
    if (this._fadeAllowed) {
      p.TweenMax.fromTo(this.tutorialPanel.mc_speechBubble, 0, {
        alpha: 0.1
      }, {
        alpha: 1,
        ease: d.Linear.easeOut
      });
    }
  };
  CastleTutorialPanel.prototype.showOkButton = function () {
    this.tutorialPanel.mc_speechBubble.btn_ok.visible = true;
    this.tutorialPanel.mouseChildren = true;
  };
  CastleTutorialPanel.prototype.hideOkButton = function () {
    this.tutorialPanel.mc_speechBubble.btn_ok.visible = false;
    this.tutorialPanel.mouseChildren = false;
  };
  CastleTutorialPanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      var e = u.int(this._lockedQuestGiverID == h.ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER ? 30 : 0);
      switch (this._currentPosition) {
        case CastleTutorialPanel.POS_TOP_RIGHT:
          this.disp.x = this.disp.stage.stageWidth - e;
          this.disp.y = -50;
          break;
        case CastleTutorialPanel.POS_BOTTOM_RIGHT:
          this.disp.x = this.disp.stage.stageWidth - e;
          this.disp.y = this.disp.stage.stageHeight - 275;
          break;
        case CastleTutorialPanel.POS_TOP_RIGHT_MINUS_FIFTY:
          this.disp.x = this.disp.stage.stageWidth - e;
          this.disp.y = -100;
          break;
        case CastleTutorialPanel.POS_MIDDLE_RIGHT:
        case CastleTutorialPanel.POS_CENTER:
          this.disp.x = this.disp.stage.stageWidth - e;
          this.disp.y = this.disp.stage.stageHeight * 0.5 - this.disp.height * 0.5;
      }
    }
  };
  Object.defineProperty(CastleTutorialPanel.prototype, "lockedQuestGiverID", {
    get: function () {
      return this._lockedQuestGiverID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTutorialPanel.prototype, "tutorialPanel", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleTutorialPanel.NAME = "CastleTutorialPanel";
  CastleTutorialPanel.POS_TOP_RIGHT = 0;
  CastleTutorialPanel.POS_BOTTOM_RIGHT = 1;
  CastleTutorialPanel.POS_TOP_RIGHT_MINUS_FIFTY = 2;
  CastleTutorialPanel.POS_MIDDLE_RIGHT = 3;
  CastleTutorialPanel.POS_CENTER = 4;
  return CastleTutorialPanel;
}(require("./131.js").CastlePanel);
exports.CastleTutorialPanel = _;