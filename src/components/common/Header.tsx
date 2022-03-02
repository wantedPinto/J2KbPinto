import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = () => {
	return (
		<HeaderContainer>
			<HeaderLinkContainer>
				<HeaderLink>
					<Link to="/">main</Link>
				</HeaderLink>

				<HeaderLink>
					<Link to="/signUp">signup</Link>
				</HeaderLink>
			</HeaderLinkContainer>
		</HeaderContainer>
	);
};

const HeaderContainer = styled.header``;

const HeaderLinkContainer = styled.ul``;

const HeaderLink = styled.li``;
