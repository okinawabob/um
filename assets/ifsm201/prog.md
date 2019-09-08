# Computer Programming

## Graphical programming environment

### Scratch

Go to <https://scratch.mit.edu> and Join Scratch using your personal email address. Scratch is a graphical programming environment that uses the flowchart model to describe the program sequencing of instructions. It also has excellent multimedia capability.

### Typora is excellent markdown editor

#### It will do math equations

 $\lim_{x \to \infty} \exp(-x) = 0$

$\begin{array}{*{20}c} {x = \frac{{ - b \pm \sqrt {b^2 - 4ac} }}{{2a}}} & {{\rm{when}}} & {ax^2 + bx + c = 0} \\ \end{array}$

#### Typora can do flow charts

```flow
st=>start: Start
op=>operation: Your Operation
cond=>condition: Yes or No?
e=>end

st->op->cond
cond(yes)->e
cond(no)->op


```

```sequence


Alice->Bob: Hello Bob, how are you?
Note right of Bob: Bob thinks
Bob-->Alice: I am good thanks!
```

### Code blocks


##### Python code

```{python} # Dice Roller
# Author: Robert Laurie
import random as rd, time as tm #Modules used
sInp = input("How many rolls? ")
nCnt=[0,0,0,0,0,0,0,0,0,0,0,0,0] #Roll counters list
nTimeStart = tm.time() #Execution timer start time
for nI in range(int(sInp)): #for loop structure
    nSm = rd.randint(1,6) + rd.randint(1,6) #Roll 2 Dice
    nCnt[nSm] = nCnt[nSm] + 1 #Increment list element
print("Roll two dice", sInp,"times results")
nScale = max(nCnt) // 15 # Scale bar graph ♦
if nScale == 0: nScale = 1
print("Each ♦ represents", nScale, "rolls",'\n'+'─'*35)
for nI in range(2, 13, 1): #for loop structure
    sBr = '♦'*(nCnt[nI]//nScale) # Create bar
    print("Roll{:3d} ={:7d} {}".format(nI, nCnt[nI], sBr))
nTime = (tm.time() - nTimeStart)*1000 # Runtime
print('─'*35,"\nRun time = {:6.3f} mSec".format(nTime))
```

##### JavaScript code



- [ ]  help needed?
- [ ] 

