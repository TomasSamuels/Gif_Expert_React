import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('AddCategory Test', () => { 

    const inputValue = 'Mikasa';

    test('should match with the snapshot', () => {
        const onNewCategory = jest.fn(); 
        const { container } = render(<AddCategory onNewCategory={ onNewCategory }/>);
        expect( container ).toMatchSnapshot();
     });

     test('should change the value in the textbox', () => {
        const onNewCategory = jest.fn(); 
        render(<AddCategory onNewCategory={ onNewCategory }/>);
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: inputValue } } );
        expect( input.value ).toBe(inputValue);
      });

      test('should call onNewCategory if the input has a value', () => { 
        
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory }/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form'); 

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( input.value ).toBe('');
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

       });

       test('should not call onNewCategory if the input is empty', () => {         
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory }/>);
        const form = screen.getByRole('form'); 
        fireEvent.submit( form );
        expect( onNewCategory ).not.toHaveBeenCalled();
        });

 });