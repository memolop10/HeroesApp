import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import DashboardRoutes from "../../routers/DashboardRoutes";


describe('Test in <DashBoardRoutes />', () => {

    const contextValue ={
        dispatch: jest.fn(),
        user:{
            logged: true,
            name:'memito'
        }
    }
   

    test('should render correctly', () => {
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('span.text-info').exists()).toBe(true)
        expect(wrapper.find('.text-info').text().trim()).toBe('memito')
    })

    
});
