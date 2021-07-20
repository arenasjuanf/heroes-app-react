import { mount } from "enzyme"
import { AuthContext } from "../../../auth/AuthContext";
import { LoginScreen } from "../../../components/login/LoginScreen"
import { types } from "../../../types/types";

describe("Pruebas en <LoginScreen />", () => {

    const history = {
        replace: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn(),
        replace: jest.fn(),
        user:{
            logged: false
        }
    }
    
    const wrapper = mount(
        <AuthContext.Provider value={contextValue} >
            <LoginScreen history={history}/>
        </AuthContext.Provider>
    
    );

    test("debe mostrarse correctamente", () => {
        

        expect(wrapper).toMatchSnapshot()
    })

    test("debe de realizar dispatch y navegación", () => {

        wrapper.find('button').prop('onClick')();
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload:{
                name: "juan felipe arenas"
            }
        })

        expect(contextValue.replace).not.toHaveBeenCalled();

    })


})