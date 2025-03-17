import React from 'react'
import Wrapper from './layout/Wrapper'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-4">
      <Wrapper>
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-white mb-2">Paste-A</h3>
              <p className="text-sm text-gray-400">Your secure code and text sharing platform</p>
            </div>
            
            <div className="flex gap-6">
              <div>
                <h4 className="text-white font-medium mb-2">Quick Links</h4>
                <ul className="space-y-1 text-sm">
                  <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                  <li><a href="/pastes" className="hover:text-white transition-colors">My Pastes</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-2">Connect</h4>
                <ul className="space-y-1 text-sm">
                  <li><a href="/" className="hover:text-white transition-colors">GitHub</a></li>
                  <li><a href="/" className="hover:text-white transition-colors">Twitter</a></li>
                  <li><a href="/" className="hover:text-white transition-colors">LinkedIn</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Paste-App(NotesSaver)Apsana. All rights reserved.</p>
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer