import { LiStatus, ArticleCard, DivCardInfo } from '../theme/styledTags';

import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { CHARACTERS_DATA } from '../apollographql/queries';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

export default function Card({ pageQuery, calcPageNumber }) {
	const { loading, error, data } = useQuery(CHARACTERS_DATA, {variables: {page: pageQuery} });

	if(loading) return <Loader />
	if(error) return <ErrorMessage message="ERROR FETCH DATA" />

	if(data) {
		const characters = data.characters && data.characters.results,
				infoCharacters = data.characters && data.characters.info,
				pages =  infoCharacters.pages,
				count = infoCharacters.count;
		// send number of page to homepage
		calcPageNumber(pages, count);
		return (
			<>
				{characters.map(character =>
					<ArticleCard key={character.id}>
						<img src={character.image} alt={character.name} />
						<DivCardInfo>
							<Link to={`character/${character.id}`} >
								<h2>{character.name}</h2>
							</Link>
							<ul>
								<LiStatus color={
									character.status === 'Alive' ? 'var(--green)'
										: character.status === 'Dead' ? 'rgb(255,0,0)'
										: 'var(--bg-2)'
									}>
									{character.status} - {character.species}
								</LiStatus>
								<li>Gender: {character.gender}</li>
								<li>{character.location && character.location.name}</li>
								{character.location && character.location.dimension !== 'unknown' ?
									<li>{character.location && character.location.dimension}</li>
									: null
								}
							</ul>
						</DivCardInfo>
					</ArticleCard>
				)}
			</>
		);
	}
}