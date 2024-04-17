<script setup>
import { ref } from 'vue'

//let isShowed = ref[false, false]
export default {
    setup() {
        
    }
}
const showPassword = (doc, nbr) => {
    console.log(nbr + " is showed")
    // x = doc.closest('.password');
    // console.log(x) 
    // isShowed[nbr] = true
}

const hidePassword = (number) => {
    console.log(nbr + " is hidden")
    // x = document.getElementsByClassName("password")[number];
    // console.log(x)
    // isShowed[nbr] = false
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
                    <input :type="isShowed1 ? 'text' : 'password'" placeholder="Password" class="password" required>
                    <i :class="isShowed2 ? 'bx bx-show': 'bx bxs-hide' " @mousedown="showPassword(this, 0)" @mouseup="hidePassword(this, 0)"></i>
                </div>

                <div class="input-box">
                    <input :type="isShowed2 ? 'text' : 'password'" placeholder="Confirm password" class="password" required>
                    <i :class="isShowed2 ? 'bx bx-show': 'bx bxs-hide' " @mousedown="showPassword(this, 1)" @mouseup="hidePassword(this, 1)"></i>
                </div>

                <button type="submit" class="btn">Sign Up</button>
            </form>
        </div>
    </div>
    <RouterLink to="/">dsdsdsdsd</RouterLink>
</template>

<style>
body {
    background: url('Arena.jpg') no-repeat;
    background-size: cover;
}

.global {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.wrapper {
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

.wrapper .regiser-link {
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