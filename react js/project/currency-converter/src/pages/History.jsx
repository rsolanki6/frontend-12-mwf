import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function History() {
const [history, setHistory] = useState([]);
const [loading, setLoading] = useState(true);

// Fetch history from json-server
const fetchHistory = async () => {
try {
     const res = await axios.get("http://localhost:3001/history");
     setHistory(res.data);
} catch (error) {
     console.log("Error fetching history:", error);
} finally {
     setLoading(false);
}
};

useEffect(() => {
fetchHistory();
}, []);

// Delete single record
const deleteItem = async (id) => {
try {
     await axios.delete(`http://localhost:3001/history/${id}`);
     fetchHistory();
} catch (error) {
     console.log("Error deleting:", error);
}
};

if (loading) {
     return (
          <div className="min-h-screen flex items-center justify-center">
          <div className="text-lg font-semibold text-slate-600">
          Loading...
          </div>
          </div>
     );
}

return (
<div className="min-h-screen flex flex-col bg-slate-100">

{/* Navbar */}
<Navbar />

{/* Page Content */}
<main className="flex-1 px-4 py-10">
     <div className="max-w-6xl mx-auto">

          {/* Header */}
          <h1 className="text-3xl font-bold text-slate-900 mb-6">Conversion History</h1>

          {/* Empty State */}
          {history.length === 0 ? (
          <div className="bg-white p-10 rounded-2xl shadow text-center">
               <h2 className="text-xl font-semibold text-slate-700">No history found</h2>
               <p className="text-slate-500 mt-2">Start converting currencies to see records here.</p>
          </div>
          ) : (
          <>
               {/* Desktop Table */}
               <div className="hidden md:block bg-white rounded-2xl shadow overflow-x-auto">
                    <table className="w-full">
                         <thead className="bg-slate-900 text-white">
                              <tr>
                                   <th className="p-4 text-left">Amount</th>
                                   <th className="p-4 text-left">From</th>
                                   <th className="p-4 text-left">To</th>
                                   <th className="p-4 text-left">Result</th>
                                   <th className="p-4 text-center">Action</th>
                              </tr>
                         </thead>

                         <tbody>
                         {history.map((item) => (
                              <tr key={item.id} className="border-b hover:bg-slate-50 transition">
                                   <td className="p-4">{item.amount}</td>
                                   <td className="p-4">{item.from}</td>
                                   <td className="p-4">{item.to}</td>
                                   <td className="p-4 font-semibold text-blue-600">{item.result}</td>
                                   <td className="p-4 text-center">
                                   <button onClick={() => deleteItem(item.id)} className="text-red-500 hover:text-red-700 transition">
                                        <FaTrash />
                                   </button>
                                   </td>
                              </tr>
                         ))}
                         </tbody>
                    </table>
               </div>

               {/* Mobile Cards */}
               <div className="md:hidden space-y-4">
                    {history.map((item) => (
                         <div key={item.id} className="bg-white rounded-xl shadow p-4">
                              <div className="flex justify-between items-start">
                                   <div>
                                        <p className="text-slate-500 text-sm">Amount</p>
                                        <h2 className="font-semibold text-lg">{item.amount}</h2>
                                   </div>

                                   <button onClick={() => deleteItem(item.id)} className="text-red-500">
                                        <FaTrash />
                                   </button>
                              </div>

                              <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                                   <p><span className="font-medium">From:</span>{" "}{item.from}</p>
                                   <p><span className="font-medium">To:</span>{" "}{item.to}</p>
                              </div>

                              <div className="mt-3 pt-3 border-t">
                                   <p className="text-blue-600 font-bold">Result: {item.result}</p>
                              </div>
                         </div>
                    ))}
               </div>
          </>
          )}

     </div>
</main>

{/* Footer */}
<Footer />

</div>
);
}