Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./331.js");
var a = require("./332.js");
var s = require("./5.js");
var r = require("./96.js");
var o = function () {
  function ForumData() {}
  ForumData.prototype.updateCryptedForumHash = function (e) {
    this._rawServerForumHash = e;
    r.ExternalInterfaceController.instance.executeJavaScriptFunction(new a.JavascriptCallOnSetForumHashFactory());
  };
  ForumData.prototype.getForumRootURL = function () {
    return i.ForumLinkComposer.composeForumURL(this._rawServerForumHash, this.isTest);
  };
  Object.defineProperty(ForumData.prototype, "rawServerForumHash", {
    get: function () {
      return this._rawServerForumHash;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ForumData.prototype, "isTest", {
    get: function () {
      return s.EnvGlobalsHandler.globals.isTest || s.EnvGlobalsHandler.globals.isLocal;
    },
    enumerable: true,
    configurable: true
  });
  return ForumData;
}();
exports.ForumData = o;