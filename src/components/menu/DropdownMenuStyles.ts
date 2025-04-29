import { css } from '../../../styled-system/css'

export const triggerStyles = css({
  cursor: 'pointer'
})

export const contentStyles = css({
  border: '1px solid #DADADA',
  px: 4,
  py: 2,
  borderRadius: 16,
  backgroundColor: 'white'
})

export const itemStyles = css({
  color: '#535353',
  py: 1,
  px: 2,
  _highlighted: {
    backgroundColor: '#f5f5f5',
    outline: 'none',
    boxShadow: 'none',
    cursor: 'pointer'
  }
})
