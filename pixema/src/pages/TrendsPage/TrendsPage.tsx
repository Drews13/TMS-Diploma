import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_LOADER_VISIBILITY_CREATOR } from "src/actions/actions";
import MainLayout from "src/components/MainLayout";
import PosterList from "src/components/PosterList";
import { KEY_2 } from "src/constants/API_keys";
import { NOT_NULL_FIELDS, POSTERS_URL } from "src/constants/URLS";
import { IPoster } from "src/interfaces/IPoster";

const TrendsPage = () => {
  const [posters, setPosters] = useState<IPoster[]>([]);
  const searchQuery = useSelector(({searchQuery}) => searchQuery);
  const pagination = useSelector(({pagination}) => pagination);
  const dispatch = useDispatch();
  
  const getPosts = async () => {
    let url = POSTERS_URL;
    if (searchQuery.length) {
      url += `/search?limit=${pagination}&query=${searchQuery}`;
    } else {
      url += `?limit=${pagination}${NOT_NULL_FIELDS}&sortField=year&sortType=-1&rating.imdb=7-10`;
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
  }, [searchQuery, pagination]);

  useEffect(() => {
    console.log(posters);
  }, [posters])
  
  return (
    <MainLayout>
      {!!posters.length && <PosterList posters={posters.filter((poster: IPoster) => poster.poster)} noPagination={false}/>}
    </MainLayout>
  );
};

export default TrendsPage;
