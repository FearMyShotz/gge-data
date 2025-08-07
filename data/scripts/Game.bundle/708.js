Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.instanceOf_ISupportCapacityVO = function instanceOf_ISupportCapacityVO(e) {
  return e.supportCapacity !== undefined && e.supportCapacityToolTipID !== undefined && e.supportCapacityReachedToolTipID !== undefined && e.defenceCapacityToolTipID !== undefined && e.defenceCapacityReachedToolTipID !== undefined && e.supportOverviewToolTip !== undefined && e.supportOverviewNoTroopsToolTipID !== undefined;
};