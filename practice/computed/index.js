/**
 * Created by hp on 2018/5/7.
 */
import Vue from 'vue'

new Vue({
  el: '#root',
  template: '<div>' +
  '<p>Name: {{name}}</p>' +
  '<p>Name: {{getName()}}</p>' +
  '<p>Number: {{number}}</p>' +
  '<p>FullName: {{fullName}}</p>' +
  '<p><input type="text" v-model="number"/></p>' +
  '<p>FirstName: <input type="text" v-model="firstName"/></p>' +
  '<p>LastName: <input type="text" v-model="lastName"/></p>' +
  '<p>Name: <input type="text" v-model="name"/></p>' +
  '<p>obj: <input type="text" v-model="obj.a"/></p>' +
  '</div>',
  data: {
    firstName: 'Moriarty',
    lastName: 'Holmes',
    number: 0,
    fullName: '',
    obj: {
      a: 123
    }
  },
  computed: {
    // name () {
    //   return `${this.firstName} ${this.lastName} `
    // }
    name: {
      get () {
        console.log('new name')
        return `${this.firstName} ${this.lastName}`
      },
      set (name) {
        const names = name.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  watch: {
    'obj.a': {
      handler () {
        console.log('obj.a changed')
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    getName () {
      return `${this.firstName} ${this.lastName}`
    }
  }
})
