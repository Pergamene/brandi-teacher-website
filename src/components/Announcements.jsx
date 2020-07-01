import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';

import PostsState from '../state/Posts';

import Post, { PostType } from './post/Post';

import { colors } from '../assets/constants';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: `${colors.BACKGROUND_COLOR}`,
    margin: '0 auto',
    border: `2px solid ${colors.GOLD}`,
    borderTop: 'none',
    padding: '0 20px 20px',
  },
});

const Announcements = props => {
  const { signedIn } = props;
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAnnouncements = async () => {
      const announcements = await PostsState.getAllAnnouncements();
      setPosts(announcements);
    }
    getAnnouncements();
  }, []);

  return (
    <div className={classes.root}>
      <h2>Announcements!</h2>
      <div>
        {posts.map((post, index) => {
          return <Post content={post} signedIn={signedIn} type={PostType.ANNOUNCEMENTS} key={index} />
        })}
      </div>
    </div>
  );
};

export default Announcements;
