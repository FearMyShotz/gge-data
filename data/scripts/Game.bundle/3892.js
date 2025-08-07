Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = function () {
  function SurveyTextInput(e, t) {
    this.questionId = 0;
    this.questionId = e;
    this.disp = t;
    this.answerTextfield = n.GoodgameTextFieldManager.getInstance().registerTextField(t.txt_answer, new r.TextVO(""));
    this.answerTextfield.maxChars = a.SurveyConst.MAX_ANSWER_LENGTH;
    this.remainingCharactersTextfield = n.GoodgameTextFieldManager.getInstance().registerTextField(t.txt_remainingCharacters, new s.LocalizedTextVO("dialog_messageLimit_charactersLeft"));
    this.remainingCharactersTextfield.visible = false;
  }
  SurveyTextInput.prototype.show = function () {
    this.answerTextfield.change.add(this.bindFunction(this.handleMaxSymbols));
  };
  SurveyTextInput.prototype.hide = function () {
    this.answerTextfield.change.remove(this.bindFunction(this.handleMaxSymbols));
  };
  SurveyTextInput.prototype.handleMaxSymbols = function (e) {
    var t = l.int(Math.max(0, a.SurveyConst.MAX_ANSWER_LENGTH - this.answerTextfield.text.length));
    var i = t < SurveyTextInput.MIN_CHARS_LEFT_NO_COUNTDOWN;
    this.remainingCharactersTextfield.visible = i;
    if (i) {
      this.remainingCharactersTextfield.textContentVO.textReplacements = [t];
    }
  };
  SurveyTextInput.prototype.getJson = function () {
    return {
      ID: this.questionId,
      T: this.answerTextfield.text
    };
  };
  SurveyTextInput.__initialize_static_members = function () {
    SurveyTextInput.MIN_CHARS_LEFT_NO_COUNTDOWN = 100;
  };
  return SurveyTextInput;
}();
exports.SurveyTextInput = c;
o.classImplementsInterfaces(c, "ISurveyFormField");
c.__initialize_static_members();