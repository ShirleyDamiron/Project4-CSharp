import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { USERS_API_URL }  from '../constants';
class RegistrationForm extends React.Component {
    state = {
        id: 0,
        product_Name: '',
        category: '',
        sizes: '',
        material: '',
        color: '',
        quantity: '',
        imG_SRC: ''
    }
    componentDidMount() {
        if (this.props.user) {
            const { id, product_Name, category, sizes, material, color, quantity, imG_SRC} = this.props.user
            this.setState({ id, product_Name, category, sizes, material, color, quantity, imG_SRC});
        }
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitNew = e => {
        e.preventDefault();
        fetch('https://localhost:5001/api/Product', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                product_Name: this.state.product_Name,
                category: this.state.category,
                sizes: this.state.sizes,
                material: this.state.material,
                color: this.state.color,
                quantity: this.state.quantity,
                imG_SRC: this.state.imG_SRC
            })
        })
            .then(res => res.json())
            .then(user => {
                this.props.addUserToState(user);
                this.props.toggle();
            })
            .catch(err => console.log(err));
    }
    submitEdit = e => {
        e.preventDefault();
        fetch(`${USERS_API_URL}/${this.state.id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.id,
                product_Name: this.state.product_Name,
                category: this.state.category,
                sizes: this.state.sizes,
                material: this.state.material,
                color: this.state.color,
                quantity: this.state.quantity,
                imG_SRC: this.state.imG_SRC
            })
        })
            .then(() => {
                this.props.toggle();
                this.props.updateUserIntoState(this.state.id);
            })
            .catch(err => console.log(err));
    }
    render() {
        return <Form onSubmit={this.props.user ? this.submitEdit : this.submitNew}>
            <FormGroup>
                <Label for="product_Name">product_Name:</Label>
                <Input type="text" name="product_Name" onChange={this.onChange} value={this.state.product_Name === '' ? '' : this.state.product_Name} />
            </FormGroup>
            <FormGroup>
                <Label for="category">category:</Label>
                <Input type="text" name="category" onChange={this.onChange} value={this.state.category === null ? '' : this.state.category} />
            </FormGroup>
            <FormGroup>
                <Label for="sizes">sizes:</Label>
                <Input type="text" name="sizes" onChange={this.onChange} value={this.state.sizes === null ? '' : this.state.sizes} />
            </FormGroup>
            <FormGroup>
                <Label for="material">material:</Label>
                <Input type="text" name="material" onChange={this.onChange} value={this.state.material === null ? '' : this.state.material} />
            </FormGroup>
            <FormGroup>
                <Label for="color">color:</Label>
                <Input type="text" name="color" onChange={this.onChange} value={this.state.color === '' ? '' : this.state.color} />
            </FormGroup>
            <FormGroup>
                <Label for="quantity">quantity:</Label>
                <Input type="number" name="quantity" onChange={this.onChange} value={this.state.quantity === '' ? '' : this.state.quantity} />
            </FormGroup>
            <FormGroup>
                <Label for="imG_SRC">imG_SRC:</Label>
                <Input type="text" name="imG_SRC" onChange={this.onChange} value={this.state.imG_SRC === '' ? '' : this.state.imG_SRC} />
            </FormGroup>
            <Button>Send</Button>
        </Form>;
    }
}
export default RegistrationForm;