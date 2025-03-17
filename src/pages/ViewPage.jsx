import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Wrapper from "../components/layout/Wrapper";

const ViewPage = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.filter((p) => p._id === id)[0];

  if (!paste) {
    return (
      <Wrapper>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
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
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                {paste.title}
              </h1>
              <div className="text-sm text-gray-500">
                Created: {new Date(paste.created).toLocaleString()}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <pre className="whitespace-pre-wrap font-mono text-gray-800 text-sm">
                {paste.content}
              </pre>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(paste.content);
                  toast.success("Copied to clipboard");
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
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
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm"
              >
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ViewPage;