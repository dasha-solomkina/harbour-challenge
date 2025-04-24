import * as Separator from '@radix-ui/react-separator'
import { Flex } from '../../styled-system/jsx'
import { DetailsCard, DetailsCardExtended } from './Card'

const SeparatorWithText = () => {
  return (
    <Flex align="center" gap="2">
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

const Details = () => {
  return (
    <Flex width="100%" justifyContent="center" gap={10} px={80} mt={20} mb={60}>
      <Flex>
        <DetailsCardExtended />
      </Flex>
      <Flex direction="column" gap={10}>
        <Flex gap={10}>
          <DetailsCard />
          <DetailsCard />
        </Flex>
        <SeparatorWithText />
        <DetailsCard />
      </Flex>
    </Flex>
  )
}

export default Details
