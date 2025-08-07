Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./51.js");
var d = require("./1058.js");
var p = require("./4.js");
var h = require("./24.js");
var g = require("./106.js");
var C = require("./11.js");
var _ = createjs.GlowFilter;
var m = function (e) {
  function CastleStartQuestDialog() {
    var t = this;
    t._questStartPanelIsHidden = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleStartQuestDialog.NAME) || this;
  }
  n.__extends(CastleStartQuestDialog, e);
  CastleStartQuestDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    if (this._questStartPanelIsHidden) {
      var i = O.castAs(this.layoutManager.getPanel(f.CastleQuestStartPanel), "CastleQuestStartPanel");
      if (i) {
        i.showWithoutSpeechBubble();
      }
      this._questStartPanelIsHidden = false;
    }
    this.finishQuestStarter();
    p.CastleModel.questData.isFirstQuestAfterStarter = this.dialogProperties.quest.numberOfQuestsInSeries > 1;
  };
  CastleStartQuestDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_value, new l.LocalizedTextVO("commons_continue"));
    this.dialogDisp.btn_ok.mouseChildren = false;
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    if (!this.isOutOfTutorial()) {
      var t = O.castAs(this.layoutManager.getPanel(f.CastleQuestStartPanel), "CastleQuestStartPanel");
      if (t) {
        t.hide();
      }
      this._questStartPanelIsHidden = true;
    }
    var i;
    var n = c.int(this.dialogProperties.quest.questGiverID);
    var o = this.dialogProperties.quest.getQuestSeriesTextWithNumbers();
    var a = this.dialogProperties.quest.getQuestInfoTextId();
    i = this.dialogProperties.quest.isHeroQuest ? "hero_unique_" + p.CastleModel.userData.selectedHeroID + "_name" : "dialog_npcName_" + this.dialogProperties.quest.questGiverID.toString();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.LocalizedTextVO(o));
    var s = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new l.LocalizedTextVO(a));
    s.mouseEnabled = false;
    this.setQuestGiverSymbol(n);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_questGiver, new l.LocalizedTextVO("commons_NPCsays", [new l.LocalizedTextVO(i)]));
    if (this.dialogDisp.txt_questGiver.filters.length == 0) {
      this.dialogDisp.txt_questGiver.filters = [new _(16774602, 1, 5, 5, 5)];
    }
    this.dialogDisp.speechBubble.height = CastleStartQuestDialog.SPEECHBUBBLE_PADDING + s.textHeight;
    this.dialogDisp.btn_ok.y = this.dialogDisp.speechBubble.y + this.dialogDisp.speechBubble.height - this.dialogDisp.btn_ok.height + CastleStartQuestDialog.BUTTON_OFFSET;
  };
  CastleStartQuestDialog.prototype.setQuestGiverSymbol = function (e) {
    if (this.characterClip) {
      this.characterClip.clipLoaded.removeAll();
      this.characterClip = null;
    }
    if (e == u.ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER) {
      a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_questGiver);
      var t = u.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_NAMES.get(u.ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER);
      this.characterClip = new h.CastleGoodgameExternalClip(t, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(t), null, 0, false);
      this.characterClip.doWhenLoaded(this.bindFunction(this.onLoaded));
    } else {
      g.CharacterHelper.createCharacterBig(e, this.dialogDisp.mc_questGiver, 200, 250);
    }
  };
  CastleStartQuestDialog.prototype.onLoaded = function (e) {
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_questGiver);
    this.dialogDisp.mc_questGiver.addChild(this.characterClip);
    this.updatePosition();
  };
  CastleStartQuestDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleStartQuestDialog.prototype.updatePosition = function () {
    if (this.dialogProperties && this.dialogProperties.quest.questGiverID == u.ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER) {
      if (this.disp && this.disp.stage) {
        if (this.characterClip) {
          var t = new s.ClipSizeComponent(this.disp.stage.stageWidth * 0.9, this.disp.stage.stageHeight * 0.9, 1);
          this.characterClip.clipSizeComponent = t;
        }
        this.disp.x = this.disp.stage.stageWidth * 0.5 + 175;
        this.disp.y = this.disp.stage.stageHeight - Math.min(this.disp.stage.stageHeight - 50, 850);
        this.dialogDisp.btn_ok.y = this.dialogDisp.speechBubble.y + this.dialogDisp.speechBubble.height - this.dialogDisp.btn_ok.height + CastleStartQuestDialog.BUTTON_OFFSET;
        if (r.MobileHelper.isScreenTooSmall()) {
          if (r.MobileHelper.isLandscape()) {
            this.disp.x = this.disp.stage.stageWidth * 0.7;
            this.disp.y = -this.disp.stage.stageHeight * 0.03;
            if (this.dialogDisp.speechBubble.height > this.dialogDisp.stage.stageHeight) {
              this.dialogDisp.btn_ok.y = this.dialogDisp.stage.stageHeight - this.dialogDisp.btn_ok.height;
            }
          } else {
            this.disp.x = this.disp.stage.stageWidth * 0.5;
          }
        }
        this.disp.x = c.int(this.disp.x);
        this.disp.y = c.int(this.disp.y);
      }
    } else {
      e.prototype.updatePosition.call(this);
      if (r.MobileHelper.isScreenTooSmall() && r.MobileHelper.isLandscape()) {
        this.disp.x += (this.disp.stage ? this.disp.stage.stageWidth : document.documentElement.clientWidth) * 0.15;
        this.disp.y += (this.disp.stage ? this.disp.stage.stageHeight : document.documentElement.clientHeight) * 0.1;
      }
    }
  };
  CastleStartQuestDialog.prototype.finishQuestStarter = function () {
    p.CastleModel.smartfoxClient.sendCommandVO(new d.C2SQuestStarterClickVO(this.dialogProperties.quest.questID));
  };
  Object.defineProperty(CastleStartQuestDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleStartQuestDialog.NAME = "CastleStartQuestEx";
  CastleStartQuestDialog.SPEECHBUBBLE_PADDING = 91;
  CastleStartQuestDialog.BUTTON_OFFSET = 20;
  return CastleStartQuestDialog;
}(C.CastleExternalDialog);
exports.CastleStartQuestDialog = m;
r.classImplementsInterfaces(m, "ICollectableRendererList");
var f = require("./462.js");
var O = require("./1.js");