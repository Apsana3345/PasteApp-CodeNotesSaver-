import React, { useEffect, useState } from "react";
import Wrapper from "./layout/Wrapper";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPastes } from "../redux/PasteSlice";

const Pastes = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteId]);

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      created: new Date().toISOString(),
    }

    if (pasteId) {
      dispatch(updateToPastes(paste));
    } else {
      dispatch(addToPastes(paste))
    }

    setTitle('');
    setValue('');
    setSearchParams({});
  }

  return (
    <Wrapper>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              {pasteId ? "Edit Paste" : "Create New Paste"}
            </h1>
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter title here"
                />
                <button
                  onClick={createPaste}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                  {pasteId ? "Update Paste" : "Create Paste"}
                </button>
              </div>

              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                value={value}
                placeholder="Enter content here"
                onChange={(e) => setValue(e.target.value)}
                rows={20}
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Pastes;