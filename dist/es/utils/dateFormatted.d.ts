/**
 * @description: 日期格式化(凡日期, 统一调用此方法, 不论是否需要)，使用统一 process.env.DATAFORMAT 格式
 * @param date 日期字符串
 * @param type 日期显示字段：0：年月日时分秒、1：年月日、2：时分秒、3：年月日时分、4：时分
 * @returns
 */
export declare const ut_dateFormatted: (date: string, type?: number) => string;
