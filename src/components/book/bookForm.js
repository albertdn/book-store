import React from 'react';
import { Form, Button } from 'semantic-ui-react';

export default class BookForm extends React.Component {
    render() {
        let titleInput, authorInput, priceInput, yearInput = null;
        return (
            <div>
                <Form onSubmit={e => {
                    e.preventDefault();
                    var input = {
                        title: titleInput.value,
                        author: authorInput.value,
                        price: priceInput.value,
                        year: yearInput.value
                    };
                    this.props.submitBook(input);
                    e.target.reset();
                }
                }>
                    <Form.Field>
                        <label>Book Title</label>
                        <input name="title" type="text" ref={node => titleInput = node} />
                    </Form.Field>
                    <Form.Field>
                        <label>Book Author</label>
                        <input name="title" type="text" ref={node => authorInput = node} />
                    </Form.Field>
                    <Form.Field>
                        <label>Book Price</label>
                        <input type="text" name="price" ref={node => priceInput = node} />
                    </Form.Field>
                    <Form.Field>
                        <label>Book Year</label>
                        <input type="text" name="year" ref={node => yearInput = node} />
                    </Form.Field>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}