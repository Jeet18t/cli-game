#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from 'nanospinner'



let name

const sleep = (ms = 2000)=> new Promise((r)=>setTimeout(r, ms))
const smolSleep = (ms = 900)=> new Promise((r)=>setTimeout(r, ms))

async function welcome() {
    const title = chalkAnimation.rainbow(`
        Sasta KBC \n`)
        
        await smolSleep()
        title.stop()
    
    const creator = chalkAnimation.karaoke(`
        Made by Jeet Chauhan\n`)
        await sleep()
        creator.stop()
        
        console.log(`
            ${chalk.bgBlue("How to Play")}
            
            I am a process on your computer.
            When asked, choose a number from the choices and the number you were closest to will decide your ${chalk.bgRed.black("FATE")}
            
            So get all the questions right...
            
            \n\n`);
            
            
        }



async function askName() {
    const answer = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is your name?',
        default() {
            return 'Player'
        },
    })

    name = answer.player_name
}


async function q1() {
    const answer = await inquirer.prompt({
        name: 'question1',
        type:'list',
        message:'Which of the following is an not an OOP Language:\n',
        choices:[
            'A. JAVA',
            'B. C++',
            'C. Python',
            'D. C',
        ],
    })
    return handleAnswer(answer.question1 == 'D. C') 
}

async function q2() {
    const answer = await inquirer.prompt({
        name: 'question2',
        type:'list',
        message:'Which of the following is the cleanest way to implement callbacks?\n',
        choices:[
            'A. callback',
            'B. asyc / await',
            'C. Promises',
            'D. for loop',
        ],
    })
    return handleAnswer(answer.question2 == 'C. Promises') 
}
async function q3() {
    const answer = await inquirer.prompt({
        name: 'question3',
        type:'list',
        message:'What is HTTP?:\n',
        choices:[
            'A. Protocol',
            'B. Programming Language',
            'C. Syntax',
            'D. Script',
        ],
    })
    return handleAnswer(answer.question3 == 'A. Protocol') 
}
async function q4() {
    const answer = await inquirer.prompt({
        name: 'question4',
        type:'list',
        message:'In SQL, what does the JOIN clause do?:\n',
        choices:[
            'A. Selects rows that have matching values in two tables.',
            'B. Combines the results of two queries.',
            'C. Deletes rows that have matching values in two tables.',
            'D. Creates a new table from the result of a query.',
        ],
    })
    return handleAnswer(answer.question4 == 'A. Selects rows that have matching values in two tables.') 
}
async function q5() {
    const answer = await inquirer.prompt({
        name: 'question5',
        type:'list',
        message:'Which of the following best describes a deadlock in operating systems?:\n',
        choices:[
            'A. A situation where a process is unable to execute because it is waiting for a resource that is held by another   process.',
            'B. A process that runs indefinitely without yielding the CPU.',
            'C. A situation where a process finishes execution but remains in the process table.',
            'D. A situation where the CPU utilization is zero',
        ],
    })
    return handleAnswer(answer.question5 == 'A. A situation where a process is unable to execute because it is waiting for a resource that is held by another   process.') 
}

async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Checking answer...').start() 
    await sleep()

    if(isCorrect) {
        spinner.success({text: `Nice work ${name}. That is a ${chalk.bgGreen.black("Correct answer!")}\n\n`}) 
    }
    else{
        spinner.error({text: `💀💀💀 Game Over. You lose ${name}. That is an ${chalk.bgRed.black("Incorrect answer :(")}\n\n`})
        process.exit(1)
    }
} 


function winnner(){
    console.clear()
    const msg = `Congrats ${name} !\n 1 , 0 0 0 , 0 0 0`

    figlet (msg, (err, data) => {
        console.log(gradient.pastel.multiline(data));        
    })
}




await welcome()
await askName()
await q1()
await q2()
await q3()
await q4()
await q5()
await winnner()