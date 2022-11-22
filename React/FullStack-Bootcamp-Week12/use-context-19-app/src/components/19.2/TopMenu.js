import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import { useColorContext } from './color-context';
const Container = styled.header`
    width: 100%;
    height: 5rem;
    background-color: ${(props) =>
        props.isDay === true ? 'black' : 'LightGrey'};
    padding: 0 10%;
    nav {
        height: 100%;
    }
    ul {
        height: 100%;
        list-style: none;
        display: flex;
        padding: 0;
        margin: 0;
        align-items: center;
        justify-content: flex-start;
    }
    li {
        margin: 0 1rem;
        width: 5rem;
    }

    li > a {
        color: ${(props) => (props.isDay === true ? 'white' : 'black')};
    }
`;

const StyledActiveLink = styled(NavLink)`
    text-decoration: none;
    &:hover,
    &.active {
        padding-bottom: 0.25rem;
        border-bottom: 4px solid #95bcf0;
    }
    &.active {
        color: #95bcf0;
    }
`;

const TopMenu = () => {
    const [isDay, setIsDay] = useColorContext();
    const clickHandler = () => setIsDay((prev) => !prev);
    return (
        <Container isDay={isDay}>
            <Global
                styles={css`
                    body {
                        background-color: ${isDay ? 'rgb(48,48,48)' : 'white'};
                        margin: 0;
                        padding: 0;
                        min-height: '100vh';
                        max-width: '100vw';
                    }
                    h1 {
                        color: ${isDay ? 'white' : 'black'};
                    }
                `}
            />
            <nav>
                <ul>
                    <li>
                        <StyledActiveLink
                            className={(navData) =>
                                navData.isActive ? 'active' : ''
                            }
                            to='/1'
                        >
                            Page1
                        </StyledActiveLink>
                    </li>
                    <li>
                        <StyledActiveLink
                            className={(navData) =>
                                navData.isActive ? 'active' : ''
                            }
                            to='/2'
                        >
                            Page2
                        </StyledActiveLink>
                    </li>
                    <li>
                        <button onClick={clickHandler}>
                            Switch to {isDay ? 'Light' : 'Dark'} mode
                        </button>
                    </li>
                </ul>
            </nav>
        </Container>
    );
};

export default TopMenu;
