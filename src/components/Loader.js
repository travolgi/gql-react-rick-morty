import styled from 'styled-components';
import RingLoader from 'react-spinners/RingLoader';

export default function Loader() {
   return (
      <DivLoading>
         <RingLoader size={150} color={'#84f85e'}  />
         <h1>Loading...</h1>
      </DivLoading>
   );
}

const DivLoading = styled.div`
   position: absolute;
   inset: 0;
   width: 100%;
   min-height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   gap: 2.5rem;
   background: var(--dark-green);
   transition: all .8s ease-in-out;
   z-index: 999;
`;