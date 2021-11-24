<template>
    <section class="list-container">
        <header>
            <h1>To Do List</h1>
        </header>
        <main>
            <div class="list-container__enterItems">
                <input type="text" placeholder="+ Add a task and press Enter" v-model="todoEntered" @keyup.enter="addToList">
            </div>
            <!-- Find the index helps for the slice() method -->
            <div v-for="(todoItem, index) in todoItems"
                :key="todoItem.id"
                class="list-container__todolist">
                <div class="list-container__todolist--content" v-if="!todoItem.taskStatus" >
                    <div class="list-container__todolist--remove" @click="addToCompleted(todoItem.id, index)">
                        <svg width="23" height="23" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5 27C21.4036 27 27 21.4036 27 14.5C27 7.59644 21.4036 2 14.5 2C7.59644 2 2 7.59644 2 14.5C2 21.4036 7.59644 27 14.5 27Z" stroke="#013E40" stroke-width="3.33333"/>
                        </svg>

                    </div>
                    <div>
                        <div v-if="!todoItem.editing">{{ todoItem.task }}</div>
                        <input v-else type="text"
                            v-model="todoItem.task"
                            @keyup.enter="finishEdit(todoItem)">
                    </div>
                         <!-- <div class="list-container__todolist--buttons"> -->
                        <!-- editTodo(todoItem) - sending the object in parameter
                        triggers the current object's details in the function -->
                        <div class="list-container__todolist--edit" @click="editTodo(todoItem)">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.4 7.34L16.66 4.6C16.3024 4.2641 15.8338 4.07136 15.3433 4.05845C14.8529 4.04555 14.3748 4.21337 14 4.53L5.00001 13.53C4.67677 13.856 4.47551 14.2832 4.43001 14.74L4.00001 18.91C3.98654 19.0565 4.00554 19.2041 4.05567 19.3424C4.10579 19.4807 4.18581 19.6062 4.29001 19.71C4.38345 19.8027 4.49426 19.876 4.6161 19.9258C4.73794 19.9755 4.8684 20.0008 5.00001 20H5.09001L9.26001 19.62C9.7168 19.5745 10.144 19.3732 10.47 19.05L19.47 10.05C19.8193 9.68097 20.0081 9.18851 19.995 8.68054C19.9819 8.17257 19.7679 7.69051 19.4 7.34V7.34ZM9.08001 17.62L6.08001 17.9L6.35001 14.9L12 9.32L14.7 12.02L9.08001 17.62ZM16 10.68L13.32 8L15.27 6L18 8.73L16 10.68Z" fill="black"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div>
                <h4 v-if="count !== 0">Completed({{ count }})</h4>
                <div v-for="(todoCompletedItem, index) in todoCompletedItems"
                    :key="todoCompletedItem.id"
                    class="list-container__todolist">
                    <div v-if="!todoCompletedItem.taskStatus">
                        <div>
                            <svg width="23" height="23" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="13" cy="13" r="13" fill="#013E40"/>
                                <path d="M4 13.6667L12 20.3333L22.6667 7" stroke="white" stroke-width="2.66667"/>
                            </svg>
                        </div>
                        <div>{{ todoCompletedItem.task }}</div>
                        <div class="list-container__todolist--remove" @click="removeTodoItem(index)">remove</div>
                    </div>
                </div>
            </div>
        </main>
    </section>
</template>

<script>
export default {
    data() {
        return {
            todoEntered: '',
            idForItem: 1,
            edit: false,
            todoItems: [],
            todoCompletedItems: [],
            status: false,
            count: 0
        };
    },
    methods: {
        addToList() {
            // If condition helps to avoid empty data adds to the list
            if (this.todoEntered === '') {
                return
            }
            this.todoItems.push (
                {
                    id: this.idForItem,
                    task: this.todoEntered,
                    editing: this.edit,
                    taskStatus: this.status,
                    count: this.count
                }
            );
            this.todoEntered = ''
            this.idForItem++
        },
        editTodo(todoItem) {
            todoItem.editing = true
        },
        finishEdit(todoItem) {
            todoItem.editing = false
        },
        removeTodoItem(index) {
            this.todoCompletedItems.splice(index, 1);
            this.count--
        },
        addToCompleted(id, index) {
            const completedTask = this.todoItems.find(todoItem => todoItem.id === id);
                this.todoItems.splice(index, 1)
                this.todoCompletedItems.push( {
                    task: completedTask.task,
                    id: completedTask.id,
                    editing: completedTask.editing,
                    taskStatus: completedTask.taskStatus,
                    count: completedTask.count
                });
                this.count++
        },
    },
}
</script>

<style>
    .list-container {
        display: flex;
        flex-direction: column;
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
    .radio {
        background: #fff;
        border: 2px solid #ddd;
        display: inline-block;
        vertical-align: middle;
        width:20px;
        height: 20px;
        margin-right: 10px;
    }
    .radio:checked {
        color: #bbb;
        outline: 1px solid #ddd;
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
    .list-container__todolist--content {
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