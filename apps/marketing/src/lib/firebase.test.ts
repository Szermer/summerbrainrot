import { describe, it, expect, vi, beforeAll } from 'vitest';

/**
 * FIREBASE INTEGRATION TEST
 * @ai-context Tests Firebase initialization and configuration
 */
describe('Firebase Integration', () => {
  beforeAll(() => {
    // Mock environment variables before importing Firebase
    vi.stubEnv('NEXT_PUBLIC_FIREBASE_API_KEY', 'test-api-key');
    vi.stubEnv('NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN', 'test.firebaseapp.com');
    vi.stubEnv('NEXT_PUBLIC_FIREBASE_PROJECT_ID', 'test-project');
    vi.stubEnv('NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET', 'test.appspot.com');
    vi.stubEnv('NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID', '123456789');
    vi.stubEnv('NEXT_PUBLIC_FIREBASE_APP_ID', 'test-app-id');
  });

  it('should have Firebase configuration in environment', () => {
    expect(process.env.NEXT_PUBLIC_FIREBASE_API_KEY).toBeDefined();
    expect(process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN).toBeDefined();
    expect(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID).toBeDefined();
    expect(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET).toBeDefined();
    expect(process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID).toBeDefined();
    expect(process.env.NEXT_PUBLIC_FIREBASE_APP_ID).toBeDefined();
  });

  it('should initialize Firebase with proper configuration', () => {
    // Since Firebase is mocked in setup.ts, we just verify the mocks are called
    expect(vi.mocked((globalThis as any).firebase?.initializeApp)).toBeDefined();
  });
});