<script>
import axios from 'redaxios'

export default {
    data() {
        return {
            isShowed: false,
        }
    },
    methods: {
        async sendMail() {
            let emailValue = document.getElementsByClassName('email')[0].value

            axios.post('http://localhost:3000/forgotpassword', {
                email: emailValue
            }, {
                withCredentials: true
            }).then((result) => {
                console.log(result);
            })
        }
    }
}
</script>

<template>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel="stylesheet">
    <div class="global">
        <div class="wrapper">
            <form  @submit.prevent="sendMail()" action="">
                <h1>Forgot Password ?</h1>
                <p>If there is a user with the mail you entered, we will send an email with a new password. 
                   Please note your password somewhere safe</p>
                <div class="input-box">
                    <input type="text" placeholder="Email" class="email" required>
                    <i class='bx bxs-envelope'></i>
                </div> 

                <button type="submit" class="btn">Send mail</button>
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

.wrapper p {
    text-align: justify;
    line-height: 18px;
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

.remember-forgot label input {
    accent-color: #fff;
    margin-right: 3px;
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
</style>