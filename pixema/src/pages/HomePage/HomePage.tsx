import { useEffect, useState } from 'react';
import MainLayout from 'src/components/MainLayout';
import PosterList from 'src/components/PosterList';
import { POSTERS_URL } from 'src/constants/URLS';
import { KEY_1 } from 'src/constants/API_keys';

const HomePage = () => {
  const [posters, setPosters] = useState([]);

  const getPosts = async () => {
    await fetch(`${POSTERS_URL}?limit=250`, {
      headers: {
        'X-API-KEY': KEY_1
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
