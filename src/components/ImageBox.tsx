import styled from 'styled-components';

export default styled.img`
    pointer-events: none;

    @media (prefers-reduced-motion: no-preference) {
        & {
            animation: App-logo-spin infinite 20s linear;
        }
    }

    @keyframes App-logo-spin {
        from {
            ansform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`