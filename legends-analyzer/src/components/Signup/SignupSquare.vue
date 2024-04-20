<script>
import axios from 'redaxios'

export default {
    data() {
        return {
            isShowed: [false, false],
            usernameError: '',
            emailError: '',
            passwordError: '',
            passwordConfirmationError: ''
        }
    },
    methods: {
        showPassword(nbr) {
            this.isShowed[nbr] = true
        },
        hidePassword(nbr) {
            this.isShowed[nbr] = false
        },
        async signup(){
            // Prevent the refresh to debug
            event.preventDefault()

            // Getting the username input value
            let username = document.getElementsByClassName('username')[0].value

            // Getting the email input value
            let email = document.getElementsByClassName('email')[0].value

            // Getting the password input value
            let password = document.getElementsByClassName('password')[0].value

            // Getting the password confirmation input value
            let passwordConfirmation = document.getElementsByClassName('password')[1].value

            // Variable that contains the api call
            let APICall = 'http://localhost:3000/signup'

            // If the password and the confiramtion are not matching
            if(password != passwordConfirmation) {
                this.passwordConfirmationError = `The passwords don't match`
                return
            }

            // If the username doesn't have the requierement length
            if(username.length < 3){
                this.usernameError = `The username doesn't match the requirements`
                return
            }

            // POST with axios with the username, the mail and the password
            await axios.post(APICall, {
                username: username,
                email: email,
                password: password
            }).then((result) => {
                this.usernameError = ''
                this.emailError = ''
                this.passwordError = ''
                this.passwordConfirmationError = ''
                // Returning the result
                console.log(result)

            }).catch((error) => {
                console.log(error)
                // If it's an error 401 it's a password issue
                if (error.status == 401) {
                    this.passwordError = error.data.message
                    this.passwordConfirmationError = error.data.message
                }
                // If it's an error 400 it's an email issue or a unique username issue
                else if(error.status == 400) {
                    if(error.data.data.name == 'SequelizeUniqueConstraintError'){
                        this.usernameError = 'This username is already taken'
                        return
                    }
                    this.emailError = `The email isn't valid`
                }
                // If it's an error 500 it's a server side problem
                else if(error.status == 500) {
                    console.log(error.data.message)
                }
            })
        }
    }
}
</script>

<template>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel="stylesheet">
    <div class="global">
        <div class="wrapper">
            <form action="">
                <h1>Sign Up</h1>
                <div class="input-box">
                    <input type="text" placeholder="Username" class="username" required>
                    <i class='bx bxs-user'></i>
                    <p>{{ usernameError }}</p>
                </div>

                <div class="input-box">
                    <input type="text" placeholder="Email" class="email" required>
                    <i class='bx bxs-envelope'></i>
                    <p>{{ emailError }}</p>
                </div>

                <div class="input-box">
                    <input :type="isShowed[0] ? 'text' : 'password'" placeholder="Password" class="password" required>
                    <i :class="isShowed[0] ? 'bx bx-show' : 'bx bxs-hide'" @mousedown="showPassword(0)"
                        @mouseup="hidePassword(0)"></i>
                        <p>{{ passwordError }}</p>
                </div>

                <div class="input-box">
                    <input :type="isShowed[1] ? 'text' : 'password'" placeholder="Confirm password" class="password"
                        required>
                    <i :class="isShowed[1] ? 'bx bx-show' : 'bx bxs-hide'" @mousedown="showPassword(1)" @mouseup="hidePassword(1)"></i>
                    <p>{{ passwordConfirmationError }}</p>
                </div>

                <button type="submit" class="btn" @click="signup()">Sign Up</button>

                <div class="login-link">
                    <p>Already have an account? <RouterLink class="link" to="/login">Login</RouterLink></p>
                </div>
            </form>
        </div>
    </div>
    <RouterLink to="/">dsdsdsdsd</RouterLink>
</template>

<style>
.global {
    width: 100%;
    height: 100vh;
    background: url('Arena.jpg') no-repeat;
    background-position: center;
    background-size: cover;
}

.wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 420px;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, .2);
    backdrop-filter: blur(20px);
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    color: #fff;
    border-radius: 10px;
    padding: 30px 40px;
}

.wrapper h1 {
    font-size: 36px;
    text-align: center
}

.wrapper .input-box {
    position: relative;
    width: 100%;
    height: 50px;
    margin: 30px 0
}

.input-box input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    border: 2px solid rgba(255, 255, 255, .2);
    border-radius: 40px;
    text-indent: 20px;
    font-size: 16px;
    color: #fff;
}

.input-box input::placeholder {
    color: #fff;
}

.input-box i {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-35%);
    font-size: 20px;
}

.wrapper .remember-forgot {
    display: flex;
    justify-content: space-between;
    font-size: 14.5px;
    margin: -5px 0 15px
}

.remember-forgot label input {
    accent-color: #fff;
    margin-right: 3px;
}

.remember-forgot .link {
    color: #fff;
    text-decoration: none;
}

.remember-forgot .link:hover {
    text-decoration: underline;
}

.wrapper .btn {
    width: 100%;
    height: 45px;
    background: #fff;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    cursor: pointer;
    font-size: 16px;
    color: #333;
    font-weight: 600;
}

.wrapper .login-link {
    font-size: 14.5px;
    text-align: center;
    margin: 20px 0 15px;
}

.login-link p .link {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
}

.login-link p .link:hover {
    text-decoration: underline;
}
</style>