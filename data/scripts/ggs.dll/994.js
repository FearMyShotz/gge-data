var i = exports;
function configure() {
  i.Reader._configure(i.BufferReader);
  i.util._configure();
}
i.build = "minimal";
i.Writer = require("./202.js");
i.BufferWriter = require("./1001.js");
i.Reader = require("./203.js");
i.BufferReader = require("./1002.js");
i.util = require("./53.js");
i.rpc = require("./509.js");
i.roots = require("./510.js");
i.configure = configure;
i.Writer._configure(i.BufferWriter);
configure();