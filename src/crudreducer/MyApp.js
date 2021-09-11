import AppRouter from "./AppRouter"
import MyContext,{CrudProvider} from "./MyContext"
const MyApp = () => {
    return (
        <CrudProvider>
            <AppRouter />
        </CrudProvider>
    )
}

export default MyApp
