import { render, screen } from '@testing-library/react'
import AboutPage from '../../pages/about'

describe('AboutPage', () => {
  it('Should render json content', () => {
    const textToFind = '"Name"'

    render(<AboutPage />)
    const body = screen.getByText(textToFind)

    expect(body).toBeInTheDocument()
  })
})
