import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import AppRouters from "../../routers/AppRouters";

describe('Test in <AppRouters />', () => {
   
    const contextValue ={
        dispatch: jest.fn(),
        user:{
            logged:false
        }
    }
   
    test('should render login if user is authenticated', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={
                contextValue
            }>
                <AppRouters />
            </AuthContext.Provider>
        )

        console.log(wrapper.html())
        expect( wrapper ).toMatchSnapshot();
        expect(wrapper.find('h1').exists()).toBe(true);

    })
    
    test('should render component marvel if user is authenticated', () => {
        const contextValue ={
            dispatch: jest.fn(),
            user:{
                logged:true,
                name:'Ari'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={
                contextValue
            }>
                <AppRouters />
            </AuthContext.Provider>
        )

        expect(wrapper.find('.navbar').exists()).toBe(true);

    })
    
});
