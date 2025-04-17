import { list } from "aws-amplify/storage";

export async function listUploadedFiles() {
  try {
    const result = await list({
      path: "uploaded/", // Path to the folder in the S3 bucket
      options: {
        listAll: true, // List all files in the path
      },
    });

    // Return the list of files
    return result.items || [];
  } catch (error) {
    console.error("Error listing files:", error);
    throw error;
  }
}