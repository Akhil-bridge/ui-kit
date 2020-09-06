import React, { useState, useEffect } from 'react';
import DataTable, { defaultThemes } from 'react-data-table-component';
import _ from 'lodash';

import {
  Card,
  CardHeader,
  CardTitle,
  Button,
} from 'reactstrap';

import { RefreshCw, PlusSquare } from 'react-feather';
import { parseToQueryString } from '../../utils/parseToQueryString';
import './_index.scss';

const TableComponent = (props) => {
  const options = props;

  const [rawData, setRawData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(options.loading);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(options.paginationRowsPerPageOptions[0]);
  const [page, setPage] = useState(1);
  const [column, setColumn] = useState(options.defaultSortFieldColumn);
  const [ascending, setAscending] = useState(options.defaultSortAscending);
  const [resetPaginationToggle] = useState(false);
  const [tableColumn, setTableColumn] = useState(options.columns);
  const simpleColumn = [{
    selector: 'key',
  },
  {
    selector: 'value',
    right: true,
  }];

  const customStyles = {
    header: {
      style: {
        display: 'none',
      },
    },
    headCells: {
      style: {
        margin: '5px 0',
        fontSize: '16px',
      },
    },
    rows: {
      style: {
        padding: '0',
        '&:not(:last-of-type)': {
          borderBottomStyle: 'none',
        },
        '&:nth-child(odd)': {
          backgroundColor: '#d6e9f2',
          borderRadius: '8px',
        },
      },
    },
    cells: {
      style: {
        '&:not(:last-of-type)': {
          margin: '10px 0',
          width: 'max-content',
          borderRightColor: defaultThemes.default.divider.default,
        },
      },
    },
  };

  const baseQuery = {
    page,
    item_per_page: perPage,
    column,
    ascending,
    q: '',
    ...options.extraQuery,
  };

  const fetchData = (newPage) => {
    setLoading(true);

    if (!options.fetchData) {
      setLoading(false);
      return false;
    }
    options.fetchData(parseToQueryString({
      ...baseQuery,
      page: newPage,
    }))
      .then((r) => {
        if (r && r.data) {
          options.isEmptyData(r.data.length === 0);
          setData(r.data.map((e, i) => {
            e.no = i + (Number(perPage) * (Number(page) - 1)) + 1;
            return e;
          }));
          setTotalRows(r.length);
          options.propTable(options.extraQuery);
        } else {
          options.isEmptyData(true);
          setData([]);
          setTotalRows(0);
        }
      });
    setLoading(false);
    return true;
  };

  const handlePageChange = (newPage) => {
    if (options.serverSide) {
      fetchData(newPage);
    } else {
      setData(((_.orderBy(rawData, [column], [options.defaultSortAscending]))
        .slice(perPage * (newPage - 1), perPage * newPage))
        .map((e, i) => {
          e.no = i + (Number(perPage) * (Number(newPage) - 1)) + 1;
          return e;
        }));
    }
    setPage(newPage);
  };

  const handlePerRowsChange = (newPerPage, newPage) => {
    setLoading(true);
    if (options.serverSide) {
      options.fetchData(parseToQueryString({
        ...baseQuery,
        page: newPage,
        item_per_page: newPerPage,
      }))
        .then((r) => {
          if (r && r.data) {
            setPage(newPage);
            setData(r.data.map((e, i) => {
              e.no = i + (Number(r.item_per_page) * (Number(r.page) - 1)) + 1;
              return e;
            }));
            setPerPage(newPerPage);
          } else {
            setData([]);
            setTotalRows(0);
          }
        });
    } else {
      setData(((_.orderBy(rawData, [column], [options.defaultSortAscending]))
        .slice(newPerPage * (newPage - 1), newPerPage * newPage))
        .map((e, i) => {
          e.no = i + (Number(newPerPage) * (Number(newPage) - 1)) + 1;
          return e;
        }));
    }

    setLoading(false);
  };

  const handleSort = (newColumn, sortDirection) => {
    setLoading(true);
    if (options.serverSide) {
      options.fetchData(parseToQueryString({
        ...baseQuery,
        column: newColumn.selector,
        ascending: sortDirection === 'asc',
      }))
        .then((r) => {
          if (r && r.data) {
            setColumn(newColumn.selector);
            setAscending(sortDirection === 'asc');
            setData(r.data.map((e, i) => {
              e.no = i + (Number(r.item_per_page) * (Number(r.page) - 1)) + 1;
              return e;
            }));
            options.propTable({
              column: newColumn.selector,
              ascending: sortDirection === 'asc',
            });
          } else {
            setData([]);
            setTotalRows(0);
          }
        });
    } else if (newColumn.selector) {
      setData(((_.orderBy(rawData, [newColumn.selector], [sortDirection]))
        .slice(perPage * (page - 1), perPage * page))
        .map((e, i) => {
          e.no = i + (Number(perPage) * (Number(page) - 1)) + 1;
          return e;
        }));
    }

    setLoading(false);
  };

  useEffect(() => {
    if (options.serverSide) {
      fetchData(page);
    } else if (options.simpleMode) {
      setData(options.data);
      setTableColumn(simpleColumn);
      setLoading(options.loading);
    } else {
      setRawData(options.data);
      setData((_.orderBy(options.data, [column], [options.defaultSortAscending]))
        .slice(perPage * (page - 1), perPage * page)
        .map((e, i) => {
          e.no = i + (Number(perPage) * (Number(page) - 1)) + 1;
          return e;
        }));
      setTotalRows(options.data.length);
    }
  }, [options]);

  const handleRowSelected = React.useCallback(() => {}, []);

  const rowSelectCritera = (row) => row.status;

  return (
    <>
      { options.showSearchResult
        && (
          <Card className="flex-fill w-100">
            {!options.isNotUseHeadertable && (
            <CardHeader className="pl-3 grey-color">
              <div className="card-actions float-right">
                {options.isRefresh && (
                  <span className="cursor-pointer mr-1">
                    <RefreshCw className="card-actions__svg__refresh" />
                  </span>
                )}
                {options.createBtn && (
                  <Button color="primary" className="p-1 ml-3">
                    <span onClick={options.navCreate}>
                      <PlusSquare size={24} className="card-actions__svg__square" className="mr-2" />
                      <label>Create</label>
                    </span>
                  </Button>
                )}
              </div>
              <CardTitle tag="h5" className="mb-0">
                {options.name}
              </CardTitle>
            </CardHeader>
            )}
            <DataTable
              className={options.useCustomHeaderTable ? 'tableHeader' : null}
              columns={tableColumn}
              data={data}
              progressPending={loading}
              pagination={options.pagination}
              paginationServer
              paginationTotalRows={totalRows}
              paginationComponentOptions={{
                rowsPerPageText: options.paginationOptionsRowsPerPageText,
                rangeSeparatorText: options.paginationOptionsRangeSeparatorText,
                selectAllRowsItemText: options.paginationSelectAllRowsItemText,
              }}
              paginationResetDefaultPage={resetPaginationToggle}
              paginationRowsPerPageOptions={options.paginationRowsPerPageOptions}
              onChangeRowsPerPage={handlePerRowsChange}
              onChangePage={handlePageChange}
              onSort={handleSort}
              sortServer
              persistTableHead
              defaultSortField={options.defaultSortFieldColumn}
              customStyles={customStyles}
              expandableRows={options.expandable}
              expandableRowsComponent={options.expandableRowsComponent}
              dense
              responsive
              selectableRows={options.checkbox}
              onSelectedRowsChange={handleRowSelected}
              selectableRowSelected={rowSelectCritera}
              noHeader={options.noHeader}
              noTableHead={options.noTableHead}
            />
          </Card>
        )}
    </>
  );
};

TableComponent.defaultProps = {
  name: '',
  serverSide: true,
  fetchData: null,
  extraQuery: {},
  colorHeader: '#0d47a1',
  defaultSortFieldColumn: '',
  defaultSortAscending: false,
  pagination: false,
  paginationRowsPerPageOptions: [10, 50, 100],
  paginationOptionsRowsPerPageText: 'Rows per page:',
  paginationOptionsRangeSeparatorText: 'of',
  paginationSelectAllRowsItemText: 'All',
  expandable: false,
  simpleMode: false,
  noHeader: false,
  isNotUseHeadertable: false,
  noTableHead: false,
  loading: false,
  expandableRowsComponent: (e) => (<div>{JSON.stringify(e)}</div>),
  isEmptyData: () => {},
  propTable: () => {},
  columns: [],
  selectableRows: false,
  createBtn: false,
  navCreate: () => {},
  isRefresh: true,
  useCustomHeaderTable: false,
  checkbox: false,
  showSearchResult: true,
  handleRowSelected: () => {},
};

export default TableComponent;
