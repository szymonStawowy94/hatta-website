import React from "react"
import {graphql} from "gatsby"
import styled from 'styled-components';
import Image from 'gatsby-image';
import Button from "../components/Button/Button"

const ContentWrapper = styled.div`
	width: 65%;
	height: calc(100vh - 80px);
	text-align: right;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	h1 {
		font-size: 85px;
		margin: 0;
		width: 40%;
		line-height: 0.9;
	}
	p {
		margin: 20px 0 40px;
		width: 40%;
	}
`

const StyledImage = styled(Image)`
	position: absolute !important;
	height: 100vh;
	top: 0;
	right: 0;
	width: 35%;
	object-fit: cover;
`
const IndexPage = ({data}) => (
	<>
		<ContentWrapper>
			<h1>Your new space</h1>
			<p>While artists work from real to the abstract, architects must work from the abstract to the real.</p>
			<Button>estimate project</Button>
		</ContentWrapper>
		<StyledImage fluid={data.file.childImageSharp.fluid} />
	</>
);

export const query = graphql`
    {
        file(name: {eq: "hero"}) {
            childImageSharp {
                fluid(maxWidth: 800, maxHeight: 1200, quality: 100) {
              		...GatsbyImageSharpFluid_noBase64
                }
            }
        }
    }
`

export default IndexPage


