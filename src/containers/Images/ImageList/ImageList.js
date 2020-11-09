import React from 'react';

import { Segment, List } from 'semantic-ui-react';

export class ImageList extends React.Component {

    render() {
        return (
            <Segment>
                <List divided relaxed>
                    <List.Item>
                        <List.Content>
                            <List.Header>Snickerdoodle</List.Header>
                  An excellent companion
                </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <List.Header>Poodle</List.Header>A poodle, its pretty basic
                </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <List.Header>Paulo</List.Header>
                  He's also a dog
                </List.Content>
                    </List.Item>
                </List>
            </Segment>
        )
    }
}