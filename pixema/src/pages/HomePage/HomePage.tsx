import React, { useEffect, useState } from 'react';
import MainLayout from 'src/components/MainLayout';
import Poster from 'src/components/Poster';
import PosterList from 'src/components/PosterList';
import { IPoster } from 'src/interfaces/IPoster';

const HomePage = () => {
  const [posters, setPosters] = useState([]);

  const getPosts = async () => {
    await fetch(`https://api.kinopoisk.dev/v1.3/movie?limit=250`, {
      headers: {
        'X-API-KEY': '4C4M5YF-FP14HDA-KHQXPJM-4CFBFTW'
      }})
    .then(res => res.json())
    .then(data => {
      setPosters(data.docs);
    })
    .catch(err => console.log(err));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <MainLayout>
      <PosterList posters={posters}/>
    </MainLayout>
  );
};

export default HomePage;
