import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import RegistrationModal from './RegistrationModal';
import { USERS_API_URL } from '../constants';
class DataTable extends Component {
    deleteItem = id => {
        let confirmDeletion = window.confirm(' Click Ok To Delete');
        if (confirmDeletion) {
            fetch(`${USERS_API_URL}/${id}`, {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    this.props.deleteItemFromState(id);
                })
                .catch(err => console.log(err));
        }
    }
    render() {
        const items = this.props.items;
        return <Table striped>
            <thead className="thead-dark">
                <tr>
                    <th>Id</th>
                    <th>Product_Name</th>
                    <th>Category</th>
                    <th>Sizes</th>
                    <th>Material</th>
                    <th>Color</th>
                    <th>Quantity</th>
                    <th>IMG_SRC</th>
                    <th style={{ textAlign: "center" }}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {!items || items.length <= 0 ?
                    <tr>
                        <td colSpan="6" align="center"><b>No Products yet</b></td>
                    </tr>
                    : items.map(item => (
                        <tr key={item.id}>
                            <th scope="row">
                                {item.id}
                            </th>
                            <td>
                                {item.product_Name}
                            </td>
                            <td>
                                {item.category}
                            </td>
                            <td>
                                {item.sizes}
                            </td>
                            <td>
                                {item.material}
                            </td>
                            <td>
                                {item.color}
                            </td>
                            <td>
                                {item.quantity}
                            </td>
                            <td>
                                {item.imG_SRC}
                            </td>
                            <td align="center">
                                <div>
                                    <RegistrationModal
                                        isNew={false}
                                        user={item}
                                        updateUserIntoState={this.props.updateState} />
                                    &nbsp;&nbsp;&nbsp;
                  <Button color="success" onClick={() => this.deleteItem(item.id)}>Delete</Button>
                                </div>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </Table>;
    }
}
export default DataTable;