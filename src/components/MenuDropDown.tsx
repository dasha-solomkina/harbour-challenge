import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { contentStyles, itemStyles, triggerStyles } from './DropdownMenuStyles'

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
