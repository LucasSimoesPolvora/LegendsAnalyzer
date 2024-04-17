<script>
export default {
    data() {
        return {
            isShowed: [false, false]
        }
    },
    methods: {
        showPassword(nbr) {
            this.isShowed[nbr] = true
            console.log(this.isShowed[nbr])
        },
        hidePassword(nbr) {
            this.isShowed[nbr] = false
            console.log(this.isShowed[nbr])
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
                    <input type="text" placeholder="Username" required>
                    <i class='bx bxs-user'></i>
                </div>

                <div class="input-box">
                    <input type="text" placeholder="Email" required>
                    <i class='bx bxs-envelope'></i>
                </div>

                <div class="input-box">
                    <input :type="isShowed[0] ? 'text' : 'password'" placeholder="Password" class="password" required>
                    <i :class="isShowed[0] ? 'bx bx-show' : 'bx bxs-hide'" @mousedown="showPassword(0)"
                        @mouseup="hidePassword(0)"></i>
                </div>

                <div class="input-box">
                    <input :type="isShowed[1] ? 'text' : 'password'" placeholder="Confirm password" class="password"
                        required>
                    <i :class="isShowed[1] ? 'bx bx-show' : 'bx bxs-hide'" @mousedown="showPassword(1)" @mouseup="hidePassword(1)"></i>
                </div>

                <button type="submit" class="btn">Sign Up</button>

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