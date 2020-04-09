import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'
import Button from '@/components/button/button.vue'
import { shallowMount } from '@vue/test-utils'

chai.use(sinonChai)

describe('Button.vue', () => {
  it('存在.', () => {
    expect(Button).to.exist
  })

  it('可以设置disable',()=>{
    const wrapper = shallowMount(Button, {
      propsData: { disabled: true }
    })
    expect(wrapper.find('.disabled').exists()).to.be.true
  })
})
