<template>
    <section class="todo" :class="{todoView: todoView}">
        <header class="todo__header">
            <h1>To Do List</h1> 
        </header>

        <main>
            <div class="todo__enterItems">
                <input type="text" placeholder="+ Add a task and press Enter" v-model="todoEntered" @keyup.enter="addToList">
            </div>

            <!-- Find the index for the slice() method -->
            <div v-for="(todoItem, index) in todoItems" :key="todoItem.id" class="todo__list">
                <div class="todo__content" v-if="!todoItem.taskStatus" >
                    <div>
                        <div @click="addToCompleted(todoItem.id, index)">
                            <img src="/svg/circlewithoutfill.svg" alt="circlewithoutfill-icon">
                        </div>

                        <div class="todo__content-edit">
                            <div v-if="!todoItem.editing">{{ todoItem.task }}</div>

                            <input v-else type="text" v-model="todoItem.task" @keyup.enter="finishEdit(todoItem)">
                        </div>
                    </div>

                    <!-- <div class="list-container__todo--buttons"> -->
                    <!-- editTodo(todoItem) - sending the object in parameter
                    triggers the current object's details in the function -->
                    <div class="todo__edit" @click="editTodo(todoItem)">
                        <img src="/svg/edit.svg" alt="edit-icon">
                    </div>
                </div>
            </div>
            
            <div>
                <h4 v-if="count !== 0">Completed {{ count }}</h4>

                <div v-for="(todoCompletedItem, index) in todoCompletedItems" :key="todoCompletedItem.id" class="todo__list">
                    <div class="todo__completed" v-if="!todoCompletedItem.taskStatus">
                        <div>
                            <img src="/svg/done.svg" alt="done-icon">

                            <div>{{ todoCompletedItem.task }}</div>
                        </div>

                        <div class="todo__remove" @click="removeTodoItem(index)">
                            <img src="/svg/remove.svg" alt="remove-icon">
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
                todoView: false,
                todoEntered: '',
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
                        id: this.id(),
                        task: this.todoEntered,
                        editing: this.edit,
                        taskStatus: this.status,
                        count: this.count
                    }
                );
                this.todoEntered = ''
            },

            id() {
                return Math.random().toString(36).slice(2);
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
                        count: completedTask.count
                    });
                    this.count++
            },    
        },

        computed: {
            stylingTodoView() {
                return this.todoView
            },
        }
    }
</script>

<style>
    .todo {
        max-height: 80%;
    }
    
    .todo__header > h1 {
        padding: 20px;
        font-weight: 300;
        font-size: 1em;
    }

    .todo__enterItems {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: .75em;
    }

    .todo__enterItems > input {
        border: 1px solid #eee;
        padding: 10px;
        width: 100%;
        height: 60px;
        font-size: inherit;
        font-family: inherit;
    }

    .todo__content, .todo__completed {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .todo__content > div, .todo__completed > div {
       display: flex;
       flex-direction: row;
    }

    .todo__list {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        border-bottom: 1px solid #eee;
    }

    .todo__remove, .todo__edit, img {
        cursor: pointer;
        padding: 0 20px 0 0;
    }

    .todo__content-edit > input {
        font-size: inherit;
        font-family: inherit;
        width: 100%;
    }

    /* styling todo view */
    .todoView {
        background: #fff;
        margin: 50px;
        padding-right: 2%;
        padding-left: 2%;  
        padding-top: 1%;
        border-radius: 0.5em;
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .1);
        height: 100%;     
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media screen and (min-width: 768px) {
        .todoView {
            font-size: 1.5em;
        }
    }
</style>