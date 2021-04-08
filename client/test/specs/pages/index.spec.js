import IndexPage from '@/pages/index'
import { mount } from '@vue/test-utils'

describe('Page index', () => {
  test('Check if the index page exist', () => {
    const wrapper = mount(IndexPage);
    expect(wrapper.vm).toBeTruthy();
  })
})
