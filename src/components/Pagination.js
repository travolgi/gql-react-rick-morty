import styled from 'styled-components';

export default function Pagination({ pages, pageQuery, handlePageQuery }) {
   let numbers = Array.from({length: pages}, (_, i) => i + 1);
   const countPag = 6;

   if(numbers.length > countPag) {
      let idx = pageQuery < 3 ? 0 : pageQuery - 4;
      numbers = numbers.slice(idx, pageQuery + 3);
   }

   return (
      <DivPagination>

         {pageQuery > countPag - 2 ?
            <button value="1"  onClick={handlePageQuery}>«</button>
            : null
         }


         {numbers.map(numb =>
            <button
               value={numb}
               onClick={handlePageQuery}
               key={numb}
               className={numb === pageQuery ? 'active' : null}
               >
               {numb}
            </button>
         )}

            
         {pages > countPag && pageQuery < pages - (countPag - 3) ?
            <button value={pages}  onClick={handlePageQuery}>»</button>
            : null
         }

      </DivPagination>
   );
}

const DivPagination = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   gap: .8rem;
   margin-top: 2rem;

   button {
      padding: .4rem .6rem;
      border-radius: 1rem;
      border: var(--border);
      background: var(--bg-2);
      color: var(--txtColor);
      transition: .5s ease;

      &:hover {background: var(--dark-green); }

      &.active {
         background: var(--dark-green);
         color: #fff;
      }
   }
`;