//url
export default  (name: string, url: string = '') => {
    let qs = url || window.location.href,
        reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
        r = qs.substr(qs.indexOf("?") + 1).match(reg);
    if (r !== null) {
        let i = decodeURI(r[2]).indexOf('#');
        if (i !== -1) {
            return decodeURI(r[2]).substring(0, i);
        } else {
            return decodeURI(r[2]);
        };
    } else {
        return '';
    };
};
