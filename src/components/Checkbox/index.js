import React, { forwardRef } from 'react';
import { Input } from 'reactstrap';

import './_index.scss';

const Checkbox = forwardRef(({ onClick, ...rest }, ref) => {
  return (
    <div className="custom-control custom-checkbox">
      <Input
        type="checkbox"
        className="custom-control-input"
        ref={ref}
        {...rest}
      />
      <label className="custom-control-label" onClick={onClick} />
    </div>
  )
});

export default Checkbox;
