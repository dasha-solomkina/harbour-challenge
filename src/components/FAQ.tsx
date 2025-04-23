import { Flex } from '../../styled-system/jsx'
import * as Accordion from '@radix-ui/react-accordion'
import { css } from '../../styled-system/css/css'
import { CaretDownIcon } from '@radix-ui/react-icons'
import { useState } from 'react'

type FAQItem = {
  id: string
  question: string
  type: string
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
    type: 'Program conditions',
    answer:
      "What are my obligations? The majority of our students receive numerous job offers at the end of the second academic year of their Bachelor's programme and at the end of the first academic year of their Master's programme. The best applicants receive an offer from our industrial partners at the beginning of their programmes. Harbour.Space is highly recognized among innovative employers and is strategic partner of B.Grimm multi- industry corporation with 140 years of history in Thailand. Together we insure students get the best knowledge about the current job market opportunities. We offer our students paid internships options during studies jointly with our industrial partners. Employers that hired graduates of Harbour.Space in the past include Google, IBM, Accenture, Typeform, Frog, and other tech centric companies. Our industry specific employability report could be provided to you separately during the admission process."
  },
  {
    id: 'item-2',
    question: 'How does it work?',
    type: 'Program conditions',
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
    <Flex direction="column" pb={40} px={40}>
      <Flex width="100%" alignItems="center" gap={5} pb={10}>
        <p
          style={{
            color: '#685DC5',
            fontSize: 48,
            fontWeight: 500,
            marginRight: 'auto',
            maxWidth: 441,
            lineHeight: 1.3
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
              <Accordion.Trigger
                style={{
                  width: '100%',
                  display: 'flex',
                  paddingTop: 16,
                  paddingBottom: 16,
                  borderTop: '1px solid #E6E6E6',
                  alignItems: 'center',
                  gap: 100,
                  cursor: 'pointer'
                }}
              >
                <p
                  style={{
                    color: '#685DC5',
                    fontWeight: 500,
                    fontSize: 22,
                    width: 250,
                    textAlign: 'left'
                  }}
                >
                  {item.type}
                </p>
                <p
                  style={{
                    color: '#535353',
                    fontWeight: 500,
                    fontSize: 22,
                    marginRight: 'auto'
                  }}
                >
                  {item.question}
                </p>
                <div
                  style={{
                    border: '1px solid #DADADA',
                    color: '#959595',
                    borderRadius: '100%',
                    fontWeight: 300,
                    fontSize: 30,
                    width: 48,
                    height: 48,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  +
                </div>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Flex
                fontWeight={300}
                fontSize={22}
                color="#535353"
                pl={350}
                pr={20}
                pb={10}
              >
                {item.answer}
              </Flex>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Flex>
  )
}

export default FAQ
