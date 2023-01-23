/* eslint-disable react-hooks/rules-of-hooks */
// import react component from react
import React from 'react'

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

                <h1 className='text-left my-3'>Your Notes : </h1>

            </div>

        </div>
    )
}

// export the home component
export default home