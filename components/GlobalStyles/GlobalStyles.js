import {Global,css} from "@emotion/react";

const GlobalStyles=()=>(
    <>
        <Global styles={css`
            body{
                color:red;
            }
        `}/>
    </>
)

export default GlobalStyles;