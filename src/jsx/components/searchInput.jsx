import React from 'react';
import SearchIconButton from './searchIconButton';

function SearchInput() {
    return ( 
		<div class="gnb_search_inpbox_sbox">
			<input type="search" id="globalSearchInput" class="gnb_search_inpbox_inp" autocomplete="off" value="" />
			<SearchIconButton />
		</div>
     );
}

export default SearchInput;



