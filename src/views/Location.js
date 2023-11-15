import { DivW100 } from '../theme/styledTags';
import { useParams } from 'react-router-dom';
import { LOCATION_BY_ID } from '../apollographql/queries';
import { useQuery } from '@apollo/client';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import SmallCards from '../components/SmallCards';

export default function Location() {
	const { id } = useParams();
	const { loading, error, data } = useQuery(LOCATION_BY_ID, {variables: {id: id} });

	if(loading) return <Loader />
	if(error) return <ErrorMessage message="ERROR FETCH DATA" />

	if(data) {
		const location = data.location,
				residents = location.residents;

		return (
			<>
				<DivW100>
					<h1>{location.name}</h1>
					<ul>
						<li>Type: {location.type}</li>
						{location.dimension !== 'unknown' ?
							<li>{location.dimension}</li>
							: null
						}
					</ul>
				</DivW100>
				
				<h2 style={{ width: '100%' }}>Residents:</h2>
				<SmallCards residents={residents} />
			</>
		);
	}
}