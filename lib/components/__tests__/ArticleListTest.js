import React from 'react';
import ArticleList from '../ArticleList';
// import renderer from 'react-test-renderer';
import Article from '../Article';
import { shallow } from 'enzyme';

describe('ArticleList', () => {
    const testProps = {
        articles: {
            a: {id: 'a'},
            b: {id: 'b'},
            c: {id: 'c'},
        },
    };

    it('renders correctly', () => {
        const wrapper = shallow(
            <ArticleList 
                {...testProps}
            />
        );
        expect(wrapper.node.props.children[0].key).toBe('a');
        expect(wrapper.node.props.children[1].key).toBe('b');
        expect(wrapper.find('ArticleContainer').length).toBe(3);
        expect(wrapper).toMatchSnapshot();
    });
});