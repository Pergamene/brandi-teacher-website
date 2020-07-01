import React from 'react';
import { PARTITION_TYPES } from 'sp-markdown-partitioner/src/partition-types';
import { makeStyles } from '@material-ui/core';

import { colors } from '../../assets/constants';

const useStyles = makeStyles({
  h1: {
    marginBottom: '1.5rem',
    fontSize: '2rem',
    fontWeight: '600',
  },
  h2: {
    marginBottom: '1.5rem',
    fontSize: '1.8rem',
    fontWeight: '600',
  },
  h3: {
    marginBottom: '1.5rem',
    fontSize: '1.6rem',
    fontStyle: 'italic',
  },
  h4: {
    marginBottom: '1.5rem',
    fontSize: '1.4rem',
    fontStyle: 'italic',
  },
  h5: {
    marginBottom: '1.5rem',
    fontSize: '1.2rem',
    fontWeight: '600',
  },
  h6: {
    marginBottom: '1.5rem',
    fontSize: '1rem',
    fontWeight: '600',
    fontStyle: 'italic',
  },
  text: {
    whiteSpace: 'pre-wrap',
  },
  image: {
    maxWidth: '850px',
  },
  quotes: {
    whiteSpace: 'pre',
    margin: '1.5rem 0',
    padding: '0 15px',
    borderLeft: `3px solid ${colors.GOLD}`,
    borderRadius: '1.5px',
    background: `${colors.QUOTE}`,
    fontStyle: 'italic',
  },
  hr: {
    borderTop: `1px solid ${colors.GOLD}`,
    margin: '15px 30px',
  },
  p: {
    marginBottom: '1.5rem',
  },
});

const Partition = props => {
  const { partition } = props;
  const classes = useStyles();

  switch(partition.type) {
    case PARTITION_TYPES.H1:
      return <div className={classes.h1} aria-label="post H1">{partition.value}</div>;
    case PARTITION_TYPES.H2:
      return <div className={classes.h2} aria-label="post H2">{partition.value}</div>;
    case PARTITION_TYPES.H3:
      return <div className={classes.h3} aria-label="post H3">{partition.value}</div>;
    case PARTITION_TYPES.H4:
      return <div className={classes.h4} aria-label="post H4">{partition.value}</div>;
    case PARTITION_TYPES.H5:
      return <div className={classes.h5} aria-label="post H5">{partition.value}</div>;
    case PARTITION_TYPES.H6:
      return <div className={classes.h6} aria-label="post H6">{partition.value}</div>;
    case PARTITION_TYPES.TEXT:
      return <span className={classes.text}>{partition.value}</span>;
    case PARTITION_TYPES.BOLD:
      return <strong>{partition.value ? partition.value : 
        partition.partitions.map((item, index) => {
          return <Partition partition={item} key={index} />;
      })}</strong>;
    case PARTITION_TYPES.ITALICS:
      return <em>{partition.value ? partition.value : 
        partition.partitions.map((item, index) => {
          return <Partition partition={item} key={index} />;
      })}</em>;
    case PARTITION_TYPES.LINK:
      return <a href={partition.link} aria-label={partition.value}>{partition.value}</a>;
    case PARTITION_TYPES.COLOR:
      return <span style={{color: partition.color}}>{partition.value}</span>;
    case PARTITION_TYPES.UNORDERED_LIST:
      return <ul>{partition.items.map((item, index) => {
        return <li key={index}><Partition partition={item} /></li>;
      })}</ul>;
    case PARTITION_TYPES.ORDERED_LIST:
      return <ol>{partition.items.map((item, index) => {
        return <li key={index}><Partition partition={item} /></li>;
      })}</ol>;
    case PARTITION_TYPES.IMAGE:
      return <img className={classes.img} src={partition.link} alt={partition.altText} />;
    case PARTITION_TYPES.QUOTES:
      return <div className={classes.quotes} aria-label="post quote">{partition.value ? partition.value : 
        partition.partitions.map((item, index) => {
          return <Partition partition={item} key={index} />;
      })}</div>
    case PARTITION_TYPES.HR:
      return <hr className={classes.hr} />;
    case PARTITION_TYPES.PARAGRAPH:
      return <div className={classes.p} aria-label="post paragraph">{partition.partitions.map((item, index) => {
        return <Partition partition={item} key={index} />;
      })}</div>;
    default:
      return <div></div>;
  }

  // return (
  //   <div>{JSON.stringify(partition)}</div>
  // );
};

export default Partition;
