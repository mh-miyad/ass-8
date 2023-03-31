import React from "react";

const BlogCard = ({
  authorName,
  blogTitle,
  blogCoverImage,
  authorImage,
  readTime,
  publishDate,
  post,
}) => {
  return (
    <div className="max-w-lg rounded-xl overflow-hidden shadow-lg space-y-5 border-2 border-zinc-500 px-3 py-5 ">
      <img className="w-full rounded-lg" src={blogCoverImage} alt={blogTitle} />
      <div>
        <div className="flex justify-between">
          <div className="flex items-center mb-2">
            <img
              className="w-10 h-10 rounded-full mr-4 "
              src={authorImage}
              alt={authorName}
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none font-bold">
                {authorName}
              </p>
              <p className="text-gray-600 font-medium leading-none ">{publishDate}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="text-gray-600 text-sm "> {readTime} read</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="pink"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="px-6">
        <div className="font-bold text-xl mb-2">{blogTitle}</div>
        <div className="text-sm">{post}</div>
      </div>
      <div>
        <button className="text-md hover:underline decoration-purple-600 text-purple-600 font-semibold">
          Mark as read
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
