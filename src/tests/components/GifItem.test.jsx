/**
* @jest-environment jsdom
*/
import { render, screen } from '@testing-library/react'
import { GifItem } from "../../components/GifItem";

describe('Pruebas en el <GifItem />', () => {

    const title = 'goku'
    const url = 'https://goku.com/gohan'

    test('debe de hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect( container ).toMatchSnapshot()
    })
    test('debe mostrar la imagen con el URL y el ATL indicado', () => {
        render(<GifItem title={title} url={url} />)
        // screen.debug()
        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(title)
        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
    })
    test('debe mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url} />)
        expect(screen.getByText(title)).toBeTruthy()
    })
})