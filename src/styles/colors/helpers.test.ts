import { expect } from 'chai';

import { withAlpha } from './helpers';

describe('Colors.withAlpha', () => {
  it('Parses three-digit hex strings correctly', () => {
    const redHex = '#F00';
    const redRGBA = 'rgb(255, 0, 0)';
    expect(withAlpha(redHex, 1)).to.equal(redRGBA);
  });

  it('Parses six-digit hex strings correctly', () => {
    const redHex = '#FF0000';
    const redRGBA = 'rgb(255, 0, 0)';
    expect(withAlpha(redHex, 1)).to.equal(redRGBA);
  });

  it('Parses rgb string correctly', () => {
    const redIn = 'rgb(255, 0, 0)';
    const redOut = 'rgba(255, 0, 0, 0.5)';
    expect(withAlpha(redIn, 0.5)).to.equal(redOut);
  });

  it('Parses rgba string correctly', () => {
    const redIn = 'rgba(255, 0, 0, 0.25)';
    const redOut = 'rgba(255, 0, 0, 0.5)';
    expect(withAlpha(redIn, 0.5)).to.equal(redOut);
  });
});
