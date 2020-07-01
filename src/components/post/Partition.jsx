import React from 'react';
import { PARTITION_TYPES } from 'sp-markdown-partitioner/src/partition-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  h1: {

  },
  h2: {

  },
  h3: {

  },
  h4: {

  },
  h5: {

  },
  h6: {

  },
  image: {

  },
  quotes: {

  },
});

const Partition = props => {
  const { partition } = props;
  const classes = useStyles();

  switch(partition.type) {
    case PARTITION_TYPES.H1:
      return <div>{partition.value}</div>;
    case PARTITION_TYPES.H2:
      return <div>{partition.value}</div>;
    case PARTITION_TYPES.H3:
      return <div>{partition.value}</div>;
    case PARTITION_TYPES.H4:
      return <div>{partition.value}</div>;
    case PARTITION_TYPES.H5:
      return <div>{partition.value}</div>;
    case PARTITION_TYPES.H6:
      return <div>{partition.value}</div>;
    case PARTITION_TYPES.TEXT:
      return <span>{partition.value}</span>;
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
        return <li><Partition partition={item} key={index} /></li>;
      })}</ul>;
    case PARTITION_TYPES.ORDERED_LIST:
      return <ol>{partition.items.map((item, index) => {
        return <li><Partition partition={item} key={index} /></li>;
      })}</ol>;
    case PARTITION_TYPES.IMAGE:
      return <img src={partition.link} alt={partition.altText} />;
    case PARTITION_TYPES.QUOTES:
      return <div>{partition.value ? partition.value : 
        partition.partitions.map((item, index) => {
          return <Partition partition={item} key={index} />;
      })}</div>
    case PARTITION_TYPES.HR:
      return <hr />;
    case PARTITION_TYPES.PARAGRAPH:
      return <div>{partition.partitions.map((item, index) => {
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
