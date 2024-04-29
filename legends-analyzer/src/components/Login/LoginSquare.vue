<script>
import axios from 'redaxios'

export default {
    data() {
        return {
            isShowed: false,
            errorMessage: ''
        }
    },
    methods: {
        async login() {
            // Getting the username input value
            let username = document.getElementsByClassName('username')[0].value

            // Getting the password input value
            let password = document.getElementsByClassName('password')[0].value

            // Variable that contains the api call
            let APICall = 'http://localhost:3000/login'

            // POST with axios with the username and the password
            await axios.post(APICall, {
                username: username,
                password: password
            }).then((result) => {
                this.usernameError = ''
                this.passwordError = ''
                location.href = '/'
                
            }).catch((error) => {
                if(error.status == 500){
                    this.errorMessage = error.data.message
                } else {
                    this.errorMessage = 'The username or the password is incorrect'
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
            <form  @submit.prevent="login()" action="">
                <h1>Login</h1>
                <div class="input-box">
                    <input type="text" placeholder="Username" class="username" required>
                    <i class='bx bxs-user'></i>
                </div>  

                <div class="input-box">
                    <input :type="isShowed ? 'text' : 'password'" placeholder="Password" class="password" required>
                    <i :class="isShowed ? 'bx bx-show' : 'bx bxs-hide'" @mousedown="isShowed = !isShowed"
                        @mouseup="isShowed = !isShowed"></i>
                    <p class="error">{{ errorMessage }}</p>
                </div>

                <div class="remember-forgot">
                    <label><input type="checkbox"> Remember me</label>
                    <RouterLink class="link" to="/forgotPassword" id="forgot">Forgot Password ?</RouterLink>
                </div>

                <button type="submit" class="btn">Login</button>

                <div class="register-link">
                    <p>Don't have an account? <RouterLink class="link" to="/signup">Create One</RouterLink>
                    </p>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
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
    height: auto;
    margin: 30px 0
}

.input-box input {
    width: 100%;
    height: 50px;
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
    transform: translateY(-50%);
    font-size: 20px;
}

.error {
    padding-left: 20px;
    color: red;
    font-size: 14px;
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

#forgot {
    margin: 5px;
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

.wrapper .register-link {
    font-size: 14.5px;
    text-align: center;
    margin: 20px 0 15px;
}

.register-link p .link {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
}

.register-link p .link:hover {
    text-decoration: underline;
}
</style>