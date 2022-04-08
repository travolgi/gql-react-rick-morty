import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	:root {
		--bg: ${ ({ theme }) => theme.bg };
		--bg-2: ${ ({ theme }) => theme.bg2 };
		--hColor: ${ ({ theme }) => theme.hColor };
		--txtColor: ${ ({ theme }) => theme.txtColor };
		--cyan: #42b4ca;
		--green: #bfde42;
		--dark-green: #193840;
		--shadow: .1rem .2rem .6rem rgba(0,0,0,.1);
		--border: .12rem solid var(--dark-green);
	}
	:-webkit-scrollbar { width: .7rem; }
	::-webkit-scrollbar-track { background: transparent; }
	::-webkit-scrollbar-thumb { background: rgba(0,0,0,.2); border-radius: 1rem; }

	* {
		margin: 0;
		padding: 0;
		border: 0;
		list-style: none;
		outline: none;
		box-sizing: border-box;
	}

	body {
		background: ${ ({ theme }) => theme.bg2 };
		color: ${ ({ theme }) => theme.txtColor };
		font-family: 'Inter', sans-serif;
		font-size: 1rem;
		transition: .2s ease-in;
	}
	h1, h2 {
		font-family: 'Covered By Your Grace', sans-serif;
		color: ${ ({ theme }) => theme.hColor };
	}
	h1 {
		font-size: 3rem;
		margin-bottom: 2rem;
		font-weight: 400;
		color: var(--cyan);
		text-shadow: .1rem 0 0 var(--green),-.1rem 0 0 var(--green),0 .1rem 0 var(--green),0 -.1rem 0 var(--green);
	}
	h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
		font-weight: 600;
		color: var(--green);
	}
	a {
		color: var(--cyan);
		text-decoration: none;
		transition: .2s ease-in;
		cursor: pointer;
		&:hover {
			color: var(--green);
		}
	}
	img {
		width: 100%
	}
	button {
		background: none;
		cursor: pointer;
	}
	ul li {
		font-weight: 500;
	}
`;


export const darkTheme = {
	bg: '#212121',
	bg2: '#2D2D2D',
	hColor: '#FBFBFB',
	txtColor: '#C6C6C6'
};

export const lightTheme = {
	bg: '#FEFEFE',
	bg2: '#F8F8F8',
	hColor: '#2D2D2D',
	txtColor: '#6A6A6A'
};