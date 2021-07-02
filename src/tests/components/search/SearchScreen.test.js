import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
import SearchScreen from "../../../components/search/SearchScreen";

describe('Test in <SearchScreen />', () => {
    test('should render correctly with values by default', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={ SearchScreen }/>
            </MemoryRouter>
        )

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.form-control').exists() ).toBe(true);
        expect( wrapper.find('.alert-info').text().trim() ).toBe('Search a Hero');
    })

    test('should show batman and the input with the value of the queryString', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search" component={ SearchScreen }/>
            </MemoryRouter>
        )
        
        expect( wrapper.find('input').prop('value') ).toBe('batman');    
        expect( wrapper ).toMatchSnapshot();    
    })
    
    test('should show an error if not found the hero', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman36']}>
                <Route path="/search" component={ SearchScreen }/>
            </MemoryRouter>
        )
    
        expect( wrapper.find('.alert-danger').exists() ).toBe(true);    
        expect( wrapper ).toMatchSnapshot();  
    })
    
    test('should called the push of history', () => {
        const history ={ 
            push: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route 
                    path="/search" 
                    component={ () => <SearchScreen history={ history }/> }
                />
            </MemoryRouter>
        )

        wrapper.find('input').simulate('change',{
            target: {
                name:'search',
                value:'batman'
            }
        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });

        expect( history.push ).toHaveBeenCalledWith(`?q=batman`)


    })
    
});
