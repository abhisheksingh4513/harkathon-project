import React from 'react';

function Home() {
  return (
    <div className="app min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <ul className="flex justify-start space-x-4 p-4">
          <li><a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200">Home</a></li>
          <li><a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200">Chat</a></li>
          <li><a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200">Articles</a></li>
          <li><a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200">Analysis</a></li>
        </ul>
      </nav>
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">Calories Count</h2>
              {/* Add calorie counting functionality here */}
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">Diet</h2>
              {/* Add diet information or functionality here */}
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-white p-4 rounded-lg shadow h-full">
              <h2 className="text-lg font-semibold mb-2">Summary</h2>
              {/* Add summary information here */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;