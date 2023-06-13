//补0
const prefixZero = (n) => {
    return ('0' + n).slice(-2)
};
/**时间格式转换
 * @param date 要转换的日期(如：Sat Nov 26 2022 21:37:29 GMT+0800 (中国标准时间))
 * @returns {string} 转换结果(如：2022-11-26 21:37:29)
 */
const timeFormatConvert = (data) => {
    const Y = data.getFullYear(); //年
    const M = prefixZero(data.getMonth() + 1); //月
    const D = prefixZero(data.getDate()); //日
    const H = prefixZero(data.getHours()); //时
    const Mi = prefixZero(data.getMinutes()); //分
    const S = prefixZero(data.getSeconds()); //秒

    return Y + '-' + M + '-' + D + ' ' + H + ':' + Mi + ':' +S
};

var time = {
    timeFormatConvert

};

export { time as default };
