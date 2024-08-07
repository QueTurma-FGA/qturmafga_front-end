import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { DivTable, Table } from './styles';
import './styles.css'

const convertCamelCaseToLabel = (str) => {
  const result = str.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
}

const TablePagination = (props) => {
  const {searchInput, data, fields, rowsPerPageOptions, rowsPerPageDefault, dataSettings, totalItens, frontPagination, actions} = props
  
  const totalItems = totalItens ? totalItens : data.length
  const rowsPerPageInitial = rowsPerPageDefault ? rowsPerPageDefault : rowsPerPageOptions[0]

  const [pages, setPages] = useState(Math.ceil(totalItems/rowsPerPageInitial)); // props.data.length / props.pages[0]
  const [page, setPage] = useState(1);

  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageInitial);

  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(5);

  const updateValues = useCallback(() => {
    setPages(Math.ceil(totalItems/rowsPerPage))
    setFrom(((page - 1) * rowsPerPage)+1)
    setTo(page === pages ? totalItems : rowsPerPage * page)
  }, [page, pages, rowsPerPage, totalItems])

  useEffect(() => {
    updateValues()
  }, [updateValues])

  const dataTable = frontPagination ? data.slice(from-1, to) : data

  const [keys, setKeys] = useState();
  useLayoutEffect(() => {
    if(fields) {
      setKeys(fields)
    } else {
      const keysList = data.length && Object.keys(data[0]).map(k => {
        return { key: k, label: convertCamelCaseToLabel(k) }
      })
      keysList && setKeys(keysList)
    }
  }, [])
  
  if(totalItems === 0) {
    return (
      <div className='not-found-message'>
        <span> Não foram encontrados dados! </span>
      </div>
    )
  }
  
  return (
    <DivTable boxShadow={props.boxShadow} borderRadius={props.borderRadius}>
      <div className='table-container'>
        <Table grid={props.grid} borderRadius={props.borderRadius} rowClick={props.onRowClick} actions={actions ? true : false} cellspacing="0">
            { dataTable.map((row, indx) => (
                <tr key={indx} onClick={() => props.onRowClick ?  props.onRowClick(row) : ''}>
                  {keys && keys.map((col, idx) =>
                  <td key={idx}>
                    { dataSettings(col.key, row[col.key], row)?.toString() ? dataSettings(col.key, row[col.key], row)?.toString() : row[col.key]?.toString() || '-----' } 
                  </td>
                  )}
                </tr>
            ))}
        </Table>
      </div>
      <span>. . .</span>
    </DivTable>
  );
}

export default TablePagination