// @flow
class AuthService {
    constructor() {
        this.isLogin = this.isLogin.bind(this)
        this.isAdmin = this.isAdmin.bind(this)
        this.handleLogout = this.handleLogout.bind(this)

        this.getAccount = this.getAccount.bind(this)
    }
    isLogin() {
        return localStorage.getItem('access_token') ? true : false
    }
    isAdmin() {
        const { type } = localStorage.getItem('user')
            ? JSON.parse(localStorage.getItem('user'))
            : ''
        return type === 'admin' ? true : false
    }
    handleLogout() {
        localStorage.clear()
    }
    getAccount() {
        return localStorage.getItem('access_token')
            ? JSON.parse(localStorage.getItem('user')).account
            : ''
    }
    getToken() {
        return this.isLogin()
            ? localStorage.getItem('access_token')
            : ''
    }
    headerToken() {
        return {
            headers: { token: this.getToken() },
        }
    }
    uploadHaveFile() {
        return {
            headers: {
                token: this.getToken(),
                'content-type': 'multipart/form-data',
            },
        }
    }
}
export default new AuthService()
