/*
 * @Author: Zhilong
 * @Date: 2021-06-28 17:15:12
 * @LastEditTime: 2021-06-28 19:56:02
 * @Description: 
 * @LastEditors: Zhilong
 * @autograph: ⚠ warning!  ⚠ warning!  ⚠ warning!   ⚠野生的页面出现了!!
 */


let speed = 0.15

const fontAnimation = () => {
    const element = document.querySelector('.home-blog .hero .description')
    element.innerHTML = element.textContent.replace(/^\s+|\s+$/g,"").replace(/./g, "<span>$&</span>")

    let delay = 0
    element.children.forEach((span, index) => {
        //空格停顿
        // console.log(span.innerHTML)
        if (/\s+|\'+|\?+|\.+|\,+|\，+/.test(span.innerHTML)) {
            delay += 0.8
        }

        delay += speed
        if (index === 6) {
            delay += 1
            speed -= 0.05
        }

        span.style.setProperty('animation', `${0}s text-in ease-in-out forwards`)
        span.style.setProperty('animation-delay', `${delay}s`)
    })
   

    let frequency = 0;
    element.addEventListener('animationend', (e) => {
        if (e.target === document.querySelector('.home-blog .hero .description span:last-child') && frequency === 0) {
            frequency++
            element.classList.add('ended')
            speed -= 0.05
            delay += 3
            element.children.forEach((span, index,all) => {
                const select = all[all.length - (index + 1)]
                console.log(select)
                delay += speed
                console.log(all.length - (index + 1))
                select.style.setProperty('animation', `${0}s text-out ease-in-out forwards`)
                select.style.setProperty('animation-delay', `${delay}s`)
            })
            
            element.removeEventListener('animationend')
            
            // setTimeout(()=>{
            //     speed = 0.15
            //     element.classList.remove('ended')
            //     element.innerHTML = '.home-blog .hero'
            //     fontAnimation()
            // },3000)
        }
    })
}


window.addEventListener('load',fontAnimation)
