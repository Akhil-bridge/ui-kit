import React, { forwardRef } from 'react';
import AsyncSelect from 'react-select/async/dist/react-select.esm';
import AsyncCreatableSelect from 'react-select/async-creatable';
import Select from 'react-select';
import DatePicker from 'react-datepicker';

import './_index.scss';
import Input from 'reactstrap/lib/Input';

/**
 * please read interface as a default props at the bottom line code for details.
 * this component included : all input type, all input select type, and all date time picker type.
 * * */

function CInput(props) {
  const options = props;

  const InputDate = forwardRef((p, ref) => (
    // eslint-disable-next-line react/jsx-filename-extension
    <Input
      className="form-control bc--white date-input"
      onClick={p.onClick}
      value={p.value}
      type="text"
      readOnly
    />
  ));

  const createLabel = (inputValue) => (
    <div>
      <a className="c--cool_blue">
        <span className="m__l--10 m__r--10 f--ubuntu__bold">+</span>
        {' '}
        Tambah tujuan pengriman
      </a>
    </div>
  );

  switch (options.type) {
    case 'select':
      return (
      // eslint-disable-next-line react/jsx-filename-extension
        <Select
          isSearchable={options.isSearchable}
          isClearable={options.isClearable}
          string
          defaultValue={options.defaultValue}
          placeholder={options.placeholder}
          onChange={options.onChange}
          noOptionsMessage={() => options.noOptionsMessage}
          options={options.options}
        />
      );
    case 'select-async':
      return (
        <AsyncSelect
          className="inherit-z-index"
          defaultOptions
          isClearable
          onChange={options.onChange}
          placeholder={options.placeholder}
          loadOptions={options.loadOptions}
          noOptionsMessage={() => options.noOptionsMessage}
          isOptionDisabled={options.isOptionDisabled}
        />
      );
    case 'select-async-creatable':
      return (
        <AsyncCreatableSelect
          className="inherit-z-index"
          defaultOptions
          isClearable
          createOptionPosition="first"
          onChange={options.onChange}
          placeholder={options.placeholder}
          loadOptions={options.loadOptions}
          noOptionsMessage={() => options.noOptionsMessage}
          allowCreateWhileLoading
          formatCreateLabel={createLabel}
          name="asd"
          isOptionDisabled={options.isOptionDisabled}
        />
      );
    case 'date-picker':
      return (
        <DatePicker
          className="form-control"
          dateFormat={options.dateFormat}
          onChange={options.onChange}
          maxDate={options.maxDate}
          minDate={options.minDate}
          selected={options.selected}
          customInput={<InputDate />}
        />
      );
    case 'time-picker':
      return (
        <DatePicker
          {...options}
          className="form-control"
          onChange={options.onChange}
          selected={options.selected}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={10}
          timeCaption={options.timeCaption}
          customInput={<InputDate type="time" />}
          dateFormat="h:mm"
        />
      );
    case 'date-time-picker':
      return (
        <DatePicker
          className="form-control"
          type="date"
          dateFormat={`${options.dateFormat} hh:mm`}
          onChange={options.onChange}
          maxDate={options.maxDate}
          minDate={options.minDate}
          selected={options.selected}
          customInput={<InputDate />}
          timeInputLabel={options.timeInputLabel}
          showTimeInput
        />
      );
    default:
      return (
        <Select
          isSearchable
          isClearable
          string
          onChange={options.onChange}
          placeholder={options.placeholder}
          noOptionsMessage={() => options.noOptionsMessage}
          options={options.options}
        />
      );
  }
}

CInput.defaultProps = {

  /**
   * this for general props.
   * begin
   * * */

  onChange: () => {},
  placeholder: '',

  /**
   * end.
   * * */

  /**
   * this props for select input base from react select (https://react-select.com/props).
   * loadOptions is for asynchronous options.
   * begin
   * * */

  options: [],
  loadOptions: null,
  noOptionsMessage: 'No options',
  isClearable: true,
  isSearchable: true,

  /**
   * end.
   * * */

  /**
   * this props for date picker base from react date picker (https://reactdatepicker.com/).
   * timeInputLabel, timeCaption only use when time picker is active
   * begin
   * * */

  dateFormat: 'MM/dd/yyyy',
  maxDate: null,
  minDate: null,
  selected: new Date(),
  timeInputLabel: 'Time:',
  timeCaption: 'Time',
  isClearable: true,

  /**
   * end.
   * * */

};

export default CInput;
