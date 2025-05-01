import * as Accordion from '@radix-ui/react-accordion'
import { css } from '../../../styled-system/css'
import { styled } from '../../../styled-system/jsx'

export const wrapperStyles = (isOpen: boolean) =>
  css({
    position: 'absolute',
    top: 0,
    right: 0,
    border: '1px solid #DADADA',
    borderRadius: 20,
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

export const triggerRow = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 250
})

export const itemStyles = css({
  padding: '8px',
  color: '#535353',
  cursor: 'pointer',
  _hover: {
    backgroundColor: '#f5f5f5'
  }
})

export const typeStyle = css({
  display: { base: 'none', lg: 'flex' },
  width: 300,
  marginRight: 30
})

export const questionStyle = css({
  color: '#535353',
  marginRight: 'auto',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
})

export const filterStyle = css({
  color: '#6A6A6A',
  fontSize: 16,
  fontWeight: 300,
  marginRight: { base: 0, md: 300 }
})

export const StyledTrigger = styled(Accordion.Trigger, {
  base: {
    width: '100%',
    display: 'flex',
    py: '16px',
    borderTop: '1px solid #E6E6E6',
    alignItems: 'center',
    cursor: 'pointer',
    fontWeight: { base: 300, lg: 500 },
    fontSize: { base: 18, lg: 22 },
    textAlign: 'start',
    color: '#685DC5'
  }
})
