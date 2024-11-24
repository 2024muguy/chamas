import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const Promotions = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const promotions = [
    {
      title: "Perfumes",
      description: "Elegant fragrances that uplift and inspire.",
      link: "/promotions/perfumes",
      image: "/images/perfumes.png",
    },
    {
      title: "Massage Services",
      description: "Relax and recharge with our exclusive services.",
      link: "/promotions/massage",
      image: "/images/massage.jpg",
    },
    {
      title: "Fashion",
      description: "Stay stylish while supporting a good cause.",
      link: "/promotions/fashion",
      image: "/images/fashion.jpg",
    },
  ];

  // Auto-update active card every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % promotions.length);
    }, 3000); // 3 seconds interval
    return () => clearInterval(interval);
  }, [promotions.length]);

  const cardStyle = (isActive) => ({
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    padding: '20px',
    margin: '10px',
    boxShadow: isActive
      ? '0 8px 30px rgba(0, 128, 128, 0.5)'
      : '0 4px 20px rgba(0, 0, 0, 0.1)',
    transform: isActive ? 'scale(1.1)' : 'scale(1)',
    opacity: isActive ? 1 : 0.9,
    transition: 'transform 0.5s ease, opacity 0.5s ease, box-shadow 0.5s ease',
  });

  const textStyle = {
    animation: 'fadeIn 0.5s ease-in-out',
    marginTop: '10px',
  };

  const handleStarClick = (promotionIndex) => {
    setActiveIndex(promotionIndex);
    const promotion = promotions[promotionIndex];
    window.location.href = promotion.link;
  };

  return (
    <Row
      style={{
        background: "url('styles/charity_pattern.svg') no-repeat center center / cover",
        padding: '20px',
        borderRadius: '15px',
      }}
      className="mt-5 text-center justify-content-center"
    >

      <Row className="justify-content-center">
        {promotions.map((promo, index) => (
          <Col key={index} md={4} style={{ display: 'flex', justifyContent: 'center' }} className="mb-3">
            <Card style={cardStyle(activeIndex === index)}>
              <Card.Img variant="top" src={promo.image} style={{ borderRadius: '10px' }} />
              <Card.Body>
                <Card.Title>{promo.title}</Card.Title>
                <FaStar
                  style={{
                    cursor: 'pointer',
                    fontSize: '1.8rem',
                    color: activeIndex === index ? '#00CED1' : '#CCCCCC',
                    transition: 'transform 0.5s ease, color 0.5s ease',
                    transform: activeIndex === index ? 'scale(1.3)' : 'scale(1)',
                  }}
                  onClick={() => handleStarClick(index)}
                />
                {activeIndex === index && (
                  <Card.Text style={textStyle}>{promo.description}</Card.Text>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Row>
  );
};

export default Promotions;


// import React, { useState, useEffect } from 'react';
// import { Row, Col, Card } from 'react-bootstrap';
// import { FaStar } from 'react-icons/fa';
// import axios from 'axios';

// const Promotions = () => {
//   const [promotions, setPromotions] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const fetchPromotions = async () => {
//       try {
//         // Attempt to fetch promotions from the API
//         const { data } = await axios.get('/api/promotions');
//         setPromotions(data);
//       } catch (error) {
//         console.error('Error fetching promotions from API. Falling back to local file.', error);

//         // Fallback to local promotions.json file
//         try {
//           const { data } = await axios.get('/promotions.json');
//           setPromotions(data);
//         } catch (fallbackError) {
//           console.error('Error fetching fallback promotions file:', fallbackError);
//         }
//       }
//     };

//     fetchPromotions();
//   }, []);

//   // Auto-update active card every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % promotions.length);
//     }, 3000); // 3 seconds interval
//     return () => clearInterval(interval);
//   }, [promotions.length]);

//   const cardStyle = (isActive) => ({
//     backgroundColor: '#f9f9f9',
//     borderRadius: '12px',
//     padding: '20px',
//     margin: '10px',
//     boxShadow: isActive
//       ? '0 8px 30px rgba(0, 128, 128, 0.5)'
//       : '0 4px 20px rgba(0, 0, 0, 0.1)',
//     transform: isActive ? 'scale(1.1)' : 'scale(1)',
//     opacity: isActive ? 1 : 0.9,
//     transition: 'transform 0.5s ease, opacity 0.5s ease, box-shadow 0.5s ease',
//   });

//   const textStyle = {
//     animation: 'fadeIn 0.5s ease-in-out',
//     marginTop: '10px',
//   };

//   const handleStarClick = (promotionIndex) => {
//     setActiveIndex(promotionIndex);
//     const promotion = promotions[promotionIndex];
//     window.location.href = promotion.link;
//   };

//   return (
//     <Row
//       style={{
//         background: "url('styles/charity_pattern.svg') no-repeat center center / cover",
//         padding: '20px',
//         borderRadius: '15px',
//       }}
//       className="mt-5 text-center justify-content-center"
//     >
//       {promotions.length > 0 ? (
//         <Row className="justify-content-center">
//           {promotions.map((promo, index) => (
//             <Col
//               key={index}
//               md={4}
//               style={{ display: 'flex', justifyContent: 'center' }}
//               className="mb-3"
//             >
//               <Card style={cardStyle(activeIndex === index)}>
//                 <Card.Img variant="top" src={promo.image} style={{ borderRadius: '10px' }} />
//                 <Card.Body>
//                   <Card.Title>{promo.title}</Card.Title>
//                   <FaStar
//                     style={{
//                       cursor: 'pointer',
//                       fontSize: '1.8rem',
//                       color: activeIndex === index ? '#00CED1' : '#CCCCCC',
//                       transition: 'transform 0.5s ease, color 0.5s ease',
//                       transform: activeIndex === index ? 'scale(1.3)' : 'scale(1)',
//                     }}
//                     onClick={() => handleStarClick(index)}
//                   />
//                   {activeIndex === index && (
//                     <Card.Text style={textStyle}>{promo.description}</Card.Text>
//                   )}
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       ) : (
//         <p>No promotions available at the moment. Please check back later.</p>
//       )}
//     </Row>
//   );
// };

// export default Promotions;
