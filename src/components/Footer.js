import styled from 'styled-components';

const Footer = () => {
   const currentYear = new Date().getFullYear();
   return (
      <FooterTag>
         <small>
            &copy; developed by <a href="https://denielden.github.io" target="_blank" rel="noopener noreferrer">denie/den</a> {currentYear}
            <br />
            source data: <a href="https://rickandmortyapi.com" target="_blank" rel="noopener noreferrer">rickandmortyapi</a>
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

export default Footer;