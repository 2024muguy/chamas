import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import ChamaRegistrationModal from '../pages/chama';
import axios from 'axios';

const Chama = () => {
  const [chamas, setChamas] = useState([]);
  const [selectedChama, setSelectedChama] = useState(null);
  const [error, setError] = useState(false); // State to handle errors

  const location = useLocation();
  const passedChamas = location.state?.chamas;

  // Fallback Chama JSON data
  const fallbackChamas = [
    {
      "name": "Imani Chama",
      "description": "A group for women starting their financial journey. Ideal for small contributions with a focus on personal growth.",
      "package": "KES 1,000/month",
      "image": "/images/imani.jpg"
    },
    {
      "name": "Umoja Chama",
      "description": "Focused on supporting women entrepreneurs with mentorship and funding opportunities.",
      "package": "KES 3,000/month",
      "image": "/images/umoja.jpg"
    },
    {
      "name": "Tumaini Chama",
      "description": "Ideal for women looking to invest in cooperative projects and larger ventures.",
      "package": "KES 5,000/month",
      "image": "/images/tumaini.jpg"
    },
    {
      "name": "Fahari Chama",
      "description": "An exclusive group for women committed to high contributions with access to premium opportunities.",
      "package": "KES 10,000/month",
      "image": "/images/fahari.jpg"
    }
  ];

  useEffect(() => {
    if (passedChamas) {
      setChamas(passedChamas);
    } else {
      const fetchChamas = async () => {
        try {
          // Try fetching from the backend API
          const { data } = await axios.get('/api/chamas');
          setChamas(data);
        } catch (apiError) {
          console.error('Error fetching from API:', apiError.message);

          // Fallback to JSON file
          try {
            const response = await axios.get('/chama.json');
            setChamas(response.data);
          } catch (jsonError) {
            console.error('Error fetching from JSON file:', jsonError.message);
            setChamas(fallbackChamas); // Use fallback data
            setError(true); // Set error state if both attempts fail
          }
        }
      };

      fetchChamas();
    }
  }, [passedChamas]);

  return (
    <Container
      className="py-5"
      style={{
        background: `url('/styles/chama.svg') repeat`, // Add the SVG pattern as background
        backgroundSize: 'cover', // Ensure the pattern covers the page
      }}
    >
      <h1 className="text-center mb-4">Join a Chama</h1>
      <p className="text-center mb-5">
        Empower yourself by joining a Chama that aligns with your goals. Each Chama offers a unique package based on your monthly contribution.
      </p>

      {/* Show error message if no chamas could be fetched */}
      {error && (
        <p className="text-center text-danger">
          Unable to load Chama details. Please try again later.
        </p>
      )}

      {/* Render Chama cards if data is available */}
      <Row className="justify-content-center">
        {!error && chamas.length > 0 ? (
          chamas.map((chama) => (
            <Col md={4} sm={6} className="mb-4" key={chama.id}>
              <Card
                className="h-100 shadow-sm"
                style={{
                  border: 'none',
                  borderRadius: '30px',
                  background: 'linear-gradient(145deg, #f0f4f8, #ffffff)',
                  boxShadow:
                    '4px 4px 15px rgba(0, 0, 0, 0.1), -4px -4px 15px rgba(255, 255, 255, 0.6)',
                }}
              >
                <Card.Img
                  variant="top"
                  src={chama.image}
                  alt={chama.name}
                  style={{
                    borderTopLeftRadius: '30px',
                    borderTopRightRadius: '30px',
                    height: '200px',
                    objectFit: 'cover',
                  }}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      fontWeight: 'bold',
                      fontSize: '1.5rem',
                      color: '#333',
                    }}
                  >
                    {chama.name}
                  </Card.Title>
                  <Card.Text>{chama.description}</Card.Text>
                  <Card.Text className="text-muted">
                    Monthly Contribution: <strong>{chama.package}</strong>
                  </Card.Text>
                  <Button
                    style={{
                      backgroundColor: '#28a745', // Bootstrap green
                      border: 'none',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      padding: '10px',
                      borderRadius: '20px',
                      width: '100%',
                      color: '#fff',
                      transition: 'background-color 0.3s',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = '#218838') // Darker green on hover
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = '#28a745') // Original green on mouse leave
                    }
                    onClick={() => setSelectedChama(chama)}
                  >
                    Register
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          // Fallback message if no data is fetched
          !error && <p className="text-center">Loading Chama details...</p>
        )}
      </Row>

      {/* Modal for Registration */}
      {selectedChama && (
        <ChamaRegistrationModal
          chama={selectedChama}
          onHide={() => setSelectedChama(null)}
        />
      )}
    </Container>
  );
};

export default Chama;







// import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { useLocation } from 'react-router-dom';
// import ChamaRegistrationModal from '../pages/chama';
// import axios from 'axios';

// const Chama = () => {
//   const [chamas, setChamas] = useState([]);
//   const [selectedChama, setSelectedChama] = useState(null);
//   const [error, setError] = useState(false); // State to handle errors

//   const location = useLocation();
//   const passedChamas = location.state?.chamas;

//   useEffect(() => {
//     if (passedChamas) {
//       setChamas(passedChamas);
//     } else {
//       const fetchChamas = async () => {
//         try {
//           // Try fetching from the backend API
//           const { data } = await axios.get('/api/chamas');
//           setChamas(data);
//         } catch (apiError) {
//           console.error('Error fetching from API:', apiError.message);

//           // Fallback to JSON file
//           try {
//             const response = await axios.get('/chama.json');
//             setChamas(response.data);
//           } catch (jsonError) {
//             console.error('Error fetching from JSON file:', jsonError.message);
//             setError(true); // Set error state if both attempts fail
//           }
//         }
//       };

//       fetchChamas();
//     }
//   }, [passedChamas]);

//   return (
//     <Container
//       className="py-5"
//       style={{
//         background: `url('/styles/chama.svg') repeat`, // Add the SVG pattern as background
//         backgroundSize: 'cover', // Ensure the pattern covers the page
//       }}
//     >
//       <h1 className="text-center mb-4">Join a Chama</h1>
//       <p className="text-center mb-5">
//         Empower yourself by joining a Chama that aligns with your goals. Each Chama offers a unique package based on your monthly contribution.
//       </p>

//       {/* Show error message if no chamas could be fetched */}
//       {error && (
//         <p className="text-center text-danger">
//           Unable to load Chama details. Please try again later.
//         </p>
//       )}

//       {/* Render Chama cards if data is available */}
//       <Row className="justify-content-center">
//         {!error && chamas.length > 0 ? (
//           chamas.map((chama) => (
//             <Col md={4} sm={6} className="mb-4" key={chama.id}>
//               <Card
//                 className="h-100 shadow-sm"
//                 style={{
//                   border: 'none',
//                   borderRadius: '30px',
//                   background: 'linear-gradient(145deg, #f0f4f8, #ffffff)',
//                   boxShadow:
//                     '4px 4px 15px rgba(0, 0, 0, 0.1), -4px -4px 15px rgba(255, 255, 255, 0.6)',
//                 }}
//               >
//                 <Card.Img
//                   variant="top"
//                   src={chama.image}
//                   alt={chama.name}
//                   style={{
//                     borderTopLeftRadius: '30px',
//                     borderTopRightRadius: '30px',
//                     height: '200px',
//                     objectFit: 'cover',
//                   }}
//                 />
//                 <Card.Body>
//                   <Card.Title
//                     style={{
//                       fontWeight: 'bold',
//                       fontSize: '1.5rem',
//                       color: '#333',
//                     }}
//                   >
//                     {chama.name}
//                   </Card.Title>
//                   <Card.Text>{chama.description}</Card.Text>
//                   <Card.Text className="text-muted">
//                     Monthly Contribution: <strong>{chama.package}</strong>
//                   </Card.Text>
//                   <Button
//                     style={{
//                       backgroundColor: '#28a745', // Bootstrap green
//                       border: 'none',
//                       fontSize: '1rem',
//                       fontWeight: 'bold',
//                       padding: '10px',
//                       borderRadius: '20px',
//                       width: '100%',
//                       color: '#fff',
//                       transition: 'background-color 0.3s',
//                     }}
//                     onMouseEnter={(e) =>
//                       (e.currentTarget.style.backgroundColor = '#218838') // Darker green on hover
//                     }
//                     onMouseLeave={(e) =>
//                       (e.currentTarget.style.backgroundColor = '#28a745') // Original green on mouse leave
//                     }
//                     onClick={() => setSelectedChama(chama)}
//                   >
//                     Register
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))
//         ) : (
//           // Fallback message if no data is fetched
//           !error && <p className="text-center">Loading Chama details...</p>
//         )}
//       </Row>

//       {/* Modal for Registration */}
//       {selectedChama && (
//         <ChamaRegistrationModal
//           chama={selectedChama}
//           onHide={() => setSelectedChama(null)}
//         />
//       )}
//     </Container>
//   );
// };

// export default Chama;
