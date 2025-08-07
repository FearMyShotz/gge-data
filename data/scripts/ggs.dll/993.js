var i = module.exports = require("./994.js");
i.build = "light";
i.load = function load(e, t, n) {
  if (typeof t == "function") {
    n = t;
    t = new i.Root();
  } else {
    t ||= new i.Root();
  }
  return t.load(e, n);
};
i.loadSync = function loadSync(e, t) {
  t ||= new i.Root();
  return t.loadSync(e);
};
i.encoder = require("./511.js");
i.decoder = require("./512.js");
i.verifier = require("./513.js");
i.converter = require("./514.js");
i.ReflectionObject = require("./86.js");
i.Namespace = require("./104.js");
i.Root = require("./209.js");
i.Enum = require("./46.js");
i.Type = require("./204.js");
i.Field = require("./69.js");
i.OneOf = require("./130.js");
i.MapField = require("./205.js");
i.Service = require("./206.js");
i.Method = require("./207.js");
i.Message = require("./208.js");
i.wrappers = require("./515.js");
i.types = require("./87.js");
i.util = require("./27.js");
i.ReflectionObject._configure(i.Root);
i.Namespace._configure(i.Type, i.Service, i.Enum);
i.Root._configure(i.Type);
i.Field._configure(i.Type);