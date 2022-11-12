import React, { useState } from 'react';
import filterDataNames from '../../../utils/filterDataNames.utils';
import filterDataBefore90s from '../../../utils/filterDataBefore90s.utils';
import Name from './Name';
import Card from '../UI/Card';

const DataMassaging = (props) => {
    const usersNameArr = filterDataNames(props.data);
    console.log(usersNameArr);
    const filter90sArr = filterDataBefore90s(props.data);
    console.log(filter90sArr);
    return (
        <div>
            <Name names={usersNameArr} />
            <Card filtered90s={filter90sArr} />
        </div>
    );
};

export default DataMassaging;
