import { MySafePipe } from './my-safe.pipe';

describe('MySafePipe', () => {
  it('create an instance', () => {
    const pipe = new MySafePipe();
    expect(pipe).toBeTruthy();
  });
});
