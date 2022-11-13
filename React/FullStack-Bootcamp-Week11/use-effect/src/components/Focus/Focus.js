import React, { useRef, useEffect } from 'react';

const Focus = (props) => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <form>
                <input
                    ref={inputRef}
                    type='text'
                    placeholder='This has focus'
                />
            </form>
        </div>
    );
};

export default Focus;
