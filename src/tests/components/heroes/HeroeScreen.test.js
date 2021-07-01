import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
import HeroeScreen from "../../../components/heroes/HeroeScreen";


describe('Test in <HeroesScreen />', () => {
    
    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    }

    
    
    test('should render the  redirect component if there are no arguments in the URL', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroeScreen history={ history }/>
            </MemoryRouter>
        )
        expect( wrapper.find('Redirect').exists() ).toBe(true);

    })

    test('should show a hero if the parameter exist and is found', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroeId" component={ HeroeScreen } />            
            </MemoryRouter>
        )

        expect(wrapper.find('.row').exists()).toBe(true);
    })
    
    test('should come back the previus screen with PUSH', () => {
        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroeId" component={ () => <HeroeScreen history={ history } /> } />            
            </MemoryRouter>
        )
        wrapper.find('button').prop('onClick')();

        expect( history.push ).toHaveBeenCalledWith('/');
        expect( history.goBack ).not.toHaveBeenCalled();
    })
    
    test('should come back the previus screen with GOBACK', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroeId" component={ () => <HeroeScreen history={ history } /> } />            
            </MemoryRouter>
        )
        wrapper.find('button').prop('onClick')();

        expect( history.goBack ).toHaveBeenCalledTimes(1);
        expect( history.push ).not.toHaveBeenCalled();

    })

    test('should called the redirect if the hero doesnt exists', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spiderxxxx']}>
                <Route path="/hero/:heroeId" component={ () => <HeroeScreen history={ history } /> } />            
            </MemoryRouter>
        )
        
        expect( wrapper.text() ).toBe('')

    })
    
});
