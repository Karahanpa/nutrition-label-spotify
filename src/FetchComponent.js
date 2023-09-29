import React, { useEffect, useState } from "react";

const FetchComponent = (baseUrl, endpoint) => {
    const [data, setData] = useState([]);
    const token = 'BQAls5PVfIDrHSM7FfeEBATYR_YmDHxVU_xo3sLHv0WwbBubmANCBPGlsi14t0hU82fwDwRO4JPHqZamxm9Kzg3zOVmeONYzv8HqqSdpzxTPWNLztrqjfzKwxl1VmaTxhXcxYzsp9HrmQapfiXEKJ-zf0UQG4Mud4ZDnoF0FTSnFBhrUEs47jJqubKzbNrCO0oAtLUXa3jATimm7-qMCabjAx8nJjEm9Qq26ZKyVnJXbYxqTnliCre3ogrvPnjgCfDG00A';
  
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