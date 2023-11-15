import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import BackBtn from './BackBtn';

export default function FirstSection({ count = false, pages }) {
   const location = useLocation();
   return (
      <section>
         {location.pathname === '/' ?
            <p>Have been found {count} results, with {pages} pages.</p>
            :
            <DivFlex>
               <BackBtn />
               <ButtonHome>
                  <Link to="/">Go Home</Link>
               </ButtonHome>
            </DivFlex>
         }
      </section>
   );
}

const DivFlex = styled.div`
   display: flex;
   justify-content: start;
   align-items: center;
   gap: 1.5rem;
`;

const ButtonHome = styled.button`
   padding: .5rem 1.5rem .5rem 2rem;
	border-radius: 2rem;
   border: var(--border);
   background-color: var(--bg);
	box-shadow: var(--shadow);

   a { color: var(--txtColor); }
`;