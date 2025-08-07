Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./333.js");
var a = require("./4.js");
var s = function () {
  function JavascriptCallOnSetForumHashFactory() {}
  JavascriptCallOnSetForumHashFactory.prototype.createVO = function () {
    return new i.JavascriptCallSetForumHashVO(a.BasicModel.forumData.rawServerForumHash);
  };
  return JavascriptCallOnSetForumHashFactory;
}();
exports.JavascriptCallOnSetForumHashFactory = s;