import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Test GifGrid', () => { 

    const category = 'Attack On Titan';
    const gifts = [
        {
            id: 'ABC',
            title: 'Attack on Titan',
            url: 'https://test.com/aot.jpg'
        },
        {
            id: '123',
            title: 'Eren',
            url: 'https://test.com/eren.jpg'
        }
    ];

    test('should match with the snapshot', () => { 

        useFetchGifs.mockReturnValue({
            images: gifts,
            isLoading: false
        });

        const { container } = render( <GifGrid category={ category } /> );
        expect( container ).toMatchSnapshot();
     });

    test('should show loading on init', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={ category }/>);
        expect( screen.getByText('Loading...') );
        expect( screen.getByText( category ) );
     });

     test('should show images when load in useFetchGifs', () => { 

        useFetchGifs.mockReturnValue({
            images: gifts,
            isLoading: false
        });

        render(<GifGrid category={ category }/>);

        expect( screen.getAllByRole('img').length ).toBe(2);

      });

 });