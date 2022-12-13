import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { Geo_api_link, apioptions } from "../../api";


const Search = (OnSearchChange) => {

    const [search ,setsearch] = useState(null);

    const handleOnChange= (searchData) =>{
        setsearch(searchData);
        OnSearchChange(searchData);
    }

    const loadOptions=(inputvalue)=>{ 
        return fetch(`${Geo_api_link}/cities?minpopulation=100000&namePrefix=${inputvalue}`, apioptions)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    
}

    return(
            <AsyncPaginate
                placeholder="Search"
                debounceTimeout={500}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions}
              >/</AsyncPaginate>  
        )
}
export default Search;