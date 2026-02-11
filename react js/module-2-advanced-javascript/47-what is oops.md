# what is oops in javascript

1. oops stands for object oriented programming structured language.
2. oops is used inside of javascript  for react js class based components
3. oops prvides securities
4. oops is object based language
5. oops used to access parent class properties via its child class using inheritance.
6. oops provides same features
7. oops partial support javascript

## oops features in javascript ?

1. class
2. object
3. inheritance
4. polymorphism
5. encapsulation
6. abstraction


**What is class**

A class is a group of its member and member function
OR
A class is nothing whenever we create its object
OR
A class is a blueprint of any object.

Note: an object is always created by new keyword


**Syntax**
```
class classname
{
     member function()
     {
          statement;
     }
}
create an object of class
```

**Example of class**
``` 
class A
{
     constructor(name, age)
     {
          this.name = name;
          this.age = age;
     }
}

<!-- create an object -->
var obj = new A("Rohan",19);
console.log(obj);
```


**What is object**

An object instance of class i.e called object.

Note: an object is always created by new keyword

**Syntax**
```
class classname
{
     member function()
     {
          statements;
     }
}
create an object of clsss
var obj = new classname
```

**Example of object**
```
class rohan
{
     constructor(name,age,department,salary)
     {
          this.name = name;
          this.age = age;
          this.department = department;
          this.salary = salary;
     }
}

// create an object
var obj = new rohan("Rohan",19,"Frontend",50000);
console.log(obj);
```


**What is constructor in javascript**

A constructor is a same name of class when we create an object of class constructor automatically called.

```
class A
{
     constructor(name,age)
     {
          this.name = name;
          this.age = age;
     }
}
<!-- create an object -->
var obj = new A ("Rohan",19);
console.log(obj);
```


**What is inheritance in javascript**
An inheritance is used to access parent class properties via its child class that is called inheritance.

**types of inheritance**
1. single inheritance
2. multilevel ingeritance
3. multiple ingeritance (not support in javascript)

**Syntax**
```
class A
{
     constructor(name,age)
     {
          statements;
     }
}
class B extends A
{
     constructor(name,age,department,salary)
     {
          super(); //that can be access all the properties of class A
          statements;
     }
}
<!-- class the object -->
var obj = new B();
```

**Examples of single inheritance**
```
<script>

class A
{
     constructor(name,age)
     {
          this.name = name;
          this.age = age;
     }
}
class B extends A
{
     constructor(name,age,department,salary)
     {
          super(name,age); //that can be access all the properties of class A
          this.department = department;
          this.salary = salary;
     }
}

<!-- call the object -->
var obj = new B("Rohan",19,"Frontend",50000);
console.log(obj);

<!-- Note: a parent class properties used by its child class via extends keywords -->
</script>
```

**Example of multilevel inheritance**
**A=>B=>C=>D**
```
class A
{
     constructor(name,age)
     {
          this.name = name;
          this.age = age;
     }
}

class B extends A
{
     constructor(name,age,department,salary)
     {
          super(name,age); // accessing class A properties
          this.department = department;
          this.salary = salary;
     }
}

class C extends B
{
     constructor(name,age,department,salary,address)
     {
          super(name,age,department,salary); // accessing class B properties
          this.address = address;
     } 
}

// call the object
var obj = new C("Rohan",19,"Frontend",50000,"150 feet ring road rajkot");
console.log(obj);
// note: a parent class properties used by its child class via extends keyword
```


**What is super() method do in javascript ?**

super is an method that can be access parent class properties via its child class we can not access without super().

```
<script>

class A
{
     constructor(name, age)
     {
          this.name = name;
          this.age = age;
     }
}
class B extends A
{
     constructor(name, age, department, salary)
     {
          super(name, age); // that can be access all the properties of class A
          this.department = department;
          this.salary = salary;
     }
}

// call the object
var obj = new B("Rohan",19,"Frontend",50000);
console.log(obj);

// note: a parent class properties used its child class via extends keyword
</script>
```


**What is polymorphism in javascript**
## definition:
A polymorphism is used to many form to design one application using different-2 function there we used polymorphism.

**type os polymorphism**
1. method overloading
2. method overriding

**method overloading**
A method overloading used same function pass with different arguments there we used method overloading.

```
<script>
class A 
{
    constructor(a,b)
    {
       this.a=a;
       this.b=b;
       
    }
}    
class B extends A 
{
    constructor(a,b,c)
    {
       super(a,b) 
       this.c=c;
       c=a+b;
    }
}

var obj=new B(15,10,5);
console.log(obj);
</script>
```

**method overriding**
A method overriding used same function pass with same arguments there we used method overriding.

```
<script>
class A 
{
    constructor(a,b)
    {
       this.a=a;
       this.b=b;
       
    }
}    
class B extends A 
{
    constructor(a,b)
    {
       super(a,b)
    }
}

var obj=new B(15,10 );
console.log(obj);
</script>
```