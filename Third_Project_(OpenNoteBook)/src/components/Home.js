/* eslint-disable react-hooks/rules-of-hooks */
// import notes from notes componenet
import AddNote from "./AddNote"
import Notes from "./Notes"

// Main function of home component
const home = () => {

    return (
        // Main div of home
        <div>

            <AddNote />

            <Notes />

        </div>
    )
}

// export the home component
export default home