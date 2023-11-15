import { DivW100 } from '../theme/styledTags';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { EPISODE_BY_ID } from '../apollographql/queries';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import SmallCards from '../components/SmallCards';

export default function Episode() {
   const { id } = useParams();
   const { loading, error, data } = useQuery(EPISODE_BY_ID, {variables: {id: id} });

   if(loading) return <Loader />
	if(error && typeof(id) !== 'number') {
      return <ErrorMessage message="Ups.. Page not found!" />
   } else if(error) {
      return <ErrorMessage message="ERROR FETCH DATA" />
   }

	if(data) {
      const episode = data.episode,
            characters = episode.characters;
            
      return (
         <>
            <DivW100>
               <h1>{episode.name}</h1>
               <p>{episode.episode} - {episode.air_date}</p>
            </DivW100>

            <h2 style={{ width: '100%' }}>Residents:</h2>
            <SmallCards residents={characters} />
         </>
      );
   }
}