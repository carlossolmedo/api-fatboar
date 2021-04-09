import AdminConnectionPage from '@/pages/admin/connection'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuelidate from 'vuelidate'

const localVue = createLocalVue()
localVue.use(Vuelidate)

const wrapper = shallowMount(AdminConnectionPage, {
  localVue
})

describe('Page admin connection', () => {
  test('Check if the admin page connection exist', () => {
    expect(wrapper.vm).toBeTruthy();
  })
})
