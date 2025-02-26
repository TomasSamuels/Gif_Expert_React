import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('useFetchGifs Test', () => { 

    test('should return the initial state', () => { 
       const { result } = renderHook( () => useFetchGifs('Attack On Titan') );
       const { images, isLoading } = result.current;
       expect( images.length ).toBe(0);
       expect( isLoading ).toBeTruthy();
     });

     test('should return a image array and isLoading in false', async() => { 
        const { result } = renderHook( () => useFetchGifs('Attack On Titan') );
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );
        const { images, isLoading } = result.current;
        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
      });

 });