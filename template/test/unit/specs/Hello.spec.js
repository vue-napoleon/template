import Vue from 'vue'
import Hello from 'src/Hello'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><hello></hello></div>',
      components: { Hello }
    }).$mount()
    {{#if_eq unit "jasmine"}}
    expect(vm.$el.querySelector('.hello h1').textContent).toContain('Hello World!')
    {{/if_eq}}
    {{#if_eq unit "mocha"}}
    expect(vm.$el.querySelector('.hello h1').textContent).to.contain('Hello World!')
    {{/if_eq}}
  })
})
