let n = 0
let timer = function() {
  n++
  console.warn(`五分钟`)
  if (new Date().getHours() == +sessionStorage.getItem('pddhour')) {
    return
  }
  console.warn(`真正执行`, new Date())
  sessionStorage.setItem('pddhour', +new Date().getHours())
  let dom = document.querySelector(
    '#ssr-wrapper > div > div.hub-ftt-tw.person-one-h5 > div.hub-ftt-mb-v2 > div > div.hub-ftt-mb-integer.task-shark > div'
  )
  if (dom && dom.innerText.includes('领取')) {
    dom.click()
    setTimeout(() => {
      let rewardDom = document.querySelector(
        'body > div:nth-child(18) > div > div.modal-popup-content.show-act > div > div.hub-ftt-integer-step-one-content > div.hub-ftt-integer-step-one-btn'
      )
      rewardDom.click()
    }, 1000)
  } else {
    console.warn(`找不到节点`)
  }
}
timer()
let timerId = setInterval(() => {
  timer()
}, 5 * 60 * 1000)
