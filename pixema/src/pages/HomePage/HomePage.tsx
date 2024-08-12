import { useEffect, useState } from 'react';
import MainLayout from 'src/components/MainLayout';
import PosterList from 'src/components/PosterList';
import { NOT_NULL_FIELDS, POSTERS_URL } from 'src/constants/URLS';
import { KEY_1, KEY_2 } from 'src/constants/API_keys';
import { useSelector } from 'react-redux';
import { IPoster } from 'src/interfaces/IPoster';
import { useDispatch } from 'react-redux';
import { SET_LOADER_VISIBILITY_CREATOR } from 'src/actions/actions';

const HomePage = () => {
  const [posters, setPosters] = useState([]);
  const searchQuery = useSelector(({searchQuery}) => searchQuery);
  const pagination = useSelector(({pagination}) => pagination);
  const filters = useSelector(({filters}) => filters);
  const dispatch = useDispatch();

  const getPosts = async () => {
    let url = POSTERS_URL;
    if (searchQuery.length) {
      url += `/search?limit=${pagination}&query=${searchQuery}`;
    } else {
      url += `?limit=${pagination}${NOT_NULL_FIELDS}`;
      url += "&sortField=";
      url += (filters.sort === "Year")  ? "year" : "rating.imdb";
      url += "&sortType=-1";
      if (filters.years.from && filters.years.to) {
        url += `&year=${filters.years.from}-${filters.years.to}`;
      }
      if (filters.rating.from && filters.rating.to) {
        url += `&rating.imdb=${filters.rating.from}-${filters.rating.to}`
      }
      else {
        url += "&rating.imdb=1-10";
      }
    }
    console.log(url);
    dispatch(SET_LOADER_VISIBILITY_CREATOR());
    await fetch(url, {
      headers: {
        'X-API-KEY': KEY_2
      }})
    .then(res => res.json())
    .then(data => {
      setPosters(data.docs);
    })
    .catch(err => console.log(err));
    dispatch(SET_LOADER_VISIBILITY_CREATOR());
  };

  useEffect(() => {
    getPosts();
  }, [searchQuery, pagination, filters]);

  return (
    <MainLayout>
      {!!posters && <PosterList posters={posters.filter((poster: IPoster) => poster.poster)} noPagination={false}/>}
    </MainLayout>
  );
};

export default HomePage;
