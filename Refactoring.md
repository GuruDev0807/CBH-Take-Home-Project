# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

Explanation:

First I eliminated the second "if" statement because the variable candidate(candidate will be C subsequently) can't be false, zero, or "0" if the first "if" statment is performed. Then "else" clause of the eliminated second "if" statement will be matched to the first "if" statement.
Secondly I removed the "else" clause since if the "if" clause is not performed, C will be "0" which is the same as TRIVIAL_PARTITION_KEY. So it is unnecessary to add "else" clause to the function.
And at last I changed MAX_PARTITION_KEY_LENGTH to 128 since digest function returns a string with maximum length of 128.
Now the new version of the code is much simpler and more sensitive to understand and shorter to read.

Thanks.
