Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./313.js");
var a = function () {
  function HTMLTextComposer() {}
  HTMLTextComposer.prototype.by = function (e) {
    if (e instanceof i.HTMLTextCustomVO) {
      return this.composeHTML(e);
    } else {
      return this.composeHTMLWithGGSLinks(e);
    }
  };
  HTMLTextComposer.prototype.composeHTMLWithGGSLinks = function (e) {
    e.htmlText.clearAllNodes();
    for (var t = 0, n = e.localizedTextVOList; t < n.length; t++) {
      var i = n[t];
      e.htmlText.appendChild(this.parseGGSLinksToFlashHTMLTextLinks(i.compose()));
    }
    return e.htmlText.toString();
  };
  HTMLTextComposer.prototype.composeHTML = function (e) {
    var t = (e.localizedTextVOList || []).map(function (e) {
      return e.compose();
    }).join(e.appendTextGlue);
    return e.htmlText = "<content>" + t + "</content>";
  };
  HTMLTextComposer.prototype.parseGGSLinksToFlashHTMLTextLinks = function (e) {
    for (var t = e.split("<"), n = false, i = "<p>", a = 0; a < t.length; a++) {
      if (n) {
        i += this.createLinkElement(t[a]);
        n = false;
      } else {
        i += String(t[a]);
        n = true;
      }
    }
    return (i += "</p>").replace(/\n/g, "<br>");
  };
  HTMLTextComposer.prototype.createLinkElement = function (e) {
    var t = "";
    for (var n = 0; n < e.length && !isNaN(Number(e.substr(n, 1))); n++) {
      t += e.substr(n, 1);
    }
    var i = e.substr(t.length);
    return i = "<a href=\"event:" + t + "\">" + i + "</a>";
  };
  return HTMLTextComposer;
}();
exports.HTMLTextComposer = a;