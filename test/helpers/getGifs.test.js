import { getGifs } from '../../src/helpers/getGifs'

describe('getGifs Test', () => { 

    test('should return a gifs array', async() => {

        const gifs = await getGifs('Attack On Titan');
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id   : expect.any( String ),
            title: expect.any( String ),
            url  : expect.any( String )
        });

     });

 });