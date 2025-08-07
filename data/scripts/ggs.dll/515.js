var i = exports;
var a = require("./208.js");
i[".google.protobuf.Any"] = {
  fromObject: function (e) {
    if (e && e["@type"]) {
      var t = this.lookup(e["@type"]);
      if (t) {
        var n = e["@type"].charAt(0) === "." ? e["@type"].substr(1) : e["@type"];
        return this.create({
          type_url: "/" + n,
          value: t.encode(t.fromObject(e)).finish()
        });
      }
    }
    return this.fromObject(e);
  },
  toObject: function (e, t) {
    if (t && t.json && e.type_url && e.value) {
      var n = e.type_url.substring(e.type_url.lastIndexOf("/") + 1);
      var i = this.lookup(n);
      if (i) {
        e = i.decode(e.value);
      }
    }
    if (!(e instanceof this.ctor) && e instanceof a) {
      var s = e.$type.toObject(e, t);
      s["@type"] = e.$type.fullName;
      return s;
    }
    return this.toObject(e, t);
  }
};