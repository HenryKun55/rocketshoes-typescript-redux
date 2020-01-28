import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background: #414141;
    }

    body, input, button {
        font: 14px Montserrat sans-serif;
    }

    #root {
        max-width: 1024px;
        margin: 0 auto;
        padding: 20px 50px;
    }

`;
