import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Cart from '.';
import CustomTable from '../CustomTable';

configure({adapter: new Adapter()});

describe('<Cart />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Cart></Cart>);
    })

    it('testing', () => {
        wrapper.setProps({prdsCart: []})
        expect(wrapper.find(CustomTable)).toHaveLength(0)

    });
})