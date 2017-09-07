import React from 'react';
import { Card, Image } from 'semantic-ui-react';

export default class BookDetail extends React.Component{
    render(){
        return(
            <div>
                <Card>
                    <Image src="http://placehold.it/200/450"/>
                    {/*it return array so this has to be done ....*/}
                    {this.props.book.map((book, i)=>
                        <Card.Content>                        
                            <Card.Header>
                                {book.title}
                            </Card.Header>
                            <Card.Meta>
                                {book.author}
                            </Card.Meta>
                            <Card.Description>
                                Price: ${book.price} <br/>
                                Year: {book.year}
                            </Card.Description>                        
                    </Card.Content>
                    )}
                </Card>
            </div>
        );
    }
}