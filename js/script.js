const { createApp } = Vue
createApp({
    data() {
        return {
        stringError: '',
        hasError: true,
        newToDo: 
            {
                text: '',
                done: false
            },
        toDoList: [
            {
                text: 'Studiare',
                done: false
            },
            {
                text: 'Ripetere vue.js',
                done: false
            },
            {
                text: 'Ricordarsi di avere una vita sociale',
                done: false
            },
            {
                text: 'Spendere soldi inutilmente',
                done: true
            }
        ]
    }
    },
    methods: {
        addTask(){
            if (this.newToDo.text.length < 3){
                this.stringError = 'Inserisci una task da almeno 3 caratteri'
            }else{
                this.stringError = '';
                this.toDoList.unshift(this.newToDo);
                this.newToDo = {
                    text: '',
                    done: false
                };
                    }
        },
        removeTask(i){
            this.toDoList.splice(i, 1)
        },
        makeDone(i){
            if (this.toDoList[i].done == false){
                this.toDoList[i].done = true
            }else{
                this.toDoList[i].done = false
            }
        }
    }
}).mount('#app');
