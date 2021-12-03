<template>
    <div class="contact-container">
        <form>
            <fieldset class="form">
             <h1 class="form__header">Contact Form</h1>
                <div class="form__element">
                    <div>
                        <label for="firstname">FIRST NAME</label> <br>
                        <input name="firstname" v-model="firstName" type="text" placeholder="Enter your First Name">
                    </div>
                    <div>
                        <label for="firstname">LAST NAME</label> <br>
                        <input name="lastname" type="text" v-model="lastName" placeholder="Enter Your Last Name">
                    </div>
                </div>
                <div class="form__element">
                    <div>
                    <label>GENDER (illegal question)</label> <br>
                        <div>
                            <input type="radio" name="gender" value="male">
                            <label for="">Male</label>
                            
                            <input type="radio" name="gender" value="female">
                            <label for="">Female</label>

                            <input type="radio" name="gender" value="other">
                            <label for="">Other</label>
                        </div>
                    </div>
                    <div>
                        <Loans />
                    </div>

                </div>

                <div class="form__element form__element--message">
                    <div>
                        <label for="message">Message</label> <br>
                        <input type="text" size="50">
                    </div>
                </div>

                <div class="form__element form__element--conditions">
                    <div>
                        <input type="checkbox" name="terms">
                        <label for="terms">I HAVE READ THE <span><a href="">TERMS AND CONDITIONS</a></span> </label>
                    </div>
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script>
import Loans from './Loans.vue'

export default {
    components: {
        Loans
    },
    data() {
        return {
        firstName:'',
        lastName: '',
        email:'',
        gender: '',

        }
    },
}
</script>

<style>
    .contact-container {
        background: #f7f7f8;
        height: 100%;
        padding-top: 1em;
        
    }
    .form {
        width: 90%;
        max-width: 700px;
        margin: 2em;
        padding: 1em;
        background: #fcfcfc;
        border: 1px solid gray;
        border-radius: 0.5em;

    }
    .form__header {
        margin: 0.5em;
    }
    .form__element {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
    }
    .form__element input,
    .form__element label {
        font-size: 1.5rem;
    }

    .form__element--condtitions {
        display: block;
    }
    .form__element--categories {
        font-size: 1.5rem;
        border: 1px solid black;
    }
    .form__element--message input {
        width: 90%;
    }
    .form__element label{
        text-align: left;
        font-size: 0.7em;
        color: gray;
      
    }
    .form__element input,
    .form__element select {
        padding: 0.5em;
        border-style: 1px solid black;
        border-radius: 5px;
        /* border-bottom: 1px dotted black; */
        margin-bottom: 1em;
    }

    @media screen and (max-width: 465px) {
        .form__element {
            display: block;
        }
    }
</style>
