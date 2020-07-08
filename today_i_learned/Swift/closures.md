# Today I Learned about Closures in Swift

**Closures** are self-contained blocks of functionality that can be passed around and used in your code.

## Convert a *func* to a *Closure*
Function:

    func sum(firstNumber: Int, secondNumber: Int) -> Int {
	    return firstNumber + secondNumber
    }

Closure (anonymous func):

    {( firstNumber: Int, secondNumber: Int) -> Int in
	    return firstNumber + secondNumber
	})

We can remove the data type in parameters because when we pass in these inputs into this closure, the compiler will be able to figure out what the data type of these parameters should be (the same thing also applied with the return data type) when we use closure as parameter.

    func calculator(firstNum: Int, secondNum: Int, operation: (Int, Int) -> Int) -> Int {
	    return operation(firstNum, secondNum)
    }

    calculator(firstNum: 2, secondNum: 3, operation: {(no1, no2) in no1 * no2})

We can make the line shorter because in Swift, closures has the ability to provide anonymous parameter names.

> $0 refers to the first parameter and $1 referes to the second paramtere, and so on.

Then we can call the calculator function with shorter characters of code:

    calculator(firstNum: 2, secondNum: 3, operation: {$0 * $1})

### Trailing Closures
In Swift, there is a rule that if the last parameter in function is a closure. Then we can actually omit the last parameter name and we can close the input section, and simply just have the closure trailing at the end.

    calculator(firstNum: 2, secondNum: 3) {$0 * $1}

## Implementation Closures in map 

    let cast = ["Vivien", "Marlon", "Kim", "Karl"]
    let lowercaseNames = cast.map { $0.lowercased() }

[Map by Apple Developer Documentation](https://developer.apple.com/documentation/swift/array/3017522-map)
