import { formatDistance } from "./tk-TM/_lib/formatDistance.mjs";
import { formatLong } from "./tk-TM/_lib/formatLong.mjs";
import { formatRelative } from "./tk-TM/_lib/formatRelative.mjs";
import { localize } from "./tk-TM/_lib/localize.mjs";
import { match } from "./tk-TM/_lib/match.mjs";

/**
 * @category Locales
 * @summary Turkmen locale.
 * @language Turkmen
 * @iso-639-1 tk
 * @author Berdimyrat Nazarov [@berdi00](https://github.com/berdi00)
 */
export const tkTM = {
  code: "tk-TM",
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 1,
  },
};

// Fallback for modularized imports:
export default tkTM;
