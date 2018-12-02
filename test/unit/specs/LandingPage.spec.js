import Vue from 'vue'
import LandingPage from '@/components/LandingPage'
import router from '@/router'
import store from '@/store'

describe('LandingPage.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      router,
      store,
      render: h => h(LandingPage)
    }).$mount()

    expect(vm.$el.querySelector('.title').textContent).to.contain('Welcome to your new project!')
  })
})
