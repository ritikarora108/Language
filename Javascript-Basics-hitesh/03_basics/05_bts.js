/*
    Javascript Execution Context

     ______
    | {}  |   -> Global Execution Context (referred by : this)
    |_____|
 
    -> Global Execution Context
    -> Function Execution Context
    -> Eval Execution Context         (property of global object)

    2 phases:
    1) Memory Creation Phase (MCP, Creation Phase or Memory Phase) -> memory allocation
    2) Execution Phase

    let val1=10
    let val2=5
    function addNum(num1,num2)
    {
        let total=num1+num2
        return total
    }
    let result1= addNum(val1,val2)
    let result2= addNum(1,2)


    Step by step BTS:

     Global Execution : ->this
        Phase 1-> Memory Phase
        {
            val1 : undefined
            val2 : undefined
            addNum : definition
            result1 : undefined
            result2 : undefined
        }

        Phase 2-> Execution Phase
        {
            val1 = 10
            val2 = 5
            (23 line) addNum -> {
                                        New variable environement | New execution thread
                                        | New Sandbox

                                    1) Memory Phase
                                    {
                                        num1: undefined
                                        num2: undefined
                                        total: undefined
                                    }
                                    2) Execution Phase
                                    {
                                        num1 =10
                                        num2 =5
                                        total=10+5=15
                                        return this total at its Parent Executional Context
                                    }
                                }

            Deletion of functional Environment                                   
            (24 line) addNum -> {
                                        New variable environement | New execution thread
                                        | New Sandbox

                                    1) Memory Phase
                                    {
                                        num1: undefined
                                        num2: undefined
                                        total: undefined
                                    }
                                    2) Execution Phase
                                    {
                                        num1 =1
                                        num2 =2
                                        total=1+2=3
                                        return this total at its Parent Execution Context
                                    }
                                } 
            Deletion of functional Environment
        }
        #Completion#
*/




function one()
{
    console.log("one")
    two()
}
function two()
{
    console.log("two")
    three()
}
function three()
{
    console.log("three")
}

one()
two()
three()
