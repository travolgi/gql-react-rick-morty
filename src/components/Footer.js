import styled from 'styled-components';

export default function Footer() {
   const currentYear = new Date().getFullYear();
   return (
      <FooterTag>
         <small>
            &copy; Developed by <a href="https://travolgi.it" target="_blank" rel="noopener noreferrer">Travolgi</a> {currentYear}
            <br />
            Source data: <a href="https://rickandmortyapi.com" target="_blank" rel="noopener noreferrer">rickandmortyapi</a>
         </small>
      </FooterTag>
   );
}

const FooterTag = styled.footer`
   display: flex;
   justify-content: center;
	align-items: center;
   padding-top: 3rem;
   text-align: center;
`;