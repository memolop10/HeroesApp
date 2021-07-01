import { mount } from "enzyme"
import { AuthContext } from "../../../auth/AuthContext"
import Login from "../../../components/login/Login"
import { types } from "../../../types/types"

describe('Test in <Login />', () => {

    const historyMock = {
           replace: jest.fn(),
    }

    const contextValue ={
        dispatch: jest.fn(),
        user:{
            logged:false
        }
    }
    
    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
           
           <Login history={ historyMock }/>
             
        </AuthContext.Provider>
    )

    test('should render correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('should done the dispatch and navigation', () => {
        
        wrapper.find('button').prop('onClick')();


        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: {
             name:'Memo'   
            }
        })

        expect( historyMock.replace ).toHaveBeenCalled();

        // localStorage.setItem('lastPath','/dc');
        // wrapper.find('button').prop('onClick')();

        // expect( historyMock.replace ).toHaveBeenCalledWith('/dc');
    })
    
    
})
