import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'Documents',
  'access': (allow) => ({
  'uploaded/*': [ 
 allow.authenticated.to(['read', 'write', 'delete']),
  // allow.entity("identity").to(["read", "write", "delete"])
],

  'uploaded/public/*': [
    allow.guest.to(['read']), // Guests can only read public files
  ],
}),
});