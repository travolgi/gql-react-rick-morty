import { ImgCharacter, LiStatus, DivDetails } from '../theme/styledTags';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { CHARACTER_BY_ID } from '../apollographql/queries';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

export default function Character() {
   const { id } = useParams();
   const { loading, error, data } = useQuery(CHARACTER_BY_ID, {variables: {id: id} });

   if(loading) return <Loader />
	if(error && typeof(id) !== 'number') {
      return <ErrorMessage message="Ups.. Page not found!" />
   } else if(error) {
      return <ErrorMessage message="ERROR FETCH DATA" />
   }

	if(data) {
      const character = data.character,
            location = character.location,
            origin = character.origin,
            episodes = character.episode;

      return (
         <>
            <ImgCharacter src={character.image} alt={character.name} />

            <DivDetails>
               <h1>{character.name}</h1>
               <ul>
                  <LiStatus color={
                     character.status === 'Alive' ? 'var(--green)'
                        : character.status === 'Dead' ? 'rgb(255,0,0)'
                        : 'var(--bg-2)'
                     }>
                     {character.status} - {character.species}
                  </LiStatus>
                  <li>Gender: {character.gender}</li>
               </ul>
               
               {location.name !== 'unknown' ?
                  <>
                     <h2>Location:</h2>
                     <ul>
                        <li>
                           <Link to={`/location/${location.id}`}>
                              {location.name}
                           </Link>
                        </li>
                        <li>{location.dimension}</li>
                     </ul>
                  </>
                  : null
               }
               
               {origin.name !== 'unknown' ?
                  <>
                     <h2>Origin:</h2>
                     <ul>
                        <li>{origin.name}</li>
                        <li>{origin.dimension}</li>
                     </ul>
                  </>
                  : null
               }
            </DivDetails>

            <DivDetails>
               <h2>Episodes:</h2>
               <ul>
                  {episodes.map(episode =>
                     <li key={episode.id}>
                        <Link to={`/episode/${episode.id}`}>
                           {episode.name} - {episode.episode}
                        </Link>
                     </li>
                  )}
               </ul>
            </DivDetails>
         </>
      );
   }
}