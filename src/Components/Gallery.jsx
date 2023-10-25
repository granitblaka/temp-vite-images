import { useQueries, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContextHook } from '../context';

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { searchTerm } = useContextHook();
  console.log(searchTerm);
  const { data, isLoading, isError } = useQuery({
    queryKey: ['imagesdata', searchTerm],
    queryFn: async () => {
      const response = await axios.get(`${url}&query=${searchTerm}`);
      return response.data;
    },
  });

  console.log(data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>There was an error, try again!</h1>;
  }

  if (data.results.length < 1) {
    return <h1>No results found!</h1>;
  }

  return (
    <section className='image-container'>
      {data.results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            key={item.id}
            src={url}
            width='80'
            height='80'
            alt={item.alt_description}
            className='img'
          />
        );
      })}
    </section>
  );
};
export default Gallery;
