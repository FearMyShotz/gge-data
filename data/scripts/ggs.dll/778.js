Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function XMLInterfaceObjectFactory() {}
  XMLInterfaceObjectFactory.CREATE_MAP_FROM_JSON = function (e) {
    var t = JSON.parse(e);
    if (typeof t != "object" || Array.isArray(t)) {
      throw new Error("JSON was not a hash object");
    }
    return t;
  };
  return XMLInterfaceObjectFactory;
}();
exports.XMLInterfaceObjectFactory = i;