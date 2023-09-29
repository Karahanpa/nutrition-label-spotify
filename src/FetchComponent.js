import React, { useEffect, useState } from "react";

const FetchComponent = (baseUrl, endpoint) => {
    const [data, setData] = useState([]);
    const token = 'BQB-VtUrFTK90CuPCQNu6G7ZNl8ku1eVfDzxeohCGzfeVz911Ro8tMEK4bkwiI--tEKG6idXwqBewpi6dogj2NEa0oCRGQ18GAt6oLc9GCLaV6As7uVomqN73jHunYDGya9HdXXzcr18EcLQrt72KRyzQou8I2Xp1Q5BXt9XuS-FcpVQBuUL-MVsswREM-1VOOorgeX1rtZUDnQ_4e1nmUV2LTFC4DAe9xtb7r_BfJ5sJgZVit7eCfRS4ykD9U8bEb3eFg';
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `${baseUrl}${endpoint}`,
            {
              method: 'GET',
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
  
          // Update the state with the fetched data
          setData(data.items);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      // Call the fetchData function when the component mounts
      fetchData();
    }, [endpoint, token]); // Include token as a dependency to trigger the effect when it changes
    return data;
}
 
export default FetchComponent;