import {getUrlParam, myLocalStorage, debounce,formatDate} from './tool'


// 获取url参数，兼容hash路由
console.log(getUrlParam('key'));

// 测试2
// 设置缓存
myLocalStorage.set('keys', '内容', 20000)

// 设置缓存
const keys = myLocalStorage.get('keys')
console.log(keys)

// 删除缓存
myLocalStorage.remove('keys')


// 动态加载js
// loadJs('http://code.jquery.com/jquery-migrate-1.2.1.min.js', () => {
//     console.log('加载完成回调')
// })

// @ts-ignore
window.addEventListener('resize',debounce(()=>{
    console.log('防抖')
},300))


console.log(formatDate('2022-11-11')) //2022-11-11 00:00:00
console.log(formatDate(1660819197686))  //2022-08-18 18:39:57
console.log(formatDate(1660819197686,'hh:mm:ss')) //18:39:57
console.log(formatDate(1660819197686,'yyyy-mm-dd')) //2022-08-18