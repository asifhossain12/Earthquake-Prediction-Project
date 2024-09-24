import React, { useState } from 'react';
import axios from 'axios';

const EarthquakeForm = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/predict/', {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude)
      });
      setResult(response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="latitude">
            Latitude
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="latitude"
            type="text"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            placeholder="Enter latitude"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="longitude">
            Longitude
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="longitude"
            type="text"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            placeholder="Enter longitude"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Predict
          </button>
        </div>
      </form>

      {result && (
        <div className="max-w-lg mx-auto mt-6">
          <h2 className="text-xl font-bold">Prediction Results</h2>
          <p>Magnitude: {result.magnitude}</p>
          <p>Depth: {result.depth}</p>
        </div>
      )}
    </div>
  );
};

export default EarthquakeForm;
