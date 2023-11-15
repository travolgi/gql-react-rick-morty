import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function BackBtn() {
   const navigate = useNavigate();
   return(
      <BackButton onClick={() => navigate(-1)}>
         <svg viewBox="0 0 448 512"><path fill="currentColor" d="M152.485 396.284l19.626-19.626c4.753-4.753 4.675-12.484-.173-17.14L91.22 282H436c6.627 0 12-5.373 12-12v-28c0-6.627-5.373-12-12-12H91.22l80.717-77.518c4.849-4.656 4.927-12.387.173-17.14l-19.626-19.626c-4.686-4.686-12.284-4.686-16.971 0L3.716 247.515c-4.686 4.686-4.686 12.284 0 16.971l131.799 131.799c4.686 4.685 12.284 4.685 16.97-.001z"></path></svg>
         Back
      </BackButton>
   );
}

const BackButton = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: .5rem 1.5rem .5rem 2rem;
	border-radius: 2rem;
   border: var(--border);
   background-color: var(--bg);
   color: var(--txtColor);
	box-shadow: var(--shadow);

   svg {
      width: 1.1rem;
      position: relative;
      left: -.6rem;
   }
`;