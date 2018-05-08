/**
 * Created by hp on 2018/5/4.
 */
import Vue from 'vue'

new Vue({
  el: '#root',
  // template: '<div :id="aaa" @click="handleClick">' +
  // '<p v-html="html"></p>' +
  // '</div>',
  // template: '<div :class="[ isActive ? 'active' : '' ]" :style="styles">' +
  template: '<div :class="{ active: !isActive }">' +
  '<p>{{getJoinedArr(arr)}}</p>' +
  '</div>',
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: '<span>123</span>',
    aaa: 'main',
    styles: {
      color:red
    }
  },
  // computed: {
  //   classNames () {
  //
  //   }
  // },
  methods: {
    handleClick () {
      alert('clicked') // eslint-disable-line
    },
    getJoinedArr (arr) {
      return arr.join(' ')
    }
  }
})
