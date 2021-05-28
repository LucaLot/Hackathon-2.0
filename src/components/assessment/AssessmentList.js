import React from 'react';
import Assessment from './Assessment';

const physicalList = ['Eat healthy foods', 'Take care of personal hygiene'];

const AssessmentList = () => {
    return (
        <React.Fragment>
            <Assessment title="Physical Self-Care" list={physicalList} />
        </React.Fragment>
    );
}

export default AssessmentList;