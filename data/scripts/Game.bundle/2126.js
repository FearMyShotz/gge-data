Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleWorldmapSectorUpdateVO(e = -1, t = 0) {
    this.kingdomId = 0;
    this.lastUpdate = 0;
    this.status = CastleWorldmapSectorUpdateVO.STATUS_INITIAL;
    this.kingdomId = e;
    this.lastUpdate = t;
  }
  CastleWorldmapSectorUpdateVO.__initialize_static_members = function () {
    CastleWorldmapSectorUpdateVO.STATUS_INITIAL = 0;
    CastleWorldmapSectorUpdateVO.STATUS_INITIAL_GAA_PENDING = 1;
    CastleWorldmapSectorUpdateVO.STATUS_READY_FOR_RENDERING = 2;
  };
  return CastleWorldmapSectorUpdateVO;
}();
exports.CastleWorldmapSectorUpdateVO = n;
n.__initialize_static_members();