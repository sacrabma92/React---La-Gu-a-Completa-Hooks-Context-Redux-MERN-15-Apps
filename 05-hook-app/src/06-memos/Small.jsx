import { memo } from 'react'

export const Small = memo(({ value }) => {
  console.log('Mo volvi a dibujar =(')
  return (
    <small>{ value } </small>
  )
})
