import { transparentize } from 'polished';
import styled from 'styled-components'

export const Wrapper = styled.label`
	display: flex;
	flex-direction: column;
	height: 56px;
	justify-content: space-between;
	
	span.Label {
		font-size: 14px;
		font-weight: 500;
		color: #274060;
	}
	
	input {
		height: 28px;
		font-size: 18px;
		font-weight: 500;

		padding-bottom: 6px;
		border: none;
		outline: none;

		border-radius: 0px;
		border-bottom: 1px solid #274060;
		color: #274060;

		&::placeholder {
			color: ${transparentize(0.5, '#274060')};
		}

	}
`