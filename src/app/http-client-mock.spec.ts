import { HttpClientMock } from './http-client-mock';

describe('HttpClientMock', () => {
  it('should create an instance', () => {
    expect(new HttpClientMock()).toBeTruthy();
  });
});
