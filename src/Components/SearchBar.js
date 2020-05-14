import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleFormSubmit = ({ query }) => {
        this.props.handleSearchBarSubmit(query);
    };

    renderInput(field) {
        return (
            <input className="searchbar__input" type="text" {...field.input} />
        );
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form
                className="searchbar"
                onSubmit={handleSubmit(this.handleFormSubmit)}
            >
                <label className="searchbar__label">
                    <FontAwesomeIcon icon={faSearch} /> Search DailySmarty
                    <Field name="query" component={this.renderInput} />
                </label>
            </form>
        );
    }
}

SearchBar = reduxForm({ form: 'SearchBar' })(SearchBar);

SearchBar = withRouter(SearchBar);

export default SearchBar;
