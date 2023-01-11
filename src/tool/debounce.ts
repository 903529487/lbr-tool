
/**
 * @title 防抖
 * @param fn 回调函数
 * @param delay 延迟
 */
type IDebounce = (fn: ()=>void, delay: number) => unknown
function debounce(fn, delay = 500):IDebounce {
    // timer 是闭包中的
    let timer = null

    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            // @ts-ignore
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}

export default debounce
