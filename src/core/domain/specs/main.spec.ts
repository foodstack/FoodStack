import * as domain from '../';

/// <reference types="jest" />
/**
 * @jest-environment jsdom
 */

describe('main test', function () {
  it('Menu Item has been exported', function () {
    expect(typeof domain.Ingredient).toBe('function');
  });
});
