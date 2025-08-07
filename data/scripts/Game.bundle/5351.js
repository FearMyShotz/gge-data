Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.instanceOf_IArmyMapmovementVO = function instanceOf_IArmyMapmovementVO(e) {
  return e.getArmySizeLevel !== undefined && e.isAccurateInfo !== undefined && e.armySize !== undefined && e.foodSupply !== undefined && e.meadSupply !== undefined;
};