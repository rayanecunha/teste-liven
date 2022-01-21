import { render, screen } from '@testing-library/react'
import Cart from '../pages/cart'
import { AppProvider } from "../context/appContext"

describe('Cart Page', () => {
  it('renders a heading', () => {
    render(
      <AppProvider>
        <Cart />
      </AppProvider>
    )

    const heading = screen.getByRole('heading', {
      name: /Carrinho/i,
    })

    expect(heading).toBeInTheDocument()
  })
})