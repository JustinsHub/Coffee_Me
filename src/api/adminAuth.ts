import Request from './helper-commons/http-coffeeFacts'

interface AdminI {
    username: string,
    password: string
}
class AdminAuth {
    static async registerAdmin(adminInfo: AdminI){
        try {
            const registerAdmin = await Request.CoffeeFactsHTTP.post('/admin/register', adminInfo)
            return registerAdmin
        } catch (error) {
            return error
        }
    }
}

export default AdminAuth