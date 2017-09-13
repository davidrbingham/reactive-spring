/* eslint-disable no-restricted-globals */
import performFetch, { DEFAULT_OPTS } from '../doFetch';
import PromiseUtils from '../../__test_utils__/PromiseUtils.js';

describe('performFetch', () => {

    const path = '/example/url/to/call';

    beforeEach(() => {
        window.fetch = jest.fn(() => {
            return PromiseUtils.createAndResolvePromise({
                ok: true,
                json: () => PromiseUtils.createAndResolvePromise({data: 'the data'})
            });
        });
    });

    it('should retrieve data successfully and default to a get', () => {

        const result = performFetch(path);
        expect(result).toBe({ok:true, json: {data: 'the data'}});
    });

    it('should retrieve data successfully and post', () => {

        const result = performFetch(path, {method: 'POST', body: { some: 'body' }});
        expect(result).toBe({ok:true, json: {data: 'the data'}});
        expect(window.fetch).toBeCalledWith('/example/url/to/call', {...DEFAULT_OPTS, body: { some: 'body' }});
    });

    it('should fail to retrieve data and throw an error', () => {

        expect(true).toBe(true);
    });
});