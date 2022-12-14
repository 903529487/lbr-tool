type ILoadJs = (url: string, callback: () => void) => void

const isInclude = (name: string) => {
    var js = /js$/i.test(name);
    var es: any = document.getElementsByTagName(js ? 'script' : 'link');
    for (var i = 0; i < es.length; i++)
        if (es[i][js ? 'src' : 'href'].indexOf(name) != -1) return true;
    return false;
}

const loadJs = (url, callback): ILoadJs => {
    if (isInclude(url)) {
        callback();
    } else {
        const script: any = document.createElement('script');
        script.type = "text/javascript";
        if (typeof (callback) != "undefined") {
            if (script.readyState) {
                script.onreadystatechange = function () {
                    if (script.readyState == "loaded" || script.readyState == "complete") {
                        script.onreadystatechange = null;
                        callback();
                    }
                }
            } else {
                script.onload = function () {
                    callback();
                }
            }
        }
        script.src = url;
        document.body.appendChild(script);
    }

    return
}

export default loadJs