import styled from 'styled-components'

export const Container = styled.main`
     margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        object-fit: cover;
        max-width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    button {
        cursor: pointer;
        border: 0;
        border-radius: 25px;
        padding: 0.5rem 1.6rem;
        background-color: #f6e5c9;
        color: black;
  }
`
