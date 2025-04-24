import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { HamburgerMenuIcon, ExternalLinkIcon } from '@radix-ui/react-icons'
import { contentStyles, itemStyles, triggerStyles } from './DropdownMenuStyles'

const scrollToSection = (id: string) => {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

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
            onSelect={() => scrollToSection('hero-section')}
          >
            Main
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className={itemStyles}
            onSelect={() => scrollToSection('about-section')}
          >
            About
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className={itemStyles}
            onSelect={() => scrollToSection('faq-section')}
          >
            FAQ
          </DropdownMenu.Item>
          <DropdownMenu.Item className={itemStyles}>
            <a
              href="https://harbour.space/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '8px'
              }}
            >
              Harbour.Space
              <ExternalLinkIcon />
            </a>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default MenuDropDown
