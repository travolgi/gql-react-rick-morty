import { gql } from '@apollo/client';

// Characters
export const CHARACTERS_DATA = gql`
	query ($page: Int = 1) {
		characters(page: $page) {
			info {
				count
				pages
			}
			results {
				id
				image
				name
				status
				species
				gender
				location {
					name
					dimension
				}
			}
		}
	}
`;

export const CHARACTER_BY_ID = gql`
	query ($id: ID!) {
		character(id: $id) {
			id
			image
			name
			status
			species
			gender
			location {
				id
				name
				dimension
			}
			origin {
				name
				dimension
			}
			episode {
				id
				name
				episode
			}
		}
	}
`;

// Episodes
export const EPISODES_DATA = gql`
	query ($page: Int = 1) {
		episodes(page: $page) {
			info {
				pages
			}
			results {
				id
				name
				episode
			}    
		}
	}
`;

export const EPISODE_BY_ID = gql`
	query ($id: ID!) {
		episode(id: $id) {
			id
			name
			air_date
			episode
			characters {
				id
				name
				status
				species
				gender
				image
			}
		}
	}
`;

// Locations
export const LOCATION_BY_ID = gql`
	query ($id: ID!) {
		location(id: $id) {
			id
			name
			type
			dimension
			residents {
				id
				image
				name
				status
				species
			}
		}
	}
`;