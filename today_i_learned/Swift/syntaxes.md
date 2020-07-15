## Computed Property

Make a file in Model folder and then create a struct.
    struct Somebody {
	    let firstName: String
	    let lastName: String 
	    let age: Int
	    // Computed Property
	    var fullName: String {
		    return "\(firstName) \(lastName)"
	    }
    }

## Typealias
to combine two or more protocols in a word/alias.
    struct Weather: Decodable, Encodable {
	    let temperature: Double
    }

OR

    struct Weather: Codable {
	    let temperature: Double
    }
    *Codable is a Typealias because it combines Decodable and Encodable protocols.*

