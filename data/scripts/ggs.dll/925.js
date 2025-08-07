Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function BasicItemJsonData() {}
  BasicItemJsonData.prototype.parseXML = function (e) {
    this.itemXML = e;
  };
  BasicItemJsonData.prototype.getJsonById = function (e) {
    return this.itemXML[e].toString();
  };
  return BasicItemJsonData;
}();
exports.BasicItemJsonData = i;