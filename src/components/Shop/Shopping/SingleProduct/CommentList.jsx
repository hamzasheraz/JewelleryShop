// CommentList.js
import React from 'react';
import CommentItem from './CommentItem';

const CommentList = ({ comments }) => {
  return (
    <div className="post-comments">
      <ul className="media-list comments-list m-bot-50 clearlist">
        {comments.map((comment, index) => (
          <CommentItem
            key={index}
            author={comment.author}
            timestamp={comment.timestamp}
            content={comment.content}
          />
        ))}
      </ul>
    </div>
  );
};

export default CommentList;