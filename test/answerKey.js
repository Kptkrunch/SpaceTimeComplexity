const q1 = {
    time: 'constant', 
    space: 'constant'
}

/* this one is “constant” time and space, because the number of operations and
     value stored will be the same regardless of any value that could be passed in */

const q2 = {
    time: 'O(1)', 
    space: 'O(1)'
}

/* We have yet another problem with "constant" time and space.  This one is a little
    more tricky because we are willing to accept an argument that could be any number.
    the reason this problem is not "linear" is because no matter how large the input 
    is, we are hard capped at 3 iterations.  Given that we always look at the worst
    case scenario we go ahead and just say it will always be 3 iterations, which is
    "constant" time.  Space is constant because the number of values stored never changes. */

const q3 = {
    time: 'linear', 
    space: 'constant'
}

/* This one is linear for the opposite reason of problem_2.  Not only will we accept an
    argument that we have to iterate over, we ensure that value is never less than 10.
    The minimum value of 10 is in there as something meant to trip you up.  Good job
    if it didn't.  Here we are still in "constant" space because we never increase how much
    memory we need to use. */

const q4 = {
    time: 'constant', 
    space: 'constant'
}

/* Again we have another "constant" time and space problem.  The for loops are there to trick
    you into thinking the time complexity is quadratic or linear, but because the number of
    iterations is hard capped we end up with "constant" again.  Just like in question_1 we assume
    the worst, and if the worst is the same every time we have constant time complexity. The
    space in this is also "constant" even though we use more memory than we started with. Just
    like the time complexity, we are capped at how much memory can be consumed so it is "constant". */

const q5 = {
    time: 'O(n)', 
    space: 'O(n^2)'
}

/* With the badgerSong we get a time complexity of "linear" because we will have to call the 
    function recursively "n" times.  Even though this isn't a loop per se, we are performing
    operations based on the value passed in.  In this case we are also taking up more memory
    in order to manage all the recursive calls.  For every call we are adding not just 1 more
    "badger", we are adding all the "badgers" + 1.  That makes this no different than a nested
    for loop and ends up having "quadratic" space complexity, because we quad our data. */

const q6 = {
    time: 'O(1)', 
    space: 'O(1)'
}

/* So if you have made it this far you know all of my dirty tricks and now know why this
    problem has "constant" time and space complexity.  There are tons of nested loops and
    data being created making the arrays bigger and bigger, but at the end of the day we
    are still hard capping the results.  We assume it is "constant" at the worst number
    and amount of transaction/memory it could use. */

exports = {
    q1, q2, q3, q4, q5, q6
}