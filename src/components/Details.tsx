import * as Separator from '@radix-ui/react-separator'
import { Flex } from '../../styled-system/jsx'
import { DetailsCard, DetailsCardExtended } from './Card'
import useApprenticeshipStore from '../hooks/useApprenticeshipStore'

const SeparatorWithText = () => {
  return (
    <Flex align="center" gap="4">
      <Separator.Root
        orientation="horizontal"
        decorative
        style={{ flexGrow: 1, height: 1, backgroundColor: '#DADADA' }}
      />
      <p style={{ color: '#535353', fontSize: 16, fontWeight: 500 }}>
        GRADUATION
      </p>
      <Separator.Root
        orientation="horizontal"
        decorative
        style={{ flexGrow: 1, height: 1, backgroundColor: '#DADADA' }}
      />
    </Flex>
  )
}

const Details = ({ isDesktop }: { isDesktop: boolean }) => {
  const { apprenticeship } = useApprenticeshipStore()
  if (!apprenticeship) return <></>

  return (
    <Flex
      width="100%"
      justifyContent="center"
      gap={10}
      px={{ base: 4, md: 40, lg: 80 }}
      mt={{ base: 0, lg: 20 }}
      mb={60}
      direction={{ base: 'column', lg: 'row' }}
      align="stretch"
    >
      <Flex>
        <DetailsCardExtended
          apprenticeship={apprenticeship}
          isDesktop={isDesktop}
        />
      </Flex>
      <Flex direction="column" gap={10}>
        <Flex gap={10} direction={{ base: 'column', lg: 'row' }}>
          <DetailsCard
            title="Study commitment"
            subtitle={`${apprenticeship.study_commitment} hours/day`}
            text={apprenticeship.study_commitment_text}
          />
          <DetailsCard
            title="Work commitment"
            subtitle={`${apprenticeship.internship_commitment} hours/day`}
            text={apprenticeship.internship_commitment_text}
          />
        </Flex>
        <SeparatorWithText />
        {/* Was not able to find this data in the API so left the data from Figma. */}
        <DetailsCard
          title="A full-time contract"
          subtitle="1 Year / Full-Time"
          text="You’ll be guaranteed a 1 year contract with SCG upon graduation. "
        />
      </Flex>
    </Flex>
  )
}

export default Details
