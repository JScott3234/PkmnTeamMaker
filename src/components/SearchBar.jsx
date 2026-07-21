
function SearchBar(){
    return(
        <div className="input-group mb-3 mt-2">
            <input type="text" className="form-control" placeholder="Search for a Pokemon" aria-label="Search for a Pokemon" aria-describedby="button-addon2"/>
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
        </div>
    )
}

export default SearchBar;