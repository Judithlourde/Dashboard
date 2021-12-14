<template>
    <div class="form-container" :class="{contactFormView:contactFormView}">
        <form>
            <fieldset class="form">
                <h1 class="form__header">Contact Form</h1>

                <div class="form__name">
                    <div class="form__name-element">
                        <div>
                            <label for="firstname">FIRST NAME</label> <br>
                            <input name="firstname" v-model="firstName" type="text" placeholder="Enter your First Name">
                        </div>
                        
                        <div>
                            <label for="firstname">LAST NAME</label> <br>
                            <input name="lastname" type="text" v-model="lastName" placeholder="Enter Your Last Name">
                        </div>
                    </div>
                </div>

                <div class="form__gender">
                    <label>GENDER (illegal question)</label> <br>

                    <input type="radio" name="gender" value="male">
                    <label for="">Male</label>
                    
                    <input type="radio" name="gender" value="female">
                    <label for="">Female</label>

                    <input type="radio" name="gender" value="other">
                    <label for="">Other</label>
                </div>
                
                <div class="form__loans">
                    <Loans />
                </div>

                <div class="form__message">
                    <label for="message">Message</label> <br>
                    
                    <textarea id="" name="message" rows="3" cols="20"></textarea>
                    <!-- <input type="text" size="50"> -->
                </div>

                <div class="form__conditions">    
                    <input type="checkbox" name="terms">
                    <label for="terms">I HAVE READ THE <span><a href="">TERMS AND CONDITIONS</a></span> </label>    
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
            contactFormView: false,
            firstName:'',
            lastName: '',
            email:'',
            gender: '',
            }
        },
    }
</script>

<style>
    .form-container {
        font-size: .75em;
    }

    .form {
        border: none;
    }

    .form__header {    
        padding: 10px;  
    }

    .form__name {
        width: 70%;
    }

    .form__name-element {
        display: flex;
        flex-flow: row wrap;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: .75rem 0;
    }

    .form__name-element label {
        text-align: left;
        margin: .5em;
        padding: .5em;    
    }

    .form__name-element input {
        padding: .5em;
        margin: .75em;
        font-size: inherit;
        font-family: inherit;
        background: #F7F7F8;
        border: none;
        box-shadow: 2px 2px 2px 2px var(--box-shadow-color);
    }
    
    .form__gender label {
        text-align: left;
        font-size: 0.85em;
        margin: .5rem;
        padding: .5rem;    
    }

    .form__gender input {
        margin: 1.25em 0 0 1em ;
    }

    .form__loans {
        margin: 1.25em 0 0 1em;
    }

    .form__loans select  {
        border: none;
        box-shadow: 2px 2px 2px 2px var(--box-shadow-color);
    }

    .form__message {
        margin: 1.25em 0 0 1rem ;
    }

    .form__message textarea {
        border: 1px solid rgb(135, 131, 131);
        max-width: 100%;
        font-size: 1.25em;
        text-align: left;
        margin: 10px 0;
    }
   
    .form__condtitions {
        display: block;
    }

    .form__conditions label {
        padding: 10px;
    }
    
    .form__conditions input {
        margin: 20px 0 0 16px;
    }

    .form__conditions label span > a  {
        color: var(--purple);
        padding: 10px;
    }

    /* styling contact-form view */
    .contactFormView {
        border-radius: 0.5em;
        box-shadow: 2px 2px 2px 2px var(--box-shadow-color);
        padding: 2%;
    }
    
    /* small devices (mobiles, 768px and down) */
    @media screen and (max-width: 768px) {
        .contactFormView {
            margin-top: 40px;  
        }    
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media screen and (min-width: 768px) {
        .contactFormView {
            margin-top: 30px;
            max-width: calc(486px + 14%);
            min-width: calc(786px + 14%);
            height: 90%;
            margin-right: auto;
            margin-left: auto;
            font-size: 1em;
        }
    }
</style>
