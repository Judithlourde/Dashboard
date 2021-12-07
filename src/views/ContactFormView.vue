<template>
    <div class="contact-view">
        <form>
            <fieldset class="form-view">
             <h1 class="form-view__header">Contact Form</h1>
                <div class="form-view__element--name">
                    <div>
                        <label for="firstname">FIRST NAME</label> <br>
                        <input name="firstname" v-model="firstName" type="text" placeholder="Enter your First Name">
                    </div>
                    <div>
                        <label for="firstname">LAST NAME</label> <br>
                        <input name="lastname" type="text" v-model="lastName" placeholder="Enter Your Last Name">
                    </div>
                </div>
                <div class="form-view__element--gender">
                    <div>
                    <label>GENDER (illegal question)</label> <br>
                            <input type="radio" name="gender" value="male">
                            <label for="">Male</label>
                            
                            <input type="radio" name="gender" value="female">
                            <label for="">Female</label>

                            <input type="radio" name="gender" value="other">
                            <label for="">Other</label>
                    </div>
                    <div class="form-view__element--loans">
                        <Loans />
                    </div>

                </div>

                <div class="form-view__element--message">
                        <label for="message">Message</label> <br>

                        <textarea id="" name="message" rows="4" cols="25">

                        </textarea>
                
                        <!-- <input type="text" size="50"> -->
                </div>
                <div class="form-view__element--conditions">
                        <input type="checkbox" name="terms">

                        <label for="terms">I HAVE READ THE <span><a href="">TERMS AND CONDITIONS</a></span> </label>
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script>
import Loans from '../components/Loans.vue'

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
    .contact-view {
        max-width: calc(486px + 14%);
        max-width: calc(786px + 14%);
        margin-right: auto;
        margin-left: auto;
        padding-right: 5%;
        padding-left: 5%;  
        padding-top: 10vh; 
        font-size: 1rem;
          
    }
    .form-view {
        border: none;
        padding: 1.5rem;
        background: #fcfcfc; 
        border-radius: 0.5em;
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .1);

    }
    .form-view__header {
        margin: 0.5em;
        padding: .5rem;
        font-size: 1.75rem;
    }

    .form-view__element--name,
    .form-view__element--gender {
        display: flex;
        flex-flow: row wrap;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: .75rem;
    }

    .form-view__element--name label {
        text-align: left;
        font-size: 0.85rem;
        color: #000; 
        margin: .5rem;
        padding: .5rem;    
    }

    .form-view__element--name input {
        padding: .5rem;
        margin: .75rem;
        font-size: inherit;
        font-family: inherit;
        background: #F7F7F8;
        border: none;
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .1);
    }
   
    .form-view__element--gender label {
        text-align: left;
        font-size: 0.85rem;
        margin: .5rem;
        padding: .5rem;    
    }

    .form-view__element--gender input {
        margin: 1.25rem 0 0 1rem ;
    }

    .form-view__element--loans select  {
        border: none;
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .1);
    }

    .form-view__element--message {
        margin: 1.25rem 0 0 1rem ;
    }

    .form-view__element--message textarea {
        font-size: 1.25rem;
        text-align: left;
        margin: 10px 0;
    }
   
    .form-view__element--condtitions {
        display: block;
    }

    .form-view__element--conditions label {
        padding: 10px;
    }

    .form-view__element--conditions input {
        margin: 20px 0 0 16px;
    }

    .form-view__element--conditions label span > a  {
        color: #6429D5;
        padding: 10px;
    }

</style>
