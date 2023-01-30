import React from "react";
import styled from "styled-components";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
	return (
		<NavContainer>
			<Button onClick={() => setLibraryStatus(!libraryStatus)}>
				All Songs
			</Button>
			<H1 libraryStatus={libraryStatus}>Melodify</H1>
			
		</NavContainer>
	);
};

const NavContainer = styled.div`
	min-height: 10vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
	@media screen and (max-width: 768px) {
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		width: 100%;
	}
`;

const H1 = styled.h1`
	transition: all 0.5s ease;
	color:white;

	@media screen and (max-width: 768px) {
		visibility: ${(p) => (p.libraryStatus ? "hidden" : "visible")};
		opacity: ${(p) => (p.libraryStatus ? "0" : "100")};
		transition: all 0.5s ease;
	}
`;

const Button = styled.button`
	background: white;
	border: none;
	cursor: pointer;
	border: 2px solid rgb(65, 65, 65);
	border-radius: 50px;
	padding: 0.75rem;
	font-weight:500;
	transition: all 0.3s ease;
	&:hover {
		background: blue;
		color: white;
	}
`;

export default Nav;
