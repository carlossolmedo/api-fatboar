import FormAdminConnection from '@/components/auth/FormAdminConnection'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuelidate from 'vuelidate'

const localVue = createLocalVue()
localVue.use(Vuelidate)

const wrapper = shallowMount(FormAdminConnection, {
  localVue
})

describe('Component FormAdminConnection', () => {
  test('Check if the FormAdminConnection exist', () => {
    expect(wrapper.exists()).toBe(true);
  })
})
