import Request from './helper-commons/http-coffeeFacts'

class AdminAuth {
    static async registerAdmin(adminInfo:any){
        try {
            const registerAdmin = await Request.CoffeeFactsHTTP.post('/admin/register', adminInfo)
            return registerAdmin
        } catch (error) {
            return error
        }
    }
}

export default AdminAuth