# Model

Import Format: `JSON`

### Template

@TODO

### Major
- ID 
    - Unique
    - Self-Assigned
    - integer

- Major Code
    - String
    - `CSCI`

- Full name 
    - String
    - `Computer science`

### Course
- ID
    - Unique
    - Self-Assigned
    - integer

- Course Code 
    - String
    - Unique
    - `IHSS-1964`

**For course type `IHSS`, etc, use computed value to identify them.**

- Course Name
    - String
    - `Are Human Rational?`
    
- Course Prerequisit 
    - Object
        - Major array[int]
        - Course array[mixed]
        Somehow tricky, since some of them are optional. AND|OR|MAJOR|, etc
        Using `|` for `OR` TYPE
            - `123|321`
        - Grade limit
            - array[int]
            - White list 
            - `1` // For freshmen only

- Offering at
    - array[string]
    - `Spring, Fall, etc`

- Course Credit
    - integer
    - `4
    
### Semester

- Contain several courses.
- Sum() all courses' credits. 