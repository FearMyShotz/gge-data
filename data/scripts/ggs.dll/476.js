Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function ModularityUtilConfigurator(e) {
    this._commandConfigurator = e;
  }
  ModularityUtilConfigurator.prototype.toCommand = function (e) {
    this._commandConfigurator.withPayloadConverter(new a(e).convert);
  };
  return ModularityUtilConfigurator;
}();
exports.ModularityUtilConfigurator = i;
var a = function () {
  function Converter(e) {
    this._commandName = e;
  }
  Converter.prototype.convert = function (e) {
    e.unshift(this._commandName);
    return e;
  };
  return Converter;
}();