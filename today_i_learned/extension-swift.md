
## Extension .swift

    extension Double {
	    func round(to, places: Int) -> Double {
		    let precisionNum = pow(10, Double(places))
		    var n = self // self related to theDouble variable
		    n = n * precisionNum
		    n.round()
		    n = n / precisionNum
		    return n
	    }
    }

    var theDouble = 3.14159
    theDouble.round(to: 1)
