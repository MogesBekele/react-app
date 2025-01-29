const generateTripLocation = async (location, days, budget, travelGroup) => {
  const response = await fetch('http://localhost:3001/generate-trip-location', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ location, days, budget, travelGroup }),
  });

  if (!response.ok) {
    throw new Error('Failed to generate trip location');
  }

  const data = await response.json();
  return data.tripLocation;
};

export default generateTripLocation;