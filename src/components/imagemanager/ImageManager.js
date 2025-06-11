// // components/ImageManager.js
// import { useState, useEffect } from 'react';

// export default function ImageManager() {
//   const [images, setImages] = useState([]);
//   const [uploadFile, setUploadFile] = useState(null);
//   const [replaceFiles, setReplaceFiles] = useState({});

//   useEffect(() => {
//     fetchImages();
//   }, []);

//   const fetchImages = async () => {
//     const res = await fetch('/api/images');
//     const files = await res.json();
//     setImages(files);
//   };

//   const handleUpload = async () => {
//     if (!uploadFile) return alert('Please choose a file to upload');

//     const formData = new FormData();
//     formData.append('file', uploadFile);

//     if (images.includes(uploadFile.name)) {
//       formData.append('replace', uploadFile.name);
//     }

//     await fetch('/api/images', {
//       method: 'POST',
//       body: formData,
//     });

//     setUploadFile(null);
//     fetchImages();
//   };

//   const handleReplace = async (file) => {
//     const newFile = replaceFiles[file];
//     if (!newFile) return alert('Please choose a file to replace with');

//     const formData = new FormData();
//     formData.append('file', newFile);
//     formData.append('replace', file);

//     await fetch('/api/images', {
//       method: 'POST',
//       body: formData,
//     });

//     setReplaceFiles(prev => ({ ...prev, [file]: null }));
//     fetchImages();
//   };

//   return (
//     <div>
//       <h1 style={{ marginBottom: '1rem' }}>📸 Image Management</h1>
//       <div style={{ marginBottom: '2rem' }}>
//         <input type="file" onChange={e => setUploadFile(e.target.files[0])} />
//         <button onClick={handleUpload} style={{ marginLeft: '1rem' }}>Upload</button>
//       </div>

//       <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
//         <thead style={{ background: '#f5f5f5' }}>
//           <tr>
//             <th>Preview</th>
//             <th>Filename</th>
//             <th>Replace</th>
//           </tr>
//         </thead>
//         <tbody>
//           {images.map((img, idx) => (
//             <tr key={idx}>
//               <td style={{ textAlign: 'center' }}>
//                 <img src={`/${img}`} width="100" alt={`Preview of ${img}`} />
//               </td>
//               <td style={{ textAlign: 'center' }}>{img}</td>
//               <td style={{ textAlign: 'center' }}>
//                 <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                   <input
//                     type="file"
//                     onChange={e => setReplaceFiles(prev => ({ ...prev, [img]: e.target.files[0] }))}
//                     style={{ marginBottom: '0.5rem' }}
//                   />
//                   <button onClick={() => handleReplace(img)}>Replace</button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

