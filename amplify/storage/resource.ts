import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'Documents',
  'access': (allow) => ({
  'uploaded/*': [
    allow.authenticated.to(['read', 'write', 'delete']), // Authenticated users can access their own files
  ],
  'uploaded/public/*': [
    allow.guest.to(['read']), // Guests can only read public files
  ],
}),
});