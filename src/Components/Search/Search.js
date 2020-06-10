import React, {Fragment} from 'react';
import {InputGroup, FormControl} from 'react-bootstrap';
import '../../App.css';

function Search() {
  return (
    <InputGroup className="mb-3 circle-border">
        <FormControl
            placeholder="Ask for questions about SNAP"
            aria-label="Ask for questions about SNAP"
            aria-describedby="basic-addon2"
        />
    </InputGroup>
  );
}

export default Search;
