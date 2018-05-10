/**
 * Created by hp on 2018/5/9.
 */
import Vue from 'vue'

const component = {
  //  props: ['active', 'propOne']
  //  props: {
  //    active: {
  //      type: Boolean,
  //      required: true
  //      default: true
  //      validator (value) {
  //        return typeof value === 'boolean'
  //      }
  //    }
  //  }
  props: {
    active: Boolean,
    propOne: String,
    onChange: Function
  },
  template: `
    <div>
      <input type="text" v-model.number="text">
      <span @click="handleChange">{{propOne}}</span>
      <span v-show="active">see me if active</span>
    </div>`,
  data () {
    return {
      text: 123
    }
  },
  mounted () {
    console.log('comp mounted')
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}

const component2 = {
  extends: component,
  data () {
    return {
      text: 1
    }
  },
  mounted () {
    this.$parent.text = '987654'
    console.log(this.$parent.$options.name)
  }
}

new Vue({
  name: 'root',
  el: '#root',
  data: {
    text: '123456'
  },
  components: {
    Comp: component2
  },
  template: `
    <div>
        <span>{{text}}</span>
         <comp></comp>
    </div>`
})

// const CompVue = Vue.extend(component)
//
// new CompVue({
//   el: '#root',
//   propsData: {
//     propOne: 'xxx'
//   },
//   data: {
//     text: '123'
//   },
//   mounted () {
//     console.log('instance mounted')
//   }
// })
