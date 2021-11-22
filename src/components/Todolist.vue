<template>
    <div class="list-container">
        <header>
            <h1>To Do List</h1>
        </header>
        <div class="list-container__enterItems">
            <input type="text" placeholder="+ Add a task and press Enter" v-model="todo" @keyup.enter="addToList">
        </div>
        <!-- Find the index helps for the slice() method -->
        <div v-for="(todoItem, index) in todoItems" :key="todoItem.id" class="list-container__todolist">
            <div>
                <div v-if="!todoItem.editing">{{ todoItem.title }}</div>
                <input v-else type="text" v-model="todoItem.title" @keyup.enter="finishEdit(todoItem)">
            </div> 
            <div class="list-container__todolist--buttons">
                <!-- editTodo(todoItem) - sending the object in parameter 
                triggers the current object's details in the function -->
                <div class="list-container__todolist--edit" @click="editTodo(todoItem)">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.4 7.34L16.66 4.6C16.3024 4.2641 15.8338 4.07136 15.3433 4.05845C14.8529 4.04555 14.3748 4.21337 14 4.53L5.00001 13.53C4.67677 13.856 4.47551 14.2832 4.43001 14.74L4.00001 18.91C3.98654 19.0565 4.00554 19.2041 4.05567 19.3424C4.10579 19.4807 4.18581 19.6062 4.29001 19.71C4.38345 19.8027 4.49426 19.876 4.6161 19.9258C4.73794 19.9755 4.8684 20.0008 5.00001 20H5.09001L9.26001 19.62C9.7168 19.5745 10.144 19.3732 10.47 19.05L19.47 10.05C19.8193 9.68097 20.0081 9.18851 19.995 8.68054C19.9819 8.17257 19.7679 7.69051 19.4 7.34V7.34ZM9.08001 17.62L6.08001 17.9L6.35001 14.9L12 9.32L14.7 12.02L9.08001 17.62ZM16 10.68L13.32 8L15.27 6L18 8.73L16 10.68Z" fill="black"/>
                    </svg>
                </div>  
                <div class="list-container__todolist--remove" @click="removeTodoItem(index)">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 18H18C18.55 18 19 18.45 19 19C19 19.55 18.55 20 18 20H6C5.45 20 5 19.55 5 19C5 18.45 5.45 18 6 18ZM11.01 13.9C10.634 14.2712 10.1263 14.4785 9.59794 14.4766C9.06957 14.4747 8.5634 14.2638 8.19 13.89L6 11.7C5.45 11.15 5.46 10.26 6.03 9.73C6.57 9.21 7.43 9.23 7.95 9.75L9.6 11.4L16.03 4.97C16.57 4.43 17.44 4.43 17.98 4.97L18.02 5.01C18.56 5.55 18.56 6.43 18.01 6.97L11.01 13.9V13.9Z" fill="black"/>
                    </svg>
                </div>
            </div>    
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todo: '',
            idForItem: 1,
            edit: false,
            todoItems: []
        };
    },
    methods: {
        addToList() {
            // If condition helps to avoid empty data adds to the list 
            if (this.todo === '') {
                return
            }
            this.todoItems.push (
                { 
                    id: this.idForItem,
                    title: this.todo,
                    editing: this.edit,
                }
            );
            this.todo = ''
            this.idForItem++
        }, 
        editTodo(todoItem) {
            todoItem.editing = true
        },
        finishEdit(todoItem) {
            todoItem.editing = false
        },
        removeTodoItem(index) {
            this.todoItems.splice(index, 1);
        },   
    }
    
}
</script>

<style>
    .list-container {
        margin: 100px auto;
        max-width: 80vw;
        height: 80vh; 
        font-size: 20px;
        border-radius: 15px;
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .1);
    }
    .list-container > header {
        padding: 20px;
    }
    .list-container__enterItems {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .list-container__enterItems > button{
        margin: 20px;
        border: 1px solid #eee;
        width: 100px;
    }
    .list-container__enterItems > input {
        border: 1px solid #eee;
        padding: 10px;
        width: 100%;
        height: 60px;
        
    }
    .list-container__todolist--buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
       
    }
    .list-container__todolist {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        border-bottom: 1px solid #eee;
    }
    .list-container__todolist--remove, .list-container__todolist--edit {
        cursor: pointer;
        padding: 0 20px;
    }
    input {
        font-size: inherit;
    }
</style>