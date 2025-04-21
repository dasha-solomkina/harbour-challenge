import { Flex } from '../../styled-system/jsx'
import * as Accordion from '@radix-ui/react-accordion'
import { css } from '../../styled-system/css/css'
import { CaretDownIcon } from '@radix-ui/react-icons'
import { useState } from 'react'

type FAQItem = {
  id: string
  question: string
  answer: string
}

const options = [
  'Program conditions',
  'All',
  'Admissions',
  'Harbour.Space',
  'Living in Barcelona'
]

const faqData: FAQItem[] = [
  {
    id: 'item-1',
    question: 'What is Birdie?',
    answer: 'Birdie is a platform for customer feedback analysis.'
  },
  {
    id: 'item-2',
    question: 'How does it work?',
    answer:
      'It collects, organizes and generates insights from customer feedback.'
  }
]

const wrapperStyles = (isOpen: boolean) =>
  css({
    border: '1px solid #DADADA',
    borderRadius: 30,
    padding: '12px 24px',
    cursor: 'pointer',
    color: '#685DC5',
    fontSize: 18,
    fontWeight: 500,
    display: 'flex',
    flexDirection: 'column',
    // gap: 8,
    maxHeight: isOpen ? '500px' : '60px',
    overflow: 'hidden',
    transition: 'max-height 0.3s ease-in-out',
    position: 'relative',
    backgroundColor: 'white',
    zIndex: 1000
  })

const triggerRow = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%'
})

const itemStyles = css({
  padding: '8px 16px',
  color: '#535353',
  cursor: 'pointer',
  _hover: {
    backgroundColor: '#f5f5f5'
  }
})

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(options[0])

  const handleSelect = (option: string) => {
    setSelected(option)
    setIsOpen(false)
    console.log('Selected:', option)
  }

  return (
    <div className={wrapperStyles(isOpen)} onClick={() => setIsOpen(!isOpen)}>
      <div className={triggerRow}>
        {selected}
        <CaretDownIcon
          className="caret-icon"
          height={20}
          width={20}
          style={{
            transition: 'transform 0.3s ease-in-out',
            transform: isOpen ? 'scaleY(-1)' : 'none'
          }}
        />
      </div>

      {isOpen && (
        <div>
          {/* TODO: fix so that it does not move other components on open */}
          {options
            .filter((option) => option !== selected)
            .map((option) => (
              <div
                key={option}
                className={itemStyles}
                onClick={(e) => {
                  e.stopPropagation()
                  handleSelect(option)
                }}
              >
                {option}
              </div>
            ))}
        </div>
      )}
    </div>
  )
}

const FAQ = () => {
  return (
    <Flex direction="column" pb={40}>
      <Flex width="100%" px={10}>
        <p
          style={{
            color: '#685DC5',
            fontSize: 48,
            fontWeight: 500,
            marginRight: 'auto'
          }}
        >
          Frequently asked questions
        </p>
        <p style={{ color: '#6A6A6A', fontSize: 16, fontWeight: 300 }}>
          Filter by:
        </p>
        <CustomDropdown />
      </Flex>

      <Accordion.Root type="single" collapsible>
        {faqData.map((item) => (
          <Accordion.Item key={item.id} value={item.id}>
            <Accordion.Header>
              <Accordion.Trigger>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%'
                  }}
                >
                  <span>{item.question}</span>
                  <span>+</span>
                </div>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <div>{item.answer}</div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Flex>
  )
}

export default FAQ
