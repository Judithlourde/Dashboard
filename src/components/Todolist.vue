<template>
    <section class="todoList">
        <header>
           To Do List
        </header>

        <main>
            <div class="todoList__enterItems">
                <input type="text" placeholder="+ Add a task and press Enter" v-model="todoEntered" @keyup.enter="addToList">
            </div>

            <!-- Find the index helps for the slice() method -->
            <div v-for="(todoItem, index) in todoItems" :key="todoItem.id" class="todoList__list">
                <div class="todoList__content" v-if="!todoItem.taskStatus" >
                    <div @click="addToCompleted(todoItem.id, index)">
                        <img src="../assets/svg/circlewithoutfill.svg" alt="plus-icon">
                    <!-- </div>

                    <div> -->
                        <div v-if="!todoItem.editing">{{ todoItem.task }}</div>

                        <input v-else type="text" v-model="todoItem.task" @keyup.enter="finishEdit(todoItem)">
                    </div>

                         <!-- <div class="list-container__todolist--buttons"> -->
                        <!-- editTodo(todoItem) - sending the object in parameter
                        triggers the current object's details in the function -->
                    <div class="todoList__edit" @click="editTodo(todoItem)">
                        <img src="../assets/svg/edit.svg" alt="edit-icon">
                    </div>
                </div>
            </div>
            
            <div>
                <h4 v-if="count !== 0">Completed {{ count }}</h4>

                <div v-for="(todoCompletedItem, index) in todoCompletedItems" :key="todoCompletedItem.id" class="todoList__list">
                    <div class="todoList__completed" v-if="!todoCompletedItem.taskStatus">
                        <div>
                            <img src="../assets/svg/done.svg" alt="done-icon">

                            <div>{{ todoCompletedItem.task }}</div>
                        </div>

                        

                        <div class="todoList__remove" @click="removeTodoItem(index)">
                            <img src="../assets/svg/remove.svg" alt="remove-icon">
                        </div>
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
    .todoList {
        display: flex;
        flex-direction: column;
        margin: 50px auto;
        /* width: 80vw; */
        height: 80vh;
        font-size: 20px;
        border-radius: 15px;
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .1);
    }

    .todoList > header {
        padding: 20px;
    }

    .todoList__enterItems {
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

    .todoList__enterItems > button{
        margin: 20px;
        border: 1px solid #eee;
        width: 100px;
    }

    .todoList__enterItems > input {
        border: 1px solid #eee;
        padding: 10px;
        width: 100%;
        height: 60px;

    }

    .todoList__content, .todoList__completed {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

    }

    .todoList__content > div, .todoList__completed > div {
       display: flex;
       flex-direction: row;
    }

    .todoList__list {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        border-bottom: 1px solid #eee;
    }

    .todoList__remove, .todoList__edit, img {
        cursor: pointer;
        padding: 0 20px 0 0;
    }
    
    input {
        font-size: inherit;
        font-family: inherit;
    }
</style>