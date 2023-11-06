import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { KEY_1 } from "src/constants/API_keys";
import { POSTERS_URL } from "src/constants/URLS";
import { IPoster } from "src/interfaces/IPoster";
import MainLayout from "src/components/MainLayout";
import SelectedPoster from "src/components/SelectedPoster";

const PosterPage = () => {
  const [poster, setPoster] = useState<IPoster | null>(null);
  const { id } = useParams<{ id: string }>();

  const getPoster = async () => {
    if (id) {
      await fetch(`${POSTERS_URL}/${id}`, {
        headers: {
          'X-API-KEY': KEY_1
        }})
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPoster(data);
      })
      .catch(err => console.log(err));
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
