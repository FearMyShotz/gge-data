Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ClientConstWorldmapDeco() {}
  ClientConstWorldmapDeco.createWorldmapVOFromRawDeco = function (e) {
    var t = new o.EmptyMapobjectVO();
    var i = ClientConstWorldmapDeco.DECO_OBJECT_LIST.get(e);
    t.fillByListInit(e, i.type, i.width, i.height);
    return t;
  };
  ClientConstWorldmapDeco._createWorldmapDecoList = function () {
    var e = new Map();
    var t = 0;
    e.set(t, ClientConstWorldmapDeco._createRawWorldmapDeco(t++, "Bush1x1_1", 1, 1));
    e.set(t, ClientConstWorldmapDeco._createRawWorldmapDeco(t++, "Bush1x1_2", 1, 1));
    e.set(t, ClientConstWorldmapDeco._createRawWorldmapDeco(t++, "Bush1x2", 1, 2));
    e.set(t, ClientConstWorldmapDeco._createRawWorldmapDeco(t++, "Bush2x1", 2, 1));
    e.set(t, ClientConstWorldmapDeco._createRawWorldmapDeco(t++, "Bush2x2", 2, 2));
    e.set(t, ClientConstWorldmapDeco._createRawWorldmapDeco(t++, "Forest2x2", 2, 2));
    e.set(t, ClientConstWorldmapDeco._createRawWorldmapDeco(t++, "Gras1x1", 1, 1));
    e.set(t, ClientConstWorldmapDeco._createRawWorldmapDeco(t++, "Gras2x2", 2, 2));
    e.set(t, ClientConstWorldmapDeco._createRawWorldmapDeco(t++, "Gras3x1", 3, 1));
    e.set(t, ClientConstWorldmapDeco._createRawWorldmapDeco(t++, "Hill1x1_1", 1, 1));
    e.set(t, ClientConstWorldmapDeco._createRawWorldmapDeco(t++, "Hill1x1_2", 1, 2));
    e.set(t, ClientConstWorldmapDeco._createRawWorldmapDeco(t++, "Hill2x1", 2, 1));
    e.set(t, ClientConstWorldmapDeco._createRawWorldmapDeco(t++, "Mountain1x1_1", 1, 1));
    e.set(t, ClientConstWorldmapDeco._createRawWorldmapDeco(t++, "Mountain1x1_2", 1, 2));
    e.set(t, ClientConstWorldmapDeco._createRawWorldmapDeco(t++, "Mountain2x2", 2, 2));
    e.set(t, ClientConstWorldmapDeco._createRawWorldmapDeco(t++, "Wood1x1_1", 1, 1));
    e.set(t, ClientConstWorldmapDeco._createRawWorldmapDeco(t++, "Wood1x1_2", 1, 1));
    e.set(t, ClientConstWorldmapDeco._createRawWorldmapDeco(t++, "Wood1x1_3", 1, 1));
    e.set(t, ClientConstWorldmapDeco._createRawWorldmapDeco(t++, "Wood1x1_4", 1, 1));
    e.set(t, ClientConstWorldmapDeco._createRawWorldmapDeco(t++, "Wood1x1_5", 1, 1));
    e.set(t, ClientConstWorldmapDeco._createRawWorldmapDeco(t++, "Stonehead1x1", 1, 1));
    e.set(t, ClientConstWorldmapDeco._createRawWorldmapDeco(t++, "Ruin1x1", 1, 1));
    e.set(t, ClientConstWorldmapDeco._createRawWorldmapDeco(t++, "Ruin2x1_1", 2, 1));
    e.set(t, ClientConstWorldmapDeco._createRawWorldmapDeco(t++, "Ruin2x1_2", 2, 1));
    return e;
  };
  ClientConstWorldmapDeco._createRawWorldmapDeco = function (e, t, i, n) {
    return new a.RawWorldmapDecoVO(e, t, i, n);
  };
  ClientConstWorldmapDeco.__initialize_static_members = function () {
    ClientConstWorldmapDeco.DECO_OBJECT_LIST = ClientConstWorldmapDeco._createWorldmapDecoList();
  };
  return ClientConstWorldmapDeco;
}();
exports.ClientConstWorldmapDeco = n;
var o = require("./703.js");
var a = require("./2124.js");
n.__initialize_static_members();