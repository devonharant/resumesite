import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
import '@testing-library/jest-dom';

// This extends Vitest's 'expect' with the methods from jest-dom
expect.extend(matchers);