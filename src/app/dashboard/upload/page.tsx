'use client';

import { useState } from 'react';
import { FileUploader } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';
import { getCurrentUser } from 'aws-amplify/auth';
import { useEffect } from 'react';


export default  function UploadPage() {
  
  const [identityId, setIdentityId] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchIdentityId() {
      try {
        const response = await fetch('/api/get-user-id');
        if (!response.ok) {
          throw new Error('Failed to fetch user ID');
        }
        const data = await response.json();
        setIdentityId(data.identityId);
      } catch (err) {
        console.error('Error fetching user ID:', err);
        setIdentityId(null); // Handle error by setting identityId to null
      }
    }

    fetchIdentityId();
  }, []);



  const handleUploadStart = () => {
    setUploading(true);
    setError(null);
    setSuccessMessage(null);
  };

  const handleUploadSuccess = (event: { key?: string }) => {
    setUploading(false);
    setSuccessMessage(`File uploaded successfully: ${event.key}`);
  };

  const handleUploadError = (error: string, file: { key: string }) => {
    setUploading(false);
    setError(`Upload failed: ${error}`);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Upload Documents for {identityId}</h1>
      <FileUploader
        acceptedFileTypes={['application/pdf']}
        path={`uploaded/${identityId}/`}
        maxFileCount={1}
        maxFileSize={10000000} // 10 MB
        onUploadStart={handleUploadStart}
        onUploadSuccess={handleUploadSuccess}
        onUploadError={handleUploadError}
      />
      {uploading && (
        <div className="mt-4 text-blue-500">Uploading... Please wait.</div>
      )}
      {successMessage && (
        <div className="mt-4 text-green-500">{successMessage}</div>
      )}
      {error && (
        <div className="mt-4 text-red-500">{error}</div>
      )}
    </div>
  );
}