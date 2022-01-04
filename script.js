class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {

    }

    appendNmuber(number) {

    }

    chooseOperation(operation) {

    }

    compute() {

    }

    getDisplayNumber(number) {

    }

    updateDisplay() {

    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

numberButtons.forEach(button => {
    button.addEventListener('click', () => {

    })
  })
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {

    })
  })
  
  equalsButton.addEventListener('click', button => {

  })
  
  allClearButton.addEventListener('click', button => {

  })
  
  deleteButton.addEventListener('click', button => {

  })