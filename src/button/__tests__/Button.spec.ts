import Button from "../Button";

import { shallowMount } from '@vue/test-utils'

import { describe, test, expect } from 'vitest'


describe('Button', () => {
    test('button innerHtml', () => {
        const wrapper = shallowMount(Button, {
            slots: {
                default: 'hello'
            }
        })
        expect(wrapper.text()).toBe('hello')
    })

    test('button bg color', () => {
        const wrapper = shallowMount(Button, {
            props: {
                color: 'red'
            }
        })

        const hasClass = wrapper.classes()
            .map(item => item.replace(/\n/g, ''))
            .filter(item => item !== '').includes('bg-red-500');

        expect(hasClass).toBe(true)
    })

})
