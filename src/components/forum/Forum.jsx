import React, { useState } from 'react';
import './ForumPage.css';

const ForumPage = () => {
  const [topics, setTopics] = useState([]);
  const [newTopic, setNewTopic] = useState('');

  const handleAddTopic = () => {
    if (newTopic.trim()) {
      setTopics([...topics, { id: Date.now(), title: newTopic, comments: [] }]);
      setNewTopic('');
    }
  };

  const handleAddComment = (topicId, comment) => {
    setTopics(
      topics.map(topic =>
        topic.id === topicId
          ? { ...topic, comments: [...topic.comments, { id: Date.now(), text: comment }] }
          : topic
      )
    );
  };

  return (
    <div className="forum-container">
      <header className="forum-header">
        <h1>Образовательный Форум</h1>
        <p>Делитесь знаниями, задавайте вопросы и обсуждайте темы!</p>
      </header>

      <div className="forum-input-container">
        <input
          type="text"
          placeholder="Введите тему..."
          value={newTopic}
          onChange={(e) => setNewTopic(e.target.value)}
          className="forum-input"
        />
        <button onClick={handleAddTopic} className="forum-button">
          Добавить Тему
        </button>
      </div>

      <div className="forum-grid">
        {topics.map((topic) => (
          <Topic
            key={topic.id}
            topic={topic}
            onAddComment={handleAddComment}
          />
        ))}
      </div>
    </div>
  );
};

const Topic = ({ topic, onAddComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      onAddComment(topic.id, newComment);
      setNewComment('');
    }
  };

  return (
    <div className="forum-grid-item">
      <h2>{topic.title}</h2>
      <div>
        {topic.comments.length > 0 ? (
          <ul>
            {topic.comments.map((comment) => (
              <li key={comment.id}>{comment.text}</li>
            ))}
          </ul>
        ) : (
          <p>Комментариев пока нет.</p>
        )}
      </div>

      <div className="comment-input-container">
        <input
          type="text"
          placeholder="Добавьте комментарий..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="comment-input"
        />
        <button onClick={handleAddComment} className="comment-button">
          Отправить
        </button>
      </div>
    </div>
  );
};

export default ForumPage;
