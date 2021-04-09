import GamePage from '@/pages/game'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuelidate from 'vuelidate'

const localVue = createLocalVue()
localVue.use(Vuelidate)

const wrapper = shallowMount(GamePage, {
  localVue
})

describe('Page game', () => {
  test('Check if the page game exist', () => {
    expect(wrapper.exists()).toBe(true);
  })
  test('Check value ticketNumber by default', () => {
    expect(wrapper.vm.ticketNumber).toBe(null);
  })
  test('Check restart() method works', async () => {
    await wrapper.setData({ submitStatus: true});
    await wrapper.find('button.btn-restart').trigger('click');
    expect(wrapper.vm.submitStatus).toBe(false);
  })
})
