Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./116.js").getLogger("createjs.ts Extensions");
var r = function () {
  function CastleLuckyWheelSpeechbubbleComponent(e, t) {
    this._allStates = [CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_FIRST_VISIT, CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_WIN, CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_LEVEL_UP, CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_REGULAR, CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_MAX_LEVEL, CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_PRO_MODE_FIRST_VISIT];
    this._textIDs = new Map();
    this._eventID = 0;
    this._tf = e;
    this._eventID = t;
    this.intitTexts();
  }
  CastleLuckyWheelSpeechbubbleComponent.prototype.intitTexts = function () {
    if (this._eventID == o.EventConst.EVENTTYPE_LUCKYWHEEL_SD) {
      this._textIDs.set(CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_FIRST_VISIT, "dialog_luckyWheel_saleDays_text_first");
      this._textIDs.set(CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_REGULAR, "dialog_luckyWheel_saleDays_text_regular");
    } else {
      this._textIDs.set(CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_FIRST_VISIT, "dialog_luckyWheel_text_first");
      this._textIDs.set(CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_REGULAR, "dialog_luckyWheel_text_regular");
    }
    this._textIDs.set(CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_WIN, "dialog_luckyWheel_text_win");
    this._textIDs.set(CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_LEVEL_UP, "dialog_luckyWheel_text_winclassLevelup");
    this._textIDs.set(CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_MAX_LEVEL, "dialog_luckyWheel_text_winclassMax");
    this._textIDs.set(CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_PRO_MODE_FIRST_VISIT, "dialog_luckyWheel_text_firstPro");
  };
  Object.defineProperty(CastleLuckyWheelSpeechbubbleComponent.prototype, "state", {
    set: function (e) {
      if (this._allStates.indexOf(e) != -1) {
        if (this._currentState != e) {
          this._currentState = e;
          if (this._ggsTF) {
            this._ggsTF.textContentVO.textId = this._textIDs.get(this._currentState);
          } else {
            this._ggsTF = n.GoodgameTextFieldManager.getInstance().registerTextField(this._tf, new a.LocalizedTextVO(this._textIDs.get(this._currentState)));
          }
          this._tf.mouseWheelEnabled = false;
        }
      } else {
        s.debug("CastleLuckyWheelPresentationCharacter.showState says: invalid state: " + e);
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_FIRST_VISIT = "SPEECH_STATE_FIRST_VISIT";
  CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_WIN = "SPEECH_STATE_WIN";
  CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_LEVEL_UP = "SPEECH_STATE_LEVEL_UP";
  CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_REGULAR = "SPEECH_STATE_REGULAR";
  CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_MAX_LEVEL = "SPEECH_STATE_MAX_LEVEL";
  CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_PRO_MODE_FIRST_VISIT = "SPEECH_STATE_PRO_MODE_FIRST_VISIT";
  return CastleLuckyWheelSpeechbubbleComponent;
}();
exports.CastleLuckyWheelSpeechbubbleComponent = r;