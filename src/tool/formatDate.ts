const formatDate=(timeStamp, type='') =>{ //时间戳转日期格式
    const time = timeStamp.toString().indexOf('-') != -1 ? new Date(timeStamp.replace(/-/g, '/')) : new Date(timeStamp)
    const y = time.getFullYear();
    const m = time.getMonth() + 1;
    const d = time.getDate();
    const h = time.getHours();
    const mm = time.getMinutes();
    const s = time.getSeconds();
    function add0(m) {
        return m < 10 ? "0" + m : m;
    }
    switch (type) {
        case 'yyyy-mm-dd':
            return y + "-" + add0(m) + "-" + add0(d)
        case 'yyyy-mm':
            return y + "-" + add0(m)
        case 'mm-dd':
            return add0(m) + "-" + add0(d)
        case 'hh:mm:ss':
            return add0(h) + ":" + add0(mm) + ":" + add0(s)
        case 'hh:mm':
            return add0(h) + ":" + add0(mm)
        default:
            return y + "-" + add0(m) + "-" + add0(d) + " " + add0(h) + ":" + add0(mm) + ":" + add0(s)
    }
}

export default formatDate