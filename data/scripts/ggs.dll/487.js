Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = createjs.Point;
var a = function () {
  function CameraTargetPoint(e, t, n, i = 0, a = 0, s = true) {
    this.targetFollowSpeed = 500;
    this.targetFollowAcceleration = 100;
    this.targetFollowMaxSpeed = 1000;
    this.targetPoint = e;
    this.centerPoint = t;
    this.targetFollowSpeed = n;
    this.targetFollowAcceleration = i;
    this.targetFollowMaxSpeed = a;
    if (a == 0) {
      this.targetFollowMaxSpeed = n;
    }
    this.isRelative = s;
  }
  CameraTargetPoint.prototype.getCorrectedTargetPoint = function (e) {
    if (this.isRelative) {
      return new i(this.centerPoint.x - this.targetPoint.x * e, this.centerPoint.y - this.targetPoint.y * e);
    } else {
      return this.targetPoint.clone();
    }
  };
  return CameraTargetPoint;
}();
exports.CameraTargetPoint = a;