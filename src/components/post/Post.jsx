import React, { Fragment, useState } from 'react';
import { generateMarkdown } from 'sp-markdown-partitioner/src/partitions-to-markdown';
import { generatePartitions } from 'sp-markdown-partitioner/src/markdown-to-partitions';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
// import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Paper from '@material-ui/core/Paper';

import Partition from './Partition';

const useStyles = makeStyles({
  root: {
    padding: '15px',
    marginBottom: '30px',
  },
  container: {
    display: 'flex',
    fontFamily: 'Comic Neue',
  },
  post: {
    flex: 1,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export const PostType = {
  ANNOUNCEMENTS: 'announcements',
};

const Post = props => {
  const { content, signedIn, type } = props;
  const classes = useStyles();
  const [isEditing, setIsEditing] = useState(false);
  const [markdown, setMarkdown] = useState('');

  const handleChange = event => {
    setMarkdown(event.target.value);
  };

  const handleEdit = () => {
    setMarkdown(generateMarkdown(content));
    setIsEditing(true);
  };

  const handleStopEdit = () => {
    
    setIsEditing(false);
  };

  // const handleDelete = () => {
  //   // @TODO:
  // };

  return (
    <Paper className={classes.root} elevation={6}>
      {isEditing ? (
        <div className={classes.container}>
          <TextField onChange={handleChange} multiline fullWidth variant="filled" value={markdown} />
          <div className={classes.buttons}>
            <DoneIcon className={classes.buttons} onClick={handleStopEdit} fontSize="large" />
            {/* @TODO: add delete */}
            {/* <DeleteForeverIcon onClick={handleDelete} fontSize="large" /> */}
          </div>
        </div>
      ) : (
        <div className={classes.container}>
          <div className={classes.post}>
            {content.map((partition, index) => {
              return <Partition partition={partition} key={index} />;
            })}
          </div>
          {true && <div className={classes.buttons}>
            <EditIcon onClick={handleEdit} fontSize="large" />
          </div>}
        </div>
      )}
    </Paper>
  );
};

export default Post;
