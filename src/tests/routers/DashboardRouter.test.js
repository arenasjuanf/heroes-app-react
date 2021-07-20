import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { DashboardRouter } from '../../routers/DashboardRouter';
describe("pruebas de <DashboardRouter>", () => {
    test("debe mostrarse correctamente", () => {

        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: "Juan"
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <DashboardRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe("Juan");

    })
})