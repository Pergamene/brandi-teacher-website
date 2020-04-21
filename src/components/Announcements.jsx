import React, { useState, useEffect } from 'react';

import { db } from '../assets/firebase';

const Announcements = props => {
  const { signedIn } = props;
  const [post, setPost] = useState(null);
  const docRef = db.collection('test-announcements').doc('test announcement');

  useEffect(() => {
    const getAnnouncement = async () => {
      const doc = await docRef.get();
      setPost(doc.data());
    };
    getAnnouncement();
  }, []);

  return (
    <div>
      <h2>Announcements!</h2>
      {post && <div>
        <p>{post.title}</p>
        <p>{post.timestamp}</p>
        <p>{post.body}</p>
      </div>}
    </div>
  );
};

export default Announcements;
