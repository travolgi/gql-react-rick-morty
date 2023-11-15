import styled from 'styled-components';
import logo from '../img/logo.svg';

import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { EPISODES_DATA } from '../apollographql/queries';
import usePageQuery from '../hooks/usePageQuery';
import Pagination from './Pagination';

export default function Sidebar({ theme }) {
   const [pageQuery, handlePageQuery] = usePageQuery();

   const { loading, error, data } = useQuery(EPISODES_DATA, {variables: {page: pageQuery} });

	if(loading) return <p>Loading...</p>
	if(error) return <p>Error Fetch Data.</p>

	if(data) {
		const episodes = data.episodes && data.episodes.results;
		const pages = data.episodes && data.episodes.info && data.episodes.info.pages;
      return (
         <>
            <ImgLogoIcon src={logo} theme={theme} alt="Rick and Morty logo icon" />
            <h1>Episodes</h1>
            <UlCategories>
               {episodes.map(episode =>
                  <li key={episode.id}>
                     <Link to={`episode/${episode.id}`}>
                        {episode.name} <small>- {episode.episode}</small>
                     </Link>
                  </li>
               )}
            </UlCategories>
            <Pagination
               pages={pages}
               pageQuery={pageQuery}
               handlePageQuery={handlePageQuery}
            />
         </>
      );
   }
}

const ImgLogoIcon = styled.img`
   width: 5rem !important;
   margin-bottom: 1.5rem;
   filter: ${props => props.theme === 'dark' ? 'brightness(100)' : null};
`;

const UlCategories = styled.ul`
   li {
      font-size: 1.15rem;
      padding: .5rem 0;
      transition: .2s ease-in;
      cursor: pointer;

      a {
         color: var(--txtColor);
         
         &:hover { color: var(--green); }
      
         small { font-size: .8rem; }
      }

      @media screen and (max-width: 830px) {
         font-size: 1.2rem;
         padding: 0 0 .5rem 1rem;
      }
   }
`;