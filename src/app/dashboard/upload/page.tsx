'use client';

import { FileUploader } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';

export default function UploadPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Upload Documents</h1>
      <FileUploader
        acceptedFileTypes={['image/*']}
        path="public/"
        maxFileCount={1}
        isResumable
      />
    </div>
  );
}