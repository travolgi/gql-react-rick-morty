import styled from 'styled-components';
import { fadeIn } from './animations';

const wSidebar = '17.5rem',
      paddContainer = '4rem 2rem',
		hSize = `
			height: 100%;
			overflow: auto;
			scrollbar-width: thin;
			scrollbar-color: rgba(0,0,0,.1) transparent;
			scroll-behavior: smooth;
		`;


export const MainTag = styled.main`
	height: calc(100vh - 4.6rem);
`;

export const DivSidebar = styled.div`
	width: ${wSidebar};
	padding: ${paddContainer};
	float: left;
	background-color: var(--bg);
	color: var(--hColor);
	box-shadow: var(--shadow);
	${hSize}
`;

export const DivContainer = styled.div `
	width: calc(100% - ${wSidebar} - 3rem);
	padding: ${paddContainer};
	margin-right: 3rem;
	float: right;
	${hSize}

	@media screen and (max-width: 830px) {
		width: calc(100% - 1.5rem);
		padding-left: 1.5rem;
		margin-right: 1.5rem;
	}
`;

export const SectionCards = styled.section`
   display: flex;
   justify-content: flex-start;
   align-items: start;
   flex-wrap: wrap;
   gap: 2rem;
   row-gap: 4rem;
   margin-top: 3rem;
`;

// mobile nav sidebar
export const NavMobile = styled.nav`
   position: fixed;
   top: 0;
   right: 0;
   width: 80vw;
   padding: 2rem;
   background: var(--bg);
   transform: translateX(100%);
   transition: transform .5s ease-in-out;
	${hSize}

   &[data-visible="true"] {
      transform: translateX(0);
   }
`;

// characters card
export const ArticleCard = styled.article`
	width: calc(15% - 2rem);
	min-width: 18rem;
	background-color: var(--bg);
	color: var(--txtColor);
	border-radius: 1rem;
	box-shadow: var(--shadow);
	overflow: hidden;
	animation: ${fadeIn} 1s ease-in;
	
	li {
		margin-bottom: .5rem;
	}
`;

export const DivCardInfo = styled.div`
	padding: 1.6rem;
	@media screen and (max-width: 830px) {
		padding: 1.2rem
	}
`;

// life status
export const LiStatus = styled.li`
	&:before {
		content: '';
		display: inline-block;
		width:.7rem;
		height:.7rem;
		border-radius: 100%;
		margin-right: .5rem;
		background: ${props => props.color};
	}
`;

// details page
export const ImgCharacter = styled.img`
   width: clamp(16rem, 26rem, 50vw);
   border-radius: 1rem;
`;

export const DivDetails = styled.div`
	width: clamp(25rem, 25vw, 50%);

	ul {
		margin-bottom: 2rem;

		li {
			margin-bottom: .6rem;
			&:last-child {
				margin-bottom: 0;
			}
		}
	}
`;

export const DivW100 = styled.div`
	width: 100%;
	li {
		margin-bottom: .6rem;
		&:last-child {
			margin-bottom: 0;
		}
	}
`;

// screen reader only
export const SpanSrOnly = styled.span`
   position: absolute;
   width: 1px;
   height: 1px;
   padding: 0;
   margin: -1px;
   overflow: hidden;
   clip: rect(0,0,0,0);
   white-space: nowrap;
`;