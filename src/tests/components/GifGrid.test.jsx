/**
* @jest-environment jsdom
*/

import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'

jest.mock('../../hooks/useFetchGifs')

describe('pruebas en el <GifGrid />', () => {
    
    const category = 'Once Punch'
    
    test('Debe mostrar el loading inicialmente', () => {
        
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />)
        // screen.debug()
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))
    })

    test('Debe de mostrar items cuando se cargan las imagenes en el useFetchGif', () => {
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://saitama.com/image.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://goku.com/image.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        render(<GifGrid category={category} />)
        // screen.debug()
        expect(screen.getAllByRole('img').length).toBe(2)

    })
})