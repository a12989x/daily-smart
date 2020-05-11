import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleFormSubmit = ({ query }) => {
        this.props.handleSearchBarSubmit(query);
    };

    renderInput(field) {
        return <input type="text" {...field.input} />;
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form
                className="searchbar"
                onSubmit={handleSubmit(this.handleFormSubmit)}
            >
                <label>
                    Search DailySmarty
                    <Field name="query" component={this.renderInput} />
                </label>
            </form>
        );
    }
}

SearchBar = reduxForm({ form: 'SearchBar' })(SearchBar);

SearchBar = withRouter(SearchBar);

export default SearchBar;
