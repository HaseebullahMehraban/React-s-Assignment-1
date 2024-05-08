import React, { useState } from 'react';

function App() {
    const [backgroundColor, setBackgroundColor] = useState('white');

    // note: We define a handleClick function that is called when the button is clicked. Inside the function, we generate a random color using the Math.random() and toString(16) methods. This is going to generate a random hexadecimal color code.

    const handleClick = () => {
        // Generating a random color
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setBackgroundColor(randomColor);
    };

    return ( <
        div style = {
            { backgroundColor }
        } >
        <
        button onClick = { handleClick } > Change Background Color < /button> < /
        div >
    );
}

export default App;