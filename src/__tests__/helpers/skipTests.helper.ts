/**
 * Helper utilities for managing test execution during the v2 migration
 */

export const SKIP_V2_MIGRATION = process.env.SKIP_V2_TESTS === 'true';

/**
 * Use this instead of describe() to allow skipping v2 component tests
 * when running the test suite with SKIP_V2_TESTS=true
 */
export const describeUnlessSkipped = SKIP_V2_MIGRATION ? describe.skip : describe;

/**
 * Use this to mark a test as part of the v2 migration
 * These tests will be skipped when running with SKIP_V2_TESTS=true
 */
export const testUnlessSkipped = SKIP_V2_MIGRATION ? test.skip : test;
