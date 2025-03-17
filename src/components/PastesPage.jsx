import React, { useState } from 'react'
import Wrapper from '../components/layout/Wrapper'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/PasteSlice';
import toast from 'react-hot-toast';
import { Link, useSearchParams } from 'react-router-dom';

const PastesPage = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) => 
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <Wrapper>
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <input
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              type="search"
              placeholder="Search pastes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            {filteredData.length > 0 && 
              filteredData.map((paste) => (
                <div 
                  key={paste?._id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {paste.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2">
                        {paste.content}
                      </p>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div className="flex flex-wrap gap-2">
                        <Link 
                          to={`/?pasteId=${paste?._id}`}
                          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                        >
                          Edit
                        </Link>
                        <Link 
                          to={`/pastes/${paste?._id}`}
                          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm"
                        >
                          View
                        </Link>
                        <button 
                          onClick={() => handleDelete(paste?._id)}
                          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm"
                        >
                          Delete
                        </button>
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText(paste?.content)
                            toast.success("Copied to clipboard")
                          }}
                          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-sm"
                        >
                          Copy
                        </button>
                        <button 
                          onClick={() => {
                            if (navigator.share) {
                              navigator.share({
                                title: paste?.title,
                                text: `${paste?.title}\n\n${paste.content}`,
                              })
                              .then(() => toast.success("Shared successfully"))
                              .catch((error) => console.error("Error sharing:", error));
                            } else {
                              toast.error("Sharing is not supported in this browser");
                            }
                          }}
                          className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors text-sm"
                        >
                          Share
                        </button>
                      </div>
                      <div className="text-sm text-gray-500">
                        Created: {new Date(paste.created).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default PastesPage 