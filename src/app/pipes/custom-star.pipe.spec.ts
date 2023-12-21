import { CustomStarPipe } from './custom-star.pipe';

describe('CustomStarPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomStarPipe();
    expect(pipe).toBeTruthy();
  });
});
