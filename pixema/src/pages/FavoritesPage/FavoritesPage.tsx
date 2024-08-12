import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SET_LOADER_VISIBILITY_CREATOR } from "src/actions/actions";
import MainLayout from "src/components/MainLayout";
import PosterList from "src/components/PosterList";
import { KEY_2 } from "src/constants/API_keys";
import { POSTERS_URL } from "src/constants/URLS";
import { IPoster } from "src/interfaces/IPoster";

const FavoritesPage = () => {
  const [posters, setPosters] = useState<IPoster[]>([]);

  const userData = useSelector(({userData}) => userData);
  const dispatch = useDispatch();

  const getPosters = async () => {
    dispatch(SET_LOADER_VISIBILITY_CREATOR());
    let url = `${POSTERS_URL}?limit=250`;
    userData.favoritesId.forEach((id: number) => {
      url += `&id=${id}`
    });
    await fetch(url, {
      headers: {
        'X-API-KEY': KEY_2
      }})
    .then(res => res.json())
    .then(data => {
      setPosters(data.docs);
    })
    dispatch(SET_LOADER_VISIBILITY_CREATOR());
  }

  useEffect(() => {
    getPosters();
  }, []);

  useEffect(() => {
    console.log(posters);
  }, [posters])

  return (
    <MainLayout>
      {!!posters && <PosterList posters={posters.filter((poster: IPoster) => poster.poster)} noPagination/>}
      {/* {!!posters && <PosterList posters={posters}/>} */}
      {/* <PosterList posters={posters}/> */}
    </MainLayout>
  );
};

export default FavoritesPage;
