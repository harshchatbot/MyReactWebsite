class AuthenticationService {

    registerSuccessfulLogin(username, password) {
        //now we want to put value in the storage
        sessionStorage.setItem('authenticatedUser', password)
        console.log('successfully logged in')
    }

    logout() {

        //here remove session storage item ok
        sessionStorage.removeItem('authenticatedUser')
        console.log('logged OUT')
        
    }

    isUserLoggedIn() {
        
        //to get user auth status
        let user = sessionStorage.getItem('authenticatedUser')

        if (user === null) {

            console.log("User",user)
            return false
            

        } else {

            //else
            return true

        }


    }


}

export default new AuthenticationService()
//we have added new here ok