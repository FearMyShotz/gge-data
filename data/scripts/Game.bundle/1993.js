Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ClientConstHero() {}
  ClientConstHero.getGenderStringForHero = function (e) {
    if (ClientConstHero.FEMALE_HEROS.indexOf(e) > -1) {
      return "female";
    } else {
      return "male";
    }
  };
  ClientConstHero.__initialize_static_members = function () {
    ClientConstHero.FEMALE_HEROS = [2, 7, 9, 803];
    ClientConstHero.MALE_HEROS = [0, 1, 3, 4, 5, 6, 8, 801, 802];
    ClientConstHero.STARTER_HEROES = [801, 802, 803];
  };
  return ClientConstHero;
}();
exports.ClientConstHero = n;
n.__initialize_static_members();