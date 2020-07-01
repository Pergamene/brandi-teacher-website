import React, { Fragment, useState } from 'react';
import { generateMarkdown } from 'sp-markdown-partitioner/src/partitions-to-markdown';
import { generatePartitions } from 'sp-markdown-partitioner/src/markdown-to-partitions';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
// import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { colors } from '../../assets/constants';

import Partition from './Partition';

const useStyles = makeStyles({
  root: {
    background: 'red',
    paddingBottom: '15px',
    marginBottom: '15px',
    borderBottom: `1px solid ${colors.GOLD}`,
    display: 'flex',
    width: '100%',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    background: 'blue',
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
    <Fragment>
      {isEditing ? (
        <div className={classes.root}>
          <TextField onChange={handleChange} multiline fullWidth variant="outlined" value={markdown} />
          <DoneIcon onClick={handleStopEdit} fontSize="large" />
        </div>
      ) : (
        <div className={classes.root}>
          <div>
            {content.map((partition, index) => {
              return <Partition partition={partition} key={index} />;
              // return <div key={index}>{JSON.stringify(partition)}</div>;
            })}
          </div>
          {true && <div className={classes.buttons}>
            <EditIcon onClick={handleEdit} fontSize="large" />
            {/* @TODO: add delete */}
            {/* <DeleteForeverIcon onClick={handleDelete} fontSize="large" /> */}
          </div>}
        </div>
      )}
    </Fragment>
  );
};

export default Post;
