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
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}

// Vue.component('CompOne', component)

new Vue({
  components: {
    CompOne: component
  },
  data: {
    prop1: 'wtf'
  },
  methods: {
    handleChange () {
      this.prop1 += 1
    }
  },
  mounted () {
    console.log(this.$refs.comp)
  },
  el: '#root',
  template: `
    <div>
      <comp-one ref="comp" :active="true" :propOne="prop1" @change="handleChange"></comp-one>
      <comp-one :active="false" propOne="mmp"></comp-one>
    </div>`
})
