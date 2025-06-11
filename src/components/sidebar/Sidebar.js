// // components/Sidebar.js
// export default function Sidebar({ activePage, setActivePage }) {
//     const links = [
//       { key: 'images', label: '📸 Image Management' },
//       { key: 'users', label: '👤 User Settings' },
//       { key: 'settings', label: '⚙️ Settings' },
//     ];
  
//     return (
//       <div style={{ width: '250px', background: '#2c3e50', color: '#ecf0f1', padding: '2rem' }}>
//         <h2 style={{ color: '#ecf0f1', marginBottom: '2rem' }}>Admin Dashboard</h2>
//         <ul style={{ listStyle: 'none', padding: 0 }}>
//           {links.map(link => (
//             <li
//               key={link.key}
//               style={{
//                 marginBottom: '1rem',
//                 cursor: 'pointer',
//                 fontWeight: activePage === link.key ? 'bold' : 'normal',
//                 color: activePage === link.key ? '#1abc9c' : '#ecf0f1'
//               }}
//               onClick={() => setActivePage(link.key)}
//             >
//               {link.label}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }