"use client";

import { useEffect, useState } from "react";
import { listUploadedFiles } from "@/utils/storage-utils";
import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell } from "@/components/catalyst-ui/table";

interface FileItem {
  path: string;
  size: number;
  lastModified: string;
}

export default function ListFilesPage() {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFiles() {
      try {
        const fileList = await listUploadedFiles();
        // Map the file list to include size and lastModified
        const formattedFiles = fileList.map((file) => ({
          path: file.path,
          size: file.size,
          lastModified: file.lastModified ? new Date(file.lastModified).toLocaleString() : "Unknown",
        })) as FileItem[];
        setFiles(formattedFiles);
      } catch (err) {
        setError("Failed to load files.");
      } finally {
        setLoading(false);
      }
    }

    fetchFiles();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-10">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Uploaded Files</h1>
      {files.length === 0 ? (
        <p className="text-gray-600">No files found in the uploaded path.</p>
      ) : (
        <Table className="bg-white shadow-md rounded-lg overflow-hidden">
          <TableHead>
            <TableRow>
              <TableHeader className="px-6 py-3 text-left text-sm font-bold text-gray-600">File Name</TableHeader>
              <TableHeader className="px-6 py-3 text-left text-sm font-bold text-gray-600">Size</TableHeader>
              <TableHeader className="px-6 py-3 text-left text-sm font-bold text-gray-600">Last Modified</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {files.map((file, index) => (
              <TableRow key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <TableCell className="px-6 py-4 text-sm text-gray-800 truncate max-w-xs">{file.path}</TableCell>
                <TableCell className="px-6 py-4 text-sm text-gray-600">{formatFileSize(file.size)}</TableCell>
                <TableCell className="px-6 py-4 text-sm text-gray-600">{file.lastModified}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

/**
 * Format file size in bytes to a human-readable string.
 * @param size File size in bytes.
 * @returns Formatted file size string.
 */
function formatFileSize(size: number): string {
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
  if (size < 1024 * 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}