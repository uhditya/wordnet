import React, { useState } from 'react';

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Here you can implement the file upload logic, such as sending the file to a server
    // For demonstration purposes, we'll just log the file details
    if (selectedFile) {
      console.log('Selected file:', selectedFile);
      // You can perform further operations here, like sending the file to a server using axios or Fetch API
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div style = {{alignContent : "center"}}>
      <input type="file" onChange={handleFileChange} style = {{width : "21%", paddingBottom : "10px"}}/>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default Upload;