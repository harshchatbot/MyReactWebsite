class AuthenticationService {

    registerSuccessfulLogin(username,password){
        //now we want to put value in the storage
        sessionStorage.setItem('authenticatedUser', password)
        console.log('successfully logged in')
    }

    logout(){

        //here remove session storage item ok
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn(){

        //to get user auth status
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return false
        //else
        return true
    }


}

export default new AuthenticationService()
//we have added new here ok 