import { mount } from "enzyme";
import PrivateRoute from "../../routers/PrivateRoute";
import { MemoryRouter } from 'react-router-dom'

describe('Test in <PrivateRoutes />', () => {

    const props = {
        location:{
            pathname:'/dc'
        }
    }

    Storage.prototype.setItem = jest.fn();

    test('should show component if it is authenticated and is saved in localStorage', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={true}
                    component={() => <span>Listo!</span>}  
                    { ...props }
                />
            </MemoryRouter>
        )
        // console.log(wrapper.html())
        expect(wrapper.find('span').exists()).toBe(true);
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath','/dc')
    })
    
    test('should block component if unauthenticated', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={false}
                    component={() => <span>Listo!</span>}  
                    { ...props }
                />
            </MemoryRouter>
        )
        // console.log(wrapper.html())
        expect(wrapper.find('span').exists()).toBe(false);
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath','/dc')
    })
    
});
