/**
 * @title 对比版本号
 * @param v1
 * @param v2
 * @return 0:无效 1:大于 -1：小于
 */
const checkVersion = (v1: string, v2: string) => {
    const v1Res = v1.split('.');
    const v2Res = v2.split('.');
    const len = Math.max(v1Res.length, v2Res.length);

    while (v1Res.length < len) {
        v1Res.push('0');
    }
    while (v2Res.length < len) {
        v2Res.push('0');
    }

    for (let i = 0; i < len; i += 1) {
        const num1 = parseInt(v1Res[i], 10);
        const num2 = parseInt(v2Res[i], 10);

        if (num1 > num2) {
            return 1;
        }
        if (num1 < num2) {
            return -1;
        }
    }
    return 0;
};


export default checkVersion
