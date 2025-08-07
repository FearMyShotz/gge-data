var i = module.exports = require("./993.js");
i.build = "full";
i.tokenize = require("./516.js");
i.parse = require("./1007.js");
i.common = require("./1008.js");
i.Root._configure(i.Type, i.parse, i.common);