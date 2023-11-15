import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyle } from './theme/theme';
import { MainTag, DivSidebar, DivContainer, SectionCards } from './theme/styledTags';
import { useRef, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
// hooks
import useLocalStorage from './hooks/useLocalStorage';
import useWindowWidth from './hooks/useWindowWidth';
import usePageQuery from './hooks/usePageQuery';
//components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import FirstSection from './components/FirstSection';
import Card from './views/Card';
import Character from './views/Character';
import Location from './views/Location';
import Episode from './views/Episode';
import ErrorMessage from './components/ErrorMessage';
import Pagination from './components/Pagination';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

export default function App() {
	const [theme, setTheme] = useLocalStorage('theme', 'dark'),
			isDarkTheme = theme === 'dark',
			toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');
	
	// calculates the number of homepage pages and results
	const [pageNumber, setPageNumber] = useState(0),
			[resultCount, setResultCount] = useState(0);
	const calcPageNumber = (pages, count) => {
		setPageNumber(pages);
		setResultCount(count);
	}
	// manage the query based on the page clicked
	const [pageQuery, handlePageQuery] = usePageQuery();
	// check which page the user is on
	const location = useLocation();
	
	const windowWidth = useWindowWidth();
	const refContainer = useRef();

	return (
		<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
			<GlobalStyle />

			<Header theme={theme} toggleTheme={toggleTheme} />

			<MainTag>
				{ windowWidth > 830 ?
					<DivSidebar>
						<Sidebar theme={theme} />
					</DivSidebar>
					: null
				}

				<DivContainer ref={refContainer}>
					<FirstSection count={resultCount} pages={pageNumber} />

					<SectionCards>

						<Routes>
							<Route path="/" element={<Card pageQuery={pageQuery} calcPageNumber={calcPageNumber} />} />
							<Route path="character/:id" element={<Character />} />
							<Route path="episode/:id" element={<Episode />} />
							<Route path="location/:id" element={<Location />} />
							<Route path="/*" element={<ErrorMessage message="Ups.. Page not found!" />} />
						</Routes>

						{location.pathname === '/' ?
							<Pagination
								pages={pageNumber}
								pageQuery={pageQuery}
								handlePageQuery={handlePageQuery}
							/>
							:
							null
						}

						<ScrollToTop refContainer={refContainer} />
					</SectionCards>

					<Footer />
				</DivContainer>
			</MainTag>
			
		</ThemeProvider>
	);
}