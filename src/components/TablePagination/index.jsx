import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { DivTable, Table } from './styles';
import './styles.css'
import Pagination from '@mui/material/Pagination';
import Selector from '../Selector';
import { IconButton } from '@mui/material';
import { FaEye } from 'react-icons/fa';
import { MdEdit, MdDelete } from 'react-icons/md';

const convertCamelCaseToLabel = (str) => {
  const result = str.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
}

// interface Column {
//   key: string;
//   label: string;
// }

// interface PageAndSize {
//   page: number;
//   size: string;
// }

// interface TableDataSettingsProps {
//   data: any;
//   field: string;
//   record: Record<string, any>;
// }

// interface TablePaginationProps {
//   data: any[];
//   // dataSettings?: (tableDataSettings: TableDataSettingsProps) => any;
//   dataSettings?: (field: string, data: any, record: Record<string, any>) => any;
//   fields?: Column[];
//   rowsPerPageOptions?: string[];
//   rowsPerPageDefault?: string;
//   totalItens?: number,
//   frontPagination?: boolean,
//   onPageChange?: (data: PageAndSize) => void;
//   onRowClick?: (entity: any[]) => void;
//   actions?: any
// }

const TablePagination = (props) => {
  const {data, fields, rowsPerPageOptions, rowsPerPageDefault, dataSettings, totalItens, frontPagination, actions} = props
  
  const totalItems = totalItens ? totalItens : data.length
  const rowsPerPageInitial = rowsPerPageDefault ? rowsPerPageDefault : rowsPerPageOptions[0]

  const [pages, setPages] = useState(Math.ceil(totalItems/rowsPerPageInitial)); // props.data.length / props.pages[0]
  const [page, setPage] = useState(1);

  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageInitial);

  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    if(props.onPageChange) {
      props.onPageChange({page: newPage, size: rowsPerPage})
    }
  }

  const handleChangeRowsPerPage = (selected) => {
    setRowsPerPage(selected.value)
    setPage(1);
    if(props.onPageChange) {
      props.onPageChange({page: 1, size: selected.value})
    }
  }

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
          <thead>
            <tr>
              {keys && keys.map((col, index) => (
                <th key={index}> {col.label} </th>
              ))}
            </tr>
          </thead>
          <tbody>
            { dataTable.map((row, indx) => (
            <tr key={indx}>
              {keys && keys.map((col, idx) =>
              <td onClick={() => props.onRowClick ?  props.onRowClick(row) : ''} key={idx}>
                {/* { dataSettings ? dataSettings(col.key, row[col.key], row)?.toString() : row[col.key]?.toString() || '-----' }  */}
                { dataSettings(col.key, row[col.key], row)?.toString() ? dataSettings(col.key, row[col.key], row)?.toString() : row[col.key]?.toString() || '-----' } 
              </td>
              )}
              {actions &&
              <td style={{ textAlign: 'center', display: 'flex' }}>
                {Object.getOwnPropertyNames(actions).map((action, idx) =>
                  <div key={idx} >
                    {action === 'view' && 
                      <IconButton title='visualizar'>
                        <FaEye size={18} />
                      </IconButton>
                    }
                    {action === 'edit' && 
                      <IconButton title='editar'>
                        <MdEdit size={18} />
                      </IconButton>
                    }
                    {action === 'delete' && 
                      <IconButton title='deletar'>
                        <MdDelete size={18} />
                      </IconButton>
                    }
                  </div>
                )}
              </td>
              }
            </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className='pagination-container'>
        <Pagination count={pages} variant="outlined" shape="rounded" page={page} onChange={handleChangePage}  />
        <span className='pagination-text'> Rows per page: </span>
        <Selector
          options={rowsPerPageOptions}
          onChange={handleChangeRowsPerPage}
          defaultValue={{value: rowsPerPageInitial, label: rowsPerPageInitial}}
        />
        <span className='pagination-text'> {from} - {to} of {totalItems}</span>
      </div>
    </DivTable>
  );
}

export default TablePagination