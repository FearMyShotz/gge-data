function instanceOfLanguageMetaData(e) {
  return e && e.branch !== undefined && e.versionNo !== undefined && e.deployTime !== undefined;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.instanceOfLanguageMetaData = instanceOfLanguageMetaData;
exports.instanceOfLanguageData = function instanceOfLanguageData(e) {
  return e && e["@metadata"] !== undefined && instanceOfLanguageMetaData(e["@metadata"]);
};