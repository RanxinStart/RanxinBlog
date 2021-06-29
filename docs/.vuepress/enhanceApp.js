
// js入口

import typedStart from './script/typed'
window.addEventListener('load',typedStart)

export default ({Vue, options, router, siteData, isServer}) => {
    console.log({Vue, options, router, siteData, isServer})
    const tags = document.querySelector('.home-blog .hero h1')
    const vm = new Vue(options)
    console.log(vm,Vue)
    
}