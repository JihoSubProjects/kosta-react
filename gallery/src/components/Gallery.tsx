import axios from "axios"
import { useEffect, useState } from "react"

// interface Photos {
//   page: number
//   pages: number
//   perpage: number
//   total: number
//   photo: Photo[]
// }

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
  const HOST = 'https://api.flickr.com/services/rest/?method=flickr.photos.search';
  const API_KEY = '&api_key=636e1481b4f3c446d26b8eb6ebfe7127';
  const OPTIONS = '&per_page=24&format=json&nojsoncallback=1';

  const URL = (keyword: string) => {
    return `${HOST}${API_KEY}&tags=${keyword}${OPTIONS}`;
  }

  const image = (photo: Photo) => {
    return <img src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`} alt={photo.title} />
  }

  const [photos, setPhotos] = useState<Array<Photo>>([]);

  useEffect(() => {
    if (!props.keyword) return;
    axios
      .get(URL(props.keyword))
      .then(({ data }) => {
        console.log(data);
        setPhotos(data.photos.photo);
      })
      .catch(e => console.log(e));
  }, [props.keyword])

  return <>
    <h2>Gallery</h2>
    {
      photos.map(photo => image(photo))
    }
  </>
}
