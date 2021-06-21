import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Test in authReducer', () => {
    // const user = {
    //   name:'Memo',
    //   logged: true
    // }
    
    test('should return the state by default', () => {
        const state = authReducer( { logged:false }, {} )
        expect(state).toEqual({ logged: false })
    })
    
    test('should authenticar and put username', () => {
        
        const action = {
            type: types.login,
            payload: {
                name: 'Ari'
            }
        }
        
        const state = authReducer( { logged:false }, action )
        expect(state).toEqual({ 
            logged: true, 
            name: 'Ari'
        })
    })
    

    test('should delete username and logged in false', () => {
        const action = {
            type: types.logout
        }
        
        const state = authReducer( { logged: false, name:'Pepe' }, action );
        expect(state).toEqual({ 
            logged: false 
        })
    })
    
});
