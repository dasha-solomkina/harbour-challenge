import { Flex, styled } from '../../styled-system/jsx'
import * as Accordion from '@radix-ui/react-accordion'
import { css } from '../../styled-system/css/css'
import { CaretDownIcon } from '@radix-ui/react-icons'
import { useState } from 'react'
import { SectionTitle } from './HeroSection'

type FAQItem = {
  id: string
  question: string
  type: string
  answer: string
}

const options = [
  'Program conditions',
  'Admissions',
  'Harbour.Space',
  'Living in Barcelona',
  'Faculty',
  'Scholarship'
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
    position: 'absolute',
    top: 0,
    right: 0,
    border: '1px solid #DADADA',
    borderRadius: 30,
    padding: '12px 24px',
    cursor: 'pointer',
    color: '#685DC5',
    fontSize: 18,
    fontWeight: 500,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    zIndex: 1000,
    maxHeight: isOpen ? '300px' : '50px',
    overflow: 'hidden',
    transition: 'max-height 0.3s ease-in-out',
    boxShadow: isOpen ? '0px 4px 8px rgba(0, 0, 0, 0.1)' : 'none'
  })

const triggerRow = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 200
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
    <Flex className={wrapperStyles(isOpen)} onClick={() => setIsOpen(!isOpen)}>
      <Flex className={triggerRow}>
        {selected}
        <CaretDownIcon
          height={20}
          width={20}
          style={{
            transition: 'transform 0.3s ease-in-out',
            transform: isOpen ? 'scaleY(-1)' : 'none'
          }}
        />
      </Flex>

      {options
        .filter((option) => option !== selected)
        .map((option) => (
          <Flex
            key={option}
            className={itemStyles}
            onClick={(e) => {
              e.stopPropagation()
              handleSelect(option)
            }}
          >
            {option}
          </Flex>
        ))}
    </Flex>
  )
}

const StyledTrigger = styled(Accordion.Trigger, {
  base: {
    width: '100%',
    display: 'flex',
    py: '16px',
    borderTop: '1px solid #E6E6E6',
    alignItems: 'center',
    gap: 100,
    cursor: 'pointer',
    fontWeight: 500,
    fontSize: 22,
    textAlign: 'left',
    color: '#685DC5'
  }
})

const PlusButton = ({ open }: { open: boolean }) => {
  return (
    <Flex
      style={{
        borderRadius: '100%',
        fontWeight: 300,
        fontSize: 30,
        width: '48px',
        height: '48px',
        justifyContent: 'center',
        alignItems: 'center',
        border: open ? 'transparent' : '1px solid #DADADA',
        backgroundColor: open ? '#685DC5' : 'transparent',
        color: open ? 'white' : '#959595'
      }}
    >
      {open ? '-' : '+'}
    </Flex>
  )
}

const FAQ = () => {
  const [openItem, setOpenItem] = useState<string | null>(null)
  console.log({ openItem })

  const handleItemChange = (value: string) => {
    setOpenItem(value)
  }
  return (
    <Flex direction="column" pb={40} px={40} id="faq-section">
      <Flex width="100%" alignItems="center" gap={5} pb={10}>
        <SectionTitle
          style={{
            marginRight: 'auto',
            maxWidth: 441
          }}
        >
          Frequently asked questions
        </SectionTitle>
        <p
          style={{
            color: '#6A6A6A',
            fontSize: 16,
            fontWeight: 300,
            marginRight: 250
          }}
        >
          Filter by:
        </p>
        <Flex position="relative" style={{ transform: 'translateY(-24px)' }}>
          <CustomDropdown />
        </Flex>
      </Flex>

      <Accordion.Root
        type="single"
        collapsible
        onValueChange={handleItemChange}
      >
        {faqData.map((item) => (
          <Accordion.Item key={item.id} value={item.id}>
            <Accordion.Header>
              <StyledTrigger>
                <p
                  style={{
                    width: 250
                  }}
                >
                  {item.type}
                </p>
                <p
                  style={{
                    color: '#535353',
                    marginRight: 'auto'
                  }}
                >
                  {item.question}
                </p>

                <PlusButton open={openItem === item.id} />
              </StyledTrigger>
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
