/**
 * @title 格式化金钱千位分割
 * @param num
 * @return number
 */
const formatMoney = (num: string | number) => {
    if (!num) return num;
    let temp: number | string = num;
    if (typeof temp === 'number') {
        temp = temp.toString();
    }
    return parseFloat(temp).toLocaleString();
};

export default formatMoney
