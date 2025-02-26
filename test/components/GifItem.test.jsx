import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('GifItem Test', () => { 

    const title = 'Test Title';
    const url = 'https://test.com/test.jpg'

    test('should match with the snapshot', () => { 
        const { container } = render(<GifItem title={ title }  url={ url } />);
        expect( container ).toMatchSnapshot();
     });

     test('should show the image with the URL and the ALT indicated', () => { 
        render(<GifItem title={ title }  url={ url } />);
        const { src, alt  } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
      });

      test('should show the title', () => { 
        render(<GifItem title={ title }  url={ url } />);
        expect( screen.getByText(title) ).toBeTruthy();
       });

 });
