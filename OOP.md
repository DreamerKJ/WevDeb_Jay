# OOP Midterm #2 Notes

## Code Bits Cheat Sheet
*Basic Starters*
```c++
#include <iostream>

using namespace std;

int main() {
    cin >> value;
    cout << "Hey" << endl;
}
```

Reading from file
```c++
ifstream streamname("file.txt");
getline(streamname, line); // Read whole line.
streamname >> value // Or read from stream.
```


*Prototyping Functions*
```c++
void func1(int); // You don't even have to name the params!

...

void func1(int value) {
    // Does something
}
```

*Passing by...*

```c++
void func1(int); // Passing by value. Copies and stores.
            // Recommend for integers.

void func1(int&); // Passing by reference. Saves time.
            // Enables you to keep changing the variable.

void func2(const int&); // Passing by const reference. 
            // Still saves time.
```

*Overload*

```c++
void func1(int);
void func1(string); // These can coexist!
```

*Struct*
```c++
struct Fruit {
    string name;
}; // Don't forget the semicolon!

Fruit apple; // Initialized with garbage values.
apple.name = "Apple";

Fruit lemon = {"lemon"}; // Or like this.
Fruit kiwi = {.name = "kiwi"} // Or this.
```

*Class*

Classes are used when you want to keep some stuff private. (Data Hiding)
```c++
class Person {
public:
    Person(const string& newName) {
        name = newName;
    } // Constructor!

    Person(const string& newName): name(newName) {}; 
    // This is a faster constructor!
    // It's called an initialization list.

    Person(string newName = "Fred"): name(newName) {};
    // You can set default parameter values.

    const string& getName() const { return name; }
    // This is called a getter method.

    void doSomething() const {  } // And this is a method.
    // It doesn't change anything, so it's a const method.
            
private:
    string name; // ALL FIELDS SHOULD ALWAYS BE PRIVATE
}
```
*Operator Overloading*
```c++
// These are usually friends of the class!
ostream& operator<<(ostream& os, const A& rhs);

bool operator==(const A& lhs, const A& rhs);
A& operator++(); // pre-increment
A& operator++(int dummy); // post-increment
A& operator+=(const A& rhs); // addition combination 
A operator+(const A& rhs, const A& lhs); // addition
explicit operator bool() const; // bool conversion

```

*Nested Classes*
```c++
class A {
    class B {
        // Look ma, I'm a nested class!
    }
}
```

*Vector Things* 
```c++
vector<Person> people;

people.push_back(fred); // Pushes instance "fred" 
people.emplace_back("Fred"); // Creates instance

for(const Person& p: people) {
    // Does something with p.
}
```

*Pointers!*
```c++
int x = 7;
int* p; // p is a pointer! It stores an address.

p = &x; // &x is the address of x.
cout << *p; // This would dereference it, and give x.

const int* p // This is a pointer to a const int.
int* const p // This is a const point to an int.

p = nullptr // And this is a null pointer.

Class A{
    A* = this; // "this" is a pointer to the current object.
}
```

*Association*
```c++
class A {}
class B {
private:
    A* a; // B is associated with A. Pointers are used.
}
```

*The Heap*
```c++
Person* fred = new Person("Fred");
// Adds Instance to the Heap.

delete fred; // Deletes instance from the heap.
            // Needs to be address.
```

*Copy Control*
```c++
// Working on the assumption that name is stored as String*

Person(const Person& oldPerson) {
    name = new string(*oldPerson.name);
} // 1. Copy

Person& operator=(const Person& rhs) {
    if(this != rhs) { // Remember to check if self.
        delete name; // Delete previous values!

        name = new string(*rhs.name);
    }
    return *this; // Returns.
} // 2. Assignment

~Person() {
    delete name; 
} // 3. Destructor
```

*Vector Impl* 
```c++
class Vector {
public: 
    Vector() {
        the_size = 0;
        capacity = 0;
        data = new int[capacity];
    } // Starts at zero!

    ...
    // Remembers that the vector grows twice its size
    // if it reaches max capacity.
private:
    size_t size;
    size_t capacity;
    int* data;
}
```

*Cyclic Association*

Usually when this occurs, all the methods(or at least the ones that has the associated class) is prototypes and defined later, further down.
```c++
class A;

class B {
    void doesSomething();
    A* a;
}

class A {
    B* b;
}

B::doesSomething() { 
    // Like so! 
} 
```
Another way to deal with this is separate compilation
```c++
// B.h
namespace AB {
    class B {
        void doesSomething();
    }
}

// B.cpp
#include <A.h> // So it knows about A!

namespace AB {
    void B::doesSomething() {
        // Does something!
    }
}

// main.cpp
using namespace AB; // And use the namespace later!
```

*Inheritance* 
```c++
class Person {
    void doesSomething();
}

// Student is a subclass of Person. It has everything it has.
class Student: public Person {
    // You can overload methods so it does something else.
    void doesSomething() {
        studies();
        Person::doesSomething(); 
        // It can also call the parent class methods.
    }  
} 
```
*Polymorphism*
```c++
    student.doesSomething(); 
    // This would run the Student's version.

    void doSomething(Person& person) {
        person.doesSomething();
    }

    student.doSomething(); 
    // This, however, would run the Person's version
    // If we wanted it to run the Student's version...

    class Person() {
        virtual void doesSomething();
        // This would need to be virtual!
    }

    // To be absolutely sure. You can add this!
    class Student() {
        void doesSomething() override {};
        // This will throw a compile error 
        // if the base isn't virtual.
    }
```
Remember! These are possible
> base = derived; 

> basePtr = &derived; 

> basePtr = derivedPtr;

These aren't!
> derived = base; 

> derivedPtr = &base; 

>derivedPtr = basePtr;

*Visibility*
```c++
public: EVERYBODY!
protected: ONLY MY CHILDREN. 
            NOT EVEN MY SIBLINGS(OR PARENTS)
private: NOBODY!
```

*Abstract*
```c++
virtual void doesSomething() = 0;
// This is called a pure virtual method
// Or an "abstract" method.

// If there's at least one of these, it's an abstract class.
// This class cannot be instantiated. 
// We can have pointers and references to it though!
```

*Hiding*
```c++
class Person {
    void doesSomething(int a) {}
}

class Student: public Person {
    void doesSomething() {}
    // This "hides" doesSomething in Person.

    using Person::doesSomething;
    // This is one way to unhide it.
}

student.Person::doesSomething(1); 
// This is another
```

