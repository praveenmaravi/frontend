import React from 'react';

// Example data format (you might want to replace it with actual data fetched via API)
const feedbackData = [
  { id: 1, user: 'John Doe', rating: 4, review: 'Great experience, very helpful!' },
  { id: 2, user: 'Jane Smith', rating: 5, review: 'Absolutely love the bot! Very intuitive.' },
  { id: 3, user: 'Alice Johnson', rating: 3, review: 'Decent, but it could improve on accuracy.' },
  { id: 4, user: 'Bob Lee', rating: 2, review: 'Not as helpful as I expected.' },
];

const FeedbackTable = () => {
  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">User</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Rating</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Review</th>
          </tr>
        </thead>
        <tbody>
          {feedbackData.map((feedback) => (
            <tr key={feedback.id} className="border-t">
              <td className="px-6 py-3 text-sm text-gray-700">{feedback.user}</td>
              <td className="px-6 py-3 text-sm text-gray-700">
                {Array.from({ length: feedback.rating }, (_, index) => (
                  <span key={index} className="text-yellow-500">★</span>
                ))}
                {Array.from({ length: 5 - feedback.rating }, (_, index) => (
                  <span key={index} className="text-gray-300">★</span>
                ))}
              </td>
              <td className="px-6 py-3 text-sm text-gray-700">{feedback.review}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackTable;
