import SignUp from '@/components/auth/SignUp'
import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Vuelidate from 'vuelidate'

const localVue = createLocalVue()
localVue.use(Vuelidate)

const wrapper = mount(SignUp, {
  localVue,
  stubs: {
    NuxtLink: true
  }
})

describe('Component SignUp', () => {
  test('Check if the signUp exist', () => {
    expect(wrapper.exists()).toBe(true);
  })
})
