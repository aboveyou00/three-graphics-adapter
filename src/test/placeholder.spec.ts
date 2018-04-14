/// <reference types="mocha" />

import { expect, use } from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
use(sinonChai);

describe('ThreeGraphicsAdapter', () => {
    it('should contain a single placeholder test', () => {
        expect(true).not.to.be.false;
    });
});
