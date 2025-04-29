import '@testing-library/jest-dom'
import { expect, afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import React, { ReactNode } from 'react'

// Mock Panda CSS styled components
vi.mock('../../styled-system/jsx', () => ({
  styled: (tag: string) => {
    return ({
      children,
      ...props
    }: {
      children?: ReactNode
      [key: string]: unknown
    }) => {
      return React.createElement(tag, props, children)
    }
  },
  Flex: ({
    children,
    ...props
  }: {
    children?: ReactNode
    [key: string]: unknown
  }) => {
    return React.createElement(
      'div',
      { ...props, style: { display: 'flex' } },
      children
    )
  }
}))

// Clean up after each test
afterEach(() => {
  cleanup()
})

// Style checking utility
const hasStyle = (
  element: HTMLElement,
  expectedStyles: Record<string, string>
) => {
  const computedStyle = window.getComputedStyle(element)
  return Object.entries(expectedStyles).every(([property, value]) => {
    const actualValue = computedStyle.getPropertyValue(property)
    return actualValue === value
  })
}

// Add custom matchers
expect.extend({
  toHaveStyle: (received: HTMLElement, expected: Record<string, string>) => {
    const pass = hasStyle(received, expected)
    return {
      pass,
      message: () =>
        pass
          ? `Expected element not to have style ${JSON.stringify(expected)}`
          : `Expected element to have style ${JSON.stringify(expected)}`
    }
  }
})
