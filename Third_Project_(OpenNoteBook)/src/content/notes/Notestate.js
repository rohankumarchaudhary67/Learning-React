// import react from react
import React, { useState } from "react";

// import notecontext
import noteContext from "./noteContext";

// create a function
const NoteState = (props) => {

    const a = {
        "d":"d"
    }

    // Return of this function
    return(
        <noteContext.Provider value={a}>
            {props.children}
        </noteContext.Provider>
    )

}

// export note state
export default NoteState;