import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Wrapper from "../components/layout/Wrapper";
import toast from 'react-hot-toast';

const ViewPage = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.filter((p) => p._id === id)[0];

  if (!paste) {
    return (
      <Wrapper>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Paste not found</h2>
            <p className="text-gray-600">The paste you're looking for doesn't exist.</p>
          </div>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              View Paste
            </h1>
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                  type="text"
                  value={paste.title}
                  disabled
                  placeholder="Title"
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(paste.content);
                      toast.success("Copied to clipboard");
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                  >
                    Copy Content
                  </button>
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: paste.title,
                          text: `${paste.title}\n\n${paste.content}`,
                        })
                        .then(() => toast.success("Shared successfully"))
                        .catch((error) => console.error("Error sharing:", error));
                      } else {
                        toast.error("Sharing is not supported in this browser");
                      }
                    }}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
                  >
                    Share
                  </button>
                </div>
              </div>

              <div className="relative">
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 font-mono"
                  value={paste.content}
                  disabled
                  rows={20}
                />
                <div className="absolute top-2 right-2 text-sm text-gray-500">
                  Created: {new Date(paste.created).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ViewPage; 