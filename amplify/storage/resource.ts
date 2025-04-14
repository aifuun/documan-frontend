import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'Documents',
  access: (allow) => ({
    'uploaded-documents/{entity_id}/*': [
      allow.guest.to(['read']),
      allow.entity('identity').to(['read', 'write', 'delete'])
    ]
    
  })


});