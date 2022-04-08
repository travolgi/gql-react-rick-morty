import { useState } from 'react';

const usePageQuery = () => {
   const [pageQuery, setPageQuery] = useState(1),
         handlePageQuery = e => setPageQuery(parseInt(e.target.value));

   return [pageQuery, handlePageQuery];
}
 
export default usePageQuery;