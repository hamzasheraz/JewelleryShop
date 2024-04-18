// CommentItem.js
import React from 'react';

const CommentItem = ({ author, timestamp, content }) => {
  return (
    <li className="media">
      <a className="pull-left" href="#!">
        <img
          className="media-object comment-avatar"
          src="/src/images/blog/avater-1.jpg"
          alt=""
          width="50"
          height="50"
        />
      </a>
      <div className="media-body">
        <div className="comment-info">
          <div className="comment-author">
            <a href="#!">{author}</a>
          </div>
          <time dateTime="2013-04-06T13:53">{timestamp}</time>
          <a className="comment-button" href="#!">
            <i className="tf-ion-chatbubbles"></i>Reply
          </a>
        </div>
        <p>{content}</p>
      </div>
    </li>
  );
};

export default CommentItem;