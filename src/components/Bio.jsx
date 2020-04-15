import React from 'react';
import { makeStyles } from '@material-ui/core';

import headshot from '../assets/headshot.jpg';
import family from '../assets/family.jpg'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    margin: '0 auto',
    border: '2px solid #cfb53b',
    borderTop: 'none',
    padding: '0 20px 20px',
  },
  h2: {
    fontSize: '36px',
    margin: '0',
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
  },
  img: {
    border: '2px solid #cfb53b',
    padding: '5px',
    height: '400px',
  },
  p: {
    margin: '5px',
    lineHeight: '180%',
    fontSize: '18px',
  },
});

const Bio = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h2 className={classes.h2}>Mrs. Hansen</h2>
        <div className={classes.section}>
          <img className={classes.img} src={headshot} alt="headshot" />
          <div className={classes.text}>
            <p className={classes.p}>My name is Mrs. Hansen! I am so excited to teach 4th grade at Sunburst Elementary! Before moving schools, I taught 6th grade at Adelaide Elementary for two years. I received my bachelor's degree in Elementary Education from Weber State University, with a minor in English as a Second Language (ESL). I love teaching and I’m so happy to be here at this brand, new school!</p>
            <p className={classes.p}>I am the oldest of four in my family. I have two younger sisters and a younger brother. My family grew up loving musical theater and our house was always full of singing, dancing, and playing instruments. I enjoy playing the piano, as well as performing on stage. Some of my favorite shows that I have done include: The Drowsy Chaperone, Thoroughly Modern Millie, The Addams Family, and Ragtime.</p>
          </div>
        </div>
        <div className={classes.section}>
          <div className={classes.text}>
            <p className={classes.p}>I got married last year to my sweet husband, Jason. We bought a house together in Centerville. He is going to school at the University of Utah and is studying Information Systems in the Business Department. We are enjoying our newlywed phase—we love to play board games, videogames, and binge watch Netflix and Disney+. We love Disneyland and just went to visit the new Galaxy’s Edge, where we made our own lightsaber and droid!!</p>
            <p className={classes.p}>A few of my favorite things include: Broadway shows, puppies, a ‘Chandler Bing’ at FIIZ, Chic-fil-a, and Harry Potter!</p>
          </div>
          <img className={classes.img} src={family} alt="family" /> 
        </div>
    </div>
  );
}

export default Bio;
