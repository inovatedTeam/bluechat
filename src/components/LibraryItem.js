import React, { Component } from 'react';
import { 
    Text, 
    TouchableWithoutFeedback, 
    View,
    LayoutAnimation
 } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../action';

class LibraryItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }
    renderDescription() {
        const { library, expanded } = this.props;
        if (expanded) {
            return (
                <CardSection style={{ flex: 1 }}>
                    <Text>{library.description}</Text>    
                </CardSection>
            );
        }
        
    }
    render() {
        const { id, title } = this.props.library;
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.SelectedLibraryID === ownProps.library.id;
    return { expanded };
};

export default connect(mapStateToProps, actions)(LibraryItem);