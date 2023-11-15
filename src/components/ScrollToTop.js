import styled from 'styled-components';
import { scroolFadeIn } from '../theme/animations';
import { useState } from 'react';

export default function ScrollToTop({ refContainer }) {
   const [visible, setVisible] = useState(false);
   
   const container = refContainer.current;
   const btnVisible = () => container.scrollTop > 200 ? setVisible(true) : setVisible(false);
   window.onload = () => container.addEventListener('scroll', btnVisible);
   
   const scrollToTop = () => container.scrollTo({ top: 0, behavior: 'smooth' });

   return(
      <ButtonGoTop onClick={scrollToTop} className={visible ? 'visible' : ''}>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 450"><path d="M168.5 164.2l148 146.8c4.7 4.7 4.7 12.3 0 17l-19.8 19.8c-4.7 4.7-12.3 4.7-17 0L160 229.3 40.3 347.8c-4.7 4.7-12.3 4.7-17 0L3.5 328c-4.7-4.7-4.7-12.3 0-17l148-146.8c4.7-4.7 12.3-4.7 17 0z"></path></svg>
      </ButtonGoTop>
   );
}

const ButtonGoTop = styled.button`
   display: none;
	position: absolute;
	right: 4rem;
	bottom: 3rem;
	padding: .15rem .5rem;
	background-color: var(--hColor);
	border-radius: 2rem;
   border: var(--border);
	opacity: .6;
	animation: ${scroolFadeIn} 1s ease-in;
	transition: .2s ease-in;
	z-index: 96;

	&:hover {
		opacity: 1;
   }

	svg {
		width: 1.2rem;
	   fill: var(--bg);
   }

   &.visible {
      display: block !important;
   }
`;