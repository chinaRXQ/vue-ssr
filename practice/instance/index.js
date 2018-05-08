/**
 * Created by hp on 2018/5/4.
 */
import Vue from 'vue'

// new Vue({
//   el: '#root',
//   template: '<div>this is content</div>'
// })

const app = new Vue({
  template: '<div>{{text}}</div>',
  data: {
    text: 'text',
    obj: {}
  }
})

app.$mount('#root')

//  let i = 0
//  setInterval(() => {
//    i++
//    // app.text += 1
//    // app.obj.a = i
//    app.$set(app.obj, 'a', i)
//    app.$delete(app.obj, 'a')
//    // app.$forceUpdate()
//    // app.$options.data += 1
//    // app.$data.text += 1
//  }, 1000)

//  app.$data
//  app.$props
//  app.$el
//  app.$options
//  app.$options.render = (h) => {
//    return h('div', {}, 'new render function')
//  }
//  app.$root
//  app.$children
//  app.$slots
//  app.$scopedSlots
//  app.$refs
//  app.$isServer
//  app.$watch('text', (newText, oldText) => {
//    console.log('${newText} : ${oldText}')
//  })

//  const unWatch = app.$watch('text', (newText, oldText) => {
//    console.log('${newText} : ${oldText}')
//  })
//  setTimeout(() => {
//    unWatch()
//  }, 2000)
//  app.$on('text', (a, b) => {
//    console.log('text emited ${a} ${b}')
//  })
//  app.$once('text', (a, b) => {
//    console.log('text emited ${a} ${b}')
//  })
//  app.$emit('text', 1, 2)
//  app.$forceUpdate()
