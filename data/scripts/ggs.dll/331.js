Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./11.js");
var a = function () {
  function ForumLinkComposer() {}
  ForumLinkComposer.composeForumURL = function (e, t) {
    var n = [];
    if (t) {
      n.push(ForumLinkComposer.URL_FORUM_STAGING);
    } else {
      n.push(ForumLinkComposer.URL_FORUM_PRODUCTION);
    }
    if (e != "") {
      n.push(e);
    }
    return n.join("/");
  };
  ForumLinkComposer.composeForumURLWithoutAuth = function (e, t) {
    return ForumLinkComposer.URL_FORUM_PUBLIC.replace(ForumLinkComposer.DEFAULT_PLACEHOLDER, e).replace(ForumLinkComposer.DEFAULT_PLACEHOLDER, t);
  };
  ForumLinkComposer.URL_FORUM_STAGING = i.BasicConstants.DOMAIN_PROTOCOL + "://forum-loginserver-staging.goodgamestudios.com/vanilla";
  ForumLinkComposer.URL_FORUM_PRODUCTION = i.BasicConstants.DOMAIN_PROTOCOL + "://forum-loginserver.goodgamestudios.com/vanilla";
  ForumLinkComposer.URL_FORUM_PUBLIC = i.BasicConstants.DOMAIN_PROTOCOL + "://{language}.board.goodgamestudios.com/{title}";
  ForumLinkComposer.DEFAULT_PLACEHOLDER = /\{.*?\}/;
  return ForumLinkComposer;
}();
exports.ForumLinkComposer = a;