import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { css } from '../../styled-system/css'

const triggerStyles = css({
  cursor: 'pointer'
})

const contentStyles = css({
  border: '1px solid #DADADA',
  px: 4,
  py: 2,
  borderRadius: 16,
  backgroundColor: 'white'
})

const itemStyles = css({
  color: '#535353',
  padding: 1,
  _highlighted: {
    backgroundColor: '#f5f5f5',
    outline: 'none',
    boxShadow: 'none',
    cursor: 'pointer'
  }
})

const MenuDropDown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild className={triggerStyles}>
        <HamburgerMenuIcon />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={5}
          align="end"
          className={contentStyles}
        >
          <DropdownMenu.Item
            className={itemStyles}
            style={{ color: '#685DC5', fontWeight: 600 }}
          >
            Interaction Design
          </DropdownMenu.Item>
          <DropdownMenu.Item className={itemStyles}>
            Admissions
          </DropdownMenu.Item>
          <DropdownMenu.Item className={itemStyles}>
            Harbour.Space
          </DropdownMenu.Item>
          <DropdownMenu.Item className={itemStyles}>
            Living in Barcelona
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default MenuDropDown
