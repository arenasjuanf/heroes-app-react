import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import HeroScreen from '../../../components/heores/HeroScreen';
import { Route } from 'react-router-dom';

describe("pruebas en <HeroScreen />", () => {

    const history = {
        length: 10,
        goBack: jest.fn(),
        push: jest.fn(),
    }

    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero']}>
            <HeroScreen  history={ history }/>
        </MemoryRouter>
    )

    test("se debe mostrar el componente redirect si no hay argumentos en la url", () => {
        expect(wrapper.find('Redirect').exists()).toBeTruthy()
    })

    test("debe regresar a la pantalla anterior con push", () => {

        const history = {
            length: 10,
            goBack: jest.fn(),
            push: jest.fn(),
        }
    

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                    path="/hero/:heroeId"
                    component={(props) => <HeroScreen  history={ history }/>}
                />
                
            </MemoryRouter>
        )

        wrapper.find('button').prop('onClick')();
        expect(history.push).toHaveBeenCalledWith('/');

    })

    test("debe llamar el redirect si heroe no existe", () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spidersan']}>
                <Route 
                    path="/hero/:heroeId"
                    component={(props) => <HeroScreen  history={ history }/>}
                />
                
            </MemoryRouter>
        )

        expect(wrapper.text()).toBe("");
        
    })

})