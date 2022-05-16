import { render, screen } from '@testing-library/react'
import HomePage from '../../pages/index'

describe('HomePage', () => {
  it('Should render SVG alt text', () => {
    const textToFind = 'logo depicting the letters j and b'
    render(<HomePage />)
    expect(screen.getByAltText(textToFind)).toBeInTheDocument()
  })
})
