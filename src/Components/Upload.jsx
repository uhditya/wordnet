import React, { useState } from 'react';
import axios from 'axios';

function Upload() {
  const [file, setFile] = useState(null);
  const [downloadLink, setDownloadLink] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', file);

    axios.post('http://localhost:5000/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      // Set the download link received from the server
      setDownloadLink(response.data.downloadLink);
    })
    .catch(error => {
      alert("There was some error in processing the file");
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {downloadLink && (
        <div>
          <a href={downloadLink} download>Download Modified File</a>
        </div>
      )}
    </div>
  );
}

export default Upload;