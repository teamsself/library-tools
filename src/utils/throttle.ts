import { throttle } from "lodash";

/**
 * 节流函数
 *
 * Creates a throttled function that only invokes func at most once per every wait milliseconds. The throttled
 * function comes with a cancel method to cancel delayed invocations and a flush method to immediately invoke
 * them. Provide an options object to indicate that func should be invoked on the leading and/or trailing edge
 * of the wait timeout. Subsequent calls to the throttled function return the result of the last func call.
 *
 * Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only if
 * the the throttled function is invoked more than once during the wait timeout.
 *
 * @param func The function to throttle.
 * @param wait The number of milliseconds to throttle invocations to.
 * @param options The options object.
 * @param options.leading Specify invoking on the leading edge of the timeout.
 * @param options.trailing Specify invoking on the trailing edge of the timeout.
 * @return Returns the new throttled function.
 */
export const ut_throttle = throttle;
