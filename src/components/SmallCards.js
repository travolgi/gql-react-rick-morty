import { LiStatus, ArticleCard, DivCardInfo } from '../theme/styledTags';
import { Link } from 'react-router-dom';

export default function SmallCards({ residents }) {
   return (
      <>
         {residents.map(resident =>
            <ArticleCard key={resident.id}>
            <img src={resident.image} alt={resident.name} />
               <DivCardInfo>
                  <Link to={`/character/${resident.id}`} >
                     <h2>{resident.name}</h2>
                  </Link>
                  <ul>
                     <LiStatus color={
                        resident.status === 'Alive' ? 'var(--green)'
                           : resident.status === 'Dead' ? 'rgb(255,0,0)'
                           : 'var(--bg-2)'
                        }>
                        {resident.status} - {resident.species}
                     </LiStatus>
                  </ul>
               </DivCardInfo>
            </ArticleCard>
         )}
      </>
   );
}