import React, { useState } from 'react';
import {
  Card, CardBody, CardHeader, CardTitle, Collapse,
} from 'reactstrap';
import { MinusCircle, PlusCircle } from 'react-feather';
import PropTypes from 'prop-types';

const DetailAccordion = ({ Title, children }) => {
  const [toggleButtonStatus, setToggleButtonStatus] = useState(true);
  const toggleAction = () => setToggleButtonStatus(!toggleButtonStatus);
  return (
    <Card>
      <CardHeader className="grey-color">
        <div className="card-actions float-right pt-2">
          {toggleButtonStatus ? (
          /* eslint-disable jsx-a11y/click-events-have-key-events,
              jsx-a11y/interactive-supports-focus */
            <span role="button" className="cursor-pointer mr-1" id="customer_info" onClick={toggleAction}>
              <MinusCircle />
            </span>
          )
            : (
              <span role="button" className="cursor-pointer mr-1" id="customer_info" onClick={toggleAction}>
                <PlusCircle />
              </span>
              /* eslint-disable jsx-a11y/click-events-have-key-events,
          jsx-a11y/interactive-supports-focus */
            )}
          {' '}
        </div>
        <CardTitle tag="h5" className="my-2">
          {Title}
        </CardTitle>
      </CardHeader>
      <Collapse isOpen={toggleButtonStatus}>
        <CardBody>
          {children}
        </CardBody>
      </Collapse>
    </Card>
  );
};
DetailAccordion.propTypes = {
  Title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default DetailAccordion;
