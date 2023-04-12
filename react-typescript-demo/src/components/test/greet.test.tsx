import { render, screen } from "@testing-library/react"
import { Greet } from "../Greet"

test('Greet renders correctly', () => {
    render(<Greet name="elan" massageCount={12}/>)
    const textElement = screen.getByText('Welcome elan 12')
    expect(textElement).toBeInTheDocument()
})