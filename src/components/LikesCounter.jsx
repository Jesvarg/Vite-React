import { useState } from 'react';

const LikesCounter = () => {
  const [totalLikes, setTotalLikes] = useState(0);

  const handleLike = () => {
    setTotalLikes((prev) => prev + 1);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-600">Total Me gusta:</span>
      <span className="font-bold text-purple-600">{totalLikes}</span>
      <button
        onClick={handleLike}
        className="p-2 text-purple-500 hover:text-purple-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default LikesCounter;
