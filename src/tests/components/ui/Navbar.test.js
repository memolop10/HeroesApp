import { mount } from "enzyme";
import '@testing-library/jest-dom'
import { AuthContext } from "../../../auth/AuthContext";
import { MemoryRouter, Router } from "react-router-dom";
import Navbar from "../../../components/ui/Navbar";
import { types } from "../../../types/types";


describe('Test in <Nabvar />', () => {

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }

    const contextValue ={
        dispatch: jest.fn(),
        user:{
            logged:true,
            name: 'MEMO'
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={ historyMock }>
                    <Navbar />
                </Router>            
            </MemoryRouter>
        </AuthContext.Provider>
    )

    beforeEach(() => {
        jest.clearAllMocks();
    })
    
    test('should render correctly', () => {
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('MEMO');
    })

    test('should call the logout and use history', () => {
        //simular el click
        wrapper.find('button').prop('onClick')();
        //llmando al dispach y verificar que argumentos tiene
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout
        })
        //esperando que replace sea llamado con el argumento /login
        expect( historyMock.replace ).toHaveBeenCalledWith('/login')
    })
    
});
