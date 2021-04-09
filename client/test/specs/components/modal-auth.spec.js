import ModalAuth from '@/components/auth/ModalAuth'
import { mount, shallowMount } from '@vue/test-utils'

describe('Component ModalAuth', () => {
  const shallowWrapper = shallowMount(ModalAuth);

  test('Check if the modal exist', () => {
    expect(shallowWrapper.vm).toBeTruthy();
  })
  test('Check if the openModal() method works', async () => {
    const btnOpenModal = shallowWrapper.find('.btn-play');
    await btnOpenModal.trigger('click')
    expect(shallowWrapper.vm.show).toBe(true);
  })
  test('Check if the closeModal() method works', async () => {
    await shallowWrapper.find('.btn-play').trigger('click');
    await shallowWrapper.find('.modal__close').trigger('click');
    expect(shallowWrapper.vm.show).toBe(false);
  })
  test('Check if the showForm() method works', async () => {
    // Open modal
    await shallowWrapper.find('.btn-play').trigger('click')
    .then(() => {
      const btnTabLink = shallowWrapper.findAll('.tab');
      const btnTabActive = btnTabLink.at(0);
      const tabContentSignUp = shallowWrapper.find('#signUpForm');
      expect(btnTabActive.classes()).toContain('active');
      expect(tabContentSignUp.element.style.display).toBe('block');
    })
  })
})
