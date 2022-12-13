import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { GEO_API_LINK, apiOptions } from "../../api";


const Search = ({onSearchChange}) => {

    const [search ,setSearch] = useState(null);

    const handleOnChange= (searchData) =>{
        setSearch(searchData);
        onSearchChange(searchData);
    }

    const loadOptions=(inputvalue)=>{ 
        return fetch(`${GEO_API_LINK}/cities?minpopulation=100000&namePrefix=${inputvalue}`, apiOptions)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
        }

    return(
            <AsyncPaginate
                placeholder="Search"
                debounceTimeout={600}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions}
            />
        )
}
export default Search;