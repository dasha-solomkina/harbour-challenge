import { Flex } from '../../../styled-system/jsx'
import * as Accordion from '@radix-ui/react-accordion'
import { CaretDownIcon } from '@radix-ui/react-icons'
import { useState } from 'react'
import { SectionTitle } from '../hero/HeroSection'
import useApprenticeshipStore from '../../hooks/useApprenticeshipStore'
import AnimatedAccordionButton from '../AnimatedButton'
import {
  wrapperStyles,
  triggerRow,
  itemStyles,
  typeStyle,
  questionStyle,
  StyledTrigger,
  filterStyle
} from './FAQStyles'

type CustomDropdownProps = {
  filterOptions: string[]
  selected: string
  onSelect: (value: string) => void
}

const CustomDropdown = ({
  filterOptions,
  selected,
  onSelect
}: CustomDropdownProps) => {
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
    <Flex direction="column" pb={40} px={{ base: 10, md: 40 }} id="faq-section">
      <Flex
        width="100%"
        gap={5}
        pb={10}
        direction={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'flex-start', md: 'center' }}
      >
        <SectionTitle
          style={{
            marginRight: 'auto',
            maxWidth: 441
          }}
        >
          Frequently asked questions
        </SectionTitle>
        <p className={filterStyle}>Filter by:</p>
        <Flex
          position="relative"
          zIndex={99}
          justifyContent={{ base: 'center', md: 'flex-start' }}
          width={{ base: '100%', md: 'auto' }}
          pb={{ base: 8, lg: 0 }}
          transform={{ base: 'none', lg: 'translateY(-24px)' }}
        >
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
                <p className={typeStyle}>{item.type}</p>
                <p className={questionStyle}>{item.question}</p>
                <AnimatedAccordionButton isOpen={openItem === item.question} />
              </StyledTrigger>
            </Accordion.Header>
            <Accordion.Content>
              <Flex
                fontWeight={300}
                fontSize={{ base: 18, lg: 22 }}
                color="#535353"
                pl={{ base: 0, lg: 350 }}
                pr={{ base: 0, lg: 20 }}
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
