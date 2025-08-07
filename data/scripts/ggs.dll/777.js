Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./23.js");
var a = require("./338.js");
var s = require("./2.js").getLogger("BasicLoader");
exports.loadCacheBreaker = function () {
  if (window.parent !== window.self || window.location.hostname.indexOf("local") >= 0 || window.document.location.hostname.indexOf("local") >= 0 || window.location.port === "8080" || window.location.port === "8081") {
    var e = document.createElement("script");
    var t = document.getElementById("CacheBreaker");
    if (t) {
      e.src = t.getAttribute("href");
      document.body.appendChild(e);
    } else {
      s.error("Unable to find the HTML link element with id 'CacheBreaker'.");
      i.ExternalLog.logger.log(new a.PageIntegrationErrorFactory(a.PageIntegrationErrorFactory.CACHE_BREAKER_ELEMENT_MISSING, "Unable to find the HTML link element with id 'CacheBreaker'."));
    }
  } else {
    s.error("Trying to run game without usage of an valid integration page.");
  }
};