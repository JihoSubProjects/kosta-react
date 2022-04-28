import axios from "axios"
import { useEffect, useState } from "react"

interface Photo {
  id: string
  owner: string
  secret: string
  server: string
  farm: number
  title: string
  ispublic: number
  isfriend: number
  isfamily: number
}

export default function Gallery(props: { keyword: string }) {
  const API_HOST = 'https://api.flickr.com/services/rest/?method=flickr.photos.search';
  const API_KEY = '&api_key=636e1481b4f3c446d26b8eb6ebfe7127';
  const API_OPTIONS = '&per_page=24&format=json&nojsoncallback=1';
  const SRC_HOST = 'https://live.staticflickr.com';

  const [photos, setPhotos] = useState<Array<Photo>>([]);

  const url = (keyword: string) => `${API_HOST}${API_KEY}&tags=${keyword}${API_OPTIONS}`;
  const src = (photo: Photo) => `${SRC_HOST}/${photo.server}/${photo.id}_${photo.secret}_q.jpg`;

  useEffect(() => {
    if (!props.keyword) return;
    axios
      .get(url(props.keyword))
      .then(({ data }) => setPhotos(data.photos.photo))
      .catch(e => console.error(e));
  }, [props.keyword])

  return <>
    <h2>Gallery</h2>
    {photos.map(photo => <img key={photo.id} alt={photo.title} src={src(photo)} />)}
  </>
}
