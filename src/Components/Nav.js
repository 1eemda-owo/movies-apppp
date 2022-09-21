import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Nav = () => {

    const dispatch = useDispatch();

    const sort = useSelector(state => state.sort);
    console.log(sort.key)
    
    return (
        <div>
            <button onClick={() => dispatch({ type: "sort/SORT_API", sortkey: "rating" })}>
                rating
            </button>
            <button onClick={() => dispatch({ type: "sort/SORT_API", sortkey: "like_count" })}>
                like
            </button>
            <button onClick={() => dispatch({ type: "sort/SORT_API", sortkey: "download_count" })}>
                download
            </button>
            <button onClick={() => dispatch({ type: "grid/GRID_LIST", gridkey: "grid_5"})}>
                grid5
            </button>
            <button onClick={() => dispatch({ type: "grid/GRID_LIST", gridkey: "grid_3"})}>
                grid3
            </button>
        </div>
    );
};

export default Nav;