import { useState } from 'react';
import {
  PageButton,
  Pagination,
  TableStyled,
  TableWrapper,
} from './table.style';

export function Table(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const { data, headers } = props;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <TableWrapper>
      <TableStyled>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentRows.length > 0 ? (
            currentRows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, cellIndex) => (
                  <td key={cellIndex}>{row[header]}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length}>No results found</td>
            </tr>
          )}
        </tbody>
      </TableStyled>
      <Pagination>
        <PageButton
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          &lt;
        </PageButton>
        <span>{currentPage}</span>
        <PageButton
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          &gt;
        </PageButton>
      </Pagination>
    </TableWrapper>
  );
}

export default Table;
