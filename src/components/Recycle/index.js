import React, { useEffect, useState } from "react";
import materialData from "./data.json";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setSearchResults(materialData);
  }, []);

  function search(data) {
    return data.filter((item) =>
      item.material.toLowerCase().includes(query.toLowerCase())
    );
  }

  return (
    <>
      <div className="min-h-screen bg-base-300 flex justify-center items-center"> 
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <br></br>
            <br></br>
            <h1 className="text-3xl font-bold text-white-500">Discover Sustainable Solutions</h1>
            <p className="text-lg text-gray mt-2">Explore eco-friendly options for recycling and reusing materials</p>
          </div>
          <div className="w-full md:w-1/2 mx-auto">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500 text-black" 
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search material" />
          </div>
          <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {search(searchResults).map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md">
                <div className="p-4">
                  <div className="text-xl font-semibold mb-2">{item.material}</div>
                  <div className="text-gray-1000">
                    <p className="mb-2"><strong>Recycling Info:</strong> {item.recyclingInfo}</p>
                    <p className="mb-2"><strong>Recycle Suggestion:</strong> {item.recycleSuggestion}</p>
                    <p><strong>Reuse Suggestion:</strong> {item.reuseSuggestion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
