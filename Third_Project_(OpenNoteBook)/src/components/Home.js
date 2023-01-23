/* eslint-disable react-hooks/rules-of-hooks */
// import notes from notes componenet
import Notes from "./Notes"

// Main function of home component
const home = () => {

    return (
        // Main div of home
        <div>

            <div className="container my-3">

            <h1 className='text-left'>Add a Note</h1>

                <form className='text-left'>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Title</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <input type="text" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>

            <Notes />

        </div>
    )
}

// export the home component
export default home