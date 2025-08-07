Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function SurveyFormClipFactory() {}
  SurveyFormClipFactory.createForm = function (e, t) {
    var i = 0;
    if (e != null) {
      for (var n = 0, o = e; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          var s = SurveyFormClipFactory.createQuestionAndAnswersClip(a);
          t.addChild(s);
          s.y = i;
          i += s.height + SurveyFormClipFactory.VERTICAL_QUESTION_SPACING;
        }
      }
    }
  };
  SurveyFormClipFactory.createQuestionAndAnswersClip = function (e) {
    var t = o.getDefinitionByName(SurveyFormClipFactory.getQuestionTypeClipClassName(e.questionType));
    var i = SurveyFormClipFactory.createQuestionClip();
    var n = 0;
    for (var a = 0; a < e.answerCount; ++a) {
      var r = new t();
      i.mc_answers.addChild(r);
      r.y = n;
      n += s.int(r.height + SurveyFormClipFactory.VERTICAL_ANSWER_SPACING);
    }
    i.mc_bg.height = n + i.txt_title.height + SurveyFormClipFactory.VERTICAL_ANSWER_SPACING + SurveyFormClipFactory.TITLE_SPACING_TOP * 2;
    return i;
  };
  SurveyFormClipFactory.getQuestionTypeClipClassName = function (e) {
    switch (e) {
      case a.SurveyConst.QUESTION_TYPE_TEXT:
        return "SurveyMessageTextInput";
      case a.SurveyConst.QUESTION_TYPE_RADIO:
        return "SurveyMessageRadioButton";
      case a.SurveyConst.QUESTION_TYPE_CHECKBOX:
        return "SurveyMessageCheckBox";
    }
    return null;
  };
  SurveyFormClipFactory.createQuestionClip = function () {
    return new (o.getDefinitionByName("SurveyMessageQuestion"))();
  };
  SurveyFormClipFactory.__initialize_static_members = function () {
    SurveyFormClipFactory.TITLE_SPACING_TOP = 2;
    SurveyFormClipFactory.VERTICAL_ANSWER_SPACING = 4;
    SurveyFormClipFactory.VERTICAL_QUESTION_SPACING = 8;
  };
  return SurveyFormClipFactory;
}();
exports.SurveyFormClipFactory = n;
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
n.__initialize_static_members();