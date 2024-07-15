/* eslint-disable no-unused-vars */

/**
 * The generic date constructor. Replicates the Date constructor. Used to build
 * generic functions.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 */

/**
 * The duration object. Contains the duration in the units specified by the
 * object.
 */

/**
 * The duration unit type alias.
 */

/**
 * An object that combines two dates to represent the time interval.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 */

/**
 * A version of {@link Interval} that has both start and end resolved to Date.
 */

/**
 * The era. Can be either 0 (AD - Anno Domini) or 1 (BC - Before Christ).
 */

/**
 * The year quarter. Goes from 1 to 4.
 */

/**
 * The day of the week type alias. Unlike the date (the number of days since
 * the beginning of the month), which begins with 1 and is dynamic (can go up to
 * 28, 30, or 31), the day starts with 0 and static (always ends at 6). Look at
 * it as an index in an array where Sunday is the first element and Saturday
 * is the last.
 */

/**
 * The month type alias. Goes from 0 to 11, where 0 is January and 11 is
 * December.
 */

/**
 * FirstWeekContainsDate is used to determine which week is the first week of
 * the year, based on what day the January, 1 is in that week.
 *
 * The day in that week can only be 1 (Monday) or 4 (Thursday).
 *
 * Please see https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system for more information.
 */

/**
 * The date values, used to set or get date object values.
 */

/**
 * The number rounding method.
 */

/**
 * The ISO string format.
 *
 * - basic: Minimal number of separators
 * - extended: With separators added to enhance human readability
 */

/**
 * The ISO date representation. Represents which component the string includes,
 * date, time or both.
 */

/// Function options types

/**
 * The step function options. Used to build function options.
 */

/**
 * The week function options. Used to build function options.
 */

/**
 * The first week contains date options. Used to build function options.
 */

/**
 * The localized function options. Used to build function options.
 *
 * @typeParam LocaleFields - The locale fields used in the relevant function. Defines the minimum set of locale fields that must be provided.
 */

/**
 * The ISO format function options. Used to build function options.
 */

/**
 * The rounding options. Used to build function options.
 */

/**
 * Additional tokens options. Used to build function options.
 */

/**
 * Nearest minute type. Goes from 1 to 30, where 1 is the nearest minute and 30
 * is nearest half an hour.
 */

/**
 * Nearest hour type. Goes from 1 to 12, where 1 is the nearest hour and 12
 * is nearest half a day.
 */

/**
 * The nearest minutes function options. Used to build function options.
 *
 * @deprecated Use {@link NearestToUnitOptions} instead.
 */

/**
 * The nearest unit function options. Used to build function options.
 */

/**
 * Namespace for service-level types that are not oriented to the end users.
 *
 * [NOTE] Right now it is empty except the utils, but it will be useful to move
 * some types here in the future. For instance {@link GenericDateConstructor}
 * doesn't belong in the root namespace.
 */ export let DateFns;
