import React from 'react';

export default function Stepper({ steps = [] }) {
  return (
    <div className="w-full">
      <ol className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        {steps.map((s, i) => (
          <li key={i} className="flex-1">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <div>
                <h4 className="font-bold text-gray-900">{s.title}</h4>
                <p className="text-sm text-gray-600">{s.description}</p>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden md:block w-full h-[1px] bg-gray-100 mt-4" />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
