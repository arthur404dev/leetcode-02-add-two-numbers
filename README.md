# Add Two Numbers

Original Problem: [LeetCode - Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)

## Description

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:

![example-1](./assets/addtwonumber1.jpg)

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.

## Solution

**You can check the solutions in different programming languages [here](https://github.com/arthur404dev/leetcode-02-add-two-numbers/tree/main/solutions).**

```python3
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        # Alright, we're starting off by creating a dummy head for our result linked list.
        dummyHead = ListNode(0)
        # Now, let's have a pointer called 'tail' that will help us to keep track of where to append new nodes.
        tail = dummyHead
        # We'll also need a variable 'carry' to handle the carry-over when summing digits.
        carry = 0

        # Now comes the fun part, we'll loop through both linked lists until we exhaust them and have no carry left.
        while l1 is not None or l2 is not None or carry != 0:
            # Let's grab the digits from l1 and l2, or 0 if they're None.
            digit1 = l1.val if l1 is not None else 0
            digit2 = l2.val if l2 is not None else 0

            # Time to do some math! We add the digits from both lists along with the carry-over.
            sum = digit1 + digit2 + carry
            # We split the sum into a digit and a carry.
            digit = sum % 10  # This gives us the digit part of the sum.
            carry = sum // 10  # And this is the carry part.

            # Now, let's create a new node with our calculated digit and append it to our result linked list.
            newNode = ListNode(digit)
            tail.next = newNode
            tail = tail.next

            # Move to the next nodes in the input linked lists if they exist.
            l1 = l1.next if l1 is not None else None
            l2 = l2.next if l2 is not None else None

        # Finally, we return the result linked list, excluding the dummy head.
        result = dummyHead.next
        dummyHead.next = None
        return result

# Time Complexity: O(max(n, m)), where n and m are the lengths of the input linked lists.
#    We iterate through both lists simultaneously, performing a constant amount of work for each node.
# Space Complexity: O(max(n, m)), where n and m are the lengths of the input linked lists.
#    The space used by the output linked list is proportional to the maximum length between the two input lists.
```
## Contribution

If you want to contribute a soultion in another programming language, feel free to create a Pull Request following the convention:

1. Files should be named with the pattern: `[language-name]-solution.[language-extension]`

    *E.g: For a golang submission the name should be either: `go-solution.go` or `golang-solution.go`*

2. Branches should be named using the pattern: `feat:[language-name]-solution`

    *E.g: For a golang submission the name of the branch should be: `feat:golang-solution`*

3. Feel free to use the [Issues](https://github.com/arthur404dev/leetcode-02-add-two-numbers/issues) section as a discussion forum for each topic.