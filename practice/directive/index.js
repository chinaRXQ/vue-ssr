/**
 * Created by hp on 2018/5/7.
 */
import Vue from 'vue'

//'<input text="text" v-model.trim="text"/>'

new Vue({
  el: '#root',
  template: '' +
  '<div>' +
  '<div>Text: {{text}}</div>' +
  '<div v-if="text === 0">else text</div>' +
  '<div v-else>else content</div>' +
  '<div v-html="html"></div>' +
  '<input text="text" v-model.number="text"/>' +
  '<input type="checkbox" v-model="active"/>' +
  '<div>' +
  '<input type="checkbox" :value="1" v-model="arr"/>' +
  '<input type="checkbox" :value="2" v-model="arr"/>' +
  '<input type="checkbox" :value="3" v-model="arr"/>' +
  '</div>' +
  '<div>' +
  '<input type="radio" :value="one" v-model="arr"/>' +
  '<input type="radio" :value="two" v-model="arr"/>' +
  '</div>' +
  '<ul>' +
   '<li v-for="(item, index) in arr" :key="item">{{item}}:{{index}}</li>' +
  '</ul>' +
  '<ul>' +
   '<li v-for="(val, key, index) in obj">{{val}}:{{key}}:{{index}}</li>' +
  '</ul>' +
  '</div>',
  data: {
    arr: [1, 2, 3],
    obj: {
      a: '123',
      b: '456',
      c: '789'
    },
    text: 0,
    active: true,
    html: '<span>this is html</span>'
  }
})
