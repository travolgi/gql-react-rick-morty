import styled from 'styled-components';
import { NavMobile, SpanSrOnly } from '../theme/styledTags';
import IconClose from '../img/icon-close.svg';
import IconHamburger from '../img/icon-hamburger.svg';
import { useState, useRef } from 'react';
import Sidebar from './Sidebar';

export default function ToggleNav({ theme }) {
   const [expanded, setExpanded] = useState(false),
         handleToggle = () => setExpanded(!expanded);

   const refNavbar = useRef();

   return(
      <>
         <ButtonToggle
            theme={theme}
            aria-controls={refNavbar}
            aria-expanded={expanded}
            onClick={handleToggle}
            >
            <SpanSrOnly>Menu</SpanSrOnly>
         </ButtonToggle>

         <NavMobile ref={refNavbar} data-visible={expanded}>
            <Sidebar theme={theme} />
         </NavMobile>
      </>
   );
}

const ButtonToggle = styled.button`
   display: block;
   background: transparent;
   background-image: url( ${IconHamburger} );
   background-repeat: no-repeat;
   background-position: center;
   width: 1.5rem;
   aspect-ratio: 1;
   z-index: 2000;
   filter: ${props => props.theme !== 'dark' ? 'brightness(0)' : null};

   &[aria-expanded="true"] {
      background-image: url( ${IconClose} );
   }
`;