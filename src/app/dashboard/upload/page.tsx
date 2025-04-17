'use client';

import { useState } from 'react';
import { FileUploader } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';
import { getCurrentUser } from 'aws-amplify/auth';
import { useEffect } from 'react';


export default  function UploadPage() {
  
  const [identityId, setIdentityId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const authUser = await getCurrentUser();
        setIdentityId(authUser?.userId || null);
      } catch (err) {
        console.error('Error fetching user:', err);
        setIdentityId(null); // Handle error by setting identityId to null
      }
    }

    fetchUser();
  }, []);

  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

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
      <h1 className="text-2xl font-bold mb-4">Upload Documents</h1>
      <FileUploader
        acceptedFileTypes={['application/pdf']}
        path={`uploaded/`}
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