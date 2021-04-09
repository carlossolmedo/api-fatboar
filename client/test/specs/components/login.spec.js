import Login from '@/components/auth/Login'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuelidate from 'vuelidate'

const localVue = createLocalVue()
localVue.use(Vuelidate)

const wrapper = shallowMount(Login, {
  localVue
})

describe('Component Login', () => {
  test('Check if the login exist', () => {
    expect(wrapper.exists()).toBe(true);
  })
})
