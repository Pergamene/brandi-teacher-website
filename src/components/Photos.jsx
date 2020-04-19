import React, { useState } from 'react';

import { storageRef } from '../assets/firebase';

const Photos = props => {
  const [src, setSrc] = useState(null);
  const playgroundRef = storageRef.child('test/playground.jpeg');
  playgroundRef.getDownloadURL().then(url => {
    setSrc(url);
  });


  return (
    <div>
      <img src={src} alt="children playing on a school playground" />
    </div>
  );
};

export default Photos;
