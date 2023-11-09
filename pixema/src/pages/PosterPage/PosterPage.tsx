import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { KEY_1, KEY_2 } from "src/constants/API_keys";
import { POSTERS_URL } from "src/constants/URLS";
import { IPoster } from "src/interfaces/IPoster";
import MainLayout from "src/components/MainLayout";
import SelectedPoster from "src/components/SelectedPoster";
import { useDispatch } from "react-redux";
import { SET_LOADER_VISIBILITY_CREATOR } from "src/actions/actions";

const PosterPage = () => {
  const [poster, setPoster] = useState<IPoster | null>(null);
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const getPoster = async () => {
    if (id) {
      dispatch(SET_LOADER_VISIBILITY_CREATOR());
      await fetch(`${POSTERS_URL}/${id}`, {
        headers: {
          'X-API-KEY': KEY_2
        }})
      .then(res => res.json())
      .then(data => {
        setPoster(data);
      })
      .catch(err => console.log(err));
      dispatch(SET_LOADER_VISIBILITY_CREATOR());
    };
  };

  useEffect(() => {
    getPoster();
  }, [id]);

  return (
    <MainLayout>
      {!!poster && <SelectedPoster poster={poster}></SelectedPoster> }
    </MainLayout>
  );
};

export default PosterPage;
