import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  
  if (!isOpen) {
    return (
      <button onClick={() => setIsOpen(true)} className="fixed bottom-4 right-4 bg-amber-500 text-white p-4 rounded-full shadow-lg hover:bg-amber-600">
        <MessageCircle />
      </button>
    );
  }
  
  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-xl border">
      <div className="flex justify-between items-center p-4 border-b">
        <h3 className="font-bold text-green-800">Lupindo SSS Bot</h3>
        <button onClick={() => setIsOpen(false)}><X className="h-4 w-4" /></button>
      </div>
      <div className="p-4 h-64 overflow-y-auto">
        <p className="text-gray-600">Hello! How can I help you today?</p>
      </div>
    </div>
  );
}
