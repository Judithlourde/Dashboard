<template>
    <label for="categories">CHOOSE A CATEGORY</label> <br>                   
    <select class ="form__element--categories" id="bank-services">
        <option value="house">House Loan</option>
        <option value="car">Car loan</option>
        <option value="boat">Boat loan</option>
        <option value="vacationhome">Vacation Home loan</option>
        <option value="soul">Soul loan (experimental)</option>
    </select>
</template>

<script>
export default {

}
</script>

<style>
.form__element--categories {
    font-family: inherit;
    padding: .5rem;
    margin: .5rem 0;
    font-size: inherit;
    font-family: inherit;
    background: #F7F7F8;
    border: none;
    }

</style>