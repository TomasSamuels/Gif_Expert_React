import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('GifExpertApp Test', () => { 

    test('should match with snapshot', () => { 
        const { container } = render( <GifExpertApp/> );
        expect( container ).toMatchSnapshot();
    });

    test('should have text "GifExpertApp"', () => { 
        render( <GifExpertApp/> );
        expect( screen.getByText('GifExpertApp') );
    });

    test('should add category', () => { 
        render( <GifExpertApp/> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: 'Naruto' } });
        fireEvent.submit(form);
        expect( screen.getAllByLabelText('category-title').length ).toBe(2);
    });

    test('should not add a category if already exists', () => { 
        render( <GifExpertApp/> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: 'Naruto' } });
        fireEvent.submit(form);

        fireEvent.input(input, { target: { value: 'Naruto' } });
        fireEvent.submit(form);

        expect( screen.getAllByLabelText('category-title').length ).toBe(2);
    });

 });