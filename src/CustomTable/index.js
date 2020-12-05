import React from 'react';
import Table from 'react-bootstrap/Table';

// needs props (records, and attributes)
// records: an array of objects
// attributes: attributes of the objects to be displayed. Example: ['id', 'name', ...]

const CustomTable = (props) => {
    return (
        <Table>
            <thead>
                <tr>
                {props.attributes.map(attr => {
                    return <th>{attr}</th>
                })}
                </tr>
            </thead>
            <tbody>
                {props.records.map(record => {
                    return <tr>{props.attributes.map(attr => {
                        return <th>{record[attr]}</th>
                    })}</tr>
                })}
            </tbody>
            
        </Table>
    )
    
}

export default CustomTable;