import { Flex, styled } from '../../styled-system/jsx'
import * as Accordion from '@radix-ui/react-accordion'
import { css } from '../../styled-system/css/css'
import { CaretDownIcon } from '@radix-ui/react-icons'
import { useState } from 'react'
import { SectionTitle } from './hero/HeroSection'
import useApprenticeshipStore from '../hooks/useApprenticeshipStore'
import AnimatedAccordionButton from './AnimatedButton'

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
  width: 250
})

const itemStyles = css({
  padding: '8px 16px',
  color: '#535353',
  cursor: 'pointer',
  _hover: {
    backgroundColor: '#f5f5f5'
  }
})

const CustomDropdown = ({
  filterOptions,
  selected,
  onSelect
}: {
  filterOptions: string[]
  selected: string
  onSelect: (value: string) => void
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (option: string) => {
    onSelect(option)
    setIsOpen(false)
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

      {filterOptions
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
    cursor: 'pointer',
    fontWeight: 500,
    fontSize: 22,
    textAlign: 'start',
    color: '#685DC5'
  }
})

const FAQ = () => {
  const { apprenticeship } = useApprenticeshipStore()
  const faqData = apprenticeship?.faq
  const filterOptions = [
    'All',
    ...new Set(faqData?.map((question) => question.type) || [])
  ]
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [openItem, setOpenItem] = useState<string | null>(null)

  const handleItemChange = (value: string) => {
    setOpenItem(value)
  }

  const filteredFaqData = faqData?.filter(
    (item) => selectedFilter === 'All' || item.type === selectedFilter
  )

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
            marginRight: 300
          }}
        >
          Filter by:
        </p>
        <Flex position="relative" style={{ transform: 'translateY(-24px)' }}>
          <CustomDropdown
            filterOptions={filterOptions}
            selected={selectedFilter}
            onSelect={setSelectedFilter}
          />
        </Flex>
      </Flex>

      <Accordion.Root
        type="single"
        collapsible
        onValueChange={handleItemChange}
      >
        {filteredFaqData?.map((item) => (
          <Accordion.Item key={item.question} value={item.question}>
            <Accordion.Header>
              <StyledTrigger>
                <p
                  style={{
                    width: 300,
                    marginRight: 30
                  }}
                >
                  {item.type}
                </p>
                <p
                  style={{
                    color: '#535353',
                    marginRight: 'auto',

                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {item.question}
                </p>

                <AnimatedAccordionButton isOpen={openItem === item.question} />
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
                {item.answer[0].data}
              </Flex>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Flex>
  )
}

export default FAQ
