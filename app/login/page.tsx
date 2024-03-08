import {
    google,   // The top level object used to access services
    drive_v3, // For every service client, there is an exported namespace
    Auth,     // Namespace for auth related types
    Common,   // General types used throughout the library
  } from 'googleapis';
  

  export default async function LoginPage() {
    const auth = new google.auth.GoogleAuth();
    const drive = google.drive({
      version: 'v3',
      auth,
    });
    
    // There are generated types for every set of request parameters
    const listParams: drive_v3.Params$Resource$Files$List = {};
    const res = await drive.files.list(listParams);
    
    // There are generated types for the response fields as well
    const listResults: drive_v3.Schema$FileList = res.data;
    return (
        <div></div>
    );
  }

