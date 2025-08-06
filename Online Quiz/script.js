const quizData = [
    
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d"
  },
  { 
question: "What does <a> tag define?", 
a: "Anchor (link)", 
b: "Article", 
c: "Audio", 
d: "Aside", 
correct: "a" 
},
{ 
question: "Which tag is used for a table row?", 
a: "<td>", 
b: "<tr>", 
c: "<th>", 
d: "<table>", 
correct: "b" 
},
{ 
question: "How do you insert an image?", 
a: "<image>", 
b: "<img>", 
c: "<src>", 
d: "<picture>", 
correct: "b" 
},
{ 
question: "Which attribute defines alternative text for image?", 
a: "title", 
b: "alt", 
c: "src", 
d: "desc", 
correct: "b" 
},
{ 
question: "What tag is used for the largest heading?", 
a: "<h6>", 
b: "<header>", 
c: "<h1>", 
d: "<head>", 
correct: "c" 
},
{ 
question: "How do you create a numbered list?", 
a: "<ul>", 
b: "<ol>", 
c: "<li>", 
d: "<list>", 
correct: "b" 
},
{ 
question: "Which tag is for a dropdown menu?", 
a: "<select>", 
b: "<input>", 
c: "<option>", 
d: "<menu>", 
correct: "a" 
},
{ 
question: "How do you make text bold?", 
a: "<b>", 
b: "<strong>", 
c: "Both a and b", 
d: "<bold>", 
correct: "c" 
},
{ 
question: "Which element represents a paragraph?", 
a: "<p>", 
b: "<para>", 
c: "<text>", 
d: "<div>", 
correct: "a" 
},
{ 
question: "What does <!DOCTYPE html> declare?", 
a: "Title", 
b: "Character set", 
c: "Document type", 
d: "Style", 
correct: "c" 
},
{ 
question: "Which attribute specifies the URL of a link?", 
a: "href", 
b: "src", 
c: "link", 
d: "url", 
correct: "a" 
},
{ 
question: "How do you comment in HTML?", 
a: "// comment", 
b: "/* comment */", 
c: "<!-- comment -->", 
d: "# comment", 
correct: "c" 
},
{ 
question: "Which tag contains metadata and title?", 
a: "<body>", 
b: "<head>", 
c: "<meta>", 
d: "<section>", 
correct: "b" 
},
{ 
question: "Which tag is used for a line break?", 
a: "<break>", 
b: "<lb>", 
c: "<br>", 
d: "<newline>", 
correct: "c" 
},
{ 
question: "How do you create a checkbox?", 
a: "<input type='checkbox'>", 
b: "<checkbox>", 
c: "<input check>", 
d: "<box>", 
correct: "a" 
},
{ 
question: "What tag wraps site navigation?", 
a: "<nav>", 
b: "<menu>", 
c: "<ul>", 
d: "<links>", 
correct: "a" 
},
{ 
question: "Which attribute sets an element's ID?", 
a: "class", 
b: "name", 
c: "id", 
d: "key", 
correct: "c" 
},
{ 
question: "Which tag defines footer content?", 
a: "<bottom>", 
b: "<footer>", 
c: "<section>", 
d: "<aside>", 
correct: "b" 
},
{ 
question: "How do you embed a video?", 
a: "<video>", 
b: "<media>", 
c: "<iframe>", 
d: "Both a and c", 
correct: "d" 
},
{ 
question: "Which tag is used for an input field?", 
a: "<input>", 
b: "<form>", 
c: "<field>", 
d: "<textbox>", 
correct: "a" 
},
{ 
question: "How to link external CSS?", 
a: "<link rel='stylesheet' href='style.css'>", 
b: "<css src='style.css'>", 
c: "<style src>", 
d: "<import>", 
correct: "a" 
},
{ 
question: "Which tag is used for a form?", 
a: "<form>", 
b: "<input>", 
c: "<action>", 
d: "<submit>", 
correct: "a" 
},
{ 
question: "Which element is used for defining an article?", 
a: "<article>", 
b: "<section>", 
c: "<div>", 
d: "<aside>", 
correct: "a" 
},
{ 
question: "How do you open a new tab from a link?", 
a: "target='_blank'", 
b: "newtab='yes'", 
c: "open='new'", 
d: "rel='tab'", 
correct: "a" 
},

  {
    question: "Python Question 1: What is the output of print(2**3)?",
    a: "6",
    b: "8",
    c: "9",
    d: "Error",
    correct: "b"
    },
    {
 question: "What is the output of print(2 ** 3)?",
 a: "5",
 b: "6",
 c: "8", 
d: "9",
correct: "c" 
},
{ 
question: "Which keyword is used to define a function?", 
a: "func", 
b: "def", 
c: "function",
d: "declare", 
correct: "b"
},
{ 
question: "What data type is returned by: type( [1,2,3] )?", 
a: "tuple", 
b: "list", 
c: "dict", 
d: "set", 
correct: "b" 
},
{ 
question: "Which of the following is immutable?", 
a: "list", 
b: "set", 
c: "tuple", 
d: "dict", 
correct: "c" 
},
{ 
question: "How do you start a comment in Python?", 
a: "//", 
b: "/*", 
c: "#", 
d: "<!--", 
correct: "c" 
},
{ 
question: "Which method adds an element to the end of a list?", 
a: "add()", 
b: "append()", 
c: "insert()", 
d: "push()", 
correct: "b" 
},
{ 
question: "What does `len('hello')` return?", 
a: "4", 
b: "5", 
c: "6", 
d: "Error", 
correct: "b" 
},
{ question: "What is the output of: 'a' + 'b'?", 
a: "ab", 
b: "a b", 
c: "['a','b']", 
d: "Error", 
correct: "a" 
},
{ 
question: "Which statement is used for exception handling?", 
a: "catch", 
b: "try/except", 
c: "error", 
d: "handle", 
correct: "b" 
},
{ 
question: "What keyword is used to create a class?", 
a: "struct", 
b: "class", 
c: "object", 
d: "type", 
correct: "b" 
},
{ 
question: "Which operator is used for floor division?", 
a: "/", 
b: "//", 
c: "%", 
d: "**", 
correct: "b" 
},
{ 
question: "What is the correct way to import math module?", 
a: "include math", 
b: "import math", 
c: "#import math", 
d: "require('math')", 
correct: "b" 
},
{ 
question: "How do you create a dictionary?", 
a: "[1,2]", 
b: "(key:value)", 
c: "{'a':1}", 
d: "<a=1>", 
correct: "c" 
},
{ 
question: "What is a list comprehension used for?", 
a: "Looping only", 
b: "Conditional statements", 
c: "Building lists compactly", 
d: "Function definition", 
correct: "c" 
},
{ 
question: "Which of these is true about Python?", 
a: "Compiled language", 
b: "Statically typed", 
c: "Interpreted language", 
d: "Does not support OOP", 
correct: "c" 
},
{ 
question: "Which built-in converts to integer?", 
a: "int()", 
b: "str()", 
c: "float()", 
d: "bool()", 
correct: "a" 
},
{ 
question: "What is slicing syntax to get first 3 chars of s?", 
a: "s[0:3]", 
b: "s(0,3)", 
c: "s[:2]", 
d: "s[1:3]", 
correct: "a" 
},
{ 
question: "How do you open a file for reading?", 
a: "open('file','w')", 
b: "open('file','r')", 
c: "read('file')", 
d: "open('file') as r", 
correct: "b" 
},
{ 
question: "Which keyword makes a variable local to function?", 
a: "global", 
b: "local", 
c: "def", 
d: "None of these", 
correct: "d" 
},
{ 
question: "What is the output of bool(0)?", 
a: "True", 
b: "False", 
c: "0", 
d: "Error", 
correct: "b" 
},
{ 
question: "Which of these removes whitespace from ends?", 
a: "strip()", 
b: "trim()", 
c: "cut()", 
d: "remove()", 
correct: "a" 
},
{ 
question: "How to iterate over keys in dict d?", 
a: "for x in d:", 
b: "for x in d.keys():", 
c: "Both a and b", 
d: "None", 
correct: "c" 
},
{ 
question: "Which is correct to check equality?", 
a: "if a = b:", 
b: "if a == b:", 
c: "if a := b:", 
d: "if a equals b:", 
correct: "b" 
},
{ 
question: "What does `enumerate(['a','b'])` return?", 
a: "Indices only", 
b: "Values only", 
c: "Pairs of index and value", 
d: "Error", 
correct: "c" 
},
{ 
question: "How do you define a lambda function?", 
a: "lambda x: x+1", 
b: "def lambda(x):", 
c: "function(x){x+1}", 
d: "-> x+1", 
correct: "a" 
},
{
    question: "Python Question 2: Which keyword is used to define a function in Python?",
    a: "define",
    b: "function",
    c: "def",
    d: "fun",
    correct: "c"
    },
    { 
question: "Which property sets background color?", 
a: "bgcolor", 
b: "background-color", 
c: "color", 
d: "bcolor", 
correct: "b" 
},
{ 
question: "How do you select an element with id 'main'?", 
a: ".main", 
b: "#main", 
c: "*main", 
d: "main", 
correct: "b" 
},
{ 
question: "Which property changes text size?", 
a: "text-style", 
b: "font-size", 
c: "size", 
d: "font-style", 
correct: "b" 
},
{ 
question: "How do you make text bold in CSS?", 
a: "font-weight: bold;", 
b: "text-style: bold;", 
c: "font: bold;", 
d: "weight: bold;", 
correct: "a" 
},
{ 
question: "Which property adds space inside element?", 
a: "margin", 
b: "padding", 
c: "border", 
d: "gap", 
correct: "b" 
},
{ 
question: "How to center text?", 
a: "text-align: center;", 
b: "align: center;", 
c: "justify: center;", 
d: "center-text;", 
correct: "a" 
},
{ 
question: "Which property controls element width?", 
a: "height", 
b: "size", 
c: "width", 
d: "length", 
correct: "c" 
},
{ 
question: "What does `display: none;` do?", 
a: "Hide element and remove from flow", 
b: "Make transparent", 
c: "Disable", 
d: "Keep space but invisible", 
correct: "a" 
},
{ 
question: "Which selector targets all <p> elements?", 
a: ".p", 
b: "#p", 
c: "p", 
d: "*p", 
correct: "c" 
},
{ 
question: "How do you apply a hover effect?", 
a: ":hover", 
b: ":active", 
c: ":focus", 
d: ":click", 
correct: "a" 
},
{ 
question: "Which property sets border style?", 
a: "border-type", 
b: "border-style", 
c: "border-layout", 
d: "border-mode", 
correct: "b" 
},
{ 
question: "What does `margin: 0 auto;` do?", 
a: "Removes margin", 
b: "Centers block horizontally", 
c: "Sets vertical padding", 
d: "Aligns left", 
correct: "b" 
},
{ 
question: "How do you change font family?", 
a: "font: Arial;", 
b: "font-family: Arial;", 
c: "text-family: Arial;", 
d: "typeface: Arial;", 
correct: "b" 
},
{ 
question: "Which unit is relative to root font size?", 
a: "px", 
b: "em", 
c: "rem", 
d: "%", 
correct: "c" 
},
{ 
question: "How do you make a flex container?", 
a: "display: block;", 
b: "display: flex;", 
c: "display: grid;", 
d: "layout: flex;", 
correct: "b" 
},
{ 
question: "Which property controls spacing between flex items?", 
a: "gap", 
b: "margin", 
c: "space", 
d: "padding", 
correct: "a" 
},
{ 
question: "How to set element opacity to half?", 
a: "visibility: 0.5;", 
b: "opacity: 0.5;", 
c: "alpha: 50%;", 
d: "filter: half;", 
correct: "b" 
},
{ 
question: "Which property changes text color?", 
a: "font-color", 
b: "text-color", 
c: "color", 
d: "tint", 
correct: "c" 
},
{ 
question: "What is the default display of a <div>?", 
a: "inline", 
b: "block", 
c: "flex", 
d: "none", 
correct: "b" 
},
{ 
question: "How to make rounded corners?", 
a: "border-radius", 
b: "corner-radius", 
c: "round-corner", 
d: "radius-border", 
correct: "a" 
},
{ 
question: "Which property adds shadow to box?", 
a: "box-style", 
b: "shadow", 
c: "box-shadow", 
d: "text-shadow", 
correct: "c" 
},
{ 
question: "How to apply a transition?", 
a: "transition: all 0.3s;", 
b: "animate: all 0.3s;", 
c: "move: all 0.3s;", 
d: "change: all 0.3s;", 
correct: "a" 
},
{ 
question: "Which pseudo-class selects first child?", 
a: ":first-child", 
b: ":first", 
c: ":child:first", 
d: ":start", 
correct: "a" 
},
{ 
question: "How to hide overflow content?", 
a: "overflow: hide;", 
b: "overflow: hidden;", 
c: "overflow: none;", 
d: "overflow: clip;", 
correct: "b" 
},
{ 
question: "What is JVM?", 
a: "Java Visual Machine", 
b: "Java Variable Model", 
c: "Java Virtual Machine", 
d: "Joint Value Method", 
correct: "c" 
},
{ 
question: "Which keyword is used for inheritance?", 
a: "implements", 
b: "extends", 
c: "inherits", 
d: "super", 
correct: "b" 
},
{ 
question: "What is the entry point of Java program?", 
a: "start()", 
b: "main()", 
c: "run()", 
d: "init()", 
correct: "b" 
},
{ 
question: "Which data type is used for decimal numbers?", 
a: "int", 
b: "String", 
c: "float", 
d: "char", 
correct: "c" 
},
{ 
question: "What keyword is used to create an object?", 
a: "new", 
b: "create", 
c: "make", 
d: "init", 
correct: "a" 
},
{ 
question: "Which is used to handle exceptions?", 
a: "try/catch", 
b: "if/else", 
c: "switch", 
d: "loop", 
correct: "a" 
},
{ 
question: "Which collection stores key-value pairs?", 
a: "List", 
b: "Set", 
c: "Map", 
d: "Array", 
correct: "c" 
},
{ 
question: "What does `static` mean?", 
a: "Instance-specific", 
b: "Class-level", 
c: "Immutable", 
d: "Private", 
correct: "b" 
},
{ 
question: "Which operator compares equality for objects?", 
a: "==", 
b: "=", 
c: "equals()", 
d: "===", 
correct: "c" 
},
{ 
question: "Which access modifier is most restrictive?", 
a: "public", 
b: "protected", 
c: "default", 
d: "private", 
correct: "d" 
},
{ 
question: "Which loop runs while condition is true?", 
a: "for", 
b: "do-while", 
c: "while", 
d: "foreach", 
correct: "c" 
},
{ 
question: "How do you inherit an interface?", 
a: "extends", 
b: "implements", 
c: "inherits", 
d: "uses", 
correct: "b" 
},
{ 
question: "Which is valid array declaration?", 
a: "int[] arr = new int[5];", 
b: "int arr = new int[5];", 
c: "array arr = new int[5];", 
d: "int arr[] = new array(5);", 
correct: "a" 
},
{ 
question: "What does `public static void main` mean?", 
a: "Private method", 
b: "Start method", 
c: "Entry point", 
d: "Undefined", 
correct: "c" 
},
{ 
question: "Which keyword prevents method overriding?", 
a: "static", 
b: "final", 
c: "native", 
d: "transient", 
correct: "b" 
},
{ 
question: "What is garbage collection?", 
a: "Manual memory free", 
b: "Automatic memory management", 
c: "File cleanup", 
d: "Object creation", 
correct: "b" 
},
{ 
question: "Which exception is unchecked?", 
a: "IOException", 
b: "RuntimeException", 
c: "SQLException", 
d: "FileNotFoundException", 
correct: "b" 
},
{ 
question: "What is the default value of boolean?", 
a: "true", 
b: "false", 
c: "null", 
d: "0", 
correct: "b" 
},
{ 
question: "Which keyword is used to call superclass constructor?", 
a: "super", 
b: "this", 
c: "parent", 
d: "base", 
correct: "a" 
},
{ 
question: "Which package is imported by default?", 
a: "java.util", 
b: "java.lang", 
c: "java.io", 
d: "java.net", 
correct: "b" 
},
{ 
question: "Which is used for multi-threading?", 
a: "Runnable", 
b: "Stream", 
c: "Scanner", 
d: "File", 
correct: "a" 
},
{ 
question: "What does `this` refer to?", 
a: "Class", 
b: "Static context", 
c: "Current object", 
d: "Superclass", 
correct: "c" 
},
{ 
question: "Which keyword is used to define a constant?", 
a: "const", 
b: "final", 
c: "immutable", 
d: "static", 
correct: "b" 
},
{ 
question: "Which method starts a thread?", 
a: "run()", 
b: "start()", 
c: "init()", 
d: "begin()", 
correct: "b" 
},
    { 
question: "What is the type of [] in JavaScript?", 
a: "array", 
b: "object", 
c: "list", 
d: "undefined", 
correct: "b" 
},
{ 
question: "Which keyword declares a block-scoped variable?", 
a: "var", 
b: "let", 
c: "def", 
d: "const", 
correct: "b" 
},
{ 
question: "What is the output of '2' + 2?", 
a: "4", 
b: "22", 
c: "NaN", 
d: "Error", 
correct: "b" 
},
{ 
question: "Which method converts JSON string to object?", 
a: "JSON.parse()", 
b: "JSON.stringify()", 
c: "toObject()", 
d: "parseJSON()", 
correct: "a" 
},
{ 
question: "How do you write a comment in JS?", 
a: "# comment", 
b: "// comment", 
c: "<!-- -->", 
d: "/* */", 
correct: "b" 
},
{ 
question: "Which function is used to delay execution?", 
a: "setTimeout()", 
b: "wait()", 
c: "delay()", 
d: "sleep()", 
correct: "a" 
},
{ 
question: "What does === do?", 
a: "Assignment", 
b: "Loose equality", 
c: "Strict equality", 
d: "Comparison of types only", 
correct: "c" 
},
{ 
question: "Which keyword creates a constant reference?", 
a: "var", 
b: "let", 
c: "const", 
d: "final", 
correct: "c" 
},
{ 
question: "How do you select an element by id 'main'?", 
a: "getElement('main')", 
b: "document.query('#main')", 
c: "document.getElementById('main')", 
d: "$('#main')", 
correct: "c" 
},
{ 
question: "What is NaN short for?", 
a: "Not a Number", 
b: "Null and Null", 
c: "Nothing", 
d: "No Answer", 
correct: "a" 
},
{ 
question: "Which array method adds to end?", 
a: "push()", 
b: "pop()", 
c: "shift()", 
d: "unshift()", 
correct: "a" 
},
{ 
question: "How do you declare a function?", 
a: "func f()", 
b: "function f()", 
c: "define f()", 
d: "fn f()", 
correct: "b" 
},
{ 
question: "What is event bubbling?", 
a: "Event stops", 
b: "Event moves inward", 
c: "Event moves outward from target", 
d: "Event deleted", 
correct: "c" 
},
{ 
question: "Which symbol is used for template literals?", 
a: "' '", 
b: '" "', 
c: "` `", 
d: "/ /", 
correct: "c" 
},
{ 
question: "What does DOM stand for?", 
a: "Document Object Model", 
b: "Data Object Model", 
c: "Document Order Management", 
d: "Display Object Matrix", 
correct: "a" 
},
{ 
question: "Which method removes first element from array?", 
a: "pop()", 
b: "shift()", 
c: "slice()", 
d: "splice()", 
correct: "b" 
},
{ 
question: "How do you check if x is undefined?", 
a: "x == null", 
b: "typeof x === 'undefined'", 
c: "x.isUndefined()", 
d: "x === None", 
correct: "b" 
},
{ 
question: "Which operator is used for short-circuit OR?", 
a: "|", 
b: "||", 
c: "&", 
d: "&&", 
correct: "b" 
},
{ 
question: "What is closure?", 
a: "Function inside object", 
b: "Function with preserved scope", 
c: "Loop structure", 
d: "Array method", 
correct: "b" 
},
{ 
question: "Which keyword throws an exception?", 
a: "catch", 
b: "throw", 
c: "error", 
d: "raise", 
correct: "b" 
},
{ 
question: "How to convert number to string?", 
a: "toString()", 
b: "stringify()", 
c: "parse()", 
d: "toStr()", 
correct: "a" 
},
{ 
question: "What does JSON.stringify do?", 
a: "Parse JSON", 
b: "Convert object to string", 
c: "Fetch data", 
d: "Validate JSON", 
correct: "b" 
},
{ 
question: "Which loop is guaranteed to run at least once?", 
a: "for", 
b: "while", 
c: "do...while", 
d: "foreach", 
correct: "c" 
},
{ 
question: "How do you add a property to an object?", 
a: "obj:add(key)", 
b: "obj.key = value", 
c: "obj->key = value", 
d: "set(obj,key)", 
correct: "b" 
},
    {
    question: "JavaScript Question 1: What does 'typeof []' return?",
    a: "'array'",
    b: "'object'",
    c: "'list'",
    d: "'undefined'",
    correct: "b"
    },
    {
    question: "JavaScript Question 2: What is the output of '2' + 2?",
    a: "4",
    b: "22",
    c: "NaN",
    d: "Error",
    correct: "b"
    },
    {
      question: "HTML Question 1: What does the <a> tag define?",
      a: "Anchor (link)",
      b: "Audio",
      c: "Article",
      d: "Aside",
      correct: "a"
    },
    {
      question: "HTML Question 2: Which tag is used to create a table row?",
      a: "<table>",
      b: "<tr>",
      c: "<td>",
      d: "<th>",
      correct: "b"
    },

    {
      question: "CSS Question 1: Which property changes text color?",
      a: "font-color",
      b: "text-style",
      c: "color",
      d: "text-color",
      correct: "c"
    },
    {
      question: "CSS Question 2: How do you select an element with id='main'?",
      a: ".main",
      b: "#main",
      c: "main",
      d: "*main",
      correct: "b"
    },
    {
      question: "Java Question 1: What is JVM?",
      a: "Java Visual Machine",
      b: "Java Variable Model",
      c: "Java Virtual Machine",
      d: "Joint Value Method",
      correct: "c"
    },
    {
      question: "Java Question 2: Which keyword is used to inherit a class?",
      a: "inherit",
      b: "this",
      c: "extends",
      d: "super",
      correct: "c"
    },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Computer Style Sheets",
    d: "Creative Style Sheets",
    correct: "b"
  },
  {
    question: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "Home Tool Markup Language",
    c: "Hyperlinks and Text Markup Language",
    d: "High Text Machine Language",
    correct: "a"
  },
  {
    question: "What year was JavaScript created?",
    a: "1995",
    b: "2005",
    c: "1989",
    d: "1999",
    correct: "a"
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    a: "<link>",
    b: "<a>",
    c: "<href>",
    d: "<hyper>",
    correct: "b"
  },
  {
    question: "Which of these is a JavaScript framework?",
    a: "Laravel",
    b: "React",
    c: "Django",
    d: "Bootstrap",
    correct: "b"
  },
  {
    question: "Which of the following is a front-end language?",
    a: "Python",
    b: "PHP",
    c: "JavaScript",
    d: "Node.js",
    correct: "c"
  },
  {
    question: "Which tag is used for inserting a line break in HTML?",
    a: "<br>",
    b: "<break>",
    c: "<lb>",
    d: "<newline>",
    correct: "a"
  },
  {
    question: "Which company developed JavaScript?",
    a: "Google",
    b: "Microsoft",
    c: "Netscape",
    d: "Sun Microsystems",
    correct: "c"
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    a: "class",
    b: "font",
    c: "style",
    d: "styles",
    correct: "c"
  }
];

const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll("input[name='answer']");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const current = quizData[currentQuiz];
  questionEl.innerText = current.question;
  a_text.innerText = current.a;
  b_text.innerText = current.b;
  c_text.innerText = current.c;
  d_text.innerText = current.d;
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach((el) => {
    if (el.checked) answer = el.id;
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((el) => (el.checked = false));
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      document.querySelector(".quiz-container").innerHTML = `
        <h2>You scored ${score}/${quizData.length}</h2>
        <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});
