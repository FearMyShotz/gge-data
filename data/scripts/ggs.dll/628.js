Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./253.js");
var a = require("./2.js").getLogger("WorldAssignment.BranchesXMLParser");
var s = function () {
  function BranchesXMLParser() {}
  BranchesXMLParser.parse = function (e) {
    var t;
    var n = [];
    var i = new DOMParser().parseFromString(e, "text/xml").querySelector("branches");
    if (!i) {
      a.debug("node 'branches' not found");
      return [];
    }
    if (i.children && i.children.length) {
      for (var s = 0; s < i.children.length; s++) {
        t = this.parseBranch(i.children.item(s));
        n.push(t);
      }
    } else {
      a.debug("node 'branches' is null or empty");
    }
    return n;
  };
  BranchesXMLParser.parseBranch = function (e) {
    var t = e.attributes.getNamedItem("id").textContent;
    var n = e.attributes.getNamedItem("version").textContent;
    var a = this.parseZones(e.querySelector("zones"));
    return new i.Branch(t, n, a);
  };
  BranchesXMLParser.parseZones = function (e) {
    var t = [];
    if (e) {
      for (var n = 0; n < e.children.length; n++) {
        t.push(e.children.item(n).textContent);
      }
    }
    return t;
  };
  return BranchesXMLParser;
}();
exports.BranchesXMLParser = s;