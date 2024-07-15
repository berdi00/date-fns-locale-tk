"use strict";
exports.tkTM = void 0;
var _index = require("./tk-TM/_lib/formatDistance.js");
var _index2 = require("./tk-TM/_lib/formatLong.js");
var _index3 = require("./tk-TM/_lib/formatRelative.js");
var _index4 = require("./tk-TM/_lib/localize.js");
var _index5 = require("./tk-TM/_lib/match.js");

/**
 * @category Locales
 * @summary Turkmen locale.
 * @language Turkmen
 * @iso-639-1 tk
 * @author Berdimyrat Nazarov [@berdi00](https://github.com/berdi00)
 */
const tkTM = (exports.tkTM = {
  code: "tk-TM",
  formatDistance: _index.formatDistance,
  formatLong: _index2.formatLong,
  formatRelative: _index3.formatRelative,
  localize: _index4.localize,
  match: _index5.match,
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 1,
  },
});
